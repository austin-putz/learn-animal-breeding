import { CourseNotesSidebar } from '@/components/course-notes/CourseNotesSidebar'
import { BookCard } from '@/components/books/BookCard'
import { animalBreedingCourseNotes } from '@/lib/data/course-notes'

export default function AnimalBreedingCourseNotesPage() {
  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <CourseNotesSidebar />

        <main className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Animal Breeding Course Notes</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Course materials from Iowa State University covering breeding programs, linear models, quantitative genetics, and genomic prediction
            </p>
          </header>

          {/* All Course Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {animalBreedingCourseNotes.map(note => (
              <BookCard key={note.id} {...note} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
