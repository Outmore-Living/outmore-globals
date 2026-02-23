# Tools

Every tool, platform, and service in the Outmore Living ecosystem. What it does, why we use it, and how it connects.

---

## Core Development Stack

### Next.js (App Router)
- **What:** React framework with server-side rendering, routing, and API routes
- **Why:** Best-in-class performance, SEO, and developer experience. App Router gives us Server Components by default.
- **Version:** 15+ (App Router, React 19)
- **Docs:** https://nextjs.org/docs

### React
- **What:** UI component library
- **Why:** Industry standard, massive ecosystem, Server Components in v19
- **Version:** 19+
- **Docs:** https://react.dev/

### TypeScript
- **What:** Typed JavaScript
- **Why:** Catches bugs at compile time, better DX, self-documenting code
- **Config:** Strict mode, no `any` types
- **Docs:** https://www.typescriptlang.org/docs/

---

## Styling & UI

### Tailwind CSS
- **What:** Utility-first CSS framework
- **Why:** Fast development, consistent spacing/color, pairs with our brand token system
- **Version:** 4+
- **Docs:** https://tailwindcss.com/docs

### shadcn/ui
- **What:** Copy-paste component library built on Radix UI + Tailwind
- **Why:** Accessible, customizable, owns the code. Re-themed to Outmore brand.
- **Style:** "new-york" variant
- **Docs:** https://ui.shadcn.com/docs

### shadcn Blocks
- **What:** Pre-built page sections and layouts for shadcn/ui
- **Why:** Accelerates page building with production-ready blocks
- **Docs:** https://www.shadcnblocks.com/

### Heroicons
- **What:** SVG icon set by Tailwind Labs (outline, solid, mini, micro variants)
- **Why:** Designed for Tailwind, consistent with our design system
- **Package:** `@heroicons/react`
- **Docs:** https://heroicons.com/

### Material Symbols
- **What:** Google's variable icon set (4000+ icons)
- **Why:** Broadest catalog — covers industry-specific icons Heroicons doesn't have
- **Package:** `@material-symbols/svg-400`
- **Docs:** https://fonts.google.com/icons

### Outmore Brand System
- **What:** Custom CSS variables, Tailwind config, design tokens, brand identity
- **Where:** `./brand/` in this repo
- **Files:** `outmore-variables.css`, `tailwind.config.outmore.js`, `outmore-brand-identity.md`

---

## Backend & Data

### Supabase
- **What:** Open-source Firebase alternative (Postgres + Auth + Storage + Realtime + Edge Functions)
- **Why:** Full backend in one service, SQL-first, excellent DX, self-hostable
- **Auth:** `@supabase/ssr` for cookie-based auth (App Router compatible)
- **RLS:** Enabled on all tables, no exceptions
- **Docs:** https://supabase.com/docs

### Zod
- **What:** TypeScript-first schema validation
- **Why:** Runtime type safety, form validation, API input validation
- **Package:** `zod`
- **Docs:** https://zod.dev/

---

## E-Commerce

### Shopify
- **What:** E-commerce platform (Storefront API + Admin API)
- **Why:** Industry-leading commerce infrastructure, headless via Storefront API
- **Integration:** Headless — Next.js frontend, Shopify backend for products/orders/payments
- **Docs:** https://shopify.dev/docs

---

## Deployment & DevOps

### Vercel
- **What:** Deployment platform optimized for Next.js
- **Why:** Zero-config deploys, preview environments on every PR, edge functions, analytics
- **Team:** Outmore Living (all projects deploy here)
- **Docs:** https://vercel.com/docs

### GitHub
- **What:** Code hosting, version control, issues, PRs
- **Org:** `outmore-living`
- **Convention:** All repos on the org, `main` branch for production
- **Docs:** https://docs.github.com

### v0
- **What:** AI-powered UI prototyping by Vercel
- **Why:** Rapid prototyping of React/Tailwind components before building in code
- **Docs:** https://v0.app/

---

## Marketing & Analytics

### Klaviyo
- **What:** Email and SMS marketing automation
- **Why:** Best-in-class for DTC, deep Shopify integration, powerful segmentation
- **Use Cases:** Welcome series, abandoned cart, post-purchase, campaigns
- **Docs:** https://developers.klaviyo.com/en

### Intercom
- **What:** Customer messaging platform (live chat, help desk, bots)
- **Why:** Unified customer communication, in-app messaging
- **Docs:** https://developers.intercom.com/

### Meta (Ads / Pixel / CAPI)
- **What:** Facebook/Instagram advertising + tracking
- **Why:** Primary paid acquisition channel for DTC
- **Integration:** Meta Pixel (client-side) + Conversions API (server-side) for reliable tracking
- **Docs:** https://developers.meta.com/

### Google Analytics 4 (GA4)
- **What:** Web and app analytics
- **Why:** Industry standard, free, deep event tracking
- **Integration:** gtag.js or Google Tag Manager
- **Docs:** https://developers.google.com/analytics

### Neurograph
- **What:** AI-powered analytics and insights
- **Why:** Advanced behavioral analysis and optimization
- **Docs:** https://neurograph.com/

---

## AI & Automation

### Claude Code
- **What:** Anthropic's AI coding agent
- **Why:** Powers our entire development workflow with 7 specialized agents
- **Config:** `~/.claude/settings.json`, `CLAUDE.md` (global + per-project)
- **Agents:** See `agents/` directory

### Claude Code Agent Team
- **What:** 7 specialized sub-agents (frontend, backend, marketing, tester, reviewer, deployer, copywriter)
- **Why:** Parallel execution, specialized expertise, consistent brand compliance
- **Mode:** Experimental Agent Teams enabled via settings

### Skills (57+ installed)
- **What:** Reusable knowledge modules for Claude Code agents
- **Sources:** vercel-labs, coreyhaines31, anthropic, supabase, obra, squirrelscan, skillfish
- **Location:** `~/.claude/skills/`

---

## Design & Prototyping

### Google Fonts
- **What:** Web font hosting
- **Fonts Used:** Poppins (display), DM Sans (body), Noto Serif (accent)
- **Integration:** `next/font/google` for zero-layout-shift loading

### GSAP
- **What:** Professional animation library
- **Why:** Complex scroll-triggered and timeline animations
- **Use:** Hero animations, scroll reveals, page transitions

### Framer Motion
- **What:** React animation library
- **Why:** Declarative animations, layout animations, gesture support
- **Use:** Component transitions, hover effects, spring physics

---

## How Tools Connect

```
                    ┌─────────────┐
                    │   Shopify   │ (products, orders, payments)
                    └──────┬──────┘
                           │ Storefront API
┌──────────┐      ┌───────┴────────┐      ┌──────────┐
│  Klaviyo │◄─────│    Next.js     │─────►│  Vercel  │
│  (email) │      │  (App Router)  │      │ (deploy) │
└──────────┘      └───────┬────────┘      └──────────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
        ┌─────┴─────┐ ┌──┴──┐ ┌─────┴─────┐
        │  Supabase │ │ GA4 │ │ Meta Pixel │
        │ (data/auth)│ │     │ │   / CAPI   │
        └───────────┘ └─────┘ └───────────┘
```

---

## Adding a New Tool

Before adding any tool to the stack:

1. **Does it solve a real problem?** Not a hypothetical one.
2. **Does it integrate with our existing stack?** Next.js/Vercel/Supabase ecosystem preferred.
3. **Is it worth the dependency?** Can we solve this with what we have?
4. **Who maintains it?** Active maintenance and community required.
5. **Update this file** and `docs/outmore-tech-stack.md` when adding.
