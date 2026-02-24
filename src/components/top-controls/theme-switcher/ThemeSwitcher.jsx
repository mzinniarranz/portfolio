import { FiSun, FiMoon } from 'react-icons/fi'

import { useTheme } from '../../../context/ThemeContext'

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer text-muted hover:text-text bg-muted/5 hover:bg-muted/10 border border-muted/15 hover:border-violet-500/40 transition-all duration-200"
    >
      {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  )
}
