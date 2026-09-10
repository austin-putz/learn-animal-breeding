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
import type { LinkRowItem } from '@/components/layout/LinkRow'

/**
 * Austin's own material, split by what it is: short interactive tutorials
 * (My Notes) and the long-form Quarto books (My Books).
 */

export const rpubNotes: LinkRowItem[] = [
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

export const animalBreedingBooks: LinkRowItem[] = [
  {
    title: 'Fundamentals of Animal Breeding: Principles and Practice',
    description:
      'Comprehensive textbook for undergraduate students learning animal breeding for the first time',
    href: 'https://austin-putz.github.io/fundamentals-of-animal-breeding/',
    status: 'In progress',
    icon: GraduationCap,
  },
  {
    title: 'Linear Models in Animal Breeding: A Worked Approach',
    description: 'Comprehensive guide to animal models for genetic evaluation',
    href: 'https://austin-putz.github.io/linear-models-in-animal-breeding/',
    status: 'In progress',
    icon: Network,
  },
  {
    title: 'Breeding Program Design',
    description: 'Strategic planning and optimization of livestock breeding programs',
    status: 'Coming soon',
    icon: Target,
  },
]

export const statisticsBooks: LinkRowItem[] = [
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

export const allMyBooks = [...animalBreedingBooks, ...statisticsBooks]

/** Books that are readable today, as opposed to announced. */
export const readableBookCount = allMyBooks.filter((b) => b.href).length
