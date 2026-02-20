import * as React from "react";

import { cn } from "./utils";

export interface PhotoGalleryItem {
  /** Source URL or gradient placeholder for the image */
  src?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Caption badge label displayed as overlay */
  label: string;
  /** Optional category for tab-based filtering */
  category?: string;
}

export interface PhotoGalleryGridProps
  extends React.ComponentProps<"div"> {
  /** Array of gallery items (renders best with 4 items for a 2×2 grid) */
  items: PhotoGalleryItem[];
  /** Number of columns (default: 2) */
  columns?: 2 | 3 | 4;
  /** Enable staggered entrance animation on cells */
  animated?: boolean;
}

const colsClass: Record<number, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

function PhotoGalleryGrid({
  items,
  columns = 2,
  animated = false,
  className,
  ...props
}: PhotoGalleryGridProps) {
  return (
    <div
      data-slot="photo-gallery-grid"
      className={cn("grid gap-3 sm:gap-4", colsClass[columns], className)}
      {...props}
    >
      {items.map((item, index) => (
        <PhotoGalleryCell
          key={item.label}
          item={item}
          animated={animated}
          index={index}
        />
      ))}
    </div>
  );
}

function PhotoGalleryCell({
  item,
  animated = false,
  index = 0,
}: {
  item: PhotoGalleryItem;
  animated?: boolean;
  index?: number;
}) {
  const animStyle: React.CSSProperties | undefined = animated
    ? {
        opacity: 0,
        transform: "translateY(20px)",
        animation: `pgg-fade-in 0.5s ease-out ${index * 0.1}s forwards`,
      }
    : undefined;

  return (
    <div
      className="group relative overflow-hidden rounded-2xl aspect-[4/3] will-change-transform"
      style={animStyle}
    >
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      ) : (
        <div
          className="h-full w-full bg-gradient-to-br from-[var(--color-primary-200)] via-[var(--color-accent-100)] to-[var(--color-secondary-200)]"
          role="img"
          aria-label={item.alt}
        />
      )}

      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/70" />

      {/* caption badge */}
      <span className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 inline-flex items-center rounded-lg bg-white/90 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-semibold text-[var(--color-neutral-900)] shadow-sm backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-[-2px]">
        {item.label}
      </span>
    </div>
  );
}

export { PhotoGalleryGrid, PhotoGalleryCell };
