import { useTranslation } from 'react-i18next'

import { DownloadIcon } from './config'

export default function DownloadCv() {
  const { t, i18n } = useTranslation()

  return (
    <a
      href={`/marc-zinni-cv-${i18n.language.toUpperCase()}.pdf`}
      download
      className="
        inline-flex items-center gap-2.5
        px-7 py-3.5 rounded-xl
        bg-violet-600 hover:bg-violet-500
        text-white font-semibold text-sm
        shadow-[0_0_25px_rgba(124,58,237,0.5)]
        hover:shadow-[0_0_35px_rgba(124,58,237,0.7)]
        transition-all duration-300 hover:-translate-y-0.5
        active:translate-y-0
      "
    >
      <DownloadIcon />
      {t('hero.downloadCV')}
    </a>
  )
}
