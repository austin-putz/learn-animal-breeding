'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
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
  Package
} from 'lucide-react'

const categories = [
  {
    name: 'Variance Components',
    href: '/resources/software/variance-components',
    icon: Calculator,
    description: 'Estimate variance components',
  },
  {
    name: 'Evaluations',
    href: '/resources/software/evaluations',
    icon: Award,
    description: 'Run genetic evaluations',
  },
  {
    name: 'Inbreeding',
    href: '/resources/software/inbreeding',
    icon: Users,
    description: 'Manage inbreeding',
  },
  {
    name: 'Genomic Processing',
    href: '/resources/software/genomic-processing',
    icon: Dna,
    description: 'Process SNP data',
  },
  {
    name: 'GWAS',
    href: '/resources/software/gwas',
    icon: BarChart3,
    description: 'Genome-wide association',
  },
  {
    name: 'Imputation',
    href: '/resources/software/imputation',
    icon: Shuffle,
    description: 'Impute missing genotypes',
  },
  {
    name: 'Breed Composition',
    href: '/resources/software/breed-composition',
    icon: PieChart,
    description: 'Estimate breed percentages',
  },
  {
    name: 'Simulation',
    href: '/resources/software/simulation',
    icon: PlayCircle,
    description: 'Simulate breeding programs',
  },
  {
    name: 'Selection Index',
    href: '/resources/software/selection-index',
    icon: Target,
    description: 'Design selection schemes',
  },
  {
    name: 'Miscellaneous',
    href: '/resources/software/misc',
    icon: Package,
    description: 'Other useful tools',
  },
]

export function SoftwareSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="sticky top-24">
        <h3 className="text-lg font-semibold mb-4">Software Categories</h3>
        <nav className="space-y-1">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = pathname === category.href

            return (
              <Link
                key={category.href}
                href={category.href}
                className={`
                  flex items-start gap-3 px-3 py-2 rounded-lg transition-colors
                  ${
                    isActive
                      ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                      : 'hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  }
                `}
              >
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm">{category.name}</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {category.description}
                  </div>
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
