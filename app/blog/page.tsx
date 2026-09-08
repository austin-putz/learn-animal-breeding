import { BlogGrid } from '@/components/blog/BlogGrid'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog',
  description:
    'Insights, updates, and discussions on animal breeding, quantitative genetics, and breeding program management.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Blog' }]}
        title="Blog"
        description="Insights on animal breeding, data science, research methodology, and breeding program management"
      />

      <BlogGrid posts={posts} showFeatured={true} />

      {posts.length > 0 && (
        <section className="mt-14 border-t border-line pt-7">
          <h2 className="group-label mb-3">Stay Updated</h2>
          <p className="mb-5 max-w-[62ch] text-[13.5px] leading-relaxed text-muted">
            Follow me on LinkedIn for updates on new content and insights on animal breeding and
            quantitative genetics.
          </p>
          <a
            href="https://www.linkedin.com/in/austin-putz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-md bg-moss px-4 text-sm font-medium text-moss-on transition-colors hover:bg-moss-hover active:translate-y-px"
          >
            Follow on LinkedIn
          </a>
        </section>
      )}
    </PageShell>
  )
}
