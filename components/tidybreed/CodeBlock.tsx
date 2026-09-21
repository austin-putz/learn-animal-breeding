import { codeToHtml } from 'shiki'

interface CodeBlockProps {
  code: string
  lang?: 'r' | 'yaml' | 'sql'
  /** Shown in the title bar, the way an editor tab would. */
  filename?: string
  className?: string
}

/**
 * A code sample rendered at build time with shiki. The panel is always dark,
 * in both themes, the same way the home masthead is: code reads as a
 * terminal, and the hero this page opens with is dark already.
 */
export async function CodeBlock({ code, lang = 'r', filename, className = '' }: CodeBlockProps) {
  const html = await codeToHtml(code.trim(), {
    lang,
    theme: 'vitesse-dark',
  })

  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/10 bg-[#0B120E] shadow-xl ${className}`}
    >
      {filename && (
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </span>
          <span className="ml-1 font-mono text-[11px] tracking-[0.04em] text-[#7FB093]/80">
            {filename}
          </span>
        </div>
      )}
      <div
        className="tb-code overflow-x-auto px-5 py-4 text-[12.5px] leading-[1.7] [&_pre]:!bg-transparent [&_code]:font-mono"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
