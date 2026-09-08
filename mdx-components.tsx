import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'

/**
 * Custom renderers for MDX content. Everything resolves through the design
 * tokens, so a post reads the same in both themes with no `dark:` variants.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mb-6 mt-10 font-display text-3xl font-bold tracking-tight">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-11 border-b border-line pb-2 font-display text-2xl font-semibold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-display text-xl font-semibold tracking-tight">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="mb-2 mt-6 font-display text-base font-semibold">{children}</h4>
    ),
    p: ({ children }) => <p className="mb-5 leading-[1.75] text-muted">{children}</p>,
    ul: ({ children }) => (
      <ul className="mb-5 flex list-disc flex-col gap-2 pl-5 leading-[1.7] text-muted marker:text-faint">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-5 flex list-decimal flex-col gap-2 pl-5 leading-[1.7] text-muted marker:text-faint">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="pl-1">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-moss pl-5 text-muted [&>p]:mb-0">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="rounded-sm bg-sunken px-1.5 py-0.5 font-mono text-[0.875em] text-ink">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="mb-6 overflow-x-auto rounded-lg border border-line bg-sunken p-4 text-[13px] leading-relaxed [&_code]:bg-transparent [&_code]:p-0">
        {children}
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="border-b border-moss/40 font-medium text-moss transition-colors hover:border-moss"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    hr: () => <hr className="my-10 border-line" />,
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className="my-6 rounded-sm border border-line"
        {...(props as ImageProps)}
      />
    ),
    table: ({ children }) => (
      <div className="mb-6 overflow-x-auto rounded-lg border border-line">
        <table className="min-w-full text-left text-[13.5px]">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border-b border-line bg-sunken px-4 py-2.5 font-display text-[12.5px] font-semibold text-ink">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border-t border-line px-4 py-2.5 align-top text-muted">{children}</td>
    ),
    ...components,
  }
}
