import { useState } from "react";

function Confirmacion() {
  const [nombre, setNombre] = useState("");
  const [acompanantes, setAcompanantes] = useState(0);
  const [datosAcompanantes, setDatosAcompanantes] = useState([]);
  const [autobus, setAutobus] = useState("");
  const [alergias, setAlergias] = useState("");
  const [platoPrincipal, setPlatoPrincipal] = useState("");
  const [enviado, setEnviado] = useState(false);

  const actualizarAcompanantes = (num) => {
    const n = parseInt(num) || 0;
    setAcompanantes(n);
    const nuevos = Array.from({ length: n }, (_, i) => datosAcompanantes[i] || { nombre: "", edad: "", menu: "" });
    setDatosAcompanantes(nuevos);
  };

  const actualizarDato = (index, campo, valor) => {
    const nuevos = [...datosAcompanantes];
    nuevos[index] = { ...nuevos[index], [campo]: valor };
    setDatosAcompanantes(nuevos);
  };

  const handleEnviar = () => {
    if (nombre.trim()) {
      setEnviado(true);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #e8d5c4",
    fontSize: "14px",
    color: "#4a3728",
    background: "#fdf6f0",
    boxSizing: "border-box",
    fontFamily: "Georgia, serif",
    outline: "none",
    marginTop: "6px"
  };

  const selectStyle = {
    ...inputStyle,
    cursor: "pointer"
  };

  if (enviado) {
    return (
      <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ textAlign:"center" }}>
          <div style={{ fontSize:"60px", marginBottom:"20px" }}>🎉</div>
          <h2 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"26px", margin:"0 0 12px" }}>¡Gracias, {nombre}!</h2>
          <p style={{ color:"#7a5c4a", fontSize:"15px", lineHeight:"1.8", margin:0 }}>
            Hemos recibido tu confirmación.<br/>¡Estamos deseando celebrarlo con vosotros! 🤍
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>CONFIRMA TU ASISTENCIA</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>¿Venís a la boda?</h2>
        <p style={{ color:"#b89a7a", fontSize:"13px", margin:0 }}>Antes del 1 de marzo de 2027</p>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        {/* Nombre */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>TU NOMBRE</p>
          <input
            type="text"
            placeholder="Nombre y apellidos"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* Acompañantes */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>ACOMPAÑANTES</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 8px" }}>¿Cuántas personas venís en total? (sin contarte a ti)</p>
          <select value={acompanantes} onChange={(e) => actualizarAcompanantes(e.target.value)} style={selectStyle}>
            {[0,1,2,3,4,5,6,7,8].map(n => (
              <option key={n} value={n}>{n === 0 ? "Solo yo" : `${n} acompañante${n > 1 ? "s" : ""}`}</option>
            ))}
          </select>

          {datosAcompanantes.map((a, i) => (
            <div key={i} style={{ marginTop:"16px", background:"#fdf6f0", borderRadius:"10px", padding:"14px" }}>
              <p style={{ fontSize:"12px", color:"#b89a7a", letterSpacing:"2px", margin:"0 0 10px" }}>ACOMPAÑANTE {i + 1}</p>
              <input
                type="text"
                placeholder="Nombre y apellidos"
                value={a.nombre}
                onChange={(e) => actualizarDato(i, "nombre", e.target.value)}
                style={{ ...inputStyle, marginBottom:"8px" }}
              />
              <input
                type="number"
                placeholder="Edad"
                value={a.edad}
                onChange={(e) => actualizarDato(i, "edad", e.target.value)}
                style={{ ...inputStyle, marginBottom:"8px" }}
              />
              <select value={a.menu} onChange={(e) => actualizarDato(i, "menu", e.target.value)} style={selectStyle}>
                <option value="">Selecciona menú</option>
                <option value="adulto">Menú adulto</option>
                <option value="nino">Menú niño (menores de 12 años)</option>
              </select>
            </div>
          ))}
        </div>

        {/* Autobús */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>AUTOBÚS</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 8px" }}>Sale desde Plaza Castilla a las 17:10 h. Vuelta a la 1:30 h.</p>
          <select value={autobus} onChange={(e) => setAutobus(e.target.value)} style={selectStyle}>
            <option value="">Selecciona una opción</option>
            <option value="ida-vuelta">Sí, quiero plaza de ida y vuelta</option>
            <option value="ida">Solo ida</option>
            <option value="vuelta">Solo vuelta</option>
            <option value="no">No, gracias</option>
          </select>
        </div>

        {/* Alergias */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>ALERGIAS E INTOLERANCIAS</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 8px" }}>¿Algún miembro de tu grupo tiene alergia o intolerancia alimentaria?</p>
          <textarea
            placeholder="Ej: Pedro es alérgico a los frutos secos, María es intolerante al gluten..."
            value={alergias}
            onChange={(e) => setAlergias(e.target.value)}
            rows={3}
            style={{ ...inputStyle, resize:"none" }}
          />
        </div>

        {/* Número de mesa */}{/* Plato principal */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>PLATO PRINCIPAL</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 12px" }}>¿Qué preferís para el plato principal?</p>
          <select value={platoPrincipal} onChange={(e) => setPlatoPrincipal(e.target.value)} style={selectStyle}>
            <option value="">Selecciona una opción</option>
            <option value="carne">🥩 Carne</option>
            <option value="pescado">🐟 Pescado</option>
            <option value="especial">🥗 Menú especial (sin carne ni pescado)</option>
          </select>
        </div>
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px", textAlign:"center" }}>
          <div style={{ fontSize:"24px", marginBottom:"8px" }}>🪑</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 8px" }}>TU MESA</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:0, lineHeight:"1.6" }}>
            Te comunicaremos el número de mesa<br/>cuando tengamos el seating plan listo. 🤍
          </p>
        </div>

        {!nombre.trim() && (
          <p style={{ fontSize:"12px", color:"#b89a7a", textAlign:"center", margin:"0 0 12px" }}>
            Escribe tu nombre para poder confirmar
          </p>
        )}

        <button
          onClick={handleEnviar}
          disabled={!nombre.trim()}
          style={{
            width:"100%",
            background: nombre.trim() ? "#4a3728" : "#e8d5c4",
            color: nombre.trim() ? "white" : "#b89a7a",
            border:"none",
            borderRadius:"30px",
            padding:"16px",
            fontSize:"16px",
            cursor: nombre.trim() ? "pointer" : "not-allowed",
            fontFamily:"Georgia, serif",
            letterSpacing:"1px"
          }}>
          Confirmar asistencia 🤍
        </button>

      </div>
    </div>
  );
}

export default Confirmacion;