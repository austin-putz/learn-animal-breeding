import { Pencil } from 'lucide-react'
import { BlogGrid } from '@/components/blog/BlogGrid'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog',
  description:
    'Insights, updates, and discussions on animal breeding, quantitative genetics, and breeding program management.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="container py-12 max-w-7xl mx-auto px-4">
        {/* Hero Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-800 mb-6">
            <Pencil className="w-10 h-10 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
            Blog
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Insights on animal breeding, data science, research methodology, and
            breeding program management
          </p>
        </header>

        {/* Blog Posts Grid */}
        <BlogGrid posts={posts} showFeatured={true} />

        {/* Call to Action (when there are posts) */}
        {posts.length > 0 && (
          <div className="mt-16 text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg border-2 border-purple-200 dark:border-purple-800 p-8">
            <h2 className="text-2xl font-bold mb-3 text-purple-900 dark:text-purple-100">
              Stay Updated
            </h2>
            <p className="text-neutral-700 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
              Follow me on LinkedIn for updates on new content and insights on
              animal breeding and quantitative genetics.
            </p>
            <a
              href="https://www.linkedin.com/in/austin-putz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Follow on LinkedIn
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
