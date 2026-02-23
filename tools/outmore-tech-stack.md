# Outmore Living — Tech Stack

A complete listing of every tool, framework, and service used across Outmore Living projects.

---

## Core Framework

### React
- **What:** UI component library
- **Role:** Component architecture, state management, rendering
- **Docs:** https://react.dev/
- **Version:** 19.x (latest)

### Next.js
- **What:** Full-stack React framework
- **Role:** App Router, SSR/SSG, API routes, server actions, middleware
- **Docs:** https://nextjs.org/docs
- **Version:** 15.x (latest, App Router)

### TypeScript
- **What:** Typed JavaScript superset
- **Role:** Type safety across all projects
- **Docs:** https://www.typescriptlang.org/docs/

---

## Styling & UI

### Tailwind CSS
- **What:** Utility-first CSS framework
- **Role:** All styling — extended with Outmore brand tokens
- **Docs:** https://tailwindcss.com/docs
- **Version:** 4.x (latest)

### shadcn/ui
- **What:** Headless component library built on Radix UI + Tailwind
- **Role:** Base component system — re-themed to Outmore brand
- **Docs:** https://ui.shadcn.com/docs
- **Setup:** `npx shadcn@latest init` → "new-york" style, CSS variables

### shadcn blocks
- **What:** Pre-built page sections and layouts for shadcn/ui
- **Role:** Rapid prototyping of landing pages, dashboards, marketing sections
- **Site:** https://www.shadcnblocks.com/

### Heroicons
- **What:** SVG icon set by the Tailwind Labs team
- **Role:** Primary icon library for all UI elements
- **Site:** https://heroicons.com/
- **Package:** `@heroicons/react`
- **Variants:** 24/outline (default), 24/solid, 20/solid (mini), 16/solid (micro)

### Material Symbols
- **What:** Google's variable icon set (2,500+ icons)
- **Role:** Extended icon library — used when Heroicons doesn't have the icon needed (smart home, appliances, industry-specific)
- **Site:** https://fonts.google.com/icons
- **Package:** `@material-symbols/svg-400` (rounded style, weight 400)

---

## 3D & Animation

### Three.js
- **What:** JavaScript 3D library
- **Role:** 3D product viewers, interactive scenes, WebGL rendering
- **Docs:** https://threejs.org/docs/
- **Packages:** `three`, `@react-three/fiber` (React renderer), `@react-three/drei` (helpers/abstractions), `@types/three`
- **Wrapper:** `components/three/scene.tsx` — reusable `<Scene>` component with Canvas, Suspense, and defaults

### Rive
- **What:** Interactive animation runtime
- **Role:** Animated icons, micro-interactions, illustrations, interactive product demos
- **Docs:** https://rive.app/docs
- **Package:** `@rive-app/react-canvas`
- **Wrapper:** `components/rive/rive-animation.tsx` — reusable `<RiveAnimation>` component supporting animations and state machines
- **Assets:** Place `.riv` files in `/public/animations/`

---

## Backend & Data

### Supabase
- **What:** Open-source Firebase alternative (Postgres + Auth + Storage + Realtime + Edge Functions)
- **Role:** Primary database, authentication, file storage, real-time subscriptions
- **Docs:** https://supabase.com/docs
- **Packages:** `@supabase/supabase-js`, `@supabase/ssr`
- **Patterns:** RLS on all tables, `createBrowserClient` / `createServerClient` via `@supabase/ssr`

### Shopify
- **What:** E-commerce platform
- **Role:** Product catalog, inventory, checkout, order management (headless via Storefront API)
- **Docs:** https://shopify.dev/docs
- **APIs:** Storefront API (GraphQL), Admin API

---

## Deployment & DevOps

### Vercel
- **What:** Frontend cloud platform
- **Role:** Hosting, CI/CD, preview deployments, edge functions, analytics
- **Docs:** https://vercel.com/docs
- **Instance:** Outmore Living team account
- **Setup:** Link GitHub repo → auto-deploy on push to `main`

### v0
- **What:** AI-powered UI generation tool by Vercel
- **Role:** Rapid prototyping — generate React/Tailwind/shadcn components from prompts
- **Site:** https://v0.app/

### GitHub
- **What:** Git hosting and collaboration
- **Role:** All source code, PRs, issues, CI workflows
- **Docs:** https://docs.github.com
- **Org:** `outmore-living` (all project repos live here)

---

## Marketing & Analytics

### Klaviyo
- **What:** Email & SMS marketing automation
- **Role:** Customer email flows, campaigns, segmentation, Shopify sync
- **Docs:** https://developers.klaviyo.com/en
- **Packages:** Klaviyo JS snippet (client-side), REST API v3 (server-side)
- **Integration:**
  - Server-side: `lib/klaviyo.ts` — profile upsert, list subscribe, event tracking via private API key
  - Client-side: `lib/klaviyo-client.ts` — identify, track, client subscribe via public company ID
  - Klaviyo JS loaded in `app/layout.tsx` via `next/script`
  - All 6 forms wired up (newsletter, swatch kit, consultation, trade program, location suggestion, business application)
  - E-commerce events: Viewed Product, Added to Cart, Started Checkout
- **Env vars:** `NEXT_PUBLIC_KLAVIYO_COMPANY_ID`, `KLAVIYO_API_KEY`, list IDs

### Intercom
- **What:** Customer messaging platform
- **Role:** Live chat, help desk, product tours, in-app messaging
- **Docs:** https://developers.intercom.com/
- **Package:** `@intercom/messenger-js-sdk`
- **Integration:**
  - `components/intercom/intercom-provider.tsx` — boots Messenger for all visitors
  - `identifyIntercomUser()` — upgrades visitors to known users after form submissions
  - `lib/intercom.ts` — server-side HMAC-SHA256 for identity verification
  - `app/api/intercom/route.ts` — API route for secure user hash generation
  - Wired into all 5 form components for automatic user identification
- **Env vars:** `NEXT_PUBLIC_INTERCOM_APP_ID`, `INTERCOM_SECRET_KEY`

### Google Tag Manager
- **What:** Tag management system
- **Role:** Container for marketing/analytics tags, event forwarding
- **Docs:** https://developers.google.com/tag-platform/tag-manager
- **Setup:** Container script in `<head>` + noscript iframe in `<body>` via `app/layout.tsx`
- **Env var:** `NEXT_PUBLIC_GTM_ID`

### Meta (Facebook/Instagram)
- **What:** Advertising & social media platform
- **Role:** Paid ads (Facebook & Instagram), Meta Pixel tracking, Conversions API (CAPI)
- **Docs:** https://developers.meta.com/
- **Integration:**
  - Meta Pixel — fbevents.js loaded in `app/layout.tsx` with PageView tracking + noscript fallback
  - Conversions API (CAPI) — server-side event tracking for iOS 14+ accuracy
  - Product catalog sync (for dynamic ads)
- **Env var:** `NEXT_PUBLIC_META_PIXEL_ID`

### Google Analytics
- **What:** Web analytics platform (GA4)
- **Role:** Traffic analysis, conversion tracking, audience insights
- **Docs:** https://developers.google.com/analytics
- **Setup:** Standalone gtag.js in `app/layout.tsx` alongside GTM
- **Env var:** `NEXT_PUBLIC_GA4_ID`
- **Key events:** page_view, purchase, add_to_cart, begin_checkout

### Neurograph
- **What:** AI / data analytics platform
- **Role:** Customer data intelligence, analytics
- **Site:** https://neurograph.com/

---

## Brand Assets

### Outmore Brand Guide
- **Repo:** https://github.com/AduncanOutmore/outmore-brand-guide
- **Contains:** CSS variables, Tailwind config, design tokens, logos, brand identity doc
- **Colors:** Jet `#373534`, Linen `#f7f1e9`, Hot Embers `#F25431`, Mist `#efefed`
- **Fonts:** Poppins (display), DM Sans (body), Noto Serif (accent)
- **Full brand rules:** See `~/CLAUDE.md` → Outmore Living Brand System section

---

## Quick Install (New Project)

```bash
# 1. Create Next.js project
npx create-next-app@latest my-project --typescript --tailwind --app --src-dir

# 2. Init shadcn
cd my-project
npx shadcn@latest init

# 3. Install core dependencies
npm i @supabase/supabase-js @supabase/ssr
npm i @heroicons/react @material-symbols/svg-400

# 4. Install 3D & animation
npm i three @react-three/fiber @react-three/drei @types/three
npm i @rive-app/react-canvas

# 5. Install messaging
npm i @intercom/messenger-js-sdk

# 6. Copy brand files from outmore-brand-guide repo
# outmore-variables.css → src/styles/
# tailwind.config.outmore.js → merge into tailwind.config.ts
```
