import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { BlogPostMetadata, formatDate } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPostMetadata
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClasses = featured
    ? 'md:col-span-2 lg:col-span-3'
    : ''

  return (
    <Link href={`/blog/${post.slug}`}>
      <Card
        className={`h-full group hover:shadow-xl transition-all duration-300 cursor-pointer ${cardClasses}`}
      >
        <div className="p-6">
          {/* Category and Featured Badge */}
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="default">{post.category}</Badge>
            {post.featured && (
              <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                Featured
              </Badge>
            )}
          </div>

          {/* Title */}
          <h3
            className={`font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors ${
              featured ? 'text-3xl' : 'text-xl'
            }`}
          >
            {post.title}
          </h3>

          {/* Description */}
          <p
            className={`text-neutral-600 dark:text-neutral-400 mb-4 ${
              featured ? 'text-lg' : 'text-sm'
            }`}
          >
            {post.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, featured ? 5 : 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > (featured ? 5 : 3) && (
              <span className="text-xs px-2 py-1 text-neutral-500">
                +{post.tags.length - (featured ? 5 : 3)} more
              </span>
            )}
          </div>
        </div>
      </Card>
    </Link>
  )
}
