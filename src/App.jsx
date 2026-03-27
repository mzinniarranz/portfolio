import { useTranslation } from 'react-i18next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

import Hero from './components/hero/Hero'
import TopControls from './components/top-controls/TopControls'
import Timeline from './components/timeline/Timeline'
import TechStack from './components/tech-stack/TechStack'
import Languages from './components/languages/Languages'

export default function App() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-bg">
      <TopControls />
      <Hero />
      <Timeline />
      <TechStack />
      <Languages />

      <footer className="w-full border-t border-border mt-8 py-8 text-center">
        <p className="text-xs text-muted/50">
          <a
            href="https://github.com/mzinniarranz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-light transition-colors"
          >
            {t('footer.credit')}
          </a>
        </p>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}
