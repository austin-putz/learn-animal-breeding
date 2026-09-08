import { BookCard } from '@/components/books/BookCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGroup } from '@/components/layout/ResourceGrid'
import { LearningPath } from '@/components/layout/LearningPath'
import { Colophon } from '@/components/layout/Colophon'
import { bookCategories } from '@/lib/navigation'
import { statisticsBooks } from '@/lib/data/books'

export const metadata = {
  title: "Statistics Books",
  description: "Statistical methods, linear models, and experimental design resources for animal breeding.",
}

const groups = [
  { priority: "essential", label: "Essential" },
  { priority: "recommended", label: "Recommended" },
  { priority: "supplemental", label: "Supplemental" },
] as const

export default function StatisticsBooksPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Books', href: '/learn/books' }]}
        rail={bookCategories}
        title="Statistics Books"
        description="Statistical methods, mixed models, and experimental design"
      />

      {groups.map((group) => {
        const books = statisticsBooks.filter((b) => b.priority === group.priority)
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
          { label: "Essential Foundation", text: "Searle's \"Linear Models\" is the definitive reference for understanding the mathematical theory underlying mixed models and BLUP." },
          { label: "Prerequisites", text: "Strong background in matrix algebra and mathematical statistics recommended." },
          { label: "Connection to Animal Breeding", text: "Linear models form the statistical foundation for genetic evaluation and breeding value prediction." },
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
