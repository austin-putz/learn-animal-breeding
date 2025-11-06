import { FileText, BookOpen, ExternalLink, Dna, BarChart3 } from 'lucide-react'

export const metadata = {
  title: 'My Notes',
  description: 'Personal notes, tutorials, and books on animal breeding and statistics by Austin Putz.',
}

export default function MyNotesPage() {
  return (
    <div className="container py-12 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 mb-4">
          <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">My Notes</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Personal notes, tutorials, and educational materials on animal breeding and statistics
        </p>
      </header>

      <div className="space-y-12">
        {/* RPub Files Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <ExternalLink className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">RPub Files</h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Interactive R tutorials created for classes at Iowa State University
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* A Matrix */}
            <a
              href="https://rpubs.com/amputz/Amatrix"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                  <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Learning the 'A' Matrix
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Interactive tutorial on the additive relationship matrix used in quantitative genetics
              </p>
            </a>

            {/* BLUP */}
            <a
              href="https://rpubs.com/amputz/BLUP"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                  <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <ExternalLink className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Introduction to BLUP
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Learn Best Linear Unbiased Prediction (BLUP) for genetic evaluation
              </p>
            </a>

            {/* Single-Step GBLUP */}
            <a
              href="https://rpubs.com/amputz/GBLUP_and_ssGBLUP"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                  <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <ExternalLink className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Introduction to Single-Step GBLUP
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                Comprehensive guide to genomic BLUP and single-step genomic evaluation
              </p>
            </a>
          </div>
        </section>

        {/* Books Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg">
              <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold">Books</h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            Comprehensive Quarto books covering advanced topics in animal breeding and statistics
          </p>

          <div className="space-y-8">
            {/* Animal Breeding Books */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Dna className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100">Animal Breeding</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Animal Models */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                      <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Animal Models</h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Comprehensive guide to animal models for genetic evaluation
                  </p>
                </div>

                {/* Breeding Program Design */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                      <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Breeding Program Design</h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Strategic planning and optimization of livestock breeding programs
                  </p>
                </div>
              </div>
            </div>

            {/* Statistics Books */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100">Statistics</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Linear Models */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                      <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Linear Models</h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Foundational statistical methods for data analysis and modeling
                  </p>
                </div>

                {/* Experimental Design */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                      <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full">
                      Coming Soon
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Experimental Design</h4>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Design and analysis of agricultural and breeding experiments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Box */}
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-lg border-2 border-amber-200 dark:border-amber-800 p-8">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <FileText className="w-8 h-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-amber-900 dark:text-amber-100">About These Materials</h2>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                These notes and books represent my personal study materials, lecture notes, and tutorials
                developed over years of teaching and research in animal breeding and quantitative genetics.
                All materials are freely available for educational purposes.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
