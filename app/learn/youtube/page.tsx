import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { LinkRows, type LinkRowItem } from '@/components/layout/LinkRow'
import { EmptyState } from '@/components/layout/EmptyState'
import { Colophon } from '@/components/layout/Colophon'

export const metadata = {
  title: 'YouTube Resources',
  description:
    'Curated YouTube channels and playlists for learning statistics, linear algebra, and animal breeding.',
}

const linearAlgebra: LinkRowItem[] = [
  {
    title: '3Blue1Brown',
    status: 'Essence of Linear Algebra',
    description: 'Visual and intuitive explanations of linear algebra concepts',
    href: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
  },
  {
    title: 'Gilbert Strang',
    status: 'MIT OpenCourseWare',
    description: 'Complete MIT linear algebra course lectures',
    href: 'https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8',
  },
  {
    title: 'Dr. Jim Hefferon',
    status: 'Full Undergraduate Course',
    description: 'Comprehensive linear algebra course from University of Vermont',
    href: 'https://www.youtube.com/@jjhefferon',
  },
  {
    title: 'Geeks Lesson',
    status: 'Complete Linear Algebra Course',
    description: 'Comprehensive tutorials covering all linear algebra topics',
    href: 'https://www.youtube.com/@GeeksLesson',
  },
  {
    title: 'Bright Side of Mathematics',
    status: 'Linear Algebra Playlist',
    description: 'Clear explanations with visual demonstrations',
    href: 'https://www.youtube.com/@brightsideofmaths',
  },
  {
    title: 'Jon Krohn',
    status: 'Linear Algebra for Machine Learning',
    description: 'Applied linear algebra with ML focus',
    href: 'https://www.youtube.com/@jonkrohn',
  },
]

const animalBreeding: LinkRowItem[] = [
  {
    title: 'Arthur Gilmour',
    status: 'ASReml Discussion',
    description: 'Expert discussion on ASReml software for genetic analysis',
    href: 'https://www.youtube.com/watch?v=example',
  },
  {
    title: 'Brian Wickham',
    status: 'Life History Presentation',
    description: 'Career insights and animal breeding experiences',
    href: 'https://www.youtube.com/watch?v=example',
  },
]

const sections = [
  {
    label: 'Linear Algebra',
    description: 'Foundation of statistics and animal breeding concepts',
    items: linearAlgebra,
  },
  {
    label: 'Basic Statistics',
    description: 'Foundational statistical concepts and methods',
    empty: 'YouTube channels and playlists for basic statistics will be added here',
  },
  {
    label: 'Advanced Statistics',
    description: 'Advanced statistical methods and theory',
    empty: 'YouTube channels and playlists for advanced statistics will be added here',
  },
  {
    label: 'Mixed Models',
    description: 'Linear and generalized linear mixed models',
    empty: 'YouTube channels and playlists for mixed models will be added here',
  },
  {
    label: 'BLUP',
    description: 'Best Linear Unbiased Prediction methods',
    empty: 'YouTube channels and playlists for BLUP will be added here',
  },
  {
    label: 'Animal Breeding',
    description: 'Specialized topics in animal breeding and genetics',
    items: animalBreeding,
  },
] as const

export default function YouTubePage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'YouTube' }]}
        title="YouTube Resources"
        description="Curated YouTube channels, playlists, and courses for learning statistics, mathematics, and animal breeding"
      />

      {sections.map((section) => (
        <section key={section.label} className="pt-10">
          <h2 className="group-label pb-1.5">{section.label}</h2>
          <p className="max-w-[62ch] pb-1 text-[13.5px] text-muted">{section.description}</p>
          {'items' in section ? (
            <LinkRows items={[...section.items]} cols={3} />
          ) : (
            <EmptyState>{section.empty}</EmptyState>
          )}
        </section>
      ))}

      <Colophon>
        These YouTube resources have been curated to provide a structured learning path from
        foundational mathematics through advanced statistical methods and specialized animal
        breeding topics. All channels and playlists are freely available on YouTube.
      </Colophon>
    </PageShell>
  )
}
