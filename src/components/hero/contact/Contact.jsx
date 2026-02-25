import { useTranslation } from 'react-i18next'

export default function Contact({ email }) {
  const { t } = useTranslation()

  return (
    <a
      href={`mailto:${email}`}
      className="
        inline-flex items-center gap-2
        px-7 py-3.5 rounded-xl
        border border-muted/15 hover:border-violet-500/50
        text-muted hover:text-text font-semibold text-sm
        transition-all duration-300 hover:-translate-y-0.5
        hover:bg-muted/5
      "
    >
      {t('hero.contact')}
    </a>
  )
}
