# Project Setup Checklist

Step-by-step guide for starting a new Outmore Living project. Use `/outmore-init` to automate this, or follow manually.

## 1. Create GitHub Repo

```bash
gh repo create Outmore-Living/my-project --public --clone
cd my-project
```

## 2. Scaffold Next.js

```bash
npx create-next-app@latest . --typescript --tailwind --app --src-dir --use-npm
```

## 3. Initialize shadcn/ui

```bash
npx shadcn@latest init
```
- Style: "new-york"
- CSS variables: yes

## 4. Install Dependencies

```bash
npm i @supabase/supabase-js @supabase/ssr
npm i @heroicons/react @material-symbols/svg-400
npm i zod
```

## 5. Copy Brand Files

From `outmore-globals/brand/`:

```bash
cp $OUTMORE_GLOBALS_PATH/brand/outmore-variables.css src/styles/outmore-variables.css
```

Merge `outmore-globals/brand/tailwind.config.outmore.js` tokens into the project's `tailwind.config.ts`.

## 6. Set Up Fonts

In `src/app/layout.tsx`:

```tsx
import { Poppins, DM_Sans, Cormorant_Garamond } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-display'
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body'
})
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-accent'
})
```

Apply all three font variables to `<body>`.

## 7. Set Up globals.css

Copy from `outmore-globals/templates/globals.css.template` or add manually:

```css
@import '../styles/outmore-variables.css';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 8. Create Supabase Clients

Copy from `outmore-globals/templates/supabase/`:

- `client.ts.template` -> `src/lib/supabase/client.ts`
- `server.ts.template` -> `src/lib/supabase/server.ts`

## 9. Set Up Environment Variables

```bash
cp $OUTMORE_GLOBALS_PATH/templates/env.local.template .env.local
```

Fill in Supabase keys from `~/.env.secrets`.

## 10. Create Project CLAUDE.md

```bash
cp $OUTMORE_GLOBALS_PATH/templates/project-claude.md.template CLAUDE.md
```

Edit with project-specific details.

## 11. Create Directory Structure

```
mkdir -p src/components/ui src/lib/supabase src/types src/styles src/app/actions
```

## 12. Deploy to Vercel

```bash
npx vercel --yes
```

Link to Outmore Living team. Set environment variables in dashboard.

## 13. Initial Commit

```bash
git add .
git commit -m "Initial setup: Next.js + Outmore brand system"
git push -u origin main
```
