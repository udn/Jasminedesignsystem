# Animation & Interaction Designer – Reference

Per-page choreography, component interaction sheets, and Figma Make descriptions.

---

## Per-Page Load Choreography

### Home Page

```
0ms     Nav bar fades in (opacity 0→1, 200ms ease-out)
100ms   Badge pill slides down (y: -10→0, opacity 0→1, 300ms ease-out)
200ms   H1 headline fades up (y: 20→0, opacity 0→1, 500ms ease-out)
400ms   H2 subheadline fades up (y: 20→0, opacity 0→1, 500ms ease-out)
600ms   CTA buttons scale in (scale: 0.9→1, opacity 0→1, 400ms spring)
750ms   Microcopy fades in (opacity 0→1, 300ms ease-out)

[on scroll to feature section]
  Feature cards stagger in from bottom:
    Card 1: 0ms delay, y: 30→0, opacity 0→1, 500ms ease-out
    Card 2: 100ms delay
    Card 3: 200ms delay

[on scroll to testimonials]
  Testimonial cards stagger in, 150ms apart, y: 20→0, 400ms ease-out
  Star ratings animate in sequence (scale 0→1, 100ms spring, 50ms stagger)

[on scroll to stats]
  Numbers count up from 0 to final value, 800ms ease-out
  Labels fade in simultaneously, 300ms ease-out

[on scroll to CTA banner]
  Banner slides up (y: 40→0, 500ms ease-out)
  Button pulses once after reveal (scale 1→1.05→1, 400ms spring)
```

### About Page (Tentang Kami)

```
0ms     H1 fades up (y: 20→0, 500ms ease-out)
200ms   H2 fades up (y: 20→0, 400ms ease-out)

[on scroll to mission/vision]
  Mission card: slides in from left (x: -30→0, 500ms ease-out)
  Vision card: slides in from right (x: 30→0, 500ms ease-out)
  Delay between: 150ms

[on scroll to timeline]
  Timeline line draws from top to bottom (height 0→100%, 800ms ease-in-out)
  Each milestone fades in when line reaches it:
    Odd items: slide from left (x: -20→0)
    Even items: slide from right (x: 20→0)
    Stagger: 200ms between milestones, 400ms ease-out each

[on scroll to values grid]
  Cards stagger in, 100ms apart, scale 0.95→1, opacity 0→1, 400ms ease-out

[on scroll to team]
  Avatar cards stagger in from bottom, 80ms apart, y: 20→0, 300ms ease-out
```

### Programs Page (Program)

```
0ms     H1 + H2 hero fade up (stagger 200ms)

[on scroll to program cards]
  3 program cards stagger in, 150ms apart:
    Each card: y: 40→0, opacity 0→1, 500ms ease-out
    Icon inside: scale 0→1 with 200ms delay after card, 300ms spring

[on scroll to curriculum]
  Section heading slides in (x: -20→0, 400ms ease-out)
  Metode Ummi highlight card: scale 0.95→1, 500ms spring
  
[on scroll to extracurricular]
  7 extracurricular items stagger in grid pattern:
    Row 1 (4 items): 0ms, 80ms, 160ms, 240ms
    Row 2 (3 items): 120ms, 200ms, 280ms
    Each: y: 20→0, opacity 0→1, 300ms ease-out

[on scroll to CTA]
  CTA button: scale 0.9→1, 400ms spring, subtle glow pulse after
```

### Admissions Page (Pendaftaran)

```
0ms     H1 + H2 hero fade up (stagger 200ms)

[on scroll to enrollment steps]
  Step circles appear sequentially:
    Step 1: 0ms, scale 0→1, 300ms spring
    Connector line: draws right, 200ms ease-in-out
    Step 2: 300ms, scale 0→1, 300ms spring
    (repeat for steps 3-4)
  Step labels fade in 100ms after their circle

[on scroll to form + pricing]
  Form card: slides in from left (x: -20→0, 400ms ease-out)
  Pricing card: slides in from right (x: 20→0, 400ms ease-out)
  "Free Trial" badge: bounces in (scale 0→1, 400ms bounce)

[form interactions]
  Input focus: ring appears (opacity 0→1, 100ms ease-out)
  Validation error: input shakes (x: 0→-5→5→-5→0, 300ms), red border fades in
  Step transition: current step slides left + fades out, next step slides in from right

[on scroll to FAQ]
  Accordion items stagger in, 80ms apart, y: 10→0, opacity 0→1, 300ms ease-out
```

### Contact Page (Kontak)

```
0ms     H1 + H2 hero fade up (stagger 200ms)

[on scroll to form + info]
  Contact form: slides in from left (x: -20→0, 400ms ease-out)
  Info cards stagger from right:
    Phone: 0ms, x: 20→0, 300ms ease-out
    Email: 100ms
    Address: 200ms
    Hours: 300ms

[on scroll to map]
  Map container: opacity 0→1, 500ms ease-out (iframe loads in background)

[on scroll to WhatsApp CTA]
  Banner: y: 30→0, opacity 0→1, 500ms ease-out
  WhatsApp icon: subtle bounce (y: 0→-3→0, 400ms spring, loops every 3s)
```

---

## Scroll Behavior Specs

### Sticky Header Shrink

```
Trigger: scroll > 50px
Animation:
  Header height: 80px → 60px (300ms ease-in-out)
  Logo: scale 1 → 0.85 (300ms ease-in-out)
  Padding: 24px → 16px vertical (300ms ease-in-out)
  Shadow: none → shadow-md (300ms ease-out)
Reverse: instant on scroll back to top
Performance: use transform: scaleY() not height
```

### Section Reveal (Reusable)

```
Trigger: element enters viewport (threshold: 0.15)
Animation: y: 30px → 0, opacity: 0 → 1
Duration: 500ms
Easing: ease-out [0, 0, 0.2, 1]
Once: true (don't re-animate on scroll back)
```

### Stagger Grid (Reusable)

```
Trigger: container enters viewport (threshold: 0.1)
Children: each child delays by index × 100ms
Animation: y: 20px → 0, opacity: 0 → 1
Duration: 400ms per item
Easing: ease-out
Once: true
```

### Parallax Background

```
Trigger: scroll position within section
Calculation: translateY(scrollOffset × 0.3)
Applied to: hero gradient background, decorative elements
Performance: transform only, will-change: transform
Disabled: on mobile (< 640px) and prefers-reduced-motion
```

---

## Component Interaction Sheets

### Button

```
Default     → Hover (200ms ease-out)
              translateY(-2px), shadow-sm → shadow-md, color darken 10%
Hover       → Active (100ms ease-in-out)
              translateY(0), scale(0.95)
Active      → Default (200ms ease-out)
              translateY(0), scale(1)
Any         → Focus (instant)
              ring: 3px primary-500/50, ring-offset: 2px
Any         → Disabled
              opacity: 0.5, pointer-events: none, no transitions
Loading     → spinner fade in (100ms), label fades out (100ms)
Success     → checkmark scale in (300ms spring), green flash
```

### Card

```
Default     → Hover (200ms ease-out)
              shadow-sm → shadow-lg, border-color → primary-200
              Inner icon: scale 1 → 1.05 (200ms ease-out)
Hover       → Default (300ms ease-out)
              shadow-lg → shadow-sm, border-color → neutral-200
Hover       → Active (100ms)
              scale(0.98)
```

### Accordion

```
Closed      → Open (300ms ease-out)
              Content: height 0 → auto, opacity 0 → 1
              Chevron: rotate 0 → 180°
              Question text: color neutral-900 → primary-600
Open        → Closed (250ms ease-in)
              Content: height auto → 0, opacity 1 → 0
              Chevron: rotate 180° → 0
              Question text: color primary-600 → neutral-900
```

### Modal / Dialog

```
Open trigger:
  Backdrop: opacity 0 → 0.5, bg black (200ms ease-out)
  Content: scale 0.95 → 1, opacity 0 → 1, y: 10 → 0 (300ms spring)
  Body: overflow hidden

Close trigger:
  Content: scale 1 → 0.95, opacity 1 → 0 (200ms ease-in)
  Backdrop: opacity 0.5 → 0 (200ms, starts 100ms after content)
  Body: overflow auto restored
```

### Form Input

```
Empty       → Focused (100ms ease-out)
              border: neutral-200 → primary-500
              ring: 0 → 3px primary-500/20
              label: slides up and shrinks (if floating label)
Focused     → Filled (instant)
              border: primary-500 (maintained)
Filled      → Blur (200ms ease-out)
              border: primary-500 → neutral-300
              ring: 3px → 0
Error       → (200ms)
              border: neutral → error-500
              shake: x 0→-5→5→-5→0 (300ms)
              error message: slides down + fades in (200ms ease-out)
```

### Toast Notification

```
Enter: slides from bottom-right
  y: 20 → 0, x: 0, opacity 0 → 1 (300ms spring)
  
Auto-dismiss: after 5s
  Progress bar: width 100% → 0% (5000ms linear, thin bar at bottom)

Exit: slides out to right
  x: 0 → 100%, opacity 1 → 0 (200ms ease-in)
  
Stack: new toasts push older ones up (y offset, 200ms ease-out)
```

### Carousel / Testimonials

```
Auto-play: advance every 5 seconds
Transition: 
  Current slide: x 0 → -100%, opacity 1 → 0 (400ms ease-in-out)
  Next slide: x 100% → 0, opacity 0 → 1 (400ms ease-in-out)
Dots:
  Active dot: scale 1 → 1.3, opacity 1 (200ms spring)
  Inactive dot: scale 1, opacity 0.4

Mobile gesture:
  Swipe threshold: 50px horizontal
  Follow finger (drag), snap to nearest slide on release (300ms spring)
  Resistance at edges (0.3× movement beyond first/last)
```

---

## Loading Animation Patterns

### Skeleton Pulse

```
Element: rounded rectangle matching content dimensions
Animation: opacity oscillates 0.4 → 1 → 0.4 (1.5s ease-in-out infinite)
Background: linear-gradient shimmer sweep (optional, left → right, 2s)
Color: neutral-200 base, neutral-100 shimmer highlight
```

### Spinner

```
Element: 24px circle, 3px border, transparent fill
Border: neutral-200 full, primary-500 top quarter
Animation: rotate 0 → 360° (800ms linear infinite)
```

### Bouncing Dots

```
3 dots, 8px each, primary-500
Animation: y 0 → -8px → 0 (600ms ease-in-out infinite)
Stagger: 150ms between dots
Use: form submission, data loading
```

### Success Checkmark

```
Circle: scale 0 → 1 (300ms spring), success-500 fill
Check path: draws from 0% → 100% stroke (400ms ease-out, 200ms delay)
Use: form submit success, payment confirmation
```

---

## Figma Make Animation Descriptions

Ready-to-paste descriptions. Append to any figma-prompt-engineer prompt.

### Home Page Animations

```
"On page load: A small badge pill at the top fades in first. Then the large 
headline text fades up from 20px below over 0.5 seconds with smooth ease-out. 
The subheadline follows 200ms later with the same fade-up. Two CTA buttons 
scale in from 90% to 100% with a playful spring bounce at 600ms. A small 
line of microcopy fades in last.

On scroll to the feature section: Three feature cards stagger in from the 
bottom, 100ms apart, each rising 30px with a fade over 500ms. Their icons 
have a subtle bounce-in after the card appears.

On scroll to testimonials: Quote cards fade up in sequence, 150ms stagger. 
Star ratings animate one by one with a tiny scale pop.

On scroll to the stats row: Numbers count up from zero to their final value 
over 800ms. The labels fade in simultaneously.

Hover on CTA buttons: Button lifts 2px with increased shadow and slightly 
darker color. On click, it presses down to 95% scale for tactile feedback.

Hover on cards: Shadow grows larger and border shifts to a warm orange tint.

The navigation bar shrinks from 80px to 60px height on scroll with a smooth 
300ms transition. It gains a subtle shadow."
```

### Form Interactions

```
"When a user taps a form input, a warm orange focus ring fades in around 
the field over 100ms. If validation fails, the input shakes left-right 
three times over 300ms and a red border appears with an error message 
sliding down below the field.

The multi-step form transitions between steps: the current step slides 
out to the left and fades, while the next step slides in from the right 
and fades in, taking 300ms with ease-in-out.

The progress bar at the top smoothly fills to the next step width over 
400ms with ease-out.

On submit: the button label fades out and a small spinner fades in. On 
success, the spinner transforms into a green checkmark that scales in 
with a spring bounce."
```

### Mobile-Specific

```
"On mobile: testimonial cards are in a horizontal carousel. Users can 
swipe left and right. The carousel follows the finger drag and snaps to 
the nearest card on release with a spring effect. Dot indicators below 
show the active card with a subtle scale pop.

The navigation uses a hamburger icon. On tap, a full-height menu slides 
in from the right over 300ms with ease-out. Menu items stagger in from 
the right, 60ms apart. The hamburger icon morphs into an X.

All touch targets are at least 44×44 pixels. Buttons show a brief 
background flash on tap for tactile feedback."
```

---

## Reduced Motion Fallback

When `prefers-reduced-motion: reduce` is active:

| Normal behavior | Reduced behavior |
|----------------|-----------------|
| Fade up (y + opacity) | Instant opacity (no translate) |
| Stagger sequence | All items appear instantly |
| Parallax scroll | Static position |
| Spring/bounce easing | Instant state change |
| Auto-play carousel | Manual only, no auto-advance |
| Count-up numbers | Show final number immediately |
| Header shrink | Instant size change |
| Shake on error | Red border only, no shake |

Implementation:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// In framer-motion: transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
```

---

## Performance Checklist

- [ ] Only animate `transform` and `opacity` (GPU composited)
- [ ] Use `will-change: transform` on elements that animate frequently
- [ ] Never animate `width`, `height`, `top`, `left`, `margin`, `padding`
- [ ] Max 5 concurrent animations per viewport
- [ ] Test at 60fps on mid-range Android (e.g. Pixel 5)
- [ ] Implement `prefers-reduced-motion` for all animations
- [ ] Lazy-load scroll animations (IntersectionObserver)
- [ ] Disable parallax on mobile (< 640px)
- [ ] Use `transform: translateZ(0)` to force GPU layer when needed
