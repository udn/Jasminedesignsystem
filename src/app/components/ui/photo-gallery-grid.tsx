import * as React from "react";

import { cn } from "./utils";

export interface PhotoGalleryItem {
  /** Source URL or gradient placeholder for the image */
  src?: string;
  /** Alt text for accessibility */
  alt: string;
  /** Caption badge label displayed as overlay */
  label: string;
}

export interface PhotoGalleryGridProps
  extends React.ComponentProps<"div"> {
  /** Array of gallery items (renders best with 4 items for a 2×2 grid) */
  items: PhotoGalleryItem[];
  /** Number of columns (default: 2) */
  columns?: 2 | 3 | 4;
}

const colsClass: Record<number, string> = {
  2: "grid-cols-2",
  3: "grid-cols-2 sm:grid-cols-3",
  4: "grid-cols-2 sm:grid-cols-4",
};

function PhotoGalleryGrid({
  items,
  columns = 2,
  className,
  ...props
}: PhotoGalleryGridProps) {
  return (
    <div
      data-slot="photo-gallery-grid"
      className={cn("grid gap-4", colsClass[columns], className)}
      {...props}
    >
      {items.map((item) => (
        <PhotoGalleryCell key={item.label} item={item} />
      ))}
    </div>
  );
}

function PhotoGalleryCell({ item }: { item: PhotoGalleryItem }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
      {item.src ? (
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div
          className="h-full w-full bg-gradient-to-br from-[var(--color-primary-200)] via-[var(--color-accent-100)] to-[var(--color-secondary-200)]"
          role="img"
          aria-label={item.alt}
        />
      )}

      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* caption badge */}
      <span className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white/90 px-3 py-1.5 text-xs sm:text-sm font-semibold text-[var(--color-neutral-900)] shadow-sm backdrop-blur-sm">
        {item.label}
      </span>
    </div>
  );
}

export { PhotoGalleryGrid, PhotoGalleryCell };
