import { Outlet, Link, useLocation } from 'react-router';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function Root() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navigation = [
    { name: 'Overview', path: '/' },
    { name: 'Colors', path: '/colors' },
    { name: 'Typography', path: '/typography' },
    { name: 'Spacing', path: '/spacing' },
    { name: 'Components', path: '/components' },
    { name: 'Layout', path: '/layout' },
    { name: 'Motion', path: '/motion' },
    { name: 'Accessibility', path: '/accessibility' },
    { name: 'Tokens', path: '/tokens' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[var(--color-neutral-50)] overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/80 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary-500)] to-[var(--color-accent-500)]">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-lg font-bold text-[var(--color-neutral-900)]">Jasmine Kindergarten</h1>
                <p className="text-xs text-[var(--color-neutral-500)]">Design System</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] font-medium'
                      : 'text-[var(--color-neutral-600)] hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-neutral-900)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {mounted && (
                <button
                  type="button"
                  onClick={() =>
                    setTheme(
                      (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))
                        ? 'light'
                        : 'dark'
                    )
                  }
                  className="ml-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/70 text-[var(--color-neutral-700)] shadow-sm hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-neutral-900)] transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? (
                    <Sun size={18} />
                  ) : (
                    <Moon size={18} />
                  )}
                </button>
              )}
            </nav>

            {/* Mobile Theme + Menu Buttons */}
            <div className="flex items-center gap-2 md:hidden">
              {mounted && (
                <button
                  type="button"
                  onClick={() =>
                    setTheme(
                      (theme === 'dark' || (theme === 'system' && systemTheme === 'dark'))
                        ? 'light'
                        : 'dark'
                    )
                  }
                  className="p-2 rounded-lg border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]/80 text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-100)] transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' || (theme === 'system' && systemTheme === 'dark') ? (
                    <Sun size={18} />
                  ) : (
                    <Moon size={18} />
                  )}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-[var(--color-neutral-100)] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-[var(--color-primary-100)] text-[var(--color-primary-700)] font-medium'
                      : 'text-[var(--color-neutral-600)] hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-neutral-900)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center text-sm text-[var(--color-neutral-500)]">
            <p>© 2026 Jasmine Kindergarten Design System</p>
            <p className="mt-1">Crafted with care for joyful learning experiences</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
