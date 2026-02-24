import { useTranslation } from 'react-i18next'

import { experience } from '../../data/experience'
import TimelineItem from './timeline-item/TimelineItem'

export default function Timeline() {
  const { t } = useTranslation()

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-violet-400 mb-3">
          {t('timeline.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0]">{t('timeline.title')}</h2>
        <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>

      <div className="relative">
        {/* Línea vertical central — solo desktop */}
        <div
          className="
            hidden md:block absolute left-1/2 -translate-x-px
            top-0 bottom-0 w-px
            bg-gradient-to-b from-transparent via-violet-600/40 to-transparent
          "
        />

        {/* Línea vertical — solo móvil */}
        <div
          className="
            md:hidden absolute left-2 top-0 bottom-0 w-px
            bg-gradient-to-b from-transparent via-violet-600/40 to-transparent
          "
        />

        <div className="md:px-0 pl-8">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
