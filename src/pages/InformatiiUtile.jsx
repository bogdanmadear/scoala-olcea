import { useState, useRef } from 'react'
import './InformatiiUtile.css'

const EMBED_OLCEA   = 'https://maps.google.com/maps?q=46.6833868,21.9829328&output=embed&z=17'
const EMBED_CALACEA = 'https://maps.google.com/maps?q=46.67529,21.9277225&output=embed&z=17'
const EMBED_UCURIS  = 'https://maps.google.com/maps?q=46.63966827816357,21.95635508386115&output=embed&z=17'
const EMBED_HODISEL = 'https://maps.google.com/maps?q=46.648325211218165,22.047678710039456&output=embed&z=17'

const unitati = [
  {
    id: 1,
    nume: 'Școala Gimnazială Nr. 1 Olcea',
    tip: 'Școală Gimnazială',
    localitate: 'Olcea',
    img: '/images/unitati/scoala-gimnaziala-nr1-olcea.jpeg',
    mapEmbed: EMBED_OLCEA,
    elevi: {
      total: 92,
      nota: null,
      sectiuni: [
        {
          nivel: 'Primar',
          total: 48,
          randuri: [
            { label: 'Clasa pregătitoare', nr: 14 },
            { label: 'Clasa I', nr: 7 },
            { label: 'Clasa a II-a', nr: 4 },
            { label: 'Clasa a III-a', nr: 11 },
            { label: 'Clasa a IV-a', nr: 12 },
          ],
        },
        {
          nivel: 'Gimnazial',
          total: 44,
          randuri: [
            { label: 'Clasa a V-a', nr: 11 },
            { label: 'Clasa a VI-a', nr: 12 },
            { label: 'Clasa a VII-a', nr: 11 },
            { label: 'Clasa a VIII-a', nr: 10 },
          ],
        },
      ],
    },
  },
  {
    id: 2,
    nume: 'Școala Gimnazială Nr. 2 Călacea',
    tip: 'Școală Gimnazială',
    localitate: 'Călacea',
    img: '/images/unitati/scoala-gimnaziala-nr2-calacea.jpeg',
    mapEmbed: EMBED_CALACEA,
    elevi: {
      total: 107,
      nota: 'Include Școala Primară Nr. 2 Călacea',
      sectiuni: [
        {
          nivel: 'Primar',
          total: 67,
          randuri: [
            { label: 'Clasa pregătitoare', nr: 14 },
            { label: 'Clasa I', nr: 19 },
            { label: 'Clasa a II-a', nr: 11 },
            { label: 'Clasa a III-a', nr: 11 },
            { label: 'Clasa a IV-a', nr: 12 },
          ],
        },
        {
          nivel: 'Gimnazial',
          total: 40,
          randuri: [
            { label: 'Clasa a V-a', nr: 5 },
            { label: 'Clasa a VI-a', nr: 11 },
            { label: 'Clasa a VII-a', nr: 14 },
            { label: 'Clasa a VIII-a', nr: 10 },
          ],
        },
      ],
    },
  },
  {
    id: 3,
    nume: 'Școala Primară Nr. 2 Călacea',
    tip: 'Școală Primară',
    localitate: 'Călacea',
    img: '/images/unitati/scoala-primara-nr2-calacea.jpeg',
    mapEmbed: EMBED_CALACEA,
    elevi: {
      total: 67,
      nota: 'Date incluse în Școala Gimnazială Nr. 2 Călacea',
      sectiuni: [
        {
          nivel: 'Primar',
          total: 67,
          randuri: [
            { label: 'Clasa pregătitoare', nr: 14 },
            { label: 'Clasa I', nr: 19 },
            { label: 'Clasa a II-a', nr: 11 },
            { label: 'Clasa a III-a', nr: 11 },
            { label: 'Clasa a IV-a', nr: 12 },
          ],
        },
      ],
    },
  },
  {
    id: 4,
    nume: 'Grădinița cu Program Normal Nr. 2 Călacea',
    tip: 'Grădiniță',
    localitate: 'Călacea',
    img: '/images/unitati/gradinita-nr2-calacea.jpeg',
    mapEmbed: EMBED_CALACEA,
    elevi: {
      total: 69,
      nota: 'Date totale pentru ambele grădinițe (Nr. 2 Călacea + Nr. 4 Ucuriș)',
      sectiuni: [
        {
          nivel: 'Preșcolari',
          total: 69,
          randuri: [
            { label: 'Grupa mică', nr: 18 },
            { label: 'Grupa mijlocie', nr: 21 },
            { label: 'Grupa mare', nr: 30 },
          ],
        },
      ],
    },
  },
  {
    id: 5,
    nume: 'Grădinița cu Program Normal Nr. 4 Ucuriș',
    tip: 'Grădiniță',
    localitate: 'Ucuriș',
    img: '/images/unitati/gradinita-nr4-ucuris.jpeg',
    mapEmbed: EMBED_UCURIS,
    elevi: {
      total: 69,
      nota: 'Date totale pentru ambele grădinițe (Nr. 2 Călacea + Nr. 4 Ucuriș)',
      sectiuni: [
        {
          nivel: 'Preșcolari',
          total: 69,
          randuri: [
            { label: 'Grupa mică', nr: 18 },
            { label: 'Grupa mijlocie', nr: 21 },
            { label: 'Grupa mare', nr: 30 },
          ],
        },
      ],
    },
  },
  {
    id: 6,
    nume: 'Școala Primară Nr. 1 Hodișel',
    tip: 'Școală Primară',
    localitate: 'Hodișel',
    img: null,
    mapEmbed: EMBED_HODISEL,
    elevi: {
      total: 10,
      nota: null,
      sectiuni: [
        {
          nivel: 'Primar',
          total: 10,
          randuri: [
            { label: 'Clasa a II-a', nr: 5 },
            { label: 'Clasa a III-a', nr: 2 },
            { label: 'Clasa a IV-a', nr: 3 },
          ],
        },
      ],
    },
  },
]

// Etichete pentru fiecare stare a cardului
const HINT = ['Click pentru elevi înscriși', 'Click pentru hartă', 'Click pentru fotografie']

const SWIPE_THRESHOLD = 50

export default function InformatiiUtile() {
  const [cardStates, setCardStates] = useState({})
  const touchStartX = useRef({})

  const getState = (id) => cardStates[id] || 0

  const nextState = (id) =>
    setCardStates(prev => ({ ...prev, [id]: ((prev[id] || 0) + 1) % 3 }))

  const prevState = (id) =>
    setCardStates(prev => ({ ...prev, [id]: ((prev[id] || 0) + 2) % 3 }))

  const handleTouchStart = (id, e) => {
    touchStartX.current[id] = e.touches[0].clientX
  }

  const handleTouchEnd = (id, e) => {
    const startX = touchStartX.current[id]
    if (startX === undefined) return
    const diff = startX - e.changedTouches[0].clientX
    if (Math.abs(diff) < SWIPE_THRESHOLD) return
    diff > 0 ? nextState(id) : prevState(id)
  }

  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Informații Utile</h1>

        <p className="iu-intro-text">
          Apasă (sau glisează) pe cardul unei unități pentru a vedea numărul de elevi înscriși,
          apoi din nou pentru localizarea pe hartă.
        </p>

        <div className="iu-grid">
          {unitati.map((u) => {
            const state = getState(u.id)
            return (
              <div
                key={u.id}
                className="iu-card"
                onClick={() => nextState(u.id)}
                onTouchStart={(e) => handleTouchStart(u.id, e)}
                onTouchEnd={(e) => handleTouchEnd(u.id, e)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && nextState(u.id)}
                aria-label={`${u.nume} — ${HINT[state]}`}
              >
                {/* ── State 0: Fotografie ── */}
                {state === 0 && (
                  u.img ? (
                    <img src={u.img} alt={u.nume} className="iu-card__foto" />
                  ) : (
                    <div className="iu-card__foto-placeholder">
                      <span>Fotografie în curând</span>
                    </div>
                  )
                )}

                {/* ── State 1: Elevi înscriși ── */}
                {state === 1 && (
                  <div className="iu-card__elevi">
                    <div className="iu-elevi__header">
                      <span className="iu-elevi__total">{u.elevi.total}</span>
                      <span className="iu-elevi__label">elevi înscriși</span>
                    </div>
                    {u.elevi.nota && (
                      <p className="iu-elevi__nota">{u.elevi.nota}</p>
                    )}
                    <div className="iu-elevi__sectiuni">
                      {u.elevi.sectiuni.map((s) => (
                        <div key={s.nivel} className="iu-elevi__sectiune">
                          <div className="iu-elevi__nivel-header">
                            <span className="iu-elevi__nivel">{s.nivel}</span>
                            <span className="iu-elevi__nivel-total">{s.total}</span>
                          </div>
                          <table className="iu-elevi__table">
                            <tbody>
                              {s.randuri.map((r) => (
                                <tr key={r.label}>
                                  <td className="iu-elevi__td-label">{r.label}</td>
                                  <td className="iu-elevi__td-nr">{r.nr}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── State 2: Hartă ── */}
                {state === 2 && (
                  u.mapEmbed ? (
                    <iframe
                      src={u.mapEmbed}
                      className="iu-card__map"
                      title={`Hartă ${u.nume}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  ) : (
                    <div className="iu-card__foto-placeholder">
                      <span>Hartă indisponibilă</span>
                    </div>
                  )
                )}

                {/* ── Footer card ── */}
                <div className="iu-card__footer">
                  <div className="iu-card__footer-info">
                    <span className="iu-card__tip">{u.tip}</span>
                    <span className="iu-card__nume">{u.nume}</span>
                  </div>
                  <span className="iu-card__hint">{HINT[state]}</span>
                </div>

                {/* ── Indicatori stare ── */}
                <div className="iu-card__dots">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className={`iu-dot${i === state ? ' iu-dot--active' : ''}`} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
