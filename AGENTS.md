# AGENTS.md

## Essential Commands
- `npm run build` - Build the project
- `npm run dev` - Start development server
- `npm run test` - Run tests
- `npm run astro:dev` - Start Astro development server
- `npm run astro:build` - Build Astro site
- `bun build` - Build with Bun
- `bun dev` - Start Bun development server

## Code Organization
- **Astro Pages**: Located in `src/pages/`
- **Components**: Organized in `src/components/` with `.astro` files
- **TypeScript**: All code uses TypeScript with `src/lib/utils.ts` as shared utilities
- **Assets**: Static files in `public/` directory
- **Content**: Markdown content in `content/` directory

## Naming Conventions
- **TypeScript**: Use PascalCase for interfaces/classes, camelCase for variables/functions
- **Astro Components**: Use `.astro` extension with PascalCase filenames
- **CSS**: Tailwind classes with custom components following BEM-like structure

## Testing Approach
- **Astro Tests**: Located in `__tests__` directories alongside components
- **Testing Framework**: Astro's built-in testing with Jest
- **Test Structure**: Each component has a corresponding test file (e.g., `Button.astro` → `Button.astro.test.ts`)

## Important Gotchas
- **Environment Variables**: Use `.env` files with `astro.config.mjs` for configuration
- **TypeScript Configuration**: `tsconfig.json` must include `paths` for Astro imports
- **Build Process**: Ensure `astro.config.mjs` includes `output` and `base` settings
- **Static Assets**: Files in `public/` are served directly at root
- **Content Directory**: Markdown files in `content/` are automatically imported as pages

## Project-Specific Context
- **Astro Configuration**: `astro.config.mjs` handles site metadata and build settings
- **TypeScript Setup**: `tsconfig.json` includes `strict` mode and `esModuleInterop`
- **Tailwind Integration**: `tailwind.config.ts` configures CSS framework
- **Bun Support**: `bun.lock` manages dependencies for faster builds

## Additional Resources
- **CI/CD**: Vercel configuration in `vercel.json`
- **Documentation**: README.md provides project overview
- **Codebase Structure**: Use `ls -R` to explore nested directories

---
**Generated with Crush** - Documented based on observed codebase structure and files