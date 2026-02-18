import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <div className="hero__badge">Județ Bihor • România</div>
        <h1 className="hero__title">
          Școala Gimnazială<br />
          <span className="hero__title-accent">Olcea</span>
        </h1>
        <p className="hero__tagline">Un viitor mai bun începe aici</p>
        <div className="hero__actions">
          <Link to="/portal-elevi" className="hero__btn hero__btn--primary">
            Portal Elevi
          </Link>
          <Link to="/anunturi" className="hero__btn hero__btn--secondary">
            Anunțuri
          </Link>
          <Link to="/contact" className="hero__btn hero__btn--outline">
            Contact
          </Link>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container hero__stats-grid">
          <div className="hero__stat">
            <span className="hero__stat-value">📚</span>
            <span className="hero__stat-label">Calitate în Educație</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">🏆</span>
            <span className="hero__stat-label">Rezultate Remarcabile</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">🤝</span>
            <span className="hero__stat-label">Comunitate Unită</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">🎓</span>
            <span className="hero__stat-label">Cadre Didactice Calificate</span>
          </div>
        </div>
      </div>
    </section>
  )
}
