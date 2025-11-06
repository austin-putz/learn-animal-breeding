import { Building2, Globe, Mail, ExternalLink, Users } from 'lucide-react'

export default function ConsultingPage() {
  return (
    <div className="container py-12 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 mb-4">
          <Building2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Consulting Services</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Professional consulting firms specializing in animal breeding, quantitative genetics, and genetic evaluation
        </p>
      </header>

      <div className="space-y-8">
        {/* AbacusBio */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg border-2 border-blue-200 dark:border-blue-800 p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <Building2 className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2 text-blue-900 dark:text-blue-100">AbacusBio</h2>
              <p className="text-blue-700 dark:text-blue-300 mb-4">
                International Agriscience Consulting Firm (Est. 2001)
              </p>
              <a
                href="https://abacusbio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
              >
                <Globe className="w-4 h-4" />
                abacusbio.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              AbacusBio delivers advanced genetic insights, strategic economic analysis, and sustainable innovations
              for the agricultural sector. With offices in New Zealand, Australia, UK, and North America, they have
              delivered projects across 30+ countries.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-5 border border-blue-200 dark:border-blue-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  Genetic Improvement Services
                </h3>
                <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>• Breeding strategy design and optimization</li>
                  <li>• Trait prioritization and economic evaluation</li>
                  <li>• Genetic and genomic evaluation services</li>
                  <li>• Selection and mating optimization</li>
                  <li>• Data strategy development</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-neutral-900 rounded-lg p-5 border border-blue-200 dark:border-blue-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  R&D and Technology Assessment
                </h3>
                <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>• Technical feasibility appraisals</li>
                  <li>• Market and adoption analysis</li>
                  <li>• Impact assessment and review</li>
                  <li>• Business case development</li>
                  <li>• Emerging technology evaluation</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-neutral-900 rounded-lg p-5 border border-blue-200 dark:border-blue-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  Agribusiness Consulting
                </h3>
                <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>• Farm systems modeling and optimization</li>
                  <li>• Environmental impact quantification</li>
                  <li>• Revenue stream development</li>
                  <li>• Production and supply chain analysis</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-neutral-900 rounded-lg p-5 border border-blue-200 dark:border-blue-700">
                <h3 className="text-lg font-semibold mb-3 text-blue-900 dark:text-blue-100">
                  Proprietary Tools
                </h3>
                <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>• <strong>Dtreo:</strong> Performance tracking and genetic analysis</li>
                  <li>• <strong>IndexSim:</strong> Interactive selection index simulator</li>
                  <li>• <strong>Ani-Mate:</strong> Breeding optimization and inbreeding management</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Notable Impact:</strong> Projects have influenced over 220 million hectares (14% of global arable land).
                Developed breeding objectives for 6 major Angus herdbooks worldwide. Improved New Zealand dairy fertility
                EBV predictive ability by 68%.
              </p>
            </div>
          </div>
        </section>

        {/* Helical */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg border-2 border-purple-200 dark:border-purple-800 p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <Building2 className="w-10 h-10 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2 text-purple-900 dark:text-purple-100">Helical</h2>
              <p className="text-purple-700 dark:text-purple-300 mb-4">
                Advanced Genetic Data Management Solutions
              </p>
              <a
                href="https://www.helicalco.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
              >
                <Globe className="w-4 h-4" />
                helicalco.com
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p className="text-neutral-700 dark:text-neutral-300 mb-6">
              Helical provides advanced genetic data management and genomic prediction solutions for the animal breeding
              industry. Founded by leading researchers in quantitative genetics, they offer cutting-edge tools and
              consulting services.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-5 border border-purple-200 dark:border-purple-700">
                <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">
                  Core Services
                </h3>
                <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>• SNP database management</li>
                  <li>• Genomic prediction solutions</li>
                  <li>• Genetic evaluation consulting</li>
                  <li>• Data-driven breeding strategies</li>
                  <li>• Custom software development</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-neutral-900 rounded-lg p-5 border border-purple-200 dark:border-purple-700">
                <h3 className="text-lg font-semibold mb-3 text-purple-900 dark:text-purple-100">
                  Technology
                </h3>
                <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                  <li>• BOLT software suite</li>
                  <li>• Advanced genomic evaluation tools</li>
                  <li>• High-performance computing solutions</li>
                  <li>• Integration with existing systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-100 dark:bg-purple-900 rounded-lg p-4">
              <p className="text-sm text-purple-900 dark:text-purple-100">
                <strong>Expertise:</strong> Founded by world-renowned quantitative geneticists with decades of experience
                in animal breeding, genetic evaluation, and genomic prediction.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
              <Users className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Need Consulting Assistance?</h2>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                While I don't personally offer consulting services, I'm happy to help connect you with the right
                experts for your project needs.
              </p>
              <div className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                <p className="text-sm">
                  Email me for consulting referrals or to discuss your specific requirements, and I'll point you
                  in the right direction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-6">
          <h2 className="text-xl font-semibold mb-3">Why Work with Consultants?</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-neutral-700 dark:text-neutral-300">
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Expertise</h3>
              <p>
                Access specialized knowledge in breeding program design, genomic selection, and genetic evaluation
                that may not be available in-house.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Objectivity</h3>
              <p>
                Independent assessment of your breeding strategies, technologies, and data infrastructure with
                unbiased recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-neutral-900 dark:text-neutral-100">Efficiency</h3>
              <p>
                Accelerate your breeding program development with proven methodologies and avoid costly mistakes
                through expert guidance.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
