function MenuBoda() {
  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>GASTRONOMÍA</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>Menú y Alérgenos</h2>
        <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", margin:0 }}>
          Una fusión de sabores peruanos y españoles<br/>preparada con mucho cariño para vosotros 🇵🇪🇪🇸
        </p>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        {/* Sorpresa */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"28px", marginBottom:"16px", textAlign:"center" }}>
          <div style={{ fontSize:"40px", marginBottom:"14px" }}>🤫</div>
          <h3 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"20px", margin:"0 0 12px" }}>El menú es sorpresa</h3>
          <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", margin:0 }}>
            Hemos preparado una experiencia gastronómica especial que descubriréis el día de la boda.
            Solo os adelantamos que será una fusión única de la cocina peruana y española. ¡Os va a encantar!
          </p>
        </div>

        {/* Plato principal */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🍽️</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 14px" }}>PLATO PRINCIPAL</p>
          <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", marginBottom:"16px", textAlign:"center" }}>
            Para el plato principal podéis elegir entre carne o pescado.
            Indicadlo al confirmar vuestra asistencia.
          </p>

          <div style={{ display:"flex", gap:"12px" }}>
            <div style={{ flex:1, background:"#fdf6f0", borderRadius:"12px", padding:"16px", textAlign:"center", border:"1px solid #e8d5c4" }}>
              <div style={{ fontSize:"28px", marginBottom:"8px" }}>🥩</div>
              <p style={{ fontSize:"14px", color:"#4a3728", margin:"0 0 4px" }}>Carne</p>
              <p style={{ fontSize:"12px", color:"#b89a7a", margin:0 }}>Plato principal de carne</p>
            </div>
            <div style={{ flex:1, background:"#fdf6f0", borderRadius:"12px", padding:"16px", textAlign:"center", border:"1px solid #e8d5c4" }}>
              <div style={{ fontSize:"28px", marginBottom:"8px" }}>🐟</div>
              <p style={{ fontSize:"14px", color:"#4a3728", margin:"0 0 4px" }}>Pescado</p>
              <p style={{ fontSize:"12px", color:"#b89a7a", margin:0 }}>Plato principal de pescado</p>
            </div>
          </div>
        </div>

        {/* Menú vegetariano */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🥗</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 12px" }}>MENÚ ESPECIAL</p>
          <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", textAlign:"center", margin:0 }}>
            Si no coméis carne ni pescado o tenéis alguna restricción alimentaria, preparamos un menú especial para vosotros.
            Indicadlo en la confirmación de asistencia. 🤍
          </p>
        </div>

        {/* Alérgenos */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>⚠️</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 12px" }}>ALÉRGENOS</p>
          <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", textAlign:"center", margin:"0 0 16px" }}>
            Si tienes alguna alergia o intolerancia alimentaria, por favor indícalo al confirmar tu asistencia para que podamos adaptarnos.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", justifyContent:"center" }}>
            {["🥜 Frutos secos","🌾 Gluten","🥛 Lácteos","🦐 Mariscos","🥚 Huevo","🐟 Pescado","🫘 Soja","Otros"].map(a => (
              <span key={a} style={{ background:"#fdf6f0", border:"1px solid #e8d5c4", borderRadius:"20px", padding:"6px 14px", fontSize:"12px", color:"#7a5c4a" }}>
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Hora loca - sorpresa */}
        <div style={{ background:"#4a3728", borderRadius:"14px", padding:"24px", textAlign:"center" }}>
          <div style={{ fontSize:"36px", marginBottom:"12px" }}>🎉</div>
          <p style={{ color:"#e8d5c4", letterSpacing:"3px", fontSize:"11px", margin:"0 0 10px" }}>HORA LOCA</p>
          <p style={{ color:"white", fontSize:"16px", margin:"0 0 8px", fontWeight:"normal" }}>
            ¡Tenemos una sorpresa preparada!
          </p>
          <p style={{ color:"#b89a7a", fontSize:"13px", lineHeight:"1.8", margin:0 }}>
            Solo os decimos que habrá mucho baile, mucha alegría y un invitado muy especial que os va a arrancar una sonrisa. 🐾
          </p>
        </div>

      </div>
    </div>
  );
}

export default MenuBoda;