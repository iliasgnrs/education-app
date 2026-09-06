import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { I18nContext, type I18nContextValue } from './context';
import { translations } from './translations';
import { getInitialLang, type Lang } from './types';

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => getInitialLang());

  useEffect(() => {
    window.localStorage.setItem('accessed-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback(
    (key: string): string => {
      const parts = key.split('.');
      let val: unknown = translations[lang];
      for (const p of parts) {
        if (val && typeof val === 'object' && p in (val as Record<string, unknown>)) {
          val = (val as Record<string, unknown>)[p];
        } else {
          return key;
        }
      }
      return typeof val === 'string' ? val : key;
    },
    [lang],
  );

  const value = useMemo<I18nContextValue>(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
