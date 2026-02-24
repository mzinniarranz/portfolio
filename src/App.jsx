import { useTranslation } from 'react-i18next'

import Hero from './components/Hero'
import Timeline from './components/timeline/Timeline'
import TechStack from './components/tech-stack/TechStack'

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0d0d14' }}>
      <Hero />
      <Timeline />
      <TechStack />

      <footer className="w-full border-t border-white/5 mt-8 py-8 text-center">
        <p className="text-xs text-[#94a3b8]/50">{t('footer.credit')}</p>
      </footer>
    </div>
  )
}
