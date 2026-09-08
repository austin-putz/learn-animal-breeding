import { BookCard } from '@/components/books/BookCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { courseNoteCategories } from '@/lib/navigation'
import { statisticsCourseNotes } from '@/lib/data/course-notes'

export const metadata = {
  title: 'Statistics Course Notes',
  description: 'Statistical methods, longitudinal data analysis, and mixed models.',
}

export default function StatisticsCourseNotesPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Course Notes', href: '/learn/course-notes' }]}
        rail={courseNoteCategories}
        title="Statistics Course Notes"
        description="Statistical methods, longitudinal data analysis, and mixed models"
      />

      <div className="pt-10">
        <ResourceGrid>
          {statisticsCourseNotes.map((note) => (
            <BookCard key={note.id} {...note} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
