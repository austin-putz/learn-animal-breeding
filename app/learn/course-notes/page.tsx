import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { CategoryList } from '@/components/layout/CategoryList'
import { courseNoteCategories } from '@/lib/navigation'

export const metadata = {
  title: 'Course Notes',
  description:
    'Lecture notes and course materials from leading universities, free to download for educational use.',
}

export default function CourseNotesPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Course Notes' }]}
        title="Course Notes"
        description="Comprehensive lecture notes and course materials from leading universities. Free PDF downloads available for educational use."
      />

      <CategoryList items={courseNoteCategories} unit="courses" unitSingular="course" />

      <section className="mt-14 border-t border-line pt-7">
        <h2 className="group-label mb-5">About These Course Notes</h2>
        <div className="grid gap-8 text-[13.5px] leading-relaxed text-muted md:grid-cols-3">
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">
              Free Educational Resources
            </span>
            <p>
              These course materials are provided for educational purposes. All PDFs are freely
              available for download and personal use.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">Academic Sources</span>
            <p>
              Course notes are from leading universities including Iowa State University and North
              Carolina State University. Original instructors and institutions are credited.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">Usage</span>
            <p>
              These materials are intended for students, researchers, and professionals in animal
              breeding, quantitative genetics, and related fields.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
