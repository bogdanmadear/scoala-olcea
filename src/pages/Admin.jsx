import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

const PAROLA = 'Olcea-1'  // ← schimbă cu parola dorită

export default function Admin() {
  const [input, setInput] = useState('')
  const [eroare, setEroare] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === PAROLA) {
      navigate('/studio')
    } else {
      setEroare(true)
      setInput('')
    }
  }

  return (
    <div className="admin-wrapper">
      <div className="admin-card">
        <div className="admin-logo">🏫</div>
        <h1 className="admin-title">Panou Administrare</h1>
        <p className="admin-subtitle">Școala Gimnazială Nr. 1 Olcea</p>

        <form onSubmit={handleSubmit} className="admin-form">
          <label htmlFor="parola" className="admin-label">Parolă de acces</label>
          <input
            id="parola"
            type="password"
            className={`admin-input ${eroare ? 'admin-input--eroare' : ''}`}
            value={input}
            onChange={(e) => { setInput(e.target.value); setEroare(false) }}
            placeholder="Introduceți parola"
            autoFocus
          />
          {eroare && (
            <p className="admin-eroare">Parolă incorectă. Încercați din nou.</p>
          )}
          <button type="submit" className="admin-btn">Intră în Studio</button>
        </form>
      </div>
    </div>
  )
}
