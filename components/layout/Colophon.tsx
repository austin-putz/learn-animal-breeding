/**
 * Closing note on a listing page. Replaces the tinted callout boxes.
 */
export function Colophon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 max-w-[72ch] border-t border-line pt-6 text-[13px] leading-relaxed text-faint">
      {children}
    </div>
  )
}
