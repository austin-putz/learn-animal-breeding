import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { imputationSoftware } from '@/lib/data/software'

export const metadata = {
  title: "Imputation Software",
  description: "Tools for imputing missing genotypes and phasing",
}

export default function ImputationSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="Imputation Software"
        description="Tools for imputing missing genotypes and phasing"
      />

      <div className="pt-10">
        <ResourceGrid>
          {imputationSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
