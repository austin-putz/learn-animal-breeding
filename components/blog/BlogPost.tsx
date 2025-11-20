import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { BlogPostMetadata, formatDate } from '@/lib/blog'

interface BlogPostProps {
  post: BlogPostMetadata
  children: React.ReactNode
}

export function BlogPost({ post, children }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Breadcrumbs */}
        <nav className="text-sm text-neutral-500 dark:text-neutral-500 mb-6">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-primary-600 dark:hover:text-primary-400">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-700 dark:text-neutral-300">{post.title}</li>
          </ol>
        </nav>

        {/* Article Header */}
        <article className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg p-8 md:p-12">
          <header className="mb-8 pb-8 border-b border-neutral-200 dark:border-neutral-800">
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="solid">{post.category}</Badge>
              {post.featured && (
                <Badge variant="solid" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                  Featured
                </Badge>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-6">
              {post.description}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {children}
          </div>
        </article>

        {/* Footer Navigation */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View All Posts</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
