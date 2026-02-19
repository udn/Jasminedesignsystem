# Design System Generator – Reference

Source of truth for the Jasmine Kindergarten design system.

---

## 1. Color Palette

Defined in `src/styles/theme.css` under `@theme`. Mirrored in `src/app/pages/Tokens.tsx`.

### Primary (Warm Orange)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary-50` | #fff8f0 | Backgrounds, tints |
| `--color-primary-100` | #ffefd9 | Icon backgrounds, badges |
| `--color-primary-200` | #ffddb3 | Hover tints |
| `--color-primary-300` | #ffc88d | Decorative |
| `--color-primary-400` | #ffb366 | Secondary buttons |
| `--color-primary-500` | #ff9940 | **Primary brand** |
| `--color-primary-600` | #ff7e1a | CTA buttons, links |
| `--color-primary-700` | #e56500 | CTA hover |
| `--color-primary-800` | #b34f00 | Dark accents |
| `--color-primary-900` | #803900 | Dark mode text |

### Secondary (Playful Blue)
| Token | Hex |
|-------|-----|
| `--color-secondary-50` | #f0f9ff |
| `--color-secondary-100` | #e0f2fe |
| `--color-secondary-200` | #bae6fd |
| `--color-secondary-300` | #7dd3fc |
| `--color-secondary-400` | #38bdf8 |
| `--color-secondary-500` | #0ea5e9 |
| `--color-secondary-600` | #0284c7 |
| `--color-secondary-700` | #0369a1 |
| `--color-secondary-800` | #075985 |
| `--color-secondary-900` | #0c4a6e |

### Accent (Warm Pink)
| Token | Hex |
|-------|-----|
| `--color-accent-50` | #fff1f7 |
| `--color-accent-100` | #ffe4f0 |
| `--color-accent-200` | #ffc9e1 |
| `--color-accent-300` | #ffa3ce |
| `--color-accent-400` | #ff6bae |
| `--color-accent-500` | #ff3d94 |
| `--color-accent-600` | #f01b75 |
| `--color-accent-700` | #d10d5e |
| `--color-accent-800` | #a80d4d |
| `--color-accent-900` | #8d0f44 |

### Neutral (Stone)
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-neutral-50` | #fafaf9 | Page background |
| `--color-neutral-100` | #f5f5f4 | Section background |
| `--color-neutral-200` | #e7e5e4 | Borders, dividers |
| `--color-neutral-300` | #d6d3d1 | Disabled borders |
| `--color-neutral-400` | #a8a29e | Placeholder text |
| `--color-neutral-500` | #78716c | Secondary text |
| `--color-neutral-600` | #57534e | Body text |
| `--color-neutral-700` | #44403c | Strong body text |
| `--color-neutral-800` | #292524 | Heading text |
| `--color-neutral-900` | #1c1917 | Primary text |

### Semantic
| Token | Hex | Purpose |
|-------|-----|---------|
| `--color-success-{50,500,700}` | #f0fdf4, #22c55e, #15803d | Positive feedback |
| `--color-warning-{50,500,700}` | #fffbeb, #f59e0b, #b45309 | Caution |
| `--color-error-{50,500,700}` | #fef2f2, #ef4444, #b91c1c | Errors, destructive |
| `--color-info-{50,500,700}` | #eff6ff, #3b82f6, #1d4ed8 | Informational |

### Dark Mode

In `theme.css` under `@media (prefers-color-scheme: dark)`:
- Neutral palette is **inverted** (50↔900, 100↔800, etc.)
- Primary palette is **inverted** (50↔900, etc.)
- Body bg → `neutral-50` (dark), text → `neutral-900` (light)

---

## 2. Typography Scale (9 levels)

| Level | Token | Size | Use |
|-------|-------|------|-----|
| Display 1 | `--font-size-display-1` | 4rem (64px) | Hero headlines |
| Display 2 | `--font-size-display-2` | 3rem (48px) | Page titles |
| Heading 1 | `--font-size-heading-1` | 2.5rem (40px) | Section titles |
| Heading 2 | `--font-size-heading-2` | 2rem (32px) | Subsection titles |
| Heading 3 | `--font-size-heading-3` | 1.5rem (24px) | Card titles |
| Body Large | `--font-size-body-lg` | 1.125rem (18px) | Lead paragraphs |
| Body | `--font-size-body` | 1rem (16px) | Default body |
| Body Small | `--font-size-body-sm` | 0.875rem (14px) | Secondary text |
| Caption | `--font-size-caption` | 0.75rem (12px) | Labels, metadata |

**Font families:**
- Display/Headings: `--font-family-display` → Quicksand, Nunito, system
- Body: `--font-family-body` → system stack
- Code: `--font-family-mono` → SF Mono, Monaco, Consolas

**Line heights:** tight (1.2), normal (1.5), relaxed (1.7)
**Weights:** normal (400), medium (500), semibold (600), bold (700), extrabold (800)

---

## 3. Spacing System (8px base grid)

| Step | Token | Value |
|------|-------|-------|
| 0 | `--spacing-0` | 0 |
| 1 | `--spacing-1` | 2px |
| 2 | `--spacing-2` | 4px |
| 3 | `--spacing-3` | 8px |
| 4 | `--spacing-4` | 12px |
| 5 | `--spacing-5` | 16px |
| 6 | `--spacing-6` | 24px |
| 7 | `--spacing-7` | 32px |
| 8 | `--spacing-8` | 40px |
| 9 | `--spacing-9` | 48px |
| 10 | `--spacing-10` | 64px |
| 11 | `--spacing-11` | 80px |
| 12 | `--spacing-12` | 96px |

---

## 4. Component Catalog (46 components)

All in `src/app/components/ui/`. Import: `import { X } from "@/app/components/ui/x";`

### Form (11)
`button` `input` `textarea` `select` `checkbox` `radio-group` `switch` `slider` `input-otp` `form` `label`

### Layout (8)
`card` `separator` `aspect-ratio` `resizable` `sidebar` `sheet` `drawer` `scroll-area`

### Navigation (5)
`breadcrumb` `tabs` `navigation-menu` `menubar` `pagination`

### Overlays (7)
`dialog` `alert-dialog` `popover` `hover-card` `tooltip` `context-menu` `dropdown-menu` `command`

### Feedback (6)
`alert` `badge` `progress` `skeleton` `avatar` `sonner`

### Data Display (2)
`table` `chart`

### Interactive (6)
`accordion` `collapsible` `toggle` `toggle-group` `calendar` `carousel`

### Utilities (1)
`utils` (cn function)

---

## 5. Missing Components (Escalated by frontend-architect)

| Component | Category | Priority | Suggested Base |
|-----------|----------|----------|----------------|
| **Stepper** | Navigation | High | Custom (no Radix primitive) |
| **Combobox** | Form | High | `cmdk` (already installed) or `@radix-ui/react-popover` + `command` |
| **Multi-select** | Form | Medium | `command` + `badge` composition |
| **File upload** | Form | Medium | `react-dnd` (installed) + custom |
| **Stat card** | Data Display | Medium | `card` composition |
| **Timeline** | Data Display | Low | Custom |
| **Empty state** | Feedback | Low | Custom |
| **Date range picker** | Form | Low | `react-day-picker` (installed) |
| **Time picker** | Form | Low | Custom |
| **Data grid** | Data Display | Low | `table` + sorting/filter logic |

---

## 6. Layout Patterns

### Breakpoints
```
Mobile:  0–639px    → 1 column, 16px padding
Tablet:  640–1023px → 2 columns, 24px padding
Desktop: 1024–1279px → 3–4 columns, 32px padding
Wide:    1280px+     → max-w-7xl centered
```

### Container
```tsx
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
```

### Common grids
```tsx
// 4-col feature cards
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

// 3-col content
<div className="grid lg:grid-cols-3 gap-10">

// Sidebar + main
<div className="grid md:grid-cols-4 gap-6">
  <aside className="md:col-span-1">
  <main className="md:col-span-3">
```

---

## 7. Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 4px | Badges, small inputs |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards, dropdowns |
| `--radius-xl` | 16px | Large cards, modals |
| `--radius-2xl` | 24px | Hero sections, feature cards |
| `--radius-full` | 9999px | Avatars, pills |

---

## 8. Shadows

| Token | Value | Use |
|-------|-------|-----|
| `--shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Subtle lift (cards, inputs) |
| `--shadow-md` | 2-layer | Dropdowns, popovers |
| `--shadow-lg` | 2-layer | Modals, floating elements |
| `--shadow-xl` | 2-layer | Hero CTAs, emphasis |

---

## 9. Motion Tokens

| Token | Value | Use |
|-------|-------|-----|
| `--duration-instant` | 100ms | Hover, toggle |
| `--duration-fast` | 200ms | Dropdown, tooltip |
| `--duration-normal` | 300ms | Accordion, tab switch |
| `--duration-slow` | 500ms | Page transition, modal |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exit animations |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Enter animations |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Symmetric transitions |
| `--ease-bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful emphasis |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Energetic enter |

---

## 10. Dependencies (Do Not Duplicate)

Already installed — use before adding new packages:

| Package | Use for |
|---------|---------|
| `@radix-ui/*` (30+) | Headless UI primitives |
| `class-variance-authority` | Component variants (cva) |
| `tailwind-merge` + `clsx` | Class merging (cn) |
| `react-hook-form` | Form state & validation |
| `cmdk` | Command palette / combobox |
| `react-day-picker` | Calendar / date picker |
| `embla-carousel-react` | Carousel |
| `recharts` | Charts & data viz |
| `motion` | Animations (framer-motion) |
| `react-dnd` | Drag and drop |
| `lucide-react` | Icons |
| `sonner` | Toast notifications |
| `vaul` | Drawer component |
| `react-resizable-panels` | Resizable layouts |
