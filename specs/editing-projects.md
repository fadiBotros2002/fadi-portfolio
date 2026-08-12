# Editing portfolio project cards

## Split of concerns

| Concern | File(s) |
|---------|---------|
| Structure (id, tech, links, flags, images, group) | `js/projects-catalog.js` |
| Title, period, description, link labels | `assets/i18n/en.json`, `ar.json`, `de.json` under `projects.items.{id}` |
| Render / badges / gallery / hide | `js/projects.js` |
| Screenshots | `assets/images/projects/` (Odoo: `odoo/` — see README) |

**Never** put Arabic/English/German prose in the catalog — only in i18n.

## Catalog fields

```js
{
  id: 'kebab-id',           // must match projects.items.{id} in all locales
  group: 'odoo' | 'software', // which grid: #odooProjectsGrid vs #projectsGrid
  icon: 'fas fa-…',         // Font Awesome; shown if no image or image fails
  image: 'assets/…',        // optional main preview
  gallery: ['assets/…'],    // optional thumbs; click swaps main image
  technologies: ['…'],      // shown as tags (language-agnostic)
  links: {
    rows: [{ href, labelKey, icon?, btnClass? }],  // labelKey → i18n projects.items.{id}.links.{labelKey}
    github: 'https://…' | null
  },
  featured: false,          // badge + featured card class
  wip: false,               // “in progress” badge
  minor: false,             // “student task” badge
  hidden: false             // if true → filtered out in renderProjects()
}
```

## Checklist: add a project

1. Append entry to `PROJECTS_CATALOG` (unique `id`).
2. Add `projects.items.{id}` in **en**, **ar**, and **de** (title, period, description; `links` keys if using `rows`).
3. Add images under `assets/images/projects/` if needed; wire `image` / `gallery`.
4. Optionally note context in `specs/showcase/{id}.md`.

## Checklist: hide without deleting

Set `hidden: true` on the catalog entry. Keep i18n + images. Toggle to `false` (or remove the key) to show again.

## Checklist: text-only update

Edit the three locale JSON files only. Keep the same key paths.

## Order

Catalog array order = display order on the page.
