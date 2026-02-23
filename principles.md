# Principles

How we make decisions at Outmore Living. When you're unsure what to do, these principles guide the answer.

---

## Product Principles

### Ship small, ship often
Don't wait for perfect. Get something real in front of users, learn from their behavior, iterate. A deployed feature beats a perfect spec every time.

### Solve the problem in front of you
Don't over-engineer for hypothetical futures. Build for what's needed now. The right abstraction reveals itself after the third time you need it, not the first.

### Defaults matter more than options
Every choice we force on a user is friction. Pick the best default and get out of the way. Configuration is a last resort, not a feature.

### Performance is a feature
Speed isn't a nice-to-have — it's table stakes. Every 100ms of load time costs conversions. Measure, optimize, repeat.

---

## Engineering Principles

### Server Components by default
Start with Server Components. Only add `"use client"` when you need interactivity, hooks, or browser APIs. Less JavaScript shipped = faster pages.

### The platform is the stack
Use what Vercel, Supabase, and Next.js give you before reaching for third-party solutions. Platform primitives are maintained, documented, and optimized. Custom is a last resort.

### Types are documentation
If a function signature requires a comment to explain what it accepts, the types are wrong. Let TypeScript do the explaining. No `any`.

### Security is not optional
RLS on every table. Validate every input. Never expose service keys. Never hardcode secrets. These aren't guidelines — they're requirements.

### Delete more than you write
The best code is no code. Before adding, ask: can this be removed? Can this be simplified? Can this use an existing pattern? A codebase that grows only when necessary stays maintainable.

---

## Design Principles

### Content first, chrome second
The UI should feel invisible. Users came for the content — products, information, actions. The interface should support that, not compete with it.

### Intentional, not decorative
Every element earns its place. If it doesn't help the user accomplish their goal, it doesn't belong. Ornamentation is noise.

### Consistency builds trust
Use the same patterns, spacing, colors, and interactions everywhere. Inconsistency erodes confidence. The brand system exists — use it.

### Accessibility is not optional
44px touch targets. Focus rings. Color contrast. Semantic HTML. Screen reader support. These aren't nice-to-haves — they're requirements. See `brand/outmore-brand-identity.md` for standards.

---

## Business Principles

### Revenue is the metric
Traffic is vanity. Revenue is sanity. Every initiative should trace back to revenue — directly or indirectly. If it doesn't, question it.

### Direct relationships win
Own the customer relationship. DTC means we control the experience from first click to delivery. Don't outsource what we can own.

### Invest in quality
A well-made product earns trust, generates word-of-mouth, and reduces support costs. Cutting corners on quality is borrowing against the future.

### Move fast, document everything
Speed matters, but undocumented decisions become landmines. Write it down — the why, not just the what. Future team members (and future you) will need context.

---

## Decision-Making Framework

When principles conflict (they will), use this priority:

1. **User safety and data security** — always first
2. **User experience** — does this help the customer?
3. **Revenue impact** — does this grow the business?
4. **Technical quality** — is this sustainable and maintainable?
5. **Speed** — can we ship this faster without sacrificing 1-4?

---

## Anti-Principles (What We Don't Do)

- **Don't chase trends.** Use boring, proven technology unless there's a compelling reason not to.
- **Don't add features to check boxes.** Every feature has maintenance cost. Fewer, better features.
- **Don't optimize prematurely.** Measure first, optimize second. Hunches are not data.
- **Don't hide behind process.** Process should enable speed, not replace judgment. If a process slows you down with no benefit, change it.
- **Don't build for scale you don't have.** Solve today's problems with today's constraints. Scale solutions when scale problems arrive.
