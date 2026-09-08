import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { breedCompositionSoftware } from '@/lib/data/software'

export const metadata = {
  title: "Breed Composition Software",
  description: "Tools for estimating breed composition percentages",
}

export default function BreedCompositionSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="Breed Composition Software"
        description="Tools for estimating breed composition percentages"
      />

      <div className="pt-10">
        <ResourceGrid>
          {breedCompositionSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
