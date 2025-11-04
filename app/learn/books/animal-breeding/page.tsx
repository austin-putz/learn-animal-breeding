import { BooksSidebar } from '@/components/books/BooksSidebar'
import { BookCard } from '@/components/books/BookCard'
import { animalBreedingBooks } from '@/lib/data/books'

export const metadata = {
  title: 'Animal Breeding Books',
  description: 'Essential and recommended textbooks for animal breeding, genetic evaluation, and BLUP methods.',
}

export default function AnimalBreedingBooksPage() {
  const essentialBooks = animalBreedingBooks.filter(b => b.priority === 'essential')
  const recommendedBooks = animalBreedingBooks.filter(b => b.priority === 'recommended')
  const supplementalBooks = animalBreedingBooks.filter(b => b.priority === 'supplemental')

  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <BooksSidebar />

        <main className="flex-1">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Animal Breeding Books</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Essential and recommended books for animal breeding and genetic evaluation
            </p>
          </header>

          {/* Essential Books */}
          {essentialBooks.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-semibold">⭐ Essential Reading</h2>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  ({essentialBooks.length} books)
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {essentialBooks.map(book => (
                  <BookCard key={book.id} {...book} />
                ))}
              </div>
            </section>
          )}

          {/* Recommended Books */}
          {recommendedBooks.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-semibold">👍 Recommended</h2>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  ({recommendedBooks.length} books)
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recommendedBooks.map(book => (
                  <BookCard key={book.id} {...book} />
                ))}
              </div>
            </section>
          )}

          {/* Supplemental Books */}
          {supplementalBooks.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-semibold">📚 Supplemental Resources</h2>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  ({supplementalBooks.length} books)
                </span>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {supplementalBooks.map(book => (
                  <BookCard key={book.id} {...book} />
                ))}
              </div>
            </section>
          )}

          {/* Additional Information */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
              💡 Learning Path
            </h3>
            <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <p><strong>Beginners:</strong> Start with the "Green Book" (Van Vleck 1993) or WUR Undergraduate textbook for fundamentals.</p>
              <p><strong>Intermediate:</strong> Move to Schaeffer's Animal Models and Cameron's Selection Indices.</p>
              <p><strong>Advanced:</strong> Study Henderson (1984) and Mrode (2023) for deep understanding of BLUP and genetic evaluation.</p>
              <p><strong>Modern Methods:</strong> Legarra's Genomic Prediction book covers contemporary genomic selection approaches.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
