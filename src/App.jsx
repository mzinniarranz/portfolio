import { useTranslation } from 'react-i18next'

import Hero from './components/Hero'
import Timeline from './components/timeline/Timeline'
import TechStack from './components/tech-stack/TechStack'

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-bg">
      <Hero />
      <Timeline />
      <TechStack />

      <footer className="w-full border-t border-border mt-8 py-8 text-center">
        <p className="text-xs text-muted/50">{t('footer.credit')}</p>
      </footer>
    </div>
  )
}
