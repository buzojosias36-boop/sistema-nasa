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
  const [seccion, setSeccion] = useState("horarios");

  const reservar = (hora, destino, precio) => {
    if (!fecha) {
      alert("Por favor seleccioná la fecha del viaje.");
      return;
    }

    const mensaje = `Hola, quiero reservar pasaje con Nasa Golondrina.
Destino: ${destino}
Fecha: ${fecha}
Horario: ${hora}
Precio: Gs. ${precio}`;

    window.open(`https://wa.me/595994652330?text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <img src="/Logo principal sin fondo.jpg" alt="Nasa Golondrina" />
          <div>
            <h1>Nasa Golondrina</h1>
            <p>Paraguay</p>
          </div>
        </div>

        <div className="nav-buttons">
          <button onClick={() => setSeccion("horarios")}>Horarios</button>
          <button onClick={() => setSeccion("mision")}>Misión</button>
          <button onClick={() => setSeccion("vision")}>Visión</button>
          <button onClick={() => setSeccion("contactos")}>Contactos</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-card">
          <span className="tag">Venta online de pasajes</span>
          <h2>Viajá por Paraguay con comodidad y confianza</h2>
          <p>Consultá horarios, precios y reservá tu pasaje directo por WhatsApp.</p>

          <div className="date-box">
            <label>Fecha del viaje</label>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </div>
        </div>
      </section>

      {seccion === "horarios" && (
        <section className="section">
          <h2>Horarios y precios</h2>
          <p className="sub">Seleccioná la fecha arriba y elegí tu salida.</p>

          <div className="grid">
            {horarios.map(([hora, destino], index) => {
              const precio = precios[destino] || "Consultar";
              return (
                <div className="trip-card" key={index}>
                  <div className="trip-top">
                    <strong>{hora}</strong>
                    <span>Disponible</span>
                  </div>

                  <h3>{destino}</h3>

                  <div className="row">
                    <span>Precio</span>
                    <b>Gs. {precio}</b>
                  </div>

                  <div className="row">
                    <span>Días</span>
                    <b>Lunes a Domingo</b>
                  </div>

                  <button onClick={() => reservar(hora, destino, precio)}>
                    Reservar por WhatsApp
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {seccion === "mision" && (
        <section className="section">
          <div className="premium-box">
            <h2>Misión</h2>
            <p>
              Brindar un servicio de transporte seguro, cómodo, puntual y confiable,
              conectando ciudades, familias y empresas en todo Paraguay con atención
              cercana y compromiso permanente.
            </p>
          </div>
        </section>
      )}

      {seccion === "vision" && (
        <section className="section">
          <div className="premium-box">
            <h2>Visión</h2>
            <p>
              Ser una empresa líder en transporte nacional, reconocida por su calidad,
              innovación tecnológica, seguridad operativa y excelencia en la experiencia
              de cada pasajero.
            </p>
          </div>
        </section>
      )}

      {seccion === "contactos" && (
        <section className="section">
          <h2>Contactos por ciudad</h2>
          <p className="sub">Oficinas, teléfonos y puntos de atención.</p>

          <div className="grid">
            {sucursales.map(([ciudad, direccion, telefono], index) => (
              <div className="office-card" key={index}>
                <h3>{ciudad}</h3>
                <p>📍 {direccion}</p>
                <p>📞 {telefono}</p>
                <div>
                  <span>Venta de pasajes</span>
                  <span>Encomiendas</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer>
        <b>Nasa Golondrina Paraguay</b>
        <p>Reservas: 0994 652 330</p>
      </footer>
    </div>
  );
}

export default App;