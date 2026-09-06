import { useI18n } from '@/i18n/context';
import Reveal from '@/components/Reveal';
import { useState, type FormEvent } from 'react';
import { Send, CheckCircle, Mail, Building2, User, MessageSquare, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    organization: '',
    subject: 'general',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.name.trim()) e.name = t('contact.form.errors.nameRequired');
    if (!form.email.trim()) e.email = t('contact.form.errors.emailRequired');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('contact.form.errors.emailInvalid');
    if (!form.message.trim()) e.message = t('contact.form.errors.messageRequired');
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setSubmitting(true);
    // Stub: wire to an email service or Supabase table later.
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 800);
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function resetForm() {
    setForm({ name: '', email: '', organization: '', subject: 'general', message: '' });
    setErrors({});
    setSuccess(false);
  }

  const subjects = ['general', 'sales', 'support', 'press'] as const;

  if (success) {
    return (
      <section className="bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-content py-20 sm:py-28">
          <Reveal>
            <div className="mx-auto max-w-lg text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <CheckCircle className="h-8 w-8" aria-hidden="true" />
              </div>
              <h1 className="mt-6 text-3xl font-bold text-ink-900">{t('contact.form.successTitle')}</h1>
              <p className="mt-3 text-lg text-ink-600">{t('contact.form.successMessage')}</p>
              <button type="button" onClick={resetForm} className="btn-secondary mt-8">
                {t('contact.form.sendAnother')}
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50/60 to-white">
        <div className="container-content py-16 sm:py-20 text-center">
          <Reveal>
            <span className="eyebrow">{t('contact.hero.eyebrow')}</span>
            <h1 className="mt-3 text-4xl sm:text-5xl font-bold max-w-2xl mx-auto">{t('contact.hero.title')}</h1>
            <p className="mt-4 text-lg text-ink-600 max-w-xl mx-auto">{t('contact.hero.subtitle')}</p>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="section bg-white">
        <div className="container-content max-w-2xl">
          <Reveal>
            {/* Enterprise prompt */}
            <div className="mb-8 rounded-xl border border-brand-200 bg-brand-50 p-5">
              <div className="flex gap-3">
                <Building2 className="h-5 w-5 shrink-0 text-brand-600 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-brand-800 font-medium">{t('contact.form.enterprisePrompt')}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-ink-800">
                  {t('contact.form.name')}
                </label>
                <div className="mt-1.5 relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" aria-hidden="true" />
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder={t('contact.form.namePlaceholder')}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full rounded-lg border bg-white pl-10 pr-3 py-2.5 text-sm text-ink-800 placeholder:text-ink-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 ${
                      errors.name ? 'border-red-400' : 'border-ink-200'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-ink-800">
                  {t('contact.form.email')}
                </label>
                <div className="mt-1.5 relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" aria-hidden="true" />
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder={t('contact.form.emailPlaceholder')}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full rounded-lg border bg-white pl-10 pr-3 py-2.5 text-sm text-ink-800 placeholder:text-ink-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 ${
                      errors.email ? 'border-red-400' : 'border-ink-200'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-ink-800">
                  {t('contact.form.organization')}
                </label>
                <div className="mt-1.5 relative">
                  <Building2 className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400" aria-hidden="true" />
                  <input
                    id="organization"
                    type="text"
                    value={form.organization}
                    onChange={(e) => handleChange('organization', e.target.value)}
                    placeholder={t('contact.form.organizationPlaceholder')}
                    className="w-full rounded-lg border border-ink-200 bg-white pl-10 pr-3 py-2.5 text-sm text-ink-800 placeholder:text-ink-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-ink-800">
                  {t('contact.form.subject')}
                </label>
                <div className="mt-1.5 relative">
                  <MessageSquare className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 z-10" aria-hidden="true" />
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className="w-full appearance-none rounded-lg border border-ink-200 bg-white pl-10 pr-8 py-2.5 text-sm text-ink-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {t(`contact.form.subjects.${s}`)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-ink-800">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder={t('contact.form.messagePlaceholder')}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`mt-1.5 w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink-800 placeholder:text-ink-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-600 focus:ring-offset-2 resize-y ${
                    errors.message ? 'border-red-400' : 'border-ink-200'
                  }`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600">
                    <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full justify-center text-base py-3 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  t('contact.form.sending')
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {t('contact.form.submit')}
                  </>
                )}
              </button>
            </form>

            {/* Direct email */}
            <p className="mt-8 text-center text-sm text-ink-500">
              {t('contact.direct.text')}{' '}
              <a href="mailto:hello@accessed.app" className="font-semibold text-brand-600 hover:text-brand-700 transition-colors">
                {t('contact.direct.email')}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
