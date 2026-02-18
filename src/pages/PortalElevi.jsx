import './PortalElevi.css'

export default function PortalElevi() {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Portal Elevi</h1>
        <div className="portal-grid">
          <div className="portal-card portal-card--coming">
            <div className="portal-icon">📒</div>
            <h3>Catalog Online</h3>
            <p>Vizualizare note și absențe</p>
            <span className="portal-badge">În curând</span>
          </div>
          <div className="portal-card portal-card--coming">
            <div className="portal-icon">🗓️</div>
            <h3>Orar</h3>
            <p>Orarul săptămânal pe clase</p>
            <span className="portal-badge">În curând</span>
          </div>
          <div className="portal-card portal-card--coming">
            <div className="portal-icon">📚</div>
            <h3>Materiale Didactice</h3>
            <p>Documente și resurse educaționale</p>
            <span className="portal-badge">În curând</span>
          </div>
          <div className="portal-card portal-card--coming">
            <div className="portal-icon">🏆</div>
            <h3>Rezultate</h3>
            <p>Rezultate la concursuri și olimpiade</p>
            <span className="portal-badge">În curând</span>
          </div>
        </div>
      </div>
    </div>
  )
}
