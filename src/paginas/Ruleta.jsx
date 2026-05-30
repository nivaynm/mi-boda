import { useState } from "react";

const actividades = [
  { emoji: "💃", texto: "¡Sal a la pista y baila la siguiente canción!" },
  { emoji: "🥂", texto: "¡Propón un brindis por los novios!" },
  { emoji: "📸", texto: "¡Hazte una foto con la persona que tienes a tu izquierda!" },
  { emoji: "🎤", texto: "¡Canta el estribillo de la próxima canción!" },
  { emoji: "🕺", texto: "¡Reta a alguien a un duelo de baile!" },
  { emoji: "💌", texto: "¡Cuéntale a los novios tu mejor deseo para su futuro!" },
  { emoji: "🤣", texto: "¡Cuenta un chiste a tu mesa. ¡Que se rían todos!" },
  { emoji: "🫂", texto: "¡Dale un abrazo a alguien que no hayas saludado todavía!" },
  { emoji: "🎭", texto: "¡Imita a un famoso durante 30 segundos!" },
  { emoji: "👯", texto: "¡Busca a alguien y aprended juntos un paso de baile peruano!" },
  { emoji: "🍽️", texto: "¡Describe el mejor plato de la noche con 3 palabras!" },
  { emoji: "🌟", texto: "¡Di algo bonito en voz alta sobre los novios!" },
];

function Ruleta() {
  const [girando, setGirando] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [rotacion, setRotacion] = useState(0);
  const [historial, setHistorial] = useState([]);

  const girar = () => {
    if (girando) return;
    setGirando(true);
    setResultado(null);

    const indice = Math.floor(Math.random() * actividades.length);
    const vueltasExtra = 5 + Math.floor(Math.random() * 5);
    const gradosPorItem = 360 / actividades.length;
    const nuevaRotacion = rotacion + vueltasExtra * 360 + indice * gradosPorItem;

    setRotacion(nuevaRotacion);

    setTimeout(() => {
      setResultado(actividades[indice]);
      setHistorial(prev => [actividades[indice], ...prev.slice(0, 4)]);
      setGirando(false);
    }, 3500);
  };

  const colores = [
    "#4a3728", "#b89a7a", "#7a5c4a", "#e8d5c4",
    "#4a3728", "#b89a7a", "#7a5c4a", "#e8d5c4",
    "#4a3728", "#b89a7a", "#7a5c4a", "#e8d5c4",
  ];

  const radio = 120;
  const centro = 140;
  const segmentos = actividades.length;

  const crearSegmento = (i) => {
    const angulo = (2 * Math.PI) / segmentos;
    const inicio = i * angulo - Math.PI / 2;
    const fin = inicio + angulo;
    const x1 = centro + radio * Math.cos(inicio);
    const y1 = centro + radio * Math.sin(inicio);
    const x2 = centro + radio * Math.cos(fin);
    const y2 = centro + radio * Math.sin(fin);
    const anguloMedio = inicio + angulo / 2;
    const textoX = centro + (radio * 0.65) * Math.cos(anguloMedio);
    const textoY = centro + (radio * 0.65) * Math.sin(anguloMedio);

    return (
      <g key={i}>
        <path
          d={`M ${centro} ${centro} L ${x1} ${y1} A ${radio} ${radio} 0 0 1 ${x2} ${y2} Z`}
          fill={colores[i % colores.length]}
          stroke="white"
          strokeWidth="2"
        />
        <text
          x={textoX}
          y={textoY}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="16"
          transform={`rotate(${(anguloMedio * 180) / Math.PI + 90}, ${textoX}, ${textoY})`}
        >
          {actividades[i].emoji}
        </text>
      </g>
    );
  };

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>JUEGO</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>Ruleta de actividades</h2>
        <p style={{ fontSize:"14px", color:"#7a5c4a", margin:0 }}>¡Gira la ruleta y haz lo que te toque! 🎡</p>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto", textAlign:"center" }}>

        {/* Ruleta */}
        <div style={{ position:"relative", display:"inline-block", marginBottom:"24px" }}>
          {/* Flecha */}
          <div style={{
            position:"absolute", top:"-16px", left:"50%",
            transform:"translateX(-50%)",
            width:0, height:0,
            borderLeft:"12px solid transparent",
            borderRight:"12px solid transparent",
            borderTop:"24px solid #4a3728",
            zIndex:10
          }} />

          <svg
            width={centro * 2}
            height={centro * 2}
            style={{
              transition: girando ? "transform 3.5s cubic-bezier(0.17, 0.67, 0.12, 1)" : "none",
              transform: `rotate(${rotacion}deg)`,
              borderRadius:"50%",
              boxShadow:"0 4px 20px rgba(74,55,40,0.2)"
            }}
          >
            {actividades.map((_, i) => crearSegmento(i))}
            <circle cx={centro} cy={centro} r="20" fill="white" />
          </svg>
        </div>

        {/* Botón girar */}
        <div style={{ marginBottom:"24px" }}>
          <button
            onClick={girar}
            disabled={girando}
            style={{
              background: girando ? "#e8d5c4" : "#4a3728",
              color: girando ? "#b89a7a" : "white",
              border:"none",
              borderRadius:"30px",
              padding:"16px 40px",
              fontSize:"18px",
              cursor: girando ? "not-allowed" : "pointer",
              fontFamily:"Georgia, serif",
              letterSpacing:"1px"
            }}>
            {girando ? "Girando... 🎡" : "¡Girar! 🎡"}
          </button>
        </div>

        {/* Resultado */}
        {resultado && !girando && (
          <div style={{
            background:"#4a3728",
            borderRadius:"14px",
            padding:"28px 24px",
            marginBottom:"20px",
            animation:"fadeIn 0.5s ease"
          }}>
            <div style={{ fontSize:"48px", marginBottom:"12px" }}>{resultado.emoji}</div>
            <p style={{ color:"white", fontSize:"18px", lineHeight:"1.6", margin:0 }}>
              {resultado.texto}
            </p>
          </div>
        )}

        {/* Historial */}
        {historial.length > 1 && (
          <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"20px 24px" }}>
            <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 12px" }}>ÚLTIMAS ACTIVIDADES</p>
            {historial.slice(1).map((h, i) => (
              <div key={i} style={{ display:"flex", alignItems:"center", gap:"10px", padding:"8px 0", borderBottom: i < historial.length - 2 ? "1px solid #f0e6dc" : "none" }}>
                <span style={{ fontSize:"20px" }}>{h.emoji}</span>
                <span style={{ fontSize:"13px", color:"#7a5c4a" }}>{h.texto}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Ruleta;