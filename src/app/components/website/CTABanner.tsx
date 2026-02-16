import { Button } from '@/app/components/ui/button';
import type { Language } from '@/data/copy/types';

interface CTABannerProps {
  lang: Language;
  headline?: { id: string; en: string };
  description?: { id: string; en: string };
  ctaLabel?: { id: string; en: string };
  onCtaClick?: () => void;
}

export function CTABanner({
  lang,
  headline,
  description,
  ctaLabel,
  onCtaClick,
}: CTABannerProps) {
  const defaultHeadline = {
    id: 'Siap Memulai Perjalanan Anak Anda?',
    en: "Ready to Start Your Child's Journey?",
  };
  const defaultDescription = {
    id: 'Jadwalkan kunjungan gratis hari ini dan lihat sendiri mengapa ratusan keluarga mempercayakan anak mereka pada Jasmine.',
    en: 'Schedule a free visit today and see for yourself why hundreds of families trust Jasmine with their children.',
  };
  const defaultCta = {
    id: 'Jadwalkan Kunjungan Gratis',
    en: 'Schedule a Free Visit',
  };

  const h = headline ?? defaultHeadline;
  const d = description ?? defaultDescription;
  const c = ctaLabel ?? defaultCta;

  return (
    <section className="rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] p-6 sm:p-10 text-center text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 break-words">
        {h[lang]}
      </h2>
      <p className="text-sm sm:text-lg opacity-90 max-w-2xl mx-auto mb-6 leading-relaxed break-words">
        {d[lang]}
      </p>
      <Button
        size="lg"
        onClick={onCtaClick}
        className="w-full sm:w-auto bg-white text-[var(--color-primary-700)] hover:bg-[var(--color-neutral-100)] px-6 sm:px-8 py-3 text-base rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
      >
        {c[lang]}
      </Button>
    </section>
  );
}
