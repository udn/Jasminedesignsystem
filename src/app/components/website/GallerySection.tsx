import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface GalleryImage {
  src: string;
  alt: string;
  label?: string;
}

interface GallerySectionProps {
  images: GalleryImage[];
}

export function GallerySection({ images }: GallerySectionProps) {
  if (!images.length) return null;

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-neutral-900)]">
          Sekilas Suasana PAUD Jasmine
        </h2>
        <p className="text-sm sm:text-base text-[var(--color-neutral-600)] max-w-2xl mx-auto">
          Area bermain indoor dan outdoor yang aman, ceria, dan ramah anak untuk Kelompok Bermain (KB),
          TK, dan TPA.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
        {images.map((image, index) => (
          <figure
            key={index}
            className="relative overflow-hidden rounded-2xl bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] shadow-sm"
          >
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover transition-transform duration-300 hover:scale-105"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {image.label && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white text-xs sm:text-sm px-3 py-2">
                {image.label}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

