import { useEffect, useState } from 'react';
import {
  HeroSection,
  FeatureSection,
  TestimonialSection,
  FAQSection,
  WebsiteFooter,
} from '@/app/components/website';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { contactContent } from '@/data/copy/contact';
import type { Language } from '@/data/copy/types';
import { Send } from 'lucide-react';

export default function ContactPage() {
  const [lang] = useState<Language>('id');

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
          id: `log_contact_${Date.now()}`,
          timestamp: Date.now(),
          location: 'src/app/pages/website/ContactPage.tsx:22',
          message: 'ContactPage viewport metrics',
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

  const handleWhatsApp = () => {
    window.open('https://wa.me/6281234567890', '_blank');
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <div className="space-y-12 lg:space-y-24 py-6 sm:py-8">
          <HeroSection
            content={contactContent.hero}
            lang={lang}
            badgeText={lang === 'id' ? 'Respons < 1 Jam' : 'Response < 1 Hour'}
            onCtaClick={handleWhatsApp}
          />

          <FeatureSection features={contactContent.features} lang={lang} />

          {/* Contact Form */}
          <section className="max-w-2xl mx-auto">
            <div className="p-8 rounded-2xl bg-white dark:bg-[var(--color-neutral-100)] border border-[var(--color-neutral-200)] shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--color-neutral-900)] mb-2">
                {lang === 'id' ? 'Jadwalkan Kunjungan Sekolah' : 'Schedule a School Visit'}
              </h2>
              <p className="text-sm text-[var(--color-neutral-500)] mb-6">
                {lang === 'id'
                  ? 'Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 1 hari kerja.'
                  : 'Fill out the form below and our team will contact you within 1 business day.'}
              </p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                      {lang === 'id' ? 'Nama Orang Tua' : "Parent's Name"}
                    </label>
                    <Input
                      placeholder={lang === 'id' ? 'Masukkan nama lengkap' : 'Enter full name'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                      {lang === 'id' ? 'Nomor WhatsApp' : 'WhatsApp Number'}
                    </label>
                    <Input placeholder="+62 812-xxxx-xxxx" type="tel" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                      {lang === 'id' ? 'Nama Anak' : "Child's Name"}
                    </label>
                    <Input
                      placeholder={lang === 'id' ? 'Masukkan nama anak' : "Enter child's name"}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                      {lang === 'id' ? 'Usia Anak' : "Child's Age"}
                    </label>
                    <Input placeholder={lang === 'id' ? 'contoh: 3 tahun' : 'e.g. 3 years'} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--color-neutral-700)] mb-1.5">
                    {lang === 'id' ? 'Tanggal Kunjungan yang Diinginkan' : 'Preferred Visit Date'}
                  </label>
                  <Input type="date" />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white rounded-xl"
                >
                  <Send size={18} />
                  {lang === 'id' ? 'Kirim Permintaan Kunjungan' : 'Send Visit Request'}
                </Button>

                <p className="text-xs text-center text-[var(--color-neutral-400)]">
                  {lang === 'id'
                    ? 'Dengan mengirim formulir ini, Anda menyetujui kebijakan privasi kami.'
                    : 'By submitting this form, you agree to our privacy policy.'}
                </p>
              </form>
            </div>
          </section>

          <TestimonialSection
            testimonials={contactContent.testimonials}
            trustSignals={contactContent.trustSignals}
            lang={lang}
            sectionTitle={{
              id: 'Pengalaman Kunjungan Orang Tua',
              en: 'Parent Visit Experiences',
            }}
          />

          <FAQSection
            items={contactContent.faq}
            lang={lang}
            sectionTitle={{
              id: 'Pertanyaan Tentang Kunjungan',
              en: 'Questions About Visiting',
            }}
          />
        </div>
      </div>

      <WebsiteFooter content={contactContent.footer} lang={lang} />
    </div>
  );
}
