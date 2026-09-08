import Image from 'next/image'
import Link from 'next/link'
import { CategoryTiles } from '@/components/layout/CategoryTiles'
import { EssentialShelf } from '@/components/home/EssentialShelf'
import { allBooks } from '@/lib/data/books'
import { allSoftware } from '@/lib/data/software'
import { allCourseNotes } from '@/lib/data/course-notes'
import { allShortCourses } from '@/lib/data/short-courses'
import { allMyBooks } from '@/lib/data/my-work'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Learn Animal Breeding',
  description:
    'Free educational resources for animal breeding and quantitative genetics: books, course notes, short courses and industry software.',
}

const total = (o: Record<string, unknown[]>) =>
  Object.values(o).reduce((n, list) => n + list.length, 0)

const sections = [
  {
    href: '/learn/books',
    name: 'Books',
    count: total(allBooks),
    unit: 'books',
    unitSingular: 'book',
    description:
      'Essential textbooks and references for animal breeding and quantitative genetics.',
  },
  {
    href: '/learn/my-books',
    name: 'My Books',
    count: allMyBooks.length,
    unit: 'books',
    unitSingular: 'book',
    description: 'Open textbooks I am writing on animal breeding and statistics, free to read online.',
  },
  {
    href: '/blog',
    name: 'Blog',
    count: getAllPosts().length,
    unit: 'posts',
    unitSingular: 'post',
    description: 'Writing on animal breeding, data science and research methodology.',
  },
  {
    href: '/learn/course-notes',
    name: 'Course Notes',
    count: total(allCourseNotes),
    unit: 'courses',
    unitSingular: 'course',
    description: 'University course materials and lecture notes from leading programs.',
  },
  {
    href: '/learn/short-courses',
    name: 'Short Courses',
    count: total(allShortCourses),
    unit: 'courses',
    unitSingular: 'course',
    description: 'Intensive workshops and short courses from universities worldwide.',
  },
  {
    href: '/resources/software',
    name: 'Software',
    count: total(allSoftware),
    unit: 'tools',
    unitSingular: 'tool',
    description: 'Industry-standard tools for genetic evaluation and breeding programs.',
  },
]

export default function HomePage() {
  return (
    <>
      {/*
        A masthead that stays dark in both themes. The illustration is dark by
        nature, so inverting it for light mode would wash it out; committing to
        one treatment keeps the helix legible either way.
      */}
      <section className="relative isolate overflow-hidden bg-[#0B120E]">
        <Image
          src="/images/general/hero-genetics.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/*
          Scrim written as an explicit gradient rather than Tailwind stops: a
          `via-*` using an arbitrary colour with an opacity modifier gets
          dropped, which flattens this into one long ramp and crushes the
          artwork. Below `md` the copy spans the full width, so it gets a flat
          wash instead of a horizontal one.
        */}
        <div aria-hidden="true" className="absolute inset-0 bg-[#0B120E]/65 md:hidden" />
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(95deg, #0B120E 0%, rgba(11,18,14,0.95) 28%, rgba(11,18,14,0.72) 45%, rgba(11,18,14,0.30) 68%, rgba(11,18,14,0.12) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0B120E] to-transparent"
        />

        <div className="container relative max-w-[1400px] py-20 md:py-28">
          <div className="flex max-w-[44ch] flex-col items-start gap-6">
            <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7FB093]">
              Free Educational Resources
            </span>
            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-[#F4F3EF] md:text-6xl">
              Learn Animal Breeding
            </h1>
            <p className="max-w-[50ch] text-[17px] leading-relaxed text-[#B7C2BA]">
              Comprehensive resources for animal breeding education. Free access to books, courses,
              and industry tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/learn/books"
                className="inline-flex h-11 items-center rounded-md bg-[#7FB093] px-6 text-[15px] font-medium text-[#0B120E] transition-colors hover:bg-[#96C2A7] active:translate-y-px"
              >
                Browse Books
              </Link>
              <Link
                href="/about"
                className="inline-flex h-11 items-center rounded-md border border-white/25 px-6 text-[15px] font-medium text-[#F4F3EF] transition-colors hover:border-white/50 hover:bg-white/10 active:translate-y-px"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-[1400px] py-14">
        <h2 className="group-label pb-2">Explore Resources</h2>
        <CategoryTiles items={sections} cols={3} />
      </section>

      <EssentialShelf />

      <section className="container max-w-[1400px] pb-6">
        <div className="border-t border-line pt-7">
          <h2 className="group-label mb-5">Our Mission</h2>
          <div className="grid max-w-[100ch] gap-6 md:grid-cols-2">
            <p className="text-[15px] leading-relaxed text-muted">
              With the drastic reduction in animal breeding faculty and no remaining graduate
              programs focused on animal breeding, this platform serves as a centralized hub for
              knowledge preservation and dissemination.
            </p>
            <p className="text-[15px] leading-relaxed text-muted">
              We aim to provide free, accessible education to students and professionals worldwide,
              ensuring that critical knowledge in animal breeding is preserved for future
              generations.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
