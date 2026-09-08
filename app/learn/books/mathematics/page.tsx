import { BookCard } from '@/components/books/BookCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGroup } from '@/components/layout/ResourceGrid'
import { LearningPath } from '@/components/layout/LearningPath'
import { Colophon } from '@/components/layout/Colophon'
import { bookCategories } from '@/lib/navigation'
import { mathematicsBooks } from '@/lib/data/books'

export const metadata = {
  title: "Mathematics Books",
  description: "Linear algebra, matrix theory, and calculus foundations for animal breeding.",
}

const groups = [
  { priority: "essential", label: "Essential" },
  { priority: "recommended", label: "Recommended" },
  { priority: "supplemental", label: "Supplemental" },
] as const

export default function MathematicsBooksPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Books', href: '/learn/books' }]}
        rail={bookCategories}
        title="Mathematics Books"
        description="Linear algebra, matrix theory, and calculus foundations"
      />

      {groups.map((group) => {
        const books = mathematicsBooks.filter((b) => b.priority === group.priority)
        if (books.length === 0) return null

        return (
          <ResourceGroup key={group.priority} label={group.label} count={books.length}>
            {books.map((book) => (
              <BookCard key={book.id} {...book} hidePriority />
            ))}
          </ResourceGroup>
        )
      })}

      <LearningPath
        steps={[
          { label: "Essential Foundation", text: "Searle & Khuri's \"Matrix Algebra Useful for Statistics\" provides the mathematical foundation needed for understanding linear models and mixed model equations." },
          { label: "Key Topics", text: "Matrix operations, eigenvalues and eigenvectors, generalized inverses, and matrix decompositions are fundamental to animal breeding methods." },
          { label: "Application", text: "Matrix algebra is essential for understanding Henderson's mixed model equations, relationship matrices (A, G, H), and variance component estimation." },
        ]}
      />

      <Colophon>
        Free PDFs are posted for books in the public domain, under an open access licence, or
        shared with permission. For copyrighted books this page links to the publisher or to
        Amazon instead. Check your university library first.
      </Colophon>
    </PageShell>
  )
}
