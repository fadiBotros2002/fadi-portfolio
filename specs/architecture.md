# Site architecture

Static multi-page shell: `index.html` loads HTML fragments into placeholders, then JS applies i18n and renders projects.

## Live entrypoints (use these)

| Path | Role |
|------|------|
| `index.html` | Shell: mounts `#navigation`, `#hero`, … `#footer`; early theme/lang FOUC script |
| `components/*.html` | Section markup; copy via `data-i18n` keys |
| `js/i18n/config.js` | Locales, cycle, `basePath` |
| `js/i18n/loader.js` | `window.I18n` — load JSON, `t()`, `apply()` |
| `js/projects-catalog.js` | `PROJECTS_CATALOG` structure only (no user-facing text) |
| `js/projects.js` | Renders cards into `#odooProjectsGrid` and `#projectsGrid` by `group` |
| `js/app.js` | Theme, language picker, nav, scroll; calls `renderProjects()` |
| `styles/main.css` | Main styles |
| `assets/styles/themes/{light,dark}.css` | Theme variables |
| `assets/i18n/{en,ar,de}.json` | All UI + project copy |
| `netlify.toml` | Deploy |

## Legacy / unused for the live page

Prefer not to extend unless migrating away from `js/app.js`:

- `js/main.js`, `js/translations.js`, `js/utils.js`, `js/config.js`
- `assets/scripts/**`, `assets/data/translations/**`
- Root `script.js`, `style.css` (if unused by `index.html`)

## Runtime flow

1. Early script sets `data-theme` + `lang`/`dir` from `localStorage`.
2. Component HTML fetched into placeholders.
3. `PortfolioApp` → `I18n.load(lang)` → `applyTranslations()` → `renderProjects()`.
4. Language change: reload locale JSON, re-apply DOM + re-render projects.

## Design constraints (when changing UI)

Follow existing CV-style layout: skill panels/tags, project cards with optional image + gallery, light default theme, IBM Plex / Tajawal for Arabic. Do not invent a second design system.
