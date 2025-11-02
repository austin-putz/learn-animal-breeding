import { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'solid' | 'outline'
}

export function Badge({
  children,
  variant = 'solid',
  className,
  ...props
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium'

  const variants = {
    solid: 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200',
    outline: 'border border-primary-600 text-primary-600',
  }

  return (
    <span
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  )
}
