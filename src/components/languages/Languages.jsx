import { useTranslation } from 'react-i18next'

import { languages } from '../../data/languages'

export default function Languages() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-accent-text mb-3">
          {t('languages.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text">{t('languages.title')}</h2>
        <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {languages.map((item) => (
          <div
            key={item.name.en}
            className="rounded-2xl p-6 bg-surface border border-violet-900/30 text-center"
          >
            <p className="text-lg font-semibold text-text mb-3">
              {item.name[lang] ?? item.name.es}
            </p>
            <div className="flex items-center justify-center gap-1.5 mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full ${i < item.level ? 'bg-violet-500' : 'bg-muted/20'}`}
                />
              ))}
            </div>
            <p className="text-xs text-muted">{item.label[lang] ?? item.label.es}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
