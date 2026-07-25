# iobytes Website Project Instructions

Project to build high-conversion, premium website for iobytes engineering firm.

## Project Overview
- **Positioning**: "Every byte engineered for impact"
- **Tech Stack**: Next.js 16+ (App Router), React 19+, TypeScript 5+, Tailwind CSS 4+, shadcn/ui, Framer Motion, Lucide React.
- **Goal**: ROI-driven sales/recruitment tool for B2B enterprise solutions.

## Architecture
- **Framework**: Next.js App Router (`app/` directory).
- **Styling**: Tailwind v4 (CSS-first, `@theme` in `app/globals.css`).
- **UI Components**: shadcn/ui primitives (`components/ui/`) + custom "Paper & Ink" components.
- **Data**: Static data files (`lib/data.ts`) + TypeScript interfaces (`types/`).
- **Motion**: Framer Motion for spring physics and scroll reveals.

## Design System: "Paper & Ink"
- **Background**: Cream (`#FAF9F6`)
- **Text**: Ink Charcoal (`#1A1A1A`)
- **Accent**: Electric Blue (`#55B3E8`) - CTAs, ROI metrics, links only.
- **Font**: Inter (Sans), JetBrains Mono (Mono - for metrics/code).
- **Cards**: 16px radius, glassmorphism (`backdrop-blur(12px)`).
- **Buttons**: Pill-shaped (Primary), 12px radius (Secondary).
- **Icons**: Lucide React, 1.5px stroke width.

## Directory Structure
- `app/`: Next.js routes and global CSS.
- `components/`:
  - `ui/`: shadcn/ui primitives and custom UI.
  - `layout/`: Navbar, Footer, Container.
  - `sections/`: Page sections (Hero, Bento, etc.).
  - `shared/`: Reusable cards (CaseStudyCard, TeamCard).
- `lib/`: Utilities, data, animation variants.
- `types/`: TS interfaces.
- `public/`: Images, logos, fonts.
- `plan/`: Original specification document.

## Implementation Rules
- **Terse Code**: Maintain high signal-to-noise ratio.
- **Tailwind v4**: No `tailwind.config.ts`. Use `@theme` in `globals.css`.
- **shadcn/ui**: Do not modify internals. Customize via Tailwind classes/CSS variables.
- **Motion**: Use `prefers-reduced-motion` safety.
- **Accessibility**: WCAG 2.1 AA target.

## Commands
- **Initialize shadcn**: `npx shadcn@latest init`
- **Add Component**: `npx shadcn@latest add [name]`
- **Dev Server**: `npm run dev` (TODO: verify when package.json exists)
- **Build**: `npm run build` (TODO: verify)
- **Lint**: `npm run lint` (TODO: verify)
