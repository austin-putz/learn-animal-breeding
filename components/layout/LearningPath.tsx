export interface PathStep {
  label: string
  text: string
}

const columns: Record<number, string> = {
  1: 'xl:grid-cols-1',
  2: 'xl:grid-cols-2',
  3: 'xl:grid-cols-3',
  4: 'xl:grid-cols-4',
}

/**
 * The reading-order guidance that used to sit in a blue callout box. Rendered
 * as a step row because the content genuinely is a progression.
 */
export function LearningPath({
  steps,
  title = 'Learning Path',
}: {
  steps: PathStep[]
  title?: string
}) {
  return (
    <section className="mt-14 border-t border-line pt-7">
      <h2 className="group-label mb-5">{title}</h2>
      <div className={`grid gap-7 sm:grid-cols-2 ${columns[steps.length] ?? 'xl:grid-cols-4'}`}>
        {steps.map((step) => (
          <div key={step.label} className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold">{step.label}</span>
            <p className="text-[13px] leading-relaxed text-muted">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
