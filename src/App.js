import React, { useState } from "react";
import "./App.css";

const horarios = [
  ["05:00", "Campo Aceval", "140.000"],
  ["06:00", "Loma Plata", "140.000"],
  ["06:20", "Ciudad del Este", "120.000"],
  ["06:30", "Concepción", "150.000"],
  ["07:00", "Ciudad del Este", "120.000"],
  ["09:00", "Ciudad del Este", "120.000"],
  ["09:30", "Concepción", "150.000"],
  ["09:40", "Ciudad del Este", "120.000"],
  ["10:00", "Pedro Juan Caballero", "150.000"],
  ["10:20", "Presidente Franco", "120.000"],
  ["10:45", "Concepción", "150.000"],
  ["13:30", "Pedro Juan Caballero", "150.000"],
  ["14:00", "Horqueta", "150.000"],
  ["14:00", "Loma Plata", "140.000"],
  ["14:30", "Horqueta", "150.000"],
  ["14:30", "Mariscal Estigarribia", "140.000"],
  ["16:40", "Presidente Franco", "120.000"],
  ["21:15", "Mariscal Estigarribia", "140.000"],
  ["21:30", "San Pedro", "120.000"],
  ["21:45", "Horqueta", "150.000"],
  ["22:00", "Neuland", "140.000"],
  ["22:15", "Vallemí", "150.000"],
  ["22:50", "Concepción", "150.000"],
  ["23:00", "Loma Plata", "140.000"],
  ["23:30", "Ciudad del Este", "120.000"],
  ["23:45", "Pedro Juan Caballero", "150.000"],
];

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

  const consultar = (hora, destino, precio) => {
    if (!fecha) {
      alert("Por favor seleccioná la fecha del viaje.");
      return;
    }

    setViajeSeleccionado({ hora, destino, precio });
    setAsiento(null);
    setSeccion("asientos");
  };

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <img src="/logo.png" alt="Nasa Golondrina" />
          <div>
            <h1>Nasa Golondrina</h1>
            <p>Transporte nacional de pasajeros</p>
          </div>
        </div>

        <nav>
          <button onClick={() => setSeccion("horarios")}>Horarios</button>
          <button onClick={() => setSeccion("empresa")}>Empresa</button>
          <button onClick={() => setSeccion("contactos")}>Contactos</button>
        </nav>
      </header>

      <section className="hero">
        <div className="heroContent">
          <span>NASA GOLONDRINA PARAGUAY</span>
          <h2>Viajá por Paraguay con seguridad, comodidad y confianza.</h2>
          <p>Consultá itinerarios, precios y reservá tu pasaje directo por WhatsApp.</p>

          <div className="dateBox">
            <label>Fecha del viaje</label>
            <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
          </div>
        </div>
      </section>

      {seccion === "horarios" && (
        <section className="section">
          <h2>Horarios y precios</h2>
          <p className="subtitle">Salidas disponibles desde Asunción.</p>

          <div className="grid">
            {horarios.map(([hora, destino, precio], index) => (
              <div className="tripCard" key={index}>
                <div className="timeRow">
                  <strong>{hora}</strong>
                  <span>Disponible</span>
                </div>

                <h3>{destino}</h3>

                <div className="infoRow">
                  <p>Precio</p>
                  <b>Gs. {precio}</b>
                </div>

                <div className="infoRow">
                  <p>Días</p>
                  <b>Lunes a Domingo</b>
                </div>

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
          <h2>Nuestra Empresa</h2>
          <p className="subtitle">Compromiso, seguridad y tradición.</p>

          <div className="empresaGrid">
            <div className="empresaCard">
              <h3>Misión</h3>
              <p>Brindar un servicio de transporte seguro, cómodo y confiable, conectando personas, familias y ciudades de Paraguay.</p>
            </div>

            <div className="empresaCard">
              <h3>Visión</h3>
              <p>Ser una empresa referente en transporte nacional, destacándonos por innovación, calidad de servicio y modernización tecnológica.</p>
            </div>

            <div className="empresaCard">
              <h3>Valores</h3>
              <p>Seguridad, honestidad, respeto, responsabilidad, servicio al cliente y compromiso con el Paraguay.</p>
            </div>
          </div>
        </section>
      )}

      {seccion === "contactos" && (
        <section className="section">
          <h2>Contactos por ciudad</h2>
          <p className="subtitle">Oficinas y puntos de atención.</p>

          <div className="grid">
            {contactos.map(([ciudad, direccion, telefono], index) => (
              <div className="contactCard" key={index}>
                <h3>{ciudad}</h3>
                <p>📍 {direccion}</p>
                <p>📞 {telefono}</p>
                <div className="badges">
                  <span>Venta de pasajes</span>
                  <span>Encomiendas</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {seccion === "asientos" && viajeSeleccionado && (
        <section className="section">
          <h2>Seleccioná tu asiento</h2>
          <p className="subtitle">
            {viajeSeleccionado.destino} - {viajeSeleccionado.hora} hs - Gs. {viajeSeleccionado.precio}
          </p>

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

          {asiento && (
            <div className="payment-box">
              <h3>Resumen de reserva</h3>
              <p><b>Destino:</b> {viajeSeleccionado.destino}</p>
              <p><b>Fecha:</b> {fecha}</p>
              <p><b>Horario:</b> {viajeSeleccionado.hora}</p>
              <p><b>Asiento:</b> {asiento}</p>
              <p><b>Monto:</b> Gs. {viajeSeleccionado.precio}</p>

              <h3>Datos para transferencia</h3>
              <p><b>Banco:</b> Banco Itaú Paraguay</p>
              <p><b>Titular:</b> NASA GOLONDRINA S.A.</p>
              <p><b>Cuenta:</b> 0000000000</p>
              <p><b>RUC:</b> 5277316-7</p>

              <a
                className="whatsapp-pay"
                href={`https://wa.me/595994652330?text=${encodeURIComponent(
`Hola, ya realicé la transferencia para mi pasaje.
Destino: ${viajeSeleccionado.destino}
Fecha: ${fecha}
Horario: ${viajeSeleccionado.hora}
Asiento: ${asiento}
Monto: Gs. ${viajeSeleccionado.precio}

Adjunto comprobante.`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Enviar comprobante por WhatsApp
              </a>
            </div>
          )}
        </section>
      )}

      <footer>
        <h3>Nasa Golondrina Paraguay</h3>
        <p>Reservas: 0994 652 330</p>
      </footer>
    </div>
  );
}

export default App;