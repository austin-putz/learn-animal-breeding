import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { LinkSection } from '@/components/layout/LinkRow'
import { Colophon } from '@/components/layout/Colophon'
import { myWorkCategories } from '@/lib/navigation'
import { animalBreedingBooks, statisticsBooks } from '@/lib/data/my-work'

export const metadata = {
  title: 'My Books',
  description:
    'Open textbooks on animal breeding and statistics by Austin Putz, written in Quarto and free to read online.',
}

export default function MyBooksPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'My Books' }]}
        rail={myWorkCategories}
        title="My Books"
        description="Open textbooks on animal breeding and statistics, written in Quarto and free to read online. Some are finished, some are still being written."
      />

      <LinkSection
        label="Animal Breeding"
        description="Breeding theory and practice, from first principles through to program design"
        items={animalBreedingBooks}
      />

      <LinkSection
        label="Statistics"
        description="The statistical foundation underneath genetic evaluation"
        items={statisticsBooks}
      />

      <Colophon>
        These books are written in Quarto and hosted on GitHub Pages, so they update as I write.
        Anything marked <strong className="font-medium text-ink">Coming soon</strong> is planned but
        not yet published. Free for educational use.
      </Colophon>
    </PageShell>
  )
}
