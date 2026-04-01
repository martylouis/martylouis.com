# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal website of Marty Thierry built with Astro 5, React 19, Tailwind CSS v4, and shadcn/ui (new-york style). Deployed on Vercel with trailing slashes enabled.

## Commands

- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm preview` — Build + preview
- `pnpm check` — Run all checks (astro check, eslint, prettier)
- `pnpm check:eslint` / `pnpm check:prettier` / `pnpm check:astro` — Run individual checks
- `pnpm fix` — Auto-fix eslint + prettier
- `pnpm ui:add <component>` — Add a shadcn/ui component

## Architecture

- **Astro pages** in `src/pages/` — Currently a single `index.astro`
- **Layouts** in `src/layouts/` — `BaseLayout.astro` wraps all pages
- **Components** in `src/components/` — Astro components at root (`Base*.astro`, `ButtonLink.astro`, etc.), shadcn/ui React components in `ui/`, MDX components in `mdx/`
- **Content collections** in `src/content/` — `projects` and `pages` collections defined in `config.ts` using Zod schemas
- **Styles** in `src/styles/global.css` — Tailwind v4 with CSS custom properties for theming; dark mode uses custom variant `@variant dark (&:where([data-theme=dark], [data-theme=dark] *))` (not class-based)
- **Animations** — `motion` (Framer Motion) for React component animations
- **Icons** — `astro-icon` with SVGs in `src/assets/svg/`
- **MDX** — `@astrojs/mdx` integration available for `.mdx` content files

## Key Conventions

- Path alias: `@/*` maps to `src/*`
- Use `cn()` from `@/lib/utils` for merging Tailwind classes
- Package manager: pnpm (v10.30.0)
- shadcn/ui config: new-york style, CSS variables enabled, neutral base color
- Tailwind plugins: `@tailwindcss/typography`, `@tailwindcss/forms`, `tailwindcss-animate`
- Trailing slash configured in `vercel.json`, not in Astro config
