import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Confirmacion({ t }) {
  const [nombre, setNombre] = useState("");
  const [acompanantes, setAcompanantes] = useState(0);
  const [datosAcompanantes, setDatosAcompanantes] = useState([]);
  const [autobus, setAutobus] = useState("");
  const [alergias, setAlergias] = useState("");
  const [platoPrincipal, setPlatoPrincipal] = useState("");
  const [enviado, setEnviado] = useState(false);

  const actualizarAcompanantes = (num) => {
    const n = parseInt(num) || 0;
    setAcompanantes(n);
    const nuevos = Array.from({ length: n }, (_, i) => datosAcompanantes[i] || { nombre: "", edad: "", menu: "" });
    setDatosAcompanantes(nuevos);
  };

  const actualizarDato = (index, campo, valor) => {
    const nuevos = [...datosAcompanantes];
    nuevos[index] = { ...nuevos[index], [campo]: valor };
    setDatosAcompanantes(nuevos);
  };

  const handleEnviar = async () => {
    if (!nombre.trim()) return;
    try {
      await addDoc(collection(db, "confirmaciones"), {
        nombre: nombre.trim(),
        acompanantes: acompanantes,
        datosAcompanantes: datosAcompanantes,
        autobus: autobus,
        alergias: alergias.trim(),
        platoPrincipal: platoPrincipal,
        fecha: new Date()
      });
    } catch (e) {
      console.log("Error guardando confirmación", e);
    }
    setEnviado(true);
  };

  const inputStyle = {
    width:"100%", padding:"12px 16px", borderRadius:"10px",
    border:"1px solid #e8d5c4", fontSize:"14px", color:"#4a3728",
    background:"#fdf6f0", boxSizing:"border-box",
    fontFamily:"Georgia, serif", outline:"none"
  };

  const selectStyle = { ...inputStyle, cursor:"pointer" };

  if (enviado) {
    return (
      <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ textAlign:"center" }}>
          <div style={{ fontSize:"60px", marginBottom:"20px" }}>🎉</div>
          <h2 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"26px", margin:"0 0 12px" }}>¡Gracias, {nombre}!</h2>
          <p style={{ color:"#7a5c4a", fontSize:"15px", lineHeight:"1.8", margin:0 }}>{t.graciasMensaje}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>{t.confirmaAsistencia}</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>{t.vienesBoda}</h2>
        <p style={{ color:"#b89a7a", fontSize:"13px", margin:0 }}>{t.limiteConfirmar}</p>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>{t.tuNombre}</p>
          <input type="text" placeholder={t.nombreApellidos} value={nombre} onChange={(e) => setNombre(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>{t.acompanantes}</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 8px" }}>{t.cuantosVenis}</p>
          <select value={acompanantes} onChange={(e) => actualizarAcompanantes(e.target.value)} style={selectStyle}>
            {[0,1,2,3,4].map(n => (
              <option key={n} value={n}>{n === 0 ? t.soloYo : `${n} acompañante${n > 1 ? "s" : ""}`}</option>
            ))}
          </select>

          {datosAcompanantes.map((a, i) => (
            <div key={i} style={{ marginTop:"16px", background:"#fdf6f0", borderRadius:"10px", padding:"14px" }}>
              <p style={{ fontSize:"12px", color:"#b89a7a", letterSpacing:"2px", margin:"0 0 10px" }}>ACOMPAÑANTE {i + 1}</p>
              <input type="text" placeholder={t.nombreApellidos} value={a.nombre} onChange={(e) => actualizarDato(i, "nombre", e.target.value)} style={{ ...inputStyle, marginBottom:"8px" }} />
              <input type="number" placeholder="Edad" value={a.edad} onChange={(e) => actualizarDato(i, "edad", e.target.value)} style={{ ...inputStyle, marginBottom:"8px" }} />
              <select value={a.menu} onChange={(e) => actualizarDato(i, "menu", e.target.value)} style={selectStyle}>
                <option value="">Selecciona menú</option>
                <option value="adulto">Menú adulto</option>
                <option value="nino">Menú niño (menores de 12 años)</option>
              </select>
            </div>
          ))}
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>{t.autobus}</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 8px" }}>🚌 17:10 h · Plaza Castilla → 01:30 h · Plaza Castilla</p>
          <select value={autobus} onChange={(e) => setAutobus(e.target.value)} style={selectStyle}>
            <option value="">Selecciona una opción</option>
            <option value="ida-vuelta">Sí, ida y vuelta</option>
            <option value="ida">Solo ida</option>
            <option value="vuelta">Solo vuelta</option>
            <option value="no">No, gracias</option>
          </select>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>{t.platoPrincipal}</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 8px" }}>{t.platoTexto}</p>
          <select value={platoPrincipal} onChange={(e) => setPlatoPrincipal(e.target.value)} style={selectStyle}>
            <option value="">Selecciona una opción</option>
            <option value="carne">{t.carne}</option>
            <option value="pescado">{t.pescado}</option>
            <option value="especial">{t.menuEspecial}</option>
          </select>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>{t.alergias}</p>
          <textarea placeholder={t.alergiasPlaceholder} value={alergias} onChange={(e) => setAlergias(e.target.value)} rows={3} style={{ ...inputStyle, resize:"none" }} />
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px", textAlign:"center" }}>
          <div style={{ fontSize:"24px", marginBottom:"8px" }}>🪑</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 8px" }}>{t.mesa}</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:0, lineHeight:"1.6" }}>{t.mesaTexto}</p>
        </div>

        <button onClick={handleEnviar} disabled={!nombre.trim()}
          style={{ width:"100%", background: nombre.trim() ? "#4a3728" : "#e8d5c4", color: nombre.trim() ? "white" : "#b89a7a", border:"none", borderRadius:"30px", padding:"16px", fontSize:"16px", cursor: nombre.trim() ? "pointer" : "not-allowed", fontFamily:"Georgia, serif", letterSpacing:"1px" }}>
          {t.confirmarBtn}
        </button>

      </div>
    </div>
  );
}

export default Confirmacion;