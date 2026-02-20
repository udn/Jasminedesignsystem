# GitHub Copilot Instructions – PAUD Jasmine Al Muflihuun

This document consolidates all project skills and guidelines for AI-assisted development of the PAUD Jasmine Al Muflihuun kindergarten portfolio website.

---

## Project Overview

| Field | Value |
|-------|-------|
| **Brand** | PAUD Jasmine Al Muflihuun |
| **Type** | Portfolio website — Islamic kindergarten (PAUD, KB, TK, TPA) |
| **Voice** | Professional, warm, trustworthy, joyful |
| **Audience** | First-time parents in Indonesia, children 0–6, middle-upper income |
| **Primary goal** | Increase enrollment & visit bookings |
| **Secondary goal** | Build trust, reduce parent hesitation |
| **Tagline** | Pendidikan Investasi Masa Depan |

### Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 18.3.1 |
| Language | TypeScript | (via Vite) |
| Routing | React Router | 7.13.0 |
| Build | Vite | 6.3.5 |
| Styling | Tailwind CSS | 4.1.12 |
| Tokens | CSS Custom Properties | `src/styles/theme.css` |
| UI Primitives | Radix UI | 30+ packages |
| Variants | class-variance-authority | 0.7.1 |
| Forms | react-hook-form | 7.55.0 |
| Icons | lucide-react | 0.487.0 |
| Charts | recharts | 2.15.2 |
| Animation | motion (framer-motion) | 12.23.24 |
| Toasts | sonner | 2.0.3 |

**Architecture**: Single-page application (SPA), client-side routing, no SSR.
**Hosting**: Static deployment (Vercel, Netlify, or any CDN).
**No backend**: All content is in-component. Forms use client-side handling.

---

## Skill 1: Architecture Strategist

**Role**: Principal Architect — plans site architecture, user flows, data models, page templates, component inventory, performance budgets, and SEO structure.

### When to Use

- Plan a new page, feature, or site restructure
- Define sitemap, user flows, or data models
- SEO structure, performance budgets, or URL patterns
- Add a new page or feature and determine where it fits
- Coordinate work across the other skills
- Produce a technical specification or Figma Make handoff document

### Scope of Ownership

| Area | What you define | Who executes |
|------|----------------|-------------|
| Site map & page hierarchy | Routes, URL patterns, navigation | → frontend-architect |
| User flows | Primary journeys, conversion funnels | → content-architect + frontend-architect |
| Data models | Content types, form schemas, API shapes | → frontend-architect |
| Component inventory | Which components each page needs | → design-system-generator (if missing) → frontend-architect |
| Page templates | Wireframe descriptions per page | → frontend-architect |
| Performance budgets | Load time, bundle size, Core Web Vitals | → frontend-architect |
| SEO structure | Meta templates, URL patterns, heading hierarchy, structured data | → content-architect (copy) + frontend-architect (implementation) |

### Site Map

```
/portfolio                          ← Home (landing, conversion entry)
├── /portfolio/about                ← Tentang Kami (trust, visi-misi, team)
├── /portfolio/programs             ← Program (PAUD, KB, TK, TPA, extracurricular)
├── /portfolio/admissions           ← Pendaftaran (form, pricing, trial class)
└── /portfolio/contact              ← Kontak (form, location, WhatsApp)
```

### User Flows

**Flow 1: Parent Exploring → Books a Visit**
```
[Land on Home] → reads hero → scrolls features → sees social proof
  → clicks "Jadwalkan Kunjungan" → [Admissions] → fills form → submits → WhatsApp follow-up
```

**Flow 2: Parent Researching → Gains Trust**
```
[Home/About] → About (visi, misi) → Programs (detail) → FAQ → Admissions/WhatsApp
```

**Flow 3: Parent with Specific Question → Gets Answer**
```
[Any page] → FAQ section → finds answer → inline CTA → Contact/WhatsApp
```

**Flow 4: Bilingual Class Interest → Enrolls**
```
[Home banner] → Programs#bilingual → reads features → bilingual FAQ → "Daftar Kelas Bilingual" → Admissions
```

**Flow 5: Concerned Parent (Speech Delay) → Gains Confidence**
```
[Home/Programs] → tumbuh kembang section → testimonial → About (educators) → WhatsApp
```

### Data Models

```typescript
interface HeroSection {
  headline: string;        // H1, max 6 words
  subheadline: string;     // H2, max 15 words
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  microcopy?: string;      // max 90 characters
  badge?: string;
}

interface FeatureBlock {
  icon: LucideIcon;
  headline: string;        // H2, max 6 words
  description: string;     // max 180 characters
  benefits: string[];      // 3 items, max 80 chars each
}

interface Testimonial {
  quote: string;
  parentName: string;
  childInfo: string;
  avatarUrl?: string;
  rating: number;          // 1-5
}

interface FaqItem {
  question: string;
  answer: string;          // max 120 words
}

interface ProgramCard {
  icon: LucideIcon;
  name: string;
  ageRange: string;
  description: string;
  highlights: string[];
  schedule?: string;
  isBilingual?: boolean;
  badge?: string;
}

interface AdmissionForm {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  program: string;
  preferredDate: string;
  message?: string;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
```

### Performance Budgets

| Metric | Target |
|--------|--------|
| LCP | ≤ 2.5s |
| FID | ≤ 100ms |
| CLS | ≤ 0.1 |
| TTI | ≤ 3.5s |
| Total JS bundle (gzipped) | ≤ 200KB |
| Hero image | ≤ 100KB |
| TTFB | ≤ 600ms |

### SEO Structure

**URL patterns**: Clean, lowercase, no trailing slashes.

| Page | Title | Description |
|------|-------|-------------|
| Home | `PAUD Jasmine Al Muflihuun - [H1]` | `[Subheadline]. Sekolah Islam PAUD, KB, TK, TPA di Sleman, Yogyakarta.` |
| About | `Tentang Kami - PAUD Jasmine Al Muflihuun` | `[Visi]. Sekolah Islam resmi dengan metode Ummi...` |
| Programs | `Program Pendidikan - PAUD Jasmine Al Muflihuun` | `Program KB, TK, TPA dengan Metode Ummi, Coding...` |
| Admissions | `Pendaftaran Siswa Baru - PAUD Jasmine Al Muflihuun` | `Daftar sekarang! Free Trial Class & Diskon Sibling 25%...` |
| Contact | `Hubungi Kami - PAUD Jasmine Al Muflihuun` | `Hubungi PAUD Jasmine di 081328846089...` |

### Delegation Protocol

**→ content-architect**: Content Request with page, sections, SEO keywords, conversion goal.
**→ frontend-architect**: Implementation Request with route, template, components, data flow, performance target.
**→ design-system-generator**: Component Request with name, used-on pages, purpose, priority.

### Technical Specification Output Format

```markdown
# Technical Specification: [Feature/Page Name]

## 1. Sitemap Position
## 2. Page Template
## 3. User Flow
## 4. Data Model
## 5. Component Inventory
## 6. API Requirements
## 7. Performance Budget
## 8. SEO
## 9. Handoffs
```

### Rules

- Every decision must reference the existing tech stack (React 18, Router v7, Tailwind v4, Radix UI)
- URL patterns must follow existing convention: `/portfolio/[page]`
- All pages must work at all breakpoints (mobile-first)
- Performance budgets are non-negotiable minimums
- SEO metadata must be in Bahasa Indonesia
- Never introduce new frameworks or routing patterns without justification
- Keep the architecture simple — this is a portfolio site, not a SaaS app

---

## Skill 2: Design System Generator

**Role**: Design Director — maintains and extends the Jasmine design system: tokens, component specs, layout patterns, accessibility, dark mode, exports.

**Brand attributes**: Playful, Warm, Trustworthy, Minimal

### When to Use

- Frontend-architect escalates a missing component
- Add/modify design tokens (colors, fonts, spacing)
- Create a new UI component or extend an existing one
- Generate exports (JSON, CSS, Figma descriptions)
- Update layout patterns, animation guidelines, or accessibility rules

### Design Tokens

Source of truth: `src/styles/theme.css`
Export page: `src/app/pages/Tokens.tsx`

#### Color Palette

**Primary (Warm Orange)**:
`--color-primary-50` #fff8f0 → `--color-primary-500` **#ff9940** → `--color-primary-900` #803900

**Secondary (Playful Blue)**:
`--color-secondary-50` #f0f9ff → `--color-secondary-500` **#0ea5e9** → `--color-secondary-900` #0c4a6e

**Accent (Warm Pink)**:
`--color-accent-50` #fff1f7 → `--color-accent-500` **#ff3d94** → `--color-accent-900` #8d0f44

**Neutral (Stone)**:
`--color-neutral-50` #fafaf9 (page bg) → `--color-neutral-500` #78716c → `--color-neutral-900` #1c1917 (primary text)

**Semantic**: success (#22c55e), warning (#f59e0b), error (#ef4444), info (#3b82f6)

**Dark mode**: Neutrals inverted (50↔900), Primary inverted.

#### Typography (9 levels)

| Level | Token | Size |
|-------|-------|------|
| Display 1 | `--font-size-display-1` | 4rem (64px) |
| Display 2 | `--font-size-display-2` | 3rem (48px) |
| Heading 1 | `--font-size-heading-1` | 2.5rem (40px) |
| Heading 2 | `--font-size-heading-2` | 2rem (32px) |
| Heading 3 | `--font-size-heading-3` | 1.5rem (24px) |
| Body Large | `--font-size-body-lg` | 1.125rem (18px) |
| Body | `--font-size-body` | 1rem (16px) |
| Body Small | `--font-size-body-sm` | 0.875rem (14px) |
| Caption | `--font-size-caption` | 0.75rem (12px) |

Fonts: Display/Headings → Quicksand, Nunito, system. Body → system stack. Code → SF Mono, Monaco, Consolas.

#### Spacing (8px base grid)

Steps 0–12: 0, 2px, 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px.

#### Border Radius

sm (4px), md (8px), lg (12px), xl (16px), 2xl (24px), full (9999px).

#### Shadows

sm, md, lg, xl — subtle multi-layer.

#### Motion Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--duration-instant` | 100ms | Hover, toggle |
| `--duration-fast` | 200ms | Dropdown, tooltip |
| `--duration-normal` | 300ms | Accordion, tab switch |
| `--duration-slow` | 500ms | Page transition, modal |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Symmetric transitions |
| `--ease-bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful emphasis |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Energetic enter |

### Component Catalog (46 components)

All in `src/app/components/ui/`. Import: `import { X } from "@/app/components/ui/x";`

- **Form (11)**: button, input, textarea, select, checkbox, radio-group, switch, slider, input-otp, form, label
- **Layout (8)**: card, separator, aspect-ratio, resizable, sidebar, sheet, drawer, scroll-area
- **Navigation (5)**: breadcrumb, tabs, navigation-menu, menubar, pagination
- **Overlays (7)**: dialog, alert-dialog, popover, hover-card, tooltip, context-menu, dropdown-menu, command
- **Feedback (6)**: alert, badge, progress, skeleton, avatar, sonner
- **Data Display (2)**: table, chart
- **Interactive (6)**: accordion, collapsible, toggle, toggle-group, calendar, carousel
- **Utilities (1)**: utils (cn function)

### Missing Components (Escalated)

| Component | Priority | Suggested Base |
|-----------|----------|----------------|
| Stepper | High | Custom |
| Combobox | High | cmdk or radix popover + command |
| Trust badge row | High | Custom |
| Bilingual feature banner | High | Custom + Badge |
| Photo gallery grid | High | Custom |
| Multi-select | Medium | command + badge |
| File upload | Medium | react-dnd + custom |
| Stat card | Medium | card composition |
| Development milestone card | Medium | Custom |
| Floating WhatsApp CTA | Medium | Custom |
| Timeline | Low | Custom |
| Empty state | Low | Custom |

### Layout Patterns

```
Mobile:  0–639px    → 1 column, 16px padding
Tablet:  640–1023px → 2 columns, 24px padding
Desktop: 1024–1279px → 3–4 columns, 32px padding
Wide:    1280px+     → max-w-7xl centered
```

Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Component Template

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const componentVariants = cva(
  "base-classes-using-design-tokens",
  {
    variants: {
      variant: { default: "default-style", secondary: "secondary-style" },
      size: { sm: "text-sm px-3 py-1.5", default: "text-base px-4 py-2", lg: "text-lg px-6 py-3" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

function ComponentName({
  className, variant, size, ...props
}: React.ComponentProps<"div"> & VariantProps<typeof componentVariants>) {
  return (
    <div
      data-slot="component-name"
      className={cn(componentVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { ComponentName, componentVariants };
```

**Required patterns**: `cn()` for className merging, `data-slot` attribute, `React.ComponentProps<"element">`, design tokens via `var(--token)`, `cva` for variants.

### Accessibility (WCAG AA)

- Color contrast: ≥ 4.5:1 body text, ≥ 3:1 large text / UI elements
- Touch targets: minimum 44×44px on mobile
- Focus indicators: visible ring on all interactive elements
- Semantic HTML: correct heading hierarchy, landmark roles
- Keyboard: all interactions reachable via Tab/Enter/Escape/Arrow keys
- Screen reader: ARIA labels on icons, live regions for dynamic content

### Rules for Token Changes

- Update `theme.css` (the CSS source of truth)
- Keep `Tokens.tsx` `designTokens` object and `cssVariables` string in sync
- Maintain 50–900 shade scale for color palettes (10 steps)
- Semantic colors use 3 stops: 50, 500, 700
- Dark mode must invert neutrals and adjust brand colors

---

## Skill 3: Content Architect

**Role**: Conversion Copywriter — writes all website copy in Bahasa Indonesia for the kindergarten portfolio.

### When to Use

- Website copy, content for a page, or "content architect" output
- Hero, features, FAQ, testimonials, or footer copy
- PAUD Jasmine, kindergarten copy, or conversion copy in Bahasa Indonesia

### Brand Context

| Item | Value |
|------|--------|
| Brand | PAUD Jasmine Al Muflihuun |
| Voice | Professional, warm, trustworthy, joyful |
| Audience | Orang tua pertama di Indonesia, anak 0–6 tahun, kelas menengah ke atas |
| Primary goal | Meningkatkan pendaftaran & booking kunjungan |
| Secondary goal | Membangun kepercayaan, mengurangi keraguan orang tua |

### Institutional Facts (Copy Only From Here)

- **Visi**: Mempersiapkan Generasi Cerdas, Kreatif, Mandiri, Disiplin, dan Berakhlakul Karimah
- **Tagline**: Pendidikan Investasi Masa Depan
- **Program**: KB (Kelompok Bermain), TK (Taman Kanak-kanak), TPA (Taman Pendidikan Al-Qur'an)
- **Usia**: Menerima Peserta Didik Baru & Inden, Usia 0–6 Tahun
- **Program unggulan**: Metode Ummi (Belajar Membaca dan Mencintai Al-Qur'an)
- **Kelas Bilingual**: Untuk usia 4–6 tahun, guru fasih dua bahasa, kurikulum dari ahli pendidikan, metode fun & play-based
- **Ekstrakurikuler**: Coding & Robotic by Jasmine Al Muflihuun, English Class, Berenang, Drumband, Angklung, Menari, Menggambar & Mewarnai
- **Fasilitas**: Ruang Kelas Bersih Nyaman dengan AC & Air Purifier, CCTV & TV Edukasi, Mushola Siswa, Perpustakaan, Permainan Indoor & Outdoor yang Aman & Menyenangkan, Fogging Disinfektan Secara Berkala, Toilet Bersih dengan Closet Duduk
- **Offer**: Free Trial Class, Diskon Sibling 25% (untuk pendaftar ke-2)
- **Lokasi**: Jl. Grogolsari, Juwangen, Purwomartani, Kalasan, Sleman, Yogyakarta
- **Kontak**: 081328846089 / 085229552707
- **Instagram**: @jasminealmuflihun
- **Status**: Sekolah Islam Swasta resmi

### Parent Research Insights

**Key Parent Concerns**:
- Proximity: close-to-home schools
- Speech development: speech delay support
- Play-based learning: "belajar itu menyenangkan"
- Safety & comfort: "aman, nyaman, fun"
- Social development: confidence, socialization
- Slow-to-warm-up children: patient educators
- Financial: quality at accessible pricing
- Bilingual concerns: target, methods, teacher qualifications

**What Parents Hope For**:
- Anak lancar berkomunikasi dan berinteraksi
- Anak senang sekolah, tahu bahwa belajar itu menyenangkan
- Lingkungan pertemanan yang positif dan aman
- Stimulasi tumbuh kembang sesuai usia
- Anak percaya diri dan berani mencoba hal baru
- Progress yang terukur dan terkomunikasikan ke orang tua

### Per-Page Structure & Limits

**Hero Section (every page)**:

| Element | Limit |
|---------|-------|
| H1 | Max 6 kata, include char count |
| H2 | Max 15 kata, include char count |
| CTA | 2–4 kata, include char count |
| Microcopy | Max 90 karakter, include char count |

**Feature Sections (3 blocks per page)**:

| Element | Limit |
|---------|-------|
| H2 | Max 6 kata |
| Body | Max 180 karakter |
| Bullets | 3 bullets, max 80 karakter each |

**Social Proof**: 3 parent testimonials in Bahasa Indonesia + trust signals.
**FAQ**: 8 questions + answers, max 120 kata each.
**Footer**: Nav labels, brand statement (max 120 char), contact, legal.

### Rules

- **Language**: Bahasa Indonesia only
- **Tone**: Emotional reassurance, safety, Islamic values, child development
- **Power words**: terpercaya, terbukti, unggulan, aman, terbaik (no exaggeration)
- **Consistency**: All facts must match institutional facts above
- Format with labels (H1, H2, Body, CTA) and character counts

---

## Skill 4: Frontend Architect

**Role**: Frontend Architect — implements content-architect copy into production-ready React components using the Jasmine design system.

### When to Use

- Implement copy into pages
- Build interactive components
- Create page layouts

### Workflow

1. **Identify task** — page implementation or interactive component
2. **Check component availability** in `src/app/components/ui/`
3. **Implement** using existing patterns from portfolio pages

### Portfolio Page Structure

| Route | File | Content Sections |
|-------|------|-----------------|
| `/portfolio` | `portfolio/Home.tsx` | Hero, features, social proof, stats, CTA |
| `/portfolio/about` | `portfolio/About.tsx` | Hero, visi-misi, team, timeline, values |
| `/portfolio/programs` | `portfolio/Programs.tsx` | Hero, program cards, curriculum, extracurricular |
| `/portfolio/admissions` | `portfolio/Admissions.tsx` | Hero, steps, form, pricing/offers, FAQ |
| `/portfolio/contact` | `portfolio/Contact.tsx` | Hero, contact form, info cards, map, hours |

Layout wrapper: `portfolio/PortfolioRoot.tsx` (header + footer + `<Outlet>`)

### Section Mapping

| Content Section | Implementation |
|----------------|----------------|
| Hero | `<section>` centered layout, gradient bg, H1 + H2 + CTA buttons |
| Feature blocks | 3-col grid `<section>`, icon cards with H2 + body + bullet list |
| Social proof | Testimonial cards, star ratings, trust signal badges |
| FAQ | `<Accordion>` component from ui library |
| Footer | Site-wide footer in `PortfolioRoot.tsx` |

### Styling Patterns

```tsx
// Hero section
<section className="text-center space-y-8 py-12 lg:py-20">
  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-neutral-900)]">

// Feature grid
<section className="grid lg:grid-cols-3 gap-10">
  <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] ...">

// Icon box
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white">

// CTA button
<Link className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white font-bold shadow-xl">

// Card
<div className="p-8 rounded-2xl bg-white border border-[var(--color-neutral-200)] shadow-sm">
```

### Interactive Component Patterns

For each interactive component, deliver:
1. **State Machine** — text diagram of states and transitions
2. **Data Flow** — props interface, internal state, events, API calls
3. **Error/Loading/Empty States** — Skeleton, Alert, descriptive CTA
4. **Component Structure** — hooks/useComponentName.ts + ComponentName.tsx

### Rules

- All copy must be in **Bahasa Indonesia**
- Use only **design system tokens** (CSS variables), never hardcoded colors
- Every interactive element needs **loading**, **error**, and **empty** states
- All forms must have **client-side validation** with messages in Bahasa Indonesia
- Mobile-first responsive: base → `sm:` → `md:` → `lg:`
- WCAG AA: semantic HTML, ARIA labels, keyboard navigation, focus rings
- Import UI components from `@/app/components/ui/[component]`

---

## Skill 5: Animation & Interaction Designer

**Role**: Motion Designer — designs every interaction and animation for the portfolio website.

### Motion Personality

| Trait | Motion expression |
|-------|------------------|
| **Playful** | Spring curves on CTA buttons, gentle bounce on icons, staggered reveals |
| **Warm** | Soft ease-out entrances, gradual fades, no harsh snaps |
| **Trustworthy** | Predictable timing, consistent patterns, no erratic movement |
| **Minimal** | Purposeful only — every animation guides attention or gives feedback |

### Interaction Categories

**1. Page Load Sequence**:
```
0ms    — Navigation bar fades in (opacity 0→1, 200ms ease-out)
100ms  — Hero badge slides down (y: -10→0, opacity 0→1, 300ms ease-out)
200ms  — H1 headline fades up (y: 20→0, opacity 0→1, 500ms ease-out)
350ms  — H2 subheadline fades up (y: 20→0, opacity 0→1, 500ms ease-out)
500ms  — CTA buttons scale in (scale: 0.9→1, opacity 0→1, 400ms spring)
650ms  — Microcopy fades in (opacity 0→1, 300ms ease-out)
```

**2. Scroll Behaviors**:
- **Reveal on scroll**: Fade up (y: 30→0) when element enters viewport
- **Stagger on scroll**: Sequential reveal with 100ms delay per item
- **Parallax**: Background moves at 0.3× scroll speed
- **Sticky shrink**: Header shrinks 80→60px on scroll
- **Progress**: Thin bar at top fills based on scroll position

**3. Hover & Micro-interactions**:
- CTA button: lift -2px, shadow increase, color darken 10%
- Card: shadow grows, border shifts to primary-200
- Nav link: background tint appears
- Image: scale 1.03 within container (overflow hidden)

**4. Click & State Transitions**:
- Modal: backdrop opacity + content scale/opacity
- Accordion: height auto-animate + chevron rotate
- Tab switch: active indicator slides + content cross-fades
- Form submit: button spinner → success checkmark

**5. Gesture Support (Mobile)**:
- Swipe testimonial carousel, tap 44px targets, no pinch zoom

### Performance Rules

- Animate only: `transform`, `opacity`, `filter` (GPU-accelerated)
- Never animate: `width`, `height`, `top`, `left`, `margin`, `padding`
- Use `will-change: transform` on frequently animated elements
- Respect `prefers-reduced-motion`: disable motion, keep instant state changes
- Max 5 concurrent animations per viewport

---

## Skill 6: Responsive Behavior Strategist

**Role**: Responsive Design Specialist — defines how every element adapts across breakpoints.

### Breakpoints (Tailwind CSS v4)

| Name | Range | Prefix | Columns | Padding |
|------|-------|--------|---------|---------|
| Mobile | 0–639px | *(default)* | 1 col | 16px (`px-4`) |
| Tablet | 640–1023px | `sm:` `md:` | 2 col | 24px (`sm:px-6`) |
| Desktop | 1024–1279px | `lg:` | 3–4 col | 32px (`lg:px-8`) |
| Wide | 1280px+ | `xl:` `2xl:` | 4 col, max-w-7xl | 48px |

### 6 Responsive Dimensions

**1. Layout Transformation**:

| Pattern | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Feature grid | 1-col stack | 2-col grid | 3-col grid |
| Form + sidebar | Stack (form first) | Stack | Side-by-side 60/40 |
| Testimonials | Swipeable carousel | 2-col grid | 3-col grid |
| Stats row | 2×2 grid | 2×2 grid | 4-col single row |
| Footer | Stack (1-col) | 2-col | 4-col |

**2. Typography Scaling**:

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| H1 hero | 40px (`text-5xl`) | 48px (`sm:text-6xl`) | 56px (`lg:text-7xl`) |
| H2 section | 28px (`text-3xl`) | 32px (`text-4xl`) | 40px (`lg:text-5xl`) |
| Body | 16px (`text-base`) | 16px | 16px |

**3. Image Behavior**: Hero cover crops, card icons scale (48→64px), gallery adapts columns.

**4. Navigation**: Hamburger mobile/tablet → horizontal inline desktop.

**5. Spacing**:

| Context | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Page padding X | 16px | 24px | 32–48px |
| Section gap | 64px | 80px | 96px |
| Card padding | 24px | 32px | 40px |
| Grid gap | 16px | 24px | 40px |

**6. Content Prioritization**: Never hide contact info, CTAs, form submit, navigation, legal links. Demote 3rd testimonial, decorative elements, stat labels on mobile.

### Handoff Format (Tailwind)

```tsx
<h1 className="text-5xl sm:text-6xl lg:text-7xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10">
<div className="p-6 sm:p-8 lg:p-10">
<nav className="hidden lg:flex">     {/* desktop nav */}
<button className="lg:hidden">       {/* mobile hamburger */}
```

### Rules

- Mobile-first always — base styles are mobile, enhance upward
- Touch targets — minimum 44×44px on mobile
- No horizontal scroll at any breakpoint
- Test at: 375px, 390px, 768px, 1024px, 1440px
- Content never hidden completely — demote to accordion/carousel on mobile

---

## Skill 7: QA & Optimization

**Role**: QA Engineer — audits the website across 7 quality dimensions.

### 7 Quality Dimensions

| # | Dimension | Standard | Weight |
|---|-----------|----------|--------|
| 1 | Performance | Core Web Vitals (LCP ≤ 2.5s, FID ≤ 100ms, CLS ≤ 0.1) | Critical |
| 2 | Accessibility | WCAG 2.2 AA | Critical |
| 3 | SEO | Meta tags, structured data, heading hierarchy | High |
| 4 | Security | HTTPS, CSP, input sanitization | High |
| 5 | Browser Compatibility | Chrome, Safari, Firefox, Edge (latest 2) | Medium |
| 6 | Mobile Optimization | Touch targets, viewport, no horizontal scroll | High |
| 7 | Analytics | Event tracking, conversion goals | Medium |

### Issue Report Format

```markdown
### [SEVERITY] [Issue Title]
**Severity**: Critical / High / Medium / Low
**Dimension**: Performance / Accessibility / SEO / Security / Browser / Mobile / Analytics
**Location**: [page] → [section] → [component]
**Issue**: [What's wrong]
**Impact**: [Why it matters]
**Fix**: [Specific recommendation]
**Effort**: [Quick fix / Moderate / Significant]
```

### Key Checklists

**Performance**: Code splitting with `React.lazy()`, tree-shake Radix/Lucide, font preload, image optimization, no render-blocking resources.

**Accessibility**: Color contrast ≥ 4.5:1, alt text on images, keyboard navigation, focus rings, `<html lang="id">`, form labels, heading hierarchy.

**SEO**: Unique `<title>` ≤ 60 chars per page, unique `<meta description>` ≤ 155 chars, canonical URLs, JSON-LD structured data, sitemap.xml.

**Mobile**: Viewport meta, no horizontal scroll, touch targets ≥ 44px, tap-to-call links, input font ≥ 16px.

### Rules

- Test mobile first (375px), then tablet, then desktop
- Lighthouse scores on mobile with simulated 4G
- All forms: validation, submission, error, success states
- All user-facing text in Bahasa Indonesia
- Report issues with specific file paths

---

## Skill 8: Figma Make Prompt Engineer

**Role**: AI Prompt Engineer — converts technical specs into optimized Figma Make prompts.

### Prompt Structure (5 Rules)

1. Start with the outcome
2. Include brand context (colors, typography, mood)
3. Specify interactions
4. Define responsive behavior
5. Request specific sections with concrete content

### Brand Context Block

**Short (quick prompts)**:
```
Islamic kindergarten website. Warm orange (#ff9940) primary, sky blue (#0ea5e9) secondary,
pink (#ff3d94) accent on light stone (#fafaf9) background.
Quicksand headings, system body font. Playful, warm, trustworthy mood.
```

**Full (detailed prompts)**:
```
Portfolio website for PAUD Jasmine Al Muflihuun, Islamic kindergarten in Yogyakarta.
Colors: Primary #ff9940, Secondary #0ea5e9, Accent #ff3d94, Neutral #fafaf9 bg, #1c1917 text.
Typography: Quicksand bold headings, system sans-serif body.
Scale: Display 64/48px, Headings 40/32/24px, Body 18/16/14px.
Spacing: 8px grid. Border radius: 8-24px. Mood: playful, warm, trustworthy, minimal.
```

### 5 Prompt Levels

| Level | Includes | Best for |
|-------|---------|----------|
| L1 Quick | Outcome + mood + colors | Fast concept exploration |
| L2 Structured | + sections + typography | Layout validation |
| L3 Detailed | + real Bahasa Indonesia copy + component specs | High-fidelity mockup |
| L4 Interactive | + hover/click/scroll states + animations | Prototype-ready |
| L5 Production | + responsive breakpoints + all states + a11y | Developer handoff |

### Key Color Combos for Prompts

| Use | Colors |
|-----|--------|
| Page background | `#fafaf9` |
| Primary text | `#1c1917` |
| Body text | `#57534e` |
| Primary CTA | gradient `#ff9940` → `#ff3d94` |
| Secondary CTA | white bg, `#1c1917` text, `#d6d3d1` border |
| Hero gradient | `#ff9940` → `#ff3d94` |

### Rules

- Always embed real brand colors as hex values
- Include Bahasa Indonesia copy when available
- Specify Quicksand for headings and system sans-serif for body
- Describe the finished design outcome first
- Each prompt should be self-contained

---

## Coordination Map

```
architecture-strategist
│
├── Plans sitemap, flows, templates, budgets, SEO
│
├── → content-architect
│     Writes Bahasa Indonesia copy per page
│
├── → design-system-generator
│     Creates missing UI components, maintains tokens
│
├── → frontend-architect
│     Implements copy + components into pages
│
├── → animation-designer
│     Designs motion specs for interactions
│
├── → responsive-strategist
│     Defines breakpoint behavior for all elements
│
├── → qa-optimization
│     Audits quality across 7 dimensions
│
└── → figma-prompt-engineer
      Converts specs into Figma Make prompts
```

**Workflow order**: architecture-strategist plans → content-architect writes → design-system-generator builds missing pieces → frontend-architect implements → animation-designer + responsive-strategist refine → qa-optimization audits.
