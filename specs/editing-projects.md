# Editing portfolio project cards

## Split of concerns

| Concern | File(s) |
|---------|---------|
| Structure (id, tech, links, flags, images, group) | `js/projects-catalog.js` |
| Title, period, description, link labels | `assets/i18n/{en,ar,de}.json` → `projects.items.{id}` |
| Render / badges / gallery / hide | `js/projects.js` |
| Screenshots | `assets/images/projects/` · Odoo: `odoo/food-wms/`, `odoo/kds/` |

**Never** put Arabic/English/German prose in the catalog — only in i18n.

## Catalog fields

```js
{
  id: 'kebab-id',           // must match projects.items.{id} in all locales
  group: 'odoo' | 'software', // #odooProjectsGrid vs #projectsGrid
  icon: 'fas fa-…',         // shown if no image or image fails
  image: 'assets/…',        // optional main preview
  gallery: ['assets/…'],    // optional thumbs; click swaps main image
  technologies: ['…'],      // language-agnostic tags
  links: {
    rows: [{ href, labelKey, icon?, btnClass? }],
    github: 'https://…' | null
  },
  featured: false,
  wip: false,
  minor: false,
  hidden: false             // filtered out of grids + hero catalog count
}
```

## Live catalog (do not resurrect Maestro)

| id | group | Notes |
|----|-------|--------|
| `odoo-food-wms` | odoo | Images in `odoo/food-wms/cover.png` + `1.png`…`5.png` |
| `odoo-kds` | odoo | Images in `odoo/kds/cover.png` + `1.png`…`4.png` |
| `visionmate` | software | Featured + LinkedIn rows |
| `wazefni` | software | Featured + LinkedIn video |
| `tawtheeq` | software | **Hidden** (2026-08-13). Keep catalog + i18n + images; unhide via `hidden: false`. CV name: ASAS EDMS |
| `smart-expense` | software | Freelance |
| `graduation-system` | software | Freelance |
| `proxmox-alerts` | software | SAMWare |
| `civil-registry` | software | Keep (site-only; not on CV) |

**Removed:** `maestro` — beginner sample; do not add back.

CV rule: projects on the site but missing from the CV may stay; do not delete solely for CV mismatch.

## Checklist: add a project

1. Append to `PROJECTS_CATALOG` with `group` + unique `id`.
2. Add `projects.items.{id}` in **en**, **ar**, and **de**.
3. Wire images; for Odoo prefer `cover.png` + numbered gallery files (no spaces in filenames).
4. Add `specs/showcase/{id}.md` and list it in `specs/showcase/README.md`.
5. Hero project count updates automatically (non-hidden catalog length).
6. Deep link for CV: `https://YOUR-SITE/#project-{id}` (card gets `id="project-{id}"`).

## CV deep links

**Preferred CV URL:** `{origin}/p/{catalog-id}` → Netlify **302** to `/?project={id}` (stays on site root so CSS/JS load).  
Also works directly: `/?project={id}`  

Do not rely on hash-only links for CV. `index.html` uses `<base href="/">` and root-absolute asset paths.

## Checklist: hide without deleting

`hidden: true` — disappears from grids and from the hero count. Keep i18n + images.

## Checklist: text-only update

Edit the three locale JSON files only.

## Order

Catalog array order = display order within each group grid.
