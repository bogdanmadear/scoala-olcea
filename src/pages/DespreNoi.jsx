import './DespreNoi.css'

const unitati = [
  {
    id: 1,
    nume: 'Școala Gimnazială Nr. 1 Olcea',
    tip: 'Școală Gimnazială',
    localitate: 'Olcea',
    img: '/images/unitati/scoala-gimnaziala-nr1-olcea.jpeg',
  },
  {
    id: 2,
    nume: 'Școala Gimnazială Nr. 2 Călacea',
    tip: 'Școală Gimnazială',
    localitate: 'Călacea',
    img: '/images/unitati/scoala-gimnaziala-nr2-calacea.jpeg',
  },
  {
    id: 3,
    nume: 'Școala Primară Nr. 2 Călacea',
    tip: 'Școală Primară',
    localitate: 'Călacea',
    img: '/images/unitati/scoala-primara-nr2-calacea.jpeg',
  },
  {
    id: 4,
    nume: 'Grădinița cu Program Normal Nr. 2 Călacea',
    tip: 'Grădiniță',
    localitate: 'Călacea',
    img: '/images/unitati/gradinita-nr2-calacea.jpeg',
  },
  {
    id: 5,
    nume: 'Grădinița cu Program Normal Nr. 4 Ucuriș',
    tip: 'Grădiniță',
    localitate: 'Ucuriș',
    img: '/images/unitati/gradinita-nr4-ucuris.jpeg',
  },
  {
    id: 6,
    nume: 'Școala Primară Nr. 1 Hodișel',
    tip: 'Școală Primară',
    localitate: 'Hodișel',
    img: null,
  },
]

export default function DespreNoi() {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Despre Noi</h1>

        <section className="dn-intro">
          <div className="dn-intro__text">
            <h2 className="dn-intro__titlu">Școala Gimnazială Nr. 1 Olcea</h2>
            <p>
              Școala Gimnazială Nr. 1 Olcea este unitatea de învățământ cu personalitate juridică
              din Comuna Olcea, Județul Bihor. Coordonăm o rețea de 6 unități de învățământ
              care deservesc localitățile Olcea, Călacea, Ucuriș și Hodișel.
            </p>
            <p>
              Ne dedicăm formării unor elevi pregătiți pentru viitor, oferind un mediu educațional
              sigur, incluziv și stimulativ, în parteneriat cu familiile și comunitatea locală.
            </p>
          </div>
          <div className="dn-intro__meta">
            <div className="dn-meta-item">
              <span className="dn-meta-item__val">6</span>
              <span className="dn-meta-item__label">Unități de învățământ</span>
            </div>
            <div className="dn-meta-item">
              <span className="dn-meta-item__val">4</span>
              <span className="dn-meta-item__label">Localități</span>
            </div>
            <div className="dn-meta-item">
              <span className="dn-meta-item__val">2026</span>
              <span className="dn-meta-item__label">An școlar curent</span>
            </div>
          </div>
        </section>

        <section className="dn-unitati">
          <h2 className="dn-sectiune-titlu">Unitățile Noastre</h2>
          <div className="dn-grid">
            {unitati.map((u) => (
              <div key={u.id} className="dn-card">
                {u.img ? (
                  <img src={u.img} alt={u.nume} className="dn-card__foto" />
                ) : (
                  <div className="dn-card__foto-placeholder">
                    <span>Fotografie în curând</span>
                  </div>
                )}
                <div className="dn-card__body">
                  <span className="dn-card__tip">{u.tip}</span>
                  <h3 className="dn-card__nume">{u.nume}</h3>
                  <span className="dn-card__localitate">📍 {u.localitate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
