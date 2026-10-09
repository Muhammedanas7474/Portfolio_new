<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio (Muhammed Anas K)

Single-page cinematic dark portfolio. Next.js 16 (App Router, Turbopack) + React 19 + TypeScript strict + Tailwind CSS v4. No backend, no tests, no CI.

## Commands

- `npm run dev` — dev server (Turbopack), http://localhost:3000
- `npm run build` — production build; use as the real typecheck (there is no `typecheck` script)
- `npm run lint` — `eslint` with no args (lints whole repo). To target files: `npx eslint src/components/...`

Verify changes with `npm run build` + `npm run lint`. There is no test suite.

## Architecture

- `src/app/page.tsx` renders all sections inline in order: Hero, About, TechMarquee, Skills, Experience, Projects, Education, Contact.
- `src/app/layout.tsx` — SEO metadata, fonts (Inter/Space Grotesk/Bebas), wire-in of `ClientProviders` + `JsonLd`.
- `src/components/layout/ClientProviders.tsx` — client-only app shell: LoadingScreen, CustomCursor, ScrollProgress, Navbar, SocialSidebar, Footer. Keep `md:cursor-none` on `<body>`; the custom cursor depends on it.
- `src/lib/constants.ts` is the single content source (bio, skills, experience, projects, education, social links). Edit copy/data here, not in section components.
- `src/lib/animations.ts` holds Framer Motion variants; `src/lib/utils.ts` holds helpers.
- Path alias `@/*` → `src/*`.

## Tailwind v4 (not v3)

- No `tailwind.config.js`. Theme tokens are defined via `@theme` in `src/app/globals.css`.
- Use the design tokens, not default Tailwind palette. e.g. `bg-bg`, `text-text-primary`, `text-accent`, `border-border`, `font-heading`, `font-display`. The palette is near-black bg with an orange accent (`--color-accent: #f45a2a`).
- New colors/fonts/shadows/animations must be added as `--color-*` / `--font-*` tokens inside `@theme` to be usable as utilities.

## Env

All optional. Contact form falls back to `mailto:` when these are unset:
`NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_SITE_URL`.

## Do not touch

- `reference_repo/` — gitignored local reference copy, not part of the app.
- `extract.py`, `restore.py`, `revert.py`, `restored_files.json` — one-off local rescue scripts, gitignored.
- `CLAUDE.md` just imports this file (`@AGENTS.md`); keep edits here.
