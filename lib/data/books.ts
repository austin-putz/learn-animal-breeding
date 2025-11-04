import { BookCardProps } from '@/components/books/BookCard'

export const animalBreedingBooks: BookCardProps[] = [
  {
    id: 'mrode-2023',
    title: 'Linear Models for the Prediction of Genetic Merit of Animals, 4th',
    authors: ['Raphael A. Mrode', 'Ivan Pocrnic'],
    year: 2023,
    priority: 'essential',
    difficulty: 'intermediate',
    description: 'The 4th edition of this comprehensive textbook covering BLUP, linear models, and genetic evaluation methods. Essential reading for understanding modern animal breeding.',
    coverImage: '/images/books/mrode-linear-models-2023.jpg',
    isbn: '978-1800620483',
    tags: ['BLUP', 'Linear Models', 'Genetic Evaluation'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Linear-Models-Prediction-Genetic-Animals/dp/1800620489',
        label: 'Amazon',
      },
      {
        type: 'cabi',
        url: 'https://www.cabidigitallibrary.org/doi/book/10.1079/9781800620506.0000',
        label: 'CABI Digital Library',
      },
      {
        type: 'github',
        url: 'https://github.com/MrodesBook/Examples_R',
        label: 'R Examples (GitHub)',
      },
    ],
  },
  {
    id: 'henderson-1984',
    title: 'Applications of Linear Models in Animal Breeding',
    authors: ['Charles R. Henderson'],
    year: 1984,
    priority: 'essential',
    difficulty: 'advanced',
    description: 'Classic textbook by C.R. Henderson, the father of BLUP. Fundamental reading for understanding mixed model equations and genetic evaluation.',
    coverImage: '/images/books/henderson-linear-models-1984.png',
    tags: ['BLUP', 'Mixed Models', 'Henderson'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/animal-breeding/Henderson_1984_Animal_Models.pdf',
        label: 'View PDF',
      },
    ],
  },
  {
    id: 'schaeffer-2010',
    title: 'Linear Models and Animal Breeding',
    authors: ['Larry R. Schaeffer'],
    year: 2010,
    priority: 'recommended',
    difficulty: 'intermediate',
    description: 'Comprehensive course notes on animal models for genetic evaluation. Clear explanations with practical examples.',
    coverImage: '/images/books/schaeffer-linear-models-2010.png',
    tags: ['Animal Models', 'BLUP', 'Course Notes'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/animal-breeding/Schaeffer_2010_Animal_Models.pdf',
        label: 'View PDF',
      },
    ],
  },
  {
    id: 'legarra-genomic',
    title: 'Bases for Genomic Prediction',
    authors: ['Andres Legarra', 'Daniela A.L. Lourenco', 'Zulma G. Vitezica'],
    year: 2024,
    priority: 'essential',
    difficulty: 'advanced',
    description: 'Modern textbook on genomic selection and prediction methods. Covers single-step GBLUP, GWAS, and advanced genomic methods. Latest 2024 edition.',
    coverImage: '/images/books/legarra-genomic-prediction-2024.png',
    tags: ['Genomic Selection', 'ssGBLUP', 'GWAS'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/animal-breeding/Legarra_Genomic_Prediction_2024-05-11.pdf',
        label: 'View PDF',
      },
    ],
  },
  {
    id: 'van-vleck-1993',
    title: 'Selection Index and Introduction to Mixed Model Methods',
    authors: ['L. Dale Van Vleck'],
    year: 1993,
    priority: 'recommended',
    difficulty: 'beginner',
    description: 'The "Green Book" - an excellent introduction to quantitative genetics and animal breeding principles. Great for first year Masters students.',
    coverImage: '/images/books/van-vleck-green-book-1994.jpg',
    isbn: '978-0849387623',
    tags: ['Quantitative Genetics', 'Introduction', 'Green Book'],
    notes: 'Known as the "Green Book" in the animal breeding community',
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/animal-breeding/Van_Vleck_1993_Green_Book.pdf',
        label: 'View PDF',
      },
    ],
  },
  {
    id: 'van-vleck-selection',
    title: 'Notes on the theory and application of selection principles for the genetic improvement of animals',
    authors: ['L. Dale Van Vleck'],
    priority: 'supplemental',
    difficulty: 'intermediate',
    description: 'Course notes on selection principles and breeding methods from Dr. Van Vleck.',
    coverImage: '/images/books/van-vleck-notes.png',
    tags: ['Selection', 'Breeding Methods'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/animal-breeding/Van_Vleck_Selection_Principles_Notes.pdf',
        label: 'View PDF',
      },
    ],
  },
  {
    id: 'cameron-1997',
    title: 'Selection Indices and Prediction of Genetic Merit',
    authors: ['N.D. Cameron'],
    year: 1997,
    priority: 'recommended',
    difficulty: 'intermediate',
    description: 'Comprehensive coverage of selection index theory and application in animal breeding programs.',
    coverImage: '/images/books/cameron-selection-index-1997.jpg',
    tags: ['Selection Index', 'Breeding Goals'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Selection-Indices-Prediction-Genetic-Breeding/dp/0851991696/ref=sr_1_1?crid=3BL7HDX4YKLJG&dib=eyJ2IjoiMSJ9.J_irPiqmAf7CGU_5oz9ZFA.4LP_H3mUokO1E_JLAickYd2ZzSza2EEBHOmhgzmvfcE&dib_tag=se&keywords=cameron+selection+index&qid=1762281692&sprefix=cameron+selec%2Caps%2C176&sr=8-1',
        label: 'Amazon',
      },
    ],
  },
  {
    id: 'wur-undergrad',
    title: 'Textbook Animal Breeding and Genetics',
    authors: ['Wageningen University & Research'],
    year: 2024,
    priority: 'recommended',
    difficulty: 'beginner',
    description: 'Comprehensive undergraduate textbook from Wageningen University. Covers fundamental principles of animal breeding and genetics. Second edition (2024).',
    coverImage: '/images/books/wur-undergrad-online-book.png',
    tags: ['Introduction', 'Undergraduate', 'Comprehensive'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/animal-breeding/WUR_Undergrad_Book.pdf',
        label: 'View PDF',
      },
      {
        type: 'external',
        url: 'https://wiki.groenkennisnet.nl/space/TAB/3735554/Textbook+Animal+Breeding+and+Genetics+(second+edition,+2024)',
        label: 'Online Version',
      },
    ],
  },
  {
    id: 'weller-economics',
    title: 'Economic Aspects of Animal Breeding',
    authors: ['Joel I. Weller'],
    priority: 'supplemental',
    difficulty: 'intermediate',
    description: 'Covers the economic considerations and decision-making in animal breeding programs. Essential for understanding breeding program design.',
    coverImage: '/images/books/weller-economic-aspects-1994.png',
    isbn: '978-0412597503',
    tags: ['Economics', 'Breeding Programs'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Economic-Aspects-Animal-Breeding-Weller/dp/0412597500',
        label: 'Amazon',
      },
    ],
  },
  {
    id: 'gondro-gwas',
    title: 'Genome-Wide Association Studies and Genomic Prediction',
    authors: ['Cedric Gondro', 'Julius van der Werf', 'Ben Hayes'],
    priority: 'recommended',
    difficulty: 'advanced',
    description: 'Modern methods for GWAS and genomic prediction. Essential reading for understanding contemporary genomic breeding approaches.',
    coverImage: '/images/books/gondro-gwas-2013.png',
    isbn: '978-1627034463',
    tags: ['GWAS', 'Genomic Prediction', 'Modern Methods'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Genome-Wide-Association-Studies-Prediction-Molecular/dp/1627034463',
        label: 'Amazon',
      },
    ],
  },
  {
    id: 'bif-guidelines',
    title: 'Guidelines for Uniform Beef Improvement Programs',
    authors: ['Beef Improvement Federation'],
    priority: 'supplemental',
    difficulty: 'beginner',
    description: 'Practical guidelines for implementing beef cattle improvement programs. Wiki-based resource updated regularly.',
    coverImage: '/images/books/bif-wiki-online.png',
    tags: ['Beef Cattle', 'Guidelines', 'Industry Standards'],
    links: [
      {
        type: 'external',
        url: 'https://guidelines.beefimprovement.org/index.php/Guidelines_for_Uniform_Beef_Improvement_Programs',
        label: 'BIF Wiki',
      },
    ],
  },
]

// Placeholder data for other categories - you can populate these later
export const quantitativeGeneticsBooks: BookCardProps[] = [
  // Add quantitative genetics books here
]

export const bayesianBooks: BookCardProps[] = [
  // Add Bayesian statistics books here
]

export const statisticsBooks: BookCardProps[] = [
  // Add statistics books here
]

export const mathematicsBooks: BookCardProps[] = [
  // Add mathematics books here
]

export const allBooks = {
  'animal-breeding': animalBreedingBooks,
  'quantitative-genetics': quantitativeGeneticsBooks,
  'bayesian': bayesianBooks,
  'statistics': statisticsBooks,
  'mathematics': mathematicsBooks,
}
