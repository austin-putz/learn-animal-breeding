'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Menu, Search } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false)
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-dark shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-white rounded-lg p-1.5 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <Image
                src="/images/general/learn-animal-breeding-logo.png"
                alt="Learn Animal Breeding Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">
              Learn Animal Breeding
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
            >
              Home
            </Link>

            {/* Learn Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsLearnDropdownOpen(true)}
              onMouseLeave={() => setIsLearnDropdownOpen(false)}
            >
              <button className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium flex items-center gap-1">
                Learn
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isLearnDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isLearnDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-primary-900/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up border border-white/20">
                    <div className="p-2">
                      <Link
                        href="/learn/books"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-xl">📚</span>
                        <span className="font-medium">Books</span>
                      </Link>
                      <Link
                        href="/learn/course-notes"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-xl">📝</span>
                        <span className="font-medium">Course Notes</span>
                      </Link>
                      <Link
                        href="/learn/my-notes"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-xl">✍️</span>
                        <span className="font-medium">My Notes</span>
                      </Link>
                      <Link
                        href="/learn/short-courses"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-xl">🎓</span>
                        <span className="font-medium">Short Courses</span>
                      </Link>
                      <Link
                        href="/learn/youtube"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-xl">🎥</span>
                        <span className="font-medium">YouTube Resources</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsResourcesDropdownOpen(true)}
              onMouseLeave={() => setIsResourcesDropdownOpen(false)}
            >
              <button className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium flex items-center gap-1">
                Resources
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isResourcesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isResourcesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-64">
                  <div className="bg-primary-900/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up border border-white/20">
                    <div className="p-2">
                      <Link
                        href="/resources/software"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-xl">🛠️</span>
                        <span className="font-medium">Software Tools</span>
                      </Link>
                      <Link
                        href="/resources/skills"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-xl">💡</span>
                        <span className="font-medium">Technical Skills</span>
                      </Link>
                      <Link
                        href="/resources/consulting"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-xl">🏢</span>
                        <span className="font-medium">Consulting</span>
                      </Link>
                      <Link
                        href="/resources/journals"
                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-xl">📰</span>
                        <span className="font-medium">Journals</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="px-4 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
            >
              Blog
            </Link>

            {/* About - Highlighted like Williams' Contact */}
            <Link
              href="/about"
              className="ml-2 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg"
            >
              About
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-3 ml-auto lg:ml-4">
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:inline-flex text-white/90 hover:text-white hover:bg-white/10"
            >
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 bg-primary-900/95 backdrop-blur-lg rounded-2xl p-4 space-y-1 animate-fade-in-up border border-white/20">
            <Link
              href="/"
              className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Learn Dropdown Mobile */}
            <div>
              <button
                onClick={() => setIsLearnDropdownOpen(!isLearnDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              >
                Learn
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isLearnDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isLearnDropdownOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  <Link
                    href="/learn/books"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">📚</span>
                    Books
                  </Link>
                  <Link
                    href="/learn/course-notes"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">📝</span>
                    Course Notes
                  </Link>
                  <Link
                    href="/learn/my-notes"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">✍️</span>
                    My Notes
                  </Link>
                  <Link
                    href="/learn/short-courses"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">🎓</span>
                    Short Courses
                  </Link>
                  <Link
                    href="/learn/youtube"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">🎥</span>
                    YouTube Resources
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown Mobile */}
            <div>
              <button
                onClick={() => setIsResourcesDropdownOpen(!isResourcesDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isResourcesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isResourcesDropdownOpen && (
                <div className="mt-1 ml-4 space-y-1">
                  <Link
                    href="/resources/software"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">🛠️</span>
                    Software Tools
                  </Link>
                  <Link
                    href="/resources/skills"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">💡</span>
                    Technical Skills
                  </Link>
                  <Link
                    href="/resources/consulting"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">🏢</span>
                    Consulting
                  </Link>
                  <Link
                    href="/resources/journals"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-lg">📰</span>
                    Journals
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <button
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <Search className="h-4 w-4" />
              Search
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
