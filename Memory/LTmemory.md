# Long-Term Memory

Persistent knowledge that carries across all sessions and projects. This is the AI operating system's institutional memory — facts, preferences, patterns, and context that should never be forgotten.

---

## About the Founder

| Field | Detail |
|-------|--------|
| **Name** | Alex Duncan |
| **Role** | Co-Founder, Outmore Living |
| **Co-Founder** | Kevin Long |
| **Tech Proficiency** | High — works directly with Claude Code, understands the full stack |
| **Communication Style** | Direct, concise, moves fast. Prefers action over discussion. |
| **Preferences** | <!-- Add as discovered: dark mode? keyboard shortcuts? specific workflows? --> |

## Company Facts

| Field | Detail |
|-------|--------|
| **Product** | Heated outdoor furniture |
| **Tagline** | "Warmth, Without Walls." |
| **Business Model** | DTC + B2B Hospitality + Specialty Retail + Online 3rd Party Marketplace |
| **E-commerce** | Shopify (headless via Storefront API) |
| **GitHub Org** | `outmore-living` |
| **Globals Repo** | `outmore-living/outmore-globals` |

## Stack Decisions (Permanent)

These are settled. Don't revisit unless explicitly asked.

| Decision | Choice | Date |
|----------|--------|------|
| Framework | Next.js (App Router) + React 19 + TypeScript | Founding |
| Styling | Tailwind CSS + shadcn/ui + Outmore brand tokens | Founding |
| Database | Supabase (Postgres + Auth + Storage + Realtime) | Founding |
| Deployment | Vercel (Outmore Living team) | Founding |
| Icons | Heroicons + Material Symbols | Feb 2025 |
| Agent team | 7 agents (frontend, backend, marketing, tester, reviewer, deployer, copywriter) | Feb 2025 |
| Globals repo | outmore-living/outmore-globals | Feb 2025 |

## Recurring Patterns

Things that come up repeatedly. Remember these to avoid re-learning.

### Development
- Always use `npx shadcn@latest init` with "new-york" style and CSS variables
- Always run `npx supabase gen types typescript` before building features
- Skills install: use `-y -g` flags for non-interactive mode
- CLAUDE.md lives at `~/` for global, project root for per-project

### Brand
- Primary accent: Hot Embers `#F25431` — use sparingly, for CTAs and emphasis
- Default theme: Light (warm off-white `#fcf9f5`)
- Buttons are pills (`rounded-full`), always
- Headings use light weights (300-400), never bold
- Three fonts: Poppins (display), DM Sans (body), Noto Serif (accent)

### Operational
<!-- Add patterns as they emerge -->

## Key Relationships

<!-- Fill in as relevant -->
| Name/Entity | Relationship | Notes |
|-------------|-------------|-------|
| <!-- Name --> | <!-- Role/relation --> | <!-- Context --> |

## Important URLs

| Resource | URL |
|----------|-----|
| GitHub Org | https://github.com/outmore-living |
| Globals Repo | https://github.com/Outmore-Living/outmore-globals |
| Vercel Dashboard | https://vercel.com/outmore-living |
| Supabase Dashboard | <!-- Add URL --> |
| Shopify Admin | <!-- Add URL --> |
| Klaviyo Dashboard | <!-- Add URL --> |

---

## How This File Works

- **Add facts as they're confirmed** — not assumed, not guessed
- **Update when things change** — stale memory is worse than no memory
- **Don't duplicate** — if it's in another file (beoutmore.md, tools.md, etc.), reference it, don't copy it
- **This file is for AI context** — it's what the agent team should "know" going into any session
