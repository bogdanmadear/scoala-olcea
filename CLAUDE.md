# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Site oficial al **Școlii Gimnaziale Nr. 1 Olcea**, Comuna Olcea, Județul Bihor, România.
Director: Prof. Pop Ionela Adina

## Commands

```bash
npm run dev       # Start development server (Vite HMR) → http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint across the project
```

## Deploy

- **Repo GitHub:** https://github.com/bogdanmadear/scoala-olcea
- **Hosting:** Vercel — auto-deploy la fiecare push pe `main`
- Workflow standard după orice modificare:
  ```bash
  git add .
  git commit -m "descriere modificare"
  git push
  ```

## Architecture

**React 19 + Vite SPA** cu **Sanity CMS** pentru conținut dinamic (anunțuri). Restul conținutului este definit ca array-uri/obiecte inline în componentele de pagină. Tot textul UI este în **limba română**.

### Structure

- `src/main.jsx` → entry point, montează `<App>`
- `src/App.jsx` → router setup cu `<BrowserRouter>`, toate definițiile de rute + ruta `/studio/*` (lazy)
- `src/sanityClient.js` → client Sanity pentru queries din componente React
- `src/sanity/` → config și scheme Sanity Studio (folosit doar de `StudioPage.jsx`)
- `src/components/` → componente partajate: `Navbar`, `Hero`, `Footer` (fiecare cu `.css` co-located)
- `src/pages/` → câte un fișier per rută (fiecare cu `.css` co-located)
- `src/index.css` → variabile CSS globale, resets și clase utilitare
- `public/` → assets statice servite ca atare (ex: documente `.docx` descărcabile)
- `public/images/unitati/` → fotografii ale unităților de învățământ (5 fișiere `.jpeg` cu nume URL-safe)
- `Doc_scoala/` → documente sursă ale școlii (nu sunt servite direct, se copiază în `public/` când e nevoie)
- `Img_scoala/` → imagini sursă ale școlii
- `Img_scoala/Unitati arondate/` → imagini sursă pentru unitățile arondate (nume cu diacritice, copiate în `public/images/unitati/`)
- `Link_scoala/Locatii.txt` → linkuri Google Maps (maps.app.goo.gl) pentru fiecare unitate

### Routing

Rutele sunt definite în `App.jsx`. Navbar-ul grupează unele rute sub dropdown-ul „Informații".

| Path | Component |
|------|-----------|
| `/` | Home |
| `/despre-noi` | DespreNoi |
| `/informatii-utile` | InformatiiUtile |
| `/organigrama` | Organigrama |
| `/regulament` | Regulament |
| `/unitati-arondate` | UnitatiArondate |
| `/elevi-inscrisi` | EleviInscrisi |
| `/anunturi` | Anunturi |
| `/studio/*` | StudioPage (Sanity Studio, lazy) |
| `/portal-elevi` | PortalElevi |
| `/contact` | Contact |

### Styling conventions

- **Variabile CSS** definite în `index.css` folosesc prefixul `--color-` (ex: `--color-primary: #1a3a6b`, `--color-accent: #c8a94a`, `--color-gray-600`). Folosește întotdeauna variabilele, nu valori hardcodate.
- Alte tokene globale: `--shadow-sm/md/lg`, `--radius`, `--transition`, `--font-sans`.
- **Clase utilitare globale** din `index.css`: `.container` (max-width 1200px, padding 1.5rem), `.page-content` (min-height + padding 4rem), `.page-title` (h1 stilizat cu underline accent), `.placeholder-card`.
- Fiecare componentă/pagină are propriul `.css` importat direct în JSX.
- **Breakpoint responsive:** `max-width: 900px`.
- Nu se folosește Tailwind sau librării externe de UI.

### ESLint

Config în `eslint.config.js` (flat config format). Regula `no-unused-vars` ignoră variabilele cu nume ce încep cu literă mare sau underscore (`^[A-Z_]`), pentru a acomoda importurile de componente React nedetectate de ESLint.

**Atenție:** `eslint-plugin-react-hooks@7.0.1` nu suportă ESLint v10 — versiunea fixată în `package.json` este `"eslint": "^9.0.0"`. Nu upgrada la v10.

### Dependențe externe

- **`@emailjs/browser`** — folosit în `Contact.jsx` pentru trimiterea emailurilor din formular fără backend. Credențialele (Service ID, Template ID, Public Key) sunt definite ca constante în capul fișierului `Contact.jsx`.
- **`sanity`** — Studio CMS embedded la ruta `/studio/*`, încărcat lazy (`StudioPage.jsx`). Config în `src/sanity/sanity.config.js`.
- **`@sanity/client`** — client pentru citirea datelor din Sanity în componentele React. Configurat în `src/sanityClient.js`.

### Sanity CMS

- **Project ID:** `0y3z7qip` | **Dataset:** `production`
- **Studio:** accesibil la `/studio` (rută fără Navbar/Footer, lazy loaded)
- **Fișiere cheie:**
  - `src/sanityClient.js` — client `@sanity/client` (useCdn, apiVersion 2026-02-25)
  - `src/sanity/sanity.config.js` — config Studio (defineConfig + structureTool)
  - `src/sanity/schemaTypes/anunt.js` — schema document `anunt`
  - `src/sanity/schemaTypes/index.js` — exportă toate schema types
  - `src/pages/StudioPage.jsx` — wrapper lazy pentru `<Studio>`
- **Schema `anunt`:** câmpuri `titlu` (string, required), `continut` (text, required), `data` (date, required), `tip` (radio: Important/Informativ/Eveniment, required), `publicat` (boolean, default true)
- **CORS:** trebuie adăugate în [sanity.io/manage](https://sanity.io/manage) → proiect `0y3z7qip` → API → CORS Origins:
  - `http://localhost:5173`
  - domeniul Vercel de producție
- **Bundle:** Studio e code-split separat (~5.3MB), nu afectează bundle-ul principal (~270KB)

### Imagini unități

Imaginile sunt stocate în `public/images/unitati/` cu nume URL-safe:

| Fișier | Unitate |
|--------|---------|
| `scoala-gimnaziala-nr1-olcea.jpeg` | Școala Gimnazială Nr. 1 Olcea |
| `scoala-gimnaziala-nr2-calacea.jpeg` | Școala Gimnazială Nr. 2 Călacea |
| `scoala-primara-nr2-calacea.jpeg` | Școala Primară Nr. 2 Călacea |
| `gradinita-nr2-calacea.jpeg` | Grădinița cu Program Normal Nr. 2 Călacea |
| `gradinita-nr4-ucuris.jpeg` | Grădinița cu Program Normal Nr. 4 Ucuriș |

Școala Primară Nr. 1 Hodișel nu are fotografie momentan (placeholder „Fotografie în curând").

### Coordonate GPS unități (pentru embed hărți)

| Unitate | Lat | Lng |
|---------|-----|-----|
| Olcea | 46.6833868 | 21.9829328 |
| Călacea (toate unitățile) | 46.67529 | 21.9277225 |
| Ucuriș | 46.63966827816357 | 21.95635508386115 |
| Hodișel | 46.648325211218165 | 22.047678710039456 |

Embed URL format: `https://maps.google.com/maps?q=LAT,LNG&output=embed&z=17`

---

## Status pagini

| Pagină | Status | Note |
|--------|--------|-------|
| Home | ✅ Complet | Hero + Acces Rapid + Despre; fix mobile: stats bar nu mai overlap butoanele |
| Anunțuri | ⏳ În lucru | Date statice demo — de conectat la Sanity (`anunt` schema gata) |
| Portal Elevi | ✅ Complet | Grid cu 4 module marcate „În curând" |
| Contact | ✅ Complet | Date contact + formular cu EmailJS funcțional (`@emailjs/browser`) |
| Regulament | ✅ Complet | Cap. I afișat complet + cuprins 17 capitole + buton download `.docx` |
| Organigramă | ✅ Complet | Layout 3 coloane, date reale 2025-2026, live pe Vercel |
| Despre Noi | ✅ Complet | Intro școală + grilă 3 col cu foto unități; card placeholder Hodișel |
| Informații Utile | ✅ Complet | Carduri interactive 3 stări (foto → elevi înscriși → hartă); swipe mobile |
| Unități Arondate | ✅ Complet | Grid 2 col, liste cadre didactice per unitate |
| Elevi Înscriși | ✅ Complet | Tabele elevi pe clase, grupate pe unități |

---

## Fișiere sursă școală (`Doc_scoala/`)

| Fișier | Conținut | Utilizat |
|--------|----------|---------|
| `1 ROI 2025 - 2026.docx` | Regulament de Ordine Interioară | ✅ Copiat în `public/ROI-2025-2026.docx` |
| `2 ROF 2025 - 2026.docx` | Regulament de Organizare și Funcționare | Util pentru completări viitoare |
| `2026_02_20_ORGANIGRAMA.docx` | Organigramă grafică | ✅ Date extrase și integrate în `Organigrama.jsx` |
| `2025-2026 NUMĂR ELEVI...` | Liste elevi pe clase | ✅ Date integrate în `EleviInscrisi.jsx` |
| `2026_PREZENȚA PERSONA...` | Prezență personal | Util pentru completări viitoare (Despre Noi / personal) |
| `roi_text.txt` | Varianta text a ROI | ✅ Folosit la extragerea conținutului pentru Regulament |
