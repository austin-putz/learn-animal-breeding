import { SoftwareCard } from '@/components/software/SoftwareCard'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { ResourceGrid } from '@/components/layout/ResourceGrid'
import { softwareCategories } from '@/lib/navigation'
import { evaluationsSoftware } from '@/lib/data/software'

export const metadata = {
  title: "Genetic Evaluation Software",
  description: "Software for running genetic evaluations and predicting breeding values",
}

export default function EvaluationsSoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software', href: '/resources/software' }]}
        rail={softwareCategories}
        title="Genetic Evaluation Software"
        description="Software for running genetic evaluations and predicting breeding values"
      />

      <div className="pt-10">
        <ResourceGrid>
          {evaluationsSoftware.map((software) => (
            <SoftwareCard key={software.id} {...software} />
          ))}
        </ResourceGrid>
      </div>
    </PageShell>
  )
}
