import { Link } from 'react-router';
import type { FooterContent, Language } from '@/data/copy/types';
import { t } from '@/data/copy/types';

interface WebsiteFooterProps {
  content: FooterContent;
  lang: Language;
}

export function WebsiteFooter({ content, lang }: WebsiteFooterProps) {
  return (
    <footer className="border-t border-[var(--color-neutral-200)] bg-[var(--color-neutral-900)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z" />
                </svg>
              </div>
              <span className="text-lg font-bold">Jasmine Kindergarten</span>
            </div>
            <p className="text-sm text-[var(--color-neutral-400)] leading-relaxed">
              {t(content.brandStatement, lang)}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-neutral-300)] uppercase tracking-wider mb-4">
              {lang === 'id' ? 'Navigasi' : 'Navigation'}
            </h3>
            <ul className="space-y-2">
              {content.navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-sm text-[var(--color-neutral-400)] hover:text-white transition-colors"
                  >
                    {t(item.label, lang)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--color-neutral-300)] uppercase tracking-wider mb-4">
              {lang === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </h3>
            <ul className="space-y-2 text-sm text-[var(--color-neutral-400)]">
              <li>Jl. Pendidikan No. 88</li>
              <li>Kebayoran Baru, Jakarta Selatan</li>
              <li>+62 812-3456-7890</li>
              <li>info@jasminekindergarten.id</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[var(--color-neutral-800)] text-center">
          <p className="text-xs text-[var(--color-neutral-500)]">
            {t(content.legal, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
}
