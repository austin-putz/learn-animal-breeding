import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { LinkTileSection } from '@/components/layout/LinkTiles'
import { Colophon } from '@/components/layout/Colophon'
import { myWorkCategories } from '@/lib/navigation'
import { rpubNotes } from '@/lib/data/my-work'

export const metadata = {
  title: 'My Notes',
  description:
    'Interactive R tutorials on relationship matrices, BLUP and genomic prediction by Austin Putz.',
}

export default function MyNotesPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'My Notes' }]}
        rail={myWorkCategories}
        title="My Notes"
        description="Interactive R tutorials and personal notes on animal breeding and statistics"
      />

      <LinkTileSection
        label="RPub Files"
        description="Interactive R tutorials created for classes at Iowa State University"
        items={rpubNotes}
        cols={3}
      />

      <Colophon>
        These notes and tutorials represent my personal study materials, lecture notes, and
        tutorials developed over years of teaching and research in animal breeding and quantitative
        genetics. All materials are freely available for educational purposes. Longer, book-length
        material lives under <strong className="font-medium text-ink">My Books</strong>.
      </Colophon>
    </PageShell>
  )
}
