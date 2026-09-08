import { BlogCard } from './BlogCard'
import { BlogPostMetadata } from '@/lib/blog'

interface BlogGridProps {
  posts: BlogPostMetadata[]
  showFeatured?: boolean
}

export function BlogGrid({ posts, showFeatured = true }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="border-t border-line py-10">
        <p className="meta-sm mb-2">Nothing published yet</p>
        <p className="max-w-[58ch] text-[13.5px] text-muted">
          No blog posts found. Check back soon.
        </p>
      </div>
    )
  }

  const featuredPost = showFeatured ? posts.find((post) => post.featured) : null
  const regularPosts = featuredPost
    ? posts.filter((post) => post.slug !== featuredPost.slug)
    : posts

  return (
    <div>
      {featuredPost && (
        <section className="pt-10">
          <h2 className="group-label pb-1.5">Featured Post</h2>
          <BlogCard post={featuredPost} featured />
        </section>
      )}

      {regularPosts.length > 0 && (
        <section className="pt-10">
          {featuredPost && <h2 className="group-label pb-1.5">Recent Posts</h2>}
          <div className="grid grid-cols-1 gap-x-11 xl:grid-cols-2">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
