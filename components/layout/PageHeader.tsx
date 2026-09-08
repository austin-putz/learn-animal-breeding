import Link from 'next/link'
import { Fragment } from 'react'
import { CategoryRail } from '@/components/layout/CategoryRail'
import type { RailItem } from '@/lib/navigation'

export interface Crumb {
  label: string
  href?: string
}

interface PageHeaderProps {
  breadcrumb?: Crumb[]
  /** When present, renders the category rail between the breadcrumb and the title. */
  rail?: RailItem[]
  title: string
  description?: string
}

/**
 * The masthead every page shares: breadcrumb, optional category rail, title,
 * one line of description. Keeps vertical rhythm identical section to section.
 */
export function PageHeader({ breadcrumb, rail, title, description }: PageHeaderProps) {
  return (
    <header>
      {breadcrumb && breadcrumb.length > 0 && (
        <nav aria-label="Breadcrumb" className="meta mb-5">
          {breadcrumb.map((crumb, i) => (
            <Fragment key={`${crumb.label}-${i}`}>
              {i > 0 && <span className="px-2 text-line-strong">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="transition-colors hover:text-ink">
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </Fragment>
          ))}
        </nav>
      )}

      {rail && <CategoryRail items={rail} />}

      <div className={`flex max-w-[60ch] flex-col gap-3 ${rail ? 'pt-8' : ''}`}>
        <h1 className="text-3xl font-bold leading-[1.1] md:text-[2.1rem]">{title}</h1>
        {description && <p className="text-[15px] text-muted">{description}</p>}
      </div>
    </header>
  )
}
