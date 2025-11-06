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
    isbn: '978-0851991696',
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
    id: 'bourdon-1999',
    title: 'Understanding Animal Breeding',
    authors: ['Richard M. Bourdon'],
    year: 1999,
    priority: 'recommended',
    difficulty: 'beginner',
    description: 'Perfect for undergraduates and new graduate students with no breeding background. Clear, accessible introduction to animal breeding principles. Second edition.',
    coverImage: '/images/books/bourdon-animal-breeding-1999.jpg',
    isbn: '978-0130964496',
    tags: ['Introduction', 'Undergraduate', 'Beginner-Friendly'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Understanding-Animal-Breeding-Richard-Bourdon/dp/0130964492/ref=sr_1_1?crid=3USN3D35H08AI&dib=eyJ2IjoiMSJ9.fz2pMNmtfLl8gAvRV6zoL3aAO-JtkrYvsHjVActSzJmDOSaCa3bx-hStfNnOYEaYfQF_BlqKthXxOQ-_tZftnnfklHJlEQImpjh_9Nn_Kc4.k6zdUXV2v8w81zRphm3W7JxKr1s7tA49AwLziAuvS_E&dib_tag=se&keywords=bourdon+animal+breeding&qid=1762282301&sprefix=bourdon+animal+breeding%2Caps%2C160&sr=8-1',
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

// Quantitative Genetics Books
export const quantitativeGeneticsBooks: BookCardProps[] = [
  {
    id: 'falconer-mackay-1996',
    title: 'Introduction to Quantitative Genetics',
    authors: ['Douglas S. Falconer', 'Trudy F.C. Mackay'],
    year: 1996,
    priority: 'essential',
    difficulty: 'intermediate',
    description: 'The foundational textbook for quantitative genetics. Classic introduction covering fundamental principles of inheritance, heritability, selection response, and breeding theory.',
    coverImage: '/images/books/falconer-mackay-1996.jpg',
    tags: ['Quantitative Genetics', 'Heritability', 'Selection', 'Classic'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Introduction-Quantitative-Genetics-Falconer-Paperback/dp/B00OX8KG2M/ref=sr_1_2?crid=1OQTRA19SJA35&keywords=falconer+and+mackay&qid=1701186876&sprefix=falconer+and+mackay%2Caps%2C152&sr=8-2',
        label: 'Amazon',
      },
    ],
  },
  {
    id: 'walsh-lynch-2018',
    title: 'Evolution and Selection of Quantitative Traits',
    authors: ['Bruce Walsh', 'Michael Lynch'],
    year: 2018,
    priority: 'essential',
    difficulty: 'advanced',
    description: '2nd edition of the famous Lynch and Walsh (1998) book on quantitative genetics. Comprehensive modern treatment of evolutionary quantitative genetics.',
    coverImage: '/images/books/walsh-lynch.jpg',
    tags: ['Quantitative Genetics', 'Evolution', 'Advanced'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Evolution-Selection-Quantitative-Traits-Bruce/dp/0198830874/ref=sr_1_2?crid=263R7JLY47EQ4&keywords=quantitative+genetics&qid=1701187926&s=books&sprefix=quantitative+genetics%2Cstripbooks%2C133&sr=1-2',
        label: 'Amazon',
      },
    ],
  },
  {
    id: 'lynch-walsh-1998',
    title: 'Genetics and Analysis of Quantitative Traits',
    authors: ['Michael Lynch', 'Bruce Walsh'],
    year: 1998,
    priority: 'recommended',
    difficulty: 'advanced',
    description: 'Classic book to learn mathematics associated with quantitative genetics. Rigorous treatment of theory and methods. First edition of Walsh and Lynch (2018).',
    coverImage: '/images/books/lynch-walsh.jpg',
    tags: ['Quantitative Genetics', 'Mathematics', 'Theory'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Genetics-Analysis-Quantitative-Traits-Michael/dp/0878934812/ref=sr_1_1?crid=1QJ2DK857PU1R&keywords=Lynch+and+Walsh+%281998%29&qid=1701188067&s=books&sprefix=lynch+and+walsh+1998+%2Cstripbooks%2C242&sr=1-1',
        label: 'Amazon',
      },
    ],
  },
  {
    id: 'coop-popgen',
    title: 'Population and Quantitative Genetics',
    authors: ['Graham Coop'],
    priority: 'recommended',
    difficulty: 'intermediate',
    description: 'Open source textbook (Creative Commons license) on population and quantitative genetics. Available freely on GitHub. 3rd edition.',
    coverImage: '/images/books/coop-quantitative-genetics.png',
    tags: ['Quantitative Genetics', 'Population Genetics', 'Open Source'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/quantitative-genetics/Coop_Population_and_Quantitative_Genetics.pdf',
        label: 'View PDF',
      },
      {
        type: 'github',
        url: 'https://github.com/cooplab/popgen-notes',
        label: 'GitHub Repository',
      },
    ],
  },
  {
    id: 'suza-quant-genetics-plants',
    title: 'Quantitative Genetics for Plant Breeding',
    authors: ['Walter Suza', 'Kendall Lamkey', 'William Beavis', 'Katherine Espinosa', 'Mark Newell', 'Anthony Assibi Mahama'],
    priority: 'recommended',
    difficulty: 'intermediate',
    description: 'Open access textbook on quantitative genetics from Iowa State University Digital Press. While focused on plant breeding, covers fundamental quantitative genetics principles applicable to all species. Free PDF available.',
    coverImage: '/images/books/suza-quantitative-genetics-plants.png',
    tags: ['Quantitative Genetics', 'Plant Breeding', 'Open Access', 'Iowa State'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/quantitative-genetics/Suza_Quantitative_Genetics_Plants.pdf',
        label: 'View PDF',
      },
      {
        type: 'external',
        url: 'https://open.umn.edu/opentextbooks/textbooks/quantitative-genetics-for-plant-breeding',
        label: 'Open Textbook Library',
      },
    ],
  },
]

export const bayesianBooks: BookCardProps[] = [
  {
    id: 'sorensen-gianola-2002',
    title: 'Likelihood, Bayesian, and MCMC Methods in Quantitative Genetics',
    authors: ['Daniel Sorensen', 'Daniel Gianola'],
    year: 2002,
    priority: 'essential',
    difficulty: 'advanced',
    description: 'Comprehensive treatment of Bayesian methods and MCMC techniques for quantitative genetics. Essential reading for understanding modern Bayesian approaches in animal breeding.',
    coverImage: '/images/books/sorensen-bayesian-2002.webp',
    isbn: '978-0387954400',
    tags: ['Bayesian', 'MCMC', 'Quantitative Genetics', 'Advanced'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Likelihood-Bayesian-Quantitative-Genetics-Statistics/dp/0387954406/ref=sr_1_1?crid=3GSIGKB681HNG&keywords=gianola+and+sorensen+book&qid=1701795986&sprefix=gianola+and+sorensen+book%2Caps%2C137&sr=8-1',
        label: 'Amazon',
      },
    ],
  },
  {
    id: 'blasco-2017',
    title: 'Bayesian Data Analysis for Animal Scientists',
    authors: ['Agustin Blasco'],
    year: 2017,
    priority: 'recommended',
    difficulty: 'intermediate',
    description: 'Practical introduction to Bayesian data analysis specifically designed for animal scientists. Covers applications and implementation of Bayesian methods in animal breeding contexts.',
    coverImage: '/images/books/blasco-bayesian-2017.jpg',
    isbn: '978-3319542737',
    tags: ['Bayesian', 'Data Analysis', 'Practical', 'Animal Science'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Bayesian-Data-Analysis-Animal-Scientists/dp/3319542737/ref=sr_1_1?crid=3RISZQ7E8TB8B&keywords=Bayesian+Data+Analysis+for+Animal+Scientists&qid=1701796411&s=books&sprefix=bayesian+data+analysis+for+animal+scientists%2Cstripbooks%2C107&sr=1-1',
        label: 'Amazon',
      },
    ],
  },
]

export const statisticsBooks: BookCardProps[] = [
  {
    id: 'searle-linear-models-1997',
    title: 'Linear Models',
    authors: ['Shayle R. Searle'],
    year: 1997,
    priority: 'essential',
    difficulty: 'advanced',
    description: 'Classic comprehensive treatment of linear models. Essential reference for understanding the mathematical foundations of mixed models, BLUP, and statistical analysis in animal breeding.',
    coverImage: '/images/books/searle-linear-models-1997.jpg',
    isbn: '978-0471184997',
    tags: ['Linear Models', 'Statistics', 'Mathematical Foundations', 'Advanced'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Linear-Models-Shayle-R-Searle/dp/0471184993/ref=sr_1_1?crid=3I2TLKMEUGFK8&dib=eyJ2IjoiMSJ9.E00FNkMCl8Xs_DWlfvE9PoJpII9BjBlxlgKktuO_qKF3304SOtwzXp81MJ4JVOJ5zRK-jbdDohR01L87x5Nyf0D4tgC2xr8bGsqKjlYiuZqofsaK-2eGS4ZZ_-19kI3Bl2YWFVi621J8nc-T4ihIfngi_jIspfgkNqaMRD52RSAJIVvIe_elOpV8SdrWOzu3kIcPaSrvUXYn-8UCiXIVYHth4O4Q9rgqjiwQvFOxM48.YRE7-ZUZko3GURryHJlBWHiaG6Bg97cKSDRkPYJdM0U&dib_tag=se&keywords=linear+models+searle&qid=1762310772&sprefix=linear+models+searle%2Caps%2C220&sr=8-1',
        label: 'Amazon',
      },
    ],
  },
]

export const mathematicsBooks: BookCardProps[] = [
  {
    id: 'searle-matrix-algebra-2017',
    title: 'Matrix Algebra Useful for Statistics',
    authors: ['Shayle R. Searle', 'Andre I. Khuri'],
    year: 2017,
    priority: 'essential',
    difficulty: 'intermediate',
    description: 'Comprehensive treatment of matrix algebra concepts essential for understanding statistical methods. Covers matrix operations, eigenvalues, generalized inverses, and applications to statistics. Second edition.',
    coverImage: '/images/books/searle-matrix-algebra-2017.jpg',
    isbn: '978-1118935149',
    tags: ['Matrix Algebra', 'Linear Algebra', 'Mathematics', 'Statistics'],
    links: [
      {
        type: 'amazon',
        url: 'https://www.amazon.com/Matrix-Algebra-Useful-Statistics-Probability/dp/1118935144/ref=sr_1_3?crid=27H33OZUNMBT6&dib=eyJ2IjoiMSJ9.A8zZP_gxjUtt3moBrD9HkpK53mmZpMow8hOItX_eZNWAped7Cc9suGY8UJ_5PTCnjgDuJU0GSWqHZTh9DBjL3A._P5Bk9uca9yWJTMlYxg5G8k4MyrAWXix5hu5TjXqenE&dib_tag=se&keywords=searle+linear+algebra&qid=1762311091&s=books&sprefix=searle+linear+algebra%2Cstripbooks%2C171&sr=1-3',
        label: 'Amazon',
      },
    ],
  },
  {
    id: 'mitran-linear-algebra',
    title: 'Linear Algebra for Data Science',
    authors: ['Sorin Mitran'],
    priority: 'recommended',
    difficulty: 'beginner',
    description: 'Accessible introduction to linear algebra concepts with applications to data science. From University of North Carolina at Chapel Hill. Free PDF available.',
    coverImage: '/images/books/mitran-linear-algebra.png',
    tags: ['Linear Algebra', 'Data Science', 'Introduction', 'Free PDF'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/mathematics/Mitran_Linear_Algebra_Book.pdf',
        label: 'View PDF',
      },
    ],
  },
  {
    id: 'beezer-linear-algebra',
    title: 'A First Course in Linear Algebra',
    authors: ['Robert A. Beezer'],
    priority: 'recommended',
    difficulty: 'beginner',
    description: 'Comprehensive first course in linear algebra from University of Puget Sound. Open textbook with clear explanations suitable for beginners. Version 3.50. Free PDF available.',
    coverImage: '/images/books/beezer-linear-algebra.png',
    tags: ['Linear Algebra', 'Open Textbook', 'Introduction', 'Free PDF'],
    links: [
      {
        type: 'pdf',
        url: '/pdfs/books/mathematics/Beezer_Linear_Algebra.pdf',
        label: 'View PDF',
      },
    ],
  },
]

export const allBooks = {
  'animal-breeding': animalBreedingBooks,
  'quantitative-genetics': quantitativeGeneticsBooks,
  'bayesian': bayesianBooks,
  'statistics': statisticsBooks,
  'mathematics': mathematicsBooks,
}
