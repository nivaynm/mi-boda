import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const CONTRASENA = "lucasylola09";

function Sorteo({ t }) {
  const [acceso, setAcceso] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [participantes, setParticipantes] = useState([]);
  const [ganadores, setGanadores] = useState([]);
  const [sorteando, setSorteando] = useState(false);

  const entrar = () => {
    if (input === CONTRASENA) {
      setAcceso(true);
      cargarParticipantes();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const cargarParticipantes = async () => {
    try {
      const snapshot = await getDocs(collection(db, "reto_fotos"));
      const fotos = snapshot.docs.map(doc => doc.data());
      const porNombre = {};
      fotos.forEach(f => {
        if (!porNombre[f.nombre]) porNombre[f.nombre] = new Set();
        porNombre[f.nombre].add(f.mision);
      });
      const elegibles = Object.entries(porNombre)
        .filter(([_, misiones]) => misiones.size >= 3)
        .map(([nombre, misiones]) => ({ nombre, completadas: misiones.size }))
        .sort((a, b) => b.completadas - a.completadas);
      setParticipantes(elegibles);
    } catch (e) {
      console.log("Error cargando participantes", e);
    }
  };

  const sortear = () => {
    if (participantes.length < 2) return;
    setSorteando(true);
    setGanadores([]);
    setTimeout(() => {
      const copia = [...participantes];
      const g1 = copia.splice(Math.floor(Math.random() * copia.length), 1)[0];
      const g2 = copia.splice(Math.floor(Math.random() * copia.length), 1)[0];
      setGanadores([g1, g2]);
      setSorteando(false);
    }, 2000);
  };

  if (!acceso) {
    return (
      <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"36px 28px", maxWidth:"360px", width:"100%", textAlign:"center" }}>
          <div style={{ fontSize:"40px", marginBottom:"16px" }}>🔒</div>
          <h2 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"22px", margin:"0 0 8px" }}>
            {t.idioma === "en" ? "Prize draw panel" : "Panel de sorteo"}
          </h2>
          <p style={{ color:"#7a5c4a", fontSize:"14px", margin:"0 0 24px" }}>
            {t.idioma === "en" ? "For the newlyweds only" : "Solo para los novios"}
          </p>
          <input
            type="password"
            placeholder={t.idioma === "en" ? "Password" : "Contraseña"}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && entrar()}
            style={{ width:"100%", padding:"12px 16px", borderRadius:"10px", border: error ? "1px solid #c0392b" : "1px solid #e8d5c4", fontSize:"14px", color:"#4a3728", background:"#fdf6f0", boxSizing:"border-box", fontFamily:"Georgia, serif", outline:"none", marginBottom:"12px" }}
          />
          {error && <p style={{ color:"#c0392b", fontSize:"13px", margin:"0 0 10px" }}>
            {t.idioma === "en" ? "Incorrect password" : "Contraseña incorrecta"}
          </p>}
          <button onClick={entrar} style={{ width:"100%", background:"#4a3728", color:"white", border:"none", borderRadius:"30px", padding:"14px", fontSize:"15px", cursor:"pointer", fontFamily:"Georgia, serif" }}>
            {t.idioma === "en" ? "Enter" : "Entrar"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>
      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>
          {t.idioma === "en" ? "FOR THE NEWLYWEDS ONLY" : "SOLO PARA LOS NOVIOS"}
        </p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>
          {t.idioma === "en" ? "Prize draw panel 🏆" : "Panel de sorteo 🏆"}
        </h2>
        <p style={{ fontSize:"14px", color:"#7a5c4a", margin:0 }}>
          {t.idioma === "en" ? "Guests with 3 or more missions completed" : "Invitados con 3 o más misiones completadas"}
        </p>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        <button onClick={cargarParticipantes} style={{ width:"100%", background:"white", color:"#4a3728", border:"1px solid #e8d5c4", borderRadius:"30px", padding:"12px", fontSize:"14px", cursor:"pointer", fontFamily:"Georgia, serif", marginBottom:"16px" }}>
          🔄 {t.idioma === "en" ? "Refresh list" : "Actualizar lista"}
        </button>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 16px" }}>
            {t.idioma === "en" ? "PARTICIPANTS" : "PARTICIPANTES"} ({participantes.length})
          </p>
          {participantes.length === 0 ? (
            <p style={{ color:"#7a5c4a", fontSize:"14px", textAlign:"center", margin:0 }}>
              {t.idioma === "en" ? "No participants with 3 or more missions yet" : "Aún no hay participantes con 3 o más misiones completadas"}
            </p>
          ) : (
            participantes.map((p, i) => (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom: i < participantes.length - 1 ? "1px solid #f0e6dc" : "none" }}>
                <span style={{ fontSize:"15px", color:"#4a3728" }}>{p.nombre}</span>
                <span style={{ fontSize:"13px", color:"#b89a7a", background:"#fdf6f0", padding:"4px 12px", borderRadius:"20px" }}>
                  {p.completadas} {t.idioma === "en" ? "missions ✓" : "misiones ✓"}
                </span>
              </div>
            ))
          )}
        </div>

        <button onClick={sortear} disabled={participantes.length < 2 || sorteando}
          style={{ width:"100%", background: participantes.length >= 2 ? "#4a3728" : "#e8d5c4", color: participantes.length >= 2 ? "white" : "#b89a7a", border:"none", borderRadius:"30px", padding:"16px", fontSize:"16px", cursor: participantes.length >= 2 ? "pointer" : "not-allowed", fontFamily:"Georgia, serif", marginBottom:"16px" }}>
          {sorteando
            ? (t.idioma === "en" ? "Drawing... 🎲" : "Sorteando... 🎲")
            : (t.idioma === "en" ? "Draw 2 winners! 🏆" : "¡Sortear 2 ganadores! 🏆")}
        </button>

        {ganadores.length > 0 && (
          <div style={{ background:"#4a3728", borderRadius:"14px", padding:"28px 24px", textAlign:"center" }}>
            <div style={{ fontSize:"40px", marginBottom:"12px" }}>🎉</div>
            <p style={{ color:"#e8d5c4", letterSpacing:"3px", fontSize:"11px", margin:"0 0 16px" }}>
              {t.idioma === "en" ? "WINNERS" : "GANADORES"}
            </p>
            {ganadores.map((g, i) => (
              <div key={i} style={{ background:"rgba(255,255,255,0.1)", borderRadius:"10px", padding:"14px", marginBottom:"10px" }}>
                <div style={{ fontSize:"24px", marginBottom:"4px" }}>{i === 0 ? "🥇" : "🥈"}</div>
                <p style={{ color:"white", fontSize:"20px", margin:"0 0 4px" }}>{g.nombre}</p>
                <p style={{ color:"#b89a7a", fontSize:"13px", margin:0 }}>
                  {g.completadas} {t.idioma === "en" ? "missions completed" : "misiones completadas"}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Sorteo;