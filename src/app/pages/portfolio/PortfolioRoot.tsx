import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_URL = 'https://wa.me/6285229552707';
const PHONE_1 = '081328846089';
const PHONE_2 = '085229552707';
const INSTAGRAM = '@jasminealmuflihun';
const ADDRESS = 'Jl. Grogolsari, Juwangen, Purwomartani, Kalasan, Sleman, Yogyakarta';

export default function PortfolioRoot() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Beranda', path: '/portfolio' },
    { name: 'Tentang Kami', path: '/portfolio/about' },
    { name: 'Program', path: '/portfolio/programs' },
    { name: 'Pendaftaran', path: '/portfolio/admissions' },
    { name: 'Kontak', path: '/portfolio/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/portfolio') return location.pathname === '/portfolio';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 border-b border-[var(--color-neutral-200)] bg-[var(--color-surface)] backdrop-blur-lg transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled ? 'h-16 lg:h-[60px]' : 'h-16 sm:h-[72px] lg:h-20'
            }`}
          >
            <Link to="/portfolio" className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}logo-jasmine.png`}
                alt="PAUD Jasmine Al Muflihuun"
                className={`object-contain transition-all duration-300 ${scrolled ? 'h-10 w-10' : 'h-12 w-12 lg:h-14 lg:w-14'}`}
              />
              <div>
                <h1 className="text-lg lg:text-xl font-bold text-[var(--color-neutral-900)] leading-tight">
                  PAUD Jasmine Al Muflihuun
                </h1>
                <p className={`text-xs text-[var(--color-neutral-500)] transition-all duration-300 ${scrolled ? 'hidden' : 'hidden lg:block'}`}>
                  Pendidikan Investasi Masa Depan
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-[var(--color-primary-500)] text-white shadow-md'
                      : 'text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Link
                to="/portfolio/admissions"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] hover:shadow-xl text-white font-semibold transition-all hover:-translate-y-0.5 text-sm"
              >
                Jadwalkan Kunjungan
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors"
              aria-label={mobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
              className="lg:hidden border-t border-[var(--color-neutral-200)] bg-[var(--color-surface)] overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.06, duration: 0.3, ease: [0, 0, 0.2, 1] }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                        isActive(item.path)
                          ? 'bg-[var(--color-primary-500)] text-white'
                          : 'text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navigation.length * 0.06, duration: 0.3 }}
                >
                  <Link
                    to="/portfolio/admissions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white font-semibold text-center"
                  >
                    Jadwalkan Kunjungan
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <Outlet />
      </main>

      {/* Floating WhatsApp CTA (mobile only) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full bg-[var(--color-success-500)] text-white font-semibold shadow-xl hover:shadow-2xl transition-all"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle size={20} />
        <span className="text-sm">WhatsApp</span>
      </a>

      {/* Footer */}
      <footer className="border-t border-[var(--color-neutral-200)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <img
                  src={`${import.meta.env.BASE_URL}logo-jasmine.png`}
                  alt="PAUD Jasmine Al Muflihuun"
                  className="h-11 w-11 object-contain"
                />
                <div>
                  <h2 className="text-lg font-bold text-[var(--color-neutral-900)]">PAUD Jasmine Al Muflihuun</h2>
                  <p className="text-xs text-[var(--color-neutral-500)]">Pendidikan Investasi Masa Depan</p>
                </div>
              </div>
              <p className="text-sm text-[var(--color-neutral-700)] leading-relaxed max-w-md mb-5">
                Sekolah Islam PAUD, KB, TK, dan TPA (Tempat Penitipan Anak) terpercaya di Sleman, Yogyakarta. Membentuk generasi cerdas, kreatif, mandiri, dan berakhlakul karimah.
              </p>
              <div className="flex gap-3">
                <a
                  href={`https://instagram.com/${INSTAGRAM.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[var(--color-neutral-100)] hover:bg-[var(--color-primary-100)] flex items-center justify-center transition-colors text-sm"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[var(--color-neutral-100)] hover:bg-[var(--color-success-100)] flex items-center justify-center transition-colors text-sm"
                  aria-label="WhatsApp"
                >
                  💬
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-[var(--color-neutral-900)] uppercase tracking-wider mb-4">
                Menu
              </h3>
              <ul className="space-y-2.5">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-600)] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-bold text-[var(--color-neutral-900)] uppercase tracking-wider mb-4">
                Hubungi Kami
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href={`tel:+62${PHONE_1}`} className="flex items-start gap-2 text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-600)] transition-colors">
                    <Phone size={16} className="mt-0.5 shrink-0" />
                    <span>{PHONE_1}</span>
                  </a>
                </li>
                <li>
                  <a href={`tel:+62${PHONE_2}`} className="flex items-start gap-2 text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-primary-600)] transition-colors">
                    <Phone size={16} className="mt-0.5 shrink-0" />
                    <span>{PHONE_2}</span>
                  </a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-[var(--color-neutral-600)] hover:text-[var(--color-success-700)] transition-colors">
                    <MessageCircle size={16} className="mt-0.5 shrink-0" />
                    <span>WhatsApp</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 text-sm text-[var(--color-neutral-600)]">
                    <MapPin size={16} className="mt-0.5 shrink-0" />
                    <span>{ADDRESS}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[var(--color-neutral-200)]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[var(--color-neutral-500)]">
              <p>&copy; {new Date().getFullYear()} PAUD Jasmine Al Muflihuun. Sekolah Islam Swasta Resmi.</p>
              <div className="flex gap-5">
                <a href="#" className="hover:text-[var(--color-primary-600)] transition-colors">Kebijakan Privasi</a>
                <a href="#" className="hover:text-[var(--color-primary-600)] transition-colors">Syarat & Ketentuan</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
