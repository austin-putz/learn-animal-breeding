import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BlogPostMetadata, formatDate } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMetadata
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col gap-3 border-t border-line py-6 ${
        featured ? 'border-t-2 border-moss' : ''
      }`}
    >
      <div className="meta-sm flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className={featured ? 'text-moss' : undefined}>{post.category}</span>
        <span className="text-line-strong">/</span>
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span className="text-line-strong">/</span>
        <span>{post.readingTime}</span>
      </div>

      <h3
        className={`font-display font-semibold leading-tight tracking-tight transition-colors group-hover:text-moss ${
          featured ? 'text-2xl md:text-[1.75rem]' : 'text-lg'
        }`}
      >
        {post.title}
      </h3>

      <p
        className={`text-muted ${
          featured ? 'max-w-[62ch] text-[15px] leading-relaxed' : 'text-[13.5px] leading-relaxed'
        }`}
      >
        {post.description}
      </p>

      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-x-3.5 gap-y-1">
          {post.tags.slice(0, featured ? 5 : 3).map((tag) => (
            <span key={tag} className="meta-sm">
              {tag}
            </span>
          ))}
          {post.tags.length > (featured ? 5 : 3) && (
            <span className="meta-sm">+{post.tags.length - (featured ? 5 : 3)} more</span>
          )}
        </div>
      )}

      <span className="mt-1 inline-flex items-center gap-1.5 text-[12.5px] font-medium text-moss">
        Read post
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      </span>
    </Link>
  )
}
