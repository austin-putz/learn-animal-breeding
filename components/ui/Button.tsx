import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    href,
    target,
    rel,
    download,
    ...props
  }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center gap-2 rounded-md font-medium whitespace-nowrap transition-colors active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-moss focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50'

    const variants = {
      primary: 'bg-moss text-moss-on hover:bg-moss-hover',
      secondary: 'bg-sunken text-ink hover:bg-line',
      outline: 'border border-line-strong text-ink hover:border-faint hover:bg-sunken',
      ghost: 'text-muted hover:bg-sunken hover:text-ink',
      link: 'text-moss underline-offset-4 hover:underline',
    }

    const sizes = {
      sm: 'h-8 px-3 text-[12.5px]',
      md: 'h-10 px-4 text-sm',
      lg: 'h-11 px-6 text-[15px]',
    }

    const classes = clsx(
      baseStyles,
      variants[variant],
      variant === 'link' ? 'h-auto p-0' : sizes[size],
      className
    )

    if (href) {
      // Regular anchor for downloads, Next Link for navigation.
      if (download !== undefined) {
        return (
          <a href={href} className={classes} target={target} rel={rel} download={download}>
            {children}
          </a>
        )
      }

      return (
        <Link href={href} className={classes} target={target} rel={rel}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
