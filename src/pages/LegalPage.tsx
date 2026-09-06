import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/context';
import Reveal from '@/components/Reveal';
import { ArrowLeft, FileText } from 'lucide-react';

export default function LegalPage({ kind }: { kind: 'privacy' | 'terms' }) {
  const { t } = useI18n();
  const title = t(`legal.${kind}.title`);
  const body = t(`legal.${kind}.comingSoon`);

  return (
    <section className="bg-gradient-to-b from-brand-50/40 to-white">
      <div className="container-content py-20 sm:py-28">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <FileText className="h-8 w-8" aria-hidden="true" />
            </div>
            <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-ink-900">{title}</h1>
            <p className="mt-4 text-lg text-ink-600 leading-relaxed">{body}</p>
            <Link to="/" className="btn-secondary mt-8">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {t('legal.back')}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
