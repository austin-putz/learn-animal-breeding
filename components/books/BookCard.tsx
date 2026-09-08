import Image from 'next/image'
import { BookOpen, Download, ExternalLink, Github, FileText } from 'lucide-react'

export interface BookLink {
  type: 'pdf' | 'amazon' | 'external' | 'github' | 'cabi'
  url: string
  label: string
}

export interface BookCardProps {
  id: string
  title: string
  authors: string[]
  year?: number
  priority?: 'essential' | 'recommended' | 'supplemental'
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
  description?: string
  coverImage?: string
  links: BookLink[]
  tags?: string[]
  isbn?: string
  notes?: string
  /** Grouped pages already state the priority in the group heading. */
  hidePriority?: boolean
}

function linkIcon(type: BookLink['type']) {
  if (type === 'pdf') return <FileText className="h-3.5 w-3.5" strokeWidth={1.75} />
  if (type === 'github') return <Github className="h-3.5 w-3.5" strokeWidth={1.75} />
  return <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
}

/**
 * A resource presented as a wide row rather than a tall card: cover art on the
 * left, everything else in a column beside it. Shared by books, course notes
 * and short courses.
 */
export function BookCard({
  title,
  authors,
  year,
  priority,
  difficulty,
  description,
  coverImage,
  links,
  tags,
  isbn,
  notes,
  hidePriority,
}: BookCardProps) {
  const [primary, ...secondary] = links
  const isExternal = (l: BookLink) => l.type !== 'pdf'

  const meta = [
    year ? String(year) : null,
    !hidePriority && priority === 'essential' ? 'Essential' : null,
    difficulty ?? null,
  ].filter(Boolean)

  const titleLink = primary

  return (
    <article className="grid grid-cols-[76px_minmax(0,1fr)] items-start gap-4 border-t border-line py-6 md:grid-cols-[108px_minmax(0,1fr)] md:gap-5">
      {/* Cover */}
      <div className="relative h-[101px] w-[76px] overflow-hidden rounded-sm border border-line-strong bg-sunken md:h-36 md:w-[108px]">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={`Cover of ${title}`}
            fill
            sizes="108px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-end p-2">
            <BookOpen className="h-5 w-5 text-faint" strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Detail */}
      <div className="flex min-w-0 flex-col gap-[7px]">
        <h3 className="font-display text-[15px] font-semibold leading-snug tracking-tight md:text-base">
          {titleLink ? (
            <a
              href={titleLink.url}
              target={isExternal(titleLink) ? '_blank' : undefined}
              rel={isExternal(titleLink) ? 'noopener noreferrer' : undefined}
              className="transition-colors hover:text-moss"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>

        <p className="text-[13px] text-muted md:text-[13.5px]">{authors.join(', ')}</p>

        {meta.length > 0 && (
          <p className="meta-sm md:text-[11.5px]">{meta.join('  ·  ')}</p>
        )}

        {description && (
          <p className="line-clamp-3 text-[13px] leading-relaxed text-muted md:text-[13.5px]">
            {description}
          </p>
        )}

        {notes && <p className="text-[12.5px] italic text-faint">{notes}</p>}

        {tags && tags.length > 0 && (
          <div className="hidden flex-wrap gap-x-3.5 gap-y-1 pt-0.5 md:flex">
            {tags.map((tag) => (
              <span key={tag} className="meta-sm">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* One filled action for the primary way to get the resource, the rest quiet. */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1.5">
          {primary && (
            <a
              href={primary.url}
              target={isExternal(primary) ? '_blank' : undefined}
              rel={isExternal(primary) ? 'noopener noreferrer' : undefined}
              className="inline-flex h-8 items-center gap-1.5 rounded-md bg-moss px-3 text-[12.5px] font-medium text-moss-on transition-colors hover:bg-moss-hover active:translate-y-px"
            >
              {linkIcon(primary.type)}
              {primary.label}
            </a>
          )}

          {primary?.type === 'pdf' && (
            <a
              href={primary.url}
              download
              className="inline-flex items-center gap-1.5 border-b border-transparent text-[12.5px] text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
              Download
            </a>
          )}

          {secondary.map((link, i) => (
            <a
              key={`${link.url}-${i}`}
              href={link.url}
              target={isExternal(link) ? '_blank' : undefined}
              rel={isExternal(link) ? 'noopener noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 border-b border-transparent text-[12.5px] text-muted transition-colors hover:border-line-strong hover:text-ink"
            >
              {linkIcon(link.type)}
              {link.label}
            </a>
          ))}

          {isbn && (
            <span className="meta-sm hidden md:ml-auto md:inline">ISBN {isbn}</span>
          )}
        </div>
      </div>
    </article>
  )
}
