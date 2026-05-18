# iobytes Website Technical Specification
## "Every byte engineered for impact" — Premium Enterprise Redesign

---

## 1. Project Overview

### 1.1 Mission Statement
Build a high-conversion, ROI-driven sales and recruitment tool for iobytes — a high-velocity tech consultancy focused on B2B enterprise solutions (90%) and custom applications. Move beyond a standard portfolio to a consultative, high-trust digital presence.

### 1.2 Core Positioning
**"Every byte engineered for impact"**
- We design, build, and ship custom software for B2B enterprises
- We stay accountable to the metrics that move your business
- Every line of code serves a business outcome

### 1.3 Target Audiences
| Audience | Priority | What They Need |
|---|---|---|
| C-Suite / Decision Makers | Primary | Proof of ROI, credibility, low-risk partnership signals |
| CTOs / Technical Leaders | Primary | Technical depth, team credibility, architecture confidence |
| Potential Enterprise Clients | Primary | Case studies with hard metrics, industry relevance |
| Engineering Talent | Secondary | Team quality, tech stack, growth opportunity |

---

## 2. Design System: "Paper & Ink"

### 2.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| **Cream** | `#FAF9F6` | Primary backgrounds, light sections, card surfaces |
| **Ink Charcoal** | `#1A1A1A` | Primary text, dark sections, high-contrast elements |
| **Electric Blue** | `#55B3E8` | Primary accent, CTAs, links, active states, ROI highlights |
| **Warm Gray** | `#E8E6E1` | Borders, dividers, subtle backgrounds, disabled states |
| **Soft Ink** | `#4A4A4A` | Secondary text, captions, metadata |
| **Glass White** | `rgba(250, 249, 246, 0.85)` | Glassmorphism card backgrounds |

**Color Usage Rules:**
- Light sections: Cream background + Ink Charcoal text
- Dark sections: Ink Charcoal background + Cream text
- Electric Blue appears only for: primary CTAs, links on hover, active nav states, ROI metric numbers, accent icons
- Never use Electric Blue for body text or large backgrounds

### 2.2 Typography

| Role | Font | Weights | Sizes |
|---|---|---|---|
| **Headlines** | Inter (or system-ui fallback) | 700, 800 | H1: 64px/4rem, H2: 48px/3rem, H3: 32px/2rem |
| **Body** | Inter | 400, 500 | 18px/1.125rem (base), 16px/1rem (secondary) |
| **Captions/Labels** | Inter | 400, 500 | 14px/0.875rem, 12px/0.75rem |
| **Monospace** | JetBrains Mono | 400, 500 | 14px — for code snippets, metrics, technical labels |

**Typography Rules:**
- Line height: 1.2 for headlines, 1.6 for body
- Letter spacing: -0.02em for headlines (tight), 0 for body
- Max line length: 65ch for readability
- Headlines: short, declarative, outcome-focused

### 2.3 Spacing System

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Micro gaps, icon padding |
| `space-2` | 8px | Tight component spacing |
| `space-3` | 12px | Default internal padding |
| `space-4` | 16px | Card padding, section gutters |
| `space-5` | 24px | Component separation |
| `space-6` | 32px | Section internal spacing |
| `space-7` | 48px | Medium section padding |
| `space-8` | 64px | Large section padding |
| `space-9` | 96px | Section vertical padding (top/bottom) |
| `space-10` | 128px | Hero section padding |

**Container:**
- Max width: 1280px (80rem)
- Padding: 16px mobile, 24px tablet, 32px desktop
- Centered with auto margins

### 2.4 Geometry & Shapes

| Element | Radius | Notes |
|---|---|---|
| Cards | 16px (`rounded-2xl`) | Primary container shape |
| Buttons (primary) | 9999px (`rounded-full`) | Pill-shaped, approachable |
| Buttons (secondary) | 12px (`rounded-xl`) | Slightly softer than cards |
| Inputs | 12px (`rounded-xl`) | Consistent with secondary buttons |
| Images | 16px (`rounded-2xl`) | Matches card radius |
| Small badges/pills | 9999px (`rounded-full`) | ROI pills, tags |

### 2.5 Shadows & Elevation

| Token | Value | Usage |
|---|---|---|
| `shadow-sm` | `0 1px 2px rgba(26,26,26,0.05)` | Subtle card lift |
| `shadow-md` | `0 4px 12px rgba(26,26,26,0.08)` | Default card elevation |
| `shadow-lg` | `0 8px 24px rgba(26,26,26,0.12)` | Hover states, featured cards |
| `shadow-glow` | `0 0 24px rgba(85,179,232,0.25)` | Electric Blue glow for CTAs |

### 2.6 Glassmorphism Specification

```css
.glass-card {
  background: rgba(250, 249, 246, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(232, 230, 225, 0.6);
  border-radius: 16px;
}
```

**Usage:** Navigation bar, floating cards, overlay panels, modal backgrounds.

### 2.7 Iconography

- **Style:** Thin-line minimalist icons
- **Stroke width:** 1.5px
- **Library:** Lucide React (preferred) or Heroicons
- **Size:** 20px default, 24px for navigation, 16px for inline
- **Color:** Inherit from text color, Electric Blue for active/accent states

---

## 3. Sitemap & Page Architecture

### 3.1 Site Structure

```
/
├── /                    → Home (ROI Hub)
├── /solutions           → Solutions (Bento Grid)
├── /case-studies        → Case Studies Index
│   ├── /case-studies/bat
│   ├── /case-studies/agroshift
│   ├── /case-studies/factorynext
│   ├── /case-studies/rr-erp-pos
│   └── /case-studies/healthcare
├── /brain-trust         → Team (with verified links)
├── /insights            → Blog
│   └── /insights/[slug] → Individual Article
└── /contact             → Contact
```

### 3.2 Page Purposes

| Page | Primary Goal | Secondary Goal |
|---|---|---|
| **Home** | Convert visitors to case study viewers or contact form submissions | Establish credibility instantly |
| **Solutions** | Educate on capabilities, move to case studies | SEO for service keywords |
| **Case Studies Index** | Browse by industry/outcome, filter to relevant story | Social proof at scale |
| **Individual Case Study** | Deep-dive proof, convert to contact | Shareable asset for sales |
| **Brain Trust** | Humanize the firm, attract talent | Technical credibility |
| **Insights** | Thought leadership, SEO traffic | Nurture existing prospects |
| **Contact** | Capture qualified leads | Set expectations for engagement |

---

## 4. Component Inventory

> **shadcn/ui Architecture:** Base UI primitives (Button, Card, Input, Dialog, Form) are installed via the shadcn/ui CLI and customized with Tailwind to match the Paper & Ink design system. Custom components (GlassCard, ROIPill, AnimatedCounter) are built on top of these primitives.

### 4.1 Global Components

> **shadcn/ui Foundation:** All base UI primitives (Button, Card, Input, Dialog, etc.) are built on shadcn/ui components. Custom styling applied via Tailwind to match the Paper & Ink design system.

#### Navigation (`<Navbar />`)
- Fixed top, glassmorphism background on scroll
- Logo left (iobytes wordmark from logo.png)
- Links: Solutions, Case Studies, Brain Trust, Insights, Contact
- CTA button: "Start a Project" (pill, Electric Blue)
- Mobile: Hamburger menu with full-screen overlay
- Scroll behavior: Transparent → Glassmorphism after 50px scroll

#### Footer (`<Footer />`)
- Dark section (Ink Charcoal background)
- 4-column grid: Brand, Solutions, Company, Connect
- Newsletter signup (optional)
- Copyright + legal links
- Social links: LinkedIn, GitHub (if applicable)

#### ROI Pill (`<ROIPill />`)
- Pill-shaped badge (rounded-full)
- Electric Blue border or background variant
- Format: `[Icon] [Metric] [Label]`
- Example: `↑ 40% Efficiency Increase`
- Animation: Float in with spring physics, settle into position

#### Glass Card (`<GlassCard />`)
- Reusable container with glassmorphism styles
- Props: `children`, `padding`, `hover`, `glow` (boolean for Electric Blue shadow on hover)

#### Section Header (`<SectionHeader />`)
- Eyebrow label (uppercase, small, Electric Blue or Soft Ink)
- H2 headline
- Subheadline paragraph (max 2 lines)
- Centered or left-aligned variant

#### Animated Counter (`<AnimatedCounter />`)
- Counts up from 0 to target number on viewport entry
- Uses Intersection Observer + requestAnimationFrame
- Format: `[Prefix][Number][Suffix]` (e.g., "$2.3M", "40%", "3x")
- Duration: 2 seconds, ease-out

### 4.2 Page-Specific Components

#### Hero Section (`<HeroHome />`)
- Full viewport height (100vh), Cream background
- H1: "Every byte engineered for impact"
- Subheadline: "We design, build, and ship custom software for B2B enterprises—then stay accountable to the metrics that move your business."
- Primary CTA: "See the Numbers" → scrolls to case studies section
- Secondary CTA: "Start a Project" → /contact
- Floating ROI Pills: 3-5 pills with spring animation, positioned asymmetrically
- Subtle background: Very faint geometric grid or dot pattern (Ink Charcoal at 3% opacity)

#### Bento Grid (`<BentoGrid />`)
- CSS Grid: 3 columns desktop, 2 tablet, 1 mobile
- Cards span 1x1 or 2x1 (featured)
- Each card: Glassmorphism or solid Cream with shadow
- Card structure: Icon → Headline → Description → "Learn more" link
- Hover: Lift with shadow-lg, subtle Electric Blue border glow
- Staggered reveal animation on scroll

#### Case Study Card (`<CaseStudyCard />`)
- Image (16px radius) + content overlay
- Client logo or name
- One-line outcome: "40% efficiency increase for BAT"
- Industry tag (pill)
- "Read the case study" link
- Hover: Image subtle zoom (scale 1.02), content slide up

#### Team Member Card (`<TeamCard />`)
- Photo (rounded-2xl, 1:1 aspect ratio)
- Name + Role
- **One delivered metric**: "Reduced cloud spend by 60%"
- Verified links: StackOverflow icon + LinkedIn icon (external links)
- Hover: Subtle lift, links become Electric Blue

#### Blog Card (`<BlogCard />`)
- Featured image (16:10 aspect ratio)
- Category tag (pill)
- Title (H3)
- Excerpt (2 lines max)
- Read time + date
- "Read more" link

#### Contact Form (`<ContactForm />`)
- Fields: Name, Email, Company, Project Type (select), Budget Range (select), Message (textarea)
- Validation: Real-time with inline errors
- Submit button: Full-width pill, Electric Blue, loading state
- Success: Inline confirmation with next steps
- Privacy note below form

---

## 5. Animation & Motion Specification

### 5.1 Philosophy
Motion must feel **precise and purposeful**—never decorative. Every animation reinforces the "engineering" positioning.

### 5.2 Animation Tokens

| Token | Value | Usage |
|---|---|---|
| `duration-fast` | 150ms | Micro-interactions (button hover, link color) |
| `duration-base` | 300ms | Standard transitions (card hover, menu toggle) |
| `duration-slow` | 500ms | Page transitions, section reveals |
| `duration-dramatic` | 800ms | Hero entrance, counter animations |
| `ease-smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | Default ease |
| `ease-spring` | Framer Motion spring | Floating elements, ROI pills |
| `ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Dramatic entrances |

### 5.3 Scroll Behaviors

| Trigger | Behavior | Spec |
|---|---|---|
| **Section Reveal** | Fade up + translateY(24px → 0) | Trigger at 15% viewport entry, duration-slow, ease-smooth |
| **Bento Stagger** | Each card delays 100ms after previous | Same reveal animation, staggered |
| **Counter Count-up** | Number animates 0 → target | Trigger at 20% viewport, 2s duration, ease-out |
| **Parallax (subtle)** | Background elements move at 0.5x scroll speed | Only on hero background pattern |
| **Navbar Glass** | Background transitions transparent → glass | Trigger at 50px scroll, duration-fast |

### 5.4 Hero Entrance Sequence

1. **0ms**: Background pattern fades in (opacity 0 → 1, 600ms)
2. **200ms**: H1 fades up (translateY 20px → 0, opacity 0 → 1, 700ms, ease-out-expo)
3. **400ms**: Subheadline fades up (same, 600ms)
4. **600ms**: Primary CTA fades up + scales (scale 0.95 → 1, 500ms)
5. **700ms**: Secondary CTA fades up (400ms)
6. **800ms**: ROI Pills float in with spring physics (staggered 150ms each)

### 5.5 Hover States

| Element | Hover Effect | Duration |
|---|---|---|
| Primary Button | Scale 1.02, shadow-glow, brightness 1.05 | 150ms |
| Secondary Button | Background fills Ink Charcoal, text Cream | 200ms |
| Card | translateY(-4px), shadow-lg | 300ms |
| Link | Color → Electric Blue, underline slides in | 150ms |
| Image | Scale 1.02 (overflow hidden on container) | 400ms |

### 5.6 Page Transitions

- **Type**: Subtle ink-bleed or paper-slide
- **Implementation**: Next.js App Router with custom transition wrapper
- **Direction**: Fade + slight translateX (10px) for forward navigation, reverse for back
- **Duration**: 300ms

---

## 6. Technical Stack

### 6.1 Core Framework
| Technology | Version | Purpose |
|---|---|---|
| **Next.js** | 16+ (App Router) | React framework, SSR/SSG, routing, image optimization |
| **React** | 19+ | UI library |
| **TypeScript** | 5+ | Type safety |
| **Tailwind CSS** | 4+ | Utility-first styling |
| **shadcn/ui** | Latest | Pre-built accessible UI components (Button, Card, Dialog, Form, Input, etc.) |

### 6.2 Animation Libraries
| Technology | Purpose |
|---|---|
| **Framer Motion** | React animations, gestures, AnimatePresence, spring physics |
| **Intersection Observer API** | Scroll-triggered animations (native, no library needed) |

### 6.3 Data Layer
| Technology | Purpose |
|---|---|
| **Static Data / JSON** | Content served from local data files (no CMS required) |
| **Next.js Server Components** | Data fetching at build time |

### 6.4 Additional Dependencies
| Package | Purpose |
|---|---|
| `lucide-react` | Thin-line icon library |
| `class-variance-authority` | Component variant management (shadcn/ui dependency) |
| `clsx` + `tailwind-merge` | Conditional class merging (shadcn/ui dependency) |
| `tw-animate-css` | Animation utilities for shadcn/ui (Tailwind v4 replacement for tailwindcss-animate) [^3^] |
| `react-hook-form` | Form handling (contact form) |
| `zod` | Form validation schema |
| `@radix-ui/react-*` | Headless UI primitives (shadcn/ui foundation) |

### 6.5 shadcn/ui Installation
```bash
# Initialize project with Next.js 16 + shadcn/ui
npx shadcn@latest init --yes --template next --base-color stone

# Install required base components
npx shadcn@latest add button card input dialog form label textarea select badge

# Install animation library (shadcn/ui dependency)
npm install framer-motion

# All shadcn components are customized via Tailwind classes to match Paper & Ink design system
```

**shadcn/ui + Tailwind v4 Setup Notes:**
- shadcn/ui CLI auto-detects Tailwind v4 and uses CSS-first configuration [^5^]
- Components are installed into `components/ui/` and fully editable (copy-paste architecture)
- Base color `stone` selected to align with warm Cream (#FAF9F6) palette
- Tailwind v4 uses `@theme` directive in CSS instead of JS config file [^3^]

### 6.6 Development Tools
| Tool | Purpose |
|---|---|
| **ESLint** | Code linting |
| **Prettier** | Code formatting |
| **Tailwind CSS IntelliSense** | IDE support |

---

## 7. Project Structure

```
iobytes-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (fonts, metadata, global providers)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Tailwind directives, custom properties, keyframes
│   ├── solutions/
│   │   └── page.tsx
│   ├── case-studies/
│   │   ├── page.tsx              # Case studies index
│   │   └── [slug]/
│   │       └── page.tsx          # Individual case study
│   ├── brain-trust/
│   │   └── page.tsx
│   ├── insights/
│   │   ├── page.tsx              # Blog index
│   │   └── [slug]/
│   │       └── page.tsx          # Individual article
│   └── contact/
│       └── page.tsx
│
├── components/                   # React components
│   ├── ui/                       # shadcn/ui primitives (auto-installed via CLI) + custom components
│   │   ├── button.tsx            # shadcn/ui — customized with Paper & Ink tokens
│   │   ├── card.tsx              # shadcn/ui — customized with Paper & Ink tokens
│   │   ├── input.tsx             # shadcn/ui — customized with Paper & Ink tokens
│   │   ├── dialog.tsx            # shadcn/ui — if needed for modals
│   │   ├── form.tsx              # shadcn/ui — if needed for complex forms
│   │   ├── badge.tsx             # shadcn/ui — for tags/labels
│   │   ├── GlassCard.tsx         # CUSTOM: glassmorphism card wrapper
│   │   ├── ROIPill.tsx           # CUSTOM: ROI metric floating badge
│   │   ├── SectionHeader.tsx     # CUSTOM: eyebrow + headline + subhead block
│   │   └── AnimatedCounter.tsx   # CUSTOM: count-up number animation
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   ├── sections/
│   │   ├── HeroHome.tsx
│   │   ├── BentoGrid.tsx
│   │   ├── CaseStudiesPreview.tsx
│   │   ├── ROISection.tsx
│   │   ├── TrustSignals.tsx
│   │   └── CTABanner.tsx
│   └── shared/
│       ├── CaseStudyCard.tsx
│       ├── BlogCard.tsx
│       ├── TeamCard.tsx
│       └── ContactForm.tsx
│
├── lib/                          # Utilities & configuration
│   ├── utils.ts                  # cn() helper, formatters
│   ├── data.ts                   # Static data imports and types
│   ├── animations.ts             # Shared animation variants (Framer Motion)
│   └── constants.ts              # Site metadata, navigation links
│
├── types/                        # TypeScript interfaces
│   ├── caseStudy.ts
│   ├── team.ts
│   ├── blog.ts
│   └── index.ts
│
├── hooks/                        # Custom React hooks
│   ├── useScrollPosition.ts
│   ├── useInView.ts
│   └── useAnimatedCounter.ts
│
├── public/                       # Static assets
│   ├── images/
│   │   ├── logo.png              # iobytes logo
│   │   ├── team/
│   │   ├── case-studies/
│   │   └── blog/
│   └── fonts/                    # If using custom fonts
│

├── app/globals.css               # Tailwind v4 CSS-first config (@theme)
├── next.config.ts                # Next.js configuration
├── tsconfig.json
└── package.json

> **Note:** `tailwind.config.ts` is not needed in Tailwind v4 — all configuration is in `app/globals.css`
```

---

## 8. Tailwind Configuration

```css
/* app/globals.css — Tailwind CSS v4 + shadcn/ui CSS-first configuration */
@import "tailwindcss";
@import "tw-animate-css";

@theme {
  /* iobytes Paper & Ink Palette */
  --color-cream: #FAF9F6;
  --color-ink: #1A1A1A;
  --color-soft-ink: #4A4A4A;
  --color-warm-gray: #E8E6E1;
  --color-electric: #55B3E8;

  /* shadcn/ui semantic mappings (required for shadcn components) */
  --color-background: #FAF9F6;
  --color-foreground: #1A1A1A;
  --color-card: #FAF9F6;
  --color-card-foreground: #1A1A1A;
  --color-primary: #55B3E8;
  --color-primary-foreground: #1A1A1A;
  --color-secondary: #E8E6E1;
  --color-secondary-foreground: #1A1A1A;
  --color-muted: #E8E6E1;
  --color-muted-foreground: #4A4A4A;
  --color-border: #E8E6E1;
  --color-input: #E8E6E1;
  --color-ring: #55B3E8;

  /* Typography */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Geometry */
  --radius-pill: 9999px;
  --radius-card: 16px;
  --radius-button: 12px;
  --radius-lg: 16px;
  --radius-md: 12px;
  --radius-sm: 8px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(26,26,26,0.05);
  --shadow-md: 0 4px 12px rgba(26,26,26,0.08);
  --shadow-lg: 0 8px 24px rgba(26,26,26,0.12);
  --shadow-glow: 0 0 24px rgba(85,179,232,0.25);

  /* Effects */
  --backdrop-blur-glass: 12px;
}

/* Custom animations */
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-fade-up {
  animation: fadeUp 0.7s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* shadcn/ui base layer overrides */
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
```

> **Tailwind CSS v4 + shadcn/ui Note:** 
> - Configuration is now CSS-first using `@theme` in `globals.css` — no `tailwind.config.ts` file needed
> - shadcn/ui is fully compatible with Tailwind v4 and React 19 [^5^]
> - The shadcn/ui CLI (`npx shadcn@latest init`) auto-detects Tailwind v4 and generates compatible components
> - Use `npx shadcn@latest add [component]` to install primitives (button, card, input, dialog, form, etc.)
> - shadcn/ui components use Radix UI primitives under the hood for accessibility and behavior

---

## 9. Animation Variants (Framer Motion)

```typescript
// lib/animations.ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const springFloat = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export const scaleOnHover = {
  scale: 1.02,
  transition: { duration: 0.15 },
};

export const heroSequence = {
  background: { opacity: [0, 1], transition: { duration: 0.6 } },
  headline: { opacity: [0, 1], y: [20, 0], transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] } },
  subheadline: { opacity: [0, 1], y: [20, 0], transition: { duration: 0.6, delay: 0.4 } },
  cta: { opacity: [0, 1], scale: [0.95, 1], transition: { duration: 0.5, delay: 0.6 } },
};
```

---

## 10. Responsive Breakpoints

| Name | Width | Tailwind Prefix | Usage |
|---|---|---|---|
| Mobile | < 640px | (default) | Single column, stacked layout |
| Tablet | 640px - 1023px | `sm:` | 2-column grids, adjusted spacing |
| Desktop | 1024px - 1279px | `lg:` | Full layout, 3-column grids |
| Wide | 1280px+ | `xl:` | Max container width, enhanced spacing |

**Mobile-First Approach:**
- Design for mobile first, enhance for larger screens
- Touch targets: minimum 44x44px
- Navigation collapses to hamburger below `lg`
- Hero text scales: H1 at 40px mobile, 64px desktop

---

## 11. Performance Requirements

| Metric | Target | Implementation |
|---|---|---|
| **Lighthouse Performance** | 90+ | Image optimization, code splitting, font loading |
| **First Contentful Paint** | < 1.5s | Priority loading for above-fold content |
| **Largest Contentful Paint** | < 2.5s | Next.js Image component, proper sizing |
| **Time to Interactive** | < 3.5s | Lazy load below-fold, defer non-critical JS |
| **Cumulative Layout Shift** | < 0.1 | Explicit image dimensions, font display swap |

**Implementation Notes:**
- Use Next.js `<Image>` with proper `width`/`height` or `fill` + `sizes`
- Lazy load all below-fold images and components
- Use `next/font` for optimized font loading with `display: swap`
- Implement `loading="lazy"` for non-critical images
- Code-split page components with dynamic imports where beneficial

---

## 12. SEO & Metadata

### 12.1 Global Metadata
```typescript
// app/layout.tsx
export const metadata = {
  title: {
    default: "iobytes — Every byte engineered for impact",
    template: "%s | iobytes",
  },
  description: "We design, build, and ship custom software for B2B enterprises—then stay accountable to the metrics that move your business.",
  keywords: ["enterprise software", "B2B technology", "custom software development", "ROI engineering"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "iobytes",
  },
  twitter: {
    card: "summary_large_image",
  },
};
```

### 12.2 Page-Specific Titles
| Page | Title |
|---|---|
| Home | `iobytes — Every byte engineered for impact` |
| Solutions | `Enterprise Solutions | iobytes` |
| Case Studies | `Case Studies & ROI Proof | iobytes` |
| Brain Trust | `The Brain Trust | iobytes` |
| Insights | `Insights & Engineering Perspectives | iobytes` |
| Contact | `Start a Project | iobytes` |

---

## 13. Accessibility Requirements

| Requirement | Implementation |
|---|---|
| **WCAG 2.1 AA** | Minimum compliance target |
| **Color Contrast** | All text meets 4.5:1 ratio (Ink on Cream, Cream on Ink) |
| **Keyboard Navigation** | All interactive elements focusable and operable |
| **Focus Indicators** | Visible focus rings (2px Electric Blue outline) |
| **Reduced Motion** | Respect `prefers-reduced-motion` media query |
| **Semantic HTML** | Proper heading hierarchy, landmarks, ARIA labels |
| **Alt Text** | All images have descriptive alt text |
| **Form Labels** | All inputs have associated labels |

**Reduced Motion Implementation:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 14. Content Tone & Copy Rules

### 14.1 Voice Guidelines
- **Lead with outcomes, back with method**
- **Use specific numbers** even in headlines
- **Write like a strategic partner, not a vendor**
- **Keep sentences short and declarative**
- **One-line test:** "Does this sound like a firm that gets paid for outcomes, or for hours?"

### 14.2 Section Copy Skeletons

#### Home Page
- **Hero**: "Every byte engineered for impact" + subheadline + CTAs
- **ROI Section**: 3-6 floating pills with real metrics
- **Solutions Preview**: 4-6 bento cards with outcome-focused headlines
- **Case Studies Preview**: 3 featured case studies with metrics
- **Trust Signals**: Client logos, testimonials, certifications
- **CTA Banner**: "Let's Engineer Your Next Outcome"

#### Solutions Page
- **Hero**: "Built to Move Your Numbers"
- **Bento Grid**: Each card = [Outcome] + [Capability]
  - "Automate the repetitive. Reclaim 30% of your team's week."
  - "Connect your silos. One source of truth, zero data drift."
  - "Scale without breaking. Architecture that grows with your revenue."

#### Case Study Template
```
[Client Logo]
[Industry Tag]

Headline: "[Metric] [Outcome] for [Client]"
Subhead: "[Specific action] resulting in [business outcome] in [timeframe]"

Challenge: [2-3 sentences]
Approach: [2-3 sentences]
Results: [Bullet points with metrics]
Testimonial: [Quote + attribution]

CTA: "See How We Can Move Your Numbers"
```

#### Brain Trust Page
- **Headline**: "Meet the Engineers Behind Your Outcomes"
- **Team Cards**: Name + Role + One delivered metric + Verified links

#### Contact Page
- **Headline**: "Let's Engineer Your Next Outcome"
- **Subhead**: "Tell us what you're trying to move. We'll tell you how we'd move it."
- **Form**: Fields + validation + privacy note

---

## 16. Implementation Checklist

### Phase 1: Foundation
- [ ] Initialize Next.js 16.2 project with TypeScript, App Router
- [ ] Initialize shadcn/ui with Tailwind CSS 4 (`npx shadcn@latest init`)
- [ ] Configure Tailwind CSS v4 tokens in `globals.css` using `@theme`
- [ ] Set up project folder structure
- [ ] Configure fonts (Inter, JetBrains Mono) via `next/font`
- [ ] Set up ESLint + Prettier
- [ ] Create base layout with metadata
- [ ] Install shadcn/ui base components: button, card, input, dialog, form
- [ ] Customize shadcn/ui components to match Paper & Ink design system
- [ ] Build Navbar component (responsive, glassmorphism)
- [ ] Build Footer component

### Phase 2: Core UI Components
- [ ] Button component (primary, secondary, variants)
- [ ] Card / GlassCard component
- [ ] ROIPill component
- [ ] SectionHeader component
- [ ] AnimatedCounter component
- [ ] Input / Textarea / Select components
- [ ] Container wrapper component

### Phase 3: Home Page
- [ ] Hero section with entrance animations
- [ ] ROI pills with spring physics
- [ ] Solutions preview (bento grid)
- [ ] Case studies preview section
- [ ] Trust signals section
- [ ] CTA banner section

### Phase 4: Content Pages
- [ ] Solutions page (full bento grid)
- [ ] Case studies index page
- [ ] Individual case study page template
- [ ] Brain Trust page (team grid)
- [ ] Insights blog index
- [ ] Individual blog article page
- [ ] Contact page with form

### Phase 5: Content Integration
- [ ] Create TypeScript data files for case studies, team members, blog posts
- [ ] Build data types/interfaces in `types/` folder
- [ ] Import static data in Server Components
- [ ] Map data to page components (CaseStudyCard, TeamCard, BlogCard)

### Phase 6: Polish & Optimization
- [ ] Implement all scroll-triggered animations
- [ ] Add page transitions
- [ ] Optimize images and assets
- [ ] Implement reduced motion support
- [ ] Accessibility audit (keyboard, screen reader, contrast)
- [ ] Performance audit (Lighthouse 90+)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] SEO verification (meta tags, structured data)

### Phase 7: Deployment
- [ ] Configure build settings
- [ ] Deploy to Vercel (recommended for Next.js)
- [ ] Set up custom domain
- [ ] Configure analytics (Plausible or Fathom — privacy-focused)
- [ ] Set up contact form endpoint (Formspree, Resend, or API route)

---

## 17. Asset Requirements

### 17.1 Images Needed
| Asset | Dimensions | Format | Notes |
|---|---|---|---|
| Logo | SVG preferred, PNG fallback | Transparent | From existing logo.png |
| Hero background pattern | 1920x1080 | SVG or PNG | Faint geometric grid, Ink at 3% opacity |
| Case study hero images | 1200x800 | WebP/AVIF | Client project screenshots |
| Team member photos | 800x800 | WebP/AVIF | 1:1 ratio, professional headshots |
| Blog cover images | 1200x750 | WebP/AVIF | 16:10 ratio |
| Client logos | Variable | SVG | For trust signals section |

### 17.2 Favicon
- SVG favicon (dark/light mode support)
- PNG fallback: 32x32, 180x180 (Apple touch)
- Mask icon for Safari pinned tabs

---

## 18. Notes for AI Agent Implementation

### 18.1 Priority Order
1. **Start with design system** — colors, typography, spacing, components
2. **Build layout shell** — Navbar + Footer + page wrapper
3. **Implement Home page** — this is the conversion engine
4. **Add remaining pages** — follow the sitemap order
5. **Integrate content last** — use static mock data initially, organize in data files

### 18.2 Mock Data Strategy
Use realistic placeholder data that matches the tone and format of real content:
- Case studies: Use BAT, Agroshift, Factorynext, RR, Healthcare drafts
- Team: Create 4-6 realistic profiles with metrics
- Blog: 3-4 placeholder articles with proper structure

### 18.3 Animation Approach
- Use Framer Motion's `motion` components and `AnimatePresence`
- Create reusable animation variants in `lib/animations.ts`
- Implement `useInView` hook for scroll triggers
- Always wrap animations in `prefers-reduced-motion` checks

### 18.4 Common Pitfalls to Avoid
- Don't use Electric Blue for large backgrounds or body text
- Don't skip mobile-first responsive design
- Don't forget loading states for async content
- Don't hardcode content — organize in structured data files for easy updates
- Don't over-animate — every motion must serve a purpose
- Don't modify shadcn/ui component internals — customize via Tailwind classes and CSS variables only
- Don't create a `tailwind.config.ts` — Tailwind v4 uses CSS-first `@theme` in `globals.css`

### 18.5 Quality Gates
Before marking any section complete, verify:
- [ ] Responsive at all breakpoints
- [ ] Animations respect `prefers-reduced-motion`
- [ ] All interactive elements have focus states
- [ ] Color contrast meets WCAG AA
- [ ] Images have alt text
- [ ] No layout shift on load
- [ ] shadcn/ui components maintain accessibility (keyboard navigation, ARIA labels)
- [ ] Custom components follow shadcn/ui composition patterns (Radix UI primitives where applicable)

---

**Document Version:** 1.0  
**Last Updated:** 2026-05-04  
**Status:** Ready for Implementation
