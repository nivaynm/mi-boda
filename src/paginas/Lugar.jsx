function Lugar({ t }) {
  const url = "https://www.google.com/maps/search/?api=1&query=Camino+Ejido+3+San+Sebastian+de+los+Reyes+Madrid";

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>{t.dondeCelebramos}</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:0 }}>El Pinar de la Caprichosa</h2>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"20px 24px", marginBottom:"16px", textAlign:"center" }}>
          <div style={{ fontSize:"28px", marginBottom:"10px" }}>📍</div>
          <p style={{ fontSize:"16px", color:"#4a3728", margin:"0 0 4px" }}>C/ Camino Ejido, 3</p>
          <p style={{ fontSize:"14px", color:"#7a5c4a", margin:"0 0 20px" }}>28709 San Sebastián de los Reyes, Madrid</p>
          <a href={url} target="_blank" rel="noreferrer" style={{ display:"inline-block", background:"#4a3728", color:"white", padding:"12px 28px", borderRadius:"30px", textDecoration:"none", fontSize:"14px" }}>
            {t.abrirMaps}
          </a>
        </div>

        <div style={{ borderRadius:"14px", overflow:"hidden", border:"1px solid #e8d5c4", marginBottom:"16px", height:"220px", background:"#e8d5c4", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <a href={url} target="_blank" rel="noreferrer" style={{ color:"#7a5c4a", fontSize:"14px", textDecoration:"none", textAlign:"center", padding:"20px" }}>
            <div style={{ fontSize:"36px", marginBottom:"8px" }}>🗺️</div>
            {t.abrirMaps}
          </a>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"20px 24px" }}>
          <div style={{ fontSize:"24px", marginBottom:"10px", textAlign:"center" }}>🚌</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 14px" }}>{t.autobusInvitados}</p>

          <div style={{ display:"flex", justifyContent:"space-around", marginBottom:"14px" }}>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:"11px", color:"#b89a7a", marginBottom:"4px" }}>{t.ida}</div>
              <div style={{ fontSize:"15px", color:"#4a3728", marginBottom:"2px" }}>17:10 h</div>
              <div style={{ fontSize:"12px", color:"#7a5c4a" }}>Plaza Castilla</div>
            </div>
            <div style={{ color:"#b89a7a", fontSize:"20px", alignSelf:"center" }}>✦</div>
            <div style={{ textAlign:"center" }}>
              <div style={{ fontSize:"11px", color:"#b89a7a", marginBottom:"4px" }}>{t.vuelta}</div>
              <div style={{ fontSize:"15px", color:"#4a3728", marginBottom:"2px" }}>01:30 h</div>
              <div style={{ fontSize:"12px", color:"#7a5c4a" }}>Plaza Castilla</div>
            </div>
          </div>

          <div style={{ background:"#fdf6f0", borderRadius:"10px", padding:"12px 16px", fontSize:"13px", color:"#7a5c4a", lineHeight:"1.6", textAlign:"center" }}>
            {t.autobusTexto}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Lugar;