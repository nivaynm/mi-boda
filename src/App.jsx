import { useState, createContext } from "react";
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
import Invitados from "./paginas/Invitados";
import { textos } from "./traducciones";

export const IdiomaContext = createContext("es");

const getTabs = (t) => [
  { id:"inicio", label: t.inicio, emoji:"💍" },
  { id:"programa", label: t.programa, emoji:"🕐" },
  { id:"lugar", label: t.lugar, emoji:"📍" },
  { id:"menu", label: t.menu, emoji:"🍽️" },
  { id:"transporte", label: t.transporte, emoji:"🚌" },
  { id:"confirmacion", label: t.confirmacion, emoji:"✅" },
  { id:"regalo", label: t.regalo, emoji:"🏦" },
  { id:"galeria", label: t.galeria, emoji:"📷" },
  { id:"mensajes", label: t.mensajes, emoji:"💬" },
  { id:"reto", label: t.reto, emoji:"📸" },
  { id:"ruleta", label: t.ruleta, emoji:"🎡" },
  { id:"sorteo", label: t.sorteo, emoji:"🔒" },
  { id:"invitados", label:"Invitados", emoji:"👥" },
];

function App() {
  const [paginaActual, setPaginaActual] = useState("inicio");
  const [idioma, setIdioma] = useState("es");
  const t = textos[idioma];
  const tabs = getTabs(t);

  const renderPagina = () => {
    switch (paginaActual) {
      case "inicio": return <Inicio t={t} />;
      case "lugar": return <Lugar t={t} />;
      case "regalo": return <Regalo t={t} />;
      case "confirmacion": return <Confirmacion t={t} />;
      case "galeria": return <Galeria t={t} />;
      case "mensajes": return <Mensajes t={t} />;
      case "menu": return <MenuBoda t={t} />;
      case "programa": return <Programa t={t} />;
      case "transporte": return <Transporte t={t} />;
      case "reto": return <RetoFotos t={t} />;
      case "ruleta": return <Ruleta t={t} />;
      case "sorteo": return <Sorteo t={t} />;
      case "invitados": return <Invitados t={t} />;
      default: return <Inicio t={t} />;
    }
  };

  return (
    <div style={{ fontFamily:"Georgia, serif", background:"#fdf6f0", minHeight:"100vh" }}>

      <div style={{ position:"fixed", top:"12px", right:"12px", zIndex:1000 }}>
        <button
          onClick={() => setIdioma(idioma === "es" ? "en" : "es")}
          style={{ background:"white", border:"1px solid #e8d5c4", borderRadius:"20px", padding:"6px 14px", fontSize:"13px", cursor:"pointer", color:"#4a3728", fontFamily:"Georgia, serif", boxShadow:"0 2px 8px rgba(0,0,0,0.1)" }}>
          {idioma === "es" ? "🇬🇧 English" : "🇪🇸 Español"}
        </button>
      </div>

      {renderPagina()}

<div style={{ 
        position:"fixed", bottom:0, left:0, right:0, 
        background:"white", borderTop:"1px solid #e8d5c4", 
        display:"flex", overflowX:"auto", 
        padding:"4px 0 8px",
        WebkitOverflowScrolling:"touch",
        scrollbarWidth:"none",
        msOverflowStyle:"none"
      }}>
        {tabs.map(tab => (
          <button key={tab.id} onClick={() => setPaginaActual(tab.id)}
            style={{ 
              background:"none", border:"none", cursor:"pointer", 
              display:"flex", flexDirection:"column", alignItems:"center", 
              padding:"4px 8px", minWidth:"56px", flexShrink:0,
              color: paginaActual === tab.id ? "#4a3728" : "#b89a7a", 
              borderTop: paginaActual === tab.id ? "2px solid #b89a7a" : "2px solid transparent" 
            }}>
            <span style={{ fontSize:"18px" }}>{tab.emoji}</span>
            <span style={{ fontSize:"9px", marginTop:"2px", whiteSpace:"nowrap" }}>{tab.label}</span>
          </button>
        ))}
      </div>