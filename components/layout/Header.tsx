'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { BookOpen, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/95 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 mr-8">
          <BookOpen className="h-6 w-6 text-primary-600" />
          <span className="font-bold text-xl">Learn Animal Breeding</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary-600 transition-colors">
            About
          </Link>

          {/* Learn Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium hover:text-primary-600 transition-colors">
              Learn ▾
            </button>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-800 py-2">
                <Link href="/learn/books" className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  📚 Books
                </Link>
                <Link href="/learn/course-notes" className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  📝 Course Notes
                </Link>
                <Link href="/learn/my-notes" className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  ✍️ My Notes
                </Link>
                <Link href="/learn/short-courses" className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  🎓 Short Courses
                </Link>
                <Link href="/learn/youtube" className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  🎥 YouTube Resources
                </Link>
              </div>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium hover:text-primary-600 transition-colors">
              Resources ▾
            </button>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-800 py-2">
                <Link href="/resources/software" className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  🛠️ Software Tools
                </Link>
                <Link href="/resources/skills" className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  💡 Technical Skills
                </Link>
                <Link href="/resources/journals" className="block px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800">
                  📰 Journals
                </Link>
              </div>
            </div>
          </div>

          <Link href="/blog" className="text-sm font-medium hover:text-primary-600 transition-colors">
            Blog
          </Link>
        </nav>

        {/* Right side buttons */}
        <div className="flex items-center space-x-4 ml-auto">
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Search
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
