import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Despre Noi', path: '/despre-noi' },
  {
    label: 'Informații',
    children: [
      { label: 'Informații Utile', path: '/informatii-utile' },
      { label: 'Organigramă', path: '/organigrama' },
      { label: 'Regulament de Funcționare', path: '/regulament' },
      { label: 'Unități Arondate', path: '/unitati-arondate' },
    ],
  },
  { label: 'Anunțuri', path: '/anunturi' },
  { label: 'Portal Elevi', path: '/portal-elevi' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label))
  }

  const closeAll = () => {
    setMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header className="navbar">
      <div className="navbar__top">
        <div className="container navbar__top-inner">
          <span>📍 Comuna Olcea, Bihor, România</span>
          <span>📞 Secretariat: +40 259 000 000</span>
        </div>
      </div>

      <nav className="navbar__main">
        <div className="container navbar__main-inner">
          <Link to="/" className="navbar__brand" onClick={closeAll}>
            <div className="navbar__logo">
              <span className="navbar__logo-icon">🏫</span>
            </div>
            <div className="navbar__brand-text">
              <span className="navbar__brand-name">Școala Gimnazială Olcea</span>
              <span className="navbar__brand-sub">Comuna Olcea • Bihor</span>
            </div>
          </Link>

          <button
            className={`navbar__burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Meniu"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className={`navbar__item navbar__item--dropdown ${openDropdown === link.label ? 'open' : ''}`}
                >
                  <button
                    className="navbar__dropdown-trigger"
                    onClick={() => toggleDropdown(link.label)}
                  >
                    {link.label}
                    <span className="navbar__chevron">▾</span>
                  </button>
                  <ul className="navbar__dropdown">
                    {link.children.map((child) => (
                      <li key={child.path}>
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            'navbar__dropdown-link' + (isActive ? ' active' : '')
                          }
                          onClick={closeAll}
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.path} className="navbar__item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      'navbar__link' + (isActive ? ' active' : '')
                    }
                    onClick={closeAll}
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}
