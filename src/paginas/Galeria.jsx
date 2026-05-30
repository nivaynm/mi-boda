import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, orderBy, query } from "firebase/firestore";

const CLOUD_NAME = "dlsozovef";
const UPLOAD_PRESET = "boda_fotos";

function Galeria() {
  const [fotos, setFotos] = useState([]);
  const [subiendo, setSubiendo] = useState(false);
  const [fotoGrande, setFotoGrande] = useState(null);

  useEffect(() => {
    cargarFotos();
  }, []);

  const cargarFotos = async () => {
    try {
      const q = query(collection(db, "fotos"), orderBy("fecha", "desc"));
      const snapshot = await getDocs(q);
      setFotos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (e) {
      console.log("Error cargando fotos", e);
    }
  };

  const subirFotos = async (e) => {
    const archivos = Array.from(e.target.files);
    if (!archivos.length) return;
    setSubiendo(true);
    try {
      for (const archivo of archivos) {
        const formData = new FormData();
        formData.append("file", archivo);
        formData.append("upload_preset", UPLOAD_PRESET);
        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          { method: "POST", body: formData }
        );
        const data = await res.json();
        if (data.secure_url) {
          const docRef = await addDoc(collection(db, "fotos"), {
            url: data.secure_url,
            fecha: new Date()
          });
          setFotos(prev => [{ id: docRef.id, url: data.secure_url, fecha: new Date() }, ...prev]);
        }
      }
    } catch (e) {
      alert("Error al subir las fotos. Inténtalo de nuevo.");
    }
    setSubiendo(false);
  };

  return (
    <div style={{ minHeight:"100vh", background:"#fdf6f0", fontFamily:"Georgia, serif", padding:"50px 20px 100px" }}>

      <div style={{ textAlign:"center", marginBottom:"36px" }}>
        <p style={{ color:"#b89a7a", letterSpacing:"4px", fontSize:"12px", margin:"0 0 8px" }}>COMPARTID VUESTROS MOMENTOS</p>
        <h2 style={{ color:"#4a3728", fontSize:"28px", fontWeight:"normal", margin:"0 0 10px" }}>Galería de fotos</h2>
        <p style={{ fontSize:"14px", color:"#7a5c4a", margin:0 }}>Subid vuestras fotos favoritas de la boda 📷</p>
      </div>

      <div style={{ maxWidth:"480px", margin:"0 auto" }}>

        <label style={{
          display:"block",
          background:"#4a3728",
          color:"white",
          textAlign:"center",
          padding:"16px",
          borderRadius:"30px",
          fontSize:"15px",
          cursor:"pointer",
          marginBottom:"24px",
          letterSpacing:"1px"
        }}>
          {subiendo ? "Subiendo fotos... ⏳" : "📷 Subir fotos"}
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={subirFotos}
            style={{ display:"none" }}
            disabled={subiendo}
          />
        </label>

        {fotos.length === 0 ? (
          <div style={{ textAlign:"center", padding:"40px 20px", background:"white", borderRadius:"14px", border:"1px solid #e8d5c4" }}>
            <div style={{ fontSize:"40px", marginBottom:"12px" }}>📸</div>
            <p style={{ color:"#7a5c4a", fontSize:"14px", margin:0 }}>
              Aún no hay fotos. ¡Sé el primero en subir una!
            </p>
          </div>
        ) : (
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" }}>
            {fotos.map((foto, i) => (
              <div key={foto.id || i} onClick={() => setFotoGrande(foto.url)}
                style={{ borderRadius:"12px", overflow:"hidden", cursor:"pointer", aspectRatio:"1", background:"#e8d5c4" }}>
                <img
                  src={foto.url}
                  alt={`Foto ${i + 1}`}
                  style={{ width:"100%", height:"100%", objectFit:"cover" }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {fotoGrande && (
        <div onClick={() => setFotoGrande(null)} style={{
          position:"fixed", top:0, left:0, right:0, bottom:0,
          background:"rgba(0,0,0,0.9)", display:"flex",
          alignItems:"center", justifyContent:"center", zIndex:1000, padding:"20px"
        }}>
          <img src={fotoGrande} alt="Foto grande" style={{ maxWidth:"100%", maxHeight:"100%", borderRadius:"12px" }} />
          <button onClick={() => setFotoGrande(null)} style={{
            position:"absolute", top:"20px", right:"20px",
            background:"none", border:"none", color:"white", fontSize:"30px", cursor:"pointer"
          }}>✕</button>
        </div>
      )}
    </div>
  );
}

export default Galeria;