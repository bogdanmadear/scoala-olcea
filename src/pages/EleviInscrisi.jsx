import './EleviInscrisi.css'

const unitati = [
  {
    id: 'gradinite',
    nume: 'Grădinițe',
    detaliu: 'Nr. 2 Călacea + Nr. 4 Ucuriș',
    tip: 'Preșcolari',
    icon: '🌱',
    sectiuni: [
      {
        nivel: 'Preșcolari',
        randuri: [
          { label: 'Grupa mică', nr: 18 },
          { label: 'Grupa mijlocie', nr: 21 },
          { label: 'Grupa mare', nr: 30 },
        ],
        total: 69,
      },
    ],
    total: 69,
  },
  {
    id: 'olcea',
    nume: 'Școala Gimnazială Nr. 1 Olcea',
    detaliu: null,
    tip: 'Primar + Gimnazial',
    icon: '🏫',
    sectiuni: [
      {
        nivel: 'Primar',
        randuri: [
          { label: 'Clasa pregătitoare', nr: 14 },
          { label: 'Clasa I', nr: 7 },
          { label: 'Clasa a II-a', nr: 4 },
          { label: 'Clasa a III-a', nr: 11 },
          { label: 'Clasa a IV-a', nr: 12 },
        ],
        total: 48,
      },
      {
        nivel: 'Gimnazial',
        randuri: [
          { label: 'Clasa a V-a', nr: 11 },
          { label: 'Clasa a VI-a', nr: 12 },
          { label: 'Clasa a VII-a', nr: 11 },
          { label: 'Clasa a VIII-a', nr: 10 },
        ],
        total: 44,
      },
    ],
    total: 92,
  },
  {
    id: 'calacea',
    nume: 'Școala Gimnazială Nr. 2 Călacea',
    detaliu: 'Include Școala Primară Nr. 2 Călacea',
    tip: 'Primar + Gimnazial',
    icon: '🏫',
    sectiuni: [
      {
        nivel: 'Primar',
        randuri: [
          { label: 'Clasa pregătitoare', nr: 14 },
          { label: 'Clasa I', nr: 19 },
          { label: 'Clasa a II-a', nr: 11 },
          { label: 'Clasa a III-a', nr: 11 },
          { label: 'Clasa a IV-a', nr: 12 },
        ],
        total: 67,
      },
      {
        nivel: 'Gimnazial',
        randuri: [
          { label: 'Clasa a V-a', nr: 5 },
          { label: 'Clasa a VI-a', nr: 11 },
          { label: 'Clasa a VII-a', nr: 14 },
          { label: 'Clasa a VIII-a', nr: 10 },
        ],
        total: 40,
      },
    ],
    total: 107,
  },
  {
    id: 'hodisel',
    nume: 'Școala Primară Nr. 1 Hodișel',
    detaliu: null,
    tip: 'Primar',
    icon: '🏫',
    sectiuni: [
      {
        nivel: 'Primar',
        randuri: [
          { label: 'Clasa a II-a', nr: 5 },
          { label: 'Clasa a III-a', nr: 2 },
          { label: 'Clasa a IV-a', nr: 3 },
        ],
        total: 10,
      },
    ],
    total: 10,
  },
]

const TOTAL_GENERAL = 278

export default function EleviInscrisi() {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Elevi Înscriși</h1>

        <div className="ei-summary">
          <div className="ei-stat">
            <span className="ei-stat__num">{TOTAL_GENERAL}</span>
            <span className="ei-stat__label">Elevi și preșcolari</span>
          </div>
          <div className="ei-stat">
            <span className="ei-stat__num">{unitati.length}</span>
            <span className="ei-stat__label">Unități de învățământ</span>
          </div>
          <div className="ei-stat">
            <span className="ei-stat__num">2025–2026</span>
            <span className="ei-stat__label">An școlar</span>
          </div>
        </div>

        <div className="ei-grid">
          {unitati.map((unitate) => (
            <div key={unitate.id} className="ei-card">
              <div className="ei-card__header">
                <span className="ei-card__icon">{unitate.icon}</span>
                <div className="ei-card__info">
                  <span className="ei-card__tip">{unitate.tip}</span>
                  <h2 className="ei-card__nume">{unitate.nume}</h2>
                  {unitate.detaliu && (
                    <span className="ei-card__detaliu">{unitate.detaliu}</span>
                  )}
                </div>
                <span className="ei-card__total">{unitate.total}</span>
              </div>

              <div className="ei-card__body">
                {unitate.sectiuni.map((sectiune) => (
                  <div key={sectiune.nivel} className="ei-sectiune">
                    <div className="ei-sectiune__header">
                      <span className="ei-sectiune__nivel">{sectiune.nivel}</span>
                      <span className="ei-sectiune__total">Total: {sectiune.total}</span>
                    </div>
                    <table className="ei-table">
                      <tbody>
                        {sectiune.randuri.map((rand) => (
                          <tr key={rand.label} className="ei-table__row">
                            <td className="ei-table__label">{rand.label}</td>
                            <td className="ei-table__nr">{rand.nr}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="ei-sursa">
          Sursă: Situație număr elevi, an școlar 2025–2026
        </p>
      </div>
    </div>
  )
}
