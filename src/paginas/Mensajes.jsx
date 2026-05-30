import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";

function Mensajes({ t }) {
  const [mensajes, setMensajes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    cargarMensajes();
  }, []);

  const cargarMensajes = async () => {
    try {
      const q = query(collection(db, "mensajes"), orderBy("fecha", "desc"));
      const snapshot = await getDocs(q);
      setMensajes(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (e) {
      console.log("Error cargando mensajes", e);
    }
  };

  const handleEnviar = async () => {
    if (!nombre.trim() || !mensaje.trim()) return;
    setEnviando(true);
    try {
      await addDoc(collection(db, "mensajes"), {
        nombre: nombre.trim(),
        mensaje: mensaje.trim(),
        fecha: new Date()
      });
      setMensajes(prev => [{ nombre: nombre.trim(), mensaje: mensaje.trim(), fecha: new Date() }, ...prev]);
      setMensaje("");
      setEnviado(true);
      setTimeout(() => setEnviado(false), 3000);
    } catch (e) {
      alert("Error al enviar el mensaje.");
    }
    setEnviando(false);
  };

  const inputStyle = {
    width:"100%", padding:"12px 16px", borderRadius:"10px",
    border:"1px solid #e8d5c4", fontSize:"14px", color:"#4a3728",
    background:"#fdf6f0", boxSizing:"border-box",
    fontFamily:"Georgia, serif", outline:"none"
  };

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>{t.dejadPalabras}</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>{t.muroPalabras}</h2>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"24px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>{t.escribeMensaje}</p>
          <input type="text" placeholder={t.nombreApellidos} value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ ...inputStyle, marginBottom:"10px" }} />
          <textarea placeholder={t.tuMensaje} value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows={4} style={{ ...inputStyle, resize:"none", marginBottom:"14px" }} />
          {enviado && (
            <p style={{ color:"#b89a7a", fontSize:"13px", textAlign:"center", margin:"0 0 10px" }}>✓ ¡Gracias, {nombre}! 🤍</p>
          )}
          <button onClick={handleEnviar} disabled={!nombre.trim() || !mensaje.trim() || enviando}
            style={{ width:"100%", background: nombre.trim() && mensaje.trim() ? "#4a3728" : "#e8d5c4", color: nombre.trim() && mensaje.trim() ? "white" : "#b89a7a", border:"none", borderRadius:"30px", padding:"14px", fontSize:"15px", cursor: nombre.trim() && mensaje.trim() ? "pointer" : "not-allowed", fontFamily:"Georgia, serif" }}>
            {enviando ? t.enviando : t.enviarMensaje}
          </button>
        </div>

        {mensajes.length === 0 ? (
          <div style={{ textAlign:"center", padding:"40px 20px", background:"white", borderRadius:"14px", border:"1px solid #e8d5c4" }}>
            <div style={{ fontSize:"40px", marginBottom:"12px" }}>💬</div>
            <p style={{ color:"#7a5c4a", fontSize:"14px", margin:0 }}>{t.sinMensajes}</p>
          </div>
        ) : (
          mensajes.map((m, i) => (
            <div key={i} style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"20px 24px", marginBottom:"12px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"8px" }}>
                <span style={{ fontSize:"15px", color:"#4a3728" }}>{m.nombre}</span>
                <span style={{ fontSize:"11px", color:"#b89a7a" }}>
                  {m.fecha?.toDate ? m.fecha.toDate().toLocaleDateString("es-ES") : new Date(m.fecha).toLocaleDateString("es-ES")}
                </span>
              </div>
              <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.7", margin:0 }}>{m.mensaje}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Mensajes;