import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/context';
import { Home } from 'lucide-react';

export default function NotFound() {
  const { t } = useI18n();
  return (
    <section className="bg-white">
      <div className="container-content py-20 sm:py-28 text-center">
        <p className="text-7xl font-bold text-brand-600">404</p>
        <h1 className="mt-4 text-2xl font-bold text-ink-900">Page not found</h1>
        <Link to="/" className="btn-primary mt-8">
          <Home className="h-4 w-4" aria-hidden="true" />
          {t('legal.back')}
        </Link>
      </div>
    </section>
  );
}
