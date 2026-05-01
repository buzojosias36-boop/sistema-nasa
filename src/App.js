import React, { useState } from "react";
import "./App.css";

const precios = {
  "Campo Aceval": "140.000",
  "Loma Plata": "140.000",
  "Concepción": "150.000",
  "Ciudad del Este": "120.000",
  "Pedro Juan Caballero": "150.000",
  "Presidente Franco": "100.000",
  "Horqueta": "150.000",
  "Mariscal Estigarribia": "140.000",
  "San Pedro": "120.000",
  "Neuland": "140.000",
  "Vallemí": "150.000",
  "Filadelfia": "140.000",
};

const horarios = [
  ["05:00", "Campo Aceval"],
  ["06:00", "Loma Plata"],
  ["06:20", "Ciudad del Este"],
  ["06:30", "Concepción"],
  ["07:00", "Ciudad del Este"],
  ["09:00", "Ciudad del Este"],
  ["09:30", "Concepción"],
  ["09:40", "Ciudad del Este"],
  ["10:00", "Pedro Juan Caballero"],
  ["10:20", "Presidente Franco"],
  ["10:45", "Concepción"],
  ["13:30", "Pedro Juan Caballero"],
  ["14:00", "Horqueta"],
  ["14:00", "Loma Plata"],
  ["14:30", "Horqueta"],
  ["14:30", "Mariscal Estigarribia"],
  ["16:40", "Presidente Franco"],
  ["21:15", "Mariscal Estigarribia"],
  ["21:30", "San Pedro"],
  ["21:45", "Horqueta"],
  ["22:00", "Neuland"],
  ["22:15", "Vallemí"],
  ["22:50", "Concepción"],
  ["23:00", "Loma Plata"],
  ["23:30", "Ciudad del Este"],
  ["23:45", "Pedro Juan Caballero"],
];

const sucursales = [
  ["Asunción", "Avda. Fernando de la Mora y Avda. República Argentina, Asunción", "(0981) 668 662"],
  ["Ciudad del Este", "Avda. Eugenio Garay y Arturo Garcete, Ciudad del Este", "(061) 506 063"],
  ["Filadelfia", "Avda. Calle Chaco Boreal casi Calle O. Miller, Filadelfia", "(0491) 432 492"],
  ["Loma Plata", "3 de Noviembre casi Avda. Central, Loma Plata", "(0492) 252 250"],
  ["Neuland", "Calle PY16 y Puerto Casado, Neuland", "(0992) 399 115"],
  ["Pedro Juan Caballero", "Avda. Carlos Domínguez y Picuiba, Pedro Juan Caballero", "(0985) 107 691 / (0336) 273 835"],
];

function App() {
  const [fecha, setFecha] = useState("");

  const reservar = (hora, destino, precio) => {
    if (!fecha) {
      alert("Por favor seleccioná la fecha del viaje.");
      return;
    }

    const mensaje = `Hola, quiero reservar pasaje con Nasa Golondrina.
Destino: ${destino}
Fecha del viaje: ${fecha}
Horario: ${hora}
Precio: Gs. ${precio}`;

    window.open(
      `https://wa.me/595994652330?text=${encodeURIComponent(mensaje)}`,
      "_blank"
    );
  };

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>Nasa Golondrina</h1>
          <p>Venta online de pasajes nacionales</p>
        </div>
        <a className="phone-button" href="https://wa.me/595994652330">
          Reservas: 0994 652 330
        </a>
      </header>

      <section className="hero">
        <div className="hero-box">
          <h2>Viajá por Paraguay con comodidad</h2>
          <p>Consultá horarios, precios y reservá tu pasaje directo por WhatsApp.</p>

          <label>Fecha del viaje</label>
          <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
        </div>
      </section>

      <section className="section">
        <h2>Horarios y precios</h2>
        <p>Seleccioná la fecha arriba y luego tocá reservar.</p>

        <div className="grid">
          {horarios.map(([hora, destino], index) => {
            const precio = precios[destino] || "Consultar";

            return (
              <div className="card" key={index}>
                <h3>{hora}</h3>
                <h4>{destino}</h4>
                <p><b>Precio:</b> Gs. {precio}</p>
                <p><b>Días:</b> Lunes a Domingo</p>
                <button onClick={() => reservar(hora, destino, precio)}>
                  Reservar por WhatsApp
                </button>
              </div>
            );
          })}
        </div>
      </section>

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

      <section className="contactos">
        <h2>Contactos por ciudad</h2>

        <div className="grid">
          {sucursales.map(([ciudad, direccion, telefono], index) => (
            <div className="card" key={index}>
              <h3>{ciudad}</h3>
              <p>📍 {direccion}</p>
              <p>📞 {telefono}</p>
              <span className="badge">Venta de pasajes</span>
              <span className="badge">Encomiendas</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;