import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n/context';
import { useT } from '@/i18n/useT';
import Reveal from '@/components/Reveal';
import {
  ShieldCheck,
  Scale,
  Lock,
  MessageCircle,
  Users,
  AlertCircle,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

interface PrincipleCard {
  title: string;
  desc: string;
}

export default function About() {
  const { t } = useI18n();
  const { tObj, tArray } = useT();

  const problem = tObj<{ title: string; desc: string }>('about.why.problem');
  const approach = tObj<{ title: string; desc: string }>('about.why.approach');
  const principles = tArray<PrincipleCard>('about.principles.cards');

  const principleIcons = [ShieldCheck, Scale, Lock, MessageCircle];

  return (
    <>
      {/* Hero / Mission */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/60 to-white">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-brand-100/30 blur-3xl" />
        </div>
        <div className="container-content py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="max-w-3xl">
              <span className="eyebrow">{t('about.hero.eyebrow')}</span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight">{t('about.hero.title')}</h1>
              <p className="mt-6 text-lg text-ink-600 leading-relaxed">{t('about.hero.mission')}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why we built this */}
      <section className="section bg-white">
        <div className="container-content">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">{t('about.why.eyebrow')}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('about.why.title')}</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                  <AlertCircle className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink-900">{problem?.title}</h3>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">{problem?.desc}</p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Lightbulb className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-ink-900">{approach?.title}</h3>
                <p className="mt-3 text-sm text-ink-600 leading-relaxed">{approach?.desc}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section bg-ink-50">
        <div className="container-content">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">{t('about.principles.eyebrow')}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('about.principles.title')}</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((card, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="card h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    {(() => {
                      const Icon = principleIcons[i] ?? ShieldCheck;
                      return <Icon className="h-5 w-5" aria-hidden="true" />;
                    })()}
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-content">
          <Reveal>
            <div className="max-w-2xl">
              <span className="eyebrow">{t('about.team.eyebrow')}</span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">{t('about.team.title')}</h2>
              <p className="mt-4 text-lg text-ink-600 leading-relaxed">{t('about.team.desc')}</p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex items-center gap-4 rounded-xl border border-ink-100 bg-ink-50 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shrink-0">
                <Users className="h-7 w-7" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-900">AccessEd Team</p>
                <p className="text-sm text-ink-500">hello@accessed.app</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-600 py-16 sm:py-20">
        <div className="container-content text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">{t('about.cta.title')}</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 transition-all duration-200 hover:bg-brand-50 hover:shadow-lg"
            >
              {t('about.cta.button')}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
