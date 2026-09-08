import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { BlogPostMetadata, formatDate } from '@/lib/blog'

interface BlogPostProps {
  post: BlogPostMetadata
  children: React.ReactNode
}

export function BlogPost({ post, children }: BlogPostProps) {
  return (
    <div className="container max-w-[1400px] py-10 md:py-14">
      <div className="mx-auto max-w-[76ch]">
        <nav aria-label="Breadcrumb" className="meta mb-8">
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span className="px-2 text-line-strong">/</span>
          <Link href="/blog" className="transition-colors hover:text-ink">
            Blog
          </Link>
        </nav>

        <article>
          <header className="border-b border-line pb-8">
            <div className="meta-sm mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-moss">{post.category}</span>
              <span className="text-line-strong">/</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span className="text-line-strong">/</span>
              <span>{post.readingTime}</span>
            </div>

            <h1 className="text-balance text-3xl font-bold leading-[1.12] tracking-tight md:text-[2.5rem]">
              {post.title}
            </h1>

            <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-muted">
              {post.description}
            </p>

            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-3.5 gap-y-1">
                {post.tags.map((tag) => (
                  <span key={tag} className="meta-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          <div className="prose mt-10 max-w-none">{children}</div>
        </article>

        <div className="mt-14 border-t border-line pt-7">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            View all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
