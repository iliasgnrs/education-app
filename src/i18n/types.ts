export type Lang = 'en' | 'el';

export const LANGS: Lang[] = ['en', 'el'];

export const LANG_LABELS: Record<Lang, string> = {
  en: 'EN',
  el: 'ΕΛ',
};

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  el: 'Ελληνικά',
};

export function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem('accessed-lang');
  if (stored === 'en' || stored === 'el') return stored;
  const nav = window.navigator.language?.slice(0, 2).toLowerCase();
  if (nav === 'el') return 'el';
  return 'en';
}
