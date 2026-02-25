import { useTranslation } from 'react-i18next'

import { DownloadIcon } from '../hero/download-cv/config'
import LanguageSwitcher from './language-switcher/LanguageSwitcher'
import ThemeSwitcher from './theme-switcher/ThemeSwitcher'
import { useScrollVisibility } from './use-scroll-visibility'

export default function TopControls() {
  const { i18n } = useTranslation()
  const { isVisible: isCvVisible } = useScrollVisibility('hero-cta')

  return (
    <div className="fixed top-6 right-6 z-30 flex items-center gap-2">
      <a
        href={`/marc-zinni-cv-${i18n.language.toUpperCase()}.pdf`}
        download
        aria-label="Download CV"
        className={`w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer text-white bg-violet-600 hover:bg-violet-500 border border-violet-500/40 transition-all duration-200 ${isCvVisible ? 'scale-0 opacity-0 w-0 overflow-hidden' : 'scale-100 opacity-100'}`}
      >
        <DownloadIcon />
      </a>
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  )
}
