# Animal Breeding Learning Platform - Development Guide

## Project Overview

### Mission
This website addresses the critical shortage of animal breeding education by providing comprehensive, accessible learning materials to students and professionals worldwide. With the drastic reduction in animal breeding faculty and no remaining graduate programs focused on animal breeding, this platform serves as a centralized hub for knowledge preservation and dissemination.

### Target Audience
- Graduate students studying animal science and genetics
- Early-career animal breeding professionals
- Researchers and practitioners in quantitative genetics
- Anyone interested in learning animal breeding principles

### Core Purpose
- Curate and organize educational resources
- Provide free access to books, notes, and course materials
- Share software tools used in the industry
- Build a community through blog content
- Preserve institutional knowledge from experienced practitioners

---

## Tech Stack

### Framework & Core Technologies
- **Next.js 14.2+** (App Router)
  - React Server Components for optimal performance
  - File-based routing
  - Built-in optimization (images, fonts, scripts)
  - API routes for search and dynamic features

- **TypeScript 5+**
  - Type safety across the entire codebase
  - Enhanced IDE support and autocomplete
  - Reduced runtime errors

- **Tailwind CSS 3.4+**
  - Utility-first CSS framework
  - Custom design system configuration
  - Dark mode support built-in
  - Responsive design utilities

### Content Management

#### MDX for Technical Content
- **next-mdx-remote** or **contentlayer**
  - Write content in Markdown with embedded React components
  - Perfect for books, notes, course materials with code examples
  - Version controlled alongside the codebase
  - Fast build times and optimal performance

**Content Types Using MDX:**
- Books and chapters
- Course notes
- Personal notes (future books)
- Short course materials
- Technical skills guides
- Software documentation

#### Sanity CMS for Blog
- **Sanity.io** (Free tier sufficient for starting)
  - Headless CMS with excellent developer experience
  - Real-time collaboration
  - Structured content with custom schemas
  - Rich text editor with custom blocks
  - Image optimization and CDN

**Blog Features:**
- Draft/publish workflow
- Categories and tags
- Author information
- Featured images
- SEO metadata

### Key Libraries

#### UI & Styling
```json
{
  "tailwindcss": "^3.4.0",
  "@tailwindcss/typography": "^0.5.10",
  "tailwind-merge": "^2.2.0",
  "clsx": "^2.1.0",
  "next-themes": "^0.2.1"
}
```

#### Content & Search
```json
{
  "contentlayer": "^0.3.4",
  "next-contentlayer": "^0.3.4",
  "flexsearch": "^0.7.43",
  "shiki": "^1.0.0",
  "rehype-pretty-code": "^0.13.0"
}
```

#### PDF Handling
```json
{
  "react-pdf": "^7.7.0",
  "pdfjs-dist": "^4.0.269"
}
```

#### Sanity Integration
```json
{
  "@sanity/client": "^6.11.0",
  "@sanity/image-url": "^1.0.2",
  "next-sanity": "^7.0.0",
  "@portabletext/react": "^3.0.11"
}
```

---

## Project Structure

```
LearnAnimalBreeding/
├── app/                          # Next.js App Router
│   ├── (main)/                   # Main layout group
│   │   ├── page.tsx              # Home page
│   │   ├── about/                # About page
│   │   ├── learn/                # Learning resources section
│   │   │   ├── books/
│   │   │   │   ├── page.tsx      # Books overview
│   │   │   │   ├── statistics/   # Book category pages
│   │   │   │   ├── quantitative-genetics/
│   │   │   │   ├── linear-models/
│   │   │   │   ├── animal-breeding-models/
│   │   │   │   └── [slug]/       # Individual book pages
│   │   │   ├── course-notes/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   ├── my-notes/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   ├── short-courses/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   └── youtube/
│   │   │       ├── page.tsx      # YouTube outline
│   │   │       └── [category]/   # Linear algebra, stats, etc.
│   │   ├── resources/            # Tools and resources
│   │   │   ├── software/
│   │   │   │   ├── page.tsx      # Software catalog
│   │   │   │   └── [category]/   # Animal breeding, evaluation, etc.
│   │   │   ├── skills/
│   │   │   │   └── page.tsx      # Technical skills guide
│   │   │   └── journals/
│   │   │       └── page.tsx      # Journal list
│   │   └── blog/
│   │       ├── page.tsx          # Blog listing
│   │       └── [slug]/           # Individual blog posts
│   ├── api/
│   │   ├── search/               # Search API endpoint
│   │   └── sanity/               # Sanity webhooks (if needed)
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   └── providers.tsx             # Theme and context providers
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Main navigation
│   │   ├── Footer.tsx
│   │   ├── MobileNav.tsx
│   │   └── Sidebar.tsx           # Optional sidebar for content
│   ├── ui/                       # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Dropdown.tsx
│   │   └── ThemeToggle.tsx
│   ├── content/
│   │   ├── MDXContent.tsx        # MDX wrapper with components
│   │   ├── TableOfContents.tsx   # Auto-generated from headings
│   │   ├── CodeBlock.tsx         # Syntax highlighted code
│   │   └── Callout.tsx           # Info/warning boxes
│   ├── search/
│   │   ├── SearchBar.tsx
│   │   ├── SearchResults.tsx
│   │   └── SearchModal.tsx
│   ├── pdf/
│   │   └── PDFViewer.tsx         # PDF embed component
│   └── blog/
│       ├── BlogCard.tsx
│       ├── BlogGrid.tsx
│       └── PortableText.tsx      # Sanity content renderer
├── content/                      # MDX content files
│   ├── books/
│   │   ├── animal-breeding/
│   │   ├── quantitative-genetics/
│   │   ├── bayesian/
│   │   ├── statistics/
│   │   └── mathematics/
│   ├── course-notes/
│   │   ├── animal-breeding/
│   │   └── statistics/
│   ├── my-notes/
│   │   ├── animal-breeding/
│   │   └── statistics/
│   ├── short-courses/
│   │   ├── iowa-state/
│   │   └── une-australia/
│   ├── youtube/
│   ├── software/
│   │   ├── variance-components/
│   │   ├── evaluations/
│   │   ├── inbreeding/
│   │   ├── genomic-processing/
│   │   ├── gwas/
│   │   ├── imputation/
│   │   ├── breed-composition/
│   │   ├── simulation/
│   │   ├── selection-index/
│   │   └── misc/
│   └── skills/
├── lib/
│   ├── mdx.ts                    # MDX utilities
│   ├── search.ts                 # Search implementation
│   ├── sanity/
│   │   ├── client.ts             # Sanity client config
│   │   ├── queries.ts            # GROQ queries
│   │   └── schemas/              # Content schemas
│   └── utils.ts                  # Helper functions
├── public/
│   ├── pdfs/                     # PDF files organized by type
│   │   ├── books/                # Free book PDFs
│   │   │   ├── animal-breeding/
│   │   │   ├── quantitative-genetics/
│   │   │   ├── bayesian/
│   │   │   ├── statistics/
│   │   │   └── mathematics/
│   │   ├── course-notes/         # Course note PDFs
│   │   │   ├── animal-breeding/
│   │   │   └── statistics/
│   │   ├── my-notes/             # Your personal note PDFs
│   │   │   ├── animal-breeding/
│   │   │   └── statistics/
│   │   └── short-courses/        # Short course PDFs
│   │       ├── iowa-state/
│   │       └── une-australia/
│   ├── images/
│   │   ├── books/                # Book covers/thumbnails
│   │   ├── software/             # Software icons/logos
│   │   └── general/              # General site images
│   └── fonts/
├── styles/
│   └── mdx.css                   # Custom MDX styling
├── sanity/                       # Sanity Studio
│   ├── schemas/
│   │   ├── blog.ts
│   │   ├── author.ts
│   │   └── category.ts
│   └── sanity.config.ts
├── contentlayer.config.ts        # Contentlayer configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json
├── next.config.js
├── package.json
└── README.md
```

---

## Design System

### Color Palette

#### Primary Colors (Academic/Professional)
```js
// tailwind.config.ts
colors: {
  // Brand colors - professional blue/teal
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Main brand color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
  // Accent color - warm complement for CTAs
  accent: {
    50: '#fef3c7',
    100: '#fde68a',
    200: '#fcd34d',
    300: '#fbbf24',
    400: '#f59e0b',
    500: '#d97706',
    600: '#b45309',
  },
  // Neutral grays for text and backgrounds
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  // Semantic colors
  success: {
    light: '#86efac',
    DEFAULT: '#22c55e',
    dark: '#16a34a',
  },
  warning: {
    light: '#fcd34d',
    DEFAULT: '#f59e0b',
    dark: '#d97706',
  },
  error: {
    light: '#fca5a5',
    DEFAULT: '#ef4444',
    dark: '#dc2626',
  },
  info: {
    light: '#93c5fd',
    DEFAULT: '#3b82f6',
    dark: '#2563eb',
  }
}
```

### Typography

```js
// tailwind.config.ts
fontFamily: {
  sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
  mono: ['var(--font-jetbrains-mono)', 'Consolas', 'monospace'],
}
```

**Font Usage:**
- **Headings**: Inter (Sans-serif) - Clean, modern, professional
- **Body text**: Inter - Excellent readability for long-form content
- **Quotes/Emphasis**: Merriweather (Serif) - Academic feel
- **Code**: JetBrains Mono - Optimized for coding

**Type Scale:**
```css
/* Headings */
.h1 { @apply text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight; }
.h2 { @apply text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight; }
.h3 { @apply text-2xl md:text-3xl font-semibold; }
.h4 { @apply text-xl md:text-2xl font-semibold; }
.h5 { @apply text-lg md:text-xl font-medium; }
.h6 { @apply text-base md:text-lg font-medium; }

/* Body */
.body-lg { @apply text-lg leading-relaxed; }
.body { @apply text-base leading-relaxed; }
.body-sm { @apply text-sm leading-relaxed; }
```

### Spacing & Layout

```js
// Consistent spacing scale
spacing: {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  '2xl': '4rem',   // 64px
  '3xl': '6rem',   // 96px
}

// Container widths
container: {
  center: true,
  padding: {
    DEFAULT: '1rem',
    sm: '2rem',
    lg: '4rem',
    xl: '5rem',
    '2xl': '6rem',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',  // Max width for content
  }
}
```

### Component Patterns

#### Cards
```tsx
// Standard content card
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <Badge>Category</Badge>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Description...</p>
  </CardContent>
  <CardFooter>
    <Button variant="ghost">Learn More →</Button>
  </CardFooter>
</Card>
```

#### Buttons
```tsx
// Button variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
```

### Dark Mode Strategy

```js
// Dark mode colors
dark: {
  bg: {
    primary: '#0a0a0a',
    secondary: '#171717',
    tertiary: '#262626',
  },
  text: {
    primary: '#fafafa',
    secondary: '#d4d4d4',
    tertiary: '#a3a3a3',
  },
  border: '#404040',
}
```

**Implementation:**
- Use `next-themes` for theme management
- System preference detection
- Persist user preference in localStorage
- Smooth transitions between themes
- Ensure WCAG AA contrast ratios in both modes

---

## Navigation Structure

### Main Navigation (Desktop)

```
┌─────────────────────────────────────────────────────────────┐
│  LOGO        Home  About  Learn ▾  Resources ▾  Blog  [🔍] [🌓] │
└─────────────────────────────────────────────────────────────┘
```

**Learn Dropdown:**
- Books
  - Animal Breeding
  - Quantitative Genetics
  - Bayesian Statistics
  - Statistics
  - Mathematics
- Course Notes
  - Animal Breeding
  - Statistics
- My Notes
  - Animal Breeding
  - Statistics
- Short Courses
  - Iowa State
  - UNE - Australia
- YouTube Resources

**Resources Dropdown:**
- Software Tools
  - Variance Components
  - Evaluations
  - Inbreeding
  - Genomic Processing
  - GWAS
  - Imputation
  - Breed Composition
  - Simulation
  - Selection Index
  - Miscellaneous
- Technical Skills Guide
- Journals to Follow

### Mobile Navigation

Hamburger menu with accordion structure:
```
☰ Menu
├── Home
├── About
├── 📚 Learn
│   ├── Books →
│   ├── Course Notes
│   ├── My Notes
│   ├── Short Courses
│   └── YouTube Resources
├── 🛠️ Resources
│   ├── Software Tools →
│   ├── Technical Skills
│   └── Journals
├── Blog
├── 🔍 Search
└── 🌓 Theme Toggle
```

### Breadcrumbs

Show user's location in content hierarchy:
```
Home / Learn / Books / Statistics / Introduction to Bayesian Statistics
```

---

## Content Management

### MDX Content Workflow

#### Content Structure

Each MDX file includes frontmatter metadata:

```mdx
---
title: "Introduction to Quantitative Genetics"
description: "Fundamental concepts in quantitative genetics for animal breeding"
category: "Quantitative Genetics"
tags: ["genetics", "heritability", "selection"]
author: "Your Name"
lastUpdated: "2025-01-15"
difficulty: "intermediate"
estimatedTime: "45 min"
featured: true
---

# Introduction to Quantitative Genetics

Your content here...

## Code Examples

```r
# Calculate heritability
h2 <- var_genetic / var_phenotypic
```
```

#### Available MDX Components

Custom components for rich content:

```tsx
// Callouts for important information
<Callout type="info">
  This is important background information.
</Callout>

<Callout type="warning">
  Common pitfall to avoid!
</Callout>

<Callout type="success">
  Pro tip for better results.
</Callout>

// Interactive code blocks
<CodeBlock language="r" filename="heritability.R" showLineNumbers>
  {`# Your code here`}
</CodeBlock>

// Math equations (using KaTeX)
<Equation>
  h^2 = \frac{\sigma^2_A}{\sigma^2_P}
</Equation>

// Expandable sections
<Accordion title="Advanced Topic: Genomic Selection">
  Detailed explanation...
</Accordion>

// PDF embeds
<PDFEmbed src="/pdfs/short-course-iowa-state.pdf" title="Iowa State Short Course" />

// YouTube embeds
<YouTubeEmbed videoId="abc123" title="Linear Algebra Basics" />

// Resource cards
<ResourceCard
  title="MateSel Software"
  description="Genetic selection and mating software"
  link="/resources/software/matesel"
  icon="software"
/>
```

#### Content Organization

**Books:**
- Each book is a collection of chapters
- Chapters are individual MDX files
- Automatic table of contents generation
- Previous/Next navigation between chapters

**Directory structure:**
```
content/books/statistics/
├── index.mdx              # Book overview
├── 01-introduction.mdx
├── 02-probability.mdx
└── 03-distributions.mdx
```

### Sanity CMS - Blog Content

#### Blog Schema

```typescript
// sanity/schemas/blog.ts
export const blogPost = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    }
  ]
}
```

#### Content Fetching

```typescript
// lib/sanity/queries.ts
import { client } from './client'

export async function getBlogPosts() {
  return client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title,
      "author": author->{name, image}
    }`
  )
}

export async function getBlogPost(slug: string) {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      body,
      "categories": categories[]->title,
      "author": author->{name, image, bio}
    }`,
    { slug }
  )
}
```

---

## Core Features Implementation

### 1. Full-Text Search (Flexsearch)

**Why Flexsearch?**
- Client-side search (no backend needed)
- Extremely fast
- Small bundle size
- Works offline
- Perfect for static content

**Implementation Steps:**

1. **Build search index at build time:**

```typescript
// lib/search.ts
import FlexSearch from 'flexsearch'

export interface SearchDocument {
  id: string
  title: string
  description: string
  content: string
  category: string
  url: string
}

export function createSearchIndex(documents: SearchDocument[]) {
  const index = new FlexSearch.Document({
    document: {
      id: 'id',
      index: ['title', 'description', 'content'],
      store: ['title', 'description', 'category', 'url']
    },
    tokenize: 'forward',
    context: true
  })

  documents.forEach(doc => {
    index.add(doc)
  })

  return index
}
```

2. **Search component:**

```tsx
// components/search/SearchBar.tsx
'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Keyboard shortcut: Cmd+K / Ctrl+K
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsOpen(true)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery) {
      setResults([])
      return
    }

    const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
    const data = await response.json()
    setResults(data.results)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm text-neutral-600 dark:text-neutral-400">
          Search...
        </span>
        <kbd className="hidden md:inline-block px-2 py-1 text-xs border rounded">
          ⌘K
        </kbd>
      </button>

      {/* Search Modal */}
      {isOpen && (
        <SearchModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSearch={handleSearch}
          results={results}
        />
      )}
    </div>
  )
}
```

3. **API route for search:**

```typescript
// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server'
import searchIndex from '@/lib/search-index.json' // Pre-built index
import FlexSearch from 'flexsearch'

const index = new FlexSearch.Document({
  document: {
    id: 'id',
    index: ['title', 'description', 'content'],
    store: ['title', 'description', 'category', 'url']
  }
})

// Load index data
searchIndex.forEach(doc => index.add(doc))

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  const results = await index.search(query, { limit: 10 })

  return NextResponse.json({ results })
}
```

### 2. PDF Viewer

**Implementation using react-pdf:**

```tsx
// components/pdf/PDFViewer.tsx
'use client'

import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Configure worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

interface PDFViewerProps {
  src: string
  title: string
  downloadable?: boolean
}

export function PDFViewer({ src, title, downloadable = true }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1.0)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-neutral-50 dark:bg-neutral-900">
      {/* Toolbar */}
      <div className="flex items-center justify-between p-4 border-b bg-white dark:bg-neutral-800">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded disabled:opacity-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-sm">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
            disabled={pageNumber >= numPages}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale(Math.max(0.5, scale - 0.1))}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-sm">{Math.round(scale * 100)}%</span>
          <button
            onClick={() => setScale(Math.min(2, scale + 0.1))}
            className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {downloadable && (
            <a
              href={src}
              download={title}
              className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded"
            >
              <Download className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* PDF Display */}
      <div className="overflow-auto max-h-[800px] flex justify-center p-4">
        <Document
          file={src}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500" />
            </div>
          }
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>
    </div>
  )
}
```

**Usage in MDX:**

```mdx
<PDFEmbed
  src="/pdfs/iowa-state-short-course-2023.pdf"
  title="Iowa State Short Course 2023"
  downloadable={true}
/>
```

### 3. Dark Mode

**Setup with next-themes:**

```tsx
// app/providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  )
}
```

**Theme toggle component:**

```tsx
// components/ui/ThemeToggle.tsx
'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-1 p-1 border rounded-lg">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded ${theme === 'light' ? 'bg-primary-100 text-primary-700' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
        aria-label="Light mode"
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded ${theme === 'dark' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
        aria-label="Dark mode"
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded ${theme === 'system' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
        aria-label="System theme"
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  )
}
```

### 4. Code Syntax Highlighting (Shiki)

**Setup with rehype-pretty-code:**

```js
// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const prettyCodeOptions = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word']
  },
}

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Book, Note, Course],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, prettyCodeOptions],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})
```

**Code block styling:**

```css
/* styles/code.css */
pre {
  @apply overflow-x-auto rounded-lg border border-neutral-200 dark:border-neutral-800 my-4;
}

pre > code {
  @apply grid;
}

code {
  @apply text-sm;
  counter-reset: line;
}

code[data-line-numbers] > .line::before {
  counter-increment: line;
  content: counter(line);
  display: inline-block;
  width: 1rem;
  margin-right: 1.5rem;
  text-align: right;
  color: theme('colors.neutral.500');
}

code .line {
  @apply px-4 border-l-2 border-l-transparent;
}

code .highlighted {
  @apply bg-primary-100 dark:bg-primary-900/30 border-l-primary-500;
}

code .word {
  @apply bg-primary-200 dark:bg-primary-800 rounded px-1;
}
```

**Usage in MDX:**

````mdx
```r {2,4-6} showLineNumbers
# Calculate breeding values
data <- read.csv("phenotypes.csv")

model <- lmer(phenotype ~ (1|animal) + (1|herd), data = data)
blup <- ranef(model)$animal
write.csv(blup, "breeding_values.csv")
```
````

Features:
- Line highlighting: `{2,4-6}`
- Line numbers: `showLineNumbers`
- File names: Add metadata to display filename
- Copy button: Add custom component

---

## Page Implementations

### Home Page

**Key Sections:**

1. **Hero Section**
```tsx
<section className="py-20 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950 dark:to-neutral-950">
  <div className="container">
    <h1 className="text-5xl font-bold mb-6">
      Learn Animal Breeding
    </h1>
    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mb-8">
      Comprehensive resources for animal breeding education.
      Free access to books, courses, and industry tools.
    </p>
    <div className="flex gap-4">
      <Button size="lg" href="/learn/books">
        Browse Books
      </Button>
      <Button size="lg" variant="outline" href="/about">
        Learn More
      </Button>
    </div>
  </div>
</section>
```

2. **Featured Content**
- Latest blog posts
- Recently updated books/notes
- Popular software tools

3. **Quick Links Grid**
- Visual cards linking to main sections
- Icons for each category
- Brief descriptions

4. **Mission Statement**
- Why this site exists
- Current state of animal breeding education
- How users can contribute

### Books Page

**Layout with Sidebar Navigation:**
```tsx
<div className="container py-12">
  <div className="flex gap-8">
    {/* Sidebar with categories */}
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24">
        <h3 className="text-lg font-semibold mb-4">Book Categories</h3>
        <nav className="space-y-1">
          <CategoryLink href="/learn/books/animal-breeding" active>
            Animal Breeding
          </CategoryLink>
          <CategoryLink href="/learn/books/quantitative-genetics">
            Quantitative Genetics
          </CategoryLink>
          <CategoryLink href="/learn/books/bayesian">
            Bayesian Statistics
          </CategoryLink>
          <CategoryLink href="/learn/books/statistics">
            Statistics
          </CategoryLink>
          <CategoryLink href="/learn/books/mathematics">
            Mathematics
          </CategoryLink>
        </nav>
      </div>
    </aside>

    {/* Main content area - 4 columns */}
    <main className="flex-1">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Animal Breeding Books</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          Essential and recommended books for animal breeding and genetics
        </p>
      </header>

      {/* Filter/Sort options */}
      <div className="flex items-center gap-4 mb-8">
        <select className="px-4 py-2 border rounded-lg">
          <option>All Books</option>
          <option>Essential Only</option>
          <option>Recommended</option>
          <option>Supplemental</option>
        </select>
        <select className="px-4 py-2 border rounded-lg">
          <option>All Difficulty Levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
      </div>

      {/* Book grid - 4 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map(book => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>
    </main>
  </div>
</div>
```

**Book Card Component Design:**

```tsx
interface BookCardProps {
  title: string
  authors: string[]
  priority: 'essential' | 'recommended' | 'supplemental'
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  type: 'pdf-download' | 'amazon-link' | 'both'
  pdfLink?: string
  amazonLink?: string
  description: string
  coverImage?: string
  tags: string[]
}

export function BookCard({
  title,
  authors,
  priority,
  difficulty,
  type,
  pdfLink,
  amazonLink,
  description,
  coverImage,
  tags,
}: BookCardProps) {
  return (
    <div className="group relative flex flex-col border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-neutral-900">
      {/* Book Cover or Placeholder */}
      <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 relative overflow-hidden">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <BookOpen className="w-16 h-16 text-primary-400" />
          </div>
        )}

        {/* Priority Badge - Top Left */}
        <div className="absolute top-2 left-2">
          {priority === 'essential' && (
            <Badge variant="solid" className="bg-amber-500 text-white">
              ⭐ Essential
            </Badge>
          )}
          {priority === 'recommended' && (
            <Badge variant="solid" className="bg-blue-500 text-white">
              ⭐ Recommended
            </Badge>
          )}
          {priority === 'supplemental' && (
            <Badge variant="outline" className="bg-white/90">
              📚 Supplemental
            </Badge>
          )}
        </div>

        {/* Difficulty Badge - Top Right */}
        <div className="absolute top-2 right-2">
          {difficulty === 'beginner' && (
            <Badge variant="solid" className="bg-green-500 text-white text-xs">
              Beginner
            </Badge>
          )}
          {difficulty === 'intermediate' && (
            <Badge variant="solid" className="bg-orange-500 text-white text-xs">
              Intermediate
            </Badge>
          )}
          {difficulty === 'advanced' && (
            <Badge variant="solid" className="bg-red-500 text-white text-xs">
              Advanced
            </Badge>
          )}
        </div>
      </div>

      {/* Book Info */}
      <div className="flex-1 p-4 flex flex-col">
        <h3 className="font-semibold text-base mb-1 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
          {authors.join(', ')}
        </p>

        <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {(type === 'pdf-download' || type === 'both') && pdfLink && (
            <div className="flex gap-2">
              <Button
                variant="primary"
                size="sm"
                className="flex-1"
                href={pdfLink}
                target="_blank"
              >
                <Eye className="w-4 h-4 mr-1" />
                View PDF
              </Button>
              <Button
                variant="outline"
                size="sm"
                href={pdfLink}
                download
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
          )}

          {(type === 'amazon-link' || type === 'both') && amazonLink && (
            <Button
              variant={type === 'both' ? 'outline' : 'primary'}
              size="sm"
              className="w-full"
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart className="w-4 h-4 mr-1" />
              {type === 'both' ? 'Buy Print Copy' : 'View on Amazon'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
```

**Book Data Structure (JSON):**

```json
// content/books/animal-breeding/recommended-books.json
{
  "category": "Animal Breeding",
  "books": [
    {
      "id": "linear-models-mrode",
      "title": "Linear Models for the Prediction of Animal Breeding Values",
      "authors": ["Raphael A. Mrode"],
      "priority": "essential",
      "difficulty": "advanced",
      "type": "both",
      "pdfLink": "/pdfs/books/animal-breeding/mrode-linear-models.pdf",
      "amazonLink": "https://amazon.com/...",
      "description": "Comprehensive treatment of linear models and BLUP for animal breeding. Essential for understanding modern genetic evaluation.",
      "coverImage": "/images/books/mrode-cover.jpg",
      "tags": ["BLUP", "linear models", "genetic evaluation"],
      "isbn": "978-1845934057",
      "publishYear": 2014,
      "edition": "3rd"
    },
    {
      "id": "intro-quant-gen",
      "title": "Introduction to Quantitative Genetics",
      "authors": ["Douglas S. Falconer", "Trudy F.C. Mackay"],
      "priority": "essential",
      "difficulty": "intermediate",
      "type": "amazon-link",
      "amazonLink": "https://amazon.com/...",
      "description": "The foundational textbook for quantitative genetics. Covers heritability, selection, and breeding theory.",
      "coverImage": "/images/books/falconer-mackay-cover.jpg",
      "tags": ["quantitative genetics", "heritability", "selection"],
      "isbn": "978-0582243026",
      "publishYear": 1996,
      "edition": "4th"
    }
  ]
}
```

### Individual Book/Content Page

**Layout:**
```tsx
<article className="max-w-4xl mx-auto">
  {/* Breadcrumbs */}
  <Breadcrumbs />

  {/* Article header */}
  <header className="mb-8">
    <Badge>{category}</Badge>
    <h1>{title}</h1>
    <p className="text-lg text-neutral-600">{description}</p>
    <div className="flex items-center gap-4 text-sm text-neutral-500">
      <span>Last updated: {lastUpdated}</span>
      <span>•</span>
      <span>{estimatedTime} read</span>
    </div>
  </header>

  {/* Two-column layout: TOC + Content */}
  <div className="grid lg:grid-cols-4 gap-8">
    <aside className="lg:col-span-1">
      <TableOfContents headings={headings} />
    </aside>

    <div className="lg:col-span-3">
      <MDXContent code={content} />

      {/* Previous/Next navigation */}
      <nav className="flex justify-between mt-12 pt-8 border-t">
        {previousPage && <Link href={previousPage.url}>← {previousPage.title}</Link>}
        {nextPage && <Link href={nextPage.url}>{nextPage.title} →</Link>}
      </nav>
    </div>
  </div>
</article>
```

### Software Tools Page

**Layout:**
```tsx
<div className="space-y-12">
  <header>
    <h1>Software Tools for Animal Breeding</h1>
    <p>Industry-standard software for breeding programs, genetic evaluation, and selection</p>
  </header>

  {/* Categorized software listings */}
  {categories.map(category => (
    <section key={category.name}>
      <h2>{category.name}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tools.map(tool => (
          <SoftwareCard
            key={tool.name}
            name={tool.name}
            description={tool.description}
            link={tool.link}
            tags={tool.tags}
            platform={tool.platform} // Windows, Mac, Linux, Web
            license={tool.license}   // Free, Commercial, Open Source
          />
        ))}
      </div>
    </section>
  ))}
</div>
```

### YouTube Resources Page

**Structured outline with embedded videos:**

```tsx
<div className="space-y-12">
  <header>
    <h1>Video Learning Resources</h1>
    <p>Curated YouTube playlists organized by topic</p>
  </header>

  {/* Topic sections */}
  <section>
    <h2>Linear Algebra Fundamentals</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {videos.map(video => (
        <VideoCard
          key={video.id}
          title={video.title}
          channel={video.channel}
          videoId={video.youtubeId}
          duration={video.duration}
          topics={video.topics}
        />
      ))}
    </div>
  </section>

  <section>
    <h2>Statistics for Animal Breeding</h2>
    {/* More video cards */}
  </section>

  <section>
    <h2>Mixed Model Equations (MME)</h2>
    {/* More video cards */}
  </section>
</div>
```

### Blog

**Blog listing page:**
```tsx
<div className="max-w-4xl mx-auto">
  <header className="mb-12">
    <h1>Blog</h1>
    <p>Insights, updates, and thoughts on animal breeding</p>
  </header>

  {/* Featured post */}
  {featuredPost && (
    <FeaturedBlogCard {...featuredPost} />
  )}

  {/* Categories filter */}
  <div className="flex gap-2 mb-8">
    {categories.map(cat => (
      <Badge key={cat} variant="outline">
        {cat}
      </Badge>
    ))}
  </div>

  {/* Blog posts grid */}
  <div className="grid md:grid-cols-2 gap-8">
    {posts.map(post => (
      <BlogCard key={post.slug} {...post} />
    ))}
  </div>

  {/* Pagination */}
  <Pagination currentPage={page} totalPages={totalPages} />
</div>
```

**Individual blog post:**
```tsx
<article className="max-w-3xl mx-auto">
  <header className="mb-8">
    {mainImage && (
      <Image
        src={mainImage}
        alt={title}
        width={1200}
        height={630}
        className="rounded-lg mb-6"
      />
    )}

    <div className="flex gap-2 mb-4">
      {categories.map(cat => (
        <Badge key={cat}>{cat}</Badge>
      ))}
    </div>

    <h1>{title}</h1>

    <div className="flex items-center gap-4 mt-4">
      {author.image && (
        <Image
          src={author.image}
          alt={author.name}
          width={48}
          height={48}
          className="rounded-full"
        />
      )}
      <div>
        <p className="font-medium">{author.name}</p>
        <time className="text-sm text-neutral-600">
          {publishedAt}
        </time>
      </div>
    </div>
  </header>

  {/* Sanity Portable Text content */}
  <div className="prose dark:prose-invert max-w-none">
    <PortableText value={body} />
  </div>

  {/* Share buttons */}
  <ShareButtons url={url} title={title} />

  {/* Related posts */}
  <RelatedPosts posts={relatedPosts} />
</article>
```

---

## SEO & Metadata

### Metadata Configuration

```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://learnanimalbreeding.com'),
  title: {
    default: 'Learn Animal Breeding',
    template: '%s | Learn Animal Breeding'
  },
  description: 'Comprehensive educational resources for animal breeding, quantitative genetics, and breeding program management.',
  keywords: ['animal breeding', 'quantitative genetics', 'genetics', 'breeding', 'livestock', 'education'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://learnanimalbreeding.com',
    title: 'Learn Animal Breeding',
    description: 'Free educational resources for animal breeding and quantitative genetics',
    siteName: 'Learn Animal Breeding',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Learn Animal Breeding'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Animal Breeding',
    description: 'Free educational resources for animal breeding',
    images: ['/og-image.png'],
    creator: '@yourtwitterhandle'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}
```

### Dynamic Metadata for Content Pages

```typescript
// app/learn/books/[slug]/page.tsx
import { Metadata } from 'next'

export async function generateMetadata({ params }): Promise<Metadata> {
  const book = await getBook(params.slug)

  return {
    title: book.title,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      type: 'article',
      publishedTime: book.publishedAt,
      modifiedTime: book.lastUpdated,
      authors: [book.author],
      tags: book.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: book.title,
      description: book.description,
    }
  }
}
```

### Sitemap Generation

```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { allBooks, allNotes, allCourses } from 'contentlayer/generated'
import { getBlogPosts } from '@/lib/sanity/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://learnanimalbreeding.com'

  // Static pages
  const staticPages = [
    '',
    '/about',
    '/learn/books',
    '/learn/course-notes',
    '/learn/my-notes',
    '/learn/short-courses',
    '/learn/youtube',
    '/resources/software',
    '/resources/skills',
    '/resources/journals',
    '/blog',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Book pages
  const bookPages = allBooks.map(book => ({
    url: `${baseUrl}${book.url}`,
    lastModified: new Date(book.lastUpdated),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Blog posts
  const blogPosts = await getBlogPosts()
  const blogPages = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...bookPages, ...blogPages]
}
```

### robots.txt

```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://learnanimalbreeding.com/sitemap.xml',
  }
}
```

### Structured Data

```tsx
// Add JSON-LD structured data for better SEO
export function ArticleStructuredData({ article }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    datePublished: article.publishedAt,
    dateModified: article.lastUpdated,
    image: article.image,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
```

---

## Development Setup

### Initial Setup Commands

```bash
# Create Next.js project with TypeScript
npx create-next-app@latest learn-animal-breeding --typescript --tailwind --app --src-dir --import-alias "@/*"

cd learn-animal-breeding

# Install core dependencies
npm install next@latest react@latest react-dom@latest

# Install UI dependencies
npm install @tailwindcss/typography clsx tailwind-merge next-themes
npm install lucide-react

# Install content dependencies
npm install contentlayer next-contentlayer date-fns
npm install rehype-pretty-code rehype-slug rehype-autolink-headings
npm install shiki

# Install search
npm install flexsearch
npm install -D @types/flexsearch

# Install PDF viewer
npm install react-pdf pdfjs-dist
npm install -D @types/react-pdf

# Install Sanity
npm install @sanity/client @sanity/image-url next-sanity
npm install @portabletext/react
npm install -g @sanity/cli
sanity init  # Follow prompts to set up Sanity project

# Development dependencies
npm install -D @types/node @types/react @types/react-dom
npm install -D eslint eslint-config-next
npm install -D prettier prettier-plugin-tailwindcss

# Optional: Analytics
npm install @vercel/analytics
```

### Environment Variables

Create `.env.local`:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_token_here

# Optional: Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Development Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "contentlayer build && next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,md,mdx}\"",
    "type-check": "tsc --noEmit",
    "sanity": "cd sanity && sanity dev",
    "sanity:deploy": "cd sanity && sanity deploy"
  }
}
```

### Git Setup

`.gitignore` additions:
```
# Environment
.env.local
.env

# Contentlayer
.contentlayer

# Sanity
sanity/dist

# PDFs (if large)
public/pdfs/*.pdf
```

---

## Deployment

### Vercel Deployment

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/learn-animal-breeding.git
git push -u origin main
```

2. **Connect to Vercel:**
- Go to vercel.com
- Import your GitHub repository
- Configure environment variables
- Deploy

3. **Environment Variables on Vercel:**
Add all variables from `.env.local` to Vercel dashboard

4. **Custom Domain:**
- Add your domain in Vercel dashboard
- Update DNS records as instructed
- SSL certificate automatically provisioned

### Build Configuration

```js
// next.config.js
const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = withContentlayer(nextConfig)
```

### Performance Optimization

1. **Image Optimization:**
- Use Next.js Image component
- Serve images from Sanity CDN
- Enable AVIF/WebP formats

2. **Code Splitting:**
- Dynamic imports for heavy components
- Route-based code splitting (automatic with App Router)

3. **Caching Strategy:**
```typescript
// Example: ISR for blog posts
export const revalidate = 3600 // Revalidate every hour

// Example: Static generation for books
export async function generateStaticParams() {
  return allBooks.map(book => ({
    slug: book.slug
  }))
}
```

4. **Bundle Analysis:**
```bash
npm install @next/bundle-analyzer

# next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
```

---

## Content Creation Guidelines

### Writing MDX Content

**Best Practices:**

1. **Clear hierarchy:**
```mdx
# Main Title (H1) - Only one per page

## Major Sections (H2)

### Subsections (H3)

#### Details (H4)
```

2. **Use callouts for important info:**
```mdx
<Callout type="info">
  Important concept to understand before proceeding.
</Callout>
```

3. **Code examples with context:**
```mdx
Here's how to calculate heritability in R:

```r
# Load required packages
library(lme4)

# Calculate heritability
heritability <- var_additive / var_phenotypic
print(paste("h² =", round(heritability, 3)))
```

This gives us the narrow-sense heritability...
```

4. **Progressive disclosure:**
- Start with basics
- Build complexity gradually
- Use expandable sections for advanced topics

### Content Organization

**File naming conventions:**
```
01-introduction.mdx
02-basic-concepts.mdx
03-advanced-topics.mdx
```

**Frontmatter template:**
```yaml
---
title: "Clear, Descriptive Title"
description: "One-sentence description for SEO and previews"
category: "Quantitative Genetics"
tags: ["heritability", "selection", "breeding values"]
author: "Your Name"
lastUpdated: "2025-01-15"
difficulty: "beginner" | "intermediate" | "advanced"
estimatedTime: "30 min"
featured: false
prerequisites: ["basic-statistics", "genetics-101"]
---
```

---

## PDF Organization & Naming Guide

### Overview

This section provides comprehensive guidelines for organizing and naming PDF files in your project. Following these conventions ensures consistency, easy maintenance, and optimal user experience.

### Directory Structure

All PDFs are stored in the `public/pdfs/` directory with the following organization:

```
public/pdfs/
├── books/                           # Free book PDFs
│   ├── animal-breeding/
│   ├── quantitative-genetics/
│   ├── bayesian/
│   ├── statistics/
│   └── mathematics/
├── course-notes/                    # Course materials
│   ├── animal-breeding/
│   └── statistics/
├── my-notes/                        # Your personal notes
│   ├── animal-breeding/
│   └── statistics/
└── short-courses/                   # Short course materials
    ├── iowa-state/
    └── une-australia/
```

### Naming Conventions

**General Rules:**
1. Use lowercase letters only
2. Use hyphens (`-`) instead of spaces or underscores
3. Keep names descriptive but concise (max 60 characters)
4. Include author/source when applicable
5. Add year if multiple editions exist

**Format Pattern:**
```
[author-lastname]-[short-title]-[year/edition].pdf
```

### Specific Examples by Category

#### Books

**Pattern:** `author-lastname-short-title-year.pdf`

```bash
# Examples:
public/pdfs/books/animal-breeding/
├── mrode-linear-models-2014.pdf
├── henderson-applications-linear-models-1984.pdf
├── lynch-walsh-genetics-analysis-1998.pdf
└── van-vleck-variance-components-1998.pdf

public/pdfs/books/quantitative-genetics/
├── falconer-mackay-intro-quant-genetics-1996.pdf
├── walsh-lynch-evolution-genetics-vol1-2018.pdf
└── hill-quantitative-genetics-primer-2010.pdf

public/pdfs/books/bayesian/
├── gelman-bayesian-data-analysis-2013.pdf
├── sorensen-gianola-likelihood-bayesian-2002.pdf
└── robert-bayesian-choice-2007.pdf

public/pdfs/books/statistics/
├── casella-berger-statistical-inference-2002.pdf
├── hastie-elements-statistical-learning-2009.pdf
└── montgomery-design-experiments-2017.pdf

public/pdfs/books/mathematics/
├── strang-linear-algebra-2016.pdf
├── searle-matrix-algebra-1982.pdf
└── gentle-matrix-algebra-2007.pdf
```

#### Course Notes

**Pattern:** `university-code-topic-year.pdf` or `instructor-lastname-topic-year.pdf`

```bash
public/pdfs/course-notes/animal-breeding/
├── iowa-state-ansci501-breeding-2023.pdf
├── umn-ansci5201-selection-2022.pdf
├── cornell-an531-quantitative-genetics-2021.pdf
└── colorado-state-breeding-methods-2023.pdf

public/pdfs/course-notes/statistics/
├── iowa-state-stat510-design-experiments-2023.pdf
├── umn-stat5301-linear-models-2022.pdf
└── purdue-mixed-models-2023.pdf
```

#### Your Personal Notes

**Pattern:** `topic-descriptive-name.pdf` or `topic-date.pdf`

```bash
public/pdfs/my-notes/animal-breeding/
├── genomic-selection-overview.pdf
├── mating-strategies-2024.pdf
├── variance-components-tutorial.pdf
└── blup-implementation-guide.pdf

public/pdfs/my-notes/statistics/
├── mixed-models-comparison.pdf
├── bayesian-mcmc-notes.pdf
├── experimental-design-guide.pdf
└── variance-estimation-methods.pdf
```

#### Short Courses

**Pattern:** `institution-course-name-year.pdf` or `institution-topic-date.pdf`

```bash
public/pdfs/short-courses/iowa-state/
├── iowa-state-breeding-genomics-2023.pdf
├── iowa-state-statistical-genetics-2022.pdf
├── iowa-state-mixed-models-2023.pdf
└── iowa-state-selection-theory-2021.pdf

public/pdfs/short-courses/une-australia/
├── une-animal-breeding-fundamentals-2023.pdf
├── une-genomic-prediction-2022.pdf
└── une-advanced-selection-2023.pdf
```

### File Size Considerations

**Optimization Guidelines:**
- Keep individual PDFs under 10MB when possible
- For larger files (>10MB):
  - Consider splitting into chapters
  - Compress using Adobe Acrobat or online tools
  - Reduce image quality if acceptable
  - Remove unnecessary metadata

**Large File Handling:**
```bash
# For books over 20MB, split into chapters:
public/pdfs/books/animal-breeding/
├── mrode-linear-models-2014/
│   ├── chapter-01-introduction.pdf
│   ├── chapter-02-blup.pdf
│   ├── chapter-03-maternal-effects.pdf
│   └── chapter-04-non-additive.pdf
```

### Metadata Requirements

For each PDF in your books collection, maintain a corresponding JSON file:

```json
// content/books/animal-breeding/recommended-books.json
{
  "category": "Animal Breeding",
  "books": [
    {
      "id": "mrode-linear-models",
      "title": "Linear Models for the Prediction of Animal Breeding Values",
      "authors": ["Raphael A. Mrode"],
      "priority": "essential",
      "difficulty": "advanced",
      "type": "both",
      "pdfLink": "/pdfs/books/animal-breeding/mrode-linear-models-2014.pdf",
      "amazonLink": "https://amazon.com/...",
      "description": "Comprehensive treatment of linear models and BLUP",
      "coverImage": "/images/books/mrode-cover.jpg",
      "tags": ["BLUP", "linear models", "genetic evaluation"],
      "fileSize": "8.5 MB",
      "pages": 368,
      "isbn": "978-1845934057",
      "publishYear": 2014,
      "edition": "3rd"
    }
  ]
}
```

### Adding New PDFs - Step-by-Step

**1. Determine the correct category:**
- Books: Reference textbooks and comprehensive resources
- Course Notes: Class materials from universities
- My Notes: Your personal compiled notes
- Short Courses: Workshop and short course materials

**2. Name the file according to conventions:**
```bash
# Bad examples:
Book 1.pdf
MrodeLinearModels.pdf
mrode_2014_final_v2.pdf

# Good examples:
mrode-linear-models-2014.pdf
falconer-mackay-quant-genetics-1996.pdf
iowa-state-breeding-genomics-2023.pdf
```

**3. Place in correct directory:**
```bash
# Navigate to the appropriate directory
cd public/pdfs/books/animal-breeding/

# Copy or move your file
cp ~/Downloads/book.pdf mrode-linear-models-2014.pdf
```

**4. Add metadata (for books):**

Create or update the JSON file in `content/books/[category]/recommended-books.json`

**5. Add cover image (optional but recommended):**
```bash
# Place book cover
public/images/books/
└── mrode-cover.jpg  # 400x600px recommended
```

**6. Test the link:**
- Visit the books page in your browser
- Click "View PDF" button
- Verify PDF opens correctly
- Test download button

### Quick Reference Table

| Content Type | Location | Naming Pattern | Example |
|-------------|----------|----------------|---------|
| **Books** | `public/pdfs/books/[category]/` | `author-title-year.pdf` | `mrode-linear-models-2014.pdf` |
| **Course Notes** | `public/pdfs/course-notes/[category]/` | `institution-topic-year.pdf` | `iowa-state-ansci501-2023.pdf` |
| **Your Notes** | `public/pdfs/my-notes/[category]/` | `topic-description.pdf` | `genomic-selection-overview.pdf` |
| **Short Courses** | `public/pdfs/short-courses/[institution]/` | `institution-topic-year.pdf` | `iowa-state-breeding-2023.pdf` |

### Copyright & Legal Considerations

**Important Guidelines:**

1. **Public Domain/Free Books:**
   - Clearly out of copyright (70+ years old)
   - Released under Creative Commons
   - Author has given explicit permission
   - Published by institutions with open access policies

2. **Copyrighted Books:**
   - **DO NOT** upload full copyrighted books
   - Link to Amazon or publisher website instead
   - Set `type: "amazon-link"` in JSON metadata
   - Provide description and recommendation only

3. **Course Notes:**
   - Ensure you have permission to share
   - If unsure, link to original source instead
   - Attribute original instructors/universities

4. **Your Personal Notes:**
   - Original content you've created is fine
   - If derived from copyrighted sources, be cautious
   - Consider adding disclaimer or attribution

**Example JSON for copyrighted book:**
```json
{
  "id": "recent-textbook",
  "title": "Recent Animal Breeding Textbook",
  "authors": ["Author Name"],
  "type": "amazon-link",
  "amazonLink": "https://amazon.com/...",
  "description": "Excellent modern treatment of genomic selection"
  // NO pdfLink - just link to purchase
}
```

### Git Considerations

**Large Files & Git:**

Option 1: Track PDFs in Git (if repository is private and files are small)
```bash
git add public/pdfs/books/animal-breeding/mrode-linear-models-2014.pdf
git commit -m "Add Mrode linear models textbook"
```

Option 2: Use Git LFS for large files
```bash
git lfs track "*.pdf"
git add .gitattributes
git add public/pdfs/books/animal-breeding/mrode-linear-models-2014.pdf
git commit -m "Add Mrode textbook via LFS"
```

Option 3: Exclude from Git (gitignore) and host separately
```bash
# .gitignore
public/pdfs/**/*.pdf
!public/pdfs/README.md

# Then host PDFs on Vercel or external storage
```

**Recommended Approach for Vercel:**
- Small PDFs (<5MB): Include in Git
- Large PDFs (>5MB): Use Vercel's file system or external CDN
- Very large (>20MB): Consider external hosting (Cloudflare R2, AWS S3)

### Maintenance Checklist

**Monthly:**
- [ ] Check for broken PDF links
- [ ] Verify file sizes and consider optimization
- [ ] Update metadata for any new additions
- [ ] Remove outdated or unnecessary files

**Quarterly:**
- [ ] Review naming consistency
- [ ] Update cover images for books
- [ ] Check for newer editions of textbooks
- [ ] Verify copyright compliance

**Annually:**
- [ ] Audit entire PDF collection
- [ ] Archive old course notes to separate directory
- [ ] Update short course materials
- [ ] Review and update recommendations

---

## Maintenance & Future Enhancements

### Regular Maintenance Tasks

1. **Content updates:**
- Review and update outdated content quarterly
- Add new courses and materials as available
- Update software listings

2. **Performance monitoring:**
- Check Vercel Analytics monthly
- Review Core Web Vitals
- Optimize images and assets

3. **Dependency updates:**
```bash
npm outdated
npm update
```

4. **SEO monitoring:**
- Google Search Console
- Check for broken links
- Update sitemap

### Future Feature Ideas

1. **Interactive calculators:**
- Heritability calculator
- Selection response predictor
- Inbreeding coefficient calculator

2. **User accounts:**
- Save progress through courses
- Bookmark favorite resources
- Personal notes and annotations

3. **Community features:**
- Discussion forum
- Q&A section
- User-contributed resources

4. **Assessment tools:**
- Quizzes for each chapter
- Certificates of completion
- Practice problems

5. **Video hosting:**
- Host videos directly instead of YouTube links
- Create custom video player
- Transcript generation

6. **Multilingual support:**
- Translate content to Spanish, Portuguese
- i18n routing
- Language switcher

7. **Newsletter:**
- Email subscription
- Regular updates on new content
- Curated resources

---

## Conclusion

This CLAUDE.md document serves as the comprehensive guide for building the Animal Breeding Learning Platform. It covers:

✅ **Architecture:** Next.js 14, TypeScript, Tailwind CSS
✅ **Content Management:** MDX + Sanity CMS hybrid approach
✅ **Core Features:** Search, PDF viewing, dark mode, syntax highlighting
✅ **Design System:** Professional, accessible, responsive
✅ **SEO Optimization:** Metadata, sitemaps, structured data
✅ **Deployment:** Vercel with optimal configuration

### Next Steps for Implementation:

1. Initialize Next.js project with dependencies
2. Set up project structure and configuration
3. Implement design system and core components
4. Create navigation and layout components
5. Set up Contentlayer for MDX processing
6. Configure Sanity CMS for blog
7. Build main pages (Home, Books, Resources, etc.)
8. Implement search functionality
9. Add PDF viewer component
10. Deploy to Vercel

### Key Principles:

- **Simple & Professional:** Clean design focused on content
- **Performance:** Fast loading, optimized assets
- **Accessibility:** WCAG compliance, semantic HTML
- **Maintainability:** Well-organized code, clear documentation
- **Scalability:** Easy to add content and features

This website will serve as a valuable resource for the animal breeding community, preserving knowledge and making education accessible to all.

---

**Document Version:** 2.0
**Last Updated:** 2025-11-01
**Author:** Claude (Anthropic)
**For:** Austin Putz - Learn Animal Breeding Platform

---

## Changelog

### Version 2.0 (2025-11-01)

**Major Updates:**
- ✅ Updated book categories: Animal Breeding, Quantitative Genetics, Bayesian, Statistics, Mathematics
- ✅ Added 10 software categories: Variance Components, Evaluations, Inbreeding, Genomic Processing, GWAS, Imputation, Breed Composition, Simulation, Selection Index, Miscellaneous
- ✅ Added course notes categories: Animal Breeding, Statistics
- ✅ Added personal notes categories: Animal Breeding, Statistics
- ✅ Added short courses categories: Iowa State, UNE - Australia
- ✅ Implemented sidebar navigation for all content sections
- ✅ Designed comprehensive book card system with priority and difficulty badges
- ✅ Added dual download/view PDF functionality
- ✅ Created extensive PDF organization guide with naming conventions
- ✅ Updated project folder structure to match new categories
- ✅ Added 4-column responsive grid layout for content cards
- ✅ Included copyright and legal considerations for PDFs
- ✅ Added Git LFS guidance for large files

### Version 1.0 (2025-01-31)
- Initial CLAUDE.md creation
- Basic project structure and tech stack
- Core features implementation
- Design system foundation
