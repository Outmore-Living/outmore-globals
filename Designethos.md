# Design Ethos

The philosophy behind every visual and interactive decision at Outmore Living. This goes deeper than the brand identity system — it's the *why* behind the *how*.

---

## The Outmore Aesthetic

We design like Apple builds hardware: every detail is considered, nothing is accidental, and the result feels inevitable. Our interfaces are warm where Apple is cool, but the discipline is the same.

**Our North Star:** If you removed our logo, would someone still know this is Outmore? The answer should be yes — through the warmth of the palette, the breathing space, the refined typography, the intentional restraint.

## Design References

| Reference | What We Take From It |
|-----------|---------------------|
| **Apple** | Clarity, restraint, tactile feedback, obsessive detail |
| **Mercury** | Speed, keyboard-first thinking, command-driven efficiency |
| **Superpower** | Minimal chrome, content-forward layouts, elegant density |
| **Aesop** | Warm sophistication, editorial quality, texture and materiality |
| **Dieter Rams** | "Less, but better." Function dictates form. |

## Core Design Beliefs

### 1. Warmth is our differentiator
In a world of cold tech interfaces, Outmore feels warm. This comes from:
- Warm color palette (linen, off-white, hot embers — never clinical blue or sterile gray)
- Rounded corners and pill shapes (soft, approachable)
- Typography with personality (Noto Serif's italic for editorial moments)
- Generous spacing that lets content breathe
- Photography that feels lived-in, not staged

### 2. Space is a design element
Empty space isn't wasted space — it's the most powerful tool in our system. It creates hierarchy, focus, and calm. When in doubt, add more space, not more content.

### 3. Every pixel is intentional
If you can't articulate why something is there, remove it. No decorative borders, no gratuitous gradients, no padding "just because." Every spacing value comes from the scale. Every color comes from the token system.

### 4. Motion should feel physical
Animations should behave like real objects — ease-out when entering (decelerating into view), ease-in when exiting (accelerating away). Springs for playful interactions. Never linear, never arbitrary. The heated glow effect is our signature: warm gradients that pulse like embers.

### 5. Typography is the design
In a minimal interface, type does most of the heavy lifting. Our three-font system creates a clear hierarchy:
- **Poppins (display):** Clean, geometric, modern — for headlines and navigation
- **DM Sans (body):** Friendly, readable, versatile — for everything the user reads
- **Noto Serif (accent):** Elegant, editorial, serif — for moments of sophistication

The secret: headings use lighter weights (300-400), not bold. This creates refinement, not noise.

## Design Rules

### Color
- Never use raw hex values — always use brand tokens
- Hot Embers is for emphasis, not decoration. One accent per view.
- Background hierarchy: base > raised > overlay. Don't break the stack.
- Dark mode isn't inverted light mode — it's a separately considered palette.

### Layout
- Mobile-first, always. Base styles are for the smallest screen.
- Max content width: `65-75ch` for readability
- Section spacing: generous. `space-16` to `space-24` between major sections.
- Grid: use CSS Grid or Tailwind's grid. Avoid absolute positioning.
- Cards: consistent padding (`p-6`), consistent radius (`rounded-xl`).

### Components
- Buttons are pills (`rounded-full`). Always.
- Inputs are subtly rounded (`rounded-md`). Never sharp.
- Cards use `surface-raised` (border, no shadow) for most cases.
- Modals get `surface-elevated` (shadow, no border) and `rounded-2xl`.
- Ghost elements reveal themselves on hover — invisible until needed.

### Interaction
- Hover: lift or glow, never both simultaneously
- Press: scale(0.98) for tactile feedback
- Focus: 2px ring with offset, always visible
- Loading: skeleton screens over spinners when possible
- Transitions: 150ms default, explicit properties, never `transition: all`

### Photography & Media
- Product photography should feel real, not studio-sterile
- Lifestyle imagery: people actually using furniture, outdoors, in natural light
- Avoid stock photo energy — if it feels generic, it is
- Images get `rounded-lg` or match their container's radius
- Always use `next/image` for optimization

## The Anti-Pattern List

Things that are **never** Outmore:

| Anti-Pattern | Why |
|-------------|-----|
| Neon colors or saturated blues | Cold, tech-bro aesthetic. Not us. |
| Sharp corners everywhere | Feels corporate and rigid |
| Heavy drop shadows | Dated, heavy. We use subtle elevation. |
| Centered walls of text | Creates scanning fatigue. Left-align body copy. |
| Carousel sliders | Users don't click past slide 1. Use a grid. |
| Autoplay video | Intrusive. Let the user choose to engage. |
| Popup modals on page load | Hostile to the user experience. Earn attention first. |
| Small, light gray text | Accessibility failure. Contrast matters. |
| Hamburger menus on desktop | Navigation should be visible, not hidden. |
| "Click here" link text | Meaningless. Describe the destination. |

## Design Process

1. **Understand** — What is the user trying to do? What's the simplest path?
2. **Reference** — Check existing patterns in the brand system. Reuse before creating.
3. **Sketch** — Low-fidelity first. Structure before polish.
4. **Build** — Use shadcn/ui + brand tokens. Don't reinvent components.
5. **Review** — Does it pass the "Be Outmore" test? Is it warm, clear, intentional?
6. **Refine** — Sweat the details. Spacing, alignment, typography, transitions.

## Measuring Good Design

A well-designed Outmore page should:
- Load in under 2 seconds
- Pass WCAG 2.1 AA accessibility
- Work perfectly on mobile (not just "responsive")
- Use fewer than 3 font weights on any single view
- Have clear visual hierarchy — you know where to look first
- Feel calm, not cluttered
- Make the user want to stay
