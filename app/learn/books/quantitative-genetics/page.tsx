import { BooksSidebar } from '@/components/books/BooksSidebar'

export const metadata = {
  title: 'Quantitative Genetics Books',
  description: 'Books and resources for quantitative genetics and heredity.',
}

export default function QuantitativeGeneticsBooksPage() {
  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <BooksSidebar />

        <main className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Quantitative Genetics Books</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Fundamental principles of quantitative genetics and heredity
            </p>
          </header>

          <div className="p-12 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Books coming soon! Check back later for quantitative genetics resources.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
