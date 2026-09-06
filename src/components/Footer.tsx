import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/context';
import LanguageSwitcher from './LanguageSwitcher';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  const { t } = useI18n();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/about', label: t('nav.about') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const legalLinks = [
    { to: '/privacy', label: t('footer.privacy') },
    { to: '/terms', label: t('footer.terms') },
  ];

  return (
    <footer className="bg-ink-50 border-t border-ink-100">
      <div className="container-content py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5" aria-label="AccessEd home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-ink-900">AccessEd</span>
            </Link>
            <p className="mt-4 text-sm text-ink-500 max-w-xs leading-relaxed">{t('footer.tagline')}</p>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold text-ink-900">{t('footer.quickLinks')}</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-ink-500 hover:text-brand-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-semibold text-ink-900">{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-ink-500 hover:text-brand-700 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="mailto:hello@accessed.app" className="text-sm text-ink-500 hover:text-brand-700 transition-colors">
                  hello@accessed.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} AccessEd. {t('footer.rights')}
          </p>
          <p className="text-xs text-ink-400">{t('footer.madeFor')}</p>
        </div>
      </div>
    </footer>
  );
}
