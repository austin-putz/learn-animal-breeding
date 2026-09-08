import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { LinkSection, type LinkRowItem } from '@/components/layout/LinkRow'

export const metadata = {
  title: 'Journals & Research',
  description:
    'Key journals and platforms for staying current with animal breeding and quantitative genetics research.',
}

const platforms: LinkRowItem[] = [
  {
    title: 'Google Scholar',
    description: 'Search academic papers and follow authors for publication alerts',
    href: 'https://scholar.google.com/',
  },
  {
    title: 'ResearchGate',
    description: 'Connect with researchers and access full-text papers',
    href: 'https://www.researchgate.net/',
  },
  {
    title: 'Twitter / X',
    description: 'Follow researchers for real-time updates and discussions',
    href: 'https://twitter.com/',
  },
  {
    title: 'LinkedIn',
    description: 'Network with professionals and follow research updates',
    href: 'https://www.linkedin.com/',
  },
]

const databases: LinkRowItem[] = [
  {
    title: 'PubMed',
    description: 'Free database of biomedical and life sciences literature from NCBI',
    href: 'https://pubmed.ncbi.nlm.nih.gov/',
  },
  {
    title: 'Web of Science',
    description: 'Comprehensive citation database covering all disciplines',
    href: 
      'https://access.clarivate.com/login?app=wos&alternative=true&shibShireURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fauth%3DShibboleth&shibReturnURL=https:%2F%2Fwww.webofknowledge.com%2F%3Fmode%3DNextgen%26action%3Dtransfer%26path%3D%252Fwos%26DestApp%3DUA&referrer=mode%3DNextgen%26path%3D%252Fwos%26DestApp%3DUA%26action%3Dtransfer&roaming=true',
  },
  {
    title: 'Scopus',
    description: "Elsevier's abstract and citation database with global research coverage",
    href: 'https://www.scopus.com/',
  },
  {
    title: 'CORE',
    description: "World's largest collection of open access research papers",
    href: 'https://core.ac.uk/',
  },
  {
    title: 'DOAJ',
    description: 'Directory of Open Access Journals with quality-assessed content',
    href: 'https://doaj.org/',
  },
  {
    title: 'ScienceOpen',
    description: 'Free discovery platform with interactive research network',
    href: 'https://www.scienceopen.com/',
  },
]

const libraries: LinkRowItem[] = [
  {
    title: 'ProQuest',
    description: 'Comprehensive dissertations, theses, and academic journal database',
    href: 'https://www.proquest.com/',
  },
  {
    title: 'JSTOR',
    description: 'Digital library of academic journals, books, and primary sources',
    href: 'https://www.jstor.org/',
  },
  {
    title: 'EBSCO',
    description: 'Research databases including Academic Search and Agriculture collections',
    href: 'https://www.ebsco.com/',
  },
]

const journals: LinkRowItem[] = [
  {
    title: 'Genetics Selection Evolution',
    status: 'GSE · Open Access',
    description:
      'BMC. Leading open-access journal in quantitative genetics and animal breeding.',
    href: 'https://gsejournal.biomedcentral.com/',
  },
  {
    title: 'Journal of Animal Science',
    status: 'JAS · ASAS',
    description: 'Premier journal for animal science research and genetics.',
    href: 'https://academic.oup.com/jas',
  },
  {
    title: 'Journal of Animal Breeding and Genetics',
    status: 'JABG · Wiley',
    description: 'Specialized in breeding methodologies and genetic improvement.',
    href: 'https://onlinelibrary.wiley.com/journal/14390388',
  },
  {
    title: 'Genes, Genomes, Genetics',
    status: 'G3 · Open Access',
    description: 'GSA. Broad coverage of genetics including quantitative genetics.',
    href: 'https://academic.oup.com/g3journal',
  },
  {
    title: 'Genetics',
    status: 'GSA',
    description: 'Flagship journal of the Genetics Society of America.',
    href: 'https://academic.oup.com/genetics',
  },
  {
    title: 'Journal of Dairy Science',
    status: 'JDS · ADSA',
    description: 'Leading journal for dairy cattle genetics and breeding.',
    href: 'https://www.journalofdairyscience.org/',
  },
  {
    title: 'Animal',
    status: 'Cambridge',
    description:
      'Premier journal for animal science with strong genetics and breeding sections.',
    href: 'https://www.cambridge.org/core/journals/animal',
  },
  {
    title: 'Livestock Science',
    status: 'Elsevier',
    description: 'Covers livestock genetics, breeding, and production systems.',
    href: 'https://www.sciencedirect.com/journal/livestock-science',
  },
  {
    title: 'Animal Genetics',
    status: 'Wiley',
    description: 'Specifically focused on animal genetics and molecular genetics.',
    href: 'https://onlinelibrary.wiley.com/journal/13652052',
  },
  {
    title: 'Frontiers in Genetics',
    status: 'Open Access',
    description: 'Has a dedicated Livestock Genomics section, growing in popularity.',
    href: 'https://www.frontiersin.org/journals/genetics',
  },
  {
    title: 'BMC Genomics',
    status: 'Open Access',
    description: 'Publishes significant animal genomics and breeding research.',
    href: 'https://bmcgenomics.biomedcentral.com/',
  },
  {
    title: 'Heredity',
    status: 'Nature',
    description: 'Covers quantitative genetics, evolution, and breeding applications.',
    href: 'https://www.nature.com/hdy/',
  },
  {
    title: 'PLoS Genetics',
    status: 'Open Access',
    description: 'General genetics journal that includes animal genetics work.',
    href: 'https://journals.plos.org/plosgenetics/',
  },
  {
    title: 'Journal of Heredity',
    status: 'Oxford',
    description: 'Covers genetics including animal breeding applications.',
    href: 'https://academic.oup.com/jhered',
  },
  {
    title: 'Animal Biotechnology',
    status: 'Taylor & Francis',
    description: 'Focuses on genetics and breeding technology applications.',
    href: 'https://www.tandfonline.com/journals/labt20',
  },
]

const tips = [
  {
    label: 'Email Alerts',
    text: 'Subscribe to journal mailing lists for table of contents alerts. Most journals offer free email notifications when new issues are published.',
  },
  {
    label: 'Follow Researchers',
    text: "Use Google Scholar to follow key researchers. You'll receive alerts when they publish new papers or when their work is cited.",
  },
  {
    label: 'Social Media',
    text: 'Many researchers share their work on Twitter/X and LinkedIn. Follow them for preprints, conference updates, and research discussions.',
  },
  {
    label: 'University Access',
    text: 'Check your university library for journal subscriptions. Many institutions provide free access to paywalled journals through VPN or library systems.',
  },
]

export default function JournalsPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Journals' }]}
        title="Journals & Research"
        description="Key journals and platforms for staying current with animal breeding and quantitative genetics research"
      />

      <LinkSection label="Find Papers & Follow Research" items={platforms} cols={2} />

      <LinkSection
        label="Academic Search Databases"
        description="Search across millions of academic papers and research articles"
        items={databases}
        cols={3}
      />

      <LinkSection
        label="Institutional Library Resources"
        description="Access through your university or institutional library"
        items={libraries}
        cols={3}
      />

      <LinkSection
        label="Key Journals in Animal Breeding & Genetics"
        items={journals}
        cols={2}
      />

      <section className="mt-14 border-t border-line pt-7">
        <h2 className="group-label mb-5">Tips for Staying Current</h2>
        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {tips.map((tip) => (
            <div key={tip.label} className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
              <span className="font-display text-sm font-semibold">{tip.label}</span>
              <p className="text-[13px] leading-relaxed text-muted">{tip.text}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
