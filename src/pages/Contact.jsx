import './Contact.css'

export default function Contact() {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Contact</h1>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Adresă</strong>
                <p>Sat Olcea, Nr. —, Comuna Olcea<br />Județul Bihor, România</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Telefon Secretariat</strong>
                <p>+40 259 000 000</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>scoala@olcea.ro</p>
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

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h2 className="contact-form__title">Trimite un mesaj</h2>
            <div className="form-group">
              <label htmlFor="name">Nume și prenume</label>
              <input id="name" type="text" placeholder="Ion Ionescu" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="email@exemplu.ro" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subiect</label>
              <input id="subject" type="text" placeholder="Subiectul mesajului" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea id="message" rows={5} placeholder="Scrieți mesajul dvs. aici..." />
            </div>
            <button type="submit" className="contact-submit">Trimite mesajul</button>
          </form>
        </div>
      </div>
    </div>
  )
}
