import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/context';
import { useT } from '@/i18n/useT';
import Reveal from '@/components/Reveal';
import HeroVisual from '@/components/HeroVisual';
import {
  Upload,
  Users,
  Sparkles,
  ClipboardCheck,
  Eye,
  ShieldCheck,
  Lock,
  ArrowRight,
  Check,
} from 'lucide-react';

interface Step {
  title: string;
  desc: string;
}
interface FeatureCard {
  title: string;
  desc: string;
}
interface WhoForCard {
  title: string;
  desc: string;
  link: string;
}

export default function Home() {
  const { t } = useI18n();
  const { tArray } = useT();

  const steps = tArray<Step>('home.howItWorks.steps');
  const features = tArray<FeatureCard>('home.features.cards');
  const whoForCards = tArray<WhoForCard>('home.whoFor.cards');
  const accommodations = tArray<string>('home.accommodations.tags');

  const stepIcons = [Upload, Users, Sparkles, ClipboardCheck];
  const featureIcons = [Eye, ShieldCheck, Lock];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-ink-100/50 blur-3xl" />
        </div>
        <div className="container-content py-16 sm:py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="eyebrow">{t('home.hero.eyebrow')}</span>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-ink-900">
                  {t('home.hero.headline')}
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 text-lg text-ink-600 leading-relaxed max-w-xl">
                  {t('home.hero.subheadline')}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link to="/signup" className="btn-primary text-base px-6 py-3">
                    {t('home.hero.ctaPrimary')}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link to="/about" className="btn-secondary text-base px-6 py-3">
                    {t('home.hero.ctaSecondary')}
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal delay={400} className="lg:pl-8">
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-white">
        <div className="container-content">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">{t('home.howItWorks.eyebrow')}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('home.howItWorks.title')}</h2>
              <p className="mt-4 text-lg text-ink-600">{t('home.howItWorks.subtitle')}</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="relative h-full rounded-xl border border-ink-100 bg-ink-50/50 p-6 transition-all duration-300 hover:border-brand-200 hover:bg-white hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-600 text-white">
                    {(() => {
                      const Icon = stepIcons[i] ?? Upload;
                      return <Icon className="h-5 w-5" aria-hidden="true" />;
                    })()}
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="text-sm font-bold text-brand-600">{i + 1}</span>
                    <h3 className="text-base font-semibold text-ink-900">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-ink-50">
        <div className="container-content">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">{t('home.features.eyebrow')}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('home.features.title')}</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((card, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="card h-full transition-all duration-300 hover:shadow-lg hover:border-brand-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    {(() => {
                      const Icon = featureIcons[i] ?? Eye;
                      return <Icon className="h-6 w-6" aria-hidden="true" />;
                    })()}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations */}
      <section className="section bg-white">
        <div className="container-content">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">{t('home.accommodations.eyebrow')}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('home.accommodations.title')}</h2>
              <p className="mt-4 text-lg text-ink-600">{t('home.accommodations.subtitle')}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap gap-3">
              {accommodations.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-4 py-2.5 text-sm font-medium text-ink-700 transition-all duration-200 hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 cursor-default"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section bg-ink-50">
        <div className="container-content">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">{t('home.whoFor.eyebrow')}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('home.whoFor.title')}</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whoForCards.map((card, i) => (
              <Reveal key={i} delay={i * 150}>
                <Link
                  to={i === 0 ? '/pricing#individual' : '/pricing#enterprise'}
                  className="card block h-full transition-all duration-300 hover:shadow-lg hover:border-brand-200 group"
                >
                  <h3 className="text-xl font-semibold text-ink-900">{card.title}</h3>
                  <p className="mt-3 text-sm text-ink-600 leading-relaxed">{card.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:gap-2.5 transition-all">
                    {card.link}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-brand-600 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-700/40 blur-3xl" />
        </div>
        <div className="container-content text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-2xl mx-auto leading-tight">
              {t('home.ctaBand.title')}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-lg text-brand-100">{t('home.ctaBand.subtitle')}</p>
          </Reveal>
          <Reveal delay={200}>
            <Link
              to="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 transition-all duration-200 hover:bg-brand-50 hover:shadow-lg"
            >
              <Check className="h-5 w-5" aria-hidden="true" />
              {t('home.ctaBand.button')}
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
