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

**React 19 + Vite SPA** — site complet static, fără backend sau API. Tot conținutul este definit ca array-uri/obiecte inline în componentele de pagină. Tot textul UI este în **limba română**.

### Structure

- `src/main.jsx` → entry point, montează `<App>`
- `src/App.jsx` → router setup cu `<BrowserRouter>` și toate definițiile de rute
- `src/components/` → componente partajate: `Navbar`, `Hero`, `Footer` (fiecare cu `.css` co-located)
- `src/pages/` → câte un fișier per rută (fiecare cu `.css` co-located)
- `src/index.css` → variabile CSS globale, resets și clase utilitare
- `public/` → assets statice servite ca atare (ex: documente `.docx` descărcabile)
- `Doc_scoala/` → documente sursă ale școlii (nu sunt servite direct, se copiază în `public/` când e nevoie)
- `Img_scoala/` → imagini sursă ale școlii

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

### Dependențe externe

- **`@emailjs/browser`** — folosit în `Contact.jsx` pentru trimiterea emailurilor din formular fără backend. Credențialele (Service ID, Template ID, Public Key) sunt definite ca constante în capul fișierului `Contact.jsx`.

---

## Status pagini

| Pagină | Status | Note |
|--------|--------|-------|
| Home | ✅ Complet | Hero + Acces Rapid + Despre |
| Anunțuri | ✅ Complet | 3 anunțuri demo cu badge-uri colorate |
| Portal Elevi | ✅ Complet | Grid cu 4 module marcate „În curând" |
| Contact | ✅ Complet | Date contact + formular cu EmailJS funcțional (`@emailjs/browser`) |
| Regulament | ✅ Complet | Cap. I afișat complet + cuprins 17 capitole + buton download `.docx` |
| Organigramă | ✅ Complet | Layout 3 coloane, date reale 2025-2026, live pe Vercel |
| **Despre Noi** | ⏳ **NEXT** | De completat cu text real despre școală |
| Informații Utile | ⏳ Placeholder | De completat |
| Unități Arondate | ⏳ Placeholder | De completat |
| Elevi Înscriși | ⏳ Placeholder | De completat |

---

## Fișiere sursă școală (`Doc_scoala/`)

| Fișier | Conținut | Utilizat |
|--------|----------|---------|
| `1 ROI 2025 - 2026.docx` | Regulament de Ordine Interioară | ✅ Copiat în `public/ROI-2025-2026.docx` |
| `2 ROF 2025 - 2026.docx` | Regulament de Organizare și Funcționare | Util pentru Informații Utile |
| `2026_02_20_ORGANIGRAMA.docx` | Organigramă grafică | ✅ Date extrase și integrate în `Organigrama.jsx` |
| `2025-2026 NUMĂR ELEVI...` | Liste elevi pe clase | Util pentru EleviInscriși |
| `2026_PREZENȚA PERSONA...` | Prezență personal | Util pentru Despre Noi / personal |
| `roi_text.txt` | Varianta text a ROI | ✅ Folosit la extragerea conținutului pentru Regulament |
