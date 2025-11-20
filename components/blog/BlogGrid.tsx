import { BlogCard } from './BlogCard'
import { BlogPostMetadata } from '@/lib/blog'

interface BlogGridProps {
  posts: BlogPostMetadata[]
  showFeatured?: boolean
}

export function BlogGrid({ posts, showFeatured = true }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          No blog posts found. Check back soon!
        </p>
      </div>
    )
  }

  // Separate featured and regular posts
  const featuredPost = showFeatured ? posts.find((post) => post.featured) : null
  const regularPosts = featuredPost
    ? posts.filter((post) => post.slug !== featuredPost.slug)
    : posts

  return (
    <div className="space-y-8">
      {/* Featured Post - Full Width */}
      {featuredPost && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
            Featured Post
          </h2>
          <BlogCard post={featuredPost} featured />
        </div>
      )}

      {/* Regular Posts Grid */}
      {regularPosts.length > 0 && (
        <>
          {featuredPost && (
            <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
              Recent Posts
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
