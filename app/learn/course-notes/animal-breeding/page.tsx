import { BookCard } from '@/components/books/BookCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { courseNoteCategories } from '@/lib/navigation'
import { animalBreedingCourseNotes } from '@/lib/data/course-notes'

export const metadata = {
  title: 'Animal Breeding Course Notes',
  description:
    'Course materials from Iowa State University covering breeding programs, linear models, quantitative genetics, and genomic prediction.',
}

export default function AnimalBreedingCourseNotesPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Course Notes', href: '/learn/course-notes' }]}
        rail={courseNoteCategories}
        title="Animal Breeding Course Notes"
        description="Course materials from Iowa State University covering breeding programs, linear models, quantitative genetics, and genomic prediction"
      />

      <div className="pt-10">
        <ResourceGrid>
          {animalBreedingCourseNotes.map((note) => (
            <BookCard key={note.id} {...note} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
