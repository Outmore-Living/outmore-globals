# Outmore Living — Design System Implementation Guide

> **Reference site:** [brand-guide-jade.vercel.app](https://brand-guide-jade.vercel.app)
> **Source repo:** [github.com/Outmore-Living/brand-guide](https://github.com/Outmore-Living/brand-guide)
>
> Every Outmore project must look and feel like this site. Follow these specifications exactly.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Glassmorphism](#4-glassmorphism)
5. [Ambient Depth & Texture](#5-ambient-depth--texture)
6. [Warmth Gradient Flow](#6-warmth-gradient-flow)
7. [Shape Language](#7-shape-language)
8. [Interaction & Motion](#8-interaction--motion)
9. [Component Patterns](#9-component-patterns)
10. [Layout & Spacing](#10-layout--spacing)
11. [Accessibility](#11-accessibility)
12. [CSS Implementation](#12-css-implementation)
13. [GSAP Animation Setup](#13-gsap-animation-setup)
14. [Font Setup (Next.js)](#14-font-setup-nextjs)
15. [Dark & Light Mode Rules](#15-dark--light-mode-rules)
16. [Anti-Patterns](#16-anti-patterns)
17. [Quick Reference](#17-quick-reference)

---

## 1. Design Philosophy

Outmore's design language is **warm minimalism** — inspired by Apple, Aesop, and Dieter Rams, but warm where Apple is cool. Same discipline.

### Core Principles

- **Warmth is the differentiator.** Warm off-whites (#fcf9f5, #f7f1e9), not sterile whites. Rounded geometry, not sharp edges. Generous spacing, not density.
- **Space is a design element.** Empty space creates hierarchy, calm, and premium perception. Never fill space just because it's empty.
- **Every pixel is intentional.** If you can't articulate why something exists, remove it.
- **Motion should feel physical.** Elements ease out when entering (decelerating into place) and ease in when leaving. Nothing teleports.
- **Typography does the heavy lifting.** Large editorial type with lighter weights creates presence without decoration.

### The Emotion

Imagine sitting outside on a cool evening, warm seat beneath you, glass of wine in hand, watching the stars. That feeling — comfort, openness, refined simplicity — is what every screen should evoke.

---

## 2. Color System

### Brand Primaries

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| `brand-jet` | `#373534` | `55, 53, 52` | Primary text, dark surfaces, depth |
| `brand-linen` | `#f7f1e9` | `247, 241, 233` | Warm backgrounds, the soul of light theme |
| `brand-hot-embers` | `#F25431` | `242, 84, 49` | Accent, CTAs, highlights — **use sparingly** |
| `brand-mist` | `#efefed` | `239, 239, 237` | Flat surfaces, cards, subtle separation |

### Jet Scale (Dark → Light)

| Token | Hex | Usage |
|-------|-----|-------|
| `jet-950` | `#121111` | Deepest dark, rarely used |
| `jet-900` | `#1a1918` | Dark mode deepest background |
| `jet-800` | `#252423` | Dark mode secondary background |
| `jet-700` | `#373534` | **Brand Jet** — primary text, dark surfaces |
| `jet-600` | `#4f4d4b` | Dark UI elements |
| `jet-500` | `#676563` | Dark mode mid-transition |
| `jet-400` | `#7f7d7b` | Muted text on light |
| `jet-300` | `#979594` | Disabled / placeholder |
| `jet-200` | `#afadac` | Light borders |
| `jet-100` | `#c7c5c4` | Lightest jet |
| `jet-50` | `#dfdedd` | Subtle backgrounds |

### Hot Embers Scale (Dark → Light)

| Token | Hex | Usage |
|-------|-----|-------|
| `embers-900` | `#7a1a0e` | Darkest ember |
| `embers-800` | `#a12918` | Dark pressed state |
| `embers-700` | `#c73e24` | Hover on ember CTAs |
| `embers-600` | `#F25431` | **Brand Hot Embers** — primary accent |
| `embers-500` | `#f4704f` | Lighter accent |
| `embers-400` | `#f68c6e` | Subtle accent |
| `embers-300` | `#f8a88d` | Warm tint |
| `embers-200` | `#fac4ac` | Warm background tint |
| `embers-100` | `#fce0cb` | Light warm |
| `embers-50` | `#fef0e5` | Lightest warm |

### Linen Scale (Dark → Light)

| Token | Hex | Usage |
|-------|-----|-------|
| `linen-900` | `#d4c9b8` | Darkest linen |
| `linen-800` | `#ddd3c4` | Medium warm |
| `linen-700` | `#e6ddd0` | Warm card surface |
| `linen-600` | `#efe7dc` | Subtle warm |
| `linen-500` | `#f7f1e9` | **Brand Linen** — warm background |
| `linen-400` | `#f9f4ed` | Slightly lighter |
| `linen-300` | `#faf6f1` | Light warm |
| `linen-200` | `#fbf8f4` | Lighter warm |
| `linen-100` | `#fcfaf7` | Near-white warm |
| `linen-50` | `#fdfcfa` | Lightest warm |

### Color Usage Rules

1. **Never use raw hex values.** Always reference brand tokens: `text-brand-jet`, `bg-brand-linen`, `text-brand-hot-embers`.
2. **Default light background is `#fcf9f5`** (warm off-white), not pure white (#fff).
3. **Hot Embers is accent only.** Max 5-10% of any screen. Used for: primary CTAs, active states, prices, category labels, heat visualizations.
4. **Text opacity hierarchy on light backgrounds:**
   - Primary text: `text-[#373534]` (100%)
   - Secondary text: `text-[#373534]/70` (70%)
   - Tertiary text: `text-[#373534]/50` (50%)
   - Muted/hint text: `text-[#373534]/40` (40%)
   - Faint labels: `text-[#373534]/30` (30%)
   - Near-invisible: `text-[#373534]/25` (25%)
5. **Text opacity hierarchy on dark backgrounds:**
   - Primary text: `text-white/90` (90%)
   - Secondary text: `text-white/70` (70%)
   - Tertiary text: `text-white/40-50` (40-50%)
   - Muted text: `text-white/30` (30%)
   - Faint labels: `text-white/25` (25%)
   - Near-invisible: `text-white/15` (15%)
6. **Selection color:** `rgba(242, 84, 49, 0.15)` — Hot Embers at 15% opacity.
7. **Borders on light:** `border-[#373534]/5` to `border-[#373534]/15`
8. **Borders on dark:** `border-white/[0.06]` to `border-white/[0.1]`

---

## 3. Typography

### Font Families

| Token | Family | Weights | Variable | Usage |
|-------|--------|---------|----------|-------|
| `font-display` | **Poppins** | 300, 400, 500, 600 | `--font-poppins` | Headlines, nav, buttons, UI labels |
| `font-body` | **DM Sans** | 400, 500 | `--font-dm-sans` | Body copy, descriptions, form labels |
| `font-accent` | **Cormorant Garamond** | 300, 400 (normal + italic) | `--font-cormorant` | Hero headlines, editorial accents, decorative text |

### Type Hierarchy

| Element | Font | Weight | Size | Tracking | Leading | Example |
|---------|------|--------|------|----------|---------|---------|
| Hero headline | `font-accent` | 300 (light) | `text-6xl` to `text-[7rem]` responsive | `-0.02em` | `leading-[1.05]` | "Warmth, Without Walls" |
| Section headline | `font-accent` | 300 (light) | `text-4xl` to `text-6xl` responsive | `-0.01em` | `leading-[1.15]` | "Glass that breathes" |
| Card title | `font-display` | 400 (normal) | `text-lg` to `text-base` | `-0.01em` | default | "Lounge Chair" |
| Section label | `font-body` | 500 (medium) | `text-xs` | `tracking-[0.3em]` | default | "TYPOGRAPHY" |
| Body text | `font-body` | 400 | `text-base` to `text-lg` | default | `leading-relaxed` | Long-form descriptions |
| Caption / detail | `font-body` | 400 | `text-xs` to `text-sm` | `tracking-wide` | `leading-relaxed` | Hex values, specs |
| Button text | `font-display` | 400 (normal) | `text-sm` | `tracking-wide` | default | "Explore Collection" |

### Typography Rules

1. **Headings are always weight 400.** Never bold. Hero headlines can be weight 300.
2. **Cormorant Garamond is for editorial moments only** — hero headlines, transition sections, emotional statements. Never for body copy or UI elements.
3. **Cormorant uses italic for emphasis**, especially on hero taglines. E.g., `<span className="italic">Without Walls</span>`.
4. **Section labels are always:** `font-body text-xs font-medium uppercase tracking-[0.3em]` with reduced opacity (30-40%).
5. **Use `text-wrap: balance`** on all headings (set in base layer).
6. **Responsive type scaling:** Always provide responsive sizes. Example: `text-6xl sm:text-7xl md:text-8xl lg:text-[7rem]`.
7. **Never use font-weight 700+ on any heading.** The brand is light and airy.
8. **Line height for large display text:** `leading-[1.05]` to `leading-[1.15]`. Tight, not cramped.

---

## 4. Glassmorphism

Glassmorphism is the signature surface treatment. Translucent cards float over ambient backgrounds, creating depth without weight.

### Light Glass (on light backgrounds)

```
bg-white/40
border border-white/60
shadow-[0_8px_40px_rgba(55,53,52,0.06)]
backdrop-blur-xl backdrop-saturate-150
rounded-2xl
```

CSS utility class: `.surface-glass`

### Dark Glass (on dark backgrounds)

```
bg-white/[0.04]
border border-white/[0.08]
shadow-[0_8px_40px_rgba(0,0,0,0.4)]
backdrop-blur-xl backdrop-saturate-150
rounded-2xl
```

CSS utility class: `.surface-glass-dark`

### Glow Line

Every glass card has a subtle highlight line at the top edge:

- **Light mode:** `bg-gradient-to-r from-transparent via-white/80 to-transparent` — 1px height, `absolute inset-x-0 top-0`
- **Dark mode:** `bg-gradient-to-r from-transparent via-white/10 to-transparent` — same positioning

CSS utility class: `.glass-glow-line` (adds via `::before` pseudo-element)

### Glass Rules

1. **Always pair glass cards with ambient backgrounds** (orbs, gradients). Glass on flat backgrounds looks dead.
2. **Blur value is always `blur(24px)` or `backdrop-blur-xl`** in Tailwind. Never less.
3. **Saturate is always `1.5`** (`backdrop-saturate-150`). This gives the glass warmth.
4. **Glass cards are always `rounded-2xl`** (16px).
5. **Glass cards always have `overflow-hidden`** to clip the glow line.
6. **Never stack glass on glass.** Only one glass layer between content and background.

---

## 5. Ambient Depth & Texture

### Ambient Orbs

Large, blurred, slowly-floating colored circles behind content. They create the "warm glow" feeling.

**Implementation:**

```tsx
function AmbientOrb({ color, size, top, left, delay = 0, blur = 120 }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: "random(-40, 40)",
      y: "random(-30, 30)",
      scale: "random(0.9, 1.1)",
      duration: "random(8, 14)",
      delay,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute rounded-full"
      style={{ width: size, height: size, top, left, background: color, filter: `blur(${blur}px)`, opacity: 0.5 }}
      aria-hidden="true"
    />
  );
}
```

**Orb Color Rules:**

| Context | Orb Colors |
|---------|------------|
| Light sections | `rgba(242,84,49,0.06-0.12)` (ember glow), `rgba(247,241,233,0.6-0.9)` (linen warmth), `rgba(239,239,237,0.5-0.6)` (mist) |
| Dark sections | `rgba(242,84,49,0.06-0.15)` (ember glow), `rgba(55,53,52,0.8)` (jet depth), `rgba(247,241,233,0.02-0.03)` (faint linen) |
| Transition section | `rgba(242,84,49,0.15)` (stronger ember, centered) |

**Orb Specifications:**

- **Size:** 350px to 800px diameter
- **Blur:** 120px to 250px (larger orbs = more blur)
- **Opacity:** 0.5 (set inline, not in Tailwind)
- **Animation:** GSAP `sine.inOut`, random x/y (-40 to 40 / -30 to 30), random scale (0.9 to 1.1), random duration (8 to 14s), yoyo infinite
- **Stagger:** Use `delay` prop (0, 2, 3, 4, 5 seconds) to avoid synchronized movement
- **Container:** Always inside `absolute inset-0 overflow-hidden` with `aria-hidden="true"`
- **Per section:** 1 to 3 orbs. Never more than 3.

### Grain Texture

A subtle film-grain overlay adds organic texture to prevent flat digital feeling.

**Implementation:**

```html
<div
  className="pointer-events-none absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
  }}
  aria-hidden="true"
/>
```

Or use the CSS utility class: `.grain-overlay`

**Grain Rules:**

- **Opacity:** `0.025` to `0.04` — barely visible. Light sections: `0.03`. Dark sections: `0.04`.
- **Apply on:** Hero sections, linen background sections, dark product sections. Not every section.
- **Position:** `absolute inset-0`, `pointer-events-none`, `aria-hidden="true"`

---

## 6. Warmth Gradient Flow

The most distinctive design pattern: pages flow from light (day) to dark (evening), mirroring the transition from afternoon to night outdoors.

### Section Progression

| Section | Background | Theme | Emotional Tone |
|---------|-----------|-------|----------------|
| 1. Hero | `#fcf9f5` (warm off-white) | Light | Bright, open, inviting |
| 2. Typography | `#fcf9f5` | Light | Clean, airy |
| 3. Glass Cards | `#f7f1e9` (linen) | Light | Warm, tactile |
| 4. Color System | `#fcf9f5` | Light | Informational |
| 5. Transition | Gradient (see below) | Mixed | "Evening falls" |
| 6. Product Cards | `#2a2928` | Dark | Intimate, premium |
| 7. HeatTech | `#1a1918` | Dark | Deep, focused |
| 8. Interactions | `#2a2928` | Dark | Functional |
| 9. Shape Language | `#1a1918` | Dark | Technical |
| 10. Closing | `#1a1918` | Dark | Emotional, warm glow |

### The Transition Gradient

The pivotal moment where light becomes dark:

```css
background: linear-gradient(
  to bottom,
  #fcf9f5 0%,      /* Warm off-white */
  #f7f1e9 15%,     /* Linen */
  #c7c5c4 35%,     /* Jet-100 — mid gray */
  #676563 55%,     /* Jet-500 — dark gray */
  #373534 75%,     /* Brand Jet */
  #2a2928 100%     /* Slightly darker than jet */
);
```

This section is `min-h-[80vh]` with centered editorial text in white.

### Flow Rules

1. **Light sections come first, dark sections later.** Never alternate randomly.
2. **The transition is a single full-screen gradient section** with a large editorial statement.
3. **Once dark, stay dark.** Don't return to light after the transition.
4. **Text automatically switches:** Jet text on light backgrounds, white text on dark backgrounds.
5. **Not every page needs all 10 sections.** But if a page has a light-to-dark flow, follow this progression.

---

## 7. Shape Language

| Element | Radius | Tailwind | Pixels |
|---------|--------|----------|--------|
| Buttons | Pill | `rounded-full` | 9999px |
| Cards | Large | `rounded-2xl` | 16px |
| Glass cards | Large | `rounded-2xl` | 16px |
| Image thumbnails | Large | `rounded-xl` | 12px |
| Inputs | Medium | `rounded-lg` | 8px |
| Modals | Large | `rounded-2xl` | 16px |
| Color swatches | Medium-Large | `rounded-xl` | 12px |
| Fabric selection circles | Full | `rounded-full` | 50% |
| Icon containers | Large | `rounded-xl` | 12px |

### Shape Rules

1. **Buttons are always pills.** `rounded-full` with `px-7 py-3.5`. No exceptions.
2. **Cards are always `rounded-2xl`.** Never `rounded-lg` for cards.
3. **Consistent within context.** All elements at the same hierarchical level use the same radius.
4. **Soft geometry everywhere.** Outmore never has sharp 90-degree corners on interactive elements.

---

## 8. Interaction & Motion

### Hover Effects

| Element | Hover Effect | Code |
|---------|-------------|------|
| Primary button | Lift + shadow | `hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(242,84,49,0.25)]` |
| Secondary button | Lift + bg change | `hover:bg-white/[0.1] hover:-translate-y-0.5` |
| Ghost button | Lift + border darken | `hover:border-white/[0.2] hover:text-white/60 hover:-translate-y-0.5` |
| Glass card | Lift | `hover:-translate-y-1` |
| Color swatch | Lift | `hover:-translate-y-0.5` |
| Fabric circle | Scale | `hover:scale-110` |

**Rule: Hover uses lift OR glow, never both simultaneously.**

### Press Effect

All interactive elements: `active:scale-[0.98]`

### Transition Timing

- **Default duration:** `duration-150` (150ms)
- **Card transitions:** `duration-300` (300ms)
- **Never use `transition: all`.** Always specify: `transition-transform`, `transition-all` with explicit properties via Tailwind.
- **Easing:** Default is browser default. GSAP uses `power3.out` for reveals.

### Scroll Reveal Animation

Every section content fades in on scroll using GSAP ScrollTrigger:

```tsx
function Reveal({ children, delay = 0 }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.set(ref.current, { opacity: 0, y: 50, filter: "blur(8px)" });
    gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  return <div ref={ref}>{children}</div>;
}
```

**Reveal Parameters:**
- **Start state:** `opacity: 0`, `y: 50px`, `filter: blur(8px)`
- **End state:** `opacity: 1`, `y: 0`, `filter: blur(0px)`
- **Duration:** 1 second
- **Ease:** `power3.out`
- **Trigger:** `start: "top 85%"` — fires when element is 85% down the viewport
- **Stagger:** Use `delay` prop incrementing by 0.05-0.15s per element

### Hero Entrance Animation

```tsx
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

tl.from("[data-hero-label]", { opacity: 0, y: 20, duration: 0.8, delay: 0.3 })
  .from("[data-hero-headline]", { opacity: 0, y: 60, filter: "blur(12px)", duration: 1.2 }, "-=0.4")
  .from("[data-hero-sub]", { opacity: 0, y: 30, duration: 0.8 }, "-=0.6")
  .from("[data-hero-line]", { scaleX: 0, duration: 0.6 }, "-=0.5")
  .from("[data-hero-cta]", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3");
```

Use `data-hero-*` attributes for GSAP targeting.

### Hero Parallax

```tsx
const [scrollY, setScrollY] = useState(0);
useEffect(() => {
  const onScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);

// Apply to hero content container:
style={{ transform: `translateY(${scrollY * 0.15}px)` }}
```

Parallax factor: `0.15` (subtle, not dramatic).

### Ring Pulse (Heat Visualization)

```css
@keyframes ring-pulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.03); opacity: 0.6; }
}
```

Used for concentric heat rings around a glowing ember core. 5 rings, each with increasing size and staggered `animationDelay`.

### Scroll Cue

```css
@keyframes scroll-cue {
  0%, 100% { transform: translateY(0); opacity: 0.4; }
  50% { transform: translateY(6px); opacity: 0.7; }
}
.animate-scroll-cue {
  animation: scroll-cue 2s ease-in-out infinite;
}
```

A subtle bouncing chevron at the bottom of hero sections.

---

## 9. Component Patterns

### Glass Card

```tsx
<div className="relative overflow-hidden rounded-2xl bg-white/40 border border-white/60 shadow-[0_8px_40px_rgba(55,53,52,0.06)] backdrop-blur-xl backdrop-saturate-150">
  {/* Glow line */}
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" aria-hidden="true" />
  {/* Content */}
  <div className="p-8">
    {/* ... */}
  </div>
</div>
```

Dark variant: Replace `bg-white/40` with `bg-white/[0.04]`, `border-white/60` with `border-white/[0.08]`, shadow with `rgba(0,0,0,0.4)`, glow line `via-white/10`.

### Feature Card (inside Glass Card)

```
- Icon container: h-10 w-10 rounded-xl bg-[#F25431]/10 with SVG icon stroked in #F25431
- Title: font-display text-lg font-normal text-[#373534]
- Description: font-body text-sm leading-relaxed text-[#373534]/50
- Padding: p-8
```

### Product Card (Dark Glass)

```
- Image area: aspect-[4/3] rounded-xl bg-white/[0.03] border border-white/[0.05]
- Name: font-display text-base font-normal text-white/80
- Price: font-body text-sm text-[#F25431]/70
- Detail: font-body text-xs leading-relaxed text-white/30
- Hover: hover:-translate-y-1
```

### Color Swatch

```
- Color chip: h-16 w-16 rounded-xl shadow-lg
- Name: font-display text-sm font-medium tracking-wide
- Hex: font-body text-xs tracking-wide, 40% opacity
- Usage: font-body text-xs leading-relaxed, 50% opacity
- Layout: flex items-start gap-4
- Hover on chip: hover:-translate-y-0.5 with duration-300
```

### Tint/Shade Strip

```
- Container: flex gap-1
- Each chip: h-12 flex-1 rounded-lg
- First/last: first:rounded-l-xl last:rounded-r-xl
- Hover: hover:-translate-y-1 with duration-200
```

### Section Label

Always precedes section headings:

```tsx
<p className="font-body text-xs font-medium uppercase tracking-[0.3em] text-[#373534]/30">
  Section Name
</p>
```

Dark variant: `text-white/25` or `text-[#F25431]/30-40`

### Button Hierarchy

**Primary (on dark backgrounds):**
```
font-display rounded-full bg-[#F25431] px-7 py-3.5 text-sm font-normal tracking-wide text-white
hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(242,84,49,0.25)] active:scale-[0.98]
transition-all duration-150
```

**Primary (on light backgrounds):**
```
font-display rounded-full bg-[#373534] px-7 py-3.5 text-sm font-normal tracking-wide text-[#f7f1e9]
hover:-translate-y-0.5 active:scale-[0.98]
transition-transform duration-150
```

**Secondary (on dark backgrounds):**
```
font-display rounded-full bg-white/[0.06] border border-white/[0.08] px-7 py-3.5 text-sm font-normal tracking-wide text-white/70
hover:bg-white/[0.1] hover:-translate-y-0.5 active:scale-[0.98]
transition-all duration-150
```

**Ghost / Tertiary:**
```
font-display rounded-full border border-white/[0.1] px-7 py-3.5 text-sm font-normal tracking-wide text-white/40
hover:border-white/[0.2] hover:text-white/60 hover:-translate-y-0.5 active:scale-[0.98]
transition-all duration-150
```

**Ghost (on light backgrounds):**
```
font-display rounded-full border border-[#373534]/15 px-7 py-3.5 text-sm font-normal tracking-wide text-[#373534]/70
hover:border-[#373534]/30 hover:-translate-y-0.5 active:scale-[0.98]
transition-all duration-150
```

### Input

```
w-full rounded-lg bg-white/[0.04] border border-white/[0.08] px-4 py-3
font-body text-sm text-white/70 placeholder:text-white/20
focus:border-[#F25431]/30 focus:ring-2 focus:ring-[#F25431]/10 focus:ring-offset-2 focus:ring-offset-[#2a2928]
outline-none transition-all duration-150
```

**Input label:** `font-body text-xs text-white/30 mb-2 block`

### Decorative Divider

```
mx-auto h-px w-16 origin-left bg-[#373534]/15
```

Used between hero headline and CTA. Animates with `scaleX: 0 → 1`.

### Spec/Detail Row (Dark)

```
flex items-center justify-between border-b border-white/[0.06] pb-3
```
- Label: `font-body text-sm text-white/30`
- Value: `font-display text-sm font-normal text-white/70`

---

## 10. Layout & Spacing

### Section Spacing

- **Standard sections:** `py-32 sm:py-40` (128px / 160px)
- **Hero sections:** `min-h-dvh` (full viewport)
- **Transition section:** `min-h-[80vh]`
- **Closing section:** `min-h-[70vh]`

### Content Width

- **Max content width:** `max-w-6xl` (72rem / 1152px)
- **Narrow content:** `max-w-5xl` (64rem / 1024px) — for HeatTech, 2-column layouts
- **Text-only content:** `max-w-4xl` (56rem / 896px) — transition and closing sections
- **Readable text:** `max-w-md` (28rem / 448px) to `max-w-lg` (32rem / 512px) — paragraph text
- **Horizontal padding:** `px-6` on all content containers

### Grid Patterns

- **3-column cards:** `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`
- **4-column shapes:** `grid gap-6 sm:grid-cols-4`
- **2-column layout:** `grid gap-8 sm:grid-cols-2` or `grid gap-16 lg:grid-cols-2 lg:items-center`
- **Color swatches:** `grid gap-10 sm:grid-cols-2 lg:grid-cols-4`

### Spacing Between Elements

- Section label to heading: `mt-6`
- Heading to description: `mt-4`
- Description to content grid: `mt-16`
- Card internal padding: `p-8`
- Icon to title (in card): `mb-4`
- Title to description (in card): `mt-2`
- Between reveal elements: `delay` increments of `0.05` to `0.15`

---

## 11. Accessibility

### Required

1. **`prefers-reduced-motion` respected everywhere.** All GSAP animations check this before running. CSS fallback in globals.css kills all animation.
2. **`aria-hidden="true"`** on all decorative elements: orbs, grain overlays, glow lines.
3. **Minimum touch targets:** 44x44px.
4. **Color contrast:** 4.5:1 for normal text, 3:1 for large text and UI components.
5. **Focus rings:** Always visible. `focus:ring-2 focus:ring-[#F25431]/10 focus:ring-offset-2`.
6. **Semantic HTML:** `<button>` for actions, `<a>` for navigation. `aria-label` on icon-only buttons.
7. **`text-wrap: balance`** on all headings for better line breaks.
8. **Font smoothing:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;`

### Reduced Motion CSS

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Reduced Motion in GSAP

```tsx
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (prefersReduced) return; // Skip all animations
```

---

## 12. CSS Implementation

### Tailwind v4 Setup (`@theme inline`)

Outmore uses Tailwind CSS v4 with `@theme inline` syntax (no `tailwind.config.js`):

```css
@import "tailwindcss";
@import "tw-animate-css";

@theme inline {
  /* Brand Primaries */
  --color-brand-jet: #373534;
  --color-brand-linen: #f7f1e9;
  --color-brand-hot-embers: #F25431;
  --color-brand-mist: #efefed;

  /* Jet scale */
  --color-jet-50: #dfdedd;
  --color-jet-100: #c7c5c4;
  --color-jet-200: #afadac;
  --color-jet-300: #979594;
  --color-jet-400: #7f7d7b;
  --color-jet-500: #676563;
  --color-jet-600: #4f4d4b;
  --color-jet-700: #373534;
  --color-jet-800: #252423;
  --color-jet-900: #1a1918;
  --color-jet-950: #121111;

  /* Hot Embers scale */
  --color-embers-50: #fef0e5;
  --color-embers-100: #fce0cb;
  --color-embers-200: #fac4ac;
  --color-embers-300: #f8a88d;
  --color-embers-400: #f68c6e;
  --color-embers-500: #f4704f;
  --color-embers-600: #F25431;
  --color-embers-700: #c73e24;
  --color-embers-800: #a12918;
  --color-embers-900: #7a1a0e;

  /* Linen scale */
  --color-linen-50: #fdfcfa;
  --color-linen-100: #fcfaf7;
  --color-linen-200: #fbf8f4;
  --color-linen-300: #faf6f1;
  --color-linen-400: #f9f4ed;
  --color-linen-500: #f7f1e9;
  --color-linen-600: #efe7dc;
  --color-linen-700: #e6ddd0;
  --color-linen-800: #ddd3c4;
  --color-linen-900: #d4c9b8;

  /* Editorial type scale */
  --font-size-8xl: 6rem;
  --font-size-9xl: 7rem;

  /* Font stacks */
  --font-display: var(--font-poppins), system-ui, -apple-system, "Helvetica Neue", sans-serif;
  --font-body: var(--font-dm-sans), system-ui, -apple-system, "Helvetica Neue", sans-serif;
  --font-accent: var(--font-cormorant), "Cormorant Garamond", Georgia, serif;
}
```

### Base Layer

```css
@layer base {
  body {
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 400;
    text-wrap: balance;
  }
}
```

### Utility Classes

```css
/* Typography shortcuts */
.font-display { font-family: var(--font-display); }
.font-body { font-family: var(--font-body); }
.font-accent { font-family: var(--font-accent); }

/* Selection */
::selection { background: rgba(242, 84, 49, 0.15); }

/* Hidden scrollbars */
::-webkit-scrollbar { width: 0px; height: 0px; }
```

### PostCSS Config

```js
// postcss.config.mjs
const config = {
  plugins: { "@tailwindcss/postcss": {} },
};
export default config;
```

---

## 13. GSAP Animation Setup

### Required Dependencies

```json
{
  "gsap": "^3.12",
  "@gsap/react": "^2.1"
}
```

### Plugin Registration (`src/lib/gsap.ts`)

```tsx
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export { gsap, ScrollTrigger, ScrollToPlugin };
```

### Import Pattern

```tsx
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
```

### Standard Ease

```tsx
const EASE = "power3.out";
```

Use `power3.out` for all reveal animations. Use `sine.inOut` for ambient floating.

---

## 14. Font Setup (Next.js)

### Layout Configuration (`src/app/layout.tsx`)

```tsx
import { Poppins, DM_Sans, Cormorant_Garamond } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
```

---

## 15. Dark & Light Mode Rules

Outmore does **not** use system `prefers-color-scheme` toggling. Instead:

1. **Light theme is the default.** Background: `#fcf9f5` (warm off-white).
2. **Dark sections are explicitly set** via inline `style={{ backgroundColor: "#1a1918" }}` or `#2a2928`.
3. **The Warmth Gradient flow handles the transition.** The page physically transitions from light to dark.
4. **Text color is contextual.** Light background = `#373534` text. Dark background = `white/90` text.
5. **No dark mode toggle.** The brand experience is authored, not user-toggled.

### Dark Background Values

| Value | Usage |
|-------|-------|
| `#2a2928` | Primary dark background (slightly lighter than jet for warmth) |
| `#1a1918` | Deepest dark background (`jet-900`) |
| `#252423` | Secondary dark (`jet-800`) |

---

## 16. Anti-Patterns

**Never do these:**

| Anti-Pattern | Why | Do Instead |
|-------------|-----|------------|
| Pure white `#ffffff` backgrounds | Cold, clinical, not Outmore | Use `#fcf9f5` or `#f7f1e9` |
| Bold headings (`font-bold`, `700+`) | Heavy, not editorial | Use `font-light` (300) or `font-normal` (400) |
| Sharp corners on buttons | Aggressive, not warm | Use `rounded-full` (pill) |
| Neon or saturated colors | Cheap, distracting | Use the brand palette |
| Heavy drop shadows | Old-fashioned, flat | Use glass blur + subtle shadow |
| Hover: lift AND glow simultaneously | Visually noisy | Choose one: lift or glow |
| `transition: all` | Performance, unintended | Specify properties |
| Flat backgrounds under glass cards | Glass looks dead | Add ambient orbs |
| More than 3 orbs per section | Cluttered | 1-3 orbs with staggered animation |
| Glass on glass | Muddy, illegible | Only one glass layer |
| Ember accent covering >10% of screen | Overwhelming | Use sparingly for CTAs and highlights |
| Hamburger menu on desktop | Hides navigation | Visible nav on desktop |
| Autoplay video or audio | Intrusive | User-initiated media only |
| Carousels | Low engagement | Static grids or scroll reveals |
| Popup on page load | Aggressive | Scroll-triggered or time-delayed |
| Small, light gray body text | Illegible | Min 14px, proper contrast ratio |
| Ignoring `prefers-reduced-motion` | Accessibility violation | Always check and respect |

---

## 17. Quick Reference

### Most-Used Tailwind Classes

```
/* Backgrounds */
bg-[#fcf9f5]                          /* Default light background */
bg-brand-linen                        /* Warm linen background */
bg-brand-mist                         /* Flat surface */
bg-[#2a2928]                          /* Dark background */
bg-[#1a1918]                          /* Deepest dark */

/* Text — Light Mode */
text-brand-jet                        /* Primary */
text-[#373534]/70                     /* Secondary */
text-[#373534]/50                     /* Tertiary */
text-[#373534]/30                     /* Muted label */

/* Text — Dark Mode */
text-white/90                         /* Primary */
text-white/70                         /* Secondary */
text-white/40                         /* Tertiary */
text-white/25                         /* Muted label */

/* Accent */
text-brand-hot-embers                 /* Ember text */
bg-brand-hot-embers                   /* Ember background */
text-[#F25431]/70                     /* Subdued ember */

/* Glass — Light */
bg-white/40 border-white/60 backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_40px_rgba(55,53,52,0.06)]

/* Glass — Dark */
bg-white/[0.04] border-white/[0.08] backdrop-blur-xl backdrop-saturate-150 shadow-[0_8px_40px_rgba(0,0,0,0.4)]

/* Buttons */
rounded-full px-7 py-3.5 text-sm font-normal tracking-wide
hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-150

/* Section Label */
font-body text-xs font-medium uppercase tracking-[0.3em]

/* Section Spacing */
py-32 sm:py-40

/* Content Container */
mx-auto max-w-6xl px-6
```

### Checklist for New Pages

- [ ] Background color follows Warmth Gradient flow
- [ ] Fonts loaded: Poppins, DM Sans, Cormorant Garamond
- [ ] All headings use `font-display` or `font-accent`, weight 300-400
- [ ] Section labels: `font-body text-xs font-medium uppercase tracking-[0.3em]`
- [ ] Glass cards have ambient orb backgrounds
- [ ] Glass cards include the glow line
- [ ] Grain overlay on hero and key sections
- [ ] Scroll reveal animations respect `prefers-reduced-motion`
- [ ] All decorative elements have `aria-hidden="true"`
- [ ] Buttons are `rounded-full` pills
- [ ] No raw hex values — all colors from brand tokens
- [ ] Text opacity hierarchy applied correctly
- [ ] Touch targets minimum 44x44px
- [ ] Focus rings visible on all interactive elements
- [ ] Selection color is Hot Embers at 15%
- [ ] No `transition: all` — specific properties only
- [ ] Hot Embers used sparingly (max 5-10% of screen)

---

*Last updated: 2026-02-22. Reference implementation: [brand-guide-jade.vercel.app](https://brand-guide-jade.vercel.app)*
