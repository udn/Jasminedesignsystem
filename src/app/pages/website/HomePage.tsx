import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  HeroSection,
  FeatureSection,
  TestimonialSection,
  FAQSection,
  CTABanner,
  WebsiteFooter,
  GallerySection,
} from '@/app/components/website';
import { homeContent } from '@/data/copy/home';
import type { Language } from '@/data/copy/types';

export default function HomePage() {
  const [lang] = useState<Language>('id');
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const logViewport = (runId: string) => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/970a2834-36d2-45ba-8f05-0746baca3038', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: `log_home_${Date.now()}`,
          timestamp: Date.now(),
          location: 'src/app/pages/website/HomePage.tsx:20',
          message: 'HomePage viewport metrics',
          data: {
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
            devicePixelRatio: window.devicePixelRatio,
            docScrollWidth: document.documentElement.scrollWidth,
            docClientWidth: document.documentElement.clientWidth,
            hasHorizontalOverflow:
              document.documentElement.scrollWidth >
              document.documentElement.clientWidth,
          },
          runId,
          hypothesisId: 'H1-H4',
        }),
      }).catch(() => {});
      // #endregion agent log
    };

    logViewport('initial');

    const handleResize = () => {
      logViewport('resize');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCtaClick = () => {
    navigate('/website/contact');
  };

  const galleryImages = [
    {
      src: '/images/paud-jasmine-playground-1.jpg',
      alt: 'Playground warna-warni PAUD Jasmine Al Muflihuun di Kalasan Sleman',
      label: 'Playground outdoor yang aman dan menyenangkan',
    },
    {
      src: '/images/paud-jasmine-classroom-1.jpg',
      alt: 'Suasana ruang kelas bersih dan ber-AC di PAUD Jasmine',
      label: 'Ruang kelas bersih, nyaman, dan ber-AC',
    },
    {
      src: '/images/paud-jasmine-ummi-session.jpg',
      alt: 'Anak-anak belajar Al-Qur’an dengan metode UMMI',
      label: 'Belajar membaca dan mencintai Al-Qur’an dengan metode UMMI',
    },
    {
      src: '/images/paud-jasmine-extracurricular-1.jpg',
      alt: 'Kegiatan ekstrakurikuler coding dan robotic untuk anak',
      label: 'Ekstrakurikuler coding & robotic by Jasmine Al Muflihuun',
    },
    {
      src: '/images/paud-jasmine-music-1.jpg',
      alt: 'Anak-anak bermain drumband dan angklung',
      label: 'Drumband dan angklung yang melatih percaya diri',
    },
    {
      src: '/images/paud-jasmine-poster.jpg',
      alt: 'Poster informasi PAUD Jasmine Al Muflihuun',
      label: 'Informasi lengkap program KB, TK, dan TPA',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="space-y-12 lg:space-y-24 py-6 sm:py-8">
          <HeroSection
            content={homeContent.hero}
            lang={lang}
            badgeText={lang === 'id' ? 'Pendaftaran 2026/2027 Dibuka' : '2026/2027 Enrollment Open'}
            onCtaClick={handleCtaClick}
          />

          <GallerySection images={galleryImages} />

          <FeatureSection features={homeContent.features} lang={lang} />

          <TestimonialSection
            testimonials={homeContent.testimonials}
            trustSignals={homeContent.trustSignals}
            lang={lang}
          />

          <FAQSection items={homeContent.faq} lang={lang} />

          <CTABanner lang={lang} onCtaClick={handleCtaClick} />
        </div>
      </div>

      <WebsiteFooter content={homeContent.footer} lang={lang} />
    </div>
  );
}
