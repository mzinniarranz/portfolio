import { useTranslation } from 'react-i18next'

import { stack } from '../../data/stack'

export default function TechStack() {
  const { t } = useTranslation()
  const duplicated = [...stack, ...stack]

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-400 mb-3">
          {t('techStack.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0]">{t('techStack.title')}</h2>
        <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="marquee-track flex w-max gap-12 py-4">
          {duplicated.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="
                flex flex-col items-center gap-2 shrink-0
                text-[#94a3b8] hover:text-violet-400
                transition-colors duration-300 cursor-default
              "
            >
              <tech.icon size={40} />
              <span className="text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
