/**
 * Standard page container. One width and one vertical rhythm for every page,
 * so sections do not each invent their own padding.
 */
export function PageShell({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`container max-w-[1400px] py-10 md:py-14 ${className}`}>{children}</div>
  )
}
