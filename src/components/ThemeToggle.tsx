import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface ThemeToggleProps {
  className?: string
  tabIndex?: number
}

export function ThemeToggle({ className = '', tabIndex = 0 }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      tabIndex={tabIndex}
      className={`rounded-md p-2 text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
