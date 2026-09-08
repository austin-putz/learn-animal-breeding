import { BookCard } from '@/components/books/BookCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGroup } from '@/components/layout/ResourceGrid'
import { LearningPath } from '@/components/layout/LearningPath'
import { Colophon } from '@/components/layout/Colophon'
import { bookCategories } from '@/lib/navigation'
import { animalBreedingBooks } from '@/lib/data/books'

export const metadata = {
  title: "Animal Breeding Books",
  description: "Essential and recommended textbooks for animal breeding, genetic evaluation, and BLUP methods.",
}

const groups = [
  { priority: "essential", label: "Essential" },
  { priority: "recommended", label: "Recommended" },
  { priority: "supplemental", label: "Supplemental" },
] as const

export default function AnimalBreedingBooksPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Books', href: '/learn/books' }]}
        rail={bookCategories}
        title="Animal Breeding Books"
        description="Essential and recommended books for animal breeding and genetic evaluation"
      />

      {groups.map((group) => {
        const books = animalBreedingBooks.filter((b) => b.priority === group.priority)
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
          { label: "Beginners", text: "Start with the \"Green Book\" (Van Vleck 1993) or WUR Undergraduate textbook for fundamentals." },
          { label: "Intermediate", text: "Move to Schaeffer's Animal Models and Cameron's Selection Indices." },
          { label: "Advanced", text: "Study Henderson (1984) and Mrode (2023) for deep understanding of BLUP and genetic evaluation." },
          { label: "Modern Methods", text: "Legarra's Genomic Prediction book covers contemporary genomic selection approaches." },
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
