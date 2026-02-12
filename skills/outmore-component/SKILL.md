---
name: outmore-component
description: Build a production-ready, Outmore-branded React component with full brand compliance, accessibility, and responsive design.
context: fork
agent: general-purpose
allowed-tools: Read, Edit, Write, Grep, Glob, Bash
---

# Outmore Component Builder

You are building a production-ready React component for Outmore Living. The component must be fully brand-compliant.

## Input
The user describes the component they want: `$ARGUMENTS`

## Requirements (Every Component Must Have)

### Brand Compliance
- Use Outmore color tokens via CSS variables / Tailwind classes
- Typography: `font-display` (Poppins) for headings, `font-body` (DM Sans) for text, `font-accent` (Cormorant Garamond) for editorial
- Heading weight: 400 regular, hero headings 300 light
- Buttons: `rounded-full` pill shape
- Cards: `rounded-xl` to `rounded-2xl`
- Inputs: `rounded-md`
- Generous spacing and breathing room

### Icons
- Use Heroicons (`@heroicons/react`) for standard UI icons
- Use Material Symbols (`@material-symbols/svg-400`) for specialized icons
- Default size: `size-5` inline, `size-6` standalone
- Always `shrink-0` in flex containers

### Accessibility
- Semantic HTML elements
- `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` on interactive elements
- Color contrast 4.5:1 minimum
- Touch targets 44x44px minimum on mobile
- `aria-label` on icon-only buttons
- Keyboard navigable

### Responsive
- Mobile-first — base styles are mobile, scale up with `sm:`, `md:`, `lg:`
- Test mentally at 375px, 768px, 1024px, 1440px

### Animation
- Honor `prefers-reduced-motion`
- Animate only `transform` and `opacity`
- Default: `duration-150 ease-out`
- Use `hover-lift`, `hover-glow`, `press-scale` patterns where appropriate

### Code Standards
- TypeScript with proper interfaces (no `any`)
- Default to Server Component unless client interactivity needed
- `"use client"` only when required
- Export named component
- Props interface exported separately
- Place in `src/components/` (or `src/components/ui/` if it's a primitive)

## Output
1. The component file(s)
2. Brief usage example
3. Note any shadcn/ui components used as dependencies
