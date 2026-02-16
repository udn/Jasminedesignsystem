import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/app/components/ui/carousel';
import type { Testimonial, TrustSignal, Language } from '@/data/copy/types';
import { t } from '@/data/copy/types';

interface TestimonialSectionProps {
  testimonials: Testimonial[];
  trustSignals: TrustSignal[];
  lang: Language;
  sectionTitle?: { id: string; en: string };
}

export function TestimonialSection({
  testimonials,
  trustSignals,
  lang,
  sectionTitle,
}: TestimonialSectionProps) {
  const title = sectionTitle
    ? t(sectionTitle, lang)
    : lang === 'id'
      ? 'Apa Kata Orang Tua Kami'
      : 'What Our Parents Say';

  return (
    <section className="space-y-10">
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-neutral-900)]">
          {title}
        </h2>
      </div>

      {/* Trust Signals Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trustSignals.map((signal, index) => (
          <div
            key={index}
            className="text-center p-4 rounded-xl bg-[var(--color-primary-50)] border border-[var(--color-primary-100)]"
          >
            <p className="text-sm font-semibold text-[var(--color-primary-700)] break-words">
              {t(signal.label, lang)}
            </p>
          </div>
        ))}
      </div>

      {/* Testimonial Carousel */}
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/2"
            >
              <div className="h-full p-6 rounded-2xl bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] shadow-sm flex flex-col">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[var(--color-warning-400)] fill-[var(--color-warning-400)]"
                    />
                  ))}
                </div>

                <div className="relative flex-1 mb-5">
                  <Quote
                    size={20}
                    className="text-[var(--color-primary-200)] absolute -top-1 -left-1"
                  />
                  <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed pl-5 italic break-words">
                    {t(testimonial.quote, lang)}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-neutral-100)]">
                  <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary-400)] to-[var(--color-accent-400)] text-white text-sm font-bold size-10 aspect-square">
                    {testimonial.avatarInitials}
                  </div>
                  <p className="text-xs text-[var(--color-neutral-500)]">
                    {t(testimonial.attribution, lang)}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
}
