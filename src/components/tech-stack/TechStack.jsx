import { useTranslation } from 'react-i18next'

import StackGroup from './stack-group/StackGroup'

export default function TechStack() {
  const { t } = useTranslation()

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-accent-text mb-3">
          {t('techStack.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text">{t('techStack.title')}</h2>
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
        <div className="marquee-track flex w-max py-4">
          <StackGroup />
          <StackGroup />
        </div>
      </div>
    </section>
  )
}
