import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo">🏫</div>
          <div>
            <p className="footer__name">Școala Gimnazială Olcea</p>
            <p className="footer__location">Comuna Olcea, Bihor, România</p>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Navigare</h4>
          <ul className="footer__links">
            <li><Link to="/despre-noi">Despre Noi</Link></li>
            <li><Link to="/informatii-utile">Informații Utile</Link></li>
            <li><Link to="/organigrama">Organigramă</Link></li>
            <li><Link to="/regulament">Regulament</Link></li>
            <li><Link to="/unitati-arondate">Unități Arondate</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Acces Rapid</h4>
          <ul className="footer__links">
            <li><Link to="/anunturi">Anunțuri</Link></li>
            <li><Link to="/portal-elevi">Portal Elevi</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>📍 Sat Olcea, Comuna Olcea, Bihor</li>
            <li>📞 +40 259 000 000</li>
            <li>✉️ scoala@olcea.ro</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} Școala Gimnazială Olcea. Toate drepturile rezervate.</span>
          <span className="footer__bottom-right">Ministerul Educației • Inspectoratul Școlar Bihor</span>
        </div>
      </div>
    </footer>
  )
}
