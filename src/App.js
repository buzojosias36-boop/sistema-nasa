import React, { useState } from "react";
import "./App.css";

const horarios = :contentReference[oaicite:0]{index=0};

const contactos = [
  ["Asunción", "Avda. Fernando de la Mora y Avda. República Argentina, Asunción", "0981 668 662"],
  ["Ciudad del Este", "Avda. Eugenio Garay y Arturo Garcete, Ciudad del Este", "(061) 506 063"],
  ["Filadelfia", "Avda. Calle Chaco Boreal casi Calle O. Miller, Filadelfia", "(0491) 432 492"],
  ["Loma Plata", "3 de Noviembre casi Avda. Central, Loma Plata", "(0492) 252 250"],
  ["Neuland", "Calle PY16 y Puerto Casado, Neuland", "(0992) 399 115"],
  ["Pedro Juan Caballero", "Avda. Carlos Domínguez y Picuiba, Pedro Juan Caballero", "(0985) 107 691 / (0336) 273 835"],
];

function App() {
  const [seccion, setSeccion] = useState("horarios");
  const [fecha, setFecha] = useState("");
  const [viajeSeleccionado, setViajeSeleccionado] = useState(null);
  const [asiento, setAsiento] = useState(null);
  const [origen, setOrigen] = useState("Asunción");

  const consultar = (hora, destino, precio) => {
    if (!fecha) {
      alert("Por favor seleccioná la fecha del viaje.");
      return;
    }

    setViajeSeleccionado({ hora, destino, precio });
    setAsiento(null);
    setSeccion("asientos");
  };

  const rutaActual = window.location.pathname;

  return (
    <div className="page">

      <nav>
        <button onClick={() => setSeccion("horarios")}>Horarios</button>
        <button onClick={() => setSeccion("empresa")}>Empresa</button>
        <button onClick={() => setSeccion("contactos")}>Contactos</button>

        <button onClick={() => window.location.href = "/asuncion-ciudad-del-este"}>
          Asunción → CDE
        </button>
      </nav>

      {rutaActual === "/asuncion-ciudad-del-este" && (
        <section className="section">
          <h2>Pasajes Asunción a Ciudad del Este</h2>
          <p className="subtitle">
            Viajá de Asunción a Ciudad del Este con NASA Golondrina.
          </p>
        </section>
      )}

      <section className="hero">
        <div className="heroContent">
          <h2>Viajá por Paraguay con seguridad y comodidad</h2>

          <div className="dateBox">
            <label>Fecha del viaje</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="dateBox">
            <label>Estoy en</label>
            <select value={origen} onChange={(e) => setOrigen(e.target.value)}>
              <option>Asunción</option>
              <option>Ciudad del Este</option>
              <option>Concepción</option>
              <option>Pedro Juan Caballero</option>
            </select>
          </div>
        </div>
      </section>

      {seccion === "horarios" && (
        <section className="section">
          <h2>Horarios</h2>

          <div className="grid">
            {horarios
              .filter(([, destino]) => destino.startsWith(origen))
              .map(([hora, destino, precio], index) => (
                <div className="tripCard" key={index}>
                  <strong>{hora}</strong>
                  <h3>{destino}</h3>
                  <p>Gs. {precio}</p>

                  <button onClick={() => consultar(hora, destino, precio)}>
                    Consultar
                  </button>
                </div>
              ))}
          </div>
        </section>
      )}

      {seccion === "empresa" && (
        <section className="section">
          <h2>Empresa</h2>
          <p className="subtitle">
            Transporte nacional seguro y confiable.
          </p>
        </section>
      )}

      {seccion === "contactos" && (
        <section className="section">
          <h2>Contactos</h2>

          <div className="grid">
            {contactos.map(([c, d, t], i) => (
              <div key={i} className="contactCard">
                <h3>{c}</h3>
                <p>{d}</p>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {seccion === "asientos" && viajeSeleccionado && (
        <section className="section">
          <h2>Seleccioná asiento</h2>

          <div className="bus-layout">
            {Array.from({ length: 64 }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                className={asiento === num ? "seat selected" : "seat"}
                onClick={() => setAsiento(num)}
              >
                {num}
              </button>
            ))}
          </div>
        </section>
      )}

      <footer>
        <p>Nasa Golondrina Paraguay</p>
      </footer>

    </div>
  );
}

export default App;