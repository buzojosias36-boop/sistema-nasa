import './App.css';

function App() {
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo-container">
          <img src="/Logo principal sin fondo.jpg" alt="Logo" className="logo" />
          <h1>Nasa Golondrina</h1>
        </div>

        <p>Venta online de pasajes nacionales</p>
        <a href="tel:0981668662">Reservas: 0981 668 662</a>
      </header>

      {/* HERO */}
      <section className="hero">
        <h2>Viajá por Paraguay con comodidad</h2>
        <p>Consultá horarios, precios y reservá tu pasaje directo por WhatsApp.</p>
        <input type="date" />
      </section>

      {/* HORARIOS */}
      <section className="horarios">
        <h2>Horarios y precios</h2>
        <div className="cards">

          <div className="card">
            <h3>05:00</h3>
            <p>Campo Aceval</p>
            <p>Precio: Gs. 140.000</p>
            <p>Días: Lunes a Domingo</p>
            <button>Reservar por WhatsApp</button>
          </div>

          <div className="card">
            <h3>06:00</h3>
            <p>Loma Plata</p>
            <p>Precio: Gs. 140.000</p>
            <p>Días: Lunes a Domingo</p>
            <button>Reservar por WhatsApp</button>
          </div>

          <div className="card">
            <h3>06:20</h3>
            <p>Ciudad del Este</p>
            <p>Precio: Gs. 120.000</p>
            <p>Días: Lunes a Domingo</p>
            <button>Reservar por WhatsApp</button>
          </div>

        </div>
      </section>

      {/* CONTACTOS */}
      <section className="contactos">
        <h2>Contactos por ciudad</h2>

        <div className="contacto">
          <h3>Asunción</h3>
          <p>Avda. Fernando de la Mora y Avda. República Argentina</p>
          <p>📞 0981 668 662</p>
        </div>

        <div className="contacto">
          <h3>Ciudad del Este</h3>
          <p>Avda. Eugenio Garay y Arturo Garcete</p>
          <p>📞 (061) 506 063</p>
        </div>

        <div className="contacto">
          <h3>Filadelfia</h3>
          <p>Avda. Calle Chaco Boreal casi Calle O. Miller</p>
          <p>📞 (0491) 432 492</p>
        </div>

        <div className="contacto">
          <h3>Loma Plata</h3>
          <p>3 de Noviembre casi Avda. Central</p>
          <p>📞 (0492) 252 250</p>
        </div>

        <div className="contacto">
          <h3>Neuland</h3>
          <p>Calle PY16 y Puerto Casado</p>
          <p>📞 (0992) 399 115</p>
        </div>

        <div className="contacto">
          <h3>Pedro Juan Caballero</h3>
          <p>Avda. Carlos Domínguez y Picuiba</p>
          <p>📞 (0985) 107 691</p>
        </div>
      </section>

      {/* MISION Y VISION */}
      <section className="info">
        <h2>Nuestra Empresa</h2>

        <p><strong>Misión:</strong> Brindar un servicio de transporte seguro, cómodo y puntual en todo el Paraguay.</p>

        <p><strong>Visión:</strong> Ser la empresa líder en transporte nacional, destacando por innovación, calidad y confianza.</p>
      </section>

    </>
  );
}

export default App;