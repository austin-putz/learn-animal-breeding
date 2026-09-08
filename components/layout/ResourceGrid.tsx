/**
 * Two columns of hairline-separated rows on wide screens, one below `xl`.
 * The gap is horizontal only; rows carry their own top rule.
 */
export function ResourceGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 gap-x-11 xl:grid-cols-2">{children}</div>
}

/**
 * A titled group of rows, e.g. Essential / Recommended / Supplemental.
 */
export function ResourceGroup({
  label,
  count,
  description,
  children,
}: {
  label: string
  count?: number
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="pt-10">
      <div className="flex items-baseline gap-3 pb-1.5">
        <h2 className="group-label">{label}</h2>
        {count !== undefined && <span className="font-mono text-[11.5px] text-faint">{count}</span>}
      </div>
      {description && (
        <p className="max-w-[58ch] pb-1 text-[13.5px] text-muted">{description}</p>
      )}
      <ResourceGrid>{children}</ResourceGrid>
    </section>
  )
}
