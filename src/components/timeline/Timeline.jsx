import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { experience } from '../../data/experience'
import TimelineItem from './timeline-item/TimelineItem'
import Drawer from './drawer/Drawer'

export default function Timeline() {
  const { t } = useTranslation()
  const [selectedItem, setSelectedItem] = useState(null)

  const handleSelect = useCallback((item) => setSelectedItem(item), [])
  const handleClose = useCallback(() => setSelectedItem(null), [])

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-accent-text mb-3">
          {t('timeline.label')}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text">{t('timeline.title')}</h2>
        <div className="mt-4 mx-auto w-16 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>

      <div className="relative">
        <div
          className="
            hidden md:block absolute left-1/2 -translate-x-px
            top-0 bottom-0 w-px
            bg-gradient-to-b from-transparent via-violet-600/40 to-transparent
          "
        />

        <div
          className="
            md:hidden absolute left-2 top-0 bottom-0 w-px
            bg-gradient-to-b from-transparent via-violet-600/40 to-transparent
          "
        />

        <div className="md:px-0 pl-8">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} onSelect={handleSelect} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && <Drawer item={selectedItem} onClose={handleClose} />}
      </AnimatePresence>
    </section>
  )
}
