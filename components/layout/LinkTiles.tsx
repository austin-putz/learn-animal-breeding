import { ArrowUpRight, ArrowRight } from 'lucide-react'
import type { LinkRowItem } from '@/components/layout/LinkRow'

const columns: Record<number, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
}

/**
 * The same tile as the section indexes, for pages whose items are the
 * destination rather than a category. There is no count or cover art to fill
 * the head, so the item's icon carries it at size, with the status opposite.
 *
 * Announced-but-unpublished items are not links. They keep the shape so the
 * grid stays even, but drop the accent and the arrow: nothing to go to.
 */
function Tile({ title, description, href, status, icon: Icon }: LinkRowItem) {
  const live = Boolean(href)
  const external = href?.startsWith('http')

  const shell = live
    ? 'group relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-moss hover:shadow-xl focus-visible:-translate-y-0.5 focus-visible:border-moss'
    : 'relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-5 opacity-75'

  const inner = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 z-10 h-[3px] ${
          live ? 'bg-moss/45 transition-colors duration-200 group-hover:bg-moss' : 'bg-line-strong'
        }`}
      />

      <div className="-mx-5 -mt-5 mb-5 flex h-[92px] items-end justify-between gap-4 border-b border-line bg-moss-wash px-5 pb-4">
        {Icon && (
          <Icon
            className={`h-10 w-10 flex-shrink-0 ${
              live ? 'text-moss/55 transition-colors duration-200 group-hover:text-moss' : 'text-faint'
            }`}
            strokeWidth={1.25}
          />
        )}
        {status && <span className="meta-sm">{status}</span>}
      </div>

      <div className="flex-1">
        <h3
          className={`font-display text-[15px] font-semibold leading-snug tracking-tight ${
            live ? 'transition-colors group-hover:text-moss' : ''
          }`}
        >
          {title}
        </h3>
        {description && (
          <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{description}</p>
        )}
      </div>

      <div className="mt-5 flex items-center justify-end border-t border-line pt-3">
        {live &&
          (external ? (
            <ArrowUpRight
              className="h-4 w-4 text-faint transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-moss"
              strokeWidth={1.75}
            />
          ) : (
            <ArrowRight
              className="h-4 w-4 text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-moss"
              strokeWidth={1.75}
            />
          ))}
        {/* Keeps the footer rule at the same height on tiles with no arrow. */}
        {!live && <span className="h-4" />}
      </div>
    </>
  )

  if (!live) return <div className={shell}>{inner}</div>

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={shell}
    >
      {inner}
    </a>
  )
}

export function LinkTiles({ items, cols = 3 }: { items: LinkRowItem[]; cols?: 2 | 3 }) {
  return (
    <div className={`mt-6 grid auto-rows-fr grid-cols-1 gap-5 ${columns[cols]}`}>
      {items.map((item) => (
        <Tile key={item.title} {...item} />
      ))}
    </div>
  )
}

/** A titled block of link tiles, matching LinkSection's header. */
export function LinkTileSection({
  label,
  description,
  items,
  cols = 3,
}: {
  label: string
  description?: string
  items: LinkRowItem[]
  cols?: 2 | 3
}) {
  return (
    <section className="pt-10">
      <h2 className="group-label pb-1.5">{label}</h2>
      {description && <p className="max-w-[62ch] text-[13.5px] text-muted">{description}</p>}
      <LinkTiles items={items} cols={cols} />
    </section>
  )
}
