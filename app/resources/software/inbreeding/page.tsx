import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { inbreedingSoftware } from '@/lib/data/software'

export const metadata = {
  title: "Inbreeding Management Software",
  description: "Tools for managing inbreeding and optimizing mate selection",
}

export default function InbreedingSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="Inbreeding Management Software"
        description="Tools for managing inbreeding and optimizing mate selection"
      />

      <div className="pt-10">
        <ResourceGrid>
          {inbreedingSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
