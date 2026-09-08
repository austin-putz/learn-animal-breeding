import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { simulationSoftware } from '@/lib/data/software'

export const metadata = {
  title: "Simulation Software",
  description: "Tools for simulating breeding programs and genetic processes",
}

export default function SimulationSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="Simulation Software"
        description="Tools for simulating breeding programs and genetic processes"
      />

      <div className="pt-10">
        <ResourceGrid>
          {simulationSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
