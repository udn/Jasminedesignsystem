# Figma Prompt Engineer – Reference

Brand context, hex values, page specs, and example prompts for Figma Make.

---

## Brand Quick Card

| Field | Value |
|-------|-------|
| Brand | PAUD Jasmine Al Muflihuun |
| Type | Islamic kindergarten portfolio (PAUD, KB, TK, TPA) |
| Location | Sleman, Yogyakarta, Indonesia |
| Audience | First-time parents, children 0–6, middle-upper income |
| Mood | Playful, warm, trustworthy, minimal |
| Voice | Professional, warm, joyful, reassuring |

---

## Color Hex Values (Use in Prompts)

### Primary (Warm Orange)
`#fff8f0` `#ffefd9` `#ffddb3` `#ffc88d` `#ffb366` **`#ff9940`** `#ff7e1a` `#e56500` `#b34f00` `#803900`

### Secondary (Sky Blue)
`#f0f9ff` `#e0f2fe` `#bae6fd` `#7dd3fc` `#38bdf8` **`#0ea5e9`** `#0284c7` `#0369a1` `#075985` `#0c4a6e`

### Accent (Warm Pink)
`#fff1f7` `#ffe4f0` `#ffc9e1` `#ffa3ce` `#ff6bae` **`#ff3d94`** `#f01b75` `#d10d5e` `#a80d4d` `#8d0f44`

### Neutral (Stone)
`#fafaf9` `#f5f5f4` `#e7e5e4` `#d6d3d1` `#a8a29e` `#78716c` `#57534e` `#44403c` `#292524` `#1c1917`

### Semantic
- Success: `#f0fdf4` `#22c55e` `#15803d`
- Warning: `#fffbeb` `#f59e0b` `#b45309`
- Error: `#fef2f2` `#ef4444` `#b91c1c`
- Info: `#eff6ff` `#3b82f6` `#1d4ed8`

### Key Combos for Prompts
| Use | Colors |
|-----|--------|
| Page background | `#fafaf9` |
| Primary text | `#1c1917` |
| Body text | `#57534e` |
| Card border | `#e7e5e4` |
| Primary CTA | gradient `#ff9940` → `#ff3d94` |
| Secondary CTA | white bg, `#1c1917` text, `#d6d3d1` border |
| Hero gradient | `#ff9940` → `#ff3d94` (orange to pink) |
| Section tint | `#fff8f0` → `#fff1f7` (warm blush) |
| Accent gradient | `#0ea5e9` → `#ff9940` (blue to orange) |

---

## Typography for Prompts

```
Headings: Quicksand (or Nunito), bold 700
Body: System sans-serif (SF Pro, Inter, or Helvetica Neue)
Code: SF Mono or Cascadia Code

Display: 64px / 48px (hero headlines)
Headings: 40px / 32px / 24px (sections)
Body: 18px / 16px / 14px
Caption: 12px

Line height: 1.2 headings, 1.5 body, 1.7 relaxed
```

---

## Page Specs for Prompts

### Home Page

**Sections**: Hero → Feature cards (3) → Social proof (testimonials) → Stats → CTA banner

**Wireframe**:
```
Badge (rounded pill): "Tahun Ajaran 2026–2027"
H1 (centered, 64px): [6-word headline]
H2 (centered, 32px): [15-word subheadline]
Two buttons: [Primary CTA gradient] [Secondary CTA outline]
Microcopy (14px, gray): [90 chars]

3-column feature grid:
  Each card: gradient border, icon (48px), H2, description, 3 bullet points

Testimonial row: 3 cards with quote, parent name, star rating, avatar
Stats row: 4 numbers with labels (e.g. "200+ Keluarga", "10+ Tahun")
CTA banner: dark gradient background, H2, button
```

### About Page (Tentang Kami)

**Sections**: Hero → Mission/Vision (2-col) → Timeline → Values grid → Team

**Wireframe**:
```
H1 + H2 (centered hero)
2-column: Mission card (left, orange tint) | Vision card (right, blue tint)
Vertical timeline: 4-5 school milestones with year markers
Values grid: 4-6 cards with icons
Team section: grid of teacher cards (avatar + name + role)
```

### Programs Page (Program)

**Sections**: Hero → Program cards (3) → Curriculum → Extracurricular → CTA

**Wireframe**:
```
H1 + H2 (centered hero)
3-column program cards:
  KB (2-3yr, orange) | TK-A (4-5yr, blue) | TK-B (5-6yr, pink)
  Each: large icon, age range, description, 4 highlights, price hint
Curriculum highlight: Metode Ummi section with visual
Extracurricular grid: 7 items (Coding, English, Swimming, Drumband, etc.)
CTA: "Daftar Sekarang"
```

### Admissions Page (Pendaftaran)

**Sections**: Hero → Steps → Form + Pricing → FAQ → WhatsApp CTA

**Wireframe**:
```
H1 + H2 (centered hero)
4-step enrollment visual: 1. Kunjungi → 2. Formulir → 3. Trial → 4. Daftar
Split layout:
  Left (60%): booking form (name, email, phone, child, program, date)
  Right (40%): pricing card + "Free Trial Class" + "Diskon Sibling 25%"
FAQ accordion: 8 questions
WhatsApp CTA banner: green button with phone icon
```

### Contact Page (Kontak)

**Sections**: Hero → Form + Info cards → Map → WhatsApp CTA

**Wireframe**:
```
H1 + H2 (centered hero)
Split layout:
  Left (60%): contact form (name, email, phone, subject, message)
  Right (40%): 4 info cards (phone, email, address, hours)
Full-width map embed
WhatsApp CTA banner
```

---

## Example Prompts (5 Levels)

### Home Page Examples

**Level 1 — Quick Concept**

```
Build a kindergarten landing page with a warm, joyful, trustworthy feel. 
Use warm orange (#ff9940) as primary color, sky blue (#0ea5e9) as secondary, 
and pink (#ff3d94) for accents on a light stone (#fafaf9) background. 
Quicksand font for headings. Include a centered hero section, 3 feature cards, 
testimonial row, and gradient CTA banner. Round corners, soft shadows, 
child-friendly but professional.
```

**Level 2 — Structured Layout**

```
Build a portfolio landing page for an Islamic kindergarten. 
Warm orange (#ff9940) primary, sky blue (#0ea5e9) secondary, pink (#ff3d94) accent.
Background: #fafaf9. Text: #1c1917 headings, #57534e body. 
Typography: Quicksand bold for headings (64px hero, 32px sections, 24px cards), 
system sans-serif 16px for body.

Include:
1) Centered hero: badge pill, H1 (64px bold), H2 (32px), 
   two buttons (gradient primary + outline secondary), small microcopy
2) 3-column feature grid: cards with gradient border, 48px icon, 
   heading, description, 3 bullet points
3) Testimonial row: 3 quote cards with star rating and avatar
4) Stats row: 4 large numbers with labels
5) CTA banner: dark gradient background with white heading and button

Spacing: 8px grid, 24px card padding, 96px between sections. 
Border radius: 16-24px on cards, 12px on buttons. Soft multi-layer shadows.
```

**Level 3 — With Real Copy (Bahasa Indonesia)**

```
Build a portfolio landing page for PAUD Jasmine Al Muflihuun, an Islamic kindergarten 
in Yogyakarta, Indonesia. Target audience: Indonesian parents of children aged 0-6.

Colors: primary #ff9940, secondary #0ea5e9, accent #ff3d94, 
background #fafaf9, text #1c1917/#57534e, borders #e7e5e4.
Typography: Quicksand bold headings, system sans-serif body.

Include these sections with Bahasa Indonesia content:

1) Hero (centered):
   - Badge: "Tahun Ajaran 2026–2027" (orange pill)
   - H1 (64px): "Tumbuh Cerdas Berakhlak Mulia" 
   - H2 (32px): "Sekolah Islam terpercaya untuk anak usia 0–6 tahun 
     dengan metode Ummi dan fasilitas modern"
   - Primary CTA: "Jadwalkan Kunjungan" (gradient #ff9940 → #ff3d94, white text)
   - Secondary CTA: "Lihat Program" (outline, #1c1917 text)
   - Microcopy: "Gratis Trial Class untuk pendaftaran bulan ini"

2) 3-column features:
   Card 1 — "Pendidikan Islami Terpadu": Metode Ummi Al-Qur'an, 
     karakter Islami, doa harian
   Card 2 — "Fasilitas Aman & Modern": AC, CCTV, Air Purifier, 
     Indoor & Outdoor Playground
   Card 3 — "Ekstrakurikuler Unggulan": Coding & Robotic, English Class, 
     Berenang, Drumband

3) Testimonials: 3 parent quotes in Bahasa Indonesia with star ratings
4) Stats: "200+ Keluarga", "7+ Ekstrakurikuler", "10 Tahun Berpengalaman", "100% CCTV"
5) CTA banner: "Mulai Perjalanan Si Kecil" with "Daftar Sekarang" button

24px section spacing, 16-24px border radius, soft shadows, fully professional 
yet warm and child-friendly aesthetic.
```

**Level 4 — With Interactions**

```
[Include all of Level 3, plus append:]

Interactions:
- CTA buttons: hover lifts -2px with increased shadow and slightly darker color. 
  Active: press down 1px.
- Feature cards: hover adds subtle shadow lift and border shifts to primary color.
- Navigation: horizontal on desktop with active item in filled orange (#ff9940) 
  with white text. Other items show background tint on hover.
- Testimonials: auto-scrolling carousel every 5 seconds with dot indicators. 
  Swipe enabled on mobile.
- Stats: number count-up animation on scroll into view (500ms ease-out).
- Hero: subtle gradient parallax shift on scroll.
- FAQ accordion: smooth expand/collapse (300ms) with rotating chevron icon.
- Form inputs: focus shows 3px primary orange ring. Error shows red border 
  (#ef4444) with message below.

Animations: Use ease-out for entrances (200ms), ease-in-out for transitions (300ms), 
spring curve for playful emphasis (500ms). Fade-in sections on scroll.
```

**Level 5 — Production-Ready**

```
[Include all of Level 4, plus append:]

Responsive behavior:
- Mobile (default, <640px): Single column layout. Hamburger menu. 
  Full-width stacked cards. 16px side padding. 44px minimum touch targets. 
  Hero text 40px H1, 20px H2. Buttons full-width stacked.
- Tablet (640-1023px): 2-column feature grid. Side padding 24px. 
  Navigation still hamburger or condensed horizontal.
- Desktop (1024px+): 3-column feature grid. Horizontal nav with 
  "Book a Visit" CTA button. Max-width 1280px centered. 32px padding. 
  Hero text 64px H1, 32px H2. Buttons side-by-side.

States for all interactive elements:
- Buttons: default, hover, active, focus (ring), disabled (50% opacity)
- Form fields: empty, filled, focused (ring), error (red border + message), 
  disabled (gray bg)
- Cards: default, hover (lift), active
- Navigation: default, hover, active/current page

Accessibility: 
- All text meets WCAG AA contrast (4.5:1 body, 3:1 large text)
- Focus rings visible on all interactive elements
- Semantic heading hierarchy: one H1, H2 for sections, H3 for cards
- Alt text on all images and icons

Dark mode variant: invert neutrals (#1c1917 background, #fafaf9 text), 
keep brand colors vibrant, adjust shadows to subtle glows.
```

---

## Component-Level Prompt Templates

### Button

```
Design a button component for PAUD Jasmine Al Muflihuun.

6 variants:
- Primary: gradient #ff9940 → #ff3d94, white text, bold
- Secondary: #0ea5e9 bg, white text
- Outline: white bg, #d6d3d1 border, #1c1917 text
- Ghost: transparent bg, #57534e text, bg tint on hover
- Destructive: #ef4444 bg, white text
- Link: no bg, #ff7e1a text, underline on hover

3 sizes: Small (32px h), Default (36px h), Large (40px h)
States: default, hover (darken + lift), active (press), focus (3px ring), disabled (50% opacity)
Border radius: 8px (sm/default), 12px (large). Quicksand bold text.
```

### Card

```
Design a feature card for PAUD Jasmine Al Muflihuun.

White (#ffffff) background, #e7e5e4 border, 16-24px border radius, 
subtle shadow (0 1px 2px rgba(0,0,0,0.05)).
Padding: 24-40px. 

Contains:
- Icon area: 48-64px square, gradient background (#ff9940 → #ff3d94), 
  white icon, 16px border radius
- Headline: Quicksand bold 24px, #1c1917
- Description: system sans 16px, #57534e, max 3 lines
- 3 bullet points with checkmark icons, 14px, #44403c

Hover: shadow increases, border shifts to #ffb366 (primary-400).
Responsive: full-width on mobile, grid item on desktop.
```

### Form

```
Design an enrollment form for PAUD Jasmine Al Muflihuun.

White card (#ffffff), 24px border radius, soft shadow, 32-40px padding.
Background tint: #fff8f0 (warm blush).

Fields (Bahasa Indonesia labels):
- "Nama Orang Tua" (text input)
- "Email" (email input)
- "Nomor WhatsApp" (tel input, +62 prefix)
- "Nama Anak" (text input)
- "Usia Anak" (select: 0-1, 2-3, 4-5, 5-6 tahun)
- "Program" (select: KB, TK-A, TK-B, TPA)
- "Tanggal Kunjungan" (date picker)
- "Pesan (opsional)" (textarea)

Input style: #fafaf9 bg, #e7e5e4 border, 8px radius, 16px padding.
Focus: #ff9940 ring (3px). Error: #ef4444 border + red message below.
Submit button: gradient #ff9940 → #ff3d94, full-width, "Kirim Pendaftaran".
```

### FAQ Accordion

```
Design an FAQ accordion for PAUD Jasmine Al Muflihuun.

8 items, Bahasa Indonesia questions. White bg, #e7e5e4 dividers between items.
Rounded container: 16px radius, subtle shadow.

Each item:
- Question: Quicksand semibold 18px, #1c1917, with chevron icon (right side)
- Answer: system sans 16px, #57534e, appears on expand

Behavior: single-expand (one open at a time). 
Chevron rotates 180° on open (300ms ease-out).
Active question: text shifts to #ff7e1a (primary-600).
```

---

## Prompt for Full 5-Page Site

```
Design a complete 5-page portfolio website for PAUD Jasmine Al Muflihuun, 
an Islamic kindergarten (PAUD, KB, TK, TPA) in Yogyakarta, Indonesia.

Brand: warm, joyful, trustworthy, professional. 
Colors: #ff9940 orange primary, #0ea5e9 blue secondary, #ff3d94 pink accent, 
#fafaf9 stone background, #1c1917 text.
Typography: Quicksand headings, system sans body.
Style: rounded corners (16-24px), soft shadows, 8px grid spacing.

Pages:
1) Home — hero with CTA, 3 feature cards, testimonials, stats, CTA banner
2) Tentang Kami — mission/vision cards, school timeline, values, team grid
3) Program — 3 program cards (KB, TK-A, TK-B), curriculum, extracurriculars
4) Pendaftaran — enrollment steps, booking form, pricing, FAQ accordion
5) Kontak — contact form, info cards, map embed, WhatsApp button

Shared: sticky header with logo + nav + "Jadwalkan Kunjungan" CTA button. 
4-column footer with brand info, quick links, contact details, social icons.

All text in Bahasa Indonesia. Mobile-first responsive. 
Soft entrance animations. Hover states on all interactive elements.
```
