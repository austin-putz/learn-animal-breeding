import { BookCard } from '@/components/books/BookCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { Colophon } from '@/components/layout/Colophon'
import { shortCourseCategories } from '@/lib/navigation'
import { iowaStateShortCourses } from '@/lib/data/short-courses'

export const metadata = {
  title: 'Iowa State University Short Courses',
  description:
    'Intensive short courses covering genomic selection, programming, variance components, and disease resistance.',
}

export default function IowaStateShortCoursesPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Short Courses', href: '/learn/short-courses' }]}
        rail={shortCourseCategories}
        title="Iowa State University Short Courses"
        description="Intensive short courses covering genomic selection, programming, variance components, and disease resistance"
      />

      <div className="pt-10">
        <ResourceGrid>
          {iowaStateShortCourses.map((course) => (
            <BookCard key={course.id} {...course} />
          ))}
        </ResourceGrid>
      </div>

      <Colophon>
        These short courses were taught by world-renowned faculty at Iowa State University, covering
        cutting-edge topics in animal breeding and quantitative genetics. Materials include
        comprehensive lecture notes, slides, and practical lab exercises. Many courses include
        multiple PDFs for notes, slides, and labs.
      </Colophon>
    </PageShell>
  )
}
