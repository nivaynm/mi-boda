function Transporte({ t }) {
  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>
          {t.idioma === "en" ? "HOW TO GET THERE" : "CÓMO LLEGAR"}
        </p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:0 }}>
          {t.idioma === "en" ? "Transport" : "Transporte"}
        </h2>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🚌</div>
          <h3 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"18px", textAlign:"center", margin:"0 0 16px" }}>
            {t.idioma === "en" ? "Shuttle bus" : "Autobús organizado"}
          </h3>

          <div style={{ background:"#fdf6f0", borderRadius:"12px", padding:"16px", marginBottom:"12px" }}>
            <p style={{ color:"#b89a7a", fontSize:"11px", letterSpacing:"2px", margin:"0 0 8px" }}>
              {t.idioma === "en" ? "OUTBOUND — TO THE VENUE" : "IDA — HACIA LA FINCA"}
            </p>
            <p style={{ color:"#4a3728", fontSize:"15px", margin:"0 0 4px" }}>
              <strong>17:10 h</strong> · {t.idioma === "en" ? "Plaza Castilla station" : "Estación Plaza Castilla"}
            </p>
            <p style={{ color:"#7a5c4a", fontSize:"13px", margin:0 }}>
              {t.idioma === "en" ? "Please arrive a few minutes early" : "Llega con unos minutos de antelación"}
            </p>
          </div>

          <div style={{ background:"#fdf6f0", borderRadius:"12px", padding:"16px", marginBottom:"14px" }}>
            <p style={{ color:"#b89a7a", fontSize:"11px", letterSpacing:"2px", margin:"0 0 8px" }}>
              {t.idioma === "en" ? "RETURN — TO MADRID" : "VUELTA — HACIA MADRID"}
            </p>
            <p style={{ color:"#4a3728", fontSize:"15px", margin:"0 0 4px" }}>
              <strong>01:30 h</strong> · {t.idioma === "en" ? "Plaza Castilla station" : "Estación Plaza Castilla"}
            </p>
            <p style={{ color:"#7a5c4a", fontSize:"13px", margin:0 }}>
              {t.idioma === "en" ? "Punctual departure from the venue" : "Salida puntual desde la finca"}
            </p>
          </div>

          <p style={{ fontSize:"13px", color:"#7a5c4a", textAlign:"center", lineHeight:"1.6", margin:0 }}>
            {t.idioma === "en"
              ? "The shuttle is free for all guests. Please indicate this when confirming your attendance. 🤍"
              : "El autobús es gratuito para todos los invitados. Indícalo al confirmar tu asistencia. 🤍"}
          </p>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🚗</div>
          <h3 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"18px", textAlign:"center", margin:"0 0 10px" }}>
            {t.idioma === "en" ? "Own car" : "Coche propio"}
          </h3>
          <p style={{ fontSize:"13px", color:"#7a5c4a", textAlign:"center", lineHeight:"1.6", margin:0 }}>
            {t.idioma === "en"
              ? "The venue has free parking available.\nC/ Camino Ejido, 3 · San Sebastián de los Reyes"
              : "La finca dispone de aparcamiento gratuito.\nC/ Camino Ejido, 3 · San Sebastián de los Reyes"}
          </p>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🚕</div>
          <h3 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"18px", textAlign:"center", margin:"0 0 10px" }}>
            {t.idioma === "en" ? "Taxi or rideshare" : "Taxi o VTC"}
          </h3>
          <p style={{ fontSize:"13px", color:"#7a5c4a", textAlign:"center", lineHeight:"1.6", margin:0 }}>
            {t.idioma === "en"
              ? "You can use Uber, Cabify or a regular taxi.\nSearch: El Pinar de la Caprichosa, San Sebastián de los Reyes"
              : "Puedes usar Uber, Cabify o taxi convencional.\nBusca: El Pinar de la Caprichosa, San Sebastián de los Reyes"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Transporte;