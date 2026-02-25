import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact({ email }) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  const handleClick = () => {
    globalThis.location.href = `mailto:${email}`
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center gap-2
        px-7 py-3.5 rounded-xl
        border border-muted/15 hover:border-violet-500/50
        text-muted hover:text-text font-semibold text-sm
        transition-all duration-300 hover:-translate-y-0.5
        hover:bg-muted/5 cursor-pointer
      "
    >
      {copied ? t('hero.copied') : t('hero.contact')}
    </button>
  )
}
