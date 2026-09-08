import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { allBooks } from '@/lib/data/books'
import type { BookCardProps } from '@/components/books/BookCard'

/**
 * One essential book per subject, so the shelf spans the field rather than
 * showing four variations on linear models.
 */
const picks: { category: keyof typeof allBooks; id: string }[] = [
  { category: 'animal-breeding', id: 'mrode-2023' },
  { category: 'quantitative-genetics', id: 'falconer-mackay-1996' },
  { category: 'bayesian', id: 'sorensen-gianola-2002' },
  { category: 'mathematics', id: 'searle-matrix-algebra-2017' },
]

function primaryHref(book: BookCardProps) {
  const pdf = book.links.find((l) => l.type === 'pdf')
  return pdf?.url ?? book.links[0]?.url
}

export function EssentialShelf() {
  const books = picks
    .map(({ category, id }) => allBooks[category].find((b) => b.id === id))
    .filter((b): b is BookCardProps => Boolean(b))

  const total = Object.values(allBooks).reduce((n, list) => n + list.length, 0)

  return (
    <section className="container max-w-[1400px] pb-14">
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-t border-line pt-7">
        <h2 className="group-label">Essential Reading</h2>
        <Link
          href="/learn/books"
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-moss transition-colors hover:text-moss-hover"
        >
          All {total} books
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
        </Link>
      </div>

      <p className="mt-3 max-w-[62ch] text-[13.5px] leading-relaxed text-muted">
        Starting from scratch? These four cover the ground: breeding theory, the genetics underneath
        it, Bayesian methods, and the matrix algebra it all runs on.
      </p>

      <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
        {books.map((book) => (
          <li key={book.id}>
            <a
              href={primaryHref(book)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-line-strong bg-sunken shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg">
                {book.coverImage && (
                  <Image
                    src={book.coverImage}
                    alt={`Cover of ${book.title}`}
                    fill
                    sizes="(max-width: 640px) 45vw, 22vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div>
                <h3 className="font-display text-[14px] font-semibold leading-snug tracking-tight transition-colors group-hover:text-moss">
                  {book.title}
                </h3>
                <p className="mt-1 text-[12.5px] text-muted">
                  {book.authors.map((a) => a.split(' ').pop()).join(', ')}
                  {book.year ? ` · ${book.year}` : ''}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
