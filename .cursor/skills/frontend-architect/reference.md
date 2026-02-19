# Frontend Architect – Reference

## Available UI Components

All located at `src/app/components/ui/`. Import with:
```tsx
import { ComponentName } from "@/app/components/ui/component-name";
```

### Form Components
| Component | File | Key exports |
|-----------|------|-------------|
| Button | `button.tsx` | `Button`, `buttonVariants` – variants: default, destructive, outline, secondary, ghost, link; sizes: default, sm, lg, icon |
| Input | `input.tsx` | `Input` |
| Textarea | `textarea.tsx` | `Textarea` |
| Select | `select.tsx` | `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`, `SelectGroup`, `SelectLabel` |
| Checkbox | `checkbox.tsx` | `Checkbox` |
| RadioGroup | `radio-group.tsx` | `RadioGroup`, `RadioGroupItem` |
| Switch | `switch.tsx` | `Switch` |
| Slider | `slider.tsx` | `Slider` |
| InputOTP | `input-otp.tsx` | `InputOTP`, `InputOTPGroup`, `InputOTPSlot`, `InputOTPSeparator` |
| Form | `form.tsx` | `Form`, `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, `FormMessage` (wraps react-hook-form) |
| Label | `label.tsx` | `Label` |

### Layout & Containers
| Component | File | Key exports |
|-----------|------|-------------|
| Card | `card.tsx` | `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `CardAction` |
| Separator | `separator.tsx` | `Separator` |
| AspectRatio | `aspect-ratio.tsx` | `AspectRatio` |
| Resizable | `resizable.tsx` | `ResizablePanelGroup`, `ResizablePanel`, `ResizableHandle` |
| Sidebar | `sidebar.tsx` | `Sidebar`, `SidebarContent`, `SidebarGroup`, `SidebarMenu`, etc. |
| Sheet | `sheet.tsx` | `Sheet`, `SheetTrigger`, `SheetContent`, `SheetHeader`, `SheetTitle`, `SheetDescription` |
| Drawer | `drawer.tsx` | `Drawer`, `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerTitle`, `DrawerDescription` |
| ScrollArea | `scroll-area.tsx` | `ScrollArea`, `ScrollBar` |

### Navigation
| Component | File | Key exports |
|-----------|------|-------------|
| Breadcrumb | `breadcrumb.tsx` | `Breadcrumb`, `BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink`, `BreadcrumbSeparator` |
| Tabs | `tabs.tsx` | `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` |
| NavigationMenu | `navigation-menu.tsx` | `NavigationMenu`, `NavigationMenuList`, `NavigationMenuItem`, `NavigationMenuTrigger`, `NavigationMenuContent` |
| Menubar | `menubar.tsx` | `Menubar`, `MenubarMenu`, `MenubarTrigger`, `MenubarContent`, `MenubarItem` |
| Pagination | `pagination.tsx` | `Pagination`, `PaginationContent`, `PaginationItem`, `PaginationPrevious`, `PaginationNext`, `PaginationLink`, `PaginationEllipsis` |

### Overlays & Dialogs
| Component | File | Key exports |
|-----------|------|-------------|
| Dialog | `dialog.tsx` | `Dialog`, `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogTitle`, `DialogDescription`, `DialogFooter` |
| AlertDialog | `alert-dialog.tsx` | `AlertDialog`, `AlertDialogTrigger`, `AlertDialogContent`, `AlertDialogAction`, `AlertDialogCancel` |
| Popover | `popover.tsx` | `Popover`, `PopoverTrigger`, `PopoverContent` |
| HoverCard | `hover-card.tsx` | `HoverCard`, `HoverCardTrigger`, `HoverCardContent` |
| Tooltip | `tooltip.tsx` | `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipProvider` |
| ContextMenu | `context-menu.tsx` | `ContextMenu`, `ContextMenuTrigger`, `ContextMenuContent`, `ContextMenuItem` |
| DropdownMenu | `dropdown-menu.tsx` | `DropdownMenu`, `DropdownMenuTrigger`, `DropdownMenuContent`, `DropdownMenuItem` |
| Command | `command.tsx` | `Command`, `CommandInput`, `CommandList`, `CommandItem`, `CommandGroup` (cmdk) |

### Feedback & Display
| Component | File | Key exports |
|-----------|------|-------------|
| Alert | `alert.tsx` | `Alert`, `AlertTitle`, `AlertDescription` |
| Badge | `badge.tsx` | `Badge`, `badgeVariants` |
| Progress | `progress.tsx` | `Progress` |
| Skeleton | `skeleton.tsx` | `Skeleton` |
| Avatar | `avatar.tsx` | `Avatar`, `AvatarImage`, `AvatarFallback` |
| Table | `table.tsx` | `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`, `TableCaption` |
| Chart | `chart.tsx` | `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent` (recharts) |

### Interactive
| Component | File | Key exports |
|-----------|------|-------------|
| Accordion | `accordion.tsx` | `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` |
| Collapsible | `collapsible.tsx` | `Collapsible`, `CollapsibleTrigger`, `CollapsibleContent` |
| Toggle | `toggle.tsx` | `Toggle` |
| ToggleGroup | `toggle-group.tsx` | `ToggleGroup`, `ToggleGroupItem` |
| Calendar | `calendar.tsx` | `Calendar` (react-day-picker) |
| Carousel | `carousel.tsx` | `Carousel`, `CarouselContent`, `CarouselItem`, `CarouselPrevious`, `CarouselNext` |
| Sonner | `sonner.tsx` | `Toaster` (toast notifications) |

### Utilities
| Utility | File | Purpose |
|---------|------|---------|
| cn | `utils.ts` | Merge Tailwind classes (`clsx` + `tailwind-merge`) |
| useMobile | `use-mobile.ts` | Detect mobile viewport |

---

## Components NOT in Design System (Escalate to design-system-generator)

These are needed for interactive features but don't exist yet:

- **Stepper / Wizard** – multi-step form progress indicator with step labels
- **Combobox / Autocomplete** – searchable dropdown with type-ahead
- **Multi-select** – dropdown allowing multiple selections with chips
- **Date range picker** – start + end date selection
- **Time picker** – hour/minute selection
- **File upload** – drag-and-drop zone with preview
- **Data grid** – advanced sortable/filterable table
- **Stat card** – number + label + trend indicator
- **Timeline** – vertical activity/event timeline
- **Empty state** – illustration + message + CTA template component

---

## Design Tokens (CSS Variables)

Defined in `src/styles/theme.css`. Always use `var(--token-name)`:

### Colors
```
--color-primary-{50–900}     (orange)
--color-secondary-{50–900}   (blue)
--color-accent-{50–900}      (pink)
--color-neutral-{50–900}     (stone/gray)
--color-success-{50,500,700}
--color-warning-{50,500,700}
--color-error-{50,500,700}
--color-info-{50,500,700}
```

### Typography
```
--font-display    (Quicksand/Nunito)
--font-body       (system stack)
--font-mono       (monospace)
--font-size-display-{1,2}
--font-size-heading-{1,2,3}
--font-size-body-{lg,md,sm}
--font-size-caption
```

### Spacing (8px grid)
```
--spacing-{0,1,2,3,4,5,6,8,10,12,16,20,24}
Values: 0, 2px, 4px, 8px, 12px, 16px, 24px, 32px, 40px, 48px, 64px, 80px, 96px
```

### Radius
```
--radius-{sm,md,lg,xl,2xl,full}
Values: 4px, 8px, 12px, 16px, 24px, 9999px
```

### Shadows
```
--shadow-{sm,md,lg,xl}
```

### Motion
```
--duration-{instant,fast,normal,slow}  (100ms, 200ms, 300ms, 500ms)
--ease-{in,out,in-out,bounce,spring}
```

---

## Portfolio Page Structure

Routes defined in `src/app/routes.tsx`:

| Route | File | Content Sections |
|-------|------|-----------------|
| `/portfolio` | `portfolio/Home.tsx` | Hero, 3 feature blocks, social proof, stats, CTA |
| `/portfolio/about` | `portfolio/About.tsx` | Hero, visi-misi, team, timeline, values |
| `/portfolio/programs` | `portfolio/Programs.tsx` | Hero, program cards, curriculum, extracurricular, schedule |
| `/portfolio/admissions` | `portfolio/Admissions.tsx` | Hero, steps, form, pricing/offers, FAQ |
| `/portfolio/contact` | `portfolio/Contact.tsx` | Hero, contact form, info cards, map, hours |

Layout wrapper: `portfolio/PortfolioRoot.tsx` (provides header + footer + `<Outlet>`)

---

## Styling Patterns

```tsx
// Hero section
<section className="text-center space-y-8 py-12 lg:py-20">
  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--color-neutral-900)]">
  <h2 className="text-2xl lg:text-3xl text-[var(--color-neutral-600)]">

// Feature grid
<section className="grid lg:grid-cols-3 gap-10">
  <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--color-primary-50)] ...">

// Icon box
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] flex items-center justify-center text-white">

// CTA button
<Link className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white font-bold shadow-xl">

// Card
<div className="p-8 rounded-2xl bg-white border border-[var(--color-neutral-200)] shadow-sm">

// FAQ
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question</AccordionTrigger>
    <AccordionContent>Answer</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## Interactive Component State Machines

### Multi-step Form (Pendaftaran)

```
States: idle → step1 → step2 → step3 → review → submitting → success | error

[idle]
  → user clicks "Mulai Daftar" → [step1: Data Anak]
    → validate → [step2: Data Orang Tua]
      → validate → [step3: Pilih Program]
        → validate → [review: Konfirmasi]
          → submit → [submitting]
            → success → [success: Terima Kasih]
            → fail → [error] → retry → [submitting]
  ← back ← (any step can go back)

Hooks: useForm (react-hook-form), useState (stepIndex), useMutation (submit)
```

### Search with Filters

```
States: idle → searching → results | empty | error

[idle: show all / default]
  → user types query → [debounce 300ms] → [searching]
  → user selects filter → [searching]
  → user changes sort → [searching]
    → results found → [results] + pagination
    → no results → [empty: "Tidak ditemukan"]
    → error → [error] → retry

Hooks: useState (query, filters, sort, page), useDebouncedValue, useFetch
```

### Dashboard

```
States: loading → ready | error

[loading: skeleton cards]
  → data fetched → [ready: cards + charts + tables]
  → fetch failed → [error: retry banner]

Sub-states per widget:
  [widget-loading] → [widget-ready] | [widget-error] | [widget-empty]

Hooks: useQuery (per data source), useTabs (section switching)
```

### Authentication

```
States: idle → authenticating → authenticated | error

Login:    [form] → submit → [loading] → success → redirect | error → show message
Signup:   [form] → submit → [loading] → verify-email → [otp-input] → success
Reset:    [email-form] → submit → [check-email] → [new-password-form] → success

Hooks: useForm, useState (authMode), useAuth (context), useNavigate
```
