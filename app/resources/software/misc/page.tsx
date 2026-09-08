import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { miscSoftware } from '@/lib/data/software'

export const metadata = {
  title: "Miscellaneous Software",
  description: "Other useful tools for statistical genetics and breeding analysis",
}

export default function MiscSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="Miscellaneous Software"
        description="Other useful tools for statistical genetics and breeding analysis"
      />

      <div className="pt-10">
        <ResourceGrid>
          {miscSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
