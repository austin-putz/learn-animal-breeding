import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Learn Animal Breeding',
  description:
    'Free educational resources for animal breeding and quantitative genetics: books, course notes, short courses and industry software.',
}

const sections = [
  {
    href: '/learn/books',
    name: 'Books',
    description:
      'Essential textbooks and references for animal breeding and quantitative genetics.',
  },
  {
    href: '/learn/course-notes',
    name: 'Course Notes',
    description: 'University course materials and lecture notes from leading programs.',
  },
  {
    href: '/resources/software',
    name: 'Software',
    description: 'Industry-standard tools for genetic evaluation and breeding programs.',
  },
  {
    href: '/learn/short-courses',
    name: 'Short Courses',
    description: 'Intensive workshops and short courses from universities worldwide.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <Image
          src="/images/general/hero-background.png"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.07] dark:opacity-[0.09]"
        />
        <div className="container relative max-w-[1400px] py-20 md:py-28">
          <div className="flex max-w-[46ch] flex-col items-start gap-6">
            <span className="meta-sm text-moss">Free Educational Resources</span>
            <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Learn Animal Breeding
            </h1>
            <p className="max-w-[52ch] text-[17px] leading-relaxed text-muted">
              Comprehensive resources for animal breeding education. Free access to books, courses,
              and industry tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/learn/books"
                className="inline-flex h-11 items-center rounded-md bg-moss px-6 text-[15px] font-medium text-moss-on transition-colors hover:bg-moss-hover active:translate-y-px"
              >
                Browse Books
              </Link>
              <Link
                href="/about"
                className="inline-flex h-11 items-center rounded-md border border-line-strong px-6 text-[15px] font-medium transition-colors hover:border-faint hover:bg-sunken active:translate-y-px"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container max-w-[1400px] py-14">
        <h2 className="group-label pb-2">Explore Resources</h2>
        <div className="flex flex-col">
          {sections.map((section, i) => (
            <Link
              key={section.href}
              href={section.href}
              className={`group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 border-t border-line py-6 transition-[padding] hover:pl-2 ${
                i === sections.length - 1 ? 'border-b' : ''
              }`}
            >
              <div>
                <div className="mb-1 font-display text-lg font-semibold tracking-tight transition-colors group-hover:text-moss md:text-xl">
                  {section.name}
                </div>
                <p className="max-w-[62ch] text-[13.5px] text-muted">{section.description}</p>
              </div>
              <ArrowRight
                className="h-4 w-4 text-faint transition-colors group-hover:text-moss"
                strokeWidth={1.75}
              />
            </Link>
          ))}
        </div>
      </section>

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
