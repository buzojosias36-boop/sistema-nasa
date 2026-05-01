import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">

      {/* HEADER */}
      <header className="header">
        <h1>Nasa Golondrina</h1>
        <p>Venta online de pasajes nacionales</p>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>Viajá por Paraguay con comodidad</h2>
        <p>Consultá horarios, precios y reservá tu pasaje directo por WhatsApp.</p>
      </section>

      {/* CONTACTOS */}
      <section className="contactos">
        <h2>Contactos por Ciudad</h2>

        <div className="grid">

          <div className="card">
            <h3>ASUNCIÓN</h3>
            <p>Avda. Fernando de la Mora y Avda. República Argentina</p>
            <p>📞 0981668662</p>
          </div>

          <div className="card">
            <h3>CIUDAD DEL ESTE</h3>
            <p>Avda. Eugenio Garay y Arturo Garcete</p>
            <p>📞 (061) 506 063</p>
          </div>

          <div className="card">
            <h3>FILADELFIA</h3>
            <p>Avda. Calle Chaco Boreal casi Calle O. Miller</p>
            <p>📞 (0491) 432 492</p>
          </div>

          <div className="card">
            <h3>LOMA PLATA</h3>
            <p>3 de Noviembre casi Avda. Central</p>
            <p>📞 (0492) 252 250</p>
          </div>

          <div className="card">
            <h3>NEULAND</h3>
            <p>Calle PY16 y Puerto Casado</p>
            <p>📞 (0992) 399 115</p>
          </div>

          <div className="card">
            <h3>PEDRO JUAN CABALLERO</h3>
            <p>Avda. Carlos Dominguez y Picuiba</p>
            <p>📞 (0985) 107 691</p>
          </div>

        </div>
      </section>

      {/* MISION / VISION */}
      <section className="info">
        <h2>Nuestra Empresa</h2>

        <div className="info-box">
          <h3>Misión</h3>
          <p>
            Brindar un servicio de transporte seguro, cómodo y confiable,
            conectando personas y ciudades en todo Paraguay.
          </p>
        </div>

        <div className="info-box">
          <h3>Visión</h3>
          <p>
            Ser la empresa líder en transporte nacional, innovando en tecnología,
            servicio al cliente y experiencia de viaje.
          </p>
        </div>
      </section>

    </div>
  );
}

export default App;