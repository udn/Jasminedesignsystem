# Architecture Strategist – Reference

Technical specification for PAUD Jasmine Al Muflihuun portfolio website.

**Website type**: Portfolio / institutional — Islamic kindergarten (PAUD, KB, TK, TPA)
**Target audience**: First-time parents in Indonesia, children 0–6, middle-to-upper income, value safety + Islamic education + play-based learning
**Key features**: School info, program details (including bilingual class), admissions/enrollment, visit booking, contact
**Tagline**: Pendidikan Investasi Masa Depan
**Tech considerations**: Responsive (mobile-first), SEO (Bahasa Indonesia), Performance (fast LCP)

### Parent Research Summary (Drives Content & UX Decisions)

| Concern | UX Implication |
|---------|---------------|
| Proximity to home | Show map + "5 menit dari..." on Contact page |
| Speech delay support | Feature story on Programs page about communication development |
| Play-based learning | Emphasize "belajar sambil bermain" visual language, show happy kids |
| Safety & comfort | CCTV, fogging, AC — show as trust badges everywhere |
| Social development | Testimonials from parents about child progress |
| Slow-to-warm-up children | Highlight patient educators, small class sizes, trial class |
| Affordability vs international schools | Position as "kualitas internasional, harga terjangkau" |
| Bilingual concerns | Dedicated FAQ section answering 12 common bilingual questions |
| Want measurable progress | Show milestone tracking, parent communication channels |

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

### Flow 4: Parent Interested in Bilingual Class → Enrolls (New)

```
[Sees Bilingual Class banner on Home]
  → clicks "Pelajari Selengkapnya"
    → [Programs page, scrolled to Bilingual section]
      → reads 6 feature chips (fun learning, expert curriculum, etc.)
      → expands bilingual FAQ (12 questions)
      → satisfied with answers
      → clicks "Daftar Kelas Bilingual"
        → [Admissions page, program pre-selected: Bilingual]
          → fills form → submits → WhatsApp follow-up
```

**Key metrics**: Bilingual banner CTR, FAQ expansion rate, Form completion with "Bilingual" selected
**Friction points**: Not enough detail on bilingual method, no teacher profiles, unclear pricing

### Flow 5: Concerned Parent (Speech Delay / Slow-to-warm-up) → Gains Confidence

```
[Lands on Home or Programs via search/referral]
  → sees "tumbuh kembang" section on Programs
  → reads how Jasmine supports communication development
  → reads testimonial from parent with similar concern
  → navigates to About → sees patient, qualified educators
  → clicks "Jadwalkan Kunjungan" or WhatsApp
    → discusses child's specific needs with school
```

**Key metrics**: Time on Programs tumbuh kembang section, Testimonial engagement, Contact conversion
**Friction points**: No specific speech/developmental info, generic testimonials

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
  isBilingual?: boolean;   // true for bilingual class (4–6yr)
  badge?: string;          // e.g. "NEW", "Bilingual"
}

interface BilingualInfo {
  targetAge: string;       // "4–6 tahun"
  features: string[];      // 6 key features from flyer
  faqItems: FaqItem[];     // 12 bilingual-specific FAQs
}

interface FacilityItem {
  icon: LucideIcon;
  name: string;
  description: string;
  category: 'keamanan' | 'kenyamanan' | 'edukasi' | 'kesehatan';
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
  program: string;         // required, select: KB, TK-A, TK-B, TPA, Bilingual Class
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
| Bilingual class feature section (highlighted banner) | Custom + Badge | ❌ Missing |
| Curriculum section | Custom | ✅ Built |
| Extracurricular grid | Custom + Badge | ✅ Built |
| Development milestones (tumbuh kembang) | Custom | ❌ Missing |
| Bilingual FAQ accordion (12 questions) | Accordion | ✅ Available |
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
| Trust badge row | Home, Admissions (horizontal scroll, icon + label) | High |
| Bilingual feature banner | Home, Programs (highlighted section with chips) | High |
| Photo gallery grid | About, Home (facility showcase) | High |
| Development milestone card | Programs (tumbuh kembang section) | Medium |
| Timeline | About (school history) | Medium |
| Stat card | Home (key numbers display) | Medium |
| Floating WhatsApp CTA | Contact, all pages mobile (sticky bottom) | Medium |
| Empty state | All pages (no-data fallback) | Low |

---

## 6. Page Templates (Wireframe Descriptions)

### Home — "Pendidikan Investasi Masa Depan"
```
┌─────────────────────────────────────────┐
│ HERO (full-width, gradient overlay)     │
│ [Badge: Tahun Ajaran 2026–2027]         │
│ H1: Emotional headline (6 words)        │
│ H2: Subheadline (15 words)              │
│ [Primary CTA: Jadwalkan Kunjungan]      │
│ [Secondary CTA: Lihat Program]          │
│ Microcopy: "Free Trial Class tersedia"  │
│ Trust chips: CCTV ✓ AC ✓ Play-based ✓  │
├─────────────────────────────────────────┤
│ TRUST BADGES (horizontal scroll mobile) │
│ 🛡️ CCTV 24 Jam | ❄️ AC & Air Purifier  │
│ 📖 Metode Ummi | 🤖 Coding & Robotic   │
├─────────────────────────────────────────┤
│ FEATURE BLOCKS (3-col → stack mobile)   │
│ ┌───────────┐ ┌──────────┐ ┌─────────┐ │
│ │ Pendidikan│ │ Fasilitas│ │ Ekstra- │ │
│ │ Islami &  │ │ Aman &   │ │ kurikuler│ │
│ │ Karakter  │ │ Modern   │ │ Modern  │ │
│ └───────────┘ └──────────┘ └─────────┘ │
├─────────────────────────────────────────┤
│ BILINGUAL CLASS HIGHLIGHT (NEW badge)   │
│ Banner: "Open Bilingual Class 4–6 thn"  │
│ 6 feature chips from flyer              │
│ CTA: "Pelajari Selengkapnya"            │
├─────────────────────────────────────────┤
│ SOCIAL PROOF                            │
│ 3 parent testimonials (real concerns):  │
│ - Speech delay progress story           │
│ - Play-based learning testimony         │
│ - Safety & comfort testimony            │
│ Stats: [X+ Siswa] [X Tahun] [X Ekskul] │
├─────────────────────────────────────────┤
│ FACILITY SHOWCASE (image grid)          │
│ 4-col grid of facility photos           │
│ Indoor playground | Mushola | Lab       │
├─────────────────────────────────────────┤
│ CTA BANNER                              │
│ "Daftarkan Buah Hati Anda Sekarang"     │
│ [CTA] + [WhatsApp button]              │
│ "Free Trial Class & Diskon Sibling 25%" │
└─────────────────────────────────────────┘
```

### About (Tentang Kami) — "Kenali Kami Lebih Dekat"
```
┌─────────────────────────────────────────┐
│ HERO (centered)                         │
│ H1: Tentang headline                    │
│ H2: Brand story subheadline             │
│ Background: School photo overlay        │
├─────────────────────────────────────────┤
│ BRAND STORY (narrative section)         │
│ Left: Brand story text (warm, personal) │
│ Right: School photo                     │
├─────────────────────────────────────────┤
│ VISI & MISI (2-col cards)              │
│ ┌──────────────┐ ┌──────────────┐      │
│ │ Visi card    │ │ Misi card    │      │
│ │ "Generasi    │ │ 4-5 points   │      │
│ │  Cerdas..."  │ │              │      │
│ └──────────────┘ └──────────────┘      │
├─────────────────────────────────────────┤
│ NILAI-NILAI (values grid, 6 cards)      │
│ Islami | Aman | Kreatif | Mandiri      │
│ Disiplin | Menyenangkan                │
├─────────────────────────────────────────┤
│ KENAPA JASMINE? (why-us section)        │
│ Address parent concerns directly:       │
│ - Dekat rumah & akses mudah            │
│ - Lingkungan aman & terpercaya         │
│ - Belajar tanpa tekanan                │
│ - Guru profesional & sabar             │
│ - Harga terjangkau, kualitas premium   │
├─────────────────────────────────────────┤
│ TEAM SECTION (educator cards)           │
│ Teacher photo + name + qualification    │
│ Highlight: bilingual teachers           │
├─────────────────────────────────────────┤
│ FACILITY TOUR (photo gallery + badges)  │
│ Indoor | Outdoor | Mushola | Library    │
│ CCTV | AC | Playground                 │
├─────────────────────────────────────────┤
│ CTA: "Jadwalkan Kunjungan Sekolah"      │
└─────────────────────────────────────────┘
```

### Programs (Program) — "Kurikulum yang Menyenangkan"
```
┌─────────────────────────────────────────┐
│ HERO (centered)                         │
│ H1: Program headline                    │
│ H2: Play-based learning emphasis        │
│ Age badge: "Usia 0–6 Tahun"            │
├─────────────────────────────────────────┤
│ PROGRAM CARDS (4-col → 2-col → stack)   │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌────────┐ │
│ │KB    │ │TK-A  │ │TK-B  │ │TPA     │ │
│ │0-3yr │ │4-5yr │ │5-6yr │ │Al-Quran│ │
│ │      │ │      │ │      │ │        │ │
│ └──────┘ └──────┘ └──────┘ └────────┘ │
├─────────────────────────────────────────┤
│ BILINGUAL CLASS (featured section, NEW) │
│ ┌─────────────────────────────────────┐ │
│ │ 🌍 Open Bilingual Class            │ │
│ │ For 4–6 Years Old                  │ │
│ │ ┌─────┐ ┌──────┐ ┌──────┐         │ │
│ │ │Fun  │ │Expert│ │Prof  │ 6 chips  │ │
│ │ │Learn│ │Curric│ │Educ. │          │ │
│ │ └─────┘ └──────┘ └──────┘         │ │
│ │ CTA: "Daftar Kelas Bilingual"      │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│ METODE UMMI (program unggulan section)  │
│ Left: Description + benefits            │
│ Right: Photo children learning Quran    │
├─────────────────────────────────────────┤
│ EXTRACURRICULAR GRID (7 items)          │
│ 🤖 Coding & Robotic | 🇬🇧 English       │
│ 🏊 Berenang | 🥁 Drumband | 🎵 Angklung │
│ 💃 Menari | 🎨 Menggambar & Mewarnai    │
├─────────────────────────────────────────┤
│ TUMBUH KEMBANG SECTION (parent concern) │
│ How Jasmine supports:                   │
│ - Motorik | Sensorik | Komunikasi      │
│ - Sosial | Kemandirian | Karakter      │
│ (Addresses speech delay / slow-warm-up) │
├─────────────────────────────────────────┤
│ BILINGUAL FAQ (12 questions, accordion) │
│ Target, method, teachers, progress...   │
├─────────────────────────────────────────┤
│ CTA: "Coba Free Trial Class"            │
└─────────────────────────────────────────┘
```

### Admissions (Pendaftaran) — "Bergabung Bersama Kami"
```
┌─────────────────────────────────────────┐
│ HERO                                    │
│ H1: Enrollment headline                 │
│ H2: "Free Trial Class & Diskon 25%"     │
│ Urgency badge: "Kuota Terbatas"         │
├─────────────────────────────────────────┤
│ ENROLLMENT STEPS (4 steps stepper)      │
│ ① Isi Formulir → ② Jadwal Kunjungan    │
│ → ③ Trial Class → ④ Konfirmasi         │
├─────────────────────────────────────────┤
│ OFFERS (2-col cards, eye-catching)      │
│ ┌───────────────┐ ┌───────────────┐    │
│ │ 🎁 Free       │ │ 👶👶 Diskon   │    │
│ │ Trial Class   │ │ Sibling 25%   │    │
│ │ "Coba dulu,   │ │ "Untuk        │    │
│ │  baru yakin!" │ │  pendaftar    │    │
│ │               │ │  ke-2"        │    │
│ └───────────────┘ └───────────────┘    │
├──────────────────┬──────────────────────┤
│ BOOKING FORM     │ WHY CHOOSE sidebar   │
│ Multi-step:      │ Trust signals:       │
│ Step 1: Parent   │ ✓ Sekolah resmi      │
│ Step 2: Child    │ ✓ CCTV 24 jam        │
│ Step 3: Program  │ ✓ Guru profesional   │
│ Step 4: Schedule │ ✓ Play-based         │
│ (left, 60%)     │ (right, 40%)         │
├──────────────────┴──────────────────────┤
│ REQUIREMENTS (dokumen pendaftaran)      │
│ Checklist of documents needed           │
├─────────────────────────────────────────┤
│ FAQ ACCORDION (8 general questions)     │
│ Keamanan, metode, usia, trial, dll.     │
├─────────────────────────────────────────┤
│ REASSURANCE BANNER                      │
│ "Masih ragu? Hubungi kami langsung"     │
│ [WhatsApp CTA] + [Phone CTA]           │
└─────────────────────────────────────────┘
```

### Contact (Kontak) — "Hubungi Kami"
```
┌─────────────────────────────────────────┐
│ HERO (centered)                         │
│ H1: Contact headline                    │
│ H2: "Kami siap membantu"               │
├──────────────────┬──────────────────────┤
│ CONTACT FORM     │ QUICK CONTACT CARDS  │
│ Name             │ ┌──────────────┐     │
│ Email            │ │📞 Telepon    │     │
│ Phone            │ │081328846089  │     │
│ Subject (select) │ │085229552707  │     │
│ Message          │ └──────────────┘     │
│ [Kirim]          │ ┌──────────────┐     │
│                  │ │💬 WhatsApp   │     │
│                  │ │Tap to chat   │     │
│                  │ └──────────────┘     │
│                  │ ┌──────────────┐     │
│                  │ │📍 Lokasi     │     │
│                  │ │Jl. Grogolsari│     │
│                  │ │Kalasan, Sleman│     │
│                  │ └──────────────┘     │
│                  │ ┌──────────────┐     │
│                  │ │📷 Instagram  │     │
│                  │ │@jasmine...   │     │
│                  │ └──────────────┘     │
│ (left, 55%)     │ (right, 45%)         │
├──────────────────┴──────────────────────┤
│ MAP EMBED (full width, interactive)     │
│ Google Maps with school pin             │
│ "5 menit dari..." nearby landmarks     │
├─────────────────────────────────────────┤
│ VISIT HOURS (operating schedule)        │
│ Senin–Jumat: [jam]                     │
│ Sabtu: [jam, by appointment]           │
├─────────────────────────────────────────┤
│ FLOATING WHATSAPP CTA (mobile sticky)   │
│ "Chat langsung via WhatsApp"            │
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
**Secondary**: Metode Ummi Yogyakarta, PAUD dengan coding, kindergarten Kalasan Sleman, kelas bilingual PAUD Yogyakarta
**Long-tail**: pendaftaran PAUD Islam Sleman 2026, sekolah TK terbaik Yogyakarta, PAUD dengan fasilitas CCTV dan AC, kelas bilingual anak 4–6 tahun Sleman, PAUD play-based learning Yogyakarta

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
