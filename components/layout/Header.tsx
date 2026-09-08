'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { ChevronDown, Menu, X } from 'lucide-react'

const learnLinks = [
  { href: '/learn/books', label: 'Books' },
  { href: '/learn/course-notes', label: 'Course Notes' },
  { href: '/learn/my-books', label: 'My Books' },
  { href: '/learn/my-notes', label: 'My Notes' },
  { href: '/learn/short-courses', label: 'Short Courses' },
  { href: '/learn/youtube', label: 'YouTube Resources' },
]

const resourceLinks = [
  { href: '/resources/software', label: 'Software Tools' },
  { href: '/resources/skills', label: 'Technical Skills' },
  { href: '/resources/consulting', label: 'Consulting' },
  { href: '/resources/journals', label: 'Journals' },
]

const navLink =
  'rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-sunken hover:text-ink'

function Dropdown({
  label,
  links,
  basePath,
}: {
  label: string
  links: { href: string; label: string }[]
  basePath: string
}) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isActive = pathname.startsWith(basePath)

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }

  // A short delay keeps the panel open while the pointer crosses the gap.
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex items-center gap-1 ${navLink} ${isActive ? 'text-ink' : ''}`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full w-60 pt-2">
          <div className="overflow-hidden rounded-lg border border-line bg-surface p-1.5 shadow-lg">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-sunken ${
                  pathname === link.href ? 'font-medium text-moss' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSection, setOpenSection] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => {
    setIsMenuOpen(false)
    setOpenSection(null)
  }, [pathname])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-paper/90 backdrop-blur-md transition-colors ${
        isScrolled ? 'border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <div className="container max-w-[1400px]">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/images/general/learn-animal-breeding-logo.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-sm"
            />
            <span className="font-display text-[15px] font-semibold tracking-tight md:text-base">
              Learn Animal Breeding
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            <Link href="/" className={`${navLink} ${pathname === '/' ? 'text-ink' : ''}`}>
              Home
            </Link>
            <Dropdown label="Learn" links={learnLinks} basePath="/learn" />
            <Dropdown label="Resources" links={resourceLinks} basePath="/resources" />
            <Link
              href="/blog"
              className={`${navLink} ${pathname.startsWith('/blog') ? 'text-ink' : ''}`}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className={`${navLink} ${pathname === '/about' ? 'text-ink' : ''}`}
            >
              About
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-md p-2 text-muted transition-colors hover:bg-sunken hover:text-ink lg:hidden"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.75} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="mb-4 flex flex-col rounded-lg border border-line bg-surface p-2 lg:hidden">
            <Link href="/" className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-sunken">
              Home
            </Link>

            {[
              { key: 'learn', label: 'Learn', links: learnLinks },
              { key: 'resources', label: 'Resources', links: resourceLinks },
            ].map((section) => (
              <div key={section.key}>
                <button
                  type="button"
                  onClick={() =>
                    setOpenSection((s) => (s === section.key ? null : section.key))
                  }
                  aria-expanded={openSection === section.key}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium hover:bg-sunken"
                >
                  {section.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      openSection === section.key ? 'rotate-180' : ''
                    }`}
                    strokeWidth={2}
                  />
                </button>
                {openSection === section.key && (
                  <div className="ml-3 flex flex-col border-l border-line pl-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:bg-sunken hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/blog"
              className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-sunken"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="rounded-md px-3 py-2.5 text-sm font-medium hover:bg-sunken"
            >
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
