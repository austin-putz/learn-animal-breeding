import { BookCardProps } from '@/components/books/BookCard'

export const animalBreedingCourseNotes: BookCardProps[] = [
  {
    id: 'dekkers-ans-652',
    title: 'Design and Optimisation of Animal Breeding Programmes',
    authors: ['Jack C.M. Dekkers', 'John P Gibson', 'Piter Bijma', 'Johan A.M. van Arendonk'],
    description: 'Lecture notes for AnS 652 A and B, S05, Iowa State University. Covers breeding program design and optimization.',
    coverImage: '/images/course-notes/dekkers-ans-652.png',
    tags: ['Breeding Programs', 'Iowa State', 'Course Notes'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/course-notes/animal-breeding/Dekkers_AnS_652_Breeding_Program_Design_Notes.pdf',
        label: 'View PDF',
      },
    ],
  },
  {
    id: 'fernando-652',
    title: 'Linear Models in Animal Breeding',
    authors: ['Rohan Fernando'],
    description: 'Class notes covering linear models in animal breeding from Iowa State University.',
    coverImage: '/images/course-notes/fernando-652.png',
    tags: ['Linear Models', 'Iowa State', 'Course Notes'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/course-notes/animal-breeding/Fernando_652_Linear_Models_Notes.pdf',
        label: 'View PDF',
      },
    ],
  },
  {
    id: 'fernando-561',
    title: 'Quantitative and Population Genetics for Breeding',
    authors: ['Rohan Fernando'],
    description: 'Course notes for Agronomy/Animal Science 561, Fall 2000. Iowa State University.',
    coverImage: '/images/course-notes/fernando-561.png',
    tags: ['Quantitative Genetics', 'Iowa State', 'Course Notes'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/course-notes/animal-breeding/Fernando_561_Quantitative_Genetics_Notes.pdf',
        label: 'View PDF',
      },
    ],
  },
  {
    id: 'fernando-656',
    title: 'Theory and Methods for Genomic Prediction',
    authors: ['Rohan Fernando'],
    description: 'Course notes covering theory and methods for genomic prediction, November 11, 2013. Iowa State University.',
    coverImage: '/images/course-notes/fernando-656.png',
    tags: ['Genomic Prediction', 'Iowa State', 'Course Notes'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/course-notes/animal-breeding/Fernando_656_Genomic_Prediction_Notes.pdf',
        label: 'View PDF',
      },
    ],
  },
]

export const statisticsCourseNotes: BookCardProps[] = [
  {
    id: 'davidian-stat-732',
    title: 'Applied Longitudinal Data Analysis',
    authors: ['M. Davidian'],
    description: 'Lecture notes for ST 732, Department of Statistics, North Carolina State University. ©2005.',
    coverImage: '/images/course-notes/davidian-stat-732.png',
    tags: ['Longitudinal Data', 'Statistics', 'NCSU'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/course-notes/statistics/Davidian_Stat_732_Longitudinal_Notes.pdf',
        label: 'View PDF',
      },
    ],
  },
]

export const allCourseNotes = {
  'animal-breeding': animalBreedingCourseNotes,
  'statistics': statisticsCourseNotes,
}
