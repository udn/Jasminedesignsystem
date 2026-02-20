# Architecture Plan: 5-Page Portfolio Website

## PAUD Jasmine Al Muflihuun — Based on Flyer Analysis & Parent Research

**Date**: 2026-02-20
**Status**: Planning
**Architect**: architecture-strategist

---

## Executive Summary

Build a 5-page conversion-focused portfolio website for PAUD Jasmine Al Muflihuun that:

1. **Converts** — drives enrollment bookings and visit scheduling
2. **Reassures** — addresses real parent concerns from research (safety, speech delay, play-based, affordability)
3. **Differentiates** — highlights bilingual class (new), Metode Ummi, modern extracurriculars
4. **Performs** — mobile-first, fast, SEO-optimized in Bahasa Indonesia

### Key Insights from Flyers

| From Flyer | Website Implication |
|-----------|-------------------|
| "Pendidikan Investasi Masa Depan" | Use as brand tagline, hero messaging |
| Open Bilingual Class (4–6yr) | New section on Home + dedicated section on Programs |
| Coding & Robotic by Jasmine | Differentiation point — not generic coding class |
| Fogging Disinfektan Secara Berkala | Post-COVID trust signal, feature in safety section |
| CCTV & TV Edukasi | Trust signal badges |
| Free Trial Class + Sibling Diskon 25% | Primary conversion offers, feature prominently |
| Menerima Peserta Didik Baru & Inden | Urgency messaging: "Kuota terbatas, bisa inden" |

### Key Insights from Parent Research

| Parent Concern | Content Strategy |
|---------------|-----------------|
| "Jarak 5 menit dari rumah" | Show map + proximity messaging on Contact |
| "Anak didiagnosa speech delay" | Tumbuh kembang section on Programs addressing communication development |
| "Play-based, ngga terbeban belajar" | Emphasize "belajar sambil bermain" throughout, no homework messaging |
| "Tempat aman, nyaman, fun" | Trust badges on every page: CCTV, AC, fogging, playground |
| "Anak slow to warm up" | Highlight patient educators, small class size, trial class |
| "Harga terjangkau vs international" | Position as premium quality at accessible price |
| "12 bilingual questions parents ask" | Full bilingual FAQ on Programs page |
| "Senang sekolah = mau belajar terus" | Testimonials about happy children, use joyful imagery |
| "Progress terukur" | Mention parent communication channels, progress reports |

---

## Page 1: Home (`/portfolio`)

### Purpose
Primary landing page. Emotional hook → trust building → conversion.

### Conversion Goal
**Primary**: Click "Jadwalkan Kunjungan" → Admissions page
**Secondary**: Click "Lihat Program" → Programs page, WhatsApp chat

### Section Breakdown

#### 1.1 Hero Section
- **Background**: Full-width photo of happy children at playground (from flyer imagery)
- **Overlay**: Gradient from brand primary color
- **Badge**: "Tahun Ajaran 2026–2027" + "Pendaftaran Dibuka!"
- **H1**: Emotional headline (6 words, Bahasa Indonesia) — content-architect delivers
- **H2**: Subheadline addressing parent aspiration (15 words) — content-architect delivers
- **Primary CTA**: "Jadwalkan Kunjungan" → `/portfolio/admissions`
- **Secondary CTA**: "Lihat Program Kami" → `/portfolio/programs`
- **Microcopy**: "✓ Free Trial Class tersedia" (90 chars max)

**Components**: Hero (custom), Button (2 variants), Badge

#### 1.2 Trust Badges Row
- Horizontal scrollable on mobile, 4-col grid on desktop
- Items: 🛡️ CCTV 24 Jam | ❄️ AC & Air Purifier | 📖 Metode Ummi | 🤖 Coding & Robotic
- Small icons + short labels, subtle background

**Components**: Trust badge row → **NEW, request from design-system-generator**

#### 1.3 Feature Blocks (3 cards)
- **Card 1**: Pendidikan Islami & Karakter — Metode Ummi, nilai Islami, akhlak
- **Card 2**: Fasilitas Aman & Modern — CCTV, AC, fogging, playground
- **Card 3**: Ekstrakurikuler Unggulan — Coding, English, Berenang, Drumband

Each card: Icon (Lucide) + H2 + Body (180 chars) + 3 bullet benefits

**Components**: Card (existing), custom FeatureCard composition

#### 1.4 Bilingual Class Highlight
- **NEW** banner section with accent background
- Badge: "NEW" or "Baru!"
- Title: "Open Bilingual Class"
- Subtitle: "Untuk Anak Usia 4–6 Tahun"
- 6 feature chips from flyer:
  1. Fun & Enjoyable Learning
  2. Curriculum Prepared by Education Experts
  3. Professional and Child Friendly Educators
  4. Teachers Fluent in Two Languages
  5. Comfortable Class & School Environment
  6. Fun English Class
- CTA: "Pelajari Selengkapnya" → `/portfolio/programs#bilingual`

**Components**: Bilingual feature banner → **NEW, request from design-system-generator**

#### 1.5 Social Proof
- 3 testimonial cards inspired by real parent research:
  - Parent 1: Child with speech delay who progressed (addresses: speech concern)
  - Parent 2: Child who loves school and isn't pressured (addresses: play-based concern)
  - Parent 3: Parent happy with safety and facilities (addresses: safety concern)
- Stats row: [Jumlah Siswa] [Tahun Pengalaman] [Ekstrakurikuler] [Rating]

**Components**: Testimonial card (existing), Stat card → **design-system-generator**

#### 1.6 Facility Showcase
- 2×2 photo grid with overlay labels
- Photos: Indoor playground, Mushola, Classroom (AC visible), Outdoor area
- Caption badges on each photo

**Components**: Photo gallery grid → **NEW, request from design-system-generator**

#### 1.7 CTA Banner
- Gradient background (primary)
- H2: "Daftarkan Buah Hati Anda Sekarang"
- Body: "Free Trial Class & Diskon Sibling 25% untuk pendaftar ke-2"
- [Primary CTA: Daftar Sekarang] [WhatsApp CTA]
- Urgency: "Kuota terbatas — jangan sampai terlewat!"

**Components**: CTA Banner (existing composition), Button

### Page 1 Performance Budget
| Metric | Target |
|--------|--------|
| LCP | ≤ 2.5s (hero image must be optimized, preloaded) |
| CLS | ≤ 0.1 (reserve space for hero image, testimonial cards) |
| TTI | ≤ 3.5s |
| Hero image | ≤ 80KB (WebP, 1200px wide, srcset for mobile) |

### Page 1 SEO
- **Title**: `PAUD Jasmine Al Muflihuun - [H1]`
- **Description**: `[Subheadline]. Sekolah Islam PAUD, KB, TK, TPA di Sleman, Yogyakarta. Free Trial Class!`
- **H1**: One, from hero
- **Structured data**: `EducationalOrganization` + `LocalBusiness`
- **Keywords**: PAUD Islam Sleman, TK Islam Yogyakarta, sekolah Islam anak usia dini

---

## Page 2: About / Tentang Kami (`/portfolio/about`)

### Purpose
Build deep trust. Show the people, values, and facilities behind the brand.

### Conversion Goal
Navigate to Programs or Admissions after gaining confidence.

### Section Breakdown

#### 2.1 Hero
- Centered layout, school photo background with overlay
- H1: About headline (6 words)
- H2: Brand positioning subheadline

#### 2.2 Brand Story
- 2-col layout: narrative text (left) + school photo (right)
- Warm, personal tone — "Kami percaya setiap anak adalah investasi masa depan..."
- Mention founding story, community roots in Kalasan

#### 2.3 Visi & Misi
- 2 large cards side by side
- **Visi**: "Mempersiapkan Generasi Cerdas, Kreatif, Mandiri, Disiplin, dan Berakhlakul Karimah"
- **Misi**: 4–5 action points derived from visi

**Components**: Card (existing), custom VisiMisi composition

#### 2.4 Nilai-Nilai (Values Grid)
- 6 value cards in 3×2 grid (→ 2×3 on tablet, stack on mobile)
- Each: Icon + title + short description
- Values: Islami, Aman, Kreatif, Mandiri, Disiplin, Menyenangkan

#### 2.5 Kenapa Jasmine? (Why Us)
- Directly addresses parent concerns from research
- Left-aligned text with checkmark list:
  - ✓ Lokasi strategis, dekat pemukiman — anak tidak capek perjalanan
  - ✓ Lingkungan aman: CCTV, fogging berkala, toilet bersih
  - ✓ Belajar tanpa tekanan — play-based, no homework
  - ✓ Guru profesional, sabar, dan terlatih
  - ✓ Kualitas premium, harga terjangkau (vs international schools)
  - ✓ Progress anak terkomunikasikan rutin ke orang tua

#### 2.6 Team Section
- Grid of educator cards (photo + name + role + short bio)
- Highlight bilingual teachers with badge
- Warm, approachable photos

**Components**: TeamMember card (Avatar + Card, existing)

#### 2.7 Facility Tour
- Photo gallery with category tabs or badges:
  - Keamanan: CCTV, fogging
  - Kenyamanan: AC, Air Purifier, toilet bersih
  - Edukasi: Perpustakaan, TV Edukasi, lab coding
  - Bermain: Indoor & outdoor playground

**Components**: Photo gallery grid → **design-system-generator**, Tabs (existing)

#### 2.8 CTA
- "Ingin melihat langsung? Jadwalkan kunjungan sekolah"
- [Primary CTA] [WhatsApp CTA]

### Page 2 SEO
- **Title**: `Tentang Kami - PAUD Jasmine Al Muflihuun`
- **Description**: `Sekolah Islam resmi dengan Metode Ummi, guru profesional, dan fasilitas modern di Kalasan, Sleman, Yogyakarta.`
- **Structured data**: `EducationalOrganization`

---

## Page 3: Programs / Program (`/portfolio/programs`)

### Purpose
Detailed program information. Convert interest into enrollment intent.

### Conversion Goal
Click "Daftar" or "Coba Trial Class" → Admissions page.

### Section Breakdown

#### 3.1 Hero
- H1: Program headline
- H2: Emphasize play-based approach
- Badge: "Usia 0–6 Tahun"

#### 3.2 Program Cards (4 programs)
- **KB (Kelompok Bermain)**: Usia 0–3 tahun
  - Focus: Stimulasi motorik, sensorik, sosialisasi awal
  - Highlights: Pendekatan bermain, lingkungan aman, pendampingan intensif
- **TK-A**: Usia 4–5 tahun
  - Focus: Kreativitas, kemandirian, dasar baca-tulis
  - Highlights: Metode Ummi level dasar, ekskul pengenalan
- **TK-B**: Usia 5–6 tahun
  - Focus: Persiapan SD, karakter, akademik dasar
  - Highlights: Metode Ummi lanjutan, coding, English class
  - Badge: "Bilingual Available" (if enrolled in bilingual)
- **TPA (Taman Pendidikan Al-Qur'an)**
  - Focus: Belajar membaca dan mencintai Al-Qur'an
  - Highlights: Metode Ummi, hafalan, adab

**Components**: ProgramCard (existing), Badge

#### 3.3 Bilingual Class (Featured Section)
- Highlighted with accent background + "NEW" badge
- Title: "Open Bilingual Class — Untuk Usia 4–6 Tahun"
- 6 feature chips from second flyer:
  1. Fun & Enjoyable Learning
  2. Curriculum Prepared by Education Experts
  3. Professional and Child Friendly Educators
  4. Teachers Fluent in Two Languages
  5. Comfortable Class & School Environment
  6. Fun English Class
- Description: detailed paragraph about bilingual approach
- Photo: bilingual classroom activity
- CTA: "Daftar Kelas Bilingual" → `/portfolio/admissions?program=bilingual`

**Components**: Bilingual feature banner → **design-system-generator**

#### 3.4 Metode Ummi (Program Unggulan)
- 2-col: description + benefits (left), photo of Quran learning (right)
- H2: "Belajar Membaca dan Mencintai Al-Qur'an"
- Explain methodology, progression, outcomes
- Trust signal: "Program unggulan dengan metode terbukti"

#### 3.5 Extracurricular Grid
- 7 items in responsive grid (4-col desktop, 2-col mobile)
- Each: Icon/emoji + name + short description
  1. 🤖 Coding & Robotic by Jasmine Al Muflihuun
  2. 🇬🇧 English Class (Fun English)
  3. 🏊 Berenang
  4. 🥁 Drumband
  5. 🎵 Angklung
  6. 💃 Menari
  7. 🎨 Menggambar & Mewarnai

**Components**: Badge/Card grid (existing)

#### 3.6 Tumbuh Kembang Section (NEW — addresses parent concerns)
- Title: "Mendukung Tumbuh Kembang Optimal Anak Anda"
- 6 milestone cards:
  - Motorik Kasar & Halus
  - Sensorik & Eksplorasi
  - Komunikasi & Bahasa (addresses speech delay concern)
  - Sosial & Emosional (addresses slow-to-warm-up)
  - Kemandirian
  - Karakter & Akhlak
- Each card: icon + title + how Jasmine supports it
- Reassurance: "Setiap anak berkembang dengan kecepatannya sendiri. Guru kami siap mendampingi."

**Components**: Development milestone card → **NEW, design-system-generator**

#### 3.7 Bilingual FAQ (12 Questions)
- Accordion format, addresses the 12 bilingual questions from parent research:
  1. Target kelas bilingual: exposure, komunikasi aktif, atau akademik?
  2. Apakah bilingual dipakai setiap hari atau hanya di jam tertentu?
  3. Metode apa yang digunakan? (immersive, play-based, thematic, TPR)
  4. Apakah bahasa kedua dipakai secara natural dalam bermain?
  5. Bagaimana guru menyesuaikan dengan usia dan tahap perkembangan anak?
  6. Berapa persen penggunaan bahasa Indonesia vs bahasa asing?
  7. Apakah guru fasih dan terlatih mengajar anak usia dini?
  8. Apakah ada guru native speaker atau bilingual teacher?
  9. Apakah guru memahami perkembangan bahasa anak (speech–language development)?
  10. Apakah orang tua diberi panduan pendampingan di rumah?
  11. Bagaimana komunikasi sekolah ke orang tua terkait progres anak?
  12. Indikator "berhasil" di kelas bilingual itu apa?

**Components**: Accordion (existing Radix UI)

#### 3.8 CTA
- "Ingin mencoba dulu? Daftar Free Trial Class!"
- [Primary CTA: Coba Trial Class] [Secondary: Daftar Sekarang]

### Page 3 SEO
- **Title**: `Program Pendidikan - PAUD Jasmine Al Muflihuun`
- **Description**: `Program KB, TK, TPA & Kelas Bilingual dengan Metode Ummi, Coding, English Class. Usia 0-6 tahun. Free Trial Class!`
- **Keywords**: kelas bilingual PAUD Yogyakarta, PAUD play-based learning, Metode Ummi Sleman

---

## Page 4: Admissions / Pendaftaran (`/portfolio/admissions`)

### Purpose
Convert intent into action. Make enrollment easy and anxiety-free.

### Conversion Goal
**Primary**: Form submission (booking visit / enrollment)
**Secondary**: WhatsApp contact for hesitant parents

### Section Breakdown

#### 4.1 Hero
- H1: Enrollment headline
- H2: Highlight offers ("Free Trial Class & Diskon Sibling 25%")
- Badge: "Pendaftaran Tahun Ajaran 2026–2027"
- Urgency: "Kuota terbatas"

#### 4.2 Enrollment Steps (Stepper)
- Visual 4-step progress:
  1. **Isi Formulir** — lengkapi data orang tua dan anak
  2. **Jadwal Kunjungan** — pilih tanggal kunjungan sekolah
  3. **Trial Class** — anak mengikuti kelas percobaan gratis
  4. **Konfirmasi** — finalisasi pendaftaran

**Components**: Stepper → **design-system-generator** (high priority)

#### 4.3 Offer Cards (2 prominent cards)
- **Free Trial Class**: "Coba dulu, baru yakin! Ikuti kelas percobaan gratis tanpa komitmen."
- **Diskon Sibling 25%**: "Untuk pendaftar ke-2 dari keluarga yang sama. Berlaku semua program."

**Components**: Card (existing), Badge

#### 4.4 Booking Form + Trust Sidebar
- **Left (60%)**: Multi-step form (or single long form with sections)
  - Step 1: Data Orang Tua (nama, email, telepon)
  - Step 2: Data Anak (nama, usia, program pilihan including "Kelas Bilingual")
  - Step 3: Jadwal (preferred visit date, waktu)
  - Step 4: Pesan tambahan (optional)
  - Submit → success state with WhatsApp follow-up info
- **Right (40%)**: Trust signals sidebar
  - ✓ Sekolah Islam Swasta resmi
  - ✓ CCTV 24 jam & keamanan terjamin
  - ✓ Guru profesional & bersertifikat
  - ✓ Play-based learning tanpa tekanan
  - ✓ Free Trial Class tersedia
  - Photo thumbnail of school

**Components**: Form, Input, Select, Calendar (all existing), Stepper (missing)

#### 4.5 Requirements (Dokumen Pendaftaran)
- Checklist of documents parents need:
  - Fotokopi akta kelahiran anak
  - Fotokopi kartu keluarga
  - Pas foto anak (3×4)
  - Fotokopi KTP orang tua
  - (Other requirements per school policy)

#### 4.6 General FAQ (8 Questions)
- Standard FAQ addressing parent objections:
  1. Bagaimana keamanan anak di sekolah? (CCTV, fogging, akses terbatas)
  2. Metode pembelajaran apa yang digunakan? (play-based, Metode Ummi)
  3. Usia berapa bisa mulai mendaftar? (0 tahun, program KB dari usia 2)
  4. Bagaimana mekanisme trial class? (gratis, bisa langsung jadwal)
  5. Apa saja fasilitas yang tersedia? (AC, playground, mushola, dll)
  6. Bagaimana penerapan nilai Islami? (Metode Ummi, sholat, adab)
  7. Apakah ada persiapan untuk masuk SD? (TK-B, bilingual option)
  8. Bagaimana cara mendaftar? (formulir online → kunjungan → trial → konfirmasi)

**Components**: Accordion (existing)

#### 4.7 Reassurance Banner
- "Masih ragu? Kami siap menjawab pertanyaan Anda."
- [WhatsApp CTA: Chat Langsung] [Phone: 081328846089]
- "Respon cepat — dalam 1×24 jam"

### Page 4 SEO
- **Title**: `Pendaftaran Siswa Baru - PAUD Jasmine Al Muflihuun`
- **Description**: `Daftar sekarang! Free Trial Class & Diskon Sibling 25%. Pendaftaran PAUD, KB, TK, TPA & Kelas Bilingual.`

---

## Page 5: Contact / Kontak (`/portfolio/contact`)

### Purpose
Make it effortless to reach the school. Show location + availability.

### Conversion Goal
**Primary**: WhatsApp message or phone call
**Secondary**: Contact form submission

### Section Breakdown

#### 5.1 Hero
- H1: Contact headline
- H2: "Kami siap membantu Anda"

#### 5.2 Contact Form + Quick Contact
- **Left (55%)**: Simple contact form
  - Nama, Email, Telepon, Subjek (dropdown), Pesan
  - Submit → success toast
- **Right (45%)**: Quick contact cards
  - 📞 Telepon: 081328846089 / 085229552707 (tap-to-call on mobile)
  - 💬 WhatsApp: Tap to chat (wa.me link)
  - 📍 Alamat: Jl. Grogolsari, Juwangen, Purwomartani, Kalasan, Sleman, Yogyakarta
  - 📷 Instagram: @jasminealmuflihun
  - 🕐 Jam Operasional: Senin–Jumat, [jam]

**Components**: Form, Input, Textarea, Select (all existing), Card

#### 5.3 Map Embed
- Full-width Google Maps embed
- School pin with custom marker
- Nearby landmarks: "5 menit dari [landmark]"
- Directions link for Google Maps / Waze

#### 5.4 Visit Hours
- Operating schedule card
- "Kunjungan sekolah bisa dijadwalkan di luar jam tersebut via WhatsApp"

#### 5.5 Floating WhatsApp CTA (Mobile)
- Sticky bottom bar on mobile only
- "Chat langsung via WhatsApp" + green WhatsApp icon
- Direct link: `https://wa.me/6281328846089`

**Components**: Floating WhatsApp CTA → **design-system-generator**

### Page 5 SEO
- **Title**: `Hubungi Kami - PAUD Jasmine Al Muflihuun`
- **Description**: `Hubungi PAUD Jasmine di 081328846089. Jl. Grogolsari, Kalasan, Sleman, Yogyakarta. Chat WhatsApp tersedia!`

---

## Cross-Page Elements

### Shared Header
- Logo + brand name
- Nav: Beranda | Tentang Kami | Program | Pendaftaran | Kontak
- CTA button: "Daftar Sekarang" (always visible)
- Mobile: hamburger menu with same items

### Shared Footer (4-column)
- **Column 1**: Logo, brand statement (120 chars), social links
- **Column 2**: Navigation links (5 pages)
- **Column 3**: Program links (KB, TK, TPA, Bilingual)
- **Column 4**: Contact info (phone, WhatsApp, address)
- **Bottom bar**: "© 2026 PAUD Jasmine Al Muflihuun. Sekolah Islam Swasta Resmi." + Privacy + Terms

### Floating WhatsApp (Mobile, All Pages)
- Green floating button bottom-right
- Shows on scroll after hero section
- Links to WhatsApp with pre-filled message

---

## Component Requests → design-system-generator

| # | Component | Used On | Priority | Description |
|---|-----------|---------|----------|-------------|
| 1 | **Stepper** | Admissions | 🔴 High | 4-step horizontal progress indicator with active/completed/upcoming states |
| 2 | **Trust Badge Row** | Home, Admissions | 🔴 High | Horizontal scrollable row of icon + label badges (CCTV, AC, Metode Ummi, etc.) |
| 3 | **Bilingual Feature Banner** | Home, Programs | 🔴 High | Highlighted section with accent bg, NEW badge, feature chips grid, CTA |
| 4 | **Photo Gallery Grid** | About, Home | 🔴 High | 2×2 or 3×2 image grid with overlay labels, responsive |
| 5 | **Development Milestone Card** | Programs | 🟡 Medium | Icon + title + description card for tumbuh kembang section |
| 6 | **Floating WhatsApp CTA** | All pages (mobile) | 🟡 Medium | Sticky bottom button, green, shows after scroll threshold |
| 7 | **Stat Card** | Home | 🟡 Medium | Large number + label + optional icon |
| 8 | **Timeline** | About | 🟡 Medium | Vertical timeline with milestone cards |

---

## Content Requests → content-architect

### Updated Scope

The content-architect must now also produce:

1. **Bilingual class copy** (for Home highlight + Programs dedicated section)
2. **Bilingual FAQ answers** (12 questions from parent research, Bahasa Indonesia)
3. **Tumbuh kembang section copy** (6 development areas, reassuring tone)
4. **"Kenapa Jasmine?" section copy** (addressing 6 parent concerns from research)
5. **Parent testimonials** aligned with real research themes:
   - Speech delay progress story
   - Play-based learning testimony
   - Safety & comfort testimony
6. **Updated institutional facts** in reference.md (already done, see above)

### Per-Page Content Requests

```
## Content Request: Home
**Page**: Home
**Sections**: Hero, Trust badges (labels), 3 Feature blocks, Bilingual highlight,
              3 Testimonials, Stats labels, Facility captions, CTA banner
**SEO keywords**: PAUD Islam Sleman, TK Islam Yogyakarta, sekolah anak usia dini
**Conversion goal**: Book a visit / go to Admissions
**Tone**: Confident, warm, aspirational — "investasi masa depan"
**New requirement**: Include bilingual class highlight copy
```

```
## Content Request: Tentang Kami
**Page**: About
**Sections**: Hero, Brand story, Visi/Misi, 6 Values, Kenapa Jasmine (6 points),
              Team bios, Facility captions, CTA
**SEO keywords**: sekolah Islam Sleman, PAUD terpercaya Yogyakarta
**Conversion goal**: Build trust → navigate to Programs/Admissions
**Tone**: Personal, trustworthy, grounded
**New requirement**: "Kenapa Jasmine" copy addressing 6 parent concerns from research
```

```
## Content Request: Program
**Page**: Programs
**Sections**: Hero, 4 Program cards (KB/TK-A/TK-B/TPA), Bilingual class section,
              Metode Ummi section, 7 Extracurricular items, 6 Tumbuh kembang cards,
              12 Bilingual FAQ, CTA
**SEO keywords**: kelas bilingual PAUD, Metode Ummi, coding anak Yogyakarta
**Conversion goal**: Enroll in program / try Trial Class
**Tone**: Informative, reassuring, enthusiastic
**New requirements**:
  - Bilingual class detailed copy (translate 6 features into Bahasa + descriptions)
  - Tumbuh kembang copy (6 areas, reassuring for parents with developmental concerns)
  - 12 bilingual FAQ answers (based on real parent questions)
```

```
## Content Request: Pendaftaran
**Page**: Admissions
**Sections**: Hero, Enrollment steps (4), 2 Offer cards, Form labels/placeholders,
              Requirements checklist, 8 FAQ, Reassurance banner
**SEO keywords**: pendaftaran PAUD Sleman, daftar TK Yogyakarta, trial class PAUD
**Conversion goal**: Form submission
**Tone**: Encouraging, friction-reducing, urgent
**New requirement**: Offer card copy for Free Trial + Sibling Diskon with emotional hooks
```

```
## Content Request: Kontak
**Page**: Contact
**Sections**: Hero, Form labels, Contact info, Map description, Visit hours, WhatsApp CTA
**SEO keywords**: kontak PAUD Jasmine, alamat TK Kalasan Sleman
**Conversion goal**: WhatsApp message or phone call
**Tone**: Welcoming, accessible
```

---

## Implementation Requests → frontend-architect

### Build Order (Recommended)

| Phase | Pages | Reason |
|-------|-------|--------|
| 1 | **Home** | Primary landing, highest traffic, most conversion impact |
| 2 | **Programs** | Most content-rich, includes new bilingual section |
| 3 | **Admissions** | Conversion endpoint, needs form logic |
| 4 | **About** | Trust-building, relatively straightforward |
| 5 | **Contact** | Simplest page, mostly existing components |

### Implementation Specs

```
## Implementation Request: Home
**Page**: Home
**Route**: /portfolio (index)
**Components needed**:
  - Hero (existing) — update with new content + trust chips
  - Trust badge row (NEW → design-system-generator)
  - Feature card (existing) — 3 instances
  - Bilingual feature banner (NEW → design-system-generator)
  - Testimonial card (existing) — 3 instances
  - Stat card (NEW → design-system-generator)
  - Photo gallery grid (NEW → design-system-generator)
  - CTA banner (existing)
**Performance target**: LCP ≤ 2.5s, CLS ≤ 0.1
**Notes**: Preload hero image, lazy-load below-fold images
```

```
## Implementation Request: Programs
**Page**: Programs
**Route**: /portfolio/programs
**Components needed**:
  - Hero (existing)
  - ProgramCard (existing) — 4 instances, add "Bilingual" badge variant
  - Bilingual feature banner (NEW → design-system-generator)
  - Curriculum section (existing) — for Metode Ummi
  - Extracurricular grid (existing) — 7 items
  - Development milestone card (NEW → design-system-generator) — 6 instances
  - Accordion (existing) — 12 bilingual FAQs
  - Button/CTA (existing)
**Performance target**: LCP ≤ 2.5s
**Notes**: Anchor link support for #bilingual scroll target
```

```
## Implementation Request: Admissions
**Page**: Admissions
**Route**: /portfolio/admissions
**Components needed**:
  - Hero (existing)
  - Stepper (NEW → design-system-generator)
  - Card (existing) — 2 offer cards
  - Form + Input + Select + Calendar (all existing)
  - Accordion (existing) — 8 FAQs
  - Button (existing)
**Data flow**:
  - Form state: react-hook-form with Zod validation
  - Program pre-selection via URL query param (?program=bilingual)
  - Submit → success state → WhatsApp follow-up link
**Performance target**: LCP ≤ 2.5s, FID ≤ 100ms (form must be responsive)
```

```
## Implementation Request: About
**Page**: About
**Route**: /portfolio/about
**Components needed**:
  - Hero (existing)
  - Card (existing) — Visi/Misi, Values
  - TeamMember card (Avatar + Card, existing)
  - Photo gallery grid (NEW → design-system-generator)
  - Timeline (NEW → design-system-generator, medium priority)
  - Button/CTA (existing)
**Performance target**: LCP ≤ 2.5s
```

```
## Implementation Request: Contact
**Page**: Contact
**Route**: /portfolio/contact
**Components needed**:
  - Hero (existing)
  - Form + Input + Textarea + Select (all existing)
  - Card (existing) — contact info cards
  - Map embed (existing iframe)
  - Floating WhatsApp CTA (NEW → design-system-generator)
  - Button (existing)
**Performance target**: LCP ≤ 2.5s
**Notes**: Implement tap-to-call and tap-to-WhatsApp for mobile
```

---

## Animation Requests → animation-designer

Key interactions to design:
1. **Hero load sequence**: Badge fade → H1 slide-up → H2 fade → CTAs stagger
2. **Trust badges**: Horizontal scroll hint animation on mobile
3. **Feature cards**: Staggered reveal on scroll
4. **Bilingual banner**: Attention-grabbing subtle pulse on NEW badge
5. **Testimonial carousel**: Auto-play with manual override (if carousel)
6. **Facility photos**: Hover zoom effect
7. **Form stepper**: Step transition animations
8. **Floating WhatsApp**: Bounce-in animation after scroll threshold

---

## Responsive Requests → responsive-strategist

Key responsive decisions:
1. **Hero**: Full-bleed mobile, constrained desktop
2. **Trust badges**: Horizontal scroll mobile, 4-col grid desktop
3. **Feature cards**: Stack mobile, 3-col desktop
4. **Bilingual chips**: 2-col mobile, inline desktop
5. **Form + sidebar**: Stack mobile (trust signals above form), 60/40 desktop
6. **Facility gallery**: 1-col mobile, 2×2 desktop
7. **FAQ accordion**: Full-width all breakpoints
8. **Floating WhatsApp**: Mobile only (hidden on desktop, WhatsApp in footer instead)

---

## QA Checklist → qa-optimization

Priority items for launch:
1. **Performance**: Hero image optimization, lazy loading, code splitting per route
2. **Accessibility**: Form labels, alt text on all photos, keyboard nav on accordion
3. **SEO**: All meta tags, JSON-LD on every page, heading hierarchy
4. **Mobile**: Touch targets ≥ 44px, tap-to-call links, safe areas
5. **Forms**: Validation messages in Bahasa Indonesia, success/error states

---

## Execution Timeline

```
Week 1: Design System + Content
├── design-system-generator: Build 8 missing components
├── content-architect: Write copy for all 5 pages (including bilingual + tumbuh kembang)
└── animation-designer: Define motion specs for key interactions

Week 2: Implementation Phase 1
├── frontend-architect: Build Home page
├── frontend-architect: Build Programs page (most complex)
└── responsive-strategist: Validate responsive behavior

Week 3: Implementation Phase 2
├── frontend-architect: Build Admissions (form logic)
├── frontend-architect: Build About page
├── frontend-architect: Build Contact page
└── qa-optimization: First audit pass

Week 4: Polish & Launch
├── Animation integration
├── SEO final check (meta, structured data, sitemap)
├── Performance audit (Lighthouse)
├── Cross-browser testing
└── Mobile device testing
```

---

## Decision Log

| Decision | Rationale |
|---------|-----------|
| Add Bilingual Class as highlighted section, not separate page | It's a program variant, not a separate product. Keep site simple. Link from Home → Programs#bilingual |
| Add Tumbuh Kembang section on Programs | Directly addresses parent research concerns about speech delay and developmental support |
| 12 bilingual FAQs on Programs (not separate FAQ page) | Co-located with bilingual info for better UX. Parents reading about bilingual want answers immediately |
| Floating WhatsApp on mobile only | Desktop users have footer contact. Mobile users need persistent quick-access CTA |
| Multi-step form on Admissions | Reduces cognitive load for parents. But start with single-page form if stepper component delayed |
| Position as "premium accessible" not "budget" | Research shows parents compare with international schools. Jasmine offers quality without the premium price tag |
| Testimonials match real parent themes | Generic testimonials don't convert. Match to: speech delay, play-based, safety concerns |
| "Kuota terbatas" urgency messaging | From flyer: "Menerima Peserta Didik Baru & Inden" — can leverage scarcity |
