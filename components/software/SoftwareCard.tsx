import { ExternalLink, Github, FileText, Download, BookOpen } from 'lucide-react'
import { SoftwareTool } from '@/lib/data/software'

const statusLabel: Record<string, string> = {
  paid: 'Commercial',
  development: 'In development',
  deprecated: 'Deprecated',
}

function linkIcon(type: string) {
  switch (type) {
    case 'github':
      return <Github className="h-3.5 w-3.5" strokeWidth={1.75} />
    case 'download':
      return <Download className="h-3.5 w-3.5" strokeWidth={1.75} />
    case 'docs':
    case 'manual':
      return <BookOpen className="h-3.5 w-3.5" strokeWidth={1.75} />
    case 'paper':
      return <FileText className="h-3.5 w-3.5" strokeWidth={1.75} />
    default:
      return <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
  }
}

/**
 * A tool as a wide row. `active` is the common case and carries no badge; only
 * the exceptions (commercial, in development, deprecated) are called out.
 */
export function SoftwareCard({
  name,
  developer,
  description,
  status,
  links,
  tags,
}: SoftwareTool) {
  const [primary, ...secondary] = links
  const label = status && status !== 'active' ? statusLabel[status] : null

  return (
    <article className="flex flex-col gap-2 border-t border-line py-6">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-base font-semibold tracking-tight">
          {primary ? (
            <a
              href={primary.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-moss"
            >
              {name}
            </a>
          ) : (
            name
          )}
        </h3>
        {label && <span className="meta-sm whitespace-nowrap">{label}</span>}
      </div>

      {developer && <p className="text-[13px] text-muted">{developer}</p>}

      <p className="text-[13.5px] leading-relaxed text-muted">{description}</p>

      {tags && tags.length > 0 && (
        <div className="hidden flex-wrap gap-x-3.5 gap-y-1 pt-0.5 md:flex">
          {tags.map((tag) => (
            <span key={tag} className="meta-sm">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1.5">
        {primary && (
          <a
            href={primary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-8 items-center gap-1.5 rounded-md bg-moss px-3 text-[12.5px] font-medium text-moss-on transition-colors hover:bg-moss-hover active:translate-y-px"
          >
            {linkIcon(primary.type)}
            {primary.label}
          </a>
        )}
        {secondary.map((link, i) => (
          <a
            key={`${link.url}-${i}`}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-transparent text-[12.5px] text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            {linkIcon(link.type)}
            {link.label}
          </a>
        ))}
      </div>

      {status === 'deprecated' && (
        <p className="text-[12.5px] italic text-faint">This software is no longer maintained</p>
      )}
    </article>
  )
}
