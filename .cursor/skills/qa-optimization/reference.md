# QA & Optimization Checklist – Reference

Full audit checklists for each quality dimension, tailored to the Jasmine project.

---

## 1. Performance Checklist

### Core Web Vitals Targets

| Metric | Target | Tool |
|--------|--------|------|
| LCP (Largest Contentful Paint) | ≤ 2.5s | Lighthouse, PageSpeed Insights |
| FID (First Input Delay) / INP | ≤ 100ms / ≤ 200ms | Chrome UX Report |
| CLS (Cumulative Layout Shift) | ≤ 0.1 | Lighthouse |
| TTI (Time to Interactive) | ≤ 3.5s | Lighthouse |
| TTFB (Time to First Byte) | ≤ 600ms | WebPageTest |
| Total JS bundle (gzip) | ≤ 200KB | `vite build` output |

### Performance Checklist

- [ ] **Code splitting**: Routes use `React.lazy()` + `Suspense`
  ```tsx
  const Home = lazy(() => import('./pages/portfolio/Home'));
  ```
- [ ] **Tree shaking**: Only import used Radix primitives and Lucide icons
  ```tsx
  // ✅ import { Heart } from 'lucide-react';
  // ❌ import * as Icons from 'lucide-react';
  ```
- [ ] **Font loading**: Quicksand preloaded with `font-display: swap`
  ```html
  <link rel="preload" href="/fonts/Quicksand.woff2" as="font" type="font/woff2" crossorigin>
  ```
- [ ] **Image optimization**: WebP/AVIF format, responsive `srcset`, `loading="lazy"` below fold
- [ ] **Hero image** (if any): ≤ 100KB, preloaded, correct dimensions
- [ ] **CSS**: Tailwind purges unused classes (default in v4)
- [ ] **No layout-triggering animations**: Only `transform` and `opacity` animated
- [ ] **Preconnect**: External origins declared
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://maps.googleapis.com">
  ```
- [ ] **No render-blocking resources**: Scripts are `defer` or dynamic imports
- [ ] **Bundle analysis**: Run `npx vite-bundle-visualizer` to check for bloat
- [ ] **Compression**: Server serves gzip or Brotli
- [ ] **CDN**: Static assets served from edge (Vercel/Netlify/Cloudflare)

### Common Performance Issues in This Project

| Issue | Severity | Fix |
|-------|----------|-----|
| No route-level code splitting | High | Wrap routes in `lazy()` + `Suspense` |
| Full Radix UI imported | Medium | Import only used components |
| Lucide icons not tree-shaken | Medium | Named imports only |
| No font preload | Medium | Add preload link for Quicksand |
| Images without dimensions | Medium | Add `width`/`height` to prevent CLS |
| Map iframe loads eagerly | Low | Add `loading="lazy"` to map iframe |

---

## 2. Accessibility Checklist (WCAG 2.2 AA)

### Perceivable

- [ ] **Color contrast**: Body text ≥ 4.5:1, large text ≥ 3:1, UI elements ≥ 3:1
  - Primary text `#1c1917` on `#fafaf9` = 16.5:1 ✅
  - Body text `#57534e` on `#fafaf9` = 5.7:1 ✅
  - Check: CTA text on gradient backgrounds
  - Check: placeholder text on input backgrounds
- [ ] **Alt text**: Every `<img>` has descriptive `alt` (not "image" or empty for meaningful images)
- [ ] **Video captions**: If video content exists, provide captions
- [ ] **Text resizing**: Content readable at 200% zoom, no horizontal scroll
- [ ] **Color not sole indicator**: Errors use icon + text, not just red color

### Operable

- [ ] **Keyboard navigation**: All interactive elements reachable via Tab
- [ ] **Focus visible**: Focus ring on all interactive elements (buttons, links, inputs, accordions)
  - Default: `focus-visible:ring-ring/50 focus-visible:ring-[3px]` (from button.tsx)
- [ ] **Focus order**: Logical tab order matches visual layout
- [ ] **Skip to content**: Skip link at top of page for keyboard users
- [ ] **No keyboard traps**: User can Tab in and out of all components (especially modals)
- [ ] **Touch targets**: ≥ 44×44px on mobile for all interactive elements
- [ ] **No timing**: No time-limited interactions (or provide extension)
- [ ] **Reduced motion**: `prefers-reduced-motion` respected for all animations

### Understandable

- [ ] **Language**: `<html lang="id">` (Bahasa Indonesia) set on root element
- [ ] **Form labels**: Every input has a visible `<label>` or `aria-label`
- [ ] **Error identification**: Form errors describe the issue + how to fix
- [ ] **Consistent navigation**: Same nav structure across all pages
- [ ] **Predictable**: No unexpected context changes on focus/input

### Robust

- [ ] **Valid HTML**: No duplicate IDs, proper nesting, semantic elements
- [ ] **ARIA roles**: Correct roles on custom components (accordion, dialog, tabs)
- [ ] **Heading hierarchy**: One `<h1>` per page, sequential `<h2>` → `<h3>` (no skipping)

### Per-Page Heading Audit Template

```
Page: [name]
  h1: [text] ← one only
    h2: [section 1]
      h3: [card/item]
    h2: [section 2]
      h3: [card/item]
    h2: [section 3]
```

### Accessibility Testing Tools

| Tool | Use for |
|------|---------|
| Lighthouse Accessibility | Automated audit (catches ~30% of issues) |
| axe DevTools (browser extension) | More thorough automated checks |
| Keyboard-only navigation | Manual Tab/Enter/Escape testing |
| Screen reader (NVDA/VoiceOver) | Full reading order + interaction test |
| Color contrast checker | WebAIM contrast checker for specific combos |

---

## 3. SEO Checklist

### Meta Tags (per page)

- [ ] `<title>` unique per page, ≤ 60 chars, includes brand name
- [ ] `<meta name="description">` unique, ≤ 155 chars, includes keyword + CTA
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] `<link rel="canonical" href="[full URL]">` on each page
- [ ] Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- [ ] Twitter Card tags: `twitter:card`, `twitter:title`, `twitter:description`

### Meta Templates (from architecture-strategist)

| Page | Title | Description |
|------|-------|-------------|
| Home | `PAUD Jasmine Al Muflihuun - [H1]` | `[Subheadline]. Sekolah Islam PAUD, KB, TK, TPA di Sleman, Yogyakarta.` |
| About | `Tentang Kami - PAUD Jasmine Al Muflihuun` | `[Visi]. Sekolah Islam resmi dengan metode Ummi...` |
| Programs | `Program Pendidikan - PAUD Jasmine Al Muflihuun` | `Program KB, TK, TPA dengan Metode Ummi, Coding...` |
| Admissions | `Pendaftaran Siswa Baru - PAUD Jasmine Al Muflihuun` | `Daftar sekarang! Free Trial Class & Diskon Sibling 25%...` |
| Contact | `Hubungi Kami - PAUD Jasmine Al Muflihuun` | `Hubungi PAUD Jasmine di 081328846089...` |

### Structured Data

- [ ] JSON-LD `EducationalOrganization` on Home page
- [ ] JSON-LD `FAQPage` on pages with FAQ sections
- [ ] JSON-LD `BreadcrumbList` for navigation breadcrumbs
- [ ] JSON-LD `LocalBusiness` with address, phone, hours

### Technical SEO

- [ ] **URL structure**: Clean, lowercase, no trailing slashes
- [ ] **Heading hierarchy**: One H1, sequential H2→H3 per page
- [ ] **Internal links**: All nav links work, no broken links
- [ ] **Sitemap**: `sitemap.xml` generated and submitted
- [ ] **Robots.txt**: Allows crawling of portfolio pages
- [ ] **404 page**: Custom 404 with navigation back to site
- [ ] **Loading speed**: LCP ≤ 2.5s (Google ranking factor)

### SPA-Specific SEO Concerns

| Issue | Impact | Solution |
|-------|--------|---------|
| Client-side rendering only | Crawlers may not index content | Pre-render or SSR critical pages |
| No per-page meta tags | All pages share same title/desc | Use `react-helmet-async` or `document.title` per route |
| No sitemap | Pages not discovered | Generate `sitemap.xml` at build time |
| Hash-based URLs | Poor SEO | Already using clean paths via React Router ✅ |

---

## 4. Security Checklist

- [ ] **HTTPS**: Enforced on all pages (redirect HTTP → HTTPS)
- [ ] **Content Security Policy**: CSP headers configured
  ```
  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://www.google.com https://maps.google.com;
  ```
- [ ] **Input sanitization**: All form inputs sanitized before display/submission
- [ ] **XSS prevention**: No `dangerouslySetInnerHTML` without sanitization
- [ ] **CSRF protection**: Form submissions include CSRF token (if using API)
- [ ] **Dependency audit**: `npm audit` shows no critical vulnerabilities
- [ ] **No secrets in client**: No API keys, passwords, or service keys in client bundle
  - Supabase anon key is safe (RLS protects data)
  - Service role key only in Edge Functions
- [ ] **Secure headers**: X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- [ ] **Phone/email validation**: Server-side validation (not just client)
- [ ] **Rate limiting**: Form submission endpoints rate-limited (if using API)
- [ ] **No open redirects**: Links to external sites use `rel="noopener noreferrer"`

---

## 5. Browser Compatibility Checklist

### Target Browsers

| Browser | Versions | Platform |
|---------|----------|----------|
| Chrome | Latest 2 | Desktop + Android |
| Safari | Latest 2 | Desktop + iOS |
| Firefox | Latest 2 | Desktop |
| Edge | Latest 2 | Desktop |
| Samsung Internet | Latest | Android |

### Common Compatibility Issues

- [ ] **CSS custom properties**: Supported in all targets ✅
- [ ] **CSS Grid / Flexbox**: Supported ✅
- [ ] **Tailwind v4**: Uses modern CSS features — check `@theme` support
- [ ] **backdrop-filter: blur()**: Safari needs `-webkit-` prefix
- [ ] **Scroll behavior: smooth**: Not in all Safari versions — provide fallback
- [ ] **IntersectionObserver**: Supported in all targets ✅
- [ ] **CSS `color-mix()`**: Check browser support if used
- [ ] **Input `type="date"`**: Different rendering per browser — test date picker
- [ ] **Font rendering**: Quicksand renders consistently (test CJK fallback)
- [ ] **Touch events**: Test on real iOS + Android devices

### Testing Procedure

1. Open each page in each browser
2. Check layout, typography, colors at 3 breakpoints
3. Test all interactions (hover, click, form submit)
4. Check animations (especially `motion` library)
5. Verify form inputs (date picker, select, phone format)

---

## 6. Mobile Optimization Checklist

- [ ] **Viewport meta**: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] **No horizontal scroll**: Test at 375px width — nothing overflows
- [ ] **Touch targets**: All buttons, links, inputs ≥ 44×44px
- [ ] **Tap-to-call**: Phone numbers are `<a href="tel:+6281328846089">`
- [ ] **WhatsApp link**: `<a href="https://wa.me/6281328846089">`
- [ ] **Input zoom prevention**: Font size ≥ 16px on all inputs (prevents iOS Safari zoom)
- [ ] **Keyboard handling**: Form works with on-screen keyboard (content scrolls, not hidden)
- [ ] **Safe areas**: `env(safe-area-inset-*)` for notch/home indicator
- [ ] **Hamburger menu**: Opens/closes smoothly, can be dismissed
- [ ] **Sticky header**: Doesn't cover content, shrinks appropriately
- [ ] **Images**: Responsive, don't exceed viewport width
- [ ] **Font sizes**: Body ≥ 16px, never below 12px
- [ ] **Spacing**: Adequate padding (16px minimum sides), content not cramped
- [ ] **Carousel**: Swipeable testimonials on mobile, smooth snap
- [ ] **Loading states**: Skeleton screens display at mobile dimensions
- [ ] **Landscape mode**: No layout breaks at 667×375 (iPhone landscape)
- [ ] **Slow network**: Test with Chrome DevTools throttled to "Slow 3G"

### Device Testing Matrix

| Device | Width | Key tests |
|--------|-------|-----------|
| iPhone SE | 375px | Smallest width, touch targets, text wrapping |
| iPhone 14 | 390px | Most common, all features |
| iPhone 14 Pro Max | 430px | Large phone, verify layout |
| iPad Mini | 768px | Tablet breakpoint triggers |
| iPad Air | 820px | Mid tablet |
| Samsung Galaxy S21 | 360px | Android, Samsung Internet |

---

## 7. Analytics Integration Checklist

### Events to Track

| Event | Trigger | Data |
|-------|---------|------|
| `page_view` | Route change | page path, referrer |
| `cta_click` | Any CTA button click | button label, page, position |
| `form_start` | First form field focused | form type (admission/contact) |
| `form_submit` | Form submitted successfully | form type, program selected |
| `form_error` | Form validation/API error | error type, field |
| `faq_open` | FAQ accordion opened | question text |
| `phone_click` | Phone number tapped | phone number |
| `whatsapp_click` | WhatsApp link tapped | page |
| `scroll_depth` | User scrolls 25%, 50%, 75%, 100% | page, depth |
| `social_click` | Social media link clicked | platform |

### Conversion Goals

| Goal | Definition | Target |
|------|-----------|--------|
| **Primary**: Visit booked | Admission form submitted | 5% of visitors |
| **Secondary**: Contact made | Contact form or WhatsApp click | 10% of visitors |
| **Micro**: Engagement | ≥ 2 pages viewed, ≥ 60s on site | 40% of visitors |

### Conversion Funnel

```
Home (100%)
  → Programs page (30%)
    → Admissions page (15%)
      → Form started (10%)
        → Form submitted (5%)
```

### Implementation

- [ ] Analytics SDK installed (Google Analytics 4, Plausible, or Posthog)
- [ ] Page view tracking on route change
- [ ] CTA click events with labels
- [ ] Form funnel events (start, field completion, submit, error)
- [ ] Scroll depth tracking
- [ ] Phone/WhatsApp click tracking
- [ ] UTM parameter handling for campaign tracking
- [ ] Cookie consent banner (if using GA4 in EU, likely not needed for Indonesia)

---

## Quick Audit Commands

### Lighthouse (CLI)

```bash
npx lighthouse https://jasmine.sch.id/portfolio --preset=desktop --output=html
npx lighthouse https://jasmine.sch.id/portfolio --preset=mobile --output=html
```

### Bundle Analysis

```bash
npx vite build && npx vite-bundle-visualizer
```

### Dependency Audit

```bash
npm audit
npm audit --fix
```

### Accessibility (axe-core)

```bash
npx @axe-core/cli https://jasmine.sch.id/portfolio
```

### HTML Validation

```bash
npx html-validate dist/index.html
```

---

## Issue Priority Matrix

Quick reference for prioritizing fixes:

| | Critical impact | Moderate impact | Low impact |
|---|---|---|---|
| **Easy fix** | Do now | Do now | Next sprint |
| **Moderate effort** | Do now | This sprint | Backlog |
| **Significant effort** | This sprint | Next sprint | Backlog |
