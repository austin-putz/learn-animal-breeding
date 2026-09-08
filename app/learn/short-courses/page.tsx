import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { CategoryTiles } from '@/components/layout/CategoryTiles'
import { shortCourseCategories } from '@/lib/navigation'

export const metadata = {
  title: 'Short Courses',
  description:
    'Intensive short courses and workshops from leading institutions on genomic selection, programming, statistical methods, and breeding program design.',
}

export default function ShortCoursesPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Short Courses' }]}
        title="Short Courses"
        description="Intensive short courses and workshops from leading institutions. Comprehensive materials on genomic selection, programming, statistical methods, and breeding program design."
      />

      <CategoryTiles items={shortCourseCategories} unit="courses" unitSingular="course" cols={2} />

      <section className="mt-14 border-t border-line pt-7">
        <h2 className="group-label mb-5">About These Short Courses</h2>
        <div className="grid gap-8 text-[13.5px] leading-relaxed text-muted md:grid-cols-3">
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">
              Iowa State University
            </span>
            <p>
              Intensive short courses taught by world-renowned faculty covering genomic selection,
              variance component estimation, programming for animal breeding, and disease
              resistance. Materials include lecture notes, slides, and practical labs.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">UNE Australia</span>
            <p>
              The annual Armidale Genetics Summer Course at the University of New England, focusing
              on breeding program design for both animal and plant species, with international
              instructors from leading research institutions.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">For Educators</span>
            <p>
              These materials can supplement graduate-level courses in animal breeding, quantitative
              genetics, and genomic selection.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
