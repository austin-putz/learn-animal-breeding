import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold tracking-tight mb-6 mt-8">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold tracking-tight mb-4 mt-8 pb-2 border-b border-neutral-200 dark:border-neutral-800">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mb-3 mt-6">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold mb-2 mt-4">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-neutral-700 dark:text-neutral-300">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-neutral-700 dark:text-neutral-300">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="ml-4">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 italic my-4 text-neutral-600 dark:text-neutral-400">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-neutral-100 dark:bg-neutral-800 rounded px-1.5 py-0.5 text-sm font-mono text-primary-600 dark:text-primary-400">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-neutral-900 dark:bg-neutral-950 rounded-lg p-4 overflow-x-auto mb-4 border border-neutral-700">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary-600 dark:text-primary-400 hover:underline"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-neutral-200 dark:divide-neutral-800">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-2 text-left text-sm font-semibold bg-neutral-50 dark:bg-neutral-900">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-2 text-sm border-t border-neutral-200 dark:border-neutral-800">
        {children}
      </td>
    ),
    ...components,
  }
}
