import { useState, useEffect } from "react";
function Inicio() {
  const fechaBoda = new Date("2027-05-22T18:00:00");
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
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 20px 100px", textAlign:"center" }}>
      <div style={{ width:"180px", height:"180px", borderRadius:"50%", overflow:"hidden", border:"4px solid #b89a7a", marginBottom:"28px", background:"#e8d5c4" }}>
        <img src="/fotos/nosotros.jpg" alt="Gabriel y Vania" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
      </div>
      <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"13px", margin:"0 0 8px" }}>NOS CASAMOS</p>
      <h1 style={{ fontSize:"48px", color:"#4a3728", margin:"0 0 10px", fontWeight:"normal" }}>Gabriel & Vania</h1>
      <p style={{ fontSize:"20px", color:"#7a5c4a", margin:"0 0 6px" }}>Sábado, 22 de mayo de 2027</p>
      <p style={{ fontSize:"16px", color:"#b89a7a", margin:"0 0 30px" }}>Ceremonia a las 18:00 h</p>
      <div style={{ width:"60px", height:"1px", background:"#b89a7a", margin:"0 auto 30px" }} />
      <div style={{ display:"flex", gap:"20px", marginBottom:"36px", flexWrap:"wrap", justifyContent:"center" }}>
        {[{valor:cuenta.dias,label:"días"},{valor:cuenta.horas,label:"horas"},{valor:cuenta.minutos,label:"minutos"},{valor:cuenta.segundos,label:"segundos"}].map(({valor,label}) => (
          <div key={label} style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"12px", padding:"16px 20px", minWidth:"70px" }}>
            <div style={{ fontSize:"32px", color:"#4a3728", fontWeight:"bold" }}>{valor}</div>
            <div style={{ fontSize:"12px", color:"#b89a7a", letterSpacing:"2px" }}>{label}</div>
          </div>
        ))}
      </div>
      <div style={{ width:"60px", height:"1px", background:"#b89a7a", margin:"0 auto 28px" }} />
      <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"12px", margin:"0 0 8px" }}>LUGAR</p>
      <p style={{ fontSize:"20px", color:"#4a3728", margin:"0 0 6px", fontWeight:"normal" }}>El Pinar de la Caprichosa</p>
      <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", margin:0 }}>C/ Camino Ejido, 3<br />28709 San Sebastián de los Reyes, Madrid</p>
    </div>
  );
}
export default Inicio;