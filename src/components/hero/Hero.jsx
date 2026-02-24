import { useTranslation } from 'react-i18next'
import { SiLinkedin } from 'react-icons/si'

import { personalInfo } from '../../data/experience'

export default function Hero() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] rounded-full bg-cyan-500/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <div
          className="
          mx-auto mb-8 w-24 h-24 rounded-full
          bg-gradient-to-br from-violet-600 to-cyan-500
          flex items-center justify-center
          shadow-[0_0_40px_rgba(124,58,237,0.4)]
          text-3xl font-bold text-white select-none
        "
        >
          {personalInfo.name.charAt(0)}
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-accent-light text-xs font-medium tracking-wider uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          {t('hero.available')}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="bg-gradient-to-r from-text to-muted bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-accent-text mb-4">
          {personalInfo.title[lang] ?? personalInfo.title.es}
        </p>

        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          {personalInfo.subtitle[lang] ?? personalInfo.subtitle.es}
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="/cv.pdf"
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

          {personalInfo.email && (
            <a
              href={`mailto:${personalInfo.email}`}
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
          )}

          <a
            href="https://www.linkedin.com/in/marczinni/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              inline-flex items-center justify-center
              w-12 h-12 rounded-xl
              border border-muted/15 hover:border-violet-500/50
              text-muted hover:text-text
              transition-all duration-300 hover:-translate-y-0.5
              hover:bg-muted/5
            "
          >
            <SiLinkedin size={20} />
          </a>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>
    </section>
  )
}

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
