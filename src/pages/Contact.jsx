import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ─── EmailJS config ───────────────────────────────────────────────
// Înlocuiește valorile de mai jos cu cele din contul tău EmailJS:
//   https://dashboard.emailjs.com/admin
const EMAILJS_SERVICE_ID  = 'service_z8i8rhk'   // ex: 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_flzbjsd'  // ex: 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'zBWbhevSZ9a5IoHp3'   // ex: 'aBcDeFgHiJkLmNoP'
// ─────────────────────────────────────────────────────────────────

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
      })
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Contact</h1>
        <div className="contact-grid">
          {/* ── Info ── */}
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Adresă</strong>
                <p>Strada Principală, Nr. 229<br />Olcea, Județul Bihor, 417355</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Telefon Secretariat</strong>
                <p>0259 310 213</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>scoala_olcea@yahoo.com</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🔢</span>
              <div>
                <strong>Cod Fiscal</strong>
                <p>19094413</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🕐</span>
              <div>
                <strong>Program Secretariat</strong>
                <p>Luni – Vineri: 08:00 – 16:00</p>
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <form
            ref={formRef}
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <h2 className="contact-form__title">Trimite un mesaj</h2>

            <div className="form-group">
              <label htmlFor="name">Nume și prenume</label>
              {/* name="from_name" trebuie să coincidă cu variabila din template-ul EmailJS */}
              <input id="name" name="from_name" type="text" placeholder="Ion Ionescu" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="from_email" type="email" placeholder="email@exemplu.ro" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subiect</label>
              <input id="subject" name="subject" type="text" placeholder="Subiectul mesajului" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea id="message" name="message" rows={5} placeholder="Scrieți mesajul dvs. aici..." required />
            </div>

            {/* ── Status feedback ── */}
            {status === 'success' && (
              <p className="form-feedback form-feedback--success">
                ✅ Mesajul a fost trimis cu succes!
              </p>
            )}
            {status === 'error' && (
              <p className="form-feedback form-feedback--error">
                ❌ A apărut o eroare. Vă rugăm încercați din nou.
              </p>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Se trimite...' : 'Trimite mesajul'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
