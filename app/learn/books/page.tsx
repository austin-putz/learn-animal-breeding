import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { CategoryTiles } from '@/components/layout/CategoryTiles'
import { bookCategories } from '@/lib/navigation'

export const metadata = {
  title: 'Books',
  description:
    'Curated textbooks, course materials and references for animal breeding, quantitative genetics and related fields.',
}

export default function BooksPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'Books' }]}
        title="Books"
        description="Curated collection of essential textbooks, course materials, and references for animal breeding, quantitative genetics, and related fields. Free PDFs available for public domain works."
      />

      <CategoryTiles items={bookCategories} unit="books" unitSingular="book" cols={3} />

      <section className="mt-14 border-t border-line pt-7">
        <h2 className="group-label mb-5">About These Resources</h2>
        <div className="grid max-w-none gap-8 text-[13.5px] leading-relaxed text-muted md:grid-cols-3">
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">Free PDFs</span>
            <p>
              We provide free access to books that are in the public domain, have open access
              licenses, or are provided by institutions with permission.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">Copyrighted Books</span>
            <p>
              For copyrighted materials, we link to purchase options (Amazon, publishers) and
              university library resources. Always check your university library first.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">Priority Levels</span>
            <p>
              <strong className="font-medium text-ink">Essential</strong> are must-read books for
              serious students and practitioners. <strong className="font-medium text-ink">Recommended</strong>{' '}
              are highly valuable for deepening knowledge.{' '}
              <strong className="font-medium text-ink">Supplemental</strong> covers specific topics.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
