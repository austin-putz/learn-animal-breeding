'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, BarChart3 } from 'lucide-react'

const categories = [
  {
    name: 'Animal Breeding',
    href: '/learn/course-notes/animal-breeding',
    icon: BookOpen,
    description: 'Course materials from Iowa State University',
  },
  {
    name: 'Statistics',
    href: '/learn/course-notes/statistics',
    icon: BarChart3,
    description: 'Statistical methods and analysis',
  },
]

export function CourseNotesSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24">
        <h3 className="text-lg font-semibold mb-4">Course Categories</h3>
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = pathname === category.href

            return (
              <Link
                key={category.href}
                href={category.href}
                className={`
                  flex items-start gap-3 px-3 py-2 rounded-lg transition-colors
                  ${
                    isActive
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }
                `}
              >
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{category.name}</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {category.description}
                  </div>
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
