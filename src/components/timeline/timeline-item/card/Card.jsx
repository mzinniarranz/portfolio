import { useTranslation } from 'react-i18next'

export default function Card({ item, onSelect }) {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <div
      className="
        relative rounded-2xl p-6 transition-all duration-300 cursor-pointer
        bg-[#1a1a2e] border border-violet-900/30
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
        bg-violet-500/20 text-violet-300 border border-violet-500/30
      "
      >
        {t(`language.${item.language}`)}
      </span>

      <p className="text-xs font-medium tracking-widest uppercase text-cyan-400/80 mb-2">
        {item.period[lang] ?? item.period.es}
      </p>

      <h3 className="text-lg font-bold text-[#e2e8f0] mb-0.5">{item.company}</h3>

      <p className="text-sm font-medium text-violet-400 mb-1">{item.role[lang] ?? item.role.es}</p>

      {item.location && (
        <p className="text-xs text-[#94a3b8]/60 mb-3">{item.location[lang] ?? item.location.es}</p>
      )}

      <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
        {item.description[lang] ?? item.description.es}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {item.tech.map((tech) => (
          <span
            key={tech}
            className="
              text-xs px-2.5 py-1 rounded-lg font-medium
              bg-[#0d0d14] text-[#94a3b8] border border-white/5
              hover:border-violet-500/40 hover:text-violet-300
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
