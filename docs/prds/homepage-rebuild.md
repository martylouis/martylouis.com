# Homepage Rebuild PRD

**Date:** 2026-03-27
**Phase:** 1 (Foundation)
**Reference:** `docs/content-brief.md`

---

## Problem Statement

The current homepage is a generic marketing landing page — an animated headline ("Professional Web Design Without the Agency Overhead"), a discovery call popup, and a full 10-project screenshot grid. It reads as a sales page, not a personal site. It doesn't reflect Marty's voice, doesn't communicate who he is or what he's working on, and doesn't match the "personal site with business backbone" direction defined in the content brief. The site feels static and lifeless without any content feed, and visitors have no reason to return.

## Solution

Rebuild the homepage as a minimal, personal front door with two sections:

1. **Hero / Intro** — A static, first-person introduction (2–3 sentences) that says who Marty is, what he does, and where he's based. Warm and conversational, not a tagline. Ends with a simple link to `/contact/`. No animated text effects, no Cal.com popup.

2. **Notes Teaser** — The 5 most recent notes from a new `notes` content collection. Short-form notes render their full body inline; long-form notes show a title, date, and excerpt that link to a detail page at `/notes/[slug]/`. This gives the site a living, evolving quality and gives visitors a reason to come back.

The current project grid is removed from the homepage but the `Projects` component and project content files are preserved for a future `/work/` page.

---

## User Stories

1. As a first-time visitor, I want to immediately understand who Marty is and what he does, so that I can decide if he's relevant to my needs.
2. As a first-time visitor, I want the homepage to feel personal and human, so that I get a sense of who I'd be working with.
3. As a potential client, I want a clear path to get in touch, so that I can start a conversation without hunting for a contact link.
4. As a returning visitor, I want to see what Marty has been thinking about or working on recently, so that I have a reason to come back.
5. As a visitor reading a short note, I want to consume the full content inline on the homepage, so that I don't have to click through for a brief thought.
6. As a visitor seeing a longer note, I want a title, date, and excerpt, so that I can decide whether to click through and read the full piece.
7. As a visitor clicking a long-form note, I want to land on a dedicated note page with the full content, so that I can read it without distraction.
8. As Marty, I want to publish both short-form thoughts and longer articles in a single collection, so that I don't have to manage two separate content pipelines.
9. As Marty, I want to add a note by creating a single Markdown file with frontmatter, so that publishing is as simple as committing a file.
10. As Marty, I want the homepage to automatically show my 5 most recent notes without manual curation, so that it stays current without extra effort.
11. As Marty, I want to distinguish between short and long notes via a frontmatter field, so that the homepage can render them differently.
12. As Marty, I want each note to have its own page at `/notes/[slug]/`, so that I can link to individual pieces from social media or other sites.
13. As Marty, I want the project data and components preserved even though they're removed from the homepage, so that I can build a `/work/` page later without redoing that work.
14. As a visitor on mobile, I want the hero and notes sections to be fully responsive, so that the site reads well on any device.
15. As a visitor with dark mode enabled, I want the homepage sections to respect the site's dark theme, so that the experience is consistent.

---

## Implementation Decisions

### Module 1: Hero Section Component

- New Astro component for the hero section
- Static HTML — no React, no animations, no client-side JavaScript
- Content: 2–3 sentence first-person intro (name, role, location) followed by a simple link/button to `/contact/`
- Typography-forward, generous whitespace, centered layout consistent with the brief's design direction
- Copy tone: warm, first-person, conversational — "coffee shop" voice per the content brief

### Module 2: Notes Content Collection

- Single `notes` collection defined in `content.config.ts`
- Uses glob loader pointing at `src/content/notes/`
- Zod schema for frontmatter:
  - `title` (string, required) — note headline
  - `description` (string, optional) — excerpt/preview text for long-form notes; also used in meta description on detail pages
  - `format` (enum: `short` | `long`, default `short`) — determines homepage rendering behavior
  - `created_at` (date, required) — publication date, used for sorting
  - `updated_at` (date, optional)
  - `draft` (boolean, optional, default false) — draft notes excluded from queries
  - `tags` (array of strings, optional) — not displayed in Phase 1 but available for future filtering
- File naming convention: `YYYY-MM-DD-slug.md` for chronological ordering in the filesystem
- Markdown body contains the full note content

### Module 3: Notes Teaser Component

- New Astro component rendered on the homepage
- Queries the `notes` collection, filters out drafts, sorts by `created_at` descending, takes the first 5
- Rendering logic per note:
  - **Short-form** (`format: short`): renders the full Markdown body inline on the homepage with the date. No click-through link needed (but the page exists if someone navigates to it directly).
  - **Long-form** (`format: long`): renders the title, date, and `description` (excerpt). Title links to `/notes/[slug]/`.
- Simple list layout — no cards, no grid. Consistent with the minimal, typography-forward aesthetic.
- Section has a heading (e.g., "Notes" or "Recently") to separate it from the hero

### Module 4: Note Detail Page

- Dynamic route at `src/pages/notes/[slug].astro`
- Renders the full Markdown content of any note (short or long)
- Uses `BaseLayout` with the note's title and description for meta tags
- Simple, readable layout — prose styling via `@tailwindcss/typography`

### Module 5: Updated `index.astro`

- Remove the `Projects` component import and rendering
- Remove the `TextEffect` and `CalPopup` imports (no longer needed on homepage)
- Replace with: Hero component + Notes teaser component
- Update the `meta` object (title, description) to reflect the personal site direction
- The `content` object with headline/hook copy is removed — hero component owns its own content

### Module 6: Seed Content

- 2 seed notes to populate the section at launch:
  - 1 short-form note (a brief thought or observation, ~2-3 sentences)
  - 1 long-form note (a short article with a description/excerpt, ~3-4 paragraphs)
- Content should feel authentic to Marty's voice and the site's tone

### Preserved (Not Modified)

- `Projects.astro` component — untouched, kept for future `/work/` page
- All project content files in `src/content/projects/` — untouched
- `BaseLayout.astro`, `BaseHeader.astro`, `BaseFooter.astro` — no changes
- Navigation — separate effort, not in scope

---

## Testing Decisions

No automated tests for this phase. The work is primarily Astro templates, content collections, and static content. Validation happens through:

- Astro's built-in Zod schema validation catches malformed frontmatter at build time
- `pnpm build` confirms the site compiles without errors
- `pnpm check` runs type checking, linting, and formatting
- Visual review in `pnpm dev` confirms layout, responsiveness, and dark mode

---

## Out of Scope

- **Site navigation** — Separate effort. No nav bar changes.
- **Selected Work / project grid on homepage** — Deferred. Projects component preserved for `/work/` page.
- **Services teaser on homepage** — Deferred to when service pages exist.
- **Currently / Now section** — Not included in this phase.
- **/notes/ index page** — Notes only appear on homepage and as individual pages. No listing page yet.
- **Full case studies** — Phase 2 per content brief.
- **Contact page** — Referenced in hero CTA but building it is a separate effort.
- **SEO optimization** — Basic meta tags only. Keyword strategy is a broader effort.
- **Cal.com integration** — Removed from homepage. May return on contact page.
- **Tags/category display** — Schema supports tags but they're not rendered in Phase 1.

---

## Further Notes

- The `TextEffect` and `CalPopup` React components may become unused after this change. They should be kept if other pages will use them; otherwise they can be cleaned up in a separate pass.
- The footer already has social links and a copyright — it serves as the persistent CTA referenced in the content brief. No footer changes needed.
- The content brief's "coffee shop voice" is the guiding principle for all copy: first person, warm, specific, no buzzwords.
- Once navigation is added (separate effort), the homepage link structure will be complete. Until then, the `/contact/` link in the hero and footer links are the primary navigation paths.
