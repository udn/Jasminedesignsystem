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
import { admissionsContent } from '@/data/copy/admissions';
import type { Language } from '@/data/copy/types';

export default function AdmissionsPage() {
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
            content={admissionsContent.hero}
            lang={lang}
            badgeText={lang === 'id' ? 'Kuota Terbatas 2026/2027' : 'Limited Spots 2026/2027'}
            onCtaClick={handleCtaClick}
          />

          <FeatureSection features={admissionsContent.features} lang={lang} />

          <TestimonialSection
            testimonials={admissionsContent.testimonials}
            trustSignals={admissionsContent.trustSignals}
            lang={lang}
            sectionTitle={{
              id: 'Pengalaman Pendaftaran Orang Tua Lain',
              en: 'Other Parents\' Enrollment Experience',
            }}
          />

          <FAQSection
            items={admissionsContent.faq}
            lang={lang}
            sectionTitle={{
              id: 'Pertanyaan Seputar Pendaftaran',
              en: 'Enrollment Questions',
            }}
          />

          <CTABanner
            lang={lang}
            onCtaClick={handleCtaClick}
            headline={{
              id: 'Jangan Tunggu Sampai Kuota Penuh',
              en: "Don't Wait Until Spots Are Filled",
            }}
            description={{
              id: '90% kuota terisi sebelum Juni. Amankan tempat anak Anda sekarang dengan proses pendaftaran yang mudah dan cepat.',
              en: "90% of spots fill before June. Secure your child's place now with our easy, fast enrollment process.",
            }}
            ctaLabel={{
              id: 'Hubungi Tim Admisi',
              en: 'Contact Admissions',
            }}
          />
        </div>
      </div>

      <WebsiteFooter content={admissionsContent.footer} lang={lang} />
    </div>
  );
}
