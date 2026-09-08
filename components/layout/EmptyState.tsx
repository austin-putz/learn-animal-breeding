/**
 * A section that has been planned but has nothing in it yet. Kept quiet so it
 * reads as a placeholder rather than as content.
 */
export function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-t border-line py-8">
      <p className="meta-sm mb-2">Coming soon</p>
      <p className="max-w-[58ch] text-[13.5px] text-muted">{children}</p>
    </div>
  )
}
