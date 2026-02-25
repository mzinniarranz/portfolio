import { useTranslation } from 'react-i18next'

import { personalInfo } from '../../data/experience'
import Contact from './contact/Contact'
import DownloadCv from './download-cv/DownloadCv'
import Linkedin from './linkedin/Linkedin'

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

        <div id="hero-cta" className="flex items-center justify-center gap-4 flex-wrap">
          <DownloadCv />
          {personalInfo.email && <Contact email={personalInfo.email} />}
          <Linkedin />
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      </div>
    </section>
  )
}
