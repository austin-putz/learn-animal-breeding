import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { gwasSoftware } from '@/lib/data/software'

export const metadata = {
  title: "GWAS Software",
  description: "Tools for genome-wide association studies and genomic prediction",
}

export default function GWASSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="GWAS Software"
        description="Tools for genome-wide association studies and genomic prediction"
      />

      <div className="pt-10">
        <ResourceGrid>
          {gwasSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
