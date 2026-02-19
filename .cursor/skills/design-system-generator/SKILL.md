---
name: design-system-generator
description: Creates new UI components for the Jasmine design system when existing components are insufficient. Use when frontend-architect escalates a missing component, or when the user asks to add a new component, create a UI primitive, or extend the design system.
---

# Design System Generator – Jasmine Design System

You create **new reusable UI components** for the Jasmine design system. You are triggered when the **frontend-architect** identifies a missing component, or when the user requests a new UI primitive.

## When to Use

- Frontend-architect sends a **Component Request** handoff
- User asks to "add [component] to the design system"
- A portfolio page needs a primitive that doesn't exist in `src/app/components/ui/`

## Component Standards

### File location & naming

```
src/app/components/ui/{component-name}.tsx
```

- Lowercase, hyphenated filenames (`stat-card.tsx`, `file-upload.tsx`)
- PascalCase exports (`StatCard`, `FileUpload`)
- One component per file (with sub-components exported together)

### Architecture pattern

Follow the existing shadcn/Radix pattern used throughout the project:

```tsx
import * as React from "react";
import { cn } from "./utils";

// Use cva for variant-based components
import { cva, type VariantProps } from "class-variance-authority";

// Wrap Radix primitives when applicable
import * as PrimitiveName from "@radix-ui/react-primitive-name";
```

### Required for every component

1. **TypeScript props** – extend native HTML element props or Radix primitive props
2. **`cn()` for className** – allow consumer to override/extend styles
3. **`data-slot` attribute** – for CSS targeting (existing convention)
4. **`ref` forwarding** – use `React.ComponentProps<>` pattern (React 19 style used in project)
5. **Design tokens only** – use `var(--color-*)`, `var(--radius-*)`, etc. Never hardcode colors
6. **Variants via `cva`** – when component has visual variants (size, color, style)
7. **Accessibility** – ARIA roles/labels, keyboard nav, focus management

### Minimal component template

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const componentVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: {
        default: "default-variant-classes",
      },
      size: {
        default: "default-size-classes",
        sm: "small-size-classes",
        lg: "large-size-classes",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function ComponentName({
  className,
  variant,
  size,
  ...props
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

## Component Checklist

For each new component, deliver:

- [ ] Component file in `src/app/components/ui/`
- [ ] All visual states: default, hover, active, focus, disabled
- [ ] Loading state (if applicable): use `<Skeleton>` pattern
- [ ] Error state (if applicable)
- [ ] Empty state (if applicable)
- [ ] Responsive: works on mobile through desktop
- [ ] Dark mode: uses CSS variables that auto-switch
- [ ] ARIA: roles, labels, keyboard support
- [ ] Demo section added to `src/app/pages/Components.tsx` (if requested)

## Known Missing Components

These have been identified by frontend-architect as needed:

| Component | Purpose | Priority |
|-----------|---------|----------|
| Stepper | Multi-step form progress with labels | High |
| Combobox | Searchable dropdown with autocomplete | High |
| Multi-select | Multiple selection with tag chips | Medium |
| File upload | Drag-and-drop with preview | Medium |
| Stat card | Number + label + trend indicator | Medium |
| Timeline | Vertical event/activity feed | Low |
| Empty state | Illustration + message + CTA wrapper | Low |
| Date range picker | Start/end date selection | Low |
| Time picker | Hour/minute selection | Low |

## Dependencies Available

Before adding new packages, check if these already-installed packages can solve the need:

- `@radix-ui/*` – headless primitives (check if a Radix primitive exists first)
- `cmdk` – command palette / combobox patterns
- `react-day-picker` – calendar / date selection
- `embla-carousel-react` – carousel / slider
- `react-hook-form` – form state management
- `recharts` – data visualization
- `motion` – animations
- `react-dnd` – drag and drop
- `lucide-react` – icons
- `class-variance-authority` – variant management
- `sonner` – toast notifications

## Integration Rules

- After creating a component, it should be importable as:
  ```tsx
  import { ComponentName } from "@/app/components/ui/component-name";
  ```
- Follow the exact same code patterns as existing components (see `button.tsx`, `card.tsx`, `dialog.tsx` for reference)
- Use only design tokens from `src/styles/theme.css`
- Test that the component works in both light and dark mode
