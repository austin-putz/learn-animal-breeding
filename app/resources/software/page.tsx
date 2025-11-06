import Link from 'next/link'
import { SoftwareSidebar } from '@/components/software/SoftwareSidebar'
import {
  Calculator,
  Award,
  Users,
  Dna,
  BarChart3,
  Shuffle,
  PieChart,
  PlayCircle,
  Target,
  Package,
  FileText
} from 'lucide-react'

const categories = [
  {
    name: 'Variance Components',
    href: '/resources/software/variance-components',
    icon: Calculator,
    description: 'Software for estimating variance components in mixed models: BLUPF90, ASReml, DMU, GCTA',
    toolCount: 5,
    color: 'blue',
  },
  {
    name: 'Evaluations',
    href: '/resources/software/evaluations',
    icon: Award,
    description: 'Run genetic evaluations and predict breeding values: MiXBLUP, BLUPF90, BOLT, Mix99',
    toolCount: 5,
    color: 'purple',
  },
  {
    name: 'Inbreeding',
    href: '/resources/software/inbreeding',
    icon: Users,
    description: 'Manage inbreeding and optimize mate selection: Matesel, AlphaMate, EVA, optiSel',
    toolCount: 4,
    color: 'red',
  },
  {
    name: 'Genomic Processing',
    href: '/resources/software/genomic-processing',
    icon: Dna,
    description: 'Process SNP chip data and calculate genomic relationships: calc_grm, preGSf90, PLINK',
    toolCount: 3,
    color: 'green',
  },
  {
    name: 'GWAS',
    href: '/resources/software/gwas',
    icon: BarChart3,
    description: 'Genome-wide association studies and genomic prediction: JWAS, postGSf90, BGLR, GCTA',
    toolCount: 5,
    color: 'yellow',
  },
  {
    name: 'Imputation',
    href: '/resources/software/imputation',
    icon: Shuffle,
    description: 'Impute missing genotypes: Beagle, AlphaImpute, AlphaPeel, FImpute',
    toolCount: 4,
    color: 'pink',
  },
  {
    name: 'Breed Composition',
    href: '/resources/software/breed-composition',
    icon: PieChart,
    description: 'Estimate breed composition percentages: Structure, Admixture, Allele Frequency methods',
    toolCount: 3,
    color: 'indigo',
  },
  {
    name: 'Simulation',
    href: '/resources/software/simulation',
    icon: PlayCircle,
    description: 'Simulate breeding programs: AlphaSimR, MoBPS, QMSim, ADAM',
    toolCount: 4,
    color: 'teal',
  },
  {
    name: 'Selection Index',
    href: '/resources/software/selection-index',
    icon: Target,
    description: 'Design breeding schemes and calculate accuracy: SelAction, SelAction 2',
    toolCount: 2,
    color: 'orange',
  },
  {
    name: 'Miscellaneous',
    href: '/resources/software/misc',
    icon: Package,
    description: 'Other useful tools: OpenMendel statistical genetics suite',
    toolCount: 1,
    color: 'gray',
  },
]

const colorClasses = {
  blue: 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800',
  purple: 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800',
  red: 'from-red-50 to-red-100 dark:from-red-950 dark:to-red-900 border-red-200 dark:border-red-800',
  green: 'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800',
  yellow: 'from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900 border-yellow-200 dark:border-yellow-800',
  pink: 'from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900 border-pink-200 dark:border-pink-800',
  indigo: 'from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 border-indigo-200 dark:border-indigo-800',
  teal: 'from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-teal-200 dark:border-teal-800',
  orange: 'from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900 border-orange-200 dark:border-orange-800',
  gray: 'from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 border-gray-200 dark:border-gray-800',
}

export default function SoftwarePage() {
  return (
    <div className="container py-12">
      <div className="flex gap-8">
        <SoftwareSidebar />

        <main className="flex-1">
          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Software Tools</h1>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mb-6">
              Comprehensive catalog of software tools for animal breeding, quantitative genetics, and genomic analysis.
              From variance component estimation to breeding program simulation.
            </p>

            {/* Reference Link */}
            <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Recommended Reading
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                    Nice short article by Ignacy Misztal on software in animal breeding:
                  </p>
                  <a
                    href="http://nce.ads.uga.edu/~ignacy/numpub/oldpapers/wc94.PDF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View PDF →
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Category Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = category.icon
              const colorClass = colorClasses[category.color as keyof typeof colorClasses]

              return (
                <Link
                  key={category.href}
                  href={category.href}
                  className="group"
                >
                  <div
                    className={`
                      p-6 rounded-lg border-2 transition-all duration-300 h-full
                      bg-gradient-to-br ${colorClass}
                      hover:shadow-lg hover:scale-[1.02]
                    `}
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-sm">
                          <Icon className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {category.name}
                          </h3>
                          <div className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                            {category.toolCount} tool{category.toolCount !== 1 ? 's' : ''}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300 flex-1">
                        {category.description}
                      </p>
                      <div className="mt-4 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                        View tools →
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Info Section */}
          <div className="mt-12 p-6 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-xl font-semibold mb-4">About These Tools</h2>
            <div className="space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              <p>
                <strong>Open Source & Commercial:</strong> This list includes both free/open-source tools
                and commercial software. Paid tools are clearly marked with a 💳 badge.
              </p>
              <p>
                <strong>Active Development:</strong> Software development status is indicated with badges:
                ✓ Active, 🚧 In Development, ⚠️ Deprecated. Many tools are actively maintained by research groups.
              </p>
              <p>
                <strong>University Resources:</strong> Check with your institution's IT department or library
                for potential site licenses for commercial software like ASReml or MiXBLUP.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
