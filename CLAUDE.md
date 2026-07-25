# iobytes Website

Premium B2B website for iobytes engineering firm ("Every byte engineered for impact").

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4 (CSS-first config)
- shadcn/ui + Radix UI
- Framer Motion

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/              # Next.js routes (App Router)
│   ├── contact/
│   ├── insights/[slug]/
│   ├── portfolio/[slug]/
│   ├── solutions/
│   └── team/
├── components/
│   ├── layout/       # Navbar, Footer, Container
│   ├── sections/     # Page sections (Hero, Bento, etc.)
│   ├── shared/       # Reusable cards
│   └── ui/           # shadcn/ui primitives
├── hooks/
├── lib/
│   └── data/         # Static data files
└── types/            # TypeScript interfaces
```

## Key Conventions

### Tailwind v4

- No `tailwind.config.ts` - uses CSS-first approach
- Theme defined via `@theme` in `src/app/globals.css`

### Design System ("Paper & Ink")

- Background: Cream `#FAF9F6`
- Text: Ink Charcoal `#1A1A1A`
- Accent: Electric Blue `#55B3E8` (CTAs, metrics, links only)
- Cards: 16px radius, glassmorphism
- Buttons: Pill-shaped (Primary), 12px radius (Secondary)

### Components

- shadcn/ui: Do not modify internals, customize via Tailwind classes
- Motion: Use `prefers-reduced-motion` for accessibility
- Icons: Lucide React, 1.5px stroke width

### Data

- Static data in `lib/data/`
- TypeScript interfaces in `types/`

## Important Notes

- WCAG 2.1 AA accessibility target
- This uses Next.js 16 with breaking changes from earlier versions - check `node_modules/next/dist/docs/` when unsure
