import {
  ArrowUpRight,
  Boxes,
  Cpu,
  Database,
  Dna,
  FlaskConical,
  GraduationCap,
  Scale,
  Sprout,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
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
  icon: LucideIcon
  items: React.ReactNode[]
}

/** One headline figure or name, with the line that explains it. */
interface Fact {
  value: string
  label: string
}

interface Firm {
  name: string
  tagline: string
  href: string
  domain: string
  /** Short facts for the head strip: founded, footprint. */
  meta: string[]
  intro: string
  blocks: ServiceBlock[]
  /** The aside beside the services: the numbers or names the firm is known for. */
  facts: { label: string; items: Fact[] }
}

const firms: Firm[] = [
  {
    name: 'AbacusBio',
    tagline: 'International agriscience consulting firm',
    href: 'https://abacusbio.com/',
    domain: 'abacusbio.com',
    meta: ['Est. 2001', 'NZ · Australia · UK · North America'],
    intro:
      'AbacusBio delivers advanced genetic insights, strategic economic analysis, and sustainable innovations for the agricultural sector. With offices in New Zealand, Australia, the UK, and North America, they have delivered projects across more than 30 countries.',
    blocks: [
      {
        heading: 'Genetic Improvement',
        icon: Dna,
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
        icon: FlaskConical,
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
        icon: Sprout,
        items: [
          'Farm systems modeling and optimization',
          'Environmental impact quantification',
          'Revenue stream development',
          'Production and supply chain analysis',
        ],
      },
      {
        heading: 'Proprietary Tools',
        icon: Boxes,
        items: [
          <>
            <strong className="font-medium text-ink">Dtreo</strong> — performance tracking and
            genetic analysis
          </>,
          <>
            <strong className="font-medium text-ink">IndexSim</strong> — interactive selection
            index simulator
          </>,
          <>
            <strong className="font-medium text-ink">Ani-Mate</strong> — breeding optimization and
            inbreeding management
          </>,
        ],
      },
    ],
    facts: {
      label: 'Notable impact',
      items: [
        { value: '220M ha', label: 'of land influenced by their projects, 14% of global arable land' },
        { value: '30+', label: 'countries with delivered projects' },
        { value: '6', label: 'major Angus herdbooks with breeding objectives they developed' },
        { value: '68%', label: 'improvement in NZ dairy fertility EBV predictive ability' },
      ],
    },
  },
  {
    name: 'Helical',
    tagline: 'Advanced genetic data management solutions',
    href: 'https://www.helicalco.com/',
    domain: 'helicalco.com',
    meta: ['Genomic prediction', 'Software and consulting'],
    intro:
      'Helical provides advanced genetic data management and genomic prediction solutions for the animal breeding industry. Founded by leading researchers in quantitative genetics, they offer cutting-edge tools and consulting services.',
    blocks: [
      {
        heading: 'Core Services',
        icon: Database,
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
        icon: Cpu,
        items: [
          'BOLT software suite',
          'Advanced genomic evaluation tools',
          'High-performance computing solutions',
          'Integration with existing systems',
        ],
      },
    ],
    facts: {
      label: 'Known for',
      items: [
        { value: 'BOLT', label: 'genomic evaluation software suite' },
        { value: 'SNP', label: 'database management for large genotype sets' },
        { value: 'HPC', label: 'high-performance computing for large evaluations' },
        {
          value: 'Founders',
          label: 'world-renowned quantitative geneticists with decades of experience',
        },
      ],
    },
  },
]

const reasons: { label: string; icon: LucideIcon; text: string }[] = [
  {
    label: 'Expertise',
    icon: GraduationCap,
    text: 'Access specialized knowledge in breeding program design, genomic selection, and genetic evaluation that may not be available in-house.',
  },
  {
    label: 'Objectivity',
    icon: Scale,
    text: 'Independent assessment of your breeding strategies, technologies, and data infrastructure with unbiased recommendations.',
  },
  {
    label: 'Efficiency',
    icon: Zap,
    text: 'Accelerate your breeding program development with proven methodologies and avoid costly mistakes through expert guidance.',
  },
]

/**
 * A firm gets a full-width profile rather than a tile: there are only two, and
 * each has more to say than a tile can hold. The head carries the identity
 * (monogram, name, footprint) and the one exit; the body pairs the service
 * lists with an aside of the figures the firm is known for, which is the part
 * a reader skims first.
 */
function FirmProfile({ name, tagline, href, domain, meta, intro, blocks, facts }: Firm) {
  return (
    <article className="relative overflow-hidden rounded-xl border border-line bg-surface shadow-md">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-[3px] bg-moss/45" />

      <div className="flex flex-col gap-5 border-b border-line bg-moss-wash px-6 pb-6 pt-7 sm:flex-row sm:items-end sm:justify-between md:px-8">
        <div className="flex items-center gap-5">
          <span
            aria-hidden="true"
            className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-moss font-display text-[30px] font-bold leading-none text-moss-on shadow-sm"
          >
            {name.charAt(0)}
          </span>
          <div className="min-w-0">
            <h2 className="font-display text-[26px] font-bold leading-none tracking-tight">{name}</h2>
            <p className="mt-2 text-[13.5px] text-muted">{tagline}</p>
            <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
              {meta.map((m) => (
                <span key={m} className="meta">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex flex-shrink-0 items-center gap-1.5 self-start rounded bg-moss px-3.5 py-2 text-[13px] font-medium text-moss-on shadow-sm transition-colors hover:bg-moss-hover sm:self-auto"
        >
          Visit {domain}
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
          />
        </a>
      </div>

      <div className="grid gap-8 px-6 py-7 md:px-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12">
        <div>
          <p className="max-w-[68ch] text-[14.5px] leading-relaxed text-muted">{intro}</p>

          <div className="mt-8 grid gap-x-8 gap-y-7 sm:grid-cols-2">
            {blocks.map(({ heading, icon: Icon, items }) => (
              <div key={heading}>
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-moss-wash text-moss">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display text-[14.5px] font-semibold tracking-tight">
                    {heading}
                  </h3>
                </div>
                <ul className="mt-3 flex flex-col gap-1.5 border-l-2 border-moss/30 pl-4 text-[13px] leading-relaxed text-muted">
                  {items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-lg bg-sunken p-5 lg:self-start">
          <span className="meta">{facts.label}</span>
          <dl className="mt-3 flex flex-col divide-y divide-line">
            {facts.items.map((fact) => (
              <div key={fact.value} className="py-3.5 first:pt-0 last:pb-0">
                <dt className="font-display text-[26px] font-bold leading-none tracking-tight text-moss">
                  {fact.value}
                </dt>
                <dd className="mt-1.5 text-[12.5px] leading-snug text-muted">{fact.label}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </article>
  )
}

export default function ConsultingPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Consulting' }]}
        title="Consulting Services"
        description="Professional consulting firms specializing in animal breeding, quantitative genetics, and genetic evaluation"
      />

      <div className="mt-10 flex flex-col gap-8">
        {firms.map((firm) => (
          <FirmProfile key={firm.name} {...firm} />
        ))}
      </div>

      <section className="pt-14">
        <h2 className="group-label pb-1.5">Why work with consultants?</h2>
        <p className="max-w-[62ch] text-[13.5px] text-muted">
          What an outside firm brings that a breeding program rarely has on staff
        </p>
        <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-3">
          {reasons.map(({ label, icon: Icon, text }, i) => (
            <div
              key={label}
              className="relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-md"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-moss/45" />
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-moss/70" strokeWidth={1.25} />
                <span className="meta">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-[15px] font-semibold tracking-tight">{label}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted">{text}</p>
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
