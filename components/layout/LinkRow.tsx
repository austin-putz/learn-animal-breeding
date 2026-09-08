import { ArrowUpRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface LinkRowItem {
  title: string
  description?: string
  /** Omit for items that are announced but not published yet. */
  href?: string
  /** Short mono label: "Available", "In progress", "Coming soon". */
  status?: string
  icon?: LucideIcon
}

const columns: Record<number, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
}

function Row({ title, description, href, status, icon: Icon }: LinkRowItem) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-2.5">
          {Icon && (
            <Icon
              className="mt-0.5 h-4 w-4 flex-shrink-0 text-faint transition-colors group-hover:text-moss"
              strokeWidth={1.75}
            />
          )}
          <h3 className="font-display text-[15px] font-semibold leading-snug tracking-tight transition-colors group-hover:text-moss">
            {title}
          </h3>
        </div>
        {href ? (
          <ArrowUpRight
            className="mt-0.5 h-4 w-4 flex-shrink-0 text-faint transition-colors group-hover:text-moss"
            strokeWidth={1.75}
          />
        ) : null}
      </div>
      {description && (
        <p className="text-[13.5px] leading-relaxed text-muted">{description}</p>
      )}
      {status && <span className="meta-sm">{status}</span>}
    </>
  )

  const shared = 'group flex flex-col gap-2 border-t border-line py-5'

  if (!href) {
    return <div className={`${shared} opacity-70`}>{inner}</div>
  }

  const external = href.startsWith('http')

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={shared}
    >
      {inner}
    </a>
  )
}

/**
 * A set of links as hairline-separated rows. Used anywhere the page is a list
 * of things to go and read: personal notes, video playlists, journals, skills.
 */
export function LinkRows({
  items,
  cols = 2,
}: {
  items: LinkRowItem[]
  cols?: 1 | 2 | 3
}) {
  return (
    <div className={`grid grid-cols-1 gap-x-10 ${columns[cols]}`}>
      {items.map((item) => (
        <Row key={item.title} {...item} />
      ))}
    </div>
  )
}

/**
 * A titled block of link rows.
 */
export function LinkSection({
  label,
  description,
  items,
  cols = 2,
}: {
  label: string
  description?: string
  items: LinkRowItem[]
  cols?: 1 | 2 | 3
}) {
  return (
    <section className="pt-10">
      <h2 className="group-label pb-1.5">{label}</h2>
      {description && (
        <p className="max-w-[62ch] pb-1 text-[13.5px] text-muted">{description}</p>
      )}
      <LinkRows items={items} cols={cols} />
    </section>
  )
}
