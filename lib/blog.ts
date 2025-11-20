import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPostMetadata {
  slug: string
  title: string
  description: string
  publishedAt: string
  category: string
  tags: string[]
  featured?: boolean
  readingTime: string
}

export interface BlogPost extends BlogPostMetadata {
  content: string
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllPosts(): BlogPostMetadata[] {
  // Create directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true })
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const mdxFiles = fileNames.filter(
    (fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md')
  )

  const allPostsData = mdxFiles.map((fileName) => {
    // Remove .mdx extension to get slug
    const slug = fileName.replace(/\.mdx?$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      publishedAt: data.publishedAt || '',
      category: data.category || 'General',
      tags: data.tags || [],
      featured: data.featured || false,
      readingTime: stats.text,
    } as BlogPostMetadata
  })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.publishedAt < b.publishedAt) {
      return 1
    } else {
      return -1
    }
  })
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)

    // Try .mdx first, fall back to .md
    let fileContents: string
    try {
      fileContents = fs.readFileSync(fullPath, 'utf8')
    } catch {
      const mdPath = path.join(postsDirectory, `${slug}.md`)
      fileContents = fs.readFileSync(mdPath, 'utf8')
    }

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || 'Untitled',
      description: data.description || '',
      publishedAt: data.publishedAt || '',
      category: data.category || 'General',
      tags: data.tags || [],
      featured: data.featured || false,
      readingTime: stats.text,
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

/**
 * Get all unique categories from blog posts
 */
export function getAllCategories(): string[] {
  const posts = getAllPosts()
  const categories = posts.map((post) => post.category)
  return Array.from(new Set(categories)).sort()
}

/**
 * Get all unique tags from blog posts
 */
export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = posts.flatMap((post) => post.tags)
  return Array.from(new Set(tags)).sort()
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): BlogPostMetadata[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.featured)
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPostMetadata[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.category === category)
}

/**
 * Get posts by tag
 */
export function getPostsByTag(tag: string): BlogPostMetadata[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.tags.includes(tag))
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
