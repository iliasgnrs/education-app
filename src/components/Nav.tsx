import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '@/i18n/context';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-ink-100 shadow-sm' : 'bg-white border-b border-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between gap-4" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="AccessEd home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-ink-900">AccessEd</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  active ? 'text-brand-700' : 'text-ink-600 hover:text-ink-900 hover:bg-ink-50'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <LanguageSwitcher />
          <Link to="/signin" className="btn-ghost text-sm">
            {t('nav.signin')}
          </Link>
          <Link to="/signup" className="btn-primary text-sm">
            {t('nav.getStarted')}
          </Link>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <LanguageSwitcher compact />
          <button
            type="button"
            className="btn-ghost p-2"
            aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-ink-100 bg-white animate-fade-in">
          <div className="container-content py-4 space-y-1">
            {links.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    active ? 'text-brand-700 bg-brand-50' : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-3 border-t border-ink-100 flex flex-col gap-2">
              <Link to="/signin" className="btn-secondary w-full">
                {t('nav.signin')}
              </Link>
              <Link to="/signup" className="btn-primary w-full">
                {t('nav.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
