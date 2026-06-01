function Programa({ t }) {
  const eventos = t.idioma === "en" ? [
    { hora: "18:00", titulo: "Ceremony", descripcion: "Christian wedding celebration", emoji: "💒" },
    { hora: "19:00", titulo: "Cocktail", descripcion: "Welcome drinks and appetizers at the venue", emoji: "🥂" },
    { hora: "20:30", titulo: "Dinner", descripcion: "Dinner and celebration with all of you", emoji: "🍽️" },
    { hora: "22:00", titulo: "Photo challenge", descripcion: "Deadline to complete the photo missions 📸", emoji: "⏰" },
    { hora: "22:15", titulo: "Prize giving", descripcion: "A very special surprise moment 🎁", emoji: "🏆" },
    { hora: "22:30", titulo: "Dancing", descripcion: "Dance the night away!", emoji: "🎶" },
    { hora: "03:00", titulo: "Closing", descripcion: "Last song of the night. Thank you for dancing with us!", emoji: "🌙" },
  ] : [
    { hora: "18:00", titulo: "Ceremonia", descripcion: "Celebración del enlace cristiano", emoji: "💒" },
    { hora: "19:00", titulo: "Cóctel", descripcion: "Bienvenida y aperitivos en la finca", emoji: "🥂" },
    { hora: "20:30", titulo: "Banquete", descripcion: "Cena y celebración con todos vosotros", emoji: "🍽️" },
    { hora: "22:00", titulo: "Reto de fotos", descripcion: "Límite para completar las misiones del reto de fotos 📸", emoji: "⏰" },
    { hora: "22:15", titulo: "Entrega de premios", descripcion: "¡Sorpresa! Habrá un momento muy especial 🎁", emoji: "🏆" },
    { hora: "22:30", titulo: "Baile", descripcion: "¡A bailar toda la noche!", emoji: "🎶" },
    { hora: "03:00", titulo: "Cierre", descripcion: "Hasta aquí llega la música. ¡Gracias por bailar con nosotros!", emoji: "🌙" },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>
      <div style={{ textAlign:"center", marginBottom:"40px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>
          29 {t.idioma === "en" ? "MAY" : "DE MAYO DE"} 2027
        </p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:0 }}>
          {t.idioma === "en" ? "Schedule" : "Programa del día"}
        </h2>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto", position:"relative" }}>
        <div style={{ position:"absolute", left:"60px", top:0, bottom:0, width:"1px", background:"#e8d5c4" }} />
        {eventos.map((evento, index) => (
          <div key={index} style={{ display:"flex", alignItems:"flex-start", marginBottom:"36px", position:"relative" }}>
            <div style={{ minWidth:"60px", textAlign:"right", paddingRight:"20px", paddingTop:"10px" }}>
              <span style={{ fontSize:"13px", color:"#b89a7a" }}>{evento.hora}</span>
            </div>
            <div style={{ width:"12px", height:"12px", borderRadius:"50%", background:"#b89a7a", border:"2px solid #fdf6f0", marginTop:"12px", marginRight:"20px", flexShrink:0, zIndex:1 }} />
            <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"16px 20px", flex:1 }}>
              <div style={{ fontSize:"24px", marginBottom:"6px" }}>{evento.emoji}</div>
              <div style={{ fontSize:"18px", color:"#4a3728", marginBottom:"4px" }}>{evento.titulo}</div>
              <div style={{ fontSize:"13px", color:"#b89a7a", lineHeight:"1.6" }}>{evento.descripcion}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programa;