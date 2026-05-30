import { useState } from "react";

function Regalo() {
  const [copiadoIBAN, setCopiadoIBAN] = useState(false);
  const [copiadoRef, setCopiadoRef] = useState(false);
  const [copiadoBizum, setCopiadoBizum] = useState(false);
  const [nombre, setNombre] = useState("");
  const [enviado, setEnviado] = useState(false);

  const copiar = (texto, setCopied) => {
    navigator.clipboard.writeText(texto);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEnviar = () => {
    if (nombre.trim()) {
      setEnviado(true);
    }
  };

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>VUESTRA APORTACIÓN</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:0 }}>Regalo</h2>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        {/* Mensaje personal */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px", textAlign:"center" }}>
          <div style={{ fontSize:"32px", marginBottom:"14px" }}>🌍✈️</div>
          <p style={{ fontSize:"15px", color:"#7a5c4a", lineHeight:"1.8", margin:"0 0 14px" }}>
            Recordad: lo importante es que vengáis con ilusión, alegría y ganas de pasarlo bien.
          </p>
          <p style={{ fontSize:"17px", color:"#4a3728", margin:0, lineHeight:"1.6" }}>
            Pero si queréis hacernos un regalo... ¡Sumad kilómetros a nuestra luna de miel! 🌙
          </p>
        </div>

        {/* De parte de */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 14px" }}>¿DE PARTE DE QUIÉN?</p>
          <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 10px" }}>
            Indica tu nombre para que podamos saber de quién es el regalo 🤍
          </p>
          <input
            type="text"
            placeholder="Tu nombre o nombres"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ width:"100%", padding:"12px 16px", borderRadius:"10px", border:"1px solid #e8d5c4", fontSize:"14px", color:"#4a3728", background:"#fdf6f0", boxSizing:"border-box", fontFamily:"Georgia, serif", outline:"none" }}
          />
          {enviado && (
            <p style={{ color:"#b89a7a", fontSize:"13px", textAlign:"center", margin:"10px 0 0" }}>
              ✓ Gracias, {nombre}. ¡Que no se te olvide el concepto en la transferencia!
            </p>
          )}
          {!enviado && (
            <button onClick={handleEnviar} style={{ marginTop:"12px", width:"100%", background:"#4a3728", color:"white", border:"none", borderRadius:"20px", padding:"12px", fontSize:"14px", cursor:"pointer", fontFamily:"Georgia, serif" }}>
              Guardar mi nombre
            </button>
          )}
        </div>

        {/* Transferencia bancaria */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"24px", textAlign:"center", marginBottom:"10px" }}>🏦</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 20px" }}>TRANSFERENCIA BANCARIA</p>

          {[
            { label:"Titular", valor:"Gabriel Illan" },
            { label:"Banco", valor:"Revolut Ltd" },
            { label:"Dirección", valor:"Porteus Road, London" },
            { label:"País", valor:"Reino Unido" },
          ].map(({ label, valor }) => (
            <div key={label} style={{ display:"flex", justifyContent:"space-between", padding:"10px 0", borderBottom:"1px solid #f0e6dc" }}>
              <span style={{ fontSize:"13px", color:"#b89a7a" }}>{label}</span>
              <span style={{ fontSize:"13px", color:"#4a3728" }}>{valor}</span>
            </div>
          ))}

          <div style={{ background:"#fdf6f0", borderRadius:"10px", padding:"14px 16px", margin:"16px 0 12px" }}>
            <p style={{ fontSize:"11px", color:"#b89a7a", letterSpacing:"2px", margin:"0 0 6px" }}>IBAN</p>
            <p style={{ fontSize:"15px", color:"#4a3728", margin:"0 0 10px", wordBreak:"break-all" }}>GB13REVO00997052226873</p>
            <button onClick={() => copiar("GB13REVO00997052226873", setCopiadoIBAN)} style={{ background:"#4a3728", color:"white", border:"none", borderRadius:"20px", padding:"8px 20px", fontSize:"13px", cursor:"pointer" }}>
              {copiadoIBAN ? "¡Copiado! ✓" : "Copiar IBAN"}
            </button>
          </div>

          <div style={{ background:"#fdf6f0", borderRadius:"10px", padding:"14px 16px" }}>
            <p style={{ fontSize:"11px", color:"#b89a7a", letterSpacing:"2px", margin:"0 0 6px" }}>CONCEPTO OBLIGATORIO</p>
            <p style={{ fontSize:"14px", color:"#4a3728", margin:"0 0 10px" }}>Boda de Gabriel y Vania</p>
            <button onClick={() => copiar("Boda de Gabriel y Vania", setCopiadoRef)} style={{ background:"#4a3728", color:"white", border:"none", borderRadius:"20px", padding:"8px 20px", fontSize:"13px", cursor:"pointer" }}>
              {copiadoRef ? "¡Copiado! ✓" : "Copiar concepto"}
            </button>
          </div>
        </div>

        {/* Bizum */}
        <div style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"14px", padding:"24px", marginBottom:"16px" }}>
          <div style={{ fontSize:"24px", textAlign:"center", marginBottom:"10px" }}>📱</div>
          <p style={{ color:"#b89a7a", letterSpacing:"3px", fontSize:"11px", textAlign:"center", margin:"0 0 20px" }}>BIZUM</p>

          <div style={{ background:"#fdf6f0", borderRadius:"10px", padding:"14px 16px", marginBottom:"12px" }}>
            <p style={{ fontSize:"11px", color:"#b89a7a", letterSpacing:"2px", margin:"0 0 6px" }}>NÚMERO</p>
            <p style={{ fontSize:"20px", color:"#4a3728", margin:"0 0 4px" }}>603 635 721</p>
            <p style={{ fontSize:"13px", color:"#7a5c4a", margin:"0 0 10px" }}>Vania Nuñez Montes</p>
            <button onClick={() => copiar("603635721", setCopiadoBizum)} style={{ background:"#4a3728", color:"white", border:"none", borderRadius:"20px", padding:"8px 20px", fontSize:"13px", cursor:"pointer" }}>
              {copiadoBizum ? "¡Copiado! ✓" : "Copiar número"}
            </button>
          </div>

          <p style={{ fontSize:"12px", color:"#b89a7a", textAlign:"center", margin:0 }}>
            Indica tu nombre en el concepto del Bizum 🤍
          </p>
        </div>

        <p style={{ fontSize:"12px", color:"#b89a7a", textAlign:"center", lineHeight:"1.8" }}>
          ¡Muchas gracias por vuestra generosidad! 🌙
        </p>

      </div>
    </div>
  );
}

export default Regalo;