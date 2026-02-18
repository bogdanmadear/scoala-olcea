import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import './Home.css'

const quickLinks = [
  { icon: '📋', label: 'Anunțuri', desc: 'Noutăți și informări importante', path: '/anunturi', color: '#e74c3c' },
  { icon: '🎓', label: 'Portal Elevi', desc: 'Catalog online, orar și note', path: '/portal-elevi', color: '#2456a4' },
  { icon: '🏛️', label: 'Despre Noi', desc: 'Istoric și misiunea școlii', path: '/despre-noi', color: '#27ae60' },
  { icon: '📞', label: 'Contact', desc: 'Adresă, telefon și hartă', path: '/contact', color: '#c8a94a' },
  { icon: '📄', label: 'Regulament', desc: 'Regulament de funcționare', path: '/regulament', color: '#8e44ad' },
  { icon: '🏫', label: 'Unități Arondate', desc: 'Unitățile din structura școlii', path: '/unitati-arondate', color: '#16a085' },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="home-quicklinks">
        <div className="container">
          <h2 className="section-title">Acces Rapid</h2>
          <div className="quicklinks-grid">
            {quickLinks.map((item) => (
              <Link key={item.path} to={item.path} className="quicklink-card">
                <div className="quicklink-icon" style={{ background: item.color + '1a', color: item.color }}>
                  {item.icon}
                </div>
                <div className="quicklink-body">
                  <h3 className="quicklink-title">{item.label}</h3>
                  <p className="quicklink-desc">{item.desc}</p>
                </div>
                <span className="quicklink-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-info">
        <div className="container home-info__grid">
          <div className="home-info__text">
            <h2 className="section-title">Despre Școala Noastră</h2>
            <p>
              Școala Gimnazială Olcea este o instituție de învățământ preuniversitar situată în
              comuna Olcea, județul Bihor. Oferim un mediu educațional de calitate, cu cadre
              didactice calificate și programe adaptate nevoilor elevilor noștri.
            </p>
            <p>
              Ne angajăm să formăm tineri pregătiți pentru viitor, promovând valori ca
              responsabilitatea, creativitatea și spiritul civic.
            </p>
            <Link to="/despre-noi" className="info-btn">Aflați mai mult →</Link>
          </div>
          <div className="home-info__cards">
            <div className="info-card info-card--blue">
              <span className="info-card__num">279</span>
              <span className="info-card__label">Elevi înscriși</span>
            </div>
            <div className="info-card info-card--gold">
              <span className="info-card__num">39</span>
              <span className="info-card__label">Cadre didactice</span>
            </div>
            <div className="info-card info-card--dark">
              <span className="info-card__num">6</span>
              <span className="info-card__label">Unități arondate</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
