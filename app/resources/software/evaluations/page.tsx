import { SoftwareSidebar } from '@/components/software/SoftwareSidebar'
import { SoftwareCard } from '@/components/software/SoftwareCard'
import { evaluationsSoftware } from '@/lib/data/software'

export default function EvaluationsSoftwarePage() {
  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <SoftwareSidebar />

        <main className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Genetic Evaluation Software</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Software for running genetic evaluations and predicting breeding values
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluationsSoftware.map(software => (
              <SoftwareCard key={software.id} {...software} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
