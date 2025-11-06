import { ShortCoursesSidebar } from '@/components/short-courses/ShortCoursesSidebar'
import { BookCard } from '@/components/books/BookCard'
import { iowaStateShortCourses } from '@/lib/data/short-courses'

export default function IowaStateShortCoursesPage() {
  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <ShortCoursesSidebar />

        <main className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Iowa State University Short Courses</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Intensive short courses covering genomic selection, programming, variance components, and disease resistance
            </p>
          </header>

          {/* All Short Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {iowaStateShortCourses.map(course => (
              <BookCard key={course.id} {...course} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-semibold mb-3">About Iowa State Short Courses</h2>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              These short courses were taught by world-renowned faculty at Iowa State University,
              covering cutting-edge topics in animal breeding and quantitative genetics. Materials
              include comprehensive lecture notes, slides, and practical lab exercises. Many courses
              include multiple PDFs for notes, slides, and labs.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}
