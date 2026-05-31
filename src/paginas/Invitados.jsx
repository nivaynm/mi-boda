import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const CONTRASENA = "lucasylola09";

function Invitados({ t }) {
  const [acceso, setAcceso] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [confirmaciones, setConfirmaciones] = useState([]);
  const [filtro, setFiltro] = useState("todos");

  const entrar = () => {
    if (input === CONTRASENA) {
      setAcceso(true);
      cargarConfirmaciones();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const cargarConfirmaciones = async () => {
    try {
      const snapshot = await getDocs(collection(db, "confirmaciones"));
      setConfirmaciones(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (e) {
      console.log("Error cargando confirmaciones", e);
    }
  };

  const totalPersonas = confirmaciones.reduce((acc, c) => acc + 1 + (parseInt(c.acompanantes) || 0), 0);
  const totalAutobus = confirmaciones.filter(c => c.autobus === "ida-vuelta" || c.autobus === "ida").length;
  const totalCarne = confirmaciones.filter(c => c.platoPrincipal === "carne").length;
  const totalPescado = confirmaciones.filter(c => c.platoPrincipal === "pescado").length;
  const totalEspecial = confirmaciones.filter(c => c.platoPrincipal === "especial").length;

  const confirmacionesFiltradas = filtro === "todos" ? confirmaciones
    : filtro === "autobus" ? confirmaciones.filter(c => c.autobus === "ida-vuelta" || c.autobus === "ida")
    : filtro === "alergias" ? confirmaciones.filter(c => c.alergias && c.alergias.trim() !== "")
    : confirmaciones;

  if (!acceso) {
    return (
      <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", display:"flex", alignItems:"center", justifyContent:"center", padding:"20px" }}>
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"36px 28px", maxWidth:"360px", width:"100%", textAlign:"center" }}>
          <div style={{ fontSize:"40px", marginBottom:"16px" }}>👥</div>
          <h2 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"22px", margin:"0 0 8px" }}>
            {t.idioma === "en" ? "Guest panel" : "Panel de invitados"}
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
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>SOLO PARA LOS NOVIOS</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>Panel de invitados 👥</h2>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        {/* Resumen */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginBottom:"16px" }}>
          {[
            { label:"Total confirmados", valor: confirmaciones.length, emoji:"✅" },
            { label:"Total personas", valor: totalPersonas, emoji:"👥" },
            { label:"En autobús", valor: totalAutobus, emoji:"🚌" },
            { label:"Con alergias", valor: confirmaciones.filter(c => c.alergias && c.alergias.trim() !== "").length, emoji:"⚠️" },
          ].map(({ label, valor, emoji }) => (
            <div key={label} style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"16px", textAlign:"center" }}>
              <div style={{ fontSize:"24px", marginBottom:"6px" }}>{emoji}</div>
              <div style={{ fontSize:"24px", color:"#4a3728", fontWeight:"bold" }}>{valor}</div>
              <div style={{ fontSize:"11px", color:"#b89a7a", marginTop:"4px" }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Menú resumen */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"20px 24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>PLATOS PRINCIPALES</p>
          <div style={{ display:"flex", justifyContent:"space-around" }}>
            {[
              { label:"Carne", valor: totalCarne, emoji:"🥩" },
              { label:"Pescado", valor: totalPescado, emoji:"🐟" },
              { label:"Especial", valor: totalEspecial, emoji:"🥗" },
            ].map(({ label, valor, emoji }) => (
              <div key={label} style={{ textAlign:"center" }}>
                <div style={{ fontSize:"24px", marginBottom:"4px" }}>{emoji}</div>
                <div style={{ fontSize:"22px", color:"#4a3728", fontWeight:"bold" }}>{valor}</div>
                <div style={{ fontSize:"12px", color:"#b89a7a" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtros */}
        <div style={{ display:"flex", gap:"8px", marginBottom:"16px", flexWrap:"wrap" }}>
          {[
            { id:"todos", label:"Todos" },
            { id:"autobus", label:"🚌 Autobús" },
            { id:"alergias", label:"⚠️ Alergias" },
          ].map(f => (
            <button key={f.id} onClick={() => setFiltro(f.id)}
              style={{ background: filtro === f.id ? "#4a3728" : "white", color: filtro === f.id ? "white" : "#4a3728", border:"1px solid #e8d5c4", borderRadius:"20px", padding:"8px 16px", fontSize:"13px", cursor:"pointer", fontFamily:"Georgia, serif" }}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Botón recargar */}
        <button onClick={cargarConfirmaciones} style={{ width:"100%", background:"white", color:"#4a3728", border:"1px solid #e8d5c4", borderRadius:"30px", padding:"12px", fontSize:"14px", cursor:"pointer", fontFamily:"Georgia, serif", marginBottom:"16px" }}>
          🔄 Actualizar lista
        </button>

        {/* Lista de confirmaciones */}
        {confirmacionesFiltradas.length === 0 ? (
          <div style={{ textAlign:"center", padding:"40px 20px", background:"white", borderRadius:"14px", border:"1px solid #e8d5c4" }}>
            <p style={{ color:"#7a5c4a", fontSize:"14px", margin:0 }}>Aún no hay confirmaciones</p>
          </div>
        ) : (
          confirmacionesFiltradas.map((c, i) => (
            <div key={c.id || i} style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"20px 24px", marginBottom:"12px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"12px" }}>
                <span style={{ fontSize:"16px", color:"#4a3728", fontWeight:"bold" }}>{c.nombre}</span>
                <span style={{ fontSize:"12px", color:"#b89a7a", background:"#fdf6f0", padding:"4px 10px", borderRadius:"20px" }}>
                  {1 + (parseInt(c.acompanantes) || 0)} personas
                </span>
              </div>

              <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", marginBottom: c.alergias ? "10px" : "0" }}>
                {c.platoPrincipal && (
                  <span style={{ fontSize:"12px", color:"#7a5c4a", background:"#fdf6f0", border:"1px solid #e8d5c4", padding:"4px 10px", borderRadius:"20px" }}>
                    {c.platoPrincipal === "carne" ? "🥩 Carne" : c.platoPrincipal === "pescado" ? "🐟 Pescado" : "🥗 Especial"}
                  </span>
                )}
                {c.autobus && c.autobus !== "no" && (
                  <span style={{ fontSize:"12px", color:"#7a5c4a", background:"#fdf6f0", border:"1px solid #e8d5c4", padding:"4px 10px", borderRadius:"20px" }}>
                    🚌 {c.autobus === "ida-vuelta" ? "Ida y vuelta" : c.autobus === "ida" ? "Solo ida" : "Solo vuelta"}
                  </span>
                )}
              </div>

              {c.alergias && c.alergias.trim() !== "" && (
                <div style={{ background:"#fff8f0", border:"1px solid #f0e6dc", borderRadius:"10px", padding:"10px 14px", marginTop:"8px" }}>
                  <p style={{ fontSize:"11px", color:"#b89a7a", margin:"0 0 4px", letterSpacing:"2px" }}>⚠️ ALERGIAS</p>
                  <p style={{ fontSize:"13px", color:"#7a5c4a", margin:0 }}>{c.alergias}</p>
                </div>
              )}

              {c.datosAcompanantes && c.datosAcompanantes.length > 0 && (
                <div style={{ marginTop:"10px" }}>
                  <p style={{ fontSize:"11px", color:"#b89a7a", margin:"0 0 8px", letterSpacing:"2px" }}>ACOMPAÑANTES</p>
                  {c.datosAcompanantes.map((a, j) => (
                    <div key={j} style={{ display:"flex", justifyContent:"space-between", padding:"6px 0", borderBottom: j < c.datosAcompanantes.length - 1 ? "1px solid #f0e6dc" : "none" }}>
                      <span style={{ fontSize:"13px", color:"#4a3728" }}>{a.nombre || "Sin nombre"}</span>
                      <span style={{ fontSize:"12px", color:"#b89a7a" }}>
                        {a.edad ? `${a.edad} años` : ""} {a.menu ? `· ${a.menu === "nino" ? "Menú niño" : "Menú adulto"}` : ""}
                      </span>
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Invitados;