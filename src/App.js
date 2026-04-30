* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f4f6fb;
  color: #111827;
}

.top-line {
  height: 9px;
  background: linear-gradient(90deg, #d52b1e 0%, #ffffff 50%, #0038a8 100%);
}

.header {
  background: white;
  padding: 22px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}

.header h1 {
  margin: 0;
  color: #0038a8;
  font-size: 34px;
  font-weight: 900;
}

.header p {
  margin: 6px 0 0;
  color: #d52b1e;
  font-weight: 700;
}

.phone-button {
  background: #d52b1e;
  color: white;
  border-radius: 999px;
  padding: 13px 22px;
  font-weight: 800;
  text-decoration: none;
}

.hero {
  min-height: 360px;
  background-image:
    linear-gradient(90deg, rgba(0, 56, 168, 0.82), rgba(213, 43, 30, 0.28)),
    url("/bus.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 55px 60px;
}

.hero-box {
  background: rgba(255, 255, 255, 0.95);
  padding: 36px;
  border-radius: 28px;
  max-width: 580px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.25);
}

.hero-box h2 {
  margin: 0;
  color: #0038a8;
  font-size: 44px;
  font-weight: 900;
  line-height: 1.1;
}

.hero-box p {
  color: #374151;
  font-size: 18px;
  line-height: 1.5;
}

.hero-box label {
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
  color: #0038a8;
  font-weight: 900;
}

.hero-box input {
  width: 100%;
  padding: 15px;
  border-radius: 14px;
  border: 1px solid #cbd5e1;
  font-size: 16px;
}

.section {
  padding: 50px 60px;
}

.section h2,
.mission-section h2 {
  margin: 0;
  font-size: 34px;
  color: #0038a8;
  font-weight: 900;
}

.section-text {
  color: #6b7280;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 30px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  gap: 22px;
}

.trip-card {
  background: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  border-top: 7px solid #0038a8;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-top strong {
  color: #d52b1e;
  font-size: 30px;
  font-weight: 900;
}

.card-top span {
  background: #eef2ff;
  color: #0038a8;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 900;
}

.trip-card h3 {
  font-size: 22px;
  margin: 18px 0;
  min-height: 54px;
}

.info-row {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e5e7eb;
  padding: 12px 0;
  gap: 10px;
}

.trip-card button {
  width: 100%;
  margin-top: 16px;
  background: #25d366;
  color: white;
  border: none;
  border-radius: 15px;
  padding: 14px;
  font-weight: 900;
  cursor: pointer;
  font-size: 15px;
}

.mission-section {
  padding: 60px;
  background: white;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  margin-top: 30px;
}

.info-card {
  background: #f4f6fb;
  padding: 28px;
  border-radius: 24px;
  border-left: 7px solid #d52b1e;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
}

.info-card h3 {
  color: #0038a8;
  font-size: 24px;
  margin-top: 0;
}

.info-card p {
  line-height: 1.6;
  color: #374151;
}

.branches {
  background: #f4f6fb;
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 22px;
}

.branch-card {
  background: white;
  padding: 26px;
  border-radius: 22px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
  border-top: 6px solid #0038a8;
}

.branch-card h3 {
  margin-top: 0;
  color: #0038a8;
  font-size: 22px;
  text-transform: uppercase;
}

.branch-card p {
  font-weight: 600;
  line-height: 1.5;
}

.badges {
  margin-top: 15px;
}

.badges span {
  background: #d52b1e;
  color: white;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 800;
  display: inline-block;
  margin: 4px 4px 4px 0;
}

.footer {
  background: #0038a8;
  color: white;
  text-align: center;
  padding: 30px;
}

.footer h3 {
  margin: 0 0 8px;
}

.footer p {
  margin: 0;
}

@media (max-width: 700px) {
  .header {
    padding: 20px;
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }

  .hero {
    padding: 30px 20px;
  }

  .hero-box h2 {
    font-size: 34px;
  }

  .section,
  .mission-section {
    padding: 35px 20px;
  }
}