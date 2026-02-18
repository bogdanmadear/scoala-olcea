# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Vite HMR)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint across the project
```

## Architecture

**React 19 + Vite SPA** for Școala Gimnazială Olcea (school website in Romania). All UI text and content is in **Romanian**.

### Structure

- `src/main.jsx` → entry point, mounts `<App>`
- `src/App.jsx` → router setup with `<BrowserRouter>` and all route definitions
- `src/components/` → shared components: `Navbar`, `Hero`, `Footer` (each with co-located `.css`)
- `src/pages/` → one file per route (each with co-located `.css`)
- `src/index.css` → global CSS variables, resets, and utility classes
- `public/` → static assets served as-is (e.g., downloadable `.docx` documents)

### Routing

Routes are defined in `App.jsx`. The Navbar groups some routes under an "Informații" dropdown (Informații Utile, Organigramă, Regulament, Unități Arondate, Elevi Înscriși).

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

- **CSS variables** defined in `index.css` use a `--color-` prefix (e.g., `--color-primary`, `--color-accent`, `--color-gray-600`) — use these rather than hardcoded values. Other tokens: `--shadow-sm/md/lg`, `--radius`, `--transition`, `--font-sans`.
- **Global utility classes** from `index.css`: `.container` (1200px max-width, 1.5rem padding), `.page-content` (min-height + 4rem padding), `.page-title` (styled h1 with accent underline), `.placeholder-card`.
- Each component/page has its own `.css` file imported directly in the JSX file.
- Responsive breakpoint: `max-width: 900px`.

### Data

All data (announcements, staff lists, affiliated schools, etc.) is defined as inline arrays/objects inside the page components. There is no backend or API — the site is fully static.

### Placeholder / stub pages

- `DespreNoi`, `InformatiiUtile`, `Organigrama` — stubs awaiting real content.
- `PortalElevi` — UI shell with all features marked "În curând" (coming soon).
- `Contact` — form is non-functional (`onSubmit` only calls `e.preventDefault()`; no submission logic).

### ESLint

Config is in `eslint.config.js` (flat config format). The `no-unused-vars` rule ignores variables whose names start with an uppercase letter or underscore (`^[A-Z_]`), which accommodates React component imports that ESLint can't detect as used via JSX.
