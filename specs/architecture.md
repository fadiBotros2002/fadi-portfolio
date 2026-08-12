# Site architecture

Static shell: `index.html` loads HTML fragments into placeholders, then JS applies i18n and renders projects.

## Live entrypoints (use these)

| Path | Role |
|------|------|
| `index.html` | Shell: mounts `#navigation`, `#hero`, … `#footer`; early theme/lang FOUC script |
| `components/*.html` | Section markup; copy via `data-i18n` keys |
| `js/i18n/config.js` | Locales, cycle, `basePath` |
| `js/i18n/loader.js` | `window.I18n` — load JSON, `t()`, `apply()` |
| `js/projects-catalog.js` | `PROJECTS_CATALOG` structure only (no user-facing text) |
| `js/projects.js` | Renders into `#odooProjectsGrid` + `#projectsGrid` by `group` |
| `js/app.js` | Theme, language picker, nav, scroll, **hero catalog count**; `renderProjects()` |
| `styles/main.css` | Main styles (incl. `.projects-group`) |
| `assets/styles/themes/{light,dark}.css` | Theme variables |
| `assets/i18n/{en,ar,de}.json` | All UI + project copy |
| `netlify.toml` | Deploy |

## Page sections (CV-aligned order)

1. **Hero** — Backend · Odoo positioning; chips; stats; CTAs (incl. LinkedIn button)
2. **About** — summary + glance card
3. **Experience** — ASAS → Freelance → SAMWare → education strip
4. **Skills** — Backend/APIs, ERP & automation (Odoo), Frontend, DBs, DevOps, Testing, Tools
5. **Projects** — two groups: Odoo ERP (`#odoo-projects`) then Software & automation
6. **Contact** / **Footer**

## Navigation

`components/navigation.html`: Home, Profile, Experience, Skills, Projects, Contact.  
**No LinkedIn item in the top bar** — LinkedIn stays on hero buttons, about card, and contact only.

## Hero stats

| Stat | Source |
|------|--------|
| Project count | **Dynamic** — `data-stat="catalog-count"`; `setupStatsCounter()` in `js/app.js` sets `data-target` from `PROJECTS_CATALOG.filter(p => !p.hidden).length` |
| Years (`2`) | Static `data-target` in `components/hero.html` |
| Graduation (`2025`) | Static text |

## Projects UI

- Markup: `components/projects.html` — `#odooProjectsGrid` + `#projectsGrid`
- Primary CTA in hero: `#odoo-projects`
- Images: if `img` fails → hidden + icon fallback (`project-icon--visible`)
- Each card: `id="project-{catalog-id}"` (e.g. `#project-odoo-food-wms`)
- Deep link: `#project-{id}` — `scrollToProjectHash()` retries until the card exists, then re-scrolls after body fade-in (`history.scrollRestoration = 'manual'`). Also on `hashchange` + `window.load`.

### CV deep links (use these)

Preferred path (works after Netlify deploy with rewrite):

| Project | URL |
|---------|-----|
| Food WMS | `/p/odoo-food-wms` |
| Odoo KDS | `/p/odoo-kds` |
| VisionMate | `/p/visionmate` |
| Wazefni | `/p/wazefni` |
| Tawtheeq | `/p/tawtheeq` |
| Smart Expense | `/p/smart-expense` |
| Graduation | `/p/graduation-system` |
| Proxmox alerts | `/p/proxmox-alerts` |
| Civil registry | `/p/civil-registry` |
| All Odoo section | `/#odoo-projects` |

Fallback query (also supported): `/?project=odoo-food-wms`  
Legacy hash: `/#project-odoo-food-wms` (less reliable on first load)

`openDeepLinkedProject()` runs from `PortfolioApp.init` after `renderProjects()` + fade-in.

## Legacy / unused for the live page

Prefer not to extend unless migrating away from `js/app.js`:

- `js/main.js`, `js/translations.js`, `js/utils.js`, `js/config.js`
- `assets/scripts/**`, `assets/data/translations/**`
- Root `script.js`, `style.css` (if unused by `index.html`)

## Runtime flow

1. Early script sets `data-theme` + `lang`/`dir` from `localStorage`.
2. Component HTML fetched into placeholders.
3. `PortfolioApp` → `I18n.load(lang)` → `applyTranslations()` → `renderProjects()` + stats counter.
4. Language change: reload locale JSON, re-apply DOM + re-render projects.

## Design constraints

CV-style layout: skill panels/tags, project cards with optional image + gallery, light default theme, IBM Plex / Tajawal for Arabic. Do not invent a second design system.
