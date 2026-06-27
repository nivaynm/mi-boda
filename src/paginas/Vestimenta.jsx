function Vestimenta({ t }) {
  const es = t.idioma !== "en";

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>
          {es ? "CÓMO VENIR" : "DRESS CODE"}
        </p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>
          {es ? "Código de vestimenta" : "Dress Code"}
        </h2>
        <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", margin:0 }}>
          {es ? "Queremos que estéis cómodos y elegantes. El estilo es cóctel — entre lo formal y lo casual." : "We want you to feel comfortable and elegant. The style is cocktail — between formal and casual."}
        </p>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        {/* Estilo general */}
        <div style={{ background:"#4a3728", borderRadius:"14px", padding:"24px", marginBottom:"16px", textAlign:"center" }}>
          <div style={{ fontSize:"40px", marginBottom:"12px" }}>👗🤵</div>
          <p style={{ color:"#e8d5c4", letterSpacing:"3px", fontSize:"12px", margin:"0 0 8px" }}>
            {es ? "ESTILO" : "STYLE"}
          </p>
          <p style={{ color:"white", fontSize:"22px", margin:"0 0 8px" }}>
            {es ? "Cóctel" : "Cocktail"}
          </p>
          <p style={{ color:"#b89a7a", fontSize:"13px", lineHeight:"1.8", margin:0 }}>
            {es ? "Elegante pero no demasiado formal.\n¡Queremos que disfrutéis y bailéis!" : "Elegant but not too formal.\nWe want you to enjoy and dance!"}
          </p>
        </div>

        {/* Hombres */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"16px" }}>
            <div style={{ fontSize:"32px" }}>🤵</div>
            <div>
              <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 2px" }}>
                {es ? "HOMBRES" : "MEN"}
              </p>
              <p style={{ color:"#4a3728", fontSize:"18px", margin:0 }}>
                {es ? "Traje casual" : "Smart casual suit"}
              </p>
            </div>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {(es ? [
              { emoji:"✅", texto:"Traje con camisa (corbata opcional)" },
              { emoji:"✅", texto:"Chaqueta con pantalón elegante" },
              { emoji:"✅", texto:"Camisa de vestir con pantalón de tela" },
              { emoji:"✅", texto:"Zapatos de vestir o mocasines" },
            ] : [
              { emoji:"✅", texto:"Suit with shirt (tie optional)" },
              { emoji:"✅", texto:"Blazer with smart trousers" },
              { emoji:"✅", texto:"Dress shirt with tailored trousers" },
              { emoji:"✅", texto:"Dress shoes or loafers" },
            ]).map(({ emoji, texto }) => (
              <div key={texto} style={{ display:"flex", alignItems:"center", gap:"10px", background:"#f5fdf9", borderRadius:"10px", padding:"10px 14px" }}>
                <span style={{ fontSize:"16px" }}>{emoji}</span>
                <span style={{ fontSize:"13px", color:"#4a3728" }}>{texto}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mujeres */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"16px" }}>
            <div style={{ fontSize:"32px" }}>👗</div>
            <div>
              <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 2px" }}>
                {es ? "MUJERES" : "WOMEN"}
              </p>
              <p style={{ color:"#4a3728", fontSize:"18px", margin:0 }}>
                {es ? "Vestido o conjunto formal" : "Dress or formal outfit"}
              </p>
            </div>
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {(es ? [
              { emoji:"✅", texto:"Vestido de cóctel o midi" },
              { emoji:"✅", texto:"Conjunto de falda y blusa elegante" },
              { emoji:"✅", texto:"Mono formal o jumpsuit" },
              { emoji:"✅", texto:"Tacones, sandalias elegantes o zapatos de vestir" },
            ] : [
              { emoji:"✅", texto:"Cocktail or midi dress" },
              { emoji:"✅", texto:"Elegant skirt and blouse set" },
              { emoji:"✅", texto:"Formal jumpsuit or playsuit" },
              { emoji:"✅", texto:"Heels, elegant sandals or dress shoes" },
            ]).map(({ emoji, texto }) => (
              <div key={texto} style={{ display:"flex", alignItems:"center", gap:"10px", background:"#f5fdf9", borderRadius:"10px", padding:"10px 14px" }}>
                <span style={{ fontSize:"16px" }}>{emoji}</span>
                <span style={{ fontSize:"13px", color:"#4a3728" }}>{texto}</span>
              </div>
            ))}
          </div>
        </div>

        {/* No permitido */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 16px", textAlign:"center" }}>
            {es ? "POR FAVOR EVITA" : "PLEASE AVOID"}
          </p>

          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {(es ? [
              { emoji:"❌", texto:"Zapatillas deportivas o sneakers" },
              { emoji:"❌", texto:"Vaqueros o jeans" },
              { emoji:"❌", texto:"Shorts o bermudas" },
              { emoji:"❌", texto:"Ropa demasiado informal o de playa" },
            ] : [
              { emoji:"❌", texto:"Trainers or sneakers" },
              { emoji:"❌", texto:"Jeans or denim" },
              { emoji:"❌", texto:"Shorts or bermuda pants" },
              { emoji:"❌", texto:"Overly casual or beach wear" },
            ]).map(({ emoji, texto }) => (
              <div key={texto} style={{ display:"flex", alignItems:"center", gap:"10px", background:"#fff5f5", borderRadius:"10px", padding:"10px 14px" }}>
                <span style={{ fontSize:"16px" }}>{emoji}</span>
                <span style={{ fontSize:"13px", color:"#4a3728" }}>{texto}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Nota final */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", textAlign:"center" }}>
          <div style={{ fontSize:"28px", marginBottom:"10px" }}>🌸</div>
          <p style={{ fontSize:"14px", color:"#7a5c4a", lineHeight:"1.8", margin:0 }}>
            {es
              ? "¡Lo más importante es que vengáis felices y con ganas de celebrar! Si tenéis alguna duda sobre el vestuario, no dudéis en preguntarnos."
              : "The most important thing is that you come happy and ready to celebrate! If you have any questions about the dress code, feel free to ask us."}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Vestimenta;