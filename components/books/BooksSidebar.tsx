'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, Dna, BarChart3, Calculator, Sigma } from 'lucide-react'

const categories = [
  {
    name: 'Animal Breeding',
    href: '/learn/books/animal-breeding',
    icon: BookOpen,
    description: 'Core animal breeding textbooks',
  },
  {
    name: 'Quantitative Genetics',
    href: '/learn/books/quantitative-genetics',
    icon: Dna,
    description: 'Genetics and heredity',
  },
  {
    name: 'Bayesian Statistics',
    href: '/learn/books/bayesian',
    icon: BarChart3,
    description: 'Bayesian methods and inference',
  },
  {
    name: 'Statistics',
    href: '/learn/books/statistics',
    icon: Calculator,
    description: 'Statistical methods and theory',
  },
  {
    name: 'Mathematics',
    href: '/learn/books/mathematics',
    icon: Sigma,
    description: 'Linear algebra and calculus',
  },
]

export function BooksSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-1">
        <h3 className="text-lg font-semibold mb-4 px-3">Book Categories</h3>
        <nav className="space-y-1">
          {categories.map((category) => {
            const isActive = pathname === category.href
            const Icon = category.icon

            return (
              <Link
                key={category.href}
                href={category.href}
                className={`
                  flex items-start gap-3 px-3 py-2 rounded-lg transition-colors
                  ${
                    isActive
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }
                `}
              >
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium">{category.name}</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    {category.description}
                  </div>
                </div>
              </Link>
            )
          })}
        </nav>

        {/* Quick Info Box */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-sm mb-2 text-blue-900 dark:text-blue-100">
            📚 About These Books
          </h4>
          <p className="text-xs text-blue-800 dark:text-blue-200">
            Free PDFs are available for books in the public domain or with open access.
            For copyrighted books, check your university library or purchase options.
          </p>
        </div>
      </div>
    </aside>
  )
}
