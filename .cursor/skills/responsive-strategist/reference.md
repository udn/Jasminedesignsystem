# Responsive Behavior Strategist – Reference

Per-page responsive decision matrices and component-level breakpoint specs.

---

## Per-Page Decision Matrices

### Home Page

| Section | Mobile (0–639) | Tablet (640–1023) | Desktop (1024+) | Notes |
|---------|---------------|-------------------|-----------------|-------|
| **Header** | Hamburger menu, 64px h, logo + icon | Hamburger, 72px h | Inline nav + "Book a Visit" btn, 80px h | Sticky, backdrop-blur, shrinks on scroll |
| **Hero badge** | `text-sm`, full width if needed | `text-sm`, inline pill | `text-sm`, inline pill | Always centered |
| **Hero H1** | `text-5xl` (40px), 2–3 lines | `sm:text-6xl` (48px), 2 lines | `lg:text-7xl` (56px), 1–2 lines | `leading-tight`, Quicksand bold |
| **Hero H2** | `text-xl` (20px), max-w-sm | `text-2xl` (24px), max-w-2xl | `lg:text-3xl` (30px), max-w-4xl | `leading-relaxed` |
| **Hero CTAs** | Stack vertical, full-width each | Inline, `flex-wrap gap-4` | Inline, `gap-4`, auto-width | Primary: gradient, Secondary: outline |
| **Hero microcopy** | `text-sm`, max-w-xs, below CTAs | `text-sm`, max-w-md | `text-sm`, max-w-md | May hide on very small screens |
| **Feature cards** | 1-col stack, `p-6`, `gap-6` | 1-col stack, `p-8`, `gap-8` | 3-col grid `lg:grid-cols-3`, `p-10`, `gap-10` | Cards: rounded-3xl, gradient border |
| **Feature icon** | `w-12 h-12` (48px) | `w-14 h-14` (56px) | `w-16 h-16` (64px) | Gradient bg, white icon |
| **Feature bullets** | Show all 3, `text-sm` | Show all 3, `text-base` | Show all 3, `text-base` | Checkmark icon + text |
| **Testimonials** | 1-col stack or swipe carousel | `md:grid-cols-2` (show 2) | `md:grid-cols-3` (show 3) | `gap-6` → `gap-8` |
| **Testimonial card** | `p-6` | `p-8` | `p-8` | Avatar 48px all sizes |
| **Stats row** | `grid-cols-2`, 2×2 layout | `sm:grid-cols-2`, 2×2 | `lg:grid-cols-4`, single row | `gap-6` → `gap-8` |
| **Stats number** | `text-3xl` | `text-4xl` | `text-4xl` | Bold, colored |
| **FAQ section** | Full width, `max-w-full` | `max-w-3xl mx-auto` | `max-w-4xl mx-auto` | Accordion, `space-y-3` → `space-y-4` |
| **CTA banner** | `p-8`, stack buttons vertical | `p-12`, inline buttons | `p-16`, inline buttons, `text-5xl` | Full gradient bg, rounded-3xl |
| **CTA banner H2** | `text-3xl` | `text-4xl` | `lg:text-5xl` | White text |
| **Footer** | 1-col stack, `gap-8` | `md:grid-cols-2`, `gap-10` | `lg:grid-cols-4`, `gap-12` | Brand col spans 2 on lg |

### About Page (Tentang Kami)

| Section | Mobile (0–639) | Tablet (640–1023) | Desktop (1024+) | Notes |
|---------|---------------|-------------------|-----------------|-------|
| **Hero** | `text-5xl`, centered | `lg:text-6xl` | `lg:text-6xl` | Simpler hero, no CTA |
| **Mission/Vision** | 1-col stack, `gap-8` | 1-col stack, `gap-10` | `lg:grid-cols-2`, side-by-side, `gap-12` | Each card: `p-8` → `p-10` → `lg:p-12` |
| **Timeline** | Vertical centered, compact | Vertical centered | Left-aligned alternating L/R | Line draws on scroll |
| **Timeline items** | All left-aligned below line | Alternating would crowd | Odd: left, Even: right of center line | `gap-8` between milestones |
| **Values grid** | 1-col stack | `grid-cols-2` | `grid-cols-3` or `grid-cols-4` | `gap-6` → `gap-8` |
| **Team grid** | 2-col grid | `grid-cols-3` | `grid-cols-4` | Avatar cards, `gap-4` → `gap-6` |

### Programs Page (Program)

| Section | Mobile (0–639) | Tablet (640–1023) | Desktop (1024+) | Notes |
|---------|---------------|-------------------|-----------------|-------|
| **Hero** | `text-5xl` | `lg:text-6xl` | `lg:text-6xl` | Centered |
| **Program cards** | 1-col stack, `gap-8` | 1-col stack, `gap-10` | `lg:grid-cols-3`, `gap-10` | Each: `p-8` → `p-10`, icon `w-16` → `w-20` |
| **Age range** | Below icon, `text-lg` | `text-xl` | `text-xl` | Colored accent text |
| **Program highlights** | Show all, `text-sm` | `text-base` | `text-base` | Checklist style |
| **Curriculum section** | Full width, 1-col | Full width, 1-col | Full width with side illustration | Metode Ummi highlight |
| **Extracurricular grid** | 2-col grid, `gap-3` | 3-col grid, `gap-4` | 4-col grid (or 7 in flexible layout), `gap-4` | Badge-style items |
| **CTA** | Full-width button | Centered auto-width | Centered auto-width | Gradient primary |

### Admissions Page (Pendaftaran)

| Section | Mobile (0–639) | Tablet (640–1023) | Desktop (1024+) | Notes |
|---------|---------------|-------------------|-----------------|-------|
| **Hero** | `text-5xl` | `lg:text-6xl` | `lg:text-6xl` | Centered |
| **Enrollment steps** | Vertical stepper (stacked) | Horizontal, compressed | Horizontal 4-step with connectors | Steps: numbered circles + labels |
| **Form + Pricing** | Stack: form first, pricing below | Stack: form, pricing | `md:grid-cols-5`: form (col-span-3), pricing (col-span-2) | Form: full card, pricing: smaller card |
| **Form fields** | Full width, stacked | Full width, stacked | 2-col for name pairs, rest full-width | `gap-4` between fields |
| **Pricing card** | Full width, below form | Full width, below form | Sticky sidebar (right) | "Free Trial" badge, "Diskon 25%" |
| **FAQ accordion** | Full width, `max-w-full` | `max-w-3xl` | `max-w-4xl` | `space-y-3` → `space-y-4` |
| **WhatsApp CTA** | Full-width banner + floating btn | Full-width banner | Full-width banner (no float) | Green accent |

### Contact Page (Kontak)

| Section | Mobile (0–639) | Tablet (640–1023) | Desktop (1024+) | Notes |
|---------|---------------|-------------------|-----------------|-------|
| **Hero** | `text-5xl` | `lg:text-6xl` | `lg:text-6xl` | Centered |
| **Form + Info** | Stack: info cards first, form below | Stack: form first, info below | Side-by-side: form 60%, info 40% | Mobile: info first for quick answers |
| **Info cards** | Horizontal scroll or 2×2 grid | 2×2 grid | 1-col stack (sidebar) | Phone, Email, Address, Hours |
| **Contact form** | Full width, stacked fields | Full width | Full width within 60% column | `gap-4` |
| **Map embed** | Full width, 250px h | Full width, 350px h | Full width, 400px h | `rounded-xl` |
| **WhatsApp CTA** | Full-width banner + floating btn | Full-width banner | In-page banner | Mobile: fixed floating green button |

---

## Component Responsive Specs

### Button

| Prop | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Primary CTA | Full-width (`w-full`), `px-6 py-3`, `text-base` | Auto-width, `px-8 py-4`, `text-lg` | Auto-width, `px-10 py-5`, `text-lg` |
| Secondary CTA | Full-width, stacked below primary | Inline next to primary | Inline next to primary |
| Icon button | 44px min touch target | 40px | 36px |
| Small button | `px-3 py-1.5`, `text-sm` | Same | Same |

### Card

| Prop | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Padding | `p-6` (24px) | `p-8` (32px) | `p-10` (40px) |
| Border radius | `rounded-2xl` (16px) | `rounded-2xl` | `rounded-3xl` (24px) |
| Shadow | `shadow-sm` | `shadow-md` | `shadow-lg` |
| Icon size | 48px (`w-12`) | 56px (`w-14`) | 64px (`w-16`) |

### Form

| Prop | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Layout | Single column, `gap-4` | Single column, `gap-4` | 2-col for short fields, 1-col for textarea |
| Input height | 48px (touch-friendly) | 44px | 40px |
| Label | Above input, `text-sm` | Above input | Above input |
| Error message | Below input, `text-xs` | `text-sm` | `text-sm` |
| Submit button | Full-width | Full-width | Auto-width or full-width |

### Accordion (FAQ)

| Prop | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Container | `max-w-full` | `max-w-3xl mx-auto` | `max-w-4xl mx-auto` |
| Question text | `text-base` bold | `text-lg` bold | `text-lg` bold |
| Answer text | `text-sm` | `text-base` | `text-base` |
| Padding | `p-4` | `p-5` | `p-6` |
| Spacing | `space-y-3` | `space-y-3` | `space-y-4` |

### Navigation

| Prop | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Type | Hamburger → full-height slide-in | Hamburger → slide-in | Horizontal inline |
| Height | 64px | 72px | 80px |
| Logo | 40px icon + name | 48px icon + name | 56px icon + name + tagline |
| CTA button | Inside mobile menu, full-width | Inside mobile menu | Inline, visible always |
| Active state | Filled pill, primary bg | Filled pill | Filled pill |
| Backdrop | `bg-white/95 backdrop-blur-lg` | Same | Same |

### Table

| Prop | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Layout | Horizontal scroll wrapper | Fits viewport | Fits viewport |
| Cell padding | `px-3 py-2`, `text-sm` | `px-4 py-3`, `text-sm` | `px-6 py-4`, `text-base` |
| Columns > 4 | Scroll or collapse to cards | Visible | Visible |

### Modal / Dialog

| Prop | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Width | Full-width, bottom sheet style | `max-w-md`, centered | `max-w-lg`, centered |
| Position | Bottom of screen, slides up | Center, scales in | Center, scales in |
| Padding | `p-6` | `p-8` | `p-8` |
| Close | X button + swipe down | X button + Escape | X button + Escape + click outside |

### Carousel (Testimonials)

| Prop | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Display | 1 card visible, swipe | 2 cards visible | 3 cards visible (no carousel, grid) |
| Navigation | Swipe + dots | Swipe + dots + arrows | Static grid (no carousel) |
| Auto-play | Off (manual swipe) | On (5s interval) | N/A (static grid) |

---

## Typography Scale at Each Breakpoint

| Token | Mobile (px) | Mobile (class) | Tablet (class) | Desktop (class) |
|-------|------------|----------------|----------------|-----------------|
| Display 1 | 40px | `text-5xl` | `sm:text-6xl` | `lg:text-7xl` |
| Display 2 | 30px | `text-3xl` | `text-4xl` | `lg:text-5xl` |
| Heading 1 | 24px | `text-2xl` | `text-3xl` | `lg:text-4xl` |
| Heading 2 | 20px | `text-xl` | `text-2xl` | `text-2xl` |
| Heading 3 | 18px | `text-lg` | `text-lg` | `text-lg` |
| Body lg | 18px | `text-lg` | `text-lg` | `text-lg` |
| Body | 16px | `text-base` | `text-base` | `text-base` |
| Body sm | 14px | `text-sm` | `text-sm` | `text-sm` |
| Caption | 12px | `text-xs` | `text-xs` | `text-xs` |

**Rule**: Body text does NOT scale up — only display/heading levels scale. This keeps body readable without reflowing.

---

## Spacing Scale at Each Breakpoint

| Context | Mobile | Tablet | Desktop | Tailwind pattern |
|---------|--------|--------|---------|-----------------|
| Container padding X | 16px | 24px | 32–48px | `px-4 sm:px-6 lg:px-8` or `px-6 sm:px-8 lg:px-12` |
| Container padding Y | 48px | 64px | 80px | `py-12 sm:py-16 lg:py-20` |
| Between sections | 64px | 80px | 96px | `space-y-16` → `space-y-20` → `space-y-24` |
| Card padding | 24px | 32px | 40px | `p-6 sm:p-8 lg:p-10` |
| Grid gap | 16px | 24px | 40px | `gap-4 md:gap-6 lg:gap-10` |
| Button padding | 12/24 | 16/32 | 20/40 | `px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5` |
| Input height | 48px | 44px | 40px | Touch-friendly → standard |

---

## Content Prioritization Rules

### Priority 1 — Always visible (all breakpoints)

- H1 headline
- Primary CTA
- Key trust signals (1–2 stats)
- Contact phone number / WhatsApp
- Navigation (hamburger or inline)
- Brand logo

### Priority 2 — Visible but may adapt

- H2 subheadline (may shorten on mobile)
- Feature card headlines + descriptions
- Testimonial (at least 1 visible)
- FAQ questions (answers behind accordion)
- Form fields (all required fields visible)

### Priority 3 — May demote or reformat on mobile

- Secondary CTA (stack instead of inline)
- 3rd testimonial card (carousel or hidden)
- Decorative illustrations / gradients (simplify)
- Stat labels (show number only on small screens)
- Footer secondary links (collapse)
- Microcopy / supporting text (smaller or hidden)

### Never hidden

- Contact info (phone, address)
- CTA buttons (at least primary)
- Form submit button
- Navigation access
- Legal / privacy links

---

## Mobile-Specific Enhancements

| Enhancement | Implementation |
|-------------|---------------|
| **Floating WhatsApp CTA** | Fixed `bottom-4 right-4`, green circle, 56px, z-50, visible on Contact + Admissions + Home |
| **Sticky mobile CTA bar** | Optional: fixed bottom bar with "Daftar Sekarang" on scroll past hero |
| **Phone link** | All phone numbers are `<a href="tel:...">` tap-to-call |
| **Smooth scroll** | Anchor links use `scroll-behavior: smooth` |
| **Pull-to-refresh** | Disabled (CSS `overscroll-behavior: none`) |
| **Input zoom prevention** | Font size ≥ 16px on all inputs (prevents iOS zoom) |
| **Safe area** | `env(safe-area-inset-*)` for notch / home indicator spacing |

---

## Testing Checklist

- [ ] iPhone SE (375px) — smallest supported width
- [ ] iPhone 14/15 (390px) — most common mobile
- [ ] iPad Mini (768px) — tablet breakpoint
- [ ] iPad Air (820px) — mid tablet
- [ ] Laptop (1024px) — desktop breakpoint triggers
- [ ] Desktop (1440px) — common monitor
- [ ] Wide (1920px) — max-w-7xl centers correctly
- [ ] Landscape mobile (667×375) — no layout breaks
- [ ] Landscape tablet (1024×768) — grid works
- [ ] All forms usable with mobile keyboard open
- [ ] Touch targets ≥ 44px on all mobile interactive elements
- [ ] No horizontal scroll on any breakpoint
- [ ] Text readable without zooming (16px body minimum)
