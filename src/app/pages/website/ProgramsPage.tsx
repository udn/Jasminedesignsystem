import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  HeroSection,
  FeatureSection,
  TestimonialSection,
  FAQSection,
  CTABanner,
  WebsiteFooter,
} from '@/app/components/website';
import { programsContent } from '@/data/copy/programs';
import type { Language } from '@/data/copy/types';

export default function ProgramsPage() {
  const [lang] = useState<Language>('id');
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate('/website/admissions');
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="space-y-12 lg:space-y-24 py-6 sm:py-8">
          <HeroSection
            content={programsContent.hero}
            lang={lang}
            badgeText={lang === 'id' ? 'Usia 2–5 Tahun' : 'Ages 2–5'}
            onCtaClick={handleCtaClick}
          />

          <FeatureSection features={programsContent.features} lang={lang} />

          <TestimonialSection
            testimonials={programsContent.testimonials}
            trustSignals={programsContent.trustSignals}
            lang={lang}
            sectionTitle={{
              id: 'Cerita Sukses Dari Orang Tua',
              en: 'Success Stories From Parents',
            }}
          />

          <FAQSection items={programsContent.faq} lang={lang} />

          <CTABanner
            lang={lang}
            onCtaClick={handleCtaClick}
            headline={{
              id: 'Temukan Program yang Tepat untuk Anak Anda',
              en: 'Find the Right Program for Your Child',
            }}
            description={{
              id: 'Konsultasikan dengan tim kami untuk menentukan program terbaik sesuai usia dan perkembangan anak Anda.',
              en: "Consult with our team to determine the best program for your child's age and development.",
            }}
            ctaLabel={{
              id: 'Daftar Sekarang',
              en: 'Enroll Now',
            }}
          />
        </div>
      </div>

      <WebsiteFooter content={programsContent.footer} lang={lang} />
    </div>
  );
}
