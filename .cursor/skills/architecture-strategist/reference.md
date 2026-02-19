# Architecture Strategist – Reference

Technical specification for PAUD Jasmine Al Muflihuun portfolio website.

**Website type**: Portfolio / institutional — Islamic kindergarten (PAUD, KB, TK, TPA)
**Target audience**: First-time parents in Indonesia, children 0–6, middle-to-upper income, value safety + Islamic education
**Key features**: School info, program details, admissions/enrollment, visit booking, contact
**Tech considerations**: Responsive (mobile-first), SEO (Bahasa Indonesia), Performance (fast LCP)

---

## 1. Site Map

```
/portfolio                          ← Home (landing, conversion entry)
├── /portfolio/about                ← Tentang Kami (trust, visi-misi, team)
├── /portfolio/programs             ← Program (PAUD, KB, TK, TPA, extracurricular)
├── /portfolio/admissions           ← Pendaftaran (form, pricing, trial class)
└── /portfolio/contact              ← Kontak (form, location, WhatsApp)
```

### Navigation hierarchy

**Primary nav** (header): Home, About Us, Programs, Admissions, Contact
**Header CTA**: "Book a Visit" → /portfolio/admissions
**Footer nav**: Same 5 links + social media + legal (Privacy, Terms, Sitemap)

### Potential future pages

| Page | URL | Purpose | Priority |
|------|-----|---------|----------|
| Gallery | `/portfolio/gallery` | Photo/video of activities | Medium |
| Blog/News | `/portfolio/blog` | Articles, announcements | Low |
| FAQ (standalone) | `/portfolio/faq` | SEO landing for common questions | Medium |
| Virtual Tour | `/portfolio/tour` | 360° school walkthrough | Low |
| Testimonials | `/portfolio/testimonials` | Full testimonial page | Low |

---

## 2. User Flows (3 Primary Journeys)

### Flow 1: Parent Exploring → Books a Visit (Primary conversion)

```
[Land on Home]
  → reads hero (emotional hook)
  → scrolls feature blocks (program, fasilitas, keamanan)
  → sees social proof (testimonials, trust signals)
  → clicks "Jadwalkan Kunjungan" CTA
    → [Admissions page]
      → reads enrollment steps
      → sees pricing / offer (Free Trial, Diskon Sibling 25%)
      → fills booking form (nama, telepon, anak, tanggal)
      → submits → [Thank You / confirmation]
        → WhatsApp follow-up within 24h
```

**Key metrics**: Home → Admissions click rate, Form completion rate
**Friction points**: Form too long, unclear pricing, no social proof near CTA

### Flow 2: Parent Researching → Gains Trust (Secondary conversion)

```
[Land on Home or About]
  → navigates to About (visi, misi, sejarah)
  → navigates to Programs (age-appropriate detail)
  → reads extracurricular offerings
  → reads FAQ (keamanan, metode, fasilitas)
  → returns to Home or Admissions
  → clicks CTA or contacts via WhatsApp
```

**Key metrics**: Pages per session, Time on Programs page, FAQ engagement
**Friction points**: Not enough detail on programs, no visual proof (photos)

### Flow 3: Parent with Specific Question → Gets Answer Fast

```
[Lands on any page via search/referral]
  → scrolls to FAQ section (or dedicated FAQ page)
  → finds answer to specific objection
  → clicks inline CTA ("Masih ada pertanyaan? Hubungi kami")
    → [Contact page] or WhatsApp direct link
```

**Key metrics**: FAQ click-through to contact, Bounce rate on FAQ
**Friction points**: FAQ not comprehensive, no search, slow page load

---

## 3. Data Models

### Content types (static, no CMS — data lives in JSX/TSX)

```typescript
interface HeroSection {
  headline: string;        // H1, max 6 words
  subheadline: string;     // H2, max 15 words
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  microcopy?: string;      // max 90 characters
  badge?: string;          // e.g. "Tahun Ajaran 2026–2027"
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
  childInfo: string;       // e.g. "Ibu dari Aisyah, TK-B"
  avatarUrl?: string;
  rating: number;          // 1-5
}

interface FaqItem {
  question: string;
  answer: string;          // max 120 words
}

interface ProgramCard {
  icon: LucideIcon;
  name: string;            // e.g. "Kelompok Bermain"
  ageRange: string;        // e.g. "Usia 2–3 tahun"
  description: string;
  highlights: string[];
  schedule?: string;
}

interface TeamMember {
  name: string;
  role: string;
  photoUrl?: string;
  bio?: string;
}
```

### Form schemas

```typescript
interface AdmissionForm {
  parentName: string;      // required
  email: string;           // required, email format
  phone: string;           // required, Indonesian format
  childName: string;       // required
  childAge: string;        // required, select: 0-1, 2-3, 4-5, 5-6
  program: string;         // required, select: KB, TK-A, TK-B, TPA
  preferredDate: string;   // required, date picker
  message?: string;        // optional, textarea
}

interface ContactForm {
  name: string;            // required
  email: string;           // required
  phone: string;           // required
  subject: string;         // required, select: Informasi Umum, Pendaftaran, Kunjungan, Lainnya
  message: string;         // required, textarea
}
```

---

## 4. API Requirements

Currently **no backend API** — the site is fully static (React SPA).

### Future API endpoints (if backend is added)

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/admissions` | POST | Submit admission/visit booking form |
| `/api/contact` | POST | Submit contact form |
| `/api/newsletter` | POST | Subscribe to email updates |

### Current integration points

| Service | Purpose | Implementation |
|---------|---------|----------------|
| WhatsApp | Direct parent contact | `https://wa.me/6281328846089` deep link |
| Google Maps | Location embed | iframe or static map image |
| Form submission | Collect leads | Client-side alert → future: API or Formspree/Netlify Forms |

---

## 5. Component Inventory

### Per-page component needs

#### Home (`/portfolio`)
| Component | Source | Status |
|-----------|--------|--------|
| Hero section (centered, gradient) | Custom composition | ✅ Built |
| Feature card (icon + H2 + body + bullets) | Custom + Card | ✅ Built |
| Testimonial card (quote + avatar + rating) | Custom composition | ✅ Built |
| Stats row (number + label) | Custom | ✅ Built |
| CTA banner (gradient bg + buttons) | Custom composition | ✅ Built |
| Trust signal badges | Badge | ✅ Available |

#### About (`/portfolio/about`)
| Component | Source | Status |
|-----------|--------|--------|
| Mission/Vision cards | Card | ✅ Built |
| Team member card (photo + name + role) | Avatar + Card | ✅ Built |
| Timeline (school history) | Custom | ❌ Missing |
| Value proposition grid | Custom + Card | ✅ Built |

#### Programs (`/portfolio/programs`)
| Component | Source | Status |
|-----------|--------|--------|
| Program card (icon + age + description + highlights) | Custom + Card | ✅ Built |
| Curriculum section | Custom | ✅ Built |
| Extracurricular grid | Custom + Badge | ✅ Built |
| Schedule table | Table | ✅ Available |
| Age comparison tabs | Tabs | ✅ Available |

#### Admissions (`/portfolio/admissions`)
| Component | Source | Status |
|-----------|--------|--------|
| Enrollment steps | Custom | ✅ Built |
| Booking form (multi-field) | Form + Input + Select | ✅ Built |
| Stepper (multi-step progress) | — | ❌ Missing |
| Pricing/offer cards | Card | ✅ Built |
| FAQ accordion | Accordion | ✅ Available |
| Date picker (visit scheduling) | Calendar | ✅ Available |

#### Contact (`/portfolio/contact`)
| Component | Source | Status |
|-----------|--------|--------|
| Contact form | Form + Input + Textarea + Select | ✅ Built |
| Info cards (phone, email, address, hours) | Card | ✅ Built |
| Map embed | iframe / custom | ✅ Built |
| WhatsApp CTA button | Button + external link | ✅ Built |

#### Shared (all pages)
| Component | Source | Status |
|-----------|--------|--------|
| Header + mobile nav | PortfolioRoot | ✅ Built |
| Footer (4-col) | PortfolioRoot | ✅ Built |
| Button (6 variants) | ui/button | ✅ Available |
| Skeleton (loading) | ui/skeleton | ✅ Available |
| Alert (error/success) | ui/alert | ✅ Available |
| Toast (notifications) | ui/sonner | ✅ Available |
| Dialog (modal) | ui/dialog | ✅ Available |
| Tooltip | ui/tooltip | ✅ Available |

### Missing components → design-system-generator

| Component | Used on | Priority |
|-----------|---------|----------|
| Stepper | Admissions (multi-step form) | High |
| Timeline | About (school history) | Medium |
| Stat card | Home (key numbers display) | Medium |
| Empty state | All pages (no-data fallback) | Low |

---

## 6. Page Templates (Wireframe Descriptions)

### Home
```
┌─────────────────────────────────────────┐
│ [Badge: Tahun Ajaran]                   │
│ H1: Headline (6 words)                  │
│ H2: Subheadline (15 words)              │
│ [Primary CTA] [Secondary CTA]           │
│ Microcopy (90 chars)                    │
├─────────────────────────────────────────┤
│ ┌───────┐ ┌───────┐ ┌───────┐          │
│ │Feature│ │Feature│ │Feature│  3-col    │
│ │Card 1 │ │Card 2 │ │Card 3 │  grid    │
│ └───────┘ └───────┘ └───────┘          │
├─────────────────────────────────────────┤
│ Social Proof: 3 testimonial cards       │
│ Trust signals: stats row                │
├─────────────────────────────────────────┤
│ CTA Banner: gradient + button           │
└─────────────────────────────────────────┘
```

### About (Tentang Kami)
```
┌─────────────────────────────────────────┐
│ H1 + H2 (centered hero)                │
├─────────────────────────────────────────┤
│ ┌──────────┐ ┌──────────┐              │
│ │ Mission  │ │ Vision   │  2-col       │
│ └──────────┘ └──────────┘              │
├─────────────────────────────────────────┤
│ Timeline: school milestones             │
├─────────────────────────────────────────┤
│ Values grid: 4-6 value cards            │
├─────────────────────────────────────────┤
│ Team section: teacher cards grid        │
└─────────────────────────────────────────┘
```

### Programs (Program)
```
┌─────────────────────────────────────────┐
│ H1 + H2 (centered hero)                │
├─────────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐            │
│ │KB    │ │TK-A  │ │TK-B  │ 3-col      │
│ │2-3yr │ │4-5yr │ │5-6yr │ program     │
│ └──────┘ └──────┘ └──────┘ cards       │
├─────────────────────────────────────────┤
│ Curriculum highlights (Metode Ummi)     │
├─────────────────────────────────────────┤
│ Extracurricular grid (7 items)          │
├─────────────────────────────────────────┤
│ CTA: "Daftar Sekarang"                 │
└─────────────────────────────────────────┘
```

### Admissions (Pendaftaran)
```
┌─────────────────────────────────────────┐
│ H1 + H2 (centered hero)                │
├─────────────────────────────────────────┤
│ Enrollment steps (4 steps visual)       │
│ 1→ 2→ 3→ 4                            │
├──────────────────┬──────────────────────┤
│ Booking form     │ Pricing / Offers     │
│ (left, 60%)     │ (right, 40%)         │
├──────────────────┴──────────────────────┤
│ FAQ Accordion (8 questions)             │
├─────────────────────────────────────────┤
│ CTA: WhatsApp contact                   │
└─────────────────────────────────────────┘
```

### Contact (Kontak)
```
┌─────────────────────────────────────────┐
│ H1 + H2 (centered hero)                │
├──────────────────┬──────────────────────┤
│ Contact form     │ Info cards            │
│ (left, 60%)     │ (right, 40%)         │
│                  │ • Phone              │
│                  │ • Email              │
│                  │ • Address            │
│                  │ • Hours              │
├──────────────────┴──────────────────────┤
│ Map embed (full width)                  │
├─────────────────────────────────────────┤
│ WhatsApp CTA banner                     │
└─────────────────────────────────────────┘
```

---

## 7. Technical Stack

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
**No backend**: All content is in-component. Forms use client-side handling (future: API or form service).

---

## 8. Performance Budgets

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Largest Contentful Paint (LCP)** | ≤ 2.5s | Google Lighthouse, mobile 4G |
| **First Input Delay (FID)** | ≤ 100ms | Chrome UX Report |
| **Cumulative Layout Shift (CLS)** | ≤ 0.1 | Lighthouse |
| **Time to Interactive (TTI)** | ≤ 3.5s | Lighthouse, mobile |
| **Total Bundle Size (gzipped)** | ≤ 200KB JS | Build output |
| **Hero image** | ≤ 100KB | WebP/AVIF, responsive srcset |
| **First Byte (TTFB)** | ≤ 600ms | CDN edge delivery |

### Optimization strategies

- Code-split per route (React Router lazy loading)
- Preload critical fonts (Quicksand)
- Use responsive images with `srcset` + `loading="lazy"`
- Minimize Radix UI bundle (tree-shake unused primitives)
- Inline critical CSS (Tailwind purge handles this)
- Preconnect to external origins (Google Maps, WhatsApp)

---

## 9. SEO Structure

### URL patterns

```
/portfolio/              → Home
/portfolio/about         → Tentang Kami
/portfolio/programs      → Program
/portfolio/admissions    → Pendaftaran
/portfolio/contact       → Kontak
```

Clean, lowercase, no trailing slashes, no query parameters for content pages.

### Meta templates (Bahasa Indonesia)

| Page | Title | Description (max 155 chars) |
|------|-------|---------------------------|
| Home | `PAUD Jasmine Al Muflihuun - [H1 headline]` | `[Subheadline]. Sekolah Islam PAUD, KB, TK, TPA di Sleman, Yogyakarta. Daftar sekarang!` |
| About | `Tentang Kami - PAUD Jasmine Al Muflihuun` | `[Visi]. Sekolah Islam resmi dengan metode Ummi dan fasilitas modern di Yogyakarta.` |
| Programs | `Program Pendidikan - PAUD Jasmine Al Muflihuun` | `Program KB, TK, TPA dengan Metode Ummi, Coding, English Class. Untuk anak usia 0-6 tahun.` |
| Admissions | `Pendaftaran Siswa Baru - PAUD Jasmine Al Muflihuun` | `Daftar sekarang! Free Trial Class & Diskon Sibling 25%. Booking kunjungan sekolah.` |
| Contact | `Hubungi Kami - PAUD Jasmine Al Muflihuun` | `Hubungi PAUD Jasmine di 081328846089. Jl. Grogolsari, Kalasan, Sleman, Yogyakarta.` |

### Heading hierarchy (per page)

```
<h1> — One per page, matches hero headline
  <h2> — Section titles (features, FAQ, social proof)
    <h3> — Card titles, FAQ questions, sub-items
```

### Structured data (JSON-LD)

```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "PAUD Jasmine Al Muflihuun",
  "description": "Sekolah Islam PAUD, KB, TK, TPA di Sleman, Yogyakarta",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Grogolsari, Juwangen, Purwomartani",
    "addressLocality": "Kalasan, Sleman",
    "addressRegion": "Yogyakarta",
    "addressCountry": "ID"
  },
  "telephone": ["+6281328846089", "+6285229552707"],
  "url": "https://jasmine.sch.id",
  "sameAs": []
}
```

### SEO keywords (target, Bahasa Indonesia)

**Primary**: PAUD Islam Sleman, TK Islam Yogyakarta, sekolah Islam anak usia dini
**Secondary**: Metode Ummi Yogyakarta, PAUD dengan coding, kindergarten Kalasan Sleman
**Long-tail**: pendaftaran PAUD Islam Sleman 2026, sekolah TK terbaik Yogyakarta, PAUD dengan fasilitas CCTV dan AC

---

## 10. Skill Coordination Map

```
architecture-strategist (YOU)
│
├── Plans sitemap, flows, templates, budgets, SEO
│
├── → content-architect
│     Writes Bahasa Indonesia copy per page
│     (hero, features, FAQ, testimonials, footer)
│
├── → design-system-generator
│     Creates missing UI components
│     Maintains design tokens
│     (stepper, timeline, stat-card, etc.)
│
└── → frontend-architect
      Implements copy + components into pages
      Builds interactive logic (forms, search, auth)
      Uses existing design system
```

**Workflow order**: You plan → content-architect writes → design-system-generator builds missing pieces → frontend-architect implements.
