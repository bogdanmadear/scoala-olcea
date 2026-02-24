import './Organigrama.css'

const consiliumAdministratie = [
  'Pop Ionela Adina', 'Feneși Adriana', 'Filimon Mariana',
  'Anton Mircea', 'Petruț Lenuța', 'Ciocluț Sorin', 'Ile Ioan',
]

const comisiaCalitate = [
  { nume: 'Pop Ionela Adina', rol: 'Coordonator' },
  { nume: 'Huieț Marcela', rol: 'Responsabil' },
  { nume: 'Brânda Simona', rol: 'Membru' },
  { nume: 'Ile Marius', rol: 'Membru' },
  { nume: 'Anton Mircea', rol: 'Resp. Comitet Părinți' },
  { nume: 'Ile Ioan', rol: 'Resp. Consiliu Local' },
  { nume: 'Judea Andreea', rol: 'Responsabil Elevi' },
]

const comisii = [
  { nume: 'Comisia de Curriculum', responsabil: 'Țărău Ana' },
  { nume: 'Comisia SSM + SU', responsabil: 'Mateoc Ionuț, Goga Georgiana' },
  { nume: 'Comisia SCIM', responsabil: 'Filimon Mariana' },
  { nume: 'Comisia CPEV', responsabil: 'Ile Marius' },
  { nume: 'CEAC', responsabil: 'Huieț Marcela' },
  { nume: 'CMDFCD', responsabil: 'Buibaș Teodor' },
]

const consiliulProfesoral = [
  'Ciocluț Mirela', 'Petrila Rodica-Elena', 'Mistor Ioan-Claudiu',
  'Nyikita Leonora', 'Buibaș Teodor', 'Zopota Călin',
  'Huieț Marcela-Rodica', 'Filimon Mariana-Cosmina', 'Creț Mihaela',
  'Zifceac Florica', 'Pop Ionela Adina', 'Biriș Andreea',
  'Rugea Irina', 'Indrei Florina', 'Anton Lucica',
  'Goga Georgiana', 'Haidu Luminița', 'Matei Sanda',
  'Brânda Simona', 'Țărău Ana', 'Mateoc Laura',
  'Ile Cristina', 'Ile Marius', 'Mateoc Ionuț',
  'Maga Denisa', 'Bachesz Teodora-Florina', 'Leucuța Maria-Angela',
  'Lobonț Daniela', 'Negrău Lenuța', 'Feneși Adriana',
]

export default function Organigrama() {
  return (
    <div className="page-content">
      <div className="container">
        <h1 className="page-title">Organigrama</h1>
        <p className="org-subtitle">An școlar 2025 – 2026 · Școala Gimnazială Nr. 1 Olcea</p>

        <div className="org-layout">

          {/* ── Coloana stânga ─────────────────────────── */}
          <div className="org-col-left">

            <div className="org-card org-card--outline">
              <h3 className="org-card__title">Autoritatea Administrației Publice Locale</h3>
              <p className="org-card__name">Bocșe Flore</p>
            </div>

            <div className="org-card org-card--light">
              <h3 className="org-card__title">Comisia pentru Evaluarea și Asigurarea Calității</h3>
              <ul className="org-list">
                {comisiaCalitate.map((p) => (
                  <li key={p.nume} className="org-list__item">
                    <span className="org-list__name">{p.nume}</span>
                    <span className="org-list__rol">{p.rol}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ── Coloana centrală ───────────────────────── */}
          <div className="org-col-center">

            {/* Consiliul de Administrație */}
            <div className="org-card org-card--primary">
              <h3 className="org-card__title">Consiliul de Administrație</h3>
              <ul className="org-names-list">
                {consiliumAdministratie.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>

            <div className="org-connector org-connector--v" />

            {/* Director */}
            <div className="org-card org-card--director">
              <p className="org-card__label">DIRECTOR</p>
              <p className="org-card__name org-card__name--large">Prof. Pop Ionela Adina</p>
            </div>

            <div className="org-connector org-connector--v" />

            {/* Nivel 3 — sub director */}
            <div className="org-row-3">

              <div className="org-branch">
                <div className="org-connector org-connector--v" />
                <div className="org-card org-card--secondary">
                  <h3 className="org-card__title">Coordonator Proiecte și Programe Educative Școlare și Extrașcolare</h3>
                  <p className="org-card__name">Filimon Mariana</p>
                </div>
              </div>

              <div className="org-branch">
                <div className="org-connector org-connector--v" />
                <div className="org-card org-card--secondary">
                  <h3 className="org-card__title">Comisii</h3>
                  <ul className="org-comisii-list">
                    {comisii.map((c) => (
                      <li key={c.nume} className="org-comisii-list__item">
                        <span className="org-comisii-list__name">{c.nume}</span>
                        <span className="org-comisii-list__resp">{c.responsabil}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Administrator + Secretar */}
            <div className="org-row-bottom">
              <div className="org-branch">
                <div className="org-connector org-connector--v" />
                <div className="org-card org-card--light">
                  <h3 className="org-card__title">Administrator Financiar</h3>
                  <p className="org-card__name">Mihuța Mirela</p>
                </div>
              </div>

              <div className="org-branch">
                <div className="org-connector org-connector--v" />
                <div className="org-card org-card--light">
                  <h3 className="org-card__title">Secretar</h3>
                  <p className="org-card__name">Mateaș Sanda Liliana</p>
                </div>
              </div>
            </div>

          </div>

          {/* ── Coloana dreapta ────────────────────────── */}
          <div className="org-col-right">

            <div className="org-card org-card--outline">
              <h3 className="org-card__title">Consiliul Reprezentativ al Părinților</h3>
              <p className="org-card__name">Anton Mircea</p>
            </div>

            <div className="org-card org-card--profesoral">
              <h3 className="org-card__title">Consiliul Profesoral</h3>
              <ul className="org-profesoral-list">
                {consiliulProfesoral.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
