import React, { useState } from "react";

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
    <div style={styles.body}>
      <div style={styles.topLine}></div>

      <header style={styles.header}>
        <div>
          <h1 style={styles.logo}>Nasa Golondrina</h1>
          <p style={styles.slogan}>Venta online de pasajes nacionales</p>
        </div>
        <div style={styles.reserveNumber}>Reservas: 0994 652 330</div>
      </header>

      <section style={styles.hero}>
        <div style={styles.heroText}>
          <h2 style={styles.heroTitle}>Viajá por Paraguay con comodidad</h2>
          <p style={styles.heroSubtitle}>
            Consultá horarios, precios y reservá tu pasaje directo por WhatsApp.
          </p>

          <div style={styles.dateBox}>
            <label style={styles.dateLabel}>Fecha del viaje</label>
            <input
              style={styles.dateInput}
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
        </div>
      </section>

      <main style={styles.content}>
        <h2 style={styles.title}>Horarios disponibles</h2>
        <p style={styles.description}>
          Seleccioná la fecha del viaje y luego tocá “Reservar por WhatsApp”.
        </p>

        <div style={styles.cardGrid}>
          {horarios.map(([hora, destino], index) => {
            const precio = precios[destino] || "Consultar";

            return (
              <div key={index} style={styles.card}>
                <div style={styles.cardTop}>
                  <span style={styles.time}>{hora}</span>
                  <span style={styles.badge}>Disponible</span>
                </div>

                <h3 style={styles.destination}>{destino}</h3>

                <div style={styles.infoRow}>
                  <span>Fecha</span>
                  <strong>{fecha || "Seleccionar arriba"}</strong>
                </div>

                <div style={styles.infoRow}>
                  <span>Días</span>
                  <strong>Lunes a Domingo</strong>
                </div>

                <div style={styles.infoRow}>
                  <span>Precio</span>
                  <strong>Gs. {precio}</strong>
                </div>

                <button
                  style={styles.button}
                  onClick={() => reservar(hora, destino, precio)}
                >
                  Reservar por WhatsApp
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

const styles = {
  body: {
    minHeight: "100vh",
    background: "#f4f6fb",
    fontFamily: "Arial, sans-serif",
    color: "#111827",
  },
  topLine: {
    height: "9px",
    background: "linear-gradient(90deg, #d52b1e 0%, #ffffff 50%, #0038a8 100%)",
  },
  header: {
    background: "#ffffff",
    padding: "22px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  },
  logo: {
    margin: 0,
    color: "#0038a8",
    fontSize: "34px",
    fontWeight: "900",
  },
  slogan: {
    margin: "6px 0 0",
    color: "#d52b1e",
    fontWeight: "700",
  },
  reserveNumber: {
    background: "#d52b1e",
    color: "white",
    borderRadius: "999px",
    padding: "13px 22px",
    fontWeight: "800",
  },
  hero: {
    minHeight: "330px",
    backgroundImage:
      "linear-gradient(90deg, rgba(0,56,168,0.82), rgba(213,43,30,0.28)), url('/bus.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    padding: "50px 60px",
  },
  heroText: {
    background: "rgba(255,255,255,0.94)",
    padding: "34px",
    borderRadius: "28px",
    maxWidth: "560px",
    boxShadow: "0 18px 45px rgba(0,0,0,0.25)",
  },
  heroTitle: {
    margin: 0,
    color: "#0038a8",
    fontSize: "42px",
    fontWeight: "900",
    lineHeight: "1.1",
  },
  heroSubtitle: {
    color: "#374151",
    fontSize: "18px",
    lineHeight: "1.5",
    margin: "16px 0 24px",
  },
  dateBox: {
    background: "#f4f6fb",
    padding: "18px",
    borderRadius: "18px",
    border: "1px solid #dbe1ea",
  },
  dateLabel: {
    display: "block",
    fontWeight: "900",
    color: "#0038a8",
    marginBottom: "8px",
  },
  dateInput: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
  },
  content: {
    padding: "42px 60px",
  },
  title: {
    margin: 0,
    fontSize: "32px",
    color: "#0038a8",
    fontWeight: "900",
  },
  description: {
    color: "#6b7280",
    fontSize: "16px",
    marginTop: "8px",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))",
    gap: "22px",
    marginTop: "26px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "24px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
    border: "1px solid #e5e7eb",
    borderTop: "7px solid #0038a8",
  },
  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: {
    color: "#d52b1e",
    fontSize: "30px",
    fontWeight: "900",
  },
  badge: {
    background: "#eef2ff",
    color: "#0038a8",
    borderRadius: "999px",
    padding: "6px 10px",
    fontSize: "12px",
    fontWeight: "900",
  },
  destination: {
    color: "#111827",
    fontSize: "22px",
    margin: "18px 0",
    minHeight: "54px",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #e5e7eb",
    padding: "12px 0",
    color: "#374151",
    gap: "10px",
  },
  button: {
    width: "100%",
    marginTop: "16px",
    background: "#25D366",
    color: "white",
    border: "none",
    borderRadius: "15px",
    padding: "14px",
    fontWeight: "900",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default App;