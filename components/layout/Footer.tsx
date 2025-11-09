import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="border-t bg-neutral-50 dark:bg-neutral-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/general/learn-animal-breeding-logo.png"
                alt="Learn Animal Breeding Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <h3 className="font-bold text-lg">Learn Animal Breeding</h3>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              Comprehensive educational resources for animal breeding, quantitative genetics,
              and breeding program management. Preserving knowledge for the next generation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/learn/books" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/learn/course-notes" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600">
                  Course Notes
                </Link>
              </li>
              <li>
                <Link href="/resources/software" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600">
                  Software Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-neutral-600 dark:text-neutral-400">
          <p>&copy; {new Date().getFullYear()} Learn Animal Breeding. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
