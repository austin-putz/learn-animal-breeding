import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { CategoryList } from '@/components/layout/CategoryList'
import { Colophon } from '@/components/layout/Colophon'
import { softwareCategories } from '@/lib/navigation'
import { FileText } from 'lucide-react'

export const metadata = {
  title: 'Software Tools',
  description:
    'Catalog of software for animal breeding, quantitative genetics and genomic analysis, from variance component estimation to breeding program simulation.',
}

export default function SoftwarePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Software' }]}
        title="Software Tools"
        description="Comprehensive catalog of software tools for animal breeding, quantitative genetics, and genomic analysis. From variance component estimation to breeding program simulation."
      />

      <div className="mt-7 max-w-[72ch] rounded-lg bg-sunken p-5">
        <div className="flex items-start gap-3">
          <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-moss" strokeWidth={1.75} />
          <div className="flex flex-col gap-1.5">
            <p className="text-[13.5px] text-muted">
              Nice short article by Ignacy Misztal on software in animal breeding:
            </p>
            <a
              href="http://nce.ads.uga.edu/~ignacy/numpub/oldpapers/wc94.PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit border-b border-transparent text-[13.5px] font-medium text-moss transition-colors hover:border-moss"
            >
              View PDF
            </a>
          </div>
        </div>
      </div>

      <CategoryList items={softwareCategories} unit="tools" unitSingular="tool" />

      <section className="mt-14 border-t border-line pt-7">
        <h2 className="group-label mb-5">About These Tools</h2>
        <div className="grid gap-8 text-[13.5px] leading-relaxed text-muted md:grid-cols-3">
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">
              Open Source and Commercial
            </span>
            <p>
              This list includes both free open-source tools and commercial software. Paid tools
              are marked Commercial.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">Active Development</span>
            <p>
              Most tools here are actively maintained by research groups. Anything in development
              or no longer maintained is labelled as such.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
            <span className="font-display text-sm font-semibold text-ink">University Resources</span>
            <p>
              Check with your institution&rsquo;s IT department or library for site licenses for
              commercial software like ASReml or MiXBLUP.
            </p>
          </div>
        </div>
      </section>

      <Colophon>
        Missing a tool, or spotted one that has moved? The catalog is maintained by hand, so
        corrections are welcome.
      </Colophon>
    </PageShell>
  )
}
