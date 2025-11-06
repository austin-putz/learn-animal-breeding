import { ShortCoursesSidebar } from '@/components/short-courses/ShortCoursesSidebar'
import { BookCard } from '@/components/books/BookCard'
import { uneAustraliaShortCourses } from '@/lib/data/short-courses'

export default function UNEAustraliaShortCoursesPage() {
  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <ShortCoursesSidebar />

        <main className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">UNE Australia Short Courses</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Armidale Genetics Summer Course - Theory and tools for designing breeding programs
            </p>
          </header>

          {/* All Short Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {uneAustraliaShortCourses.map(course => (
              <BookCard key={course.id} {...course} />
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
            <h2 className="text-xl font-semibold mb-3">About the Armidale Genetics Summer Course</h2>
            <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <p>
                The Armidale Genetics Summer Course is held annually at the University of New England
                in Armidale, NSW, Australia. The course focuses on theory and practical tools for
                designing breeding programs for both animals and plants.
              </p>
              <p>
                <strong>2024 Course:</strong> February 5-9, 2024
              </p>
              <p>
                <strong>Instructors:</strong> International faculty including Gregor Gorjanc (University of Edinburgh),
                Daniel Tolhurst (Roslin Institute), Chris Gaynor (Bayer), and Jon Bancic (Roslin Institute).
              </p>
              <p>
                <strong>Target Audience:</strong> Postgraduate students, postdocs, and professionals with an interest
                in breeding programs and high genetic merit genotypes.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
