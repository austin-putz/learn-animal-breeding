import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { genomicProcessingSoftware } from '@/lib/data/software'

export const metadata = {
  title: "Genomic Processing Software",
  description: "Tools for processing SNP chip data and calculating genomic relationships",
}

export default function GenomicProcessingSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="Genomic Processing Software"
        description="Tools for processing SNP chip data and calculating genomic relationships"
      />

      <div className="pt-10">
        <ResourceGrid>
          {genomicProcessingSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
