import { useTranslation } from 'react-i18next'

export default function Card({ item, onSelect }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <div
      className="
        relative rounded-2xl p-6 transition-all duration-300 cursor-pointer
        bg-surface border border-violet-900/30
        hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]
        hover:-translate-y-1
      "
      onClick={() => onSelect(item)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(item)
        }
      }}
      role="button"
      tabIndex={0}
    >
      <span
        className="
        absolute top-4 right-4
        text-xs font-semibold px-2 py-0.5 rounded-full
        bg-violet-500/20 text-accent-light border border-violet-500/30
      "
      >
        {t(`language.${item.language}`)}
      </span>

      <p className="text-xs font-medium tracking-widest uppercase text-cyan-text/80 mb-2">
        {item.period[lang] ?? item.period.es}
      </p>

      <h3 className="text-lg font-bold text-text mb-0.5">{item.company}</h3>

      <p className="text-sm font-medium text-accent-text mb-1">{item.role[lang] ?? item.role.es}</p>

      {item.location && (
        <p className="text-xs text-muted/60 mb-3">{item.location[lang] ?? item.location.es}</p>
      )}

      <p className="text-sm text-muted leading-relaxed mb-4">
        {item.description[lang] ?? item.description.es}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className="
              text-xs px-2.5 py-1 rounded-lg font-medium
              bg-bg text-muted border border-border
              hover:border-violet-500/40 hover:text-accent-light
              transition-colors duration-200
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
