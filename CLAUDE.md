# Global Project Defaults — Alex Duncan / Outmore Living

## Stack (unless otherwise specified)
- **Framework:** Next.js (App Router) + React + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui + Outmore Brand System
- **Icons:** Heroicons (`@heroicons/react`) + Material Symbols (`@material-symbols/svg-400`)
- **Database:** Supabase (Postgres + Auth + Storage + Realtime)
- **Deployment:** Vercel (Outmore Living's team instance)
- **Repo:** GitHub — `outmore-living` org (create repo there for every new project)
- **Brand Guide:** `./brand/` in this repo (`Outmore-Living/outmore-globals`)

## Project Setup Checklist
1. Create repo on `outmore-living` GitHub org
2. `npx create-next-app@latest` with TypeScript, Tailwind, App Router, src/ directory
3. `npx shadcn@latest init` — use "new-york" style, CSS variables
4. Install Supabase: `npm i @supabase/supabase-js @supabase/ssr`
5. Install icon libraries: `npm i @heroicons/react @material-symbols/svg-400`
6. Copy brand files from `AduncanOutmore/outmore-brand-guide`:
   - `outmore-variables.css` → `src/styles/outmore-variables.css` (import BEFORE Tailwind)
   - `tailwind.config.outmore.js` → merge into project's `tailwind.config.ts`
7. Import Google Fonts: Poppins, DM Sans, Cormorant Garamond
8. Set up `.env.local` from `~/.env.secrets` (copy relevant keys)
9. Deploy to Vercel via Outmore Living's team, link to GitHub repo
10. Configure Vercel env vars to match `.env.local`

## File & Code Conventions
- Use `src/` directory with App Router (`src/app/`)
- Components in `src/components/` — shadcn components auto-install to `src/components/ui/`
- Lib/utils in `src/lib/`
- Supabase client helpers in `src/lib/supabase/` (separate `client.ts` and `server.ts`)
- Types in `src/types/`
- Server Actions in colocated `actions.ts` files or `src/app/actions/`
- Use `"use client"` directive only when needed (default to Server Components)

## Supabase Patterns
- Use `@supabase/ssr` for auth (createBrowserClient / createServerClient)
- Row Level Security (RLS) enabled on all tables by default
- Use Supabase Auth for user management
- Prefer Supabase Realtime for live features
- Database types: generate with `npx supabase gen types typescript`

---

## Outmore Living Brand System

> Minimalist, clean, elevated interfaces inspired by Apple, Mercury, and Superpower.
> Every interaction should feel intentional, premium, and effortlessly sophisticated.

### Design Philosophy
- **Minimalist Clarity** — content is legible, elements precise, ornamentation purposeful
- **Deference** — UI supports content without competing; the space breathes
- **Elevated Subtlety** — interactions feel premium through refined feedback, not flashy effects
- **Intentional Space** — generous negative space creates calm, focused experiences

### Color System

**Brand Primaries:**

| Token | Name | Hex | Usage |
|-------|------|-----|-------|
| `brand-jet` | Jet | `#373534` | Primary text, dark surfaces |
| `brand-linen` | Linen | `#f7f1e9` | Warm backgrounds (Beige theme) |
| `brand-hot-embers` | Hot Embers | `#F25431` | Accent, CTAs, highlights |
| `brand-mist` | Mist | `#efefed` | Flat surface backgrounds |

**Theme Backgrounds (set via `data-theme` attribute):**

| Theme | Hex | Description |
|-------|-----|-------------|
| `light` (default) | `#fcf9f5` | Warm off-white |
| `beige` | `#f7f1e9` | Warm linen |
| `white` | `#ffffff` | Pure white |
| `dark` | `#373534` | Jet (inverted) |

**Heated Glow Gradients (signature brand effect):**
```css
--gradient-heated-glow: linear-gradient(135deg, #F25431 0%, #FF8A5C 50%, #FFB347 100%);
--gradient-heated-radial: radial-gradient(circle, #F25431 0%, #FF8A5C 40%, transparent 70%);
```

### Typography

| Token | Family | Usage |
|-------|--------|-------|
| `font-display` | **Poppins** | Headlines, hero text, navigation |
| `font-body` | **DM Sans** | Body copy, UI text, labels |
| `font-accent` | **Cormorant Garamond** | Editorial accents, decorative text |

- Headings use **weight 400** (regular) for elegant, refined look. Hero headlines use **300** (light).
- Use `text-wrap: balance` on headlines to prevent widows
- Body max line length: `65–75ch`

### Spacing & Layout
- **Mobile-first:** base styles for mobile, enhance upward with `sm:`, `md:`, `lg:`
- **Generous whitespace:** let content breathe — use `space-12` to `space-24` for section separation
- Breakpoints: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px

### Border Radius
- **Buttons:** `rounded-full` (pill shape)
- **Cards:** `rounded-xl` to `rounded-2xl`
- **Inputs:** `rounded-md`
- **Modals/Dialogs:** `rounded-2xl`
- **Pills/Tags:** `rounded-full`

### Surface Variants

| Variant | Tailwind Class | When to Use |
|---------|---------------|-------------|
| Flat | `surface-flat` | Inline elements, minimal UI |
| Ghost | `surface-ghost` | Hover reveals interaction |
| Outline | `surface-outline` | Secondary actions |
| Raised | `surface-raised` | Cards, content containers |
| Elevated | `surface-elevated` | Dropdowns, modals, popovers |

### Component Patterns (Tailwind Classes)

**Primary Button (Pill):**
```
font-display bg-primary text-primary-foreground px-6 py-3 rounded-full
hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2
focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]
transition-all duration-150
```

**Secondary/Outline Button:**
```
font-display bg-transparent border border-border text-foreground px-6 py-3
rounded-full hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2
focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98]
transition-all duration-150
```

**Ghost Button:**
```
font-display bg-transparent text-foreground px-4 py-2 rounded-full
hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2
focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors duration-150
```

**Input:**
```
font-body w-full bg-background border border-border rounded-md px-4 py-3
text-foreground placeholder:text-muted-foreground focus-visible:outline-none
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
```

**Display Heading:**
```
font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance
```

**Body Text:**
```
font-body text-base text-foreground leading-relaxed max-w-prose
```

**Accent/Editorial Text:**
```
font-accent text-lg italic text-muted-foreground
```

### Hover & Interaction Effects
- `hover-lift` — translateY(-2px) + shadow (cards, buttons)
- `hover-glow` — Hot Embers glow shadow (CTAs, accent elements)
- `press-scale` — scale(0.98) on active/pressed
- `heated-text` — gradient text (Hot Embers → warm orange)
- `heated-glow` — ambient glow shadow around element

### Animation Rules
1. Honor `prefers-reduced-motion` — always
2. Animate only `transform` and `opacity` (compositor-friendly)
3. Never use `transition: all` — list properties explicitly
4. Default duration: `150ms`, easing: `ease-out` for entering, `ease-in` for exiting
5. Stagger children at `0.1s` intervals
6. Framer Motion or GSAP for complex scroll/spring animations

### Interaction States

| State | Treatment |
|-------|-----------|
| Default | Base appearance |
| Hover | Subtle background shift, cursor change |
| Focus | 2px visible ring, high contrast |
| Active/Pressed | scale(0.98), darker background |
| Disabled | 50% opacity, no pointer events |
| Loading | Spinner, pulsing opacity |

### Accessibility Standards (Required)
- Semantic HTML first: `<button>` for actions, `<a>` for navigation
- All interactive elements need `:focus-visible` ring
- Color contrast: 4.5:1 minimum for text, 3:1 for large text/UI
- Touch targets: minimum 44×44px on mobile
- Icon-only buttons require `aria-label`
- Async updates use `aria-live="polite"`
- All interactive elements keyboard-accessible; Escape closes modals

### Brand Voice
- **Warm** — inviting, comfortable, embracing
- **Confident** — assured without arrogance
- **Refined** — elevated, sophisticated, premium
- **Clear** — direct, concise, no fluff
- Active voice, short punchy sentences, benefits over features

### Logo Assets (in brand guide repo `Logos/`)
- `outmore logo.svg` — primary logo (SVG)
- `logo fdfcfa.svg` — light background variant
- `Outmore Living Logo White.svg` — dark background / inverted
- `Logo - Outmore Living (Degrees)- Jet.png` — jet version with degree mark
- `favicon v4.png` — favicon

### Icons

**Libraries (install both on every project):**
- **Heroicons** — `@heroicons/react` (by Tailwind Labs, pairs perfectly with Tailwind)
- **Material Symbols** — `@material-symbols/svg-400` (Google's variable icon set, weight 400)

**Usage — Heroicons:**
```tsx
// Outline (24px, 1.5px stroke) — default for UI
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

// Solid (24px, filled) — active states, emphasis
import { HeartIcon, StarIcon } from '@heroicons/react/24/solid'

// Mini (20px, filled) — compact UI, inline with text
import { CheckIcon } from '@heroicons/react/20/solid'

// Micro (16px, filled) — tight spaces, badges
import { XMarkIcon } from '@heroicons/react/16/solid'

<ArrowRightIcon className="size-5 text-foreground" />
```

**Usage — Material Symbols:**
```tsx
import FireplaceRounded from '@material-symbols/svg-400/rounded/fireplace.svg'
import ThermostatRounded from '@material-symbols/svg-400/rounded/thermostat.svg'

// Use as React component (needs SVGR or next/image)
<FireplaceRounded className="size-5 text-foreground" />
```

**Icon Guidelines:**
- Default size: `size-5` (20px) for inline UI, `size-6` (24px) for standalone
- Always match icon color to surrounding text: `text-foreground`, `text-muted-foreground`, etc.
- Prefer **Heroicons outline** for general UI (nav, buttons, form indicators)
- Use **Heroicons solid** for active/selected states (filled heart, filled star)
- Use **Material Symbols** when you need an icon Heroicons doesn't have (broader catalog — appliances, smart home, industry-specific)
- Icon-only buttons always need `aria-label` and min `44×44px` touch target
- Use `shrink-0` on icons inside flex containers to prevent squishing

---

## Styling Rules (Summary)
- Always import `outmore-variables.css` before Tailwind
- Use Outmore Tailwind config (colors, fonts, surfaces, animations)
- Tailwind utility-first — avoid custom CSS unless absolutely necessary
- Use shadcn/ui components before building custom ones — re-theme them to Outmore brand
- Responsive-first: mobile breakpoint default, scale up
- Dark mode via `data-theme="dark"` or `.dark` class
- Default theme is `light` (warm off-white `#fcf9f5`)

## Deployment
- Vercel project linked to Outmore Living team
- Production branch: `main`
- Preview deployments on PRs
- Environment variables set in Vercel dashboard (mirror `.env.local`)

## Git Conventions
- Branch naming: `feature/short-description`, `fix/short-description`
- Commit messages: concise, imperative mood ("Add auth flow", "Fix cart total")
- PR into `main` for production

## Secrets
- Local secrets stored in `~/.env.secrets` (never committed)
- Per-project `.env.local` copies relevant keys from `~/.env.secrets`
- Production secrets set in Vercel dashboard
- Never hardcode keys in source code

---

## Documentation Reference

> Quick-access links to every tool in our stack. See `./docs/outmore-tech-stack.md` for the full breakdown.

### Core Framework
| Tool | Docs |
|------|------|
| React | https://react.dev/ |
| Next.js | https://nextjs.org/docs |
| TypeScript | https://www.typescriptlang.org/docs/ |

### Styling & UI
| Tool | Docs |
|------|------|
| Tailwind CSS | https://tailwindcss.com/docs |
| shadcn/ui | https://ui.shadcn.com/docs |
| shadcn blocks | https://www.shadcnblocks.com/ |
| Heroicons | https://heroicons.com/ |
| Material Symbols | https://fonts.google.com/icons |

### Backend & Data
| Tool | Docs |
|------|------|
| Supabase | https://supabase.com/docs |
| Shopify (Storefront/Admin API) | https://shopify.dev/docs |

### Deployment & DevOps
| Tool | Docs |
|------|------|
| Vercel | https://vercel.com/docs |
| v0 (AI prototyping) | https://v0.app/ |
| GitHub | https://docs.github.com |

### Marketing & Analytics
| Tool | Docs |
|------|------|
| Klaviyo | https://developers.klaviyo.com/en |
| Intercom | https://developers.intercom.com/ |
| Meta (Ads/Pixel/CAPI) | https://developers.meta.com/ |
| Google Analytics | https://developers.google.com/analytics |
| Neurograph | https://neurograph.com/ |

### Brand
| Resource | Location |
|----------|----------|
| Outmore Brand Guide | `./brand/` (this repo) |
| Tech Stack Doc | `./docs/outmore-tech-stack.md` |
| Conventions | `./docs/conventions.md` |
| Project Setup | `./docs/project-setup-checklist.md` |

---

## Agent Team

> Specialized agents available in `~/.claude/agents/`. Claude delegates to these automatically based on the task, or you can request a specific agent explicitly.

### Roster

| Agent | Role | Tools | Key Skills |
|-------|------|-------|------------|
| **frontend** | UI/UX developer | Read, Edit, Write, Grep, Glob, Bash | `frontend-design`, `vercel-react-best-practices`, `vercel-composition-patterns`, `web-design-guidelines`, `fix`, `react-19`, `next-best-practices`, `cache-components`, `frontend-testing`, `mcp-integration`, `agent-development`, `skill-development`, `prompt-lookup` |
| **backend** | Data/API engineer | Read, Edit, Write, Grep, Glob, Bash | `supabase-postgres-best-practices`, `vercel-react-best-practices`, `vercel-composition-patterns`, `fix`, `next-best-practices`, `cache-components`, `mcp-integration`, `agent-development`, `skill-development`, `prompt-lookup` |
| **marketing** | Growth marketer | Read, Edit, Write, Grep, Glob, Bash | All 25 coreyhaines31 skills (`seo-audit`, `copywriting`, `marketing-psychology`, `programmatic-seo`, `page-cro`, `email-sequence`, `paid-ads`, `analytics-tracking`, `schema-markup`, `ab-test-setup`, etc.), `prompt-lookup` |
| **tester** | QA engineer | Read, Edit, Write, Grep, Glob, Bash | `systematic-debugging`, `audit-website`, `fix`, `webapp-testing`, `frontend-testing`, `prompt-lookup` |
| **reviewer** | Code reviewer (read-only) | Read, Grep, Glob | `web-design-guidelines`, `prompt-lookup` |
| **deployer** | DevOps engineer | Read, Grep, Glob, Bash | `fix`, `update-docs`, `prompt-lookup` |
| **copywriter** | Brand writer (read-only) | Read, Grep, Glob | `prompt-lookup` |

### Global Skills (Available to ALL agents)
- **`fix`** — React lint/format fix, CI compliance (facebook/react)
- **`prompt-lookup`** — AI prompt discovery and enhancement (prompts.chat)
- **`mcp-integration`** — MCP server integration (anthropics/claude-code)
- **`agent-development`** — Agent/sub-agent creation (anthropics/claude-code)
- **`skill-development`** — Skill creation and best practices (anthropics/claude-code)
- **`update-docs`** — Sync docs with code changes (vercel/next.js)
- **`cache-components`** — Next.js Cache Components, PPR (vercel/next.js)

### How to Invoke
- **Automatic:** Claude routes tasks to the right agent based on context
- **Explicit:** "Use the frontend agent to build this component"
- **Marketing:** "Use the marketing agent to audit SEO" or "Set up a Klaviyo email sequence"
- **Review:** "Have the reviewer audit this PR"
- **Test:** "Run systematic debugging on this bug"
- **Copy:** "Ask the copywriter for hero text for the landing page"

### Agent Teams Mode (Experimental)
Enabled via `~/.claude/settings.json`. Allows truly parallel multi-agent sessions where agents work independently and communicate through shared inboxes. Best for large features where frontend, backend, and tests can be built simultaneously.

**Best practices:**
- Max 3-4 active teammates per session
- Give each teammate clear file/directory ownership to avoid conflicts
- Use for feature builds, not small fixes
