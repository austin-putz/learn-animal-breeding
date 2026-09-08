import {
  Grid3x3,
  Calculator,
  GitMerge,
  GraduationCap,
  Network,
  Target,
  Database,
  TrendingUp,
  FlaskConical,
} from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { LinkSection, type LinkRowItem } from '@/components/layout/LinkRow'
import { Colophon } from '@/components/layout/Colophon'

export const metadata = {
  title: 'My Notes',
  description:
    'Personal notes, tutorials, and books on animal breeding and statistics by Austin Putz.',
}

const rpubs: LinkRowItem[] = [
  {
    title: "Learning the 'A' Matrix",
    description:
      'Interactive tutorial on the additive relationship matrix used in quantitative genetics',
    href: 'https://rpubs.com/amputz/Amatrix',
    icon: Grid3x3,
  },
  {
    title: 'Introduction to BLUP',
    description: 'Learn Best Linear Unbiased Prediction (BLUP) for genetic evaluation',
    href: 'https://rpubs.com/amputz/BLUP',
    icon: Calculator,
  },
  {
    title: 'Introduction to Single-Step GBLUP',
    description: 'Comprehensive guide to genomic BLUP and single-step genomic evaluation',
    href: 'https://rpubs.com/amputz/GBLUP_and_ssGBLUP',
    icon: GitMerge,
  },
]

const breedingBooks: LinkRowItem[] = [
  {
    title: 'Fundamentals of Animal Breeding: Principles and Practice',
    description:
      'Comprehensive textbook for undergraduate students learning animal breeding for the first time',
    href: 'https://austin-putz.github.io/fundamentals-of-animal-breeding/',
    status: 'In progress',
    icon: GraduationCap,
  },
  {
    title: 'Animal Models',
    description: 'Comprehensive guide to animal models for genetic evaluation',
    status: 'Coming soon',
    icon: Network,
  },
  {
    title: 'Breeding Program Design',
    description: 'Strategic planning and optimization of livestock breeding programs',
    status: 'Coming soon',
    icon: Target,
  },
]

const statisticsBooks: LinkRowItem[] = [
  {
    title: 'AnS 5000 - Data Science and Statistics with R',
    description:
      'AnS 5000 class for new graduate students in animal science. No prereqs required. Teaches basic data management in R and basic statistics with R.',
    href: 'https://austin-putz.github.io/ans-5000-book/',
    status: 'Available',
    icon: Database,
  },
  {
    title: 'Linear Models',
    description: 'Foundational statistical methods for data analysis and modeling',
    href: 'https://austin-putz.github.io/linear-models-book/',
    status: 'Available',
    icon: TrendingUp,
  },
  {
    title: 'Experimental Design',
    description: 'Design and analysis of agricultural and breeding experiments',
    href: 'https://austin-putz.github.io/experimental-design-book/',
    status: 'In progress',
    icon: FlaskConical,
  },
]

export default function MyNotesPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Learn' }, { label: 'My Notes' }]}
        title="My Notes"
        description="Personal notes, tutorials, and educational materials on animal breeding and statistics"
      />

      <LinkSection
        label="RPub Files"
        description="Interactive R tutorials created for classes at Iowa State University"
        items={rpubs}
        cols={3}
      />

      <LinkSection
        label="Books: Animal Breeding"
        description="Comprehensive Quarto books covering advanced topics in animal breeding"
        items={breedingBooks}
      />

      <LinkSection
        label="Books: Statistics"
        description="Quarto books covering data science, linear models and experimental design"
        items={statisticsBooks}
      />

      <Colophon>
        These notes and books represent my personal study materials, lecture notes, and tutorials
        developed over years of teaching and research in animal breeding and quantitative genetics.
        All materials are freely available for educational purposes.
      </Colophon>
    </PageShell>
  )
}
