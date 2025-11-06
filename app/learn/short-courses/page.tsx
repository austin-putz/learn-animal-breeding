import Link from 'next/link'
import { ShortCoursesSidebar } from '@/components/short-courses/ShortCoursesSidebar'
import { GraduationCap, Globe } from 'lucide-react'

const categories = [
  {
    name: 'Iowa State University',
    href: '/learn/short-courses/iowa-state',
    icon: GraduationCap,
    description: 'Comprehensive short courses on genomic selection, programming, variance components, and disease resistance',
    courseCount: 9,
    color: 'blue',
  },
  {
    name: 'UNE Australia',
    href: '/learn/short-courses/une-australia',
    icon: Globe,
    description: 'Armidale Genetics Summer Course on breeding program design for animals and plants',
    courseCount: 1,
    color: 'green',
  },
]

const colorClasses = {
  blue: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800',
  green: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800',
}

export default function ShortCoursesPage() {
  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <ShortCoursesSidebar />

        <main className="flex-1">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Short Courses</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl">
              Intensive short courses and workshops from leading institutions.
              Comprehensive materials on genomic selection, programming, statistical methods, and breeding program design.
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
                          <span>{category.courseCount} course{category.courseCount !== 1 ? 's' : ''}</span>
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
            <h2 className="text-xl font-semibold mb-4">About These Short Courses</h2>
            <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <p>
                <strong>Iowa State University:</strong> Collection of intensive short courses taught by world-renowned
                faculty covering genomic selection, variance component estimation, programming for animal breeding,
                and disease resistance. Materials include lecture notes, slides, and practical labs.
              </p>
              <p>
                <strong>UNE Australia:</strong> Annual Armidale Genetics Summer Course held at the University of New England
                focusing on breeding program design for both animal and plant species. Features international instructors
                from leading research institutions.
              </p>
              <p>
                <strong>For Educators:</strong> These materials can supplement graduate-level courses in animal breeding,
                quantitative genetics, and genomic selection.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
