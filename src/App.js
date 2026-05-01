import React, { useState } from "react";
import "./App.css";

function App() {
  const [seccion, setSeccion] = useState("inicio");

  const reservar = (destino, hora) => {
    const mensaje = `Hola, quiero reservar un pasaje a ${destino} a las ${hora}`;
    window.open(
      `https://wa.me/595981668662?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <div className="navbar">
        <img src="/Logo principal sin fondo.jpg" alt="logo" className="logo" />
        <div className="menu">
          <button onClick={() => setSeccion("inicio")}>Inicio</button>
          <button onClick={() => setSeccion("horarios")}>Horarios</button>
          <button onClick={() => setSeccion("contactos")}>Contactos</button>
          <button onClick={() => setSeccion("empresa")}>Empresa</button>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="contenido">

        {seccion === "inicio" && (
          <div className="hero">
            <h1>Nasa Golondrina</h1>
            <p>Transporte premium en Paraguay</p>
          </div>
        )}

        {seccion === "horarios" && (
          <div className="grid">
            <div className="card">
              <h3>05:00</h3>
              <p>Campo Aceval</p>
              <p>Gs. 140.000</p>
              <button onClick={() => reservar("Campo Aceval", "05:00")}>
                Reservar
              </button>
            </div>

            <div className="card">
              <h3>06:00</h3>
              <p>Loma Plata</p>
              <p>Gs. 140.000</p>
              <button onClick={() => reservar("Loma Plata", "06:00")}>
                Reservar
              </button>
            </div>

            <div className="card">
              <h3>06:20</h3>
              <p>Ciudad del Este</p>
              <p>Gs. 120.000</p>
              <button onClick={() => reservar("CDE", "06:20")}>
                Reservar
              </button>
            </div>
          </div>
        )}

        {seccion === "contactos" && (
          <div className="grid">
            <div className="card">
              <h3>Asunción</h3>
              <p>0981 668 662</p>
            </div>

            <div className="card">
              <h3>Ciudad del Este</h3>
              <p>(061) 506 063</p>
            </div>

            <div className="card">
              <h3>Filadelfia</h3>
              <p>(0491) 432 492</p>
            </div>
          </div>
        )}

        {seccion === "empresa" && (
          <div className="empresa">
            <h2>Misión</h2>
            <p>Brindar transporte seguro, cómodo y eficiente.</p>

            <h2>Visión</h2>
            <p>Ser la empresa líder en transporte en Paraguay.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;