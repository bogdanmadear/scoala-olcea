import './Regulament.css'

const capitole = [
  { nr: 'I', titlu: 'Dispoziții Generale' },
  { nr: 'II', titlu: 'Drepturile și Obligațiile Unității de Învățământ și ale Angajaților' },
  { nr: 'III', titlu: 'Modalități de Aplicare a Dispozițiilor Legale sau Contractuale' },
  { nr: 'IV', titlu: 'Sănătatea și Securitatea în Muncă' },
  { nr: 'V', titlu: 'Reguli de Disciplină a Muncii' },
  { nr: 'VI', titlu: 'Accesul în Unitate al Copiilor, Elevilor, Personalului și al Persoanelor din Afara Unității' },
  { nr: 'VII', titlu: 'Răspunderea Disciplinară și Patrimonială a Personalului' },
  { nr: 'VIII', titlu: 'Prevenirea și Combaterea Discriminării și a Hărțuirii' },
  { nr: 'IX', titlu: 'Mecanismul de Semnalare Anonimă a Faptelor de Violență' },
  { nr: 'X', titlu: 'Procedura de Soluționare a Cererilor sau Petițiilor Individuale ale Angajaților' },
  { nr: 'XI', titlu: 'Criteriile și Procedurile de Evaluare Profesională a Salariaților' },
  { nr: 'XII', titlu: 'Formarea Profesională' },
  { nr: 'XIII', titlu: 'Protecția Datelor cu Caracter Personal' },
  { nr: 'XIV', titlu: 'Veniturile Proprii ale Școlii Gimnaziale Nr. 1 Olcea' },
  { nr: 'XV', titlu: 'Reglementări privind Fumatul în Unitatea de Învățământ' },
  { nr: 'XVI', titlu: 'Spațiul Special Amenajat pentru Elevii cu Comportamente Disruptive' },
  { nr: 'XVII', titlu: 'Dispoziții Finale' },
]

const articoleCapI = [
  {
    nr: 1,
    text: 'Prezentul regulament a fost elaborat în conformitate cu prevederile Legii învățământului preuniversitar nr. 198/2023, cu modificările și completările ulterioare, ale Regulamentului-cadru de organizare și funcționare a unităților de învățământ preuniversitar, aprobat prin Ordinul nr. 5726/2024, cu modificările și completările ulterioare, ale Statutul elevului, din 01.08.2024, aprobat prin Ordinul nr. 5707/2024, ale Legii nr. 53/2003 privind Codul muncii, republicată, cu modificările și completările ulterioare, și ale altor acte normative elaborate de Ministerul Educației și Cercetării și Inspectoratul Școlar.',
  },
  {
    nr: 2,
    text: 'Prezentul regulament are ca scop stabilirea, în condițiile legii și la nivelul angajatorului – Școala Gimnazială Nr. 1 Olcea, a drepturilor și obligațiilor reciproce ale unității de învățământ, în calitate de angajator și ale angajaților, urmărind promovarea și garantarea unor relații de muncă echitabile, de natură să asigure protecția socială a angajaților.',
  },
  {
    nr: 3,
    text: 'Prevederile prezentului Regulament se aplică tuturor angajaților Școlii Gimnaziale Nr. 1 Olcea, indiferent de forma și durata contractului individual de muncă, de categoria de salariați în care se încadrează, de funcția pe care o dețin sau de poziția ierarhică ocupată, respectiv: personal didactic (de predare și conducere), personal didactic auxiliar și personal administrativ.',
  },
  {
    nr: 4,
    text: 'Angajații unității delegați/detașați la alte unități sunt obligați să respecte, pe lângă prevederile prezentului regulament, și prevederile regulamentului de ordine interioară al unității la care sunt delegați/detașați.',
  },
  {
    nr: 5,
    text: 'Toate categoriile de angajați își vor desfășura activitatea în cadrul Școlii Gimnaziale Nr. 1 Olcea în baza unor contracte, convenții sau acorduri, după caz, în acord cu legislația în vigoare și cu reglementările interne ale unității.',
  },
]

export default function Regulament() {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Regulament de Funcționare</h1>

        {/* Card document */}
        <div className="reg-doc-card">
          <div className="reg-doc-info">
            <span className="reg-doc-icon">📄</span>
            <div>
              <h2 className="reg-doc-title">Regulamentul de Ordine Interioară</h2>
              <p className="reg-doc-meta">
                Școala Gimnazială Nr. 1 Olcea &nbsp;•&nbsp; An școlar 2025 – 2026
              </p>
              <p className="reg-doc-meta">
                Director: Prof. Pop Ionela Adina
              </p>
            </div>
          </div>
          <a
            href="/ROI-2025-2026.docx"
            download
            className="reg-download-btn"
          >
            ⬇ Descarcă documentul
          </a>
        </div>

        {/* Capitolul I - preview */}
        <section className="reg-section">
          <h2 className="reg-chapter-title">
            <span className="reg-chapter-nr">Cap. I</span>
            Dispoziții Generale
          </h2>
          <div className="reg-articles">
            {articoleCapI.map((art) => (
              <div key={art.nr} className="reg-article">
                <span className="reg-art-nr">Art. {art.nr}.</span>
                <p className="reg-art-text">{art.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cuprins restul */}
        <section className="reg-toc">
          <h2 className="reg-toc-title">Cuprins complet — {capitole.length} capitole</h2>
          <p className="reg-toc-note">
            Descarcă documentul integral pentru a consulta toate capitolele.
          </p>
          <ol className="reg-toc-list">
            {capitole.map((cap) => (
              <li key={cap.nr} className="reg-toc-item">
                <span className="reg-toc-nr">Cap. {cap.nr}</span>
                <span className="reg-toc-titlu">{cap.titlu}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
