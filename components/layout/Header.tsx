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
          <div className="relative group">
            <button className="text-sm font-medium hover:text-primary-600 transition-colors">
              Learn ▾
            </button>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium hover:text-primary-600 transition-colors">
              Resources ▾
            </button>
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
