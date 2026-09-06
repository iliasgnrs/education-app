import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/context';
import { useT } from '@/i18n/useT';
import Reveal from '@/components/Reveal';
import { Check, ChevronDown, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface FaqItem {
  q: string;
  a: string;
}

interface PlanInfo {
  name: string;
  tagline: string;
  price: string;
  period: string;
  cta: string;
  recommended?: string;
  features: string[];
}

export default function Pricing() {
  const { t } = useI18n();
  const { tArray, tObj } = useT();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = tArray<FaqItem>('pricing.faq.items');
  const individual = tObj<PlanInfo>('pricing.individual');
  const enterprise = tObj<PlanInfo>('pricing.enterprise');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-content py-16 sm:py-20 text-center">
          <Reveal>
            <span className="eyebrow">{t('pricing.hero.eyebrow')}</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold max-w-2xl mx-auto">{t('pricing.hero.title')}</h1>
            <p className="mt-4 text-lg text-ink-600 max-w-xl mx-auto">{t('pricing.hero.subtitle')}</p>
          </Reveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="section bg-white">
        <div className="container-content">
          <div className="grid gap-6 lg:grid-cols-2 max-w-4xl mx-auto">
            {/* Individual */}
            <Reveal>
              <div id="individual" className="card h-full flex flex-col scroll-mt-24">
                <h2 className="text-2xl font-bold text-ink-900">{individual?.name}</h2>
                <p className="mt-2 text-sm text-ink-500">{individual?.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-ink-900">{individual?.price}</span>
                  <span className="text-sm text-ink-400">{individual?.period}</span>
                </div>
                <Link to="/signup" className="btn-secondary mt-6 w-full justify-center text-base py-3">
                  {individual?.cta}
                </Link>
                <ul className="mt-8 space-y-3 flex-1">
                  {individual?.features?.map((f: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <span className="text-sm text-ink-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Enterprise */}
            <Reveal delay={150}>
              <div id="enterprise" className="relative h-full flex flex-col rounded-xl border-2 border-brand-600 bg-white p-6 sm:p-8 shadow-lg scroll-mt-24">
                {enterprise?.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                      <Star className="h-3 w-3 fill-white" aria-hidden="true" />
                      {enterprise.recommended}
                    </span>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-ink-900 mt-2">{enterprise?.name}</h2>
                <p className="mt-2 text-sm text-ink-500">{enterprise?.tagline}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-ink-900">{enterprise?.price}</span>
                </div>
                <Link to="/contact" className="btn-primary mt-6 w-full justify-center text-base py-3">
                  {enterprise?.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <ul className="mt-8 space-y-3 flex-1">
                  {enterprise?.features?.map((f: string, i: number) => {
                    const isHeader = f.endsWith(':');
                    return (
                      <li key={i} className={`flex items-start gap-3 ${isHeader ? 'font-semibold text-ink-900 pt-2' : ''}`}>
                        {!isHeader && (
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                            <Check className="h-3 w-3" aria-hidden="true" />
                          </span>
                        )}
                        <span className={`text-sm ${isHeader ? 'text-ink-900 font-semibold' : 'text-ink-700'}`}>{f}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-ink-50">
        <div className="container-content max-w-3xl">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">{t('pricing.faq.eyebrow')}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('pricing.faq.title')}</h2>
            </div>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqItems.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-xl border border-ink-100 bg-white overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-ink-50"
                  >
                    <span className="text-base font-semibold text-ink-900">{item.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-ink-400 transition-transform duration-300 ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-ink-600 leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
