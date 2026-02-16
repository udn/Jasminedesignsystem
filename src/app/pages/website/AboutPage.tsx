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
import { aboutContent } from '@/data/copy/about';
import type { Language } from '@/data/copy/types';

export default function AboutPage() {
  const [lang] = useState<Language>('id');
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate('/website/contact');
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="space-y-12 lg:space-y-24 py-6 sm:py-8">
          <HeroSection
            content={aboutContent.hero}
            lang={lang}
            badgeText={lang === 'id' ? 'Berdiri Sejak 2015' : 'Established Since 2015'}
            onCtaClick={handleCtaClick}
          />

          <FeatureSection features={aboutContent.features} lang={lang} />

          <TestimonialSection
            testimonials={aboutContent.testimonials}
            trustSignals={aboutContent.trustSignals}
            lang={lang}
            sectionTitle={{
              id: 'Mengapa Orang Tua Memilih Jasmine',
              en: 'Why Parents Choose Jasmine',
            }}
          />

          <FAQSection items={aboutContent.faq} lang={lang} />

          <CTABanner
            lang={lang}
            onCtaClick={handleCtaClick}
            headline={{
              id: 'Ingin Mengenal Jasmine Lebih Dekat?',
              en: 'Want to Know Jasmine Better?',
            }}
            description={{
              id: 'Kunjungi kami dan rasakan sendiri lingkungan belajar yang hangat, aman, dan menyenangkan.',
              en: 'Visit us and experience our warm, safe, and joyful learning environment firsthand.',
            }}
          />
        </div>
      </div>

      <WebsiteFooter content={aboutContent.footer} lang={lang} />
    </div>
  );
}
