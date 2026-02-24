import { useTranslation } from 'react-i18next'

export default function DrawerContent({ item }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <div className="flex flex-col h-full overflow-y-auto p-6 md:p-8">
      <p className="text-xs font-medium tracking-widest uppercase text-cyan-text/80 mb-2">
        {item.period[lang] ?? item.period.es}
      </p>
      <h2 className="text-2xl font-bold text-text mb-1">{item.company}</h2>
      <p className="text-base font-medium text-accent-text mb-1">
        {item.role[lang] ?? item.role.es}
      </p>
      {item.location && (
        <p className="text-xs text-muted/60 mb-2">{item.location[lang] ?? item.location.es}</p>
      )}
      <span className="inline-block self-start text-xs font-semibold px-2 py-0.5 rounded-full bg-violet-500/20 text-accent-light border border-violet-500/30 mb-6">
        {t(`language.${item.language}`)}
      </span>

      <p className="text-sm text-muted leading-relaxed mb-6">
        {item.description[lang] ?? item.description.es}
      </p>

      <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent mb-6" />

      {item.responsibilities && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-3">
            {t('drawer.responsibilities')}
          </h3>
          <ul className="space-y-2">
            {(item.responsibilities[lang] ?? item.responsibilities.es).map((r) => (
              <li key={r} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.highlights && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-3">
            {t('drawer.highlights')}
          </h3>
          <ul className="space-y-2">
            {(item.highlights[lang] ?? item.highlights.es).map((h) => (
              <li key={h} className="flex items-start gap-2 text-sm text-muted">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap gap-1.5">
          {item.expandedTech.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-lg font-medium bg-bg text-muted border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
