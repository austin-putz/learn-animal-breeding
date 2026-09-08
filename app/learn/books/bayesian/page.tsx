import { BookCard } from '@/components/books/BookCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGroup } from '@/components/layout/ResourceGrid'
import { LearningPath } from '@/components/layout/LearningPath'
import { Colophon } from '@/components/layout/Colophon'
import { bookCategories } from '@/lib/navigation'
import { bayesianBooks } from '@/lib/data/books'

export const metadata = {
  title: "Bayesian Statistics Books",
  description: "Books on Bayesian methods, MCMC, and statistical inference for animal breeding.",
}

const groups = [
  { priority: "essential", label: "Essential" },
  { priority: "recommended", label: "Recommended" },
  { priority: "supplemental", label: "Supplemental" },
] as const

export default function BayesianBooksPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Books', href: '/learn/books' }]}
        rail={bookCategories}
        title="Bayesian Statistics Books"
        description="Bayesian methods and inference for genetic analysis"
      />

      {groups.map((group) => {
        const books = bayesianBooks.filter((b) => b.priority === group.priority)
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
          { label: "Essential Foundation", text: "Sorensen & Gianola (2002) provides comprehensive coverage of Bayesian methods and MCMC techniques specifically for quantitative genetics." },
          { label: "Practical Application", text: "Blasco (2017) offers a more accessible introduction with practical examples designed specifically for animal scientists." },
          { label: "Prerequisites", text: "Basic understanding of statistics and linear models is recommended before diving into Bayesian methods." },
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
