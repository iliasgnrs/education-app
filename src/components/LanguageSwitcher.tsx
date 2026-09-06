import { useI18n } from '@/i18n/context';
import { LANGS, LANG_LABELS } from '@/i18n/types';
import { Globe, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('nav.switchLanguage')}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="btn-ghost px-2.5 py-2"
      >
        <Globe className="h-4 w-4 text-ink-500" aria-hidden="true" />
        <span className="text-sm font-semibold text-ink-700">{LANG_LABELS[lang]}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-40 rounded-lg border border-ink-100 bg-white py-1 shadow-lg z-50 animate-scale-in origin-top-right"
        >
          {LANGS.map((l) => (
            <li key={l} role="option" aria-selected={lang === l}>
              <button
                type="button"
                onClick={() => {
                  setLang(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-ink-50 ${
                  lang === l ? 'text-brand-700 font-semibold' : 'text-ink-700'
                }`}
              >
                <span>
                  {LANG_LABELS[l]}
                  <span className="ml-2 text-xs text-ink-400">{l === 'en' ? 'English' : 'Ελληνικά'}</span>
                </span>
                {lang === l && <Check className="h-4 w-4" aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
