import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { BookOpen, Download, ExternalLink, Github } from 'lucide-react'

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
}

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
}: BookCardProps) {
  const pdfLink = links.find(l => l.type === 'pdf')
  const amazonLink = links.find(l => l.type === 'amazon')
  const externalLinks = links.filter(l => ['external', 'github', 'cabi'].includes(l.type))

  return (
    <div className="group relative flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-900">
      {/* Book Cover */}
      <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 relative overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <BookOpen className="w-16 h-16 text-primary-400" />
          </div>
        )}

        {/* Priority Badge - Top Left */}
        {priority && (
          <div className="absolute top-2 left-2">
            {priority === 'essential' && (
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-amber-600 text-white shadow-md">
                ⭐ Essential
              </span>
            )}
            {priority === 'recommended' && (
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-600 text-white shadow-md">
                👍 Recommended
              </span>
            )}
            {priority === 'supplemental' && (
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-neutral-700 text-white shadow-md">
                📚 Supplemental
              </span>
            )}
          </div>
        )}

        {/* Difficulty Badge - Top Right */}
        {difficulty && (
          <div className="absolute top-2 right-2">
            {difficulty === 'beginner' && (
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-700 text-white shadow-md">
                Beginner
              </span>
            )}
            {difficulty === 'intermediate' && (
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-orange-700 text-white shadow-md">
                Intermediate
              </span>
            )}
            {difficulty === 'advanced' && (
              <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-purple-700 text-white shadow-md">
                Advanced
              </span>
            )}
          </div>
        )}
      </div>

      {/* Book Info */}
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="font-semibold text-base mb-1 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
          {authors.join(', ')}
          {year && ` (${year})`}
        </p>

        {description && (
          <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3 line-clamp-3 flex-1">
            {description}
          </p>
        )}

        {notes && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 italic mb-3">
            {notes}
          </p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* ISBN */}
        {isbn && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-3">
            ISBN: {isbn}
          </p>
        )}

        {/* Action Buttons */}
        <div className="space-y-2 mt-auto">
          {/* PDF Link - Primary */}
          {pdfLink && (
            <div className="flex gap-2">
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                href={pdfLink.url}
                target="_blank"
              >
                <BookOpen className="w-4 h-4 mr-1" />
                View PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                href={pdfLink.url}
                download
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* Amazon Link */}
          {amazonLink && (
            <Button
              variant={pdfLink ? 'outline' : 'primary'}
              size="sm"
              className="w-full"
              href={amazonLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              {amazonLink.label || 'View on Amazon'}
            </Button>
          )}

          {/* External Links */}
          {externalLinks.map((link, idx) => (
            <Button
              key={idx}
              variant="ghost"
              size="sm"
              className="w-full"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.type === 'github' ? (
                <Github className="w-4 h-4 mr-1" />
              ) : (
                <ExternalLink className="w-4 h-4 mr-1" />
              )}
              {link.label}
            </Button>
          ))}
        </div>

        {/* University Library Note */}
        {!pdfLink && (amazonLink || externalLinks.length > 0) && (
          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3 italic">
            This book may be available from your University library website
          </p>
        )}
      </div>
    </div>
  )
}
