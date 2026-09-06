import { useCallback } from 'react';
import { useI18n } from './context';
import { translations } from './translations';
import type { Lang } from './types';

export function useT() {
  const { lang } = useI18n();
  const dict = translations[lang];

  const tArray = useCallback(<T,>(key: string): T[] => {
    const parts = key.split('.');
    let val: unknown = dict;
    for (const p of parts) {
      if (val && typeof val === 'object' && p in (val as Record<string, unknown>)) {
        val = (val as Record<string, unknown>)[p];
      } else {
        return [];
      }
    }
    return Array.isArray(val) ? (val as T[]) : [];
  }, [dict]);

  const tObj = useCallback(<T,>(key: string): T | null => {
    const parts = key.split('.');
    let val: unknown = dict;
    for (const p of parts) {
      if (val && typeof val === 'object' && p in (val as Record<string, unknown>)) {
        val = (val as Record<string, unknown>)[p];
      } else {
        return null;
      }
    }
    return (val as T) ?? null;
  }, [dict]);

  return { ...useI18n(), tArray, tObj, dict };
}

export type { Lang };
