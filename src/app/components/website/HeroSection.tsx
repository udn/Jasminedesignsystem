import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import type { HeroContent, Language } from '@/data/copy/types';
import { t } from '@/data/copy/types';

interface HeroSectionProps {
  content: HeroContent;
  lang: Language;
  badgeText?: string;
  onCtaClick?: () => void;
}

export function HeroSection({ content, lang, badgeText, onCtaClick }: HeroSectionProps) {
  return (
    <section className="text-center space-y-6 py-8 sm:py-12 lg:py-20">
      {badgeText && (
        <div className="flex justify-center">
          <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] border-[var(--color-primary-200)]">
            {badgeText}
          </Badge>
        </div>
      )}

      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[var(--color-neutral-900)] leading-tight break-words">
        <span className="bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] bg-clip-text text-transparent">
          {t(content.headline, lang)}
        </span>
      </h1>

      <h2 className="text-base sm:text-xl text-[var(--color-neutral-600)] max-w-2xl mx-auto leading-relaxed break-words">
        {t(content.subheadline, lang)}
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <Button
          size="lg"
          onClick={onCtaClick}
          className="w-full sm:w-auto bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white px-6 sm:px-8 py-3 text-base rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          {t(content.cta, lang)}
        </Button>
      </div>

      <p className="text-sm text-[var(--color-neutral-500)] max-w-lg mx-auto">
        {t(content.microcopy, lang)}
      </p>
    </section>
  );
}
