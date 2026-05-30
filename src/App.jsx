import { useState } from "react";
import Inicio from "./paginas/Inicio";
import Lugar from "./paginas/Lugar";
import Regalo from "./paginas/Regalo";
import Confirmacion from "./paginas/Confirmacion";
import Galeria from "./paginas/Galeria";
import Mensajes from "./paginas/Mensajes";
import MenuBoda from "./paginas/MenuBoda";
import Programa from "./paginas/Programa";
import Transporte from "./paginas/Transporte";
import RetoFotos from "./paginas/RetoFotos";
import Ruleta from "./paginas/Ruleta";
import Sorteo from "./paginas/Sorteo";

const tabs = [
  { id:"inicio", label:"Inicio", emoji:"💍" },
  { id:"programa", label:"Programa", emoji:"🕐" },
  { id:"lugar", label:"Lugar", emoji:"📍" },
  { id:"menu", label:"Menú", emoji:"🍽️" },
  { id:"transporte", label:"Transporte", emoji:"🚌" },
  { id:"confirmacion", label:"Asistencia", emoji:"✅" },
  { id:"regalo", label:"Regalo", emoji:"🏦" },
  { id:"galeria", label:"Fotos", emoji:"📷" },
  { id:"mensajes", label:"Mensajes", emoji:"💬" },
  { id:"reto", label:"Reto", emoji:"📸" },
  { id:"ruleta", label:"Ruleta", emoji:"🎡" },
  { id:"sorteo", label:"Sorteo", emoji:"🔒" },
];

function App() {
  const [paginaActual, setPaginaActual] = useState("inicio");

  const renderPagina = () => {
    switch (paginaActual) {
      case "inicio": return <Inicio />;
      case "lugar": return <Lugar />;
      case "regalo": return <Regalo />;
      case "confirmacion": return <Confirmacion />;
      case "galeria": return <Galeria />;
      case "mensajes": return <Mensajes />;
      case "menu": return <MenuBoda />;
      case "programa": return <Programa />;
      case "transporte": return <Transporte />;
      case "reto": return <RetoFotos />;
      case "ruleta": return <Ruleta />;
      case "sorteo": return <Sorteo />;
      default: return <Inicio />;
    }
  };

  return (
    <div style={{ fontFamily:"Georgia, serif", background:"#fdf6f0", minHeight:"100vh" }}>
      {renderPagina()}
      <div style={{ position:"fixed", bottom:0, left:0, right:0, background:"white", borderTop:"1px solid #e8d5c4", display:"flex", overflowX:"auto", padding:"8px 0" }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setPaginaActual(tab.id)}
            style={{ background:"none", border:"none", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", padding:"4px 10px", minWidth:"60px", color: paginaActual === tab.id ? "#4a3728" : "#b89a7a", borderTop: paginaActual === tab.id ? "2px solid #b89a7a" : "2px solid transparent" }}>
            <span style={{ fontSize:"20px" }}>{tab.emoji}</span>
            <span style={{ fontSize:"10px", marginTop:"2px", whiteSpace:"nowrap" }}>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;