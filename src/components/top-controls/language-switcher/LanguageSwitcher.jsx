import { useTranslation } from 'react-i18next'

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language

  const toggle = (lang) => {
    i18n.changeLanguage(lang)
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }

  return (
    <div className="inline-flex items-center rounded-lg border border-muted/15 overflow-hidden text-xs font-semibold">
      <button
        onClick={() => toggle('es')}
        className={`px-3 py-1.5 cursor-pointer transition-colors duration-200 ${
          current === 'es'
            ? 'bg-violet-600 text-white'
            : 'text-muted hover:text-text hover:bg-muted/5'
        }`}
      >
        ES
      </button>
      <div className="w-px h-4 bg-muted/15" />
      <button
        onClick={() => toggle('en')}
        className={`px-3 py-1.5 cursor-pointer transition-colors duration-200 ${
          current === 'en'
            ? 'bg-violet-600 text-white'
            : 'text-muted hover:text-text hover:bg-muted/5'
        }`}
      >
        EN
      </button>
    </div>
  )
}
