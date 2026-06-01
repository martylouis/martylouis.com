# Plan: Homepage Rebuild

> Source PRD: `docs/prds/homepage-rebuild.md`

## Architectural decisions

Durable decisions that apply across all phases:

- **Routes**: Notes live at `/notes/[slug]/` using Astro dynamic routes. Homepage remains at `/`.
- **Schema**: Notes use a single `notes` content collection extending the shared `entrySchema` from `src/types.ts`. The `format` field (`short` | `long`, default `short`) controls rendering behavior. `created_at` is required for notes (unlike the base schema where it's optional). `tags` are stored but not rendered in this plan.
- **Content location**: Notes stored in `src/content/notes/` as Markdown files named `YYYY-MM-DD-slug.md`.
- **Data access**: Notes queried via a helper in `src/lib/entries.ts`, following the existing `projectEntries` pattern — filter drafts, sort by `created_at` descending.
- **Styling**: Note detail pages use `@tailwindcss/typography` prose classes, matching the existing `[...slug].astro` page pattern.
- **No client-side JS on homepage**: Hero and notes teaser are pure Astro components. The `TextEffect` and `CalPopup` React components are removed from the homepage (kept in codebase for potential use elsewhere).

---

## Phase 1: Hero Section + Homepage Cleanup

**User stories**: 1, 2, 3, 14, 15

### What to build

Replace the current homepage content (animated headline, Cal.com popup, project grid) with a static hero section. The hero is a new Astro component containing a first-person intro (2–3 sentences: name, role, location) and a simple link to `/contact/`. The component uses no React, no animations, no client-side JavaScript.

Update `index.astro` to render only the hero component. Remove imports for `Projects`, `TextEffect`, `CalPopup`, and `Icon`. Update the page's meta title and description to reflect the personal site direction. Remove the `content` object with the old headline/hook copy.

The `Projects.astro` component and all project content files remain untouched in the codebase.

### Acceptance criteria

- [ ] New hero Astro component exists with first-person intro copy and a link to `/contact/`
- [ ] `index.astro` renders only the hero component — no project grid, no animations, no Cal popup
- [ ] Page meta title and description updated (no longer "Professional UI/UX Design Without the Agency Overhead")
- [ ] Hero is responsive and respects dark mode theming
- [ ] `Projects.astro` and `src/content/projects/` are untouched
- [ ] `pnpm build` and `pnpm check` pass

---

## Phase 2: Notes Content Collection + Seed Content

**User stories**: 8, 9, 11, 13

### What to build

Define a `notes` content collection in `content.config.ts` with a Zod schema that extends the shared `entrySchema`. Add fields: `format` (enum `short` | `long`, default `short`), `tags` (array of strings, optional). Make `created_at` required for notes. Use a glob loader pointing at `src/content/notes/`.

Add a `noteEntries` helper in `src/lib/entries.ts` following the `projectEntries` pattern — filter out drafts, sort by `created_at` descending.

Create 2 seed notes in `src/content/notes/`:

- 1 short-form note (~2–3 sentences, `format: short`)
- 1 long-form note (~3–4 paragraphs with a `description` excerpt, `format: long`)

Content should match the "coffee shop voice" tone from the content brief.

### Acceptance criteria

- [ ] `notes` collection defined in `content.config.ts` with correct schema (format, tags, required created_at)
- [ ] `noteEntries` helper exported from `src/lib/entries.ts`
- [ ] 2 seed notes exist in `src/content/notes/` (1 short, 1 long)
- [ ] `pnpm build` validates schema and content without errors
- [ ] `pnpm check` passes

---

## Phase 3: Note Detail Pages

**User stories**: 7, 12, 14, 15

### What to build

Create a dynamic route at `src/pages/notes/[slug].astro` that renders individual note pages. Follow the existing `[...slug].astro` pattern: use `getStaticPaths` to generate pages from the notes collection, filter drafts in production, render full Markdown content using `BaseLayout` with prose styling.

The note's `title` and `description` populate the page's meta tags. Both short-form and long-form notes get their own page — even though short notes will also render inline on the homepage.

### Acceptance criteria

- [ ] Dynamic route at `/notes/[slug]/` renders each note's full content
- [ ] Drafts excluded in production builds (`import.meta.env.PROD` check)
- [ ] Page uses `BaseLayout` with note title and description as meta tags
- [ ] Content styled with `@tailwindcss/typography` prose classes
- [ ] Both seed notes accessible at their respective URLs
- [ ] `pnpm build` and `pnpm check` pass

---

## Phase 4: Notes Teaser on Homepage

**User stories**: 4, 5, 6, 10, 14, 15

### What to build

Create a notes teaser Astro component that displays the 5 most recent notes on the homepage. The component uses the `noteEntries` helper and renders each note differently based on its `format` field:

- **Short-form**: renders the full Markdown body inline with the date. No click-through link (though the page exists).
- **Long-form**: renders the title (linked to `/notes/[slug]/`), date, and `description` excerpt.

The section has a heading to separate it from the hero. Layout is a simple list — no cards, no grid — consistent with the minimal, typography-forward aesthetic.

Add the notes teaser component to `index.astro` below the hero.

### Acceptance criteria

- [ ] Notes teaser component renders on the homepage below the hero
- [ ] Shows up to 5 most recent non-draft notes
- [ ] Short-form notes display full body content inline with date
- [ ] Long-form notes display title (linked to detail page), date, and excerpt
- [ ] Section has a heading separating it from the hero
- [ ] Layout is responsive and respects dark mode
- [ ] `pnpm build` and `pnpm check` pass
