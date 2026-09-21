import Link from 'next/link'
import Image from 'next/image'

const columns = [
  {
    heading: 'Learn',
    links: [
      { href: '/learn/books', label: 'Books' },
      { href: '/learn/course-notes', label: 'Course Notes' },
      { href: '/learn/my-books', label: 'My Books' },
      { href: '/learn/my-notes', label: 'My Notes' },
      { href: '/learn/short-courses', label: 'Short Courses' },
      { href: '/learn/youtube', label: 'YouTube Resources' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { href: '/resources/software', label: 'Software Tools' },
      { href: '/resources/skills', label: 'Technical Skills' },
      { href: '/resources/consulting', label: 'Consulting' },
      { href: '/resources/journals', label: 'Journals' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { href: '/about', label: 'About' },
      { href: '/blog', label: 'Blog' },
      { href: '/tidybreed', label: 'tidybreed' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line">
      <div className="container max-w-[1400px] py-12">
        <div className="grid gap-10 md:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/general/learn-animal-breeding-logo.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-sm"
              />
              <span className="font-display text-[15px] font-semibold tracking-tight">
                Learn Animal Breeding
              </span>
            </div>
            <p className="max-w-[44ch] text-[13px] leading-relaxed text-muted">
              Comprehensive educational resources for animal breeding, quantitative genetics, and
              breeding program management. Preserving knowledge for the next generation.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <h2 className="meta-sm">{column.heading}</h2>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="meta-sm">
            &copy; {new Date().getFullYear()} Learn Animal Breeding. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
