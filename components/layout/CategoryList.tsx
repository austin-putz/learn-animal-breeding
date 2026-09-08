import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { RailItem } from '@/lib/navigation'

/**
 * The section index: one hairline-separated row per category. Replaces the
 * grids of per-category gradient tiles, where the colour carried no meaning.
 */
export function CategoryList({
  items,
  unit = 'items',
  unitSingular,
}: {
  items: RailItem[]
  unit?: string
  unitSingular?: string
}) {
  return (
    <div className="mt-8 flex flex-col">
      {items.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-line py-6 transition-[padding] hover:pl-2 ${
            i === items.length - 1 ? 'border-b' : ''
          }`}
        >
          <div>
            <div className="mb-1 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-moss md:text-xl">
              {item.name}
            </div>
            {item.description && (
              <p className="max-w-[62ch] text-[13.5px] text-muted">{item.description}</p>
            )}
          </div>
          <div className="flex items-center gap-3 whitespace-nowrap">
            {item.count !== undefined && (
              <span className="meta-sm">
                {item.count} {item.count === 1 ? (unitSingular ?? unit) : unit}
              </span>
            )}
            <ArrowRight
              className="h-4 w-4 text-faint transition-colors group-hover:text-moss"
              strokeWidth={1.75}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}
