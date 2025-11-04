import Link from 'next/link'
import { BooksSidebar } from '@/components/books/BooksSidebar'
import { BookOpen, Dna, BarChart3, Calculator, Sigma } from 'lucide-react'

const categories = [
  {
    name: 'Animal Breeding',
    href: '/learn/books/animal-breeding',
    icon: BookOpen,
    description: 'Core textbooks on animal breeding, BLUP, and genetic evaluation',
    bookCount: 11,
    color: 'blue',
  },
  {
    name: 'Quantitative Genetics',
    href: '/learn/books/quantitative-genetics',
    icon: Dna,
    description: 'Fundamental principles of quantitative genetics and heredity',
    bookCount: 4,
    color: 'purple',
  },
  {
    name: 'Bayesian Statistics',
    href: '/learn/books/bayesian',
    icon: BarChart3,
    description: 'Bayesian methods and inference for genetic analysis',
    bookCount: 0,
    color: 'green',
  },
  {
    name: 'Statistics',
    href: '/learn/books/statistics',
    icon: Calculator,
    description: 'Statistical methods, mixed models, and experimental design',
    bookCount: 0,
    color: 'orange',
  },
  {
    name: 'Mathematics',
    href: '/learn/books/mathematics',
    icon: Sigma,
    description: 'Linear algebra, matrix theory, and calculus foundations',
    bookCount: 0,
    color: 'red',
  },
]

const colorClasses = {
  blue: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800',
  purple: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800',
  green: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800',
  orange: 'from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800',
  red: 'from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800',
}

export default function BooksPage() {
  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <BooksSidebar />

        <main className="flex-1">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Books & Resources</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
              Curated collection of essential textbooks, course materials, and references for animal breeding,
              quantitative genetics, and related fields. Free PDFs available for public domain works.
            </p>
          </header>

          {/* Category Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              const colorClass = colorClasses[category.color as keyof typeof colorClasses]

              return (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group"
                >
                  <div
                    className={`
                      p-6 rounded-lg border-2 transition-all duration-300
                      bg-gradient-to-br ${colorClass}
                      hover:shadow-lg hover:scale-[1.02]
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-sm">
                        <Icon className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                          <span>{category.bookCount} books</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Info Section */}
          <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-semibold mb-4">About These Resources</h2>
            <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <p>
                <strong>Free PDFs:</strong> We provide free access to books that are in the public domain,
                have open access licenses, or are provided by institutions with permission.
              </p>
              <p>
                <strong>Copyrighted Books:</strong> For copyrighted materials, we link to purchase options
                (Amazon, publishers) and university library resources. Always check your university library first!
              </p>
              <p>
                <strong>Priority Levels:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>Essential:</strong> Must-read books for serious students and practitioners</li>
                <li><strong>Recommended:</strong> Highly valuable resources for deepening knowledge</li>
                <li><strong>Supplemental:</strong> Additional resources for specific topics</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
