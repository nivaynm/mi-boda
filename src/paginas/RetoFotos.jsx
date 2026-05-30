import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const CLOUD_NAME = "dlsozovef";
const UPLOAD_PRESET = "boda_fotos";

const misiones = [
  { id: 1, emoji: "💍", titulo: "Foto con los novios", descripcion: "Hazte una foto con Gabriel y Vania" },
  { id: 2, emoji: "💃", titulo: "El primer baile", descripcion: "Captura el momento del primer baile" },
  { id: 3, emoji: "😂", titulo: "Foto graciosa", descripcion: "Una foto graciosa con alguien de otra mesa" },
  { id: 4, emoji: "😋", titulo: "Cara de placer", descripcion: "Captura el momento de placer absoluto de alguien saboreando la comida. ¡Que se note que está delicioso!" },
  { id: 5, emoji: "🎉", titulo: "Foto con los invitados sorpresa", descripcion: "Hazte una foto con los invitados sorpresa de la noche. ¡Descúbrelos durante la celebración!" },
];

function RetoFotos() {
  const [completadas, setCompletadas] = useState({});
  const [subiendo, setSubiendo] = useState(null);
  const [nombre, setNombre] = useState("");

  const limiteHora = new Date("2027-05-22T22:00:00");
  const tiempoAgotado = new Date() > limiteHora;

  const subirFoto = async (mision, archivo) => {
    if (!archivo) return;
    if (!nombre.trim()) {
      alert("Escribe tu nombre primero para participar en el reto 😊");
      return;
    }
    setSubiendo(mision.id);
    try {
      const formData = new FormData();
      formData.append("file", archivo);
      formData.append("upload_preset", UPLOAD_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await res.json();
      if (data.secure_url) {
        await addDoc(collection(db, "reto_fotos"), {
          url: data.secure_url,
          mision: mision.titulo,
          nombre: nombre.trim(),
          fecha: new Date()
        });
        setCompletadas(prev => ({ ...prev, [mision.id]: data.secure_url }));
      }
    } catch (e) {
      alert("Error al subir la foto. Inténtalo de nuevo.");
    }
    setSubiendo(null);
  };

  const completadas_count = Object.keys(completadas).length;

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>JUEGO</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>Reto de fotos</h2>
        <p style={{ fontSize:"14px", color:"#7a5c4a", margin:"0 0 16px" }}>Completa al menos 3 misiones antes de las 22:00 h y participa en el sorteo 🏆</p>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"30px", padding:"10px 20px", display:"inline-block" }}>
          <span style={{ color:"#4a3728", fontSize:"15px" }}>{completadas_count} de 5 misiones completadas</span>
        </div>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        {tiempoAgotado && (
          <div style={{ background:"#e8d5c4", borderRadius:"14px", padding:"16px 20px", marginBottom:"20px", textAlign:"center" }}>
            <p style={{ color:"#4a3728", fontSize:"14px", margin:0 }}>
              ⏰ El tiempo para completar los retos ha terminado. ¡Gracias por participar!
            </p>
          </div>
        )}

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"20px 24px", marginBottom:"20px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 10px" }}>TU NOMBRE</p>
          <input
            type="text"
            placeholder="Escribe tu nombre para participar"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ width:"100%", padding:"12px 16px", borderRadius:"10px", border:"1px solid #e8d5c4", fontSize:"14px", color:"#4a3728", background:"#fdf6f0", boxSizing:"border-box", fontFamily:"Georgia, serif", outline:"none" }}
          />
        </div>

        {misiones.map((mision) => {
          const completada = completadas[mision.id];
          return (
            <div key={mision.id} style={{
              background:"white",
              border: completada ? "2px solid #b89a7a" : "1px solid #e8d5c4",
              borderRadius:"14px",
              padding:"20px 24px",
              marginBottom:"12px"
            }}>
              <div style={{ display:"flex", alignItems:"flex-start", gap:"14px" }}>
                <div style={{
                  width:"44px", height:"44px", borderRadius:"50%",
                  background: completada ? "#4a3728" : "#fdf6f0",
                  border:"1px solid #e8d5c4",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  fontSize:"20px", flexShrink:0, color:"white"
                }}>
                  {completada ? "✓" : mision.emoji}
                </div>
                <div style={{ flex:1 }}>
                  <p style={{ fontSize:"16px", color:"#4a3728", margin:"0 0 4px" }}>{mision.titulo}</p>
                  <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 12px", lineHeight:"1.6" }}>{mision.descripcion}</p>

                  {completada ? (
                    <div>
                      <img src={completada} alt="Misión completada" style={{ width:"100%", borderRadius:"10px", objectFit:"cover", maxHeight:"150px" }} />
                      <p style={{ color:"#b89a7a", fontSize:"12px", margin:"8px 0 0", textAlign:"center" }}>✓ ¡Misión completada!</p>
                    </div>
                  ) : (
                    <label style={{
                      display:"inline-block",
                      background: tiempoAgotado ? "#e8d5c4" : "#4a3728",
                      color: tiempoAgotado ? "#b89a7a" : "white",
                      padding:"8px 20px",
                      borderRadius:"20px",
                      fontSize:"13px",
                      cursor: tiempoAgotado ? "not-allowed" : "pointer"
                    }}>
                      {subiendo === mision.id ? "Subiendo... ⏳" : "📷 Subir foto"}
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={(e) => !tiempoAgotado && subirFoto(mision, e.target.files[0])}
                        style={{ display:"none" }}
                        disabled={subiendo !== null || tiempoAgotado}
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {completadas_count >= 3 && (
          <div style={{ background:"#4a3728", borderRadius:"14px", padding:"20px 24px", textAlign:"center", marginTop:"8px" }}>
            <div style={{ fontSize:"32px", marginBottom:"8px" }}>🏆</div>
            <p style={{ color:"white", fontSize:"16px", margin:"0 0 4px" }}>¡Ya participas en el sorteo, {nombre}!</p>
            <p style={{ color:"#b89a7a", fontSize:"13px", margin:0 }}>Has completado {completadas_count} misiones. ¡Mucha suerte!</p>
          </div>
        )}

        {completadas_count === 5 && (
          <div style={{ background:"#b89a7a", borderRadius:"14px", padding:"20px 24px", textAlign:"center", marginTop:"12px" }}>
            <div style={{ fontSize:"32px", marginBottom:"8px" }}>⭐</div>
            <p style={{ color:"white", fontSize:"16px", margin:0 }}>¡Has completado todas las misiones! ¡Eres increíble!</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default RetoFotos;