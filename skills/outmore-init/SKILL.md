---
name: outmore-init
description: Initialize a new Outmore Living project with the full stack, brand system, and boilerplate. Use when starting any new project.
context: fork
agent: general-purpose
allowed-tools: Read, Edit, Write, Grep, Glob, Bash
---

# Outmore Project Initializer

You are setting up a brand new Outmore Living project. Follow every step precisely.

## Steps

1. **Create Next.js project:**
   ```bash
   npx create-next-app@latest $ARGUMENTS --typescript --tailwind --app --src-dir --use-npm
   ```

2. **Initialize shadcn/ui:**
   ```bash
   cd $ARGUMENTS
   npx shadcn@latest init -d
   ```
   Use "new-york" style, CSS variables enabled.

3. **Install dependencies:**
   ```bash
   npm i @supabase/supabase-js @supabase/ssr
   npm i @heroicons/react @material-symbols/svg-400
   npm i zod
   ```

4. **Clone brand files from the brand guide repo:**
   ```bash
   # Fetch the CSS variables and Tailwind config
   curl -sL "https://raw.githubusercontent.com/AduncanOutmore/outmore-brand-guide/main/outmore-variables.css" -o src/styles/outmore-variables.css
   curl -sL "https://raw.githubusercontent.com/AduncanOutmore/outmore-brand-guide/main/tailwind.config.outmore.js" -o tailwind.config.outmore.js
   ```
   Then merge `tailwind.config.outmore.js` tokens (colors, fonts, animations) into the project's `tailwind.config.ts`.

5. **Import brand CSS** — add to `src/app/globals.css` BEFORE the Tailwind directives:
   ```css
   @import '../styles/outmore-variables.css';
   ```

6. **Set up Google Fonts** in `src/app/layout.tsx`:
   ```tsx
   import { Poppins, DM_Sans, Noto_Serif } from 'next/font/google'

   const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-display' })
   const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' })
   const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '500', '600'], style: ['normal', 'italic'], variable: '--font-accent' })
   ```
   Apply all three font variables to `<body>`.

7. **Create Supabase client helpers:**
   - `src/lib/supabase/client.ts` (browser client using `createBrowserClient`)
   - `src/lib/supabase/server.ts` (server client using `createServerClient`)

8. **Create `.env.local`** with placeholder Supabase keys:
   ```
   NEXT_PUBLIC_SUPABASE_URL=
   NEXT_PUBLIC_SUPABASE_ANON_KEY=
   SUPABASE_SERVICE_ROLE_KEY=
   ```

9. **Create directory structure:**
   ```
   src/components/ui/     (shadcn components)
   src/components/        (custom components)
   src/lib/supabase/      (supabase clients)
   src/lib/               (utils)
   src/types/             (typescript types)
   src/styles/            (brand CSS)
   src/app/actions/       (server actions)
   ```

10. **Create a project-level CLAUDE.md** in the project root with project name and overview placeholder.

11. **Initialize git and create repo:**
    ```bash
    git init
    git add .
    git commit -m "Initial setup: Next.js + Outmore brand system"
    ```

12. **Report completion** with a summary of everything created.
