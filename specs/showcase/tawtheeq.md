# Tawtheeq

| | |
|--|--|
| Catalog id | `tawtheeq` |
| group | `software` |
| Status | **Hidden** (2026-08-13) — still in catalog, i18n, and assets; not on grids or hero count |
| Role on site | Client / private-style showcase (screenshots) |
| Period | Backend Developer · 2026 |
| Stack (tags) | Laravel 12, MySQL, QR Codes, Blade |

## What it is

Electronic correspondence archive & verification: outgoing/incoming workflows; printed docs verified via dynamic links and QR codes. Secure architecture (sensitive paths not exposed publicly).

## Portfolio wiring

- Cover + gallery under `assets/images/projects/tawtheeq-*.png`.
- No public GitHub; `links.rows` empty, `github: null`.
- **Currently hidden:** `hidden: true` on the `tawtheeq` entry in `js/projects-catalog.js`. Card is filtered from `#projectsGrid` and from the hero catalog count. Do not delete the catalog entry, i18n (`projects.items.tawtheeq`), or images.

### Restore (unhide)

1. In `js/projects-catalog.js`, set `hidden: false` (or remove the `hidden` flag) on `id: 'tawtheeq'`.
2. Update this spec Status to live, the live table in `editing-projects.md`, and the row in `showcase/README.md`.

## Privacy

Blur/crop org names and personal data in screenshots before publishing. See `assets/images/projects/README.md`.
