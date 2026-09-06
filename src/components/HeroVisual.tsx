import { useI18n } from '@/i18n/context';
import { FileText, Check, ShieldCheck, Type, Clock, Eye } from 'lucide-react';

export default function HeroVisual() {
  const { t } = useI18n();

  const variants = [
    { icon: Type, label: 'Dyslexia-friendly', color: 'text-brand-600 bg-brand-50' },
    { icon: Clock, label: 'Extended time', color: 'text-amber-600 bg-amber-50' },
    { icon: Eye, label: 'Large print', color: 'text-sky-600 bg-sky-50' },
    { icon: Check, label: 'Simplified language', color: 'text-emerald-600 bg-emerald-50' },
  ];

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-50 to-ink-50 blur-2xl opacity-70" aria-hidden="true" />

      <div className="relative rounded-2xl border border-ink-100 bg-white p-6 shadow-lg shadow-brand-900/5">
        {/* Original document */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
            <FileText className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-900">{t('home.hero.visualOriginal')}</p>
            <p className="text-xs text-ink-400">Math Quiz — Chapter 5</p>
          </div>
        </div>

        {/* Document lines */}
        <div className="space-y-2 mb-5">
          {[100, 85, 92, 70, 95, 60].map((w, i) => (
            <div
              key={i}
              className="h-2.5 rounded-full bg-ink-100"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center my-4">
          <div className="flex flex-col items-center gap-1">
            <div className="h-8 w-px bg-brand-200" />
            <div className="h-0 w-0 border-x-4 border-t-4 border-x-transparent border-t-brand-400" />
          </div>
        </div>

        {/* Adapted versions */}
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-3">
          {t('home.hero.visualAdapted')}
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          {variants.map((v, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-lg border border-ink-100 bg-ink-50 px-3 py-2.5 animate-fade-up"
              style={{ animationDelay: `${i * 120}ms`, opacity: 0 }}
            >
              <span className={`flex h-7 w-7 items-center justify-center rounded-md ${v.color}`}>
                <v.icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <span className="text-xs font-medium text-ink-700">{v.label}</span>
            </div>
          ))}
        </div>

        {/* Badge */}
        <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-white">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
          <span className="text-xs font-semibold">{t('home.hero.visualBadge')}</span>
        </div>
      </div>
    </div>
  );
}
