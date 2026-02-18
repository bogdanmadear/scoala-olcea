import './Anunturi.css'

const anunturi = [
  {
    id: 1,
    data: '18 Feb 2026',
    titlu: 'Ședință cu părinții — Semestrul II',
    categorie: 'Informare',
    continut: 'Stimați părinți, vă invităm la ședința cu părinții programată pentru data de 25 februarie 2026, ora 17:00, în sala de festivități a școlii.',
  },
  {
    id: 2,
    data: '10 Feb 2026',
    titlu: 'Program "Școala Altfel" 2026',
    categorie: 'Activități',
    continut: 'Activitățile din cadrul programului "Școala Altfel" se vor desfășura în perioada 10–14 martie 2026. Detalii suplimentare vor fi comunicate prin diriginți.',
  },
  {
    id: 3,
    data: '01 Feb 2026',
    titlu: 'Înscrieri clasa pregătitoare 2026-2027',
    categorie: 'Înscrieri',
    continut: 'A început perioada de înscrieri pentru clasa pregătitoare, an școlar 2026-2027. Vă rugăm să vă prezentați la secretariat cu actele necesare.',
  },
]

const categoriiColor = {
  'Informare': '#2456a4',
  'Activități': '#27ae60',
  'Înscrieri': '#e67e22',
}

export default function Anunturi() {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Anunțuri</h1>
        <div className="anunturi-list">
          {anunturi.map((a) => (
            <article key={a.id} className="anunt-card">
              <div className="anunt-header">
                <span
                  className="anunt-categorie"
                  style={{ background: (categoriiColor[a.categorie] || '#666') + '20', color: categoriiColor[a.categorie] || '#666' }}
                >
                  {a.categorie}
                </span>
                <span className="anunt-data">{a.data}</span>
              </div>
              <h2 className="anunt-titlu">{a.titlu}</h2>
              <p className="anunt-continut">{a.continut}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
