import ThemeSwitcher from './theme-switcher/ThemeSwitcher'
import LanguageSwitcher from './language-switcher/LanguageSwitcher'

export default function TopControls() {
  return (
    <div className="fixed top-6 right-6 z-30 flex items-center gap-2">
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  )
}
