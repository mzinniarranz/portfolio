import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

import { useDrawer } from './use-drawer'
import { backdropVariants, panelVariants } from './config'
import DrawerContent from './DrawerContent'

export default function Drawer({ item, onClose }) {
  const { t } = useTranslation()
  const { drawerRef } = useDrawer(!!item, onClose)

  if (!item) return null

  return createPortal(
    <>
      <motion.div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.aside
        ref={drawerRef}
        className="fixed top-0 right-0 z-50 h-full w-full sm:w-[28rem] md:w-[32rem] bg-[#1a1a2e]/95 backdrop-blur-xl border-l border-violet-900/30 shadow-[-8px_0_30px_rgba(124,58,237,0.15)]"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        role="dialog"
        aria-modal="true"
        aria-label={item.company}
        tabIndex={-1}
      >
        <button
          onClick={onClose}
          aria-label={t('drawer.close')}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg flex items-center justify-center text-[#94a3b8] hover:text-[#e2e8f0] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 transition-all duration-200"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="1" y1="1" x2="13" y2="13" />
            <line x1="13" y1="1" x2="1" y2="13" />
          </svg>
        </button>

        <DrawerContent item={item} />
      </motion.aside>
    </>,
    document.body,
  )
}
