import { useState, useEffect, useRef } from "react";

function Inicio({ t }) {
  const [sobreAbierto, setSobreAbierto] = useState(false);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [musicaActiva, setMusicaActiva] = useState(false);
  const audioRef = useRef(null);

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

  const toggleMusica = () => {
    if (audioRef.current) {
      if (musicaActiva) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log(e));
      }
      setMusicaActiva(!musicaActiva);
    }
  };

  const abrirSobre = () => {
    setSobreAbierto(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log(e));
      setMusicaActiva(true);
    }
    setTimeout(() => setMostrarContenido(true), 1400);
  };

  if (mostrarContenido) {
    return (
      <div style={{
        minHeight:"100vh",
        background:"linear-gradient(135deg, #fdf6f0 0%, #fff8f0 100%)",
        fontFamily:"Georgia, serif",
        display:"flex", flexDirection:"column", alignItems:"center",
        justifyContent:"center", padding:"30px 16px 100px", textAlign:"center",
        animation:"fadeIn 0.8s ease"
      }}>
        <style>{`
          @keyframes fadeIn { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        `}</style>

        <audio ref={audioRef} loop>
          <source src="https://www.bensound.com/bensound-music/bensound-latinfire.mp3" type="audio/mpeg" />
        </audio>

        <button onClick={toggleMusica} style={{
          position:"fixed", top:"12px", left:"12px", zIndex:1000,
          background:"white", border:"1px solid #c9a84c",
          borderRadius:"20px", padding:"6px 14px", fontSize:"13px",
          cursor:"pointer", color:"#4a3728", fontFamily:"Georgia, serif",
          boxShadow:"0 2px 8px rgba(0,0,0,0.1)"
        }}>
          {musicaActiva ? "🔊 Música" : "🔇 Música"}
        </button>

        <div style={{
          width:"160px", height:"160px", borderRadius:"50%",
          overflow:"hidden", marginBottom:"20px", background:"#e8d5c4",
          border:"4px solid #c9a84c",
          boxShadow:"0 0 0 3px #f0d080"
        }}>
          <img src="/fotos/nosotros.jpg" alt="Gabriel y Vania" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        </div>

        <p style={{ color:"#c9a84c", letterSpacing:"4px", fontSize:"13px", margin:"0 0 6px" }}>{t.nosCasamos}</p>
        <h1 style={{ fontSize:"36px", color:"#4a3728", margin:"0 0 8px", fontWeight:"normal" }}>Gabriel & Vania</h1>
        <p style={{ fontSize:"18px", color:"#7a5c4a", margin:"0 0 4px" }}>{t.fecha}</p>
        <p style={{ fontSize:"13px", color:"#b89a7a", margin:"0 0 20px" }}>{t.ceremonia}</p>

        <div style={{ width:"60px", height:"2px", background:"linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)", margin:"0 auto 20px", borderRadius:"2px" }} />

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:"8px", marginBottom:"24px", width:"100%" }}>
          {[
            { valor: cuenta.dias, label: t.dias },
            { valor: cuenta.horas, label: t.horas },
            { valor: cuenta.minutos, label: t.minutos },
            { valor: cuenta.segundos, label: t.segundos },
          ].map(({ valor, label }) => (
            <div key={label} style={{ background:"white", border:"2px solid #c9a84c", borderRadius:"10px", padding:"10px 4px" }}>
              <div style={{ fontSize:"24px", color:"#4a3728", fontWeight:"bold" }}>{valor}</div>
              <div style={{ fontSize:"10px", color:"#b89a7a", letterSpacing:"1px" }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ width:"60px", height:"2px", background:"linear-gradient(90deg, #c9a84c, #f0d080, #c9a84c)", margin:"0 auto 20px", borderRadius:"2px" }} />

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

  return (
    <div style={{
      minHeight:"100vh",
      background:"linear-gradient(135deg, #fdf6f0 0%, #fff8ee 50%, #fdf0f5 100%)",
      fontFamily:"Georgia, serif",
      display:"flex", flexDirection:"column", alignItems:"center",
      justifyContent:"center", padding:"20px", textAlign:"center"
    }}>
      <style>{`
        @keyframes flotar {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes brillarDorado {
          0%, 100% { box-shadow: 0 8px 32px rgba(201,168,76,0.4); }
          50% { box-shadow: 0 12px 48px rgba(201,168,76,0.7); }
        }
      `}</style>

      <audio ref={audioRef} loop>
        <source src="https://www.bensound.com/bensound-music/bensound-latinfire.mp3" type="audio/mpeg" />
      </audio>

      <div style={{ display:"flex", gap:"8px", marginBottom:"20px", fontSize:"22px" }}>
        🌺🌻🌸🌼🌺
      </div>

      <p style={{ color:"#c9a84c", letterSpacing:"4px", fontSize:"11px", margin:"0 0 8px" }}>
        {t.idioma === "en" ? "YOU HAVE A MESSAGE" : "TIENES UN MENSAJE"}
      </p>
      <h2 style={{ color:"#4a3728", fontSize:"20px", fontWeight:"normal", margin:"0 0 36px", lineHeight:"1.6" }}>
        {t.idioma === "en"
          ? "Gabriel & Vania invite you to celebrate with them"
          : "Gabriel & Vania os invitan a celebrar con ellos"}
      </h2>

      <div onClick={abrirSobre} style={{
        cursor:"pointer",
        animation: sobreAbierto ? "none" : "flotar 3s ease-in-out infinite, brillarDorado 2s ease-in-out infinite",
      }}>
        <div style={{ width:"300px", height:"210px", position:"relative" }}>

          {/* Cuerpo del sobre */}
          <div style={{
            width:"300px", height:"210px",
            background:"#fffdf7",
            border:"2px solid #c9a84c",
            borderRadius:"6px",
            position:"absolute", bottom:0,
            overflow:"hidden"
          }}>
            {/* Triángulo inferior izquierdo */}
            <div style={{
              position:"absolute", bottom:0, left:0,
              width:0, height:0,
              borderStyle:"solid",
              borderWidth:"105px 150px 0 0",
              borderColor:"#fffdf7 transparent transparent transparent"
            }} />
            {/* Triángulo inferior derecho */}
            <div style={{
              position:"absolute", bottom:0, right:0,
              width:0, height:0,
              borderStyle:"solid",
              borderWidth:"105px 0 0 150px",
              borderColor:"transparent transparent transparent #fffdf7"
            }} />

            {/* Línea dorada central */}
            <div style={{
              position:"absolute",
              bottom:"105px", left:"30px", right:"30px",
              height:"1px",
              background:"linear-gradient(90deg, transparent, #c9a84c, transparent)"
            }} />

            {/* Sello */}
            <div style={{
              position:"absolute", top:"14px", right:"14px",
              width:"46px", height:"56px",
              border:"2px solid #c9a84c",
              borderRadius:"3px",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:"22px",
              background:"#fffdf7"
            }}>💍</div>

            {/* Iniciales */}
            <div style={{
              position:"absolute", top:"45%", left:"50%",
              transform:"translate(-50%, -60%)",
              color:"#c9a84c", fontSize:"28px",
              fontFamily:"Georgia, serif", letterSpacing:"6px"
            }}>G & V</div>
          </div>

          {/* Tapa del sobre */}
          <div style={{
            width:"300px", height:"150px",
            position:"absolute", top:0, left:0,
            transformOrigin:"top center",
            transform: sobreAbierto ? "rotateX(-180deg)" : "rotateX(0deg)",
            transition:"transform 1.2s ease",
            zIndex:2
          }}>
            <div style={{
              width:0, height:0,
              borderLeft:"150px solid transparent",
              borderRight:"150px solid transparent",
              borderTop:"150px solid #fffdf7",
              filter:"drop-shadow(0 2px 4px rgba(201,168,76,0.3))"
            }} />
          </div>

        </div>
      </div>

      <p style={{ color:"#c9a84c", fontSize:"13px", margin:"28px 0 16px", letterSpacing:"2px" }}>
        {sobreAbierto
          ? (t.idioma === "en" ? "Opening... 💌" : "Abriendo... 💌")
          : (t.idioma === "en" ? "✨ Tap to open ✨" : "✨ Toca para abrir ✨")}
      </p>

      <div style={{ fontSize:"18px", opacity:0.6 }}>🌿🌺🌻🌸🌿</div>
    </div>
  );
}

export default Inicio;