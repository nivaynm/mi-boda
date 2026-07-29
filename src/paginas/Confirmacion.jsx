import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Confirmacion({ t }) {
  const [nombre, setNombre] = useState("");
  const [acompanantes, setAcompanantes] = useState(0);
  const [datosAcompanantes, setDatosAcompanantes] = useState([]);
  const [autobus, setAutobus] = useState("");
  const [alergias, setAlergias] = useState("");
  const [platoPrincipal, setPlatoPrincipal] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const es = t.idioma !== "en";

  const actualizarAcompanantes = (num) => {
    const n = parseInt(num) || 0;
    setAcompanantes(n);
    const nuevos = Array.from({ length: n }, (_, i) => datosAcompanantes[i] || { nombre: "", edad: "", tipo: "", menu: "" });
    setDatosAcompanantes(nuevos);
  };

  const actualizarDato = (index, campo, valor) => {
    const nuevos = [...datosAcompanantes];
    nuevos[index] = { ...nuevos[index], [campo]: valor };
    if (campo === "tipo") nuevos[index].menu = "";
    setDatosAcompanantes(nuevos);
  };

  const handleEnviar = async () => {
    if (!nombre.trim()) return;
    setEnviando(true);
    try {
      await addDoc(collection(db, "confirmaciones"), {
        nombre: nombre.trim(),
        acompanantes: acompanantes,
        datosAcompanantes: datosAcompanantes,
        autobus: autobus,
        alergias: alergias.trim(),
        platoPrincipal: platoPrincipal,
        fecha: new Date()
      });
    } catch (e) {
      console.log("Error guardando confirmación", e);
    }
    setEnviando(false);
    setEnviado(true);
  };

  const inputStyle = {
    width:"100%", padding:"12px 16px", borderRadius:"10px",
    border:"1px solid #e8d5c4", fontSize:"14px", color:"#4a3728",
    background:"#fdf6f0", boxSizing:"border-box",
    fontFamily:"Georgia, serif", outline:"none"
  };
  const selectStyle = { ...inputStyle, cursor:"pointer" };

  if (enviado) {
    return (
      <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px", display:"flex", alignItems:"center", justifyContent:"center" }}>
        <div style={{ textAlign:"center" }}>
          <div style={{ fontSize:"60px", marginBottom:"20px" }}>🎉</div>
          <h2 style={{ color:"#4a3728", fontWeight:"normal", fontSize:"26px", margin:"0 0 12px" }}>
            {es ? `¡Gracias, ${nombre}!` : `Thank you, ${nombre}!`}
          </h2>
          <p style={{ color:"#7a5c4a", fontSize:"15px", lineHeight:"1.8", margin:0 }}>
            {es ? "Hemos recibido tu confirmación. ¡Estamos deseando celebrarlo con vosotros! 🤍" : "We have received your confirmation. We can't wait to celebrate with you! 🤍"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>
          {es ? "CONFIRMA TU ASISTENCIA" : "CONFIRM YOUR ATTENDANCE"}
        </p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>
          {es ? "¿Venís a la boda?" : "Will you join us?"}
        </h2>
        <p style={{ color:"#b89a7a", fontSize:"13px", margin:0 }}>
          {es ? "Antes del 1 de marzo de 2027" : "Before 1st March 2027"}
        </p>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        {/* Nombre */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>
            {es ? "TU NOMBRE" : "YOUR NAME"}
          </p>
          <input type="text" placeholder={es ? "Nombre y apellidos" : "Full name"} value={nombre} onChange={(e) => setNombre(e.target.value)} style={inputStyle} />
        </div>

        {/* Plato principal */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>
            {es ? "PLATO PRINCIPAL" : "MAIN COURSE"}
          </p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 8px" }}>
            {es ? "¿Qué preferís para el plato principal?" : "What would you prefer for the main course?"}
          </p>
          <select value={platoPrincipal} onChange={(e) => setPlatoPrincipal(e.target.value)} style={selectStyle}>
            <option value="">{es ? "Selecciona una opción" : "Select an option"}</option>
            <option value="carne">{es ? "🥩 Carne" : "🥩 Meat"}</option>
            <option value="pescado">{es ? "🐟 Pescado" : "🐟 Fish"}</option>
            <option value="vegetariano">{es ? "🥗 Vegetariano" : "🥗 Vegetarian"}</option>
          </select>
        </div>

        {/* Acompañantes */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>
            {es ? "ACOMPAÑANTES" : "GUESTS"}
          </p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 8px" }}>
            {es ? "¿Cuántas personas venís en total? (sin contarte a ti)" : "How many people in your group? (not counting yourself)"}
          </p>
          <select value={acompanantes} onChange={(e) => actualizarAcompanantes(e.target.value)} style={selectStyle}>
            {[0,1,2,3,4].map(n => (
              <option key={n} value={n}>
                {n === 0
                  ? (es ? "Solo yo" : "Just me")
                  : `${n} ${es ? `acompañante${n > 1 ? "s" : ""}` : `guest${n > 1 ? "s" : ""}`}`}
              </option>
            ))}
          </select>

          {datosAcompanantes.map((a, i) => (
            <div key={i} style={{ marginTop:"16px", background:"#fdf6f0", borderRadius:"10px", padding:"14px" }}>
              <p style={{ fontSize:"12px", color:"#b89a7a", letterSpacing:"2px", margin:"0 0 10px" }}>
                {es ? `ACOMPAÑANTE ${i + 1}` : `GUEST ${i + 1}`}
              </p>

              {/* Nombre */}
              <input type="text" placeholder={es ? "Nombre y apellidos" : "Full name"} value={a.nombre} onChange={(e) => actualizarDato(i, "nombre", e.target.value)} style={{ ...inputStyle, marginBottom:"8px" }} />

              {/* Edad */}
              <input type="number" placeholder={es ? "Edad" : "Age"} value={a.edad} onChange={(e) => actualizarDato(i, "edad", e.target.value)} style={{ ...inputStyle, marginBottom:"8px" }} />

              {/* Adulto o niño */}
              <select value={a.tipo || ""} onChange={(e) => actualizarDato(i, "tipo", e.target.value)} style={{ ...selectStyle, marginBottom:"8px" }}>
                <option value="">{es ? "¿Adulto o niño?" : "Adult or child?"}</option>
                <option value="adulto">{es ? "Adulto" : "Adult"}</option>
                <option value="nino">{es ? "Niño" : "Child"}</option>
              </select>

              {/* Plato solo para adultos */}
              {a.tipo === "adulto" && (
                <select value={a.menu || ""} onChange={(e) => actualizarDato(i, "menu", e.target.value)} style={selectStyle}>
                  <option value="">{es ? "Selecciona plato principal" : "Select main course"}</option>
                  <option value="carne">{es ? "🥩 Carne" : "🥩 Meat"}</option>
                  <option value="pescado">{es ? "🐟 Pescado" : "🐟 Fish"}</option>
                  <option value="vegetariano">{es ? "🥗 Vegetariano" : "🥗 Vegetarian"}</option>
                </select>
              )}

              {a.tipo === "nino" && (
                <div style={{ background:"#f0f7f0", borderRadius:"8px", padding:"10px 14px", fontSize:"13px", color:"#5d8a3c" }}>
                  {es ? "✓ Menú niño asignado" : "✓ Children's menu assigned"}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Autobús */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>
            {es ? "AUTOBÚS" : "SHUTTLE BUS"}
          </p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 8px" }}>
            🚌 17:10 h · Plaza Castilla → 01:30 h · Plaza Castilla
          </p>
          <select value={autobus} onChange={(e) => setAutobus(e.target.value)} style={selectStyle}>
            <option value="">{es ? "Selecciona una opción" : "Select an option"}</option>
            <option value="ida-vuelta">{es ? "Sí, ida y vuelta" : "Yes, both ways"}</option>
            <option value="ida">{es ? "Solo ida" : "Outbound only"}</option>
            <option value="vuelta">{es ? "Solo vuelta" : "Return only"}</option>
            <option value="no">{es ? "No, gracias" : "No, thank you"}</option>
          </select>
        </div>

        {/* Alergias */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 14px" }}>
            {es ? "ALERGIAS E INTOLERANCIAS" : "ALLERGIES & INTOLERANCES"}
          </p>
          <textarea
            placeholder={es ? "Ej: Pedro es alérgico a los frutos secos..." : "E.g: Peter is allergic to nuts..."}
            value={alergias}
            onChange={(e) => setAlergias(e.target.value)}
            rows={3}
            style={{ ...inputStyle, resize:"none" }}
          />
        </div>

        {/* Mesa */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px", textAlign:"center" }}>
          <div style={{ fontSize:"24px", marginBottom:"8px" }}>🪑</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", margin:"0 0 8px" }}>
            {es ? "TU MESA" : "YOUR TABLE"}
          </p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:0, lineHeight:"1.6" }}>
            {es ? "Te comunicaremos el número de mesa cuando tengamos el seating plan listo. 🤍" : "We will let you know your table number once the seating plan is ready. 🤍"}
          </p>
        </div>

        <button onClick={handleEnviar} disabled={!nombre.trim() || enviando}
          style={{
            width:"100%",
            background: nombre.trim() ? "#4a3728" : "#e8d5c4",
            color: nombre.trim() ? "white" : "#b89a7a",
            border:"none", borderRadius:"30px", padding:"16px",
            fontSize:"16px",
            cursor: nombre.trim() ? "pointer" : "not-allowed",
            fontFamily:"Georgia, serif", letterSpacing:"1px"
          }}>
          {enviando
            ? (es ? "Enviando... ⏳" : "Sending... ⏳")
            : (es ? "Confirmar asistencia 🤍" : "Confirm attendance 🤍")}
        </button>

      </div>
    </div>
  );
}

export default Confirmacion;