'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { RailItem } from '@/lib/navigation'

/**
 * Horizontal section navigation. Replaces the fixed-width left sidebars, which
 * cost 256px on every content page and had no mobile rendering. Below `md` this
 * scrolls sideways rather than wrapping, so it stays one line tall everywhere.
 */
export function CategoryRail({ items }: { items: RailItem[] }) {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Section categories"
      className="no-scrollbar -mx-4 flex items-end gap-7 overflow-x-auto border-b border-line px-4 md:mx-0 md:gap-8 md:px-0"
    >
      {items.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? 'page' : undefined}
            className={`-mb-px flex items-baseline gap-2 whitespace-nowrap border-b-2 pb-3 font-display text-[14.5px] transition-colors ${
              isActive
                ? 'border-moss font-semibold text-ink'
                : 'border-transparent font-medium text-muted hover:text-ink'
            }`}
          >
            {item.name}
            {item.count !== undefined && (
              <span
                className={`font-mono text-[11px] ${isActive ? 'text-moss' : 'text-faint'}`}
              >
                {item.count}
              </span>
            )}
          </Link>
        )
      })}
    </nav>
  )
}
