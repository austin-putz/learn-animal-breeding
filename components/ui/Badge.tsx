import { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * `meta` is the default voice for counts, years and statuses: mono, quiet,
   * no fill. `solid` and `outline` exist for the few places that need to
   * carry real emphasis.
   */
  variant?: 'meta' | 'solid' | 'outline'
}

export function Badge({
  children,
  variant = 'meta',
  className,
  ...props
}: BadgeProps) {
  const variants = {
    meta: 'font-mono text-[10.5px] uppercase tracking-[0.07em] text-faint',
    solid: 'rounded-md bg-moss-wash px-2 py-0.5 text-[11px] font-medium text-moss',
    outline: 'rounded-md border border-line-strong px-2 py-0.5 text-[11px] font-medium text-muted',
  }

  return (
    <span className={clsx('inline-flex items-center', variants[variant], className)} {...props}>
      {children}
    </span>
  )
}
