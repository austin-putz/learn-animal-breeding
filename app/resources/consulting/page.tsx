import { Globe, ArrowUpRight } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { Colophon } from '@/components/layout/Colophon'

export const metadata = {
  title: 'Consulting Services',
  description:
    'Consulting firms specializing in animal breeding, quantitative genetics, and genetic evaluation.',
}

interface ServiceBlock {
  heading: string
  items: React.ReactNode[]
}

interface Firm {
  name: string
  tagline: string
  href: string
  domain: string
  intro: string
  blocks: ServiceBlock[]
  note: { label: string; text: string }
}

const firms: Firm[] = [
  {
    name: 'AbacusBio',
    tagline: 'International Agriscience Consulting Firm (Est. 2001)',
    href: 'https://abacusbio.com/',
    domain: 'abacusbio.com',
    intro:
      'AbacusBio delivers advanced genetic insights, strategic economic analysis, and sustainable innovations for the agricultural sector. With offices in New Zealand, Australia, UK, and North America, they have delivered projects across 30+ countries.',
    blocks: [
      {
        heading: 'Genetic Improvement Services',
        items: [
          'Breeding strategy design and optimization',
          'Trait prioritization and economic evaluation',
          'Genetic and genomic evaluation services',
          'Selection and mating optimization',
          'Data strategy development',
        ],
      },
      {
        heading: 'R&D and Technology Assessment',
        items: [
          'Technical feasibility appraisals',
          'Market and adoption analysis',
          'Impact assessment and review',
          'Business case development',
          'Emerging technology evaluation',
        ],
      },
      {
        heading: 'Agribusiness Consulting',
        items: [
          'Farm systems modeling and optimization',
          'Environmental impact quantification',
          'Revenue stream development',
          'Production and supply chain analysis',
        ],
      },
      {
        heading: 'Proprietary Tools',
        items: [
          <>
            <strong className="font-medium text-ink">Dtreo:</strong> Performance tracking and genetic
            analysis
          </>,
          <>
            <strong className="font-medium text-ink">IndexSim:</strong> Interactive selection index
            simulator
          </>,
          <>
            <strong className="font-medium text-ink">Ani-Mate:</strong> Breeding optimization and
            inbreeding management
          </>,
        ],
      },
    ],
    note: {
      label: 'Notable Impact',
      text: 'Projects have influenced over 220 million hectares (14% of global arable land). Developed breeding objectives for 6 major Angus herdbooks worldwide. Improved New Zealand dairy fertility EBV predictive ability by 68%.',
    },
  },
  {
    name: 'Helical',
    tagline: 'Advanced Genetic Data Management Solutions',
    href: 'https://www.helicalco.com/',
    domain: 'helicalco.com',
    intro:
      'Helical provides advanced genetic data management and genomic prediction solutions for the animal breeding industry. Founded by leading researchers in quantitative genetics, they offer cutting-edge tools and consulting services.',
    blocks: [
      {
        heading: 'Core Services',
        items: [
          'SNP database management',
          'Genomic prediction solutions',
          'Genetic evaluation consulting',
          'Data-driven breeding strategies',
          'Custom software development',
        ],
      },
      {
        heading: 'Technology',
        items: [
          'BOLT software suite',
          'Advanced genomic evaluation tools',
          'High-performance computing solutions',
          'Integration with existing systems',
        ],
      },
    ],
    note: {
      label: 'Expertise',
      text: 'Founded by world-renowned quantitative geneticists with decades of experience in animal breeding, genetic evaluation, and genomic prediction.',
    },
  },
]

const reasons = [
  {
    label: 'Expertise',
    text: 'Access specialized knowledge in breeding program design, genomic selection, and genetic evaluation that may not be available in-house.',
  },
  {
    label: 'Objectivity',
    text: 'Independent assessment of your breeding strategies, technologies, and data infrastructure with unbiased recommendations.',
  },
  {
    label: 'Efficiency',
    text: 'Accelerate your breeding program development with proven methodologies and avoid costly mistakes through expert guidance.',
  },
]

export default function ConsultingPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Consulting' }]}
        title="Consulting Services"
        description="Professional consulting firms specializing in animal breeding, quantitative genetics, and genetic evaluation"
      />

      {firms.map((firm) => (
        <section key={firm.name} className="pt-12">
          <div className="border-t border-line pt-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">{firm.name}</h2>
            <p className="mt-1 text-[13.5px] text-muted">{firm.tagline}</p>
            <a
              href={firm.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 border-b border-transparent text-[13px] font-medium text-moss transition-colors hover:border-moss"
            >
              <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
              {firm.domain}
              <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
            </a>

            <p className="mt-5 max-w-[68ch] text-[13.5px] leading-relaxed text-muted">
              {firm.intro}
            </p>

            <div className="mt-7 grid gap-7 sm:grid-cols-2">
              {firm.blocks.map((block) => (
                <div key={block.heading} className="flex flex-col gap-2 border-t-2 border-moss pt-3">
                  <h3 className="font-display text-sm font-semibold">{block.heading}</h3>
                  <ul className="flex flex-col gap-1.5 text-[13px] leading-relaxed text-muted">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-faint">&middot;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-7 max-w-[72ch] rounded-lg bg-sunken p-5 text-[13px] leading-relaxed text-muted">
              <strong className="font-medium text-ink">{firm.note.label}:</strong> {firm.note.text}
            </div>
          </div>
        </section>
      ))}

      <section className="mt-14 border-t border-line pt-7">
        <h2 className="group-label mb-5">Why Work with Consultants?</h2>
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.label} className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
              <span className="font-display text-sm font-semibold">{reason.label}</span>
              <p className="text-[13px] leading-relaxed text-muted">{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Colophon>
        <strong className="font-medium text-ink">Need consulting assistance?</strong> While I
        don&rsquo;t personally offer consulting services, I&rsquo;m happy to help connect you with
        the right experts for your project needs. Email me for referrals or to discuss your specific
        requirements, and I&rsquo;ll point you in the right direction.
      </Colophon>
    </PageShell>
  )
}
