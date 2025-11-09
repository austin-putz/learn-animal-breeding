'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-1 p-1 border border-neutral-200 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded transition-colors ${
          theme === 'light'
            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
            : 'hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
        }`}
        aria-label="Light mode"
        title="Light mode"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded transition-colors ${
          theme === 'dark'
            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
            : 'hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
        }`}
        aria-label="Dark mode"
        title="Dark mode"
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded transition-colors ${
          theme === 'system'
            ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300'
            : 'hover:bg-neutral-100 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-400'
        }`}
        aria-label="System theme"
        title="System theme"
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  )
}
