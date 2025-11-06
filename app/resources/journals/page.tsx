import { BookOpen, Search, Users, Twitter, Linkedin, ExternalLink } from 'lucide-react'

export default function JournalsPage() {
  return (
    <div className="container py-12 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 mb-4">
          <BookOpen className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Journals & Research</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Key journals and platforms for staying current with animal breeding and quantitative genetics research
        </p>
      </header>

      <div className="space-y-12">
        {/* Research Platforms */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Find Papers & Follow Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-white dark:bg-neutral-900 rounded-full mb-4 shadow-lg">
                  <Search className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Google Scholar
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  Search academic papers and follow authors for publication alerts
                </p>
                <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
            </a>

            {/* ResearchGate */}
            <a
              href="https://www.researchgate.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900 border-2 border-teal-200 dark:border-teal-800 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-white dark:bg-neutral-900 rounded-full mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  ResearchGate
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  Connect with researchers and access full-text papers
                </p>
                <ExternalLink className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              </div>
            </a>

            {/* Twitter/X */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-950 dark:to-sky-900 border-2 border-sky-200 dark:border-sky-800 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-white dark:bg-neutral-900 rounded-full mb-4 shadow-lg">
                  <Twitter className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  Twitter / X
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  Follow researchers for real-time updates and discussions
                </p>
                <ExternalLink className="w-4 h-4 text-sky-600 dark:text-sky-400" />
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-2 border-blue-300 dark:border-indigo-800 rounded-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-white dark:bg-neutral-900 rounded-full mb-4 shadow-lg">
                  <Linkedin className="w-8 h-8 text-blue-700 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                  Network with professionals and follow research updates
                </p>
                <ExternalLink className="w-4 h-4 text-blue-700 dark:text-blue-400" />
              </div>
            </a>
          </div>
        </section>

        {/* Key Journals */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Key Journals in Animal Breeding & Genetics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GSE */}
            <a
              href="https://gsejournal.biomedcentral.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900 border-2 border-green-200 dark:border-green-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                    <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      GSE
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                      Open Access
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 flex-1">
                  Genetics Selection Evolution
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  BMC - Leading open-access journal in quantitative genetics and animal breeding
                </p>
              </div>
            </a>

            {/* JAS */}
            <a
              href="https://academic.oup.com/jas"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-950 dark:to-orange-900 border-2 border-red-200 dark:border-red-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                    <BookOpen className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      JAS
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                      ASAS Journal
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 flex-1">
                  Journal of Animal Science
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Premier journal for animal science research and genetics
                </p>
              </div>
            </a>

            {/* JABG */}
            <a
              href="https://onlinelibrary.wiley.com/journal/14390388"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-950 dark:to-violet-900 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                    <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      JABG
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                      Wiley
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 flex-1">
                  Journal of Animal Breeding and Genetics
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Specialized in breeding methodologies and genetic improvement
                </p>
              </div>
            </a>

            {/* G3 */}
            <a
              href="https://academic.oup.com/g3journal"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-950 dark:to-yellow-900 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                    <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      G3
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                      Open Access
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 flex-1">
                  Genes | Genomes | Genetics
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  GSA - Broad coverage of genetics including quantitative genetics
                </p>
              </div>
            </a>

            {/* Genetics */}
            <a
              href="https://academic.oup.com/genetics"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                    <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      Genetics
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                      GSA Journal
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 flex-1">
                  Genetics
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Flagship journal of Genetics Society of America
                </p>
              </div>
            </a>

            {/* JDS */}
            <a
              href="https://www.journalofdairyscience.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-3 bg-white dark:bg-neutral-900 rounded-lg shadow-md">
                    <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      JDS
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-2">
                      ADSA Journal
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2 flex-1">
                  Journal of Dairy Science
                </p>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Leading journal for dairy cattle genetics and breeding
                </p>
              </div>
            </a>
          </div>
        </section>

        {/* Tips Section */}
        <section className="bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
          <h2 className="text-xl font-semibold mb-4">Tips for Staying Current</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-neutral-700 dark:text-neutral-300">
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                📧 Email Alerts
              </h3>
              <p>
                Subscribe to journal mailing lists for table of contents alerts. Most journals offer
                free email notifications when new issues are published.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                🔔 Follow Researchers
              </h3>
              <p>
                Use Google Scholar to follow key researchers. You'll receive alerts when they publish
                new papers or when their work is cited.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                🌐 Social Media
              </h3>
              <p>
                Many researchers share their work on Twitter/X and LinkedIn. Follow them for
                preprints, conference updates, and research discussions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                📚 University Access
              </h3>
              <p>
                Check your university library for journal subscriptions. Many institutions provide
                free access to paywalled journals through VPN or library systems.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
