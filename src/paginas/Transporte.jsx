function Transporte() {
  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>CÓMO LLEGAR</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:0 }}>Transporte</h2>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🚌</div>
          <h3 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"18px", textAlign:"center", margin:"0 0 16px" }}>Autobús organizado</h3>

          <div style={{ background:"#fdf6f0", borderRadius:"12px", padding:"16px", marginBottom:"12px" }}>
            <p style={{ color:"#b89a7a", fontSize:"11px", letterSpacing:"2px", margin:"0 0 8px" }}>IDA — HACIA LA FINCA</p>
            <p style={{ color:"#4a3728", fontSize:"15px", margin:"0 0 4px" }}><strong>17:10 h</strong> · Estación Plaza Castilla</p>
            <p style={{ color:"#7a5c4a", fontSize:"13px", margin:0 }}>Llega con unos minutos de antelación</p>
          </div>

          <div style={{ background:"#fdf6f0", borderRadius:"12px", padding:"16px", marginBottom:"14px" }}>
            <p style={{ color:"#b89a7a", fontSize:"11px", letterSpacing:"2px", margin:"0 0 8px" }}>VUELTA — HACIA MADRID</p>
            <p style={{ color:"#4a3728", fontSize:"15px", margin:"0 0 4px" }}><strong>01:30 h</strong> · Estación Plaza Castilla</p>
            <p style={{ color:"#7a5c4a", fontSize:"13px", margin:0 }}>Salida puntual desde la finca</p>
          </div>

          <p style={{ fontSize:"13px", color:"#7a5c4a", textAlign:"center", lineHeight:"1.6", margin:0 }}>
            El autobús es gratuito para todos los invitados.<br/>
            Indícalo al confirmar tu asistencia. 🤍
          </p>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🚗</div>
          <h3 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"18px", textAlign:"center", margin:"0 0 10px" }}>Coche propio</h3>
          <p style={{ fontSize:"13px", color:"#7a5c4a", textAlign:"center", lineHeight:"1.6", margin:0 }}>
            La finca dispone de aparcamiento gratuito.<br/>
            C/ Camino Ejido, 3 · San Sebastián de los Reyes
          </p>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🚕</div>
          <h3 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"18px", textAlign:"center", margin:"0 0 10px" }}>Taxi o VTC</h3>
          <p style={{ fontSize:"13px", color:"#7a5c4a", textAlign:"center", lineHeight:"1.6", margin:0 }}>
            Puedes usar Uber, Cabify o taxi convencional.<br/>
            Busca: El Pinar de la Caprichosa, San Sebastián de los Reyes
          </p>
        </div>

      </div>
    </div>
  );
}

export default Transporte;