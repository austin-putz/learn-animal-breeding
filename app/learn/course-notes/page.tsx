import Link from 'next/link'
import { CourseNotesSidebar } from '@/components/course-notes/CourseNotesSidebar'
import { BookOpen, BarChart3 } from 'lucide-react'

const categories = [
  {
    name: 'Animal Breeding',
    href: '/learn/course-notes/animal-breeding',
    icon: BookOpen,
    description: 'Course materials from Iowa State University covering breeding programs, linear models, quantitative genetics, and genomic prediction',
    noteCount: 4,
    color: 'blue',
  },
  {
    name: 'Statistics',
    href: '/learn/course-notes/statistics',
    icon: BarChart3,
    description: 'Statistical methods, longitudinal data analysis, and mixed models',
    noteCount: 1,
    color: 'orange',
  },
]

const colorClasses = {
  blue: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800',
  orange: 'from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800',
}

export default function CourseNotesPage() {
  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <CourseNotesSidebar />

        <main className="flex-1">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Course Notes</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
              Comprehensive lecture notes and course materials from leading universities.
              Free PDF downloads available for educational use.
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
                          <span>{category.noteCount} course{category.noteCount !== 1 ? 's' : ''}</span>
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
            <h2 className="text-xl font-semibold mb-4">About These Course Notes</h2>
            <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <p>
                <strong>Free Educational Resources:</strong> These course materials are provided for educational purposes.
                All PDFs are freely available for download and personal use.
              </p>
              <p>
                <strong>Academic Sources:</strong> Course notes are from leading universities including Iowa State University
                and North Carolina State University. Original instructors and institutions are credited.
              </p>
              <p>
                <strong>Usage:</strong> These materials are intended for students, researchers, and professionals
                in animal breeding, quantitative genetics, and related fields.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
