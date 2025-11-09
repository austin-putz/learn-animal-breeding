export interface SoftwareLink {
  type: 'home' | 'github' | 'download' | 'docs' | 'paper' | 'manual'
  url: string
  label: string
}

export interface SoftwareTool {
  id: string
  name: string
  developer?: string
  description: string
  status?: 'active' | 'paid' | 'deprecated' | 'development'
  links: SoftwareLink[]
  tags?: string[]
}

export const varianceComponentsSoftware: SoftwareTool[] = [
  {
    id: 'blupf90',
    name: 'BLUPF90',
    developer: 'Ignacy Misztal (UGA)',
    description: 'Foundational software for estimating variance components in animal mixed models. Widely used in the USA breeding industry.',
    status: 'active',
    links: [
      { type: 'home', url: 'http://nce.ads.uga.edu/wiki/doku.php', label: 'Home' },
      { type: 'download', url: 'https://nce.ads.uga.edu/wiki/doku.php?id=distribution', label: 'Download' },
      { type: 'manual', url: 'https://nce.ads.uga.edu/wiki/doku.php?id=documentation', label: 'Manual' },
    ],
    tags: ['Variance Components', 'Mixed Models', 'BLUP'],
  },
  {
    id: 'asreml',
    name: 'ASReml',
    developer: 'Arthur Gilmour',
    description: 'Commercial software for variance component estimation. Available as standalone and R package versions. Industry standard for complex models.',
    status: 'paid',
    links: [
      { type: 'home', url: 'https://vsni.co.uk/software/', label: 'Home' },
      { type: 'docs', url: 'https://vsni.co.uk/software/asreml-sa/', label: 'Documentation' },
    ],
    tags: ['Variance Components', 'Commercial', 'Mixed Models'],
  },
  {
    id: 'echidnamms',
    name: 'EchidnaMMS',
    developer: 'Arthur Gilmour',
    description: 'New project by Arthur Gilmour. Appears to be a modern alternative to ASReml.',
    status: 'development',
    links: [
      { type: 'home', url: 'https://www.echidnamms.org/', label: 'Home' },
    ],
    tags: ['Variance Components', 'New'],
  },
  {
    id: 'dmu',
    name: 'DMU',
    developer: 'Per Madsen & Just Jensen (Aarhus University)',
    description: 'Package for analyzing multivariate mixed models in quantitative genetics and genomics.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://dmu.ghpc.au.dk/', label: 'Home' },
      { type: 'download', url: 'https://dmu.ghpc.au.dk/dmu/DMU/', label: 'Download' },
      { type: 'docs', url: 'https://dmu.ghpc.au.dk/dmu/DMU/Doc/', label: 'User Guide' },
    ],
    tags: ['Variance Components', 'Multivariate', 'Genomics'],
  },
  {
    id: 'gcta-vc',
    name: 'GCTA',
    developer: 'Yang Lab',
    description: 'Software for variance component analysis and GWAS using genome-wide SNPs. Available since 2011.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://yanglab.westlake.edu.cn/software/gcta/', label: 'Home' },
      { type: 'github', url: 'https://github.com/jianyangqt/gcta', label: 'GitHub' },
    ],
    tags: ['Variance Components', 'GWAS', 'Genomics'],
  },
  {
    id: 'helical-vc',
    name: 'Helical',
    description: 'Modern web-based database platform for management and storage of all manner of breeding program data including pedigree, performance, SNP data, and more, and includes a command line toolset for manipulating and processing genomic data for evaluations.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://www.helicalco.com/', label: 'Home' },
    ],
    tags: ['Variance Components', 'Database', 'Web Platform'],
  },
]

export const evaluationsSoftware: SoftwareTool[] = [
  {
    id: 'mixblup',
    name: 'MiXBLUP',
    developer: 'Jan ten Napel, Jeremie Vandenplas (Wageningen)',
    description: 'Built on Mix99. More affordable than other options. Cannot estimate variance components, only run evaluations with pre-estimated parameters.',
    status: 'paid',
    links: [
      { type: 'home', url: 'https://www.mixblup.eu/', label: 'Home' },
      { type: 'download', url: 'https://www.mixblup.eu/download.html', label: 'Download' },
    ],
    tags: ['Evaluations', 'BLUP', 'Commercial'],
  },
  {
    id: 'blupf90-eval',
    name: 'BLUPF90',
    developer: 'Ignacy Misztal (UGA)',
    description: 'Also used for running genetic evaluations. Requires license for iteration on data. Long running software used by many companies.',
    status: 'paid',
    links: [
      { type: 'home', url: 'http://nce.ads.uga.edu/wiki/doku.php', label: 'Home' },
    ],
    tags: ['Evaluations', 'BLUP', 'Industry'],
  },
  {
    id: 'bolt',
    name: 'BOLT',
    developer: 'Dan Garrick, Dorian Garrick, Bruce Golden',
    description: 'GPU accelerated software for extremely high performance and/or large scale genetic evaluations and breeding value prediction. Utilised in multiple very large multi-country and multi-breed implementations.',
    status: 'paid',
    links: [
      { type: 'home', url: 'https://www.helicalco.com/genomic-prediction', label: 'Home' },
    ],
    tags: ['Evaluations', 'BLUP', 'Commercial'],
  },
  {
    id: 'mix99',
    name: 'Mix99',
    developer: 'Finland',
    description: 'Base software for MiXBLUP. Solves large mixed model equations efficiently.',
    status: 'paid',
    links: [
      { type: 'home', url: 'https://www.luke.fi/en/services/mix99-solving-large-mixed-model-equations', label: 'Home' },
    ],
    tags: ['Evaluations', 'Mixed Models'],
  },
  {
    id: 'pest',
    name: 'PEST',
    description: 'Deprecated software for pedigree analysis and genetic evaluations.',
    status: 'deprecated',
    links: [
      { type: 'paper', url: 'https://gsejournal.biomedcentral.com/articles/10.1186/1297-9686-34-1-3', label: 'Paper' },
    ],
    tags: ['Evaluations', 'Deprecated'],
  },
]

export const inbreedingSoftware: SoftwareTool[] = [
  {
    id: 'matesel',
    name: 'Matesel',
    developer: 'Brian Kinghorn (Australia)',
    description: 'Likely the most utilized by industry today due to its comprehensive capabilities for mate selection and inbreeding management.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://www.matesel.com/', label: 'Home' },
    ],
    tags: ['Inbreeding', 'Mate Selection', 'Industry'],
  },
  {
    id: 'alphamate',
    name: 'AlphaMate',
    developer: 'Roslin Institute',
    description: 'Part of the Alpha Suite for managing inbreeding in breeding programs.',
    status: 'active',
    links: [
      { type: 'github', url: 'https://github.com/AlphaGenes/AlphaMate', label: 'GitHub' },
    ],
    tags: ['Inbreeding', 'Mate Selection', 'Alpha Suite'],
  },
  {
    id: 'eva',
    name: 'EVA',
    developer: 'Per Berg (formerly with Brian Kinghorn)',
    description: 'Tool for describing and optimizing selection given a penalty on rate of inbreeding.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://www.nordgen.org/our-work/farm-animals/the-eva-tool/#:~:text=The%20software%20program%20EVA%20has%20been%20developed%20by,more%20about%20the%20program%20and%20its%20importance%20below.', label: 'Home' },
      { type: 'paper', url: 'https://www.researchgate.net/publication/254781428_EVA_Realized_and_predicted_optimal_genetic_contributions', label: 'Paper' },
    ],
    tags: ['Inbreeding', 'Optimization'],
  },
  {
    id: 'optisel',
    name: 'optiSel R Package',
    description: 'R package for optimizing breeding schemes with consideration for inbreeding and genetic diversity.',
    status: 'active',
    links: [
      { type: 'docs', url: 'https://cran.r-project.org/web/packages/optiSel/index.html', label: 'CRAN' },
      { type: 'home', url: 'https://rdrr.io/cran/optiSel/', label: 'Documentation' },
    ],
    tags: ['Inbreeding', 'R Package', 'Optimization'],
  },
]

export const genomicProcessingSoftware: SoftwareTool[] = [
  {
    id: 'calc-grm',
    name: 'calc_grm',
    developer: 'MiXBLUP Suite',
    description: 'Process SNP chip genotypes. Performs QC and calculates A, G, and H matrices for genomic evaluations.',
    status: 'paid',
    links: [
      { type: 'home', url: 'https://www.mixblup.eu/', label: 'MiXBLUP Home' },
    ],
    tags: ['Genomic Processing', 'QC', 'GRM'],
  },
  {
    id: 'pregsf90',
    name: 'preGSf90',
    developer: 'BLUPF90 Suite',
    description: 'Similar to calc_grm. Processes genomic data and works with postGSf90 for GWAS.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://nce.ads.uga.edu/wiki/doku.php?id=readme.pregsf90', label: 'Home' },
    ],
    tags: ['Genomic Processing', 'QC', 'BLUPF90'],
  },
  {
    id: 'plink',
    name: 'PLINK',
    description: 'Very popular software to process SNP panels. Industry standard for genomic data processing and QC.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://www.cog-genomics.org/plink/', label: 'Home' },
      { type: 'github', url: 'https://github.com/chrchang/plink-ng', label: 'GitHub' },
    ],
    tags: ['Genomic Processing', 'QC', 'Industry Standard'],
  },
  {
    id: 'helical-genomic',
    name: 'Helical',
    description: 'Modern web-based database platform for management and storage of all manner of breeding program data including pedigree, performance, SNP data, and more, and includes a command line toolset for manipulating and processing genomic data for evaluations.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://www.helicalco.com/', label: 'Home' },
    ],
    tags: ['Genomic Processing', 'Database', 'Web Platform'],
  },
]

export const gwasSoftware: SoftwareTool[] = [
  {
    id: 'jwas',
    name: 'JWAS',
    developer: 'Hao Cheng (UC Davis)',
    description: 'Software for genome-wide association studies and genomic prediction. Written in Julia for high performance.',
    status: 'active',
    links: [
      { type: 'home', url: 'http://reworkhow.github.io/JWAS.jl/latest/', label: 'Home' },
      { type: 'github', url: 'https://github.com/reworkhow/JWAS.jl', label: 'GitHub' },
    ],
    tags: ['GWAS', 'Genomic Prediction', 'Julia'],
  },
  {
    id: 'gensel',
    name: 'Gensel',
    developer: 'Dorian Garrick & Rohan Fernando (Iowa State)',
    description: 'Deprecated software for Bayesian genomic prediction. Replaced by JWAS.',
    status: 'deprecated',
    links: [],
    tags: ['GWAS', 'Deprecated', 'Bayesian'],
  },
  {
    id: 'postgsf90',
    name: 'postGSf90',
    developer: 'BLUPF90 Suite',
    description: 'Uses EMMAX method. Computationally efficient by dividing the backsolved SNP effects for GWAS.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://nce.ads.uga.edu/wiki/doku.php?id=readme.postgsf90', label: 'Home' },
    ],
    tags: ['GWAS', 'EMMAX', 'BLUPF90'],
  },
  {
    id: 'bglr',
    name: 'BGLR',
    developer: 'Gustavo de los Campos & Paulino Perez-Rodriguez (MSU)',
    description: 'Performs Bayesian regressions for GWAS and genomic prediction. R package implementation.',
    status: 'active',
    links: [
      { type: 'github', url: 'https://github.com/gdlc/BGLR-R', label: 'GitHub' },
      { type: 'paper', url: 'https://www.genetics.org/content/198/2/483', label: '2014 Paper' },
    ],
    tags: ['GWAS', 'Bayesian', 'R Package'],
  },
  {
    id: 'gcta-gwas',
    name: 'GCTA',
    developer: 'Yang Lab',
    description: 'Can perform both variance component estimation and GWAS analyses.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://yanglab.westlake.edu.cn/software/gcta/', label: 'Home' },
    ],
    tags: ['GWAS', 'Variance Components'],
  },
]

export const imputationSoftware: SoftwareTool[] = [
  {
    id: 'beagle',
    name: 'Beagle',
    description: 'Imputation software for predicting missing genotype calls. Widely used standard.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://faculty.washington.edu/browning/beagle/beagle.html', label: 'Home' },
    ],
    tags: ['Imputation', 'Genotyping'],
  },
  {
    id: 'alphaimpute',
    name: 'AlphaImpute',
    developer: 'John Hickey (Roslin Institute)',
    description: 'Part of the Alpha Suite. Imputes genotypes using pedigree and sequence information.',
    status: 'active',
    links: [
      { type: 'github', url: 'https://github.com/AlphaGenes/AlphaImpute', label: 'GitHub' },
    ],
    tags: ['Imputation', 'Alpha Suite'],
  },
  {
    id: 'alphapeel',
    name: 'AlphaPeel',
    developer: 'John Hickey (Roslin Institute)',
    description: 'Part of the Alpha Suite. Advanced imputation and phasing.',
    status: 'active',
    links: [
      { type: 'github', url: 'https://github.com/AlphaGenes/AlphaPeel', label: 'GitHub' },
    ],
    tags: ['Imputation', 'Phasing', 'Alpha Suite'],
  },
  {
    id: 'fimpute',
    name: 'FImpute',
    description: 'Fast imputation software. Paid license for commercial use.',
    status: 'paid',
    links: [
      { type: 'home', url: 'http://www.aps.uoguelph.ca/~msargol/fimpute/', label: 'Home' },
    ],
    tags: ['Imputation', 'Commercial'],
  },
]

export const breedCompositionSoftware: SoftwareTool[] = [
  {
    id: 'structure',
    name: 'Structure',
    description: 'Software for computing breed composition percentages using population structure analysis.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://web.stanford.edu/group/pritchardlab/structure.html', label: 'Home' },
    ],
    tags: ['Breed Composition', 'Population Structure'],
  },
  {
    id: 'admixture',
    name: 'Admixture',
    description: 'Alternative method for breed composition analysis. Faster than Structure for large datasets.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://dalexander.github.io/admixture/', label: 'Home' },
    ],
    tags: ['Breed Composition', 'Admixture'],
  },
  {
    id: 'allele-freq',
    name: 'Allele Frequency Method',
    description: 'Very simple approach using normal or constrained regression on allele frequencies. Kuehn (normal) and Funkhouser (constrained) methods available.',
    status: 'active',
    links: [
      { type: 'paper', url: 'https://www.journalofanimalscience.org/article/S0022-0302(11)00080-4/pdf', label: 'Kuehn Paper' },
      { type: 'github', url: 'https://github.com/funkhou9/bovine-breed-compo', label: 'Funkhouser Code' },
    ],
    tags: ['Breed Composition', 'Regression'],
  },
]

export const simulationSoftware: SoftwareTool[] = [
  {
    id: 'alphasimr',
    name: 'AlphaSimR',
    developer: 'Chris Gaynor (Bayer), originally John Hickey (Roslin)',
    description: 'Part of Alpha Suite. Simulates breeding programs with high flexibility. R package implementation.',
    status: 'active',
    links: [
      { type: 'github', url: 'https://github.com/gaynorr/AlphaSimR', label: 'GitHub' },
      { type: 'paper', url: 'https://academic.oup.com/g3journal/article/11/2/jkaa017/6026015', label: 'Paper' },
    ],
    tags: ['Simulation', 'R Package', 'Alpha Suite'],
  },
  {
    id: 'mobps',
    name: 'MoBPS',
    developer: 'Torsten Pook (Wageningen)',
    description: 'Very much in development at Wageningen. Modular breeding program simulator with R interface.',
    status: 'development',
    links: [
      { type: 'github', url: 'https://github.com/tpook92/MoBPS', label: 'GitHub' },
      { type: 'paper', url: 'https://academic.oup.com/g3journal/article/10/6/1915/6026396', label: 'Paper' },
    ],
    tags: ['Simulation', 'R Package', 'In Development'],
  },
  {
    id: 'qmsim',
    name: 'QMSim',
    developer: 'Mehdi Sargolzaei (Guelph)',
    description: 'Still very good software, but development has stopped. Most people have turned to AlphaSimR or MoBPS.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://www.aps.uoguelph.ca/~msargol/qmsim/', label: 'Home' },
    ],
    tags: ['Simulation', 'Legacy'],
  },
  {
    id: 'adam',
    name: 'ADAM',
    description: 'Stochastic simulation program for animal breeding.',
    status: 'active',
    links: [
      { type: 'paper', url: 'https://gsejournal.biomedcentral.com/articles/10.1186/1297-9686-37-2-123', label: 'Paper' },
    ],
    tags: ['Simulation'],
  },
]

export const selectionIndexSoftware: SoftwareTool[] = [
  {
    id: 'selaction',
    name: 'SelAction',
    developer: 'Rutten, Bijma, Woolliams, van Arendonk (Wageningen)',
    description: 'Helps design breeding programs and calculate accuracy of selection indices.',
    status: 'active',
    links: [
      { type: 'paper', url: 'https://www.journalofanimalscience.org/article/S0022-0302(02)74191-4/pdf', label: 'Paper' },
    ],
    tags: ['Selection Index', 'Breeding Design'],
  },
  {
    id: 'selaction2',
    name: 'SelAction 2',
    developer: 'Jack Dekkers (Iowa State)',
    description: 'Still in development. Next generation of SelAction with enhanced capabilities.',
    status: 'development',
    links: [
      { type: 'paper', url: 'https://www.adsa.org/Portals/0/SiteContent/ADSA2023/2023_ADSA_Annual_Meeting_Abstracts.pdf', label: 'Abstract' },
    ],
    tags: ['Selection Index', 'In Development'],
  },
]

export const miscSoftware: SoftwareTool[] = [
  {
    id: 'openmendel',
    name: 'OpenMendel',
    description: 'Julia implementation of statistical genetics analysis. Modern, high-performance platform.',
    status: 'active',
    links: [
      { type: 'home', url: 'https://openmendel.github.io/', label: 'Home' },
      { type: 'github', url: 'https://github.com/OpenMendel', label: 'GitHub' },
    ],
    tags: ['Julia', 'Statistical Genetics'],
  },
]

export const allSoftware = {
  'variance-components': varianceComponentsSoftware,
  'evaluations': evaluationsSoftware,
  'inbreeding': inbreedingSoftware,
  'genomic-processing': genomicProcessingSoftware,
  'gwas': gwasSoftware,
  'imputation': imputationSoftware,
  'breed-composition': breedCompositionSoftware,
  'simulation': simulationSoftware,
  'selection-index': selectionIndexSoftware,
  'misc': miscSoftware,
}
