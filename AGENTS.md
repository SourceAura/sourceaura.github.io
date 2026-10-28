# AGENTS.md

## Essential Commands
- `bun install`: Install dependencies
- `bun run dev`: Start Astro dev server (`ASTRO_TELEMETRY_DISABLED=1 astro dev`)
- `bun run dev:all`: Start dev server + ML API together (`ml/ase`, port 8000)
- `bun run build`: Build the static site into `dist/` (also runs pagefind)
- `bun run dev:search`: Build the pagefind search index, then run the dev server
- `bun run astro check`: Type-check (note: there are pre-existing errors, see CI)

## Architecture
- **Framework**: Astro 5, `output: "static"`, deployed to Vercel.
- **Pages**: `src/pages/`: `index`, `404`, `euthymia`, `orb-test`, `petals/`, `rss.xml.js`.
- **Content**: `src/content/petals/`: MDX posts in the `petals` collection (schema in `src/content/config.ts`).
- **Components**: `src/components/`. `Nelumbo.astro` drives the main post deck; `Quasar.astro` / `Qi.astro` are background layers.
- **Styling**: Tailwind 3 + custom CSS in `src/styles/`. Theme tokens are HSL CSS variables, dark by default (`html.light` inverts).
- **Fonts**: self-hosted via `@fontsource-variable/geist` and `@fontsource-variable/geist-mono`, imported in `src/styles/global.css`.
- **Search**: pagefind, indexed at build time (configured in `astro.config.mjs`).
- **On-demand route**: `src/pages/api/reactions.ts` sets `prerender = false` (Vercel KV + GitHub GraphQL). Requires `GITHUB_TOKEN` and Vercel KV.

## Conventions
- **TypeScript**: strict mode; shared utilities in `src/utils/`.
- **Astro components**: `.astro` extension, PascalCase filenames.
- **Imports**: use the configured aliases (`@consts`, `@components`, `@layouts`, `@utils`, `@/`); raw `/src/...` paths are not rewritten and 404 in the production build.

## Gotchas
- `dist/`, `.astro/`, `.vercel/`, `node_modules/` and `.env*` are gitignored: never commit them.
- Only `bun.lock` is tracked; there is no `package-lock.json`.
- The site is deployed at **https://sourceaura.vercel.app**; `astro.config.mjs` `site` must stay in sync.
- `PETALS.DESCRIPTION` is used as the `/petals` meta description.
- Posts use `post.data.description`: the content schema has no `excerpt` field.
- `src/pages/api/reactions.ts` needs `GITHUB_TOKEN`; without it the endpoint throws at runtime.
