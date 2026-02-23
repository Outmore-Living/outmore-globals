/** @type {import('tailwindcss').Config} */

/**
 * Outmore Living - Tailwind Configuration
 *
 * Minimalist, clean, elevated interfaces inspired by Apple, Mercury, and Superpower.
 *
 * Brand Colors:
 * - Jet: #373534 (primary text, dark surfaces)
 * - Linen: #f7f1e9 (warm backgrounds - Beige theme)
 * - Hot Embers: #F25431 (accent, CTAs, highlights)
 * - Mist: #efefed (flat surface backgrounds)
 *
 * Theme Backgrounds:
 * - Light: #fcf9f5 (warm off-white, default)
 * - Beige: #f7f1e9 (warm linen)
 * - White: #ffffff (pure white)
 * - Dark: #373534 (jet, inverted)
 *
 * Font Families:
 * - Display: Poppins (headlines, hero text, navigation)
 * - Body: DM Sans (body copy, UI text)
 * - Accent: Noto Serif (editorial, decorative)
 */

module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // ============================================
      // COLORS
      // ============================================
      colors: {
        // Brand Primaries
        brand: {
          jet: 'hsl(30 3% 21%)',
          linen: 'hsl(36 41% 94%)',
          'hot-embers': 'hsl(11 88% 57%)',
          mist: 'hsl(0 0% 94%)',
        },

        // Tint & Shade Scales
        jet: {
          50: '#dfdedd',
          100: '#c7c5c4',
          200: '#afadac',
          300: '#979594',
          400: '#7f7d7b',
          500: '#676563',
          600: '#4f4d4b',
          700: '#373534',
          800: '#252423',
          900: '#1a1918',
          950: '#121111',
          DEFAULT: 'hsl(30 3% 21%)',
        },
        embers: {
          50: '#fef0e5',
          100: '#fce0cb',
          200: '#fac4ac',
          300: '#f8a88d',
          400: '#f68c6e',
          500: '#f4704f',
          600: '#F25431',
          700: '#c73e24',
          800: '#a12918',
          900: '#7a1a0e',
          DEFAULT: 'hsl(11 88% 57%)',
        },
        linen: {
          50: '#fdfcfa',
          100: '#fcfaf7',
          200: '#fbf8f4',
          300: '#faf6f1',
          400: '#f9f4ed',
          500: '#f7f1e9',
          600: '#efe7dc',
          700: '#e6ddd0',
          800: '#ddd3c4',
          900: '#d4c9b8',
          DEFAULT: 'hsl(36 41% 94%)',
        },

        // Semantic Colors (CSS Variable Based)
        background: 'hsl(var(--color-background) / <alpha-value>)',
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',

        primary: {
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
          foreground: 'hsl(var(--color-primary-foreground) / <alpha-value>)',
        },

        secondary: {
          DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
          foreground: 'hsl(var(--color-secondary-foreground) / <alpha-value>)',
        },

        muted: {
          DEFAULT: 'hsl(var(--color-muted) / <alpha-value>)',
          foreground: 'hsl(var(--color-muted-foreground) / <alpha-value>)',
        },

        accent: {
          DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
          foreground: 'hsl(var(--color-accent-foreground) / <alpha-value>)',
        },

        destructive: {
          DEFAULT: 'hsl(var(--color-destructive) / <alpha-value>)',
          foreground: 'hsl(var(--color-destructive-foreground) / <alpha-value>)',
        },

        border: 'hsl(var(--color-border) / <alpha-value>)',
        input: 'hsl(var(--color-input) / <alpha-value>)',
        ring: 'hsl(var(--color-ring) / <alpha-value>)',

        // Surface Hierarchy
        surface: {
          base: 'hsl(var(--color-surface-base) / <alpha-value>)',
          raised: 'hsl(var(--color-surface-raised) / <alpha-value>)',
          overlay: 'hsl(var(--color-surface-overlay) / <alpha-value>)',
          flat: 'hsl(var(--color-surface-flat) / <alpha-value>)',
        },
      },

      // ============================================
      // TYPOGRAPHY
      // ============================================
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        accent: ['Noto Serif', 'Georgia', 'serif'],
        // Aliases for convenience
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif', 'Georgia', 'serif'],
      },

      fontSize: {
        // Matches the type scale with proper line heights
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.6' }],
        xl: ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.2' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['7rem', { lineHeight: '1' }],
      },

      fontWeight: {
        // Thinner heading weights for elegant look
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // ============================================
      // SPACING
      // ============================================
      spacing: {
        // Extended spacing for generous whitespace
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },

      // ============================================
      // BORDER RADIUS
      // ============================================
      borderRadius: {
        // Using CSS variables for consistency
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        pill: 'var(--radius-pill)',
      },

      // ============================================
      // SHADOWS
      // ============================================
      boxShadow: {
        // Refined shadow scale
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        // Elevated surface shadow
        'elevated': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // Inner shadow for pressed states
        'inner-sm': 'inset 0 1px 2px 0 rgb(0 0 0 / 0.05)',
        // Heated glow shadow
        'heated': '0 0 20px hsl(11 88% 57% / 0.4)',
        'heated-lg': '0 0 30px hsl(11 88% 57% / 0.3), 0 0 60px hsl(11 88% 57% / 0.2)',
      },

      // ============================================
      // ANIMATIONS & TRANSITIONS
      // ============================================
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
      },

      transitionTimingFunction: {
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'scale-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        'ambient-float': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-20px, 15px) scale(1.05)' },
          '66%': { transform: 'translate(20px, -10px) scale(0.95)' },
        },
        'ring-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.03)' },
        },
        'scroll-cue': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(6px)', opacity: '0.7' },
        },
      },

      animation: {
        'fade-in': 'fade-in 150ms ease-out',
        'fade-out': 'fade-out 150ms ease-in',
        'slide-in-from-top': 'slide-in-from-top 200ms ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 200ms ease-out',
        'slide-in-from-left': 'slide-in-from-left 200ms ease-out',
        'slide-in-from-right': 'slide-in-from-right 200ms ease-out',
        'scale-in': 'scale-in 200ms ease-out',
        'scale-out': 'scale-out 150ms ease-in',
        'ambient-float': 'ambient-float 10s ease-in-out infinite',
        'ring-pulse': 'ring-pulse 3s ease-in-out infinite',
        'scroll-cue': 'scroll-cue 2s ease-in-out infinite',
      },

      // ============================================
      // LAYOUT
      // ============================================
      maxWidth: {
        'prose': '65ch',
        'prose-wide': '75ch',
      },

      // ============================================
      // Z-INDEX
      // ============================================
      zIndex: {
        'dropdown': '50',
        'sticky': '100',
        'overlay': '200',
        'modal': '300',
        'toast': '400',
        'tooltip': '500',
      },

      // ============================================
      // BACKGROUND IMAGE (Gradients)
      // ============================================
      backgroundImage: {
        'heated-glow': 'linear-gradient(135deg, #F25431 0%, #FF8A5C 50%, #FFB347 100%)',
        'heated-radial': 'radial-gradient(circle, #F25431 0%, #FF8A5C 40%, transparent 70%)',
      },

      backdropBlur: {
        glass: '24px',
        'glass-heavy': '40px',
      },
    },
  },
  plugins: [
    // Custom plugin for Outmore utilities
    function({ addUtilities, addComponents, theme }) {
      // Surface variant utilities
      addUtilities({
        '.surface-flat': {
          'background': 'hsl(var(--color-surface-flat))',
          'border': 'none',
          'box-shadow': 'none',
        },
        '.surface-ghost': {
          'background': 'transparent',
          'border': 'none',
          'box-shadow': 'none',
          '&:hover': {
            'background': 'hsl(var(--color-muted) / 0.5)',
          },
        },
        '.surface-outline': {
          'background': 'transparent',
          'border': '1px solid hsl(var(--color-border))',
          'box-shadow': 'none',
        },
        '.surface-raised': {
          'background': 'hsl(var(--color-surface-raised))',
          'border': '1px solid hsl(var(--color-border))',
          'box-shadow': 'none',
        },
        '.surface-elevated': {
          'background': 'hsl(var(--color-surface-overlay))',
          'border': 'none',
          'box-shadow': theme('boxShadow.md'),
        },
      });

      // Focus ring utility
      addUtilities({
        '.focus-ring': {
          'outline': 'none',
          '&:focus-visible': {
            'box-shadow': '0 0 0 2px hsl(var(--color-background)), 0 0 0 4px hsl(var(--color-ring))',
          },
        },
      });

      // Text balance for headings
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.text-pretty': {
          'text-wrap': 'pretty',
        },
      });

      // Hover lift effect
      addUtilities({
        '.hover-lift': {
          'transition': 'transform 150ms ease-out, box-shadow 150ms ease-out',
          '&:hover': {
            'transform': 'translateY(-2px)',
            'box-shadow': '0 4px 12px rgb(0 0 0 / 0.15)',
          },
        },
      });

      // Hover glow effect
      addUtilities({
        '.hover-glow': {
          'transition': 'box-shadow 150ms ease-out',
          '&:hover': {
            'box-shadow': '0 0 20px hsl(11 88% 57% / 0.4)',
          },
        },
      });

      // Press scale effect
      addUtilities({
        '.press-scale': {
          '&:active': {
            'transform': 'scale(0.98)',
          },
        },
      });

      // Heated text gradient
      addUtilities({
        '.heated-text': {
          'background': 'linear-gradient(135deg, #F25431 0%, #FF8A5C 50%, #FFB347 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });

      // Heated glow effect
      addUtilities({
        '.heated-glow': {
          'box-shadow': '0 0 30px hsl(11 88% 57% / 0.3), 0 0 60px hsl(11 88% 57% / 0.2)',
        },
      });

      // Glassmorphism surfaces
      addUtilities({
        '.surface-glass': {
          'background': 'rgba(255, 255, 255, 0.4)',
          'border': '1px solid rgba(255, 255, 255, 0.6)',
          'box-shadow': '0 8px 40px rgba(55, 53, 52, 0.06)',
          'backdrop-filter': 'blur(24px) saturate(1.5)',
          '-webkit-backdrop-filter': 'blur(24px) saturate(1.5)',
        },
        '.surface-glass-dark': {
          'background': 'rgba(255, 255, 255, 0.04)',
          'border': '1px solid rgba(255, 255, 255, 0.08)',
          'box-shadow': '0 8px 40px rgba(0, 0, 0, 0.4)',
          'backdrop-filter': 'blur(24px) saturate(1.5)',
          '-webkit-backdrop-filter': 'blur(24px) saturate(1.5)',
        },
      });

      // Grain texture overlay
      addUtilities({
        '.grain-overlay': {
          'position': 'relative',
          '&::after': {
            'content': "''",
            'position': 'absolute',
            'inset': '0',
            'opacity': '0.03',
            'background-image': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            'pointer-events': 'none',
            'z-index': '1',
          },
        },
      });
    },
  ],
};
