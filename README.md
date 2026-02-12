# outmore-globals

Single source of truth for Outmore Living's development ecosystem.

Brand system, AI agent definitions, skills, templates, and documentation — everything a developer needs to start building.

## Quick Start

```bash
git clone git@github.com:Outmore-Living/outmore-globals.git ~/outmore-globals
cd ~/outmore-globals
./setup.sh
```

The setup script:
- Symlinks agent definitions to `~/.claude/agents/`
- Symlinks custom skills to `~/.claude/skills/`
- Creates `~/.env.secrets` template (if not exists)
- Sets global gitignore
- Enables Claude Code agent teams

## What's Inside

| Directory | Contents |
|-----------|----------|
| `brand/` | CSS variables, Tailwind config, logos, design tokens, brand identity |
| `agents/` | 7 Claude Code agents (frontend, backend, marketing, tester, reviewer, deployer, copywriter) |
| `skills/` | 3 custom skills (outmore-init, outmore-component, outmore-review) |
| `docs/` | Tech stack reference, setup checklist, code conventions |
| `templates/` | Starter files for new projects (.env, CLAUDE.md, Supabase clients, CSS) |
| `config/` | Shared Claude Code settings |
| `CLAUDE.md` | Master config — Claude Code auto-reads this |

## Starting a New Project

**Option A** — Use the skill:
```
/outmore-init my-project-name
```

**Option B** — Follow the manual checklist:
```
docs/project-setup-checklist.md
```

## Brand System

| Token | Color | Hex | Usage |
|-------|-------|-----|-------|
| `brand-jet` | Jet | `#373534` | Primary text, dark surfaces |
| `brand-linen` | Linen | `#f7f1e9` | Warm backgrounds |
| `brand-hot-embers` | Hot Embers | `#F25431` | Accent, CTAs, highlights |
| `brand-mist` | Mist | `#efefed` | Flat surface backgrounds |

**Fonts:** Poppins (display) / DM Sans (body) / Cormorant Garamond (accent)

Full brand guide: `brand/outmore-brand-identity.md`

## Agent Team

| Agent | Role | Skills |
|-------|------|--------|
| `frontend` | React/Next.js UI specialist | frontend-design, vercel-react-best-practices, composition-patterns, web-design-guidelines |
| `backend` | Supabase/API engineer | supabase-postgres-best-practices, vercel-react-best-practices |
| `marketing` | Growth & SEO specialist | 25 coreyhaines31 skills (SEO, CRO, email, ads, content, analytics) |
| `tester` | QA engineer | systematic-debugging, audit-website, webapp-testing |
| `reviewer` | Code auditor (read-only) | web-design-guidelines |
| `deployer` | Vercel/CI/CD DevOps | fix, update-docs |
| `copywriter` | Brand voice writer (read-only) | prompt-lookup |

## Tech Stack

| Category | Tools |
|----------|-------|
| Framework | Next.js (App Router) + React + TypeScript |
| Styling | Tailwind CSS + shadcn/ui + Outmore brand tokens |
| Icons | Heroicons + Material Symbols |
| Database | Supabase (Postgres + Auth + Storage + Realtime) |
| E-commerce | Shopify (Storefront API) |
| Deployment | Vercel (Outmore Living team) |
| Marketing | Klaviyo, Intercom, Meta Pixel/CAPI, GA4, Neurograph |

Full breakdown: `docs/outmore-tech-stack.md`

## Updating

```bash
cd ~/outmore-globals && git pull
```

All symlinked agents and skills update automatically.

## Supersedes

This repo replaces [`AduncanOutmore/outmore-brand-guide`](https://github.com/AduncanOutmore/outmore-brand-guide) (archived).
