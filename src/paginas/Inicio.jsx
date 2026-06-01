import { useState, useEffect } from "react";

function Inicio({ t }) {
const fechaBoda = new Date("2027-05-29T18:00:00");

  const calcularCuentaAtras = () => {
    const ahora = new Date();
    const diferencia = fechaBoda - ahora;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    return { dias, horas, minutos, segundos };
  };

  const [cuenta, setCuenta] = useState(calcularCuentaAtras());

  useEffect(() => {
    const timer = setInterval(() => setCuenta(calcularCuentaAtras()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"30px 16px 100px", textAlign:"center" }}>

      <div style={{ width:"140px", height:"140px", borderRadius:"50%", overflow:"hidden", border:"4px solid #b89a7a", marginBottom:"20px", background:"#e8d5c4" }}>
        <img src="/fotos/nosotros.jpg" alt="Gabriel y Vania" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
      </div>

<p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"13px", margin:"0 0 6px" }}>{t.nosCasamos}</p>

<p style={{ fontSize:"18px", color:"#7a5c4a", margin:"0 0 4px" }}>{t.fecha}</p>
      <p style={{ fontSize:"16px", color:"#7a5c4a", margin:"0 0 4px" }}>{t.fecha}</p>

      <p style={{ fontSize:"13px", color:"#b89a7a", margin:"0 0 20px" }}>{t.ceremonia}</p>

      <div style={{ width:"40px", height:"1px", background:"#b89a7a", margin:"0 auto 20px" }} />

      {/* Cuenta atrás en una fila */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:"8px", marginBottom:"24px", width:"100%" }}>
        {[
          { valor: cuenta.dias, label: t.dias },
          { valor: cuenta.horas, label: t.horas },
          { valor: cuenta.minutos, label: t.minutos },
          { valor: cuenta.segundos, label: t.segundos },
        ].map(({ valor, label }) => (
          <div key={label} style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"10px", padding:"10px 4px" }}>
            <div style={{ fontSize:"24px", color:"#4a3728", fontWeight:"bold" }}>{valor}</div>
            <div style={{ fontSize:"10px", color:"#b89a7a", letterSpacing:"1px" }}>{label}</div>
          </div>
        ))}
      </div>

      <div style={{ width:"40px", height:"1px", background:"#b89a7a", margin:"0 auto 20px" }} />

      {/* Banner instalar app */}
      <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"16px 20px", width:"100%", textAlign:"left" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"10px", margin:"0 0 10px" }}>
          {t.idioma === "en" ? "📲 INSTALL AS APP" : "📲 INSTALA LA APP"}
        </p>
        <div style={{ marginBottom:"8px" }}>
          <p style={{ fontSize:"12px", color:"#4a3728", margin:"0 0 2px", fontWeight:"bold" }}>📱 iPhone:</p>
          <p style={{ fontSize:"11px", color:"#7a5c4a", margin:0, lineHeight:"1.6" }}>
            {t.idioma === "en" ? "Tap share ⬆️ → \"Add to Home Screen\"" : "Toca compartir ⬆️ → \"Añadir a pantalla de inicio\""}
          </p>
        </div>
        <div>
          <p style={{ fontSize:"12px", color:"#4a3728", margin:"0 0 2px", fontWeight:"bold" }}>🤖 Android:</p>
          <p style={{ fontSize:"11px", color:"#7a5c4a", margin:0, lineHeight:"1.6" }}>
            {t.idioma === "en" ? "Tap ⋮ → \"Add to Home Screen\"" : "Toca ⋮ → \"Añadir a pantalla de inicio\""}
          </p>
        </div>
      </div>

    </div>
  );
}

export default Inicio;