import { Youtube, PlayCircle, TrendingUp, BarChart3, Network, Dna, GraduationCap } from 'lucide-react'

export const metadata = {
  title: 'YouTube Resources',
  description: 'Curated YouTube channels and playlists for learning statistics, linear algebra, and animal breeding.',
}

export default function YouTubePage() {
  return (
    <div className="container py-12 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900 mb-4">
          <Youtube className="w-8 h-8 text-red-600 dark:text-red-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">YouTube Resources</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Curated YouTube channels, playlists, and courses for learning statistics, mathematics, and animal breeding
        </p>
      </header>

      <div className="space-y-12">
        {/* Linear Algebra Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Network className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Linear Algebra</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Foundation of statistics and animal breeding concepts
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 3Blue1Brown */}
            <a
              href="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-600 rounded-lg shadow-md">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <PlayCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                3Blue1Brown
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                Essence of Linear Algebra
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Visual and intuitive explanations of linear algebra concepts
              </p>
            </a>

            {/* Gilbert Strang (MIT) */}
            <a
              href="https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-600 rounded-lg shadow-md">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <PlayCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Gilbert Strang
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                MIT OpenCourseWare
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Complete MIT linear algebra course lectures
              </p>
            </a>

            {/* Dr. Jim Hefferon */}
            <a
              href="https://www.youtube.com/@jjhefferon"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-600 rounded-lg shadow-md">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <PlayCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Dr. Jim Hefferon
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                Full Undergraduate Course
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Comprehensive linear algebra course from University of Vermont
              </p>
            </a>

            {/* Geeks Lesson */}
            <a
              href="https://www.youtube.com/@GeeksLesson"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-600 rounded-lg shadow-md">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <PlayCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Geeks Lesson
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                Complete Linear Algebra Course
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Comprehensive tutorials covering all linear algebra topics
              </p>
            </a>

            {/* Bright Side of Mathematics */}
            <a
              href="https://www.youtube.com/@brightsideofmaths"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-600 rounded-lg shadow-md">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <PlayCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Bright Side of Mathematics
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                Linear Algebra Playlist
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Clear explanations with visual demonstrations
              </p>
            </a>

            {/* Jon Krohn */}
            <a
              href="https://www.youtube.com/@jonkrohn"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-900 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-600 rounded-lg shadow-md">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <PlayCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Jon Krohn
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                Linear Algebra for Machine Learning
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Applied linear algebra with ML focus
              </p>
            </a>
          </div>
        </section>

        {/* Basic Statistics - Coming Soon */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg">
              <BarChart3 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Basic Statistics</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Foundational statistical concepts and methods
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg p-12 text-center">
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full mb-4">
              Coming Soon
            </span>
            <p className="text-neutral-700 dark:text-neutral-300">
              YouTube channels and playlists for basic statistics will be added here
            </p>
          </div>
        </section>

        {/* Advanced Statistics - Coming Soon */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Advanced Statistics</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Advanced statistical methods and theory
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-200 dark:border-purple-800 rounded-lg p-12 text-center">
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full mb-4">
              Coming Soon
            </span>
            <p className="text-neutral-700 dark:text-neutral-300">
              YouTube channels and playlists for advanced statistics will be added here
            </p>
          </div>
        </section>

        {/* Mixed Models - Coming Soon */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg">
              <Network className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Mixed Models</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Linear and generalized linear mixed models
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg p-12 text-center">
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full mb-4">
              Coming Soon
            </span>
            <p className="text-neutral-700 dark:text-neutral-300">
              YouTube channels and playlists for mixed models will be added here
            </p>
          </div>
        </section>

        {/* BLUP - Coming Soon */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-cyan-100 dark:bg-cyan-900 rounded-lg">
              <GraduationCap className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">BLUP</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Best Linear Unbiased Prediction methods
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950 dark:to-teal-950 border-2 border-cyan-200 dark:border-cyan-800 rounded-lg p-12 text-center">
            <span className="inline-flex items-center px-4 py-2 text-sm font-medium bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 rounded-full mb-4">
              Coming Soon
            </span>
            <p className="text-neutral-700 dark:text-neutral-300">
              YouTube channels and playlists for BLUP will be added here
            </p>
          </div>
        </section>

        {/* Animal Breeding */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg">
              <Dna className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Animal Breeding</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Specialized topics in animal breeding and genetics
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Arthur Gilmour */}
            <a
              href="https://www.youtube.com/watch?v=example"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-900 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-600 rounded-lg shadow-md">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <PlayCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Arthur Gilmour
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                ASReml Discussion
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Expert discussion on ASReml software for genetic analysis
              </p>
            </a>

            {/* Brian Wickham */}
            <a
              href="https://www.youtube.com/watch?v=example"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950 dark:to-orange-900 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-red-600 rounded-lg shadow-md">
                  <Youtube className="w-6 h-6 text-white" />
                </div>
                <PlayCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Brian Wickham
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                Life History Presentation
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Career insights and animal breeding experiences
              </p>
            </a>
          </div>
        </section>

        {/* Info Box */}
        <section className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 rounded-lg border-2 border-red-200 dark:border-red-800 p-8">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <Youtube className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 text-red-900 dark:text-red-100">About These Resources</h2>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                These YouTube resources have been curated to provide a structured learning path from foundational
                mathematics through advanced statistical methods and specialized animal breeding topics. All channels
                and playlists are freely available on YouTube.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
