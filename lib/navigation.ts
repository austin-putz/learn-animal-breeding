import { allBooks } from '@/lib/data/books'
import { allSoftware } from '@/lib/data/software'
import { allCourseNotes } from '@/lib/data/course-notes'
import { allShortCourses } from '@/lib/data/short-courses'
import { rpubNotes, allMyBooks } from '@/lib/data/my-work'

export interface RailItem {
  name: string
  href: string
  count?: number
  description?: string
}

/**
 * One source of truth for the section navigations. Counts are derived from the
 * data rather than written down, so they cannot drift.
 */

export const bookCategories: RailItem[] = [
  {
    name: 'Animal Breeding',
    href: '/learn/books/animal-breeding',
    count: allBooks['animal-breeding'].length,
    description: 'Core textbooks on breeding theory, BLUP and genetic evaluation.',
  },
  {
    name: 'Quantitative Genetics',
    href: '/learn/books/quantitative-genetics',
    count: allBooks['quantitative-genetics'].length,
    description: 'Heritability, selection response and the genetic basis of variation.',
  },
  {
    name: 'Bayesian Statistics',
    href: '/learn/books/bayesian',
    count: allBooks['bayesian'].length,
    description: 'Bayesian methods and inference for genetic analysis.',
  },
  {
    name: 'Statistics',
    href: '/learn/books/statistics',
    count: allBooks['statistics'].length,
    description: 'Statistical methods, mixed models and experimental design.',
  },
  {
    name: 'Mathematics',
    href: '/learn/books/mathematics',
    count: allBooks['mathematics'].length,
    description: 'Linear algebra, matrix theory and calculus foundations.',
  },
]

export const softwareCategories: RailItem[] = [
  {
    name: 'Variance Components',
    href: '/resources/software/variance-components',
    count: allSoftware['variance-components'].length,
    description: 'Estimating variance components in mixed models.',
  },
  {
    name: 'Evaluations',
    href: '/resources/software/evaluations',
    count: allSoftware['evaluations'].length,
    description: 'Running genetic evaluations and predicting breeding values.',
  },
  {
    name: 'Inbreeding',
    href: '/resources/software/inbreeding',
    count: allSoftware['inbreeding'].length,
    description: 'Managing inbreeding and optimising mate selection.',
  },
  {
    name: 'Genomic Processing',
    href: '/resources/software/genomic-processing',
    count: allSoftware['genomic-processing'].length,
    description: 'Processing SNP data and building genomic relationships.',
  },
  {
    name: 'GWAS',
    href: '/resources/software/gwas',
    count: allSoftware['gwas'].length,
    description: 'Genome-wide association studies and genomic prediction.',
  },
  {
    name: 'Imputation',
    href: '/resources/software/imputation',
    count: allSoftware['imputation'].length,
    description: 'Imputing missing genotypes.',
  },
  {
    name: 'Breed Composition',
    href: '/resources/software/breed-composition',
    count: allSoftware['breed-composition'].length,
    description: 'Estimating breed composition percentages.',
  },
  {
    name: 'Simulation',
    href: '/resources/software/simulation',
    count: allSoftware['simulation'].length,
    description: 'Simulating breeding programs.',
  },
  {
    name: 'Selection Index',
    href: '/resources/software/selection-index',
    count: allSoftware['selection-index'].length,
    description: 'Designing breeding schemes and calculating accuracy.',
  },
  {
    name: 'Miscellaneous',
    href: '/resources/software/misc',
    count: allSoftware['misc'].length,
    description: 'Other useful tools.',
  },
]

export const courseNoteCategories: RailItem[] = [
  {
    name: 'Animal Breeding',
    href: '/learn/course-notes/animal-breeding',
    count: allCourseNotes['animal-breeding'].length,
    description: 'Course materials from Iowa State University.',
  },
  {
    name: 'Statistics',
    href: '/learn/course-notes/statistics',
    count: allCourseNotes['statistics'].length,
    description: 'Statistical methods and analysis.',
  },
]

export const shortCourseCategories: RailItem[] = [
  {
    name: 'Iowa State University',
    href: '/learn/short-courses/iowa-state',
    count: allShortCourses['iowa-state'].length,
    description: 'Short courses from ISU.',
  },
  {
    name: 'UNE Australia',
    href: '/learn/short-courses/une-australia',
    count: allShortCourses['une-australia'].length,
    description: 'Armidale Genetics Summer Course.',
  },
]

export const myWorkCategories: RailItem[] = [
  {
    name: 'My Books',
    href: '/learn/my-books',
    count: allMyBooks.length,
    description: 'Long-form Quarto books on animal breeding and statistics, written and published openly.',
  },
  {
    name: 'My Notes',
    href: '/learn/my-notes',
    count: rpubNotes.length,
    description: 'Short interactive R tutorials on relationship matrices, BLUP and genomic prediction.',
  },
]
