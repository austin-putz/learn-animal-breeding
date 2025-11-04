import { BooksSidebar } from '@/components/books/BooksSidebar'
import { BookCard } from '@/components/books/BookCard'
import { quantitativeGeneticsBooks } from '@/lib/data/books'

export const metadata = {
  title: 'Quantitative Genetics Books',
  description: 'Essential textbooks for quantitative genetics, heritability, and selection theory.',
}

export default function QuantitativeGeneticsBooksPage() {
  const essentialBooks = quantitativeGeneticsBooks.filter(b => b.priority === 'essential')
  const recommendedBooks = quantitativeGeneticsBooks.filter(b => b.priority === 'recommended')

  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <BooksSidebar />

        <main className="flex-1">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Quantitative Genetics Books</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Fundamental principles of quantitative genetics and heredity
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

          {/* Additional Information */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
              💡 Learning Path
            </h3>
            <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <p><strong>Beginners:</strong> Start with Falconer & Mackay for a solid foundation in quantitative genetics principles.</p>
              <p><strong>Advanced:</strong> Lynch & Walsh (1998) provides rigorous mathematical treatment. Walsh & Lynch (2018) is the updated 2nd edition.</p>
              <p><strong>Free Resource:</strong> Graham Coop's open source notes are freely available on GitHub and provide excellent modern coverage.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
