'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'

const options = [
  { value: 'light', label: 'Light mode', Icon: Sun },
  { value: 'dark', label: 'Dark mode', Icon: Moon },
  { value: 'system', label: 'System theme', Icon: Monitor },
] as const

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  // Reserve the space before mount so the header does not shift.
  if (!mounted) return <div className="h-9 w-[102px]" aria-hidden="true" />

  return (
    <div className="flex items-center rounded-md border border-line-strong bg-surface p-0.5">
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`rounded-sm p-1.5 transition-colors ${
            theme === value
              ? 'bg-ink text-paper'
              : 'text-muted hover:bg-sunken hover:text-ink'
          }`}
          aria-label={label}
          aria-pressed={theme === value}
          title={label}
        >
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </button>
      ))}
    </div>
  )
}
