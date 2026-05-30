function MenuBoda({ t }) {
  const alergenos = t.idioma === "en"
    ? ["🥜 Nuts", "🌾 Gluten", "🥛 Dairy", "🦐 Shellfish", "🥚 Egg", "🐟 Fish", "🫘 Soy", "Others"]
    : ["🥜 Frutos secos", "🌾 Gluten", "🥛 Lácteos", "🦐 Mariscos", "🥚 Huevo", "🐟 Pescado", "🫘 Soja", "Otros"];

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>
          {t.idioma === "en" ? "GASTRONOMY" : "GASTRONOMÍA"}
        </p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>
          {t.idioma === "en" ? "Menu & Allergens" : "Menú y Alérgenos"}
        </h2>
        <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", margin:0 }}>
          {t.idioma === "en" ? "A fusion of Peruvian and Spanish flavours prepared with love 🇵🇪🇪🇸" : "Una fusión de sabores peruanos y españoles preparada con mucho cariño 🇵🇪🇪🇸"}
        </p>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"28px", marginBottom:"16px", textAlign:"center" }}>
          <div style={{ fontSize:"40px", marginBottom:"14px" }}>🤫</div>
          <h3 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"20px", margin:"0 0 12px" }}>
            {t.idioma === "en" ? "The menu is a surprise" : "El menú es sorpresa"}
          </h3>
          <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", margin:0 }}>
            {t.idioma === "en"
              ? "We have prepared a special gastronomic experience that you will discover on the wedding day. A unique fusion of Peruvian and Spanish cuisine awaits you!"
              : "Hemos preparado una experiencia gastronómica especial que descubriréis el día de la boda. ¡Solo os adelantamos que será una fusión única de la cocina peruana y española!"}
          </p>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🍽️</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 14px" }}>
            {t.idioma === "en" ? "MAIN COURSE" : "PLATO PRINCIPAL"}
          </p>
          <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", marginBottom:"16px", textAlign:"center" }}>
            {t.idioma === "en"
              ? "For the main course you can choose between meat or fish. Please indicate your preference when confirming attendance."
              : "Para el plato principal podéis elegir entre carne o pescado. Indicadlo al confirmar vuestra asistencia."}
          </p>
          <div style={{ display:"flex", gap:"12px" }}>
            <div style={{ flex:1, background:"#fdf6f0", borderRadius:"12px", padding:"16px", textAlign:"center", border:"1px solid #e8d5c4" }}>
              <div style={{ fontSize:"28px", marginBottom:"8px" }}>🥩</div>
              <p style={{ fontSize:"14px", color:"#4a3728", margin:"0 0 4px" }}>{t.idioma === "en" ? "Meat" : "Carne"}</p>
            </div>
            <div style={{ flex:1, background:"#fdf6f0", borderRadius:"12px", padding:"16px", textAlign:"center", border:"1px solid #e8d5c4" }}>
              <div style={{ fontSize:"28px", marginBottom:"8px" }}>🐟</div>
              <p style={{ fontSize:"14px", color:"#4a3728", margin:"0 0 4px" }}>{t.idioma === "en" ? "Fish" : "Pescado"}</p>
            </div>
          </div>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>🥗</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 12px" }}>
            {t.idioma === "en" ? "SPECIAL MENU" : "MENÚ ESPECIAL"}
          </p>
          <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", textAlign:"center", margin:0 }}>
            {t.idioma === "en"
              ? "If you don't eat meat or fish, or have any dietary restrictions, we will prepare a special menu for you. Please let us know when confirming attendance. 🤍"
              : "Si no coméis carne ni pescado o tenéis alguna restricción alimentaria, preparamos un menú especial para vosotros. Indicadlo en la confirmación de asistencia. 🤍"}
          </p>
        </div>

        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"28px", textAlign:"center", marginBottom:"10px" }}>⚠️</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 12px" }}>
            {t.idioma === "en" ? "ALLERGENS" : "ALÉRGENOS"}
          </p>
          <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", textAlign:"center", margin:"0 0 16px" }}>
            {t.idioma === "en"
              ? "If you have any food allergy or intolerance, please let us know when confirming your attendance."
              : "Si tienes alguna alergia o intolerancia alimentaria, por favor indícalo al confirmar tu asistencia."}
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:"8px", justifyContent:"center" }}>
            {alergenos.map(a => (
              <span key={a} style={{ background:"#fdf6f0", border:"1px solid #e8d5c4", borderRadius:"20px", padding:"6px 14px", fontSize:"12px", color:"#7a5c4a" }}>
                {a}
              </span>
            ))}
          </div>
        </div>

        <div style={{ background:"#4a3728", borderRadius:"14px", padding:"24px", textAlign:"center" }}>
          <div style={{ fontSize:"36px", marginBottom:"12px" }}>🎉</div>
          <p style={{ color:"#e8d5c4", letterSpacing:"3px", fontSize:"11px", margin:"0 0 10px" }}>
            {t.idioma === "en" ? "PARTY TIME" : "HORA LOCA"}
          </p>
          <p style={{ color:"white", fontSize:"16px", margin:"0 0 8px" }}>
            {t.idioma === "en" ? "We have a surprise ready!" : "¡Tenemos una sorpresa preparada!"}
          </p>
          <p style={{ color:"#b89a7a", fontSize:"13px", lineHeight:"1.8", margin:0 }}>
            {t.idioma === "en"
              ? "All we can say is there will be plenty of dancing, joy and a very special guest who will make you smile. 🐾"
              : "Solo os decimos que habrá mucho baile, mucha alegría y un invitado muy especial que os va a arrancar una sonrisa. 🐾"}
          </p>
        </div>

      </div>
    </div>
  );
}

export default MenuBoda;