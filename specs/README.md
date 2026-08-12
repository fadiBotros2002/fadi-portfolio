# Portfolio specs (agent + human)

Source of truth for editing this repo. **Do not gitignore** — these files ship on GitHub.

**Maintenance rule:** whenever the site changes (projects, i18n, nav, hero, sections), update the matching files here in the **same** change. Specs must not lag behind the code. Enforced by `.cursor/rules/portfolio-specs.mdc` (`alwaysApply`).

| File | When to read |
|------|----------------|
| [architecture.md](./architecture.md) | Site structure, sections, hero stats, nav |
| [editing-projects.md](./editing-projects.md) | Add / hide / update cards; Odoo vs software groups |
| [i18n.md](./i18n.md) | Languages, translation keys, RTL |
| [showcase/](./showcase/) | Context for each live project card |

**Removed from site (do not re-add):** Maestro (beginner sample). Image file `assets/images/projects/maestro.png` may still exist unused.

Agent rule: `.cursor/rules/portfolio-specs.mdc` (always apply) points here.
