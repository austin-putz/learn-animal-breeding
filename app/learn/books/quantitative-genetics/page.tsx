import { BookCard } from '@/components/books/BookCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGroup } from '@/components/layout/ResourceGrid'
import { LearningPath } from '@/components/layout/LearningPath'
import { Colophon } from '@/components/layout/Colophon'
import { bookCategories } from '@/lib/navigation'
import { quantitativeGeneticsBooks } from '@/lib/data/books'

export const metadata = {
  title: "Quantitative Genetics Books",
  description: "Essential textbooks for quantitative genetics, heritability, and selection theory.",
}

const groups = [
  { priority: "essential", label: "Essential" },
  { priority: "recommended", label: "Recommended" },
  { priority: "supplemental", label: "Supplemental" },
] as const

export default function QuantitativeGeneticsBooksPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Books', href: '/learn/books' }]}
        rail={bookCategories}
        title="Quantitative Genetics Books"
        description="Fundamental principles of quantitative genetics and heredity"
      />

      {groups.map((group) => {
        const books = quantitativeGeneticsBooks.filter((b) => b.priority === group.priority)
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
          { label: "Beginners", text: "Start with Falconer & Mackay for a solid foundation in quantitative genetics principles." },
          { label: "Advanced", text: "Lynch & Walsh (1998) provides rigorous mathematical treatment. Walsh & Lynch (2018) is the updated 2nd edition." },
          { label: "Free Resource", text: "Graham Coop's open source notes are freely available on GitHub and provide excellent modern coverage." },
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
