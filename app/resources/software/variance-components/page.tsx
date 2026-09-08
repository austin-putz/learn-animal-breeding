import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { varianceComponentsSoftware } from '@/lib/data/software'

export const metadata = {
  title: "Variance Components Software",
  description: "Software for estimating variance components in mixed models and genetic evaluations",
}

export default function VarianceComponentsSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="Variance Components Software"
        description="Software for estimating variance components in mixed models and genetic evaluations"
      />

      <div className="pt-10">
        <ResourceGrid>
          {varianceComponentsSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
