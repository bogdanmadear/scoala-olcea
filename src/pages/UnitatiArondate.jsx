import './UnitatiArondate.css'

const unitati = [
  {
    id: 1,
    nume: 'Școala Gimnazială Nr. 1 Olcea',
    tip: 'Școală Gimnazială',
    icon: '🏫',
    cadre: [
      'CIOCLUȚ MIRELA',
      'PETRILA RODICA',
      'MISTOR IOAN',
      'NYIKITA LEONORA',
      'BUIBAȘ TEODOR',
      'ZOPOTA CĂLIN',
      'HUIEȚ MARCELA',
      'FILIMON MARIANA',
      'CREȚ MIHAELA',
      'ZIFCEAC FLORICA',
      'POP IONELA ADINA',
      'BIRIȘ ANDREEA',
      'RUGEA IRINA',
      'INDREI FLORINA',
      'GOGA GEORGIANA',
      'HAIDU LUMINIȚA',
    ],
  },
  {
    id: 2,
    nume: 'Școala Gimnazială Nr. 2 Călacea',
    tip: 'Școală Gimnazială',
    icon: '🏫',
    cadre: [
      'ȚĂRĂU ANA',
      'MATEOC LAURA',
      'BUIBAȘ TEODOR',
      'CREȚ MIHAELA',
      'SABĂU GHEORGHE / ZIFCEAC FLORICA',
      'POP IONELA ADINA',
      'ILE CRISTINA',
      'RUGEA IRINA',
      'ILE MARIUS',
      'MATEOC IONUȚ',
    ],
  },
  {
    id: 3,
    nume: 'Școala Primară Nr. 2 Călacea',
    tip: 'Școală Primară',
    icon: '🏫',
    cadre: [
      'ȚĂRĂU ANA',
      'MAGA DENISA',
      'BACHESZ TEODORA',
      'LEUCUȚA MARIA',
      'ZIFCEAC FLORICA / SABĂU GHEORGHE',
      'MATEOC IONUȚ',
      'MATEOC LAURA',
      'NEGRĂU LENUȚA',
      'POP IONELA ADINA',
      'HAIDU LUMINIȚA',
    ],
  },
  {
    id: 4,
    nume: 'Grădinița cu Program Normal Nr. 2 Călacea',
    tip: 'Grădiniță',
    icon: '🌱',
    cadre: [
      'ȚĂRĂU ANA',
      'FENEȘI ADRIANA',
      'MLADIN PAULA',
      'POP IONELA ADINA',
      'LOBONȚ DANIELA',
      'HAIDU LUMINIȚA',
    ],
  },
  {
    id: 5,
    nume: 'Grădinița cu Program Normal Nr. 4 Ucuriș',
    tip: 'Grădiniță',
    icon: '🌱',
    cadre: [
      'ANTON LUCICA',
      'POP IONELA ADINA',
      'HAIDU LUMINIȚA',
    ],
  },
  {
    id: 6,
    nume: 'Școala Primară Nr. 1 Hodișel',
    tip: 'Școală Primară',
    icon: '🏫',
    cadre: [
      'MATEI SANDA',
      'BRÂNDA SIMONA',
      'POP IONELA ADINA',
      'INDREI FLORINA',
      'HAIDU LUMINIȚA',
      'ZIFCEAC FLORICA',
    ],
  },
]

export default function UnitatiArondate() {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Unități Arondate</h1>

        <div className="ua-summary">
          <div className="ua-stat">
            <span className="ua-stat__num">{unitati.length}</span>
            <span className="ua-stat__label">Unități de învățământ</span>
          </div>
          <div className="ua-stat">
            <span className="ua-stat__num">
              {[...new Set(unitati.flatMap(u => u.cadre.flatMap(c => c.split(' / '))))].length}
            </span>
            <span className="ua-stat__label">Cadre didactice</span>
          </div>
          <div className="ua-stat">
            <span className="ua-stat__num">4</span>
            <span className="ua-stat__label">Localități</span>
          </div>
        </div>

        <div className="ua-grid">
          {unitati.map((unitate) => (
            <div key={unitate.id} className="ua-card">
              <div className="ua-card__header">
                <span className="ua-card__icon">{unitate.icon}</span>
                <div>
                  <span className="ua-card__tip">{unitate.tip}</span>
                  <h2 className="ua-card__nume">{unitate.nume}</h2>
                </div>
                <span className="ua-card__count">{unitate.cadre.length} cadre</span>
              </div>
              <ul className="ua-card__cadre">
                {unitate.cadre.map((cadru, idx) => (
                  <li key={idx} className="ua-card__cadru">
                    <span className="ua-card__nr">{idx + 1}</span>
                    {cadru}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
