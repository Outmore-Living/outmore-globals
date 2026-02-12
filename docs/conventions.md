# Code Conventions

Standards followed across all Outmore Living projects.

## File Structure

```
src/
├── app/                  # App Router routes, layouts, pages
│   ├── actions/          # Server Actions (or colocated actions.ts)
│   └── api/              # API routes
├── components/           # React components
│   └── ui/               # shadcn/ui components (auto-installed here)
├── lib/
│   └── supabase/         # Supabase clients (client.ts, server.ts)
├── types/                # TypeScript interfaces and types
└── styles/               # Brand CSS (outmore-variables.css)
```

## React

- **Default to Server Components** — only use `"use client"` when needed (events, hooks, browser APIs)
- **shadcn/ui first** — check if a component exists before building custom
- **Props typing** — always define interfaces for component props, no `any`
- **Error boundaries** — wrap route segments
- **Loading states** — always handle loading, error, and empty states

## TypeScript

- No `any` types — use proper interfaces
- Export types from `src/types/`
- Generate Supabase types: `npx supabase gen types typescript`
- Use Zod for runtime validation

## Supabase

- `@supabase/ssr` for auth (createBrowserClient / createServerClient)
- RLS enabled on ALL tables, no exceptions
- Validate all inputs before database operations
- Server Actions for mutations, wrap in try/catch
- Never expose `SUPABASE_SERVICE_ROLE_KEY` to client

## Styling

- Tailwind utility-first — avoid custom CSS unless necessary
- Import `outmore-variables.css` before Tailwind directives
- Use brand tokens, not raw hex values
- Mobile-first responsive: base styles for mobile, scale up with `sm:`, `md:`, `lg:`
- Default theme: `light` (warm off-white `#fcf9f5`)

## Git

- **Branches:** `feature/short-description`, `fix/short-description`
- **Commits:** concise, imperative mood ("Add auth flow", "Fix cart total")
- **PRs:** into `main` for production
- **Never commit:** `.env.local`, `.env.secrets`, API keys, `node_modules/`

## Secrets

- Local: `~/.env.secrets` (master vault, never committed)
- Per-project: `.env.local` (copy relevant keys from master)
- Production: Vercel dashboard (Settings -> Environment Variables)
- Never hardcode keys in source code
