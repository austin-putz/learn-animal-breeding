import { BookCard } from '@/components/books/BookCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { shortCourseCategories } from '@/lib/navigation'
import { uneAustraliaShortCourses } from '@/lib/data/short-courses'

export const metadata = {
  title: 'UNE Australia Short Courses',
  description:
    'Armidale Genetics Summer Course: theory and tools for designing breeding programs.',
}

const facts = [
  { label: '2024 Course', text: 'February 5-9, 2024.' },
  {
    label: 'Instructors',
    text: 'International faculty including Gregor Gorjanc (University of Edinburgh), Daniel Tolhurst (Roslin Institute), Chris Gaynor (Bayer), and Jon Bancic (Roslin Institute).',
  },
  {
    label: 'Target Audience',
    text: 'Postgraduate students, postdocs, and professionals with an interest in breeding programs and high genetic merit genotypes.',
  },
]

export default function UNEAustraliaShortCoursesPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Short Courses', href: '/learn/short-courses' }]}
        rail={shortCourseCategories}
        title="UNE Australia Short Courses"
        description="Armidale Genetics Summer Course - Theory and tools for designing breeding programs"
      />

      <div className="pt-10">
        <ResourceGrid>
          {uneAustraliaShortCourses.map((course) => (
            <BookCard key={course.id} {...course} />
          ))}
        </ResourceGrid>
      </div>

      <section className="mt-14 border-t border-line pt-7">
        <h2 className="group-label mb-5">About the Armidale Genetics Summer Course</h2>
        <p className="mb-7 max-w-[65ch] text-[13.5px] leading-relaxed text-muted">
          The Armidale Genetics Summer Course is held annually at the University of New England in
          Armidale, NSW, Australia. The course focuses on theory and practical tools for designing
          breeding programs for both animals and plants.
        </p>
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
              <span className="font-display text-sm font-semibold">{fact.label}</span>
              <p className="text-[13px] leading-relaxed text-muted">{fact.text}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
