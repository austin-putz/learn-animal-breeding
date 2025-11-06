import { Pencil, Calendar, BookOpen, Bell } from 'lucide-react'

export const metadata = {
  title: 'Blog',
  description: 'Blog posts about animal breeding, quantitative genetics, and breeding program management.',
}

export default function BlogPage() {
  return (
    <div className="container py-12 max-w-4xl mx-auto">
      {/* Hero Header */}
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-800 mb-6">
          <Pencil className="w-10 h-10 text-purple-600 dark:text-purple-400" />
        </div>
        <h1 className="text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400">
          Insights, updates, and discussions on animal breeding and quantitative genetics
        </p>
      </header>

      {/* Coming Soon Section */}
      <div className="space-y-8">
        {/* Main Coming Soon Card */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg border-2 border-blue-200 dark:border-blue-800 p-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-6 bg-white dark:bg-neutral-900 rounded-full shadow-lg">
              <Calendar className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-blue-900 dark:text-blue-100">Coming Soon</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
            The blog is currently under development. Soon you'll find articles, tutorials, and insights
            about animal breeding, quantitative genetics, genomic selection, and breeding program management.
          </p>
        </section>

        {/* Planned Content */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 rounded-lg border-2 border-emerald-200 dark:border-emerald-800 p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-emerald-900 dark:text-emerald-100">Planned Topics</h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                Here are some topics we're planning to cover in future blog posts:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-emerald-200 dark:border-emerald-700">
                  <h3 className="font-semibold mb-2 text-emerald-900 dark:text-emerald-100">Genomic Selection</h3>
                  <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>• Implementation strategies</li>
                    <li>• Accuracy considerations</li>
                    <li>• Training population design</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-emerald-200 dark:border-emerald-700">
                  <h3 className="font-semibold mb-2 text-emerald-900 dark:text-emerald-100">Statistical Methods</h3>
                  <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>• Mixed model equations</li>
                    <li>• Bayesian approaches</li>
                    <li>• Variance component estimation</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-emerald-200 dark:border-emerald-700">
                  <h3 className="font-semibold mb-2 text-emerald-900 dark:text-emerald-100">Breeding Programs</h3>
                  <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>• Selection strategies</li>
                    <li>• Mating systems</li>
                    <li>• Inbreeding management</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-emerald-200 dark:border-emerald-700">
                  <h3 className="font-semibold mb-2 text-emerald-900 dark:text-emerald-100">Software & Tools</h3>
                  <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1">
                    <li>• Software tutorials</li>
                    <li>• R and Python examples</li>
                    <li>• Best practices</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Updated */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg border-2 border-purple-200 dark:border-purple-800 p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <Bell className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-purple-900 dark:text-purple-100">Stay Updated</h2>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 max-w-2xl mx-auto">
            Want to be notified when the blog launches? Follow me on LinkedIn or check back regularly
            for updates on new content.
          </p>
          <a
            href="https://www.linkedin.com/in/austin-putz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Follow on LinkedIn
          </a>
        </section>
      </div>
    </div>
  )
}
