import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { selectionIndexSoftware } from '@/lib/data/software'

export const metadata = {
  title: "Selection Index Software",
  description: "Tools for designing breeding schemes and calculating selection accuracy",
}

export default function SelectionIndexSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="Selection Index Software"
        description="Tools for designing breeding schemes and calculating selection accuracy"
      />

      <div className="pt-10">
        <ResourceGrid>
          {selectionIndexSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
