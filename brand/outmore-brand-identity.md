# Outmore Living Brand Identity System

> Minimalist, clean, elevated interfaces inspired by Apple, Mercury, and Superpower.
> Every interaction should feel intentional, premium, and effortlessly sophisticated.

---

## 1. Brand Foundation

### Mission Statement

**"Be Outmore."**

Outmore Living creates heated outdoor furniture that extends life beyond four walls. We believe comfort shouldn't end at the door—it should follow you outside, into the crisp morning air, the golden hour sunset, and the star-filled night.

### Design Philosophy

| Principle | Description |
|-----------|-------------|
| **Minimalist Clarity** | Content is legible, elements are precise, ornamentation is purposeful |
| **Deference** | UI supports content without competing—the space breathes |
| **Elevated Subtlety** | Interactions feel premium through refined feedback, not flashy effects |
| **Intentional Space** | Generous negative space creates calm, focused experiences |

### Reference Interfaces
- Apple (clarity, restraint, tactile feedback)
- Mercury (command-driven, keyboard-first, speed)
- Superpower (minimal chrome, content-forward, elegant density)

---

## 2. Color System

### Brand Primaries

| Token | Name | Hex | HSL | Usage |
|-------|------|-----|-----|-------|
| `brand-jet` | Jet | `#373534` | `30 3% 21%` | Primary text, dark surfaces |
| `brand-linen` | Linen | `#f7f1e9` | `36 41% 94%` | Warm backgrounds (Beige theme) |
| `brand-hot-embers` | Hot Embers | `#F25431` | `11 88% 57%` | Accent, CTAs, highlights |
| `brand-mist` | Mist | `#efefed` | `0 0% 94%` | Flat surface backgrounds |

### Theme Backgrounds

| Theme | Hex | HSL | Description |
|-------|-----|-----|-------------|
| Light | `#fcf9f5` | `40 33% 98%` | Warm off-white (default) |
| Beige | `#f7f1e9` | `36 41% 94%` | Warm linen |
| White | `#ffffff` | `0 0% 100%` | Pure white |
| Dark | `#373534` | `30 3% 21%` | Jet (inverted) |

### Semantic Color Tokens

```css
:root {
  /* Brand Primaries */
  --color-brand-jet: 30 3% 21%;
  --color-brand-linen: 36 41% 94%;
  --color-brand-hot-embers: 11 88% 57%;
  --color-brand-mist: 0 0% 94%;

  /* Heated Glow Gradients */
  --gradient-heated-glow: linear-gradient(135deg, #F25431 0%, #FF8A5C 50%, #FFB347 100%);
  --gradient-heated-radial: radial-gradient(circle, #F25431 0%, #FF8A5C 40%, transparent 70%);
}

/* LIGHT THEME (Default) */
[data-theme="light"] {
  --color-background: 40 33% 98%;         /* #fcf9f5 */
  --color-foreground: var(--color-brand-jet);
  --color-primary: var(--color-brand-hot-embers);
  --color-primary-foreground: 0 0% 100%;
  --color-muted: 30 10% 90%;
  --color-muted-foreground: 30 3% 45%;
  --color-border: 30 10% 88%;
  --color-ring: var(--color-brand-hot-embers);
  --color-surface-base: 40 33% 98%;
  --color-surface-raised: 40 30% 99%;
  --color-surface-overlay: 0 0% 100%;
  --color-surface-flat: 0 0% 96%;
}

/* BEIGE THEME */
[data-theme="beige"] {
  --color-background: var(--color-brand-linen);
  --color-foreground: var(--color-brand-jet);
  --color-primary: var(--color-brand-hot-embers);
  --color-primary-foreground: 0 0% 100%;
  --color-muted: 30 15% 85%;
  --color-muted-foreground: 30 3% 40%;
  --color-border: 30 12% 82%;
  --color-ring: var(--color-brand-hot-embers);
  --color-surface-base: var(--color-brand-linen);
  --color-surface-raised: 36 35% 97%;
  --color-surface-overlay: 0 0% 100%;
  --color-surface-flat: 36 20% 92%;
}

/* WHITE THEME */
[data-theme="white"] {
  --color-background: 0 0% 100%;
  --color-foreground: var(--color-brand-jet);
  --color-primary: var(--color-brand-hot-embers);
  --color-primary-foreground: 0 0% 100%;
  --color-muted: 0 0% 95%;
  --color-muted-foreground: 0 0% 45%;
  --color-border: 0 0% 90%;
  --color-ring: var(--color-brand-hot-embers);
  --color-surface-base: 0 0% 100%;
  --color-surface-raised: 0 0% 98%;
  --color-surface-overlay: 0 0% 100%;
  --color-surface-flat: 0 0% 96%;
}

/* DARK THEME */
[data-theme="dark"] {
  --color-background: var(--color-brand-jet);
  --color-foreground: var(--color-brand-linen);
  --color-primary: var(--color-brand-hot-embers);
  --color-primary-foreground: 0 0% 100%;
  --color-muted: 30 3% 28%;
  --color-muted-foreground: 30 10% 65%;
  --color-border: 30 3% 25%;
  --color-ring: var(--color-brand-hot-embers);
  --color-surface-base: var(--color-brand-jet);
  --color-surface-raised: 30 3% 24%;
  --color-surface-overlay: 30 3% 26%;
  --color-surface-flat: 30 3% 18%;
}
```

### Contrast Guidance

| Combination | Ratio | Status |
|-------------|-------|--------|
| Jet on Light (#fcf9f5) | 10.8:1 | AAA Pass |
| Jet on Linen (#f7f1e9) | 10.2:1 | AAA Pass |
| Jet on White (#ffffff) | 11.4:1 | AAA Pass |
| Hot Embers on White | 3.4:1 | AA Large Text |
| Linen on Jet | 10.2:1 | AAA Pass |

---

## 3. Typography

### Font Families

| Token | Family | Usage |
|-------|--------|-------|
| `font-display` | Poppins | Headlines, hero text, navigation |
| `font-body` | DM Sans | Body copy, UI text, labels |
| `font-accent` | Cormorant Garamond | Editorial accents, decorative text |

### Font Configuration

```css
:root {
  --font-display: 'Poppins', system-ui, sans-serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-accent: 'Cormorant Garamond', Georgia, serif;
}
```

```js
// tailwind.config.js fontFamily
fontFamily: {
  display: ['Poppins', 'system-ui', 'sans-serif'],
  body: ['DM Sans', 'system-ui', 'sans-serif'],
  accent: ['Cormorant Garamond', 'Georgia', 'serif'],
}
```

### Heading Weights

Headings use **thinner weights** for an elegant, refined look:

```css
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: 400;  /* Regular weight for clean headlines */
}

/* Hero headlines can use lighter weight */
.hero-headline {
  font-weight: 300;
}
```

### Type Scale

| Token | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 0.75rem (12px) | 1.5 | Captions, metadata |
| `text-sm` | 0.875rem (14px) | 1.5 | Labels, secondary text |
| `text-base` | 1rem (16px) | 1.6 | Body copy |
| `text-lg` | 1.125rem (18px) | 1.6 | Lead paragraphs |
| `text-xl` | 1.25rem (20px) | 1.5 | Subheadings |
| `text-2xl` | 1.5rem (24px) | 1.4 | Section headers |
| `text-3xl` | 1.875rem (30px) | 1.3 | Page titles |
| `text-4xl` | 2.25rem (36px) | 1.2 | Hero headlines |
| `text-5xl` | 3rem (48px) | 1.1 | Display headlines |
| `text-6xl` | 3.75rem (60px) | 1.1 | Large display |

### Typography Rules

- Headlines: Use `text-wrap: balance` to prevent widows
- Body: Max line length `65-75ch` for readability
- Curly quotes `"` `"` not straight quotes
- Ellipsis character `…` not `...`
- Non-breaking spaces in measurements: `10&nbsp;MB`, `⌘&nbsp;K`

---

## 4. Spacing & Layout

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `space-0` | 0 | Reset |
| `space-1` | 0.25rem (4px) | Tight gaps |
| `space-2` | 0.5rem (8px) | Element gaps |
| `space-3` | 0.75rem (12px) | Small padding |
| `space-4` | 1rem (16px) | Base unit |
| `space-5` | 1.25rem (20px) | Medium padding |
| `space-6` | 1.5rem (24px) | Section gaps |
| `space-8` | 2rem (32px) | Large padding |
| `space-10` | 2.5rem (40px) | Section separation |
| `space-12` | 3rem (48px) | Major sections |
| `space-16` | 4rem (64px) | Page sections |
| `space-20` | 5rem (80px) | Hero spacing |
| `space-24` | 6rem (96px) | Generous breathing room |

### Layout Principles

- **Mobile-first**: Base styles for mobile, enhance upward
- **Generous whitespace**: Let content breathe
- **Consistent rhythm**: Use spacing scale consistently
- **Content-based breakpoints**: Break where content needs it

### Breakpoints

| Token | Width | Usage |
|-------|-------|-------|
| `sm` | 640px | Landscape phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large displays |

---

## 5. Border Radius

### Radius Scale

| Token | Value | CSS Variable |
|-------|-------|--------------|
| `radius-none` | 0 | `--radius-none` |
| `radius-sm` | 0.25rem (4px) | `--radius-sm` |
| `radius-md` | 0.5rem (8px) | `--radius-md` |
| `radius-lg` | 0.75rem (12px) | `--radius-lg` |
| `radius-xl` | 1rem (16px) | `--radius-xl` |
| `radius-2xl` | 1.5rem (24px) | `--radius-2xl` |
| `radius-pill` | 9999px | `--radius-pill` |

```css
:root {
  --radius: 0.5rem; /* Base radius - moderately rounded */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: var(--radius);
  --radius-lg: calc(var(--radius) + 4px);
  --radius-xl: calc(var(--radius) + 8px);
  --radius-2xl: calc(var(--radius) + 16px);
  --radius-pill: 9999px;
}
```

### Usage Guidelines

- **Buttons**: `radius-pill` (fully rounded)
- **Cards**: `radius-lg` to `radius-xl`
- **Inputs**: `radius-md`
- **Modals/Dialogs**: `radius-xl` to `radius-2xl`
- **Pills/Tags**: `radius-pill`
- **Images**: `radius-lg` or match container

---

## 6. Component Surface Styles

### Surface Variants

| Variant | Background | Border | Shadow | Usage |
|---------|------------|--------|--------|-------|
| **Flat** | `surface-flat` (Mist) | none | none | Inline elements, minimal UI |
| **Ghost** | `transparent` | none | none | Hover reveals interaction |
| **Outline** | `transparent` | `1px solid border` | none | Secondary actions |
| **Raised** | `surface-raised` | `1px solid border` | none | Cards, content containers |
| **Elevated** | `surface-overlay` | none | `shadow-md` | Dropdowns, modals, popovers |

### CSS Implementation

```css
/* Surface Variants */
.surface-flat {
  background: hsl(var(--color-surface-flat));
  border: none;
  box-shadow: none;
}

.surface-ghost {
  background: transparent;
  border: none;
  box-shadow: none;
}
.surface-ghost:hover {
  background: hsl(var(--color-muted) / 0.5);
}

.surface-outline {
  background: transparent;
  border: 1px solid hsl(var(--color-border));
  box-shadow: none;
}

.surface-raised {
  background: hsl(var(--color-surface-raised));
  border: 1px solid hsl(var(--color-border));
  box-shadow: none;
}

.surface-elevated {
  background: hsl(var(--color-surface-overlay));
  border: none;
  box-shadow: var(--shadow-md);
}
```

---

## 7. Shadows

### Shadow Scale

| Token | Value | Usage |
|-------|-------|-------|
| `shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle lift |
| `shadow` | `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | Default elevation |
| `shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Cards, elevated surfaces |
| `shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Dropdowns, modals |
| `shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Large overlays |

---

## 8. Motion & Animation

### Animation Principles

1. **Honor `prefers-reduced-motion`**: Always provide reduced/disabled variants
2. **Compositor-friendly**: Animate only `transform` and `opacity`
3. **Interruptible**: Respond to user input mid-animation
4. **Never `transition: all`**: List properties explicitly

### Timing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Continuous motion |
| `ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful bounce |

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `duration-75` | 75ms | Micro-interactions |
| `duration-100` | 100ms | Fast feedback |
| `duration-150` | 150ms | Default transitions |
| `duration-200` | 200ms | Standard animations |
| `duration-300` | 300ms | Moderate animations |
| `duration-500` | 500ms | Slow, deliberate motion |

### GSAP Integration

```js
// Fade in with slide
gsap.from(element, {
  y: 20,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
});

// Stagger children
gsap.from(".card", {
  y: 30,
  opacity: 0,
  duration: 0.5,
  stagger: 0.1,
  ease: "power2.out"
});

// Scroll-triggered animation
gsap.registerPlugin(ScrollTrigger);
gsap.from(".section", {
  scrollTrigger: {
    trigger: ".section",
    start: "top 80%",
  },
  y: 40,
  opacity: 0,
  duration: 0.8
});
```

### Framer Motion Integration

```jsx
// Fade in
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
/>

// Spring animation
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: "spring", stiffness: 400, damping: 17 }}
/>

// Stagger children
<motion.ul variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.li key={item.id} variants={itemVariants} />
  ))}
</motion.ul>
```

### Standard Transitions

```css
/* Default interactive transition */
.transition-interactive {
  transition-property: color, background-color, border-color, box-shadow, transform, opacity;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .transition-interactive {
    transition-duration: 0ms;
  }
}
```

---

## 9. Hover Effects

### Standard Effects

| Effect | Description | Usage |
|--------|-------------|-------|
| **Lift** | translateY(-2px) + shadow | Cards, buttons |
| **Glow** | Hot Embers shadow | CTAs, accent elements |
| **Scale** | scale(1.02) | Images, thumbnails |
| **Brighten** | brightness(1.05) | Photos, media |
| **Underline Reveal** | Width animation | Text links |
| **Border Glow** | Border color + shadow | Input focus |
| **Background Shift** | Color transition | Ghost buttons |
| **Icon Rotate** | 15deg rotation | Interactive icons |

### CSS Implementation

```css
/* Lift effect */
.hover-lift {
  transition: transform 150ms ease-out, box-shadow 150ms ease-out;
}
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgb(0 0 0 / 0.15);
}

/* Glow effect */
.hover-glow:hover {
  box-shadow: 0 0 20px hsl(var(--color-brand-hot-embers) / 0.4);
}

/* Press scale */
.press-scale:active {
  transform: scale(0.98);
}
```

---

## 10. Modal Patterns

### Modal Structure

```html
<div class="modal-overlay">
  <div class="modal">
    <div class="modal-header">
      <h2>Modal Title</h2>
      <button class="modal-close">×</button>
    </div>
    <div class="modal-body">
      <!-- Content -->
    </div>
    <div class="modal-footer">
      <button class="btn-secondary">Cancel</button>
      <button class="btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Modal Animation

```css
.modal-overlay {
  background: hsl(var(--color-brand-jet) / 0.6);
  backdrop-filter: blur(4px);
  animation: fade-in 200ms ease-out;
}

.modal {
  background: hsl(var(--color-surface-overlay));
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
  animation: scale-in 300ms var(--ease-spring);
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Modal Types

1. **Confirm** - Action confirmation with cancel/confirm buttons
2. **Info** - Information display with single close button
3. **Form** - Input collection with validation
4. **Success** - Feedback after successful action

---

## 11. Heated Glow Effect

The signature "heated glow" represents warmth from our heated furniture products.

### Gradient Definitions

```css
/* Linear gradient for backgrounds */
--gradient-heated-glow: linear-gradient(135deg, #F25431 0%, #FF8A5C 50%, #FFB347 100%);

/* Radial gradient for spotlight effect */
--gradient-heated-radial: radial-gradient(circle, #F25431 0%, #FF8A5C 40%, transparent 70%);

/* Text gradient */
.heated-text {
  background: var(--gradient-heated-glow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glow shadow */
.heated-glow {
  box-shadow: 0 0 30px hsl(var(--color-brand-hot-embers) / 0.3),
              0 0 60px hsl(var(--color-brand-hot-embers) / 0.2);
}
```

---

## 12. Brand Voice

### Tone Attributes

| Attribute | Description |
|-----------|-------------|
| **Warm** | Inviting, comfortable, embracing |
| **Confident** | Assured without arrogance |
| **Refined** | Elevated, sophisticated, premium |
| **Clear** | Direct, concise, no fluff |

### Writing Guidelines

- Use active voice
- Keep sentences short and punchy
- Lead with benefits, not features
- Avoid industry jargon
- Be conversational but professional

### Sample Copy

> **Headline:** "Warmth, Without Walls"
> **Subhead:** "Heated outdoor furniture that turns any season into your season."
> **CTA:** "Explore the Collection"

---

## 13. Interaction States

### State Hierarchy

| State | Visual Treatment |
|-------|------------------|
| **Default** | Base appearance |
| **Hover** | Subtle background shift, cursor change |
| **Focus** | Visible ring (2px), high contrast |
| **Active/Pressed** | Slight scale down (0.98), darker background |
| **Disabled** | 50% opacity, no pointer events |
| **Loading** | Spinner, pulsing opacity |

### Focus Ring Standard

```css
.focus-ring {
  outline: none;
}
.focus-ring:focus-visible {
  box-shadow:
    0 0 0 2px hsl(var(--color-background)),
    0 0 0 4px hsl(var(--color-ring));
}
```

---

## 14. Accessibility Standards

### Required Practices

- **Semantic HTML first**: `<button>` for actions, `<a>` for navigation
- **Focus visible**: All interactive elements need `:focus-visible` ring
- **Color contrast**: 4.5:1 minimum for text, 3:1 for large text/UI
- **Touch targets**: Minimum 44x44px on mobile
- **ARIA labels**: Icon-only buttons require `aria-label`
- **Live regions**: Async updates use `aria-live="polite"`

### Keyboard Support

- All interactive elements keyboard accessible
- Tab order follows visual order
- Escape closes modals/overlays
- Arrow keys navigate within components

---

## 15. Quick Reference: Tailwind Classes

### Common Patterns

```js
// Primary Button (Pill)
"font-display bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] transition-all duration-150"

// Secondary/Outline Button
"font-display bg-transparent border border-border text-foreground px-6 py-3 rounded-full hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.98] transition-all duration-150"

// Ghost Button
"font-display bg-transparent text-foreground px-4 py-2 rounded-full hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors duration-150"

// Card - Raised
"bg-surface-raised border border-border rounded-xl p-6"

// Card - Elevated
"bg-surface-overlay rounded-xl p-6 shadow-md"

// Input
"font-body w-full bg-background border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"

// Display Heading
"font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance"

// Body Text
"font-body text-base text-foreground leading-relaxed max-w-prose"

// Accent Text
"font-accent text-lg italic text-muted-foreground"
```

---

*Last updated: January 2026*
*Version: 2.0.0*
