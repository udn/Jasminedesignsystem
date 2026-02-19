import { Outlet, Link, useLocation } from 'react-router';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioRoot() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/portfolio' },
    { name: 'About Us', path: '/portfolio/about' },
    { name: 'Programs', path: '/portfolio/programs' },
    { name: 'Admissions', path: '/portfolio/admissions' },
    { name: 'Contact', path: '/portfolio/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/portfolio') return location.pathname === '/portfolio';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-neutral-200)] bg-white/95 backdrop-blur-lg shadow-sm">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            <Link to="/portfolio" className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)] shadow-lg">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[var(--color-neutral-900)]">Jasmine Kindergarten</h1>
                <p className="text-xs text-[var(--color-neutral-500)]">Where Little Minds Flourish</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-2.5 text-sm font-medium rounded-lg transition-all ${
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
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] hover:shadow-xl text-white font-semibold transition-all hover:-translate-y-0.5"
              >
                Book a Visit
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden border-t border-[var(--color-neutral-200)] bg-white">
            <div className="px-6 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-5 py-3 text-sm font-medium rounded-lg transition-all ${
                    isActive(item.path)
                      ? 'bg-[var(--color-primary-500)] text-white'
                      : 'text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/portfolio/admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-4 px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary-500)] to-[var(--color-accent-500)] text-white font-semibold text-center"
              >
                Book a Visit
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content with improved spacing */}
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-neutral-200)] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--color-neutral-900)]">Jasmine Kindergarten</h2>
                  <p className="text-sm text-[var(--color-neutral-600)]">Est. 2015</p>
                </div>
              </div>
              <p className="text-[var(--color-neutral-700)] leading-relaxed max-w-md mb-6">
                Nurturing young minds through play, discovery, and personalized care. Trusted by 200+ Jakarta families.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-lg bg-[var(--color-neutral-100)] hover:bg-[var(--color-primary-100)] flex items-center justify-center transition-colors">
                  <span className="text-lg">📘</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-[var(--color-neutral-100)] hover:bg-[var(--color-primary-100)] flex items-center justify-center transition-colors">
                  <span className="text-lg">📷</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-[var(--color-neutral-100)] hover:bg-[var(--color-primary-100)] flex items-center justify-center transition-colors">
                  <span className="text-lg">▶️</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-[var(--color-neutral-900)] uppercase tracking-wider mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-[var(--color-neutral-600)] hover:text-[var(--color-primary-600)] transition-colors"
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
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+622112345678" className="flex items-start gap-3 text-[var(--color-neutral-600)] hover:text-[var(--color-primary-600)] transition-colors">
                    <Phone size={18} className="mt-0.5 shrink-0" />
                    <span>+62 21 1234 5678</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@jasminekinder.id" className="flex items-start gap-3 text-[var(--color-neutral-600)] hover:text-[var(--color-primary-600)] transition-colors">
                    <Mail size={18} className="mt-0.5 shrink-0" />
                    <span>hello@jasminekinder.id</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-[var(--color-neutral-600)]">
                    <MapPin size={18} className="mt-0.5 shrink-0" />
                    <span>Jl. Pendidikan No. 123<br />Menteng, Jakarta Pusat 10310</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[var(--color-neutral-200)]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--color-neutral-600)]">
              <p>© 2026 Jasmine Kindergarten. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-[var(--color-primary-600)] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[var(--color-primary-600)] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[var(--color-primary-600)] transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
