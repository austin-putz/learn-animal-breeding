import { Mail, Linkedin, Github, User, Target, Heart, AlertCircle, BookOpen, GraduationCap, Users } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'About',
  description: 'About Austin Putz and the Learn Animal Breeding platform.',
}

export default function AboutPage() {
  return (
    <div className="container py-12 max-w-6xl mx-auto">
      {/* Hero Header */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">About</h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Educational resources for animal breeding and quantitative genetics
        </p>
      </header>

      {/* Image Showcase Section */}
      <section className="mb-12 space-y-6">
        {/* Main Profile Photo - Top Center */}
        <div className="flex justify-center">
          <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-primary-200 dark:border-primary-800">
            <Image
              src="/images/about/austin-putz.jpg"
              alt="Austin Putz"
              width={300}
              height={375}
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm font-medium text-center">Austin Putz, PhD</p>
            </div>
          </div>
        </div>

        {/* Supporting Images - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hendrix Meeting Photo */}
          <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-primary-200 dark:border-primary-800">
            <Image
              src="/images/about/austin-hendrix-meeting.jpg"
              alt="Austin presenting at Hendrix Genetics meeting"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm font-medium">Presenting at Hendrix Genetics</p>
            </div>
          </div>

          {/* ANS Award Photo */}
          <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-primary-200 dark:border-primary-800">
            <Image
              src="/images/about/austin-ans-award.png"
              alt="Austin receiving American Society of Animal Science award"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <p className="text-white text-sm font-medium">Animal Science Research Excellence Award 2018</p>
            </div>
          </div>
        </div>
      </section>

      <div className="space-y-8">
        {/* About Me Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-950 dark:to-blue-950 rounded-lg border-2 border-primary-200 dark:border-primary-800 p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <GraduationCap className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-primary-900 dark:text-primary-100">About Me</h2>
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
                <p className="text-lg leading-relaxed">
                  Hi, I'm <strong className="text-primary-700 dark:text-primary-300">Austin Putz</strong>. I currently work as a geneticist for{' '}
                  <a
                    href="https://www.hendrix-genetics.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    Hendrix Genetics
                  </a>, specifically within{' '}
                  <a
                    href="https://swine.hendrix-genetics.com/en/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    Hendrix Genetics Swine
                  </a>. Austin is also an Affiliate Professor within the{' '}
                  <a
                    href="https://www.ans.iastate.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline font-medium"
                  >
                    Animal Science Department at Iowa State University
                  </a>.
                </p>
                <p className="text-lg leading-relaxed">
                  This website was created during my personal time to address the critical shortage of
                  animal breeding education resources. With the drastic reduction in animal breeding
                  faculty and graduate programs, I wanted to create a centralized hub for knowledge
                  preservation and dissemination.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-950 dark:to-blue-950 rounded-lg border-2 border-primary-200 dark:border-primary-800 p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-primary-900 dark:text-primary-100">Mission</h2>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6">
                The goal of this platform is to provide free access to educational resources, books,
                course materials, and software tools for students and professionals in animal breeding
                and quantitative genetics worldwide.
              </p>

              {/* Mission Points */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-primary-200 dark:border-primary-700">
                  <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-primary-900 dark:text-primary-100">Free Access</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Open educational resources available to everyone
                  </p>
                </div>
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-primary-200 dark:border-primary-700">
                  <Users className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-primary-900 dark:text-primary-100">Community</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Building a global community of learners and professionals
                  </p>
                </div>
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-primary-200 dark:border-primary-700">
                  <Heart className="w-6 h-6 text-primary-600 dark:text-primary-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-primary-900 dark:text-primary-100">Preservation</h3>
                  <p className="text-sm text-neutral-700 dark:text-neutral-300">
                    Preserving knowledge for future generations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-950 dark:to-blue-950 rounded-lg border-2 border-primary-200 dark:border-primary-800 p-8">
          <div className="flex items-start gap-6 mb-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <Mail className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-primary-900 dark:text-primary-100">Contact</h2>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 mb-6">
                I welcome contributions and feedback! Please reach out if you have:
              </p>

              {/* Contact Reasons */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-primary-200 dark:border-primary-700">
                  <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-0.5">•</span>
                      <span>Course notes or educational materials you'd like to share</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-0.5">•</span>
                      <span>Suggestions for additional resources</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-primary-200 dark:border-primary-700">
                  <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-0.5">•</span>
                      <span>Found any issues with the website</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary-500 mt-0.5">•</span>
                      <span>Questions or feedback</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:putz.austin@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-900 border-2 border-primary-300 dark:border-primary-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:scale-105 transition-all shadow-md"
                >
                  <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-medium">Email</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/austin-putz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-900 border-2 border-primary-300 dark:border-primary-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:scale-105 transition-all shadow-md"
                >
                  <Linkedin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/austin-putz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-neutral-900 border-2 border-primary-300 dark:border-primary-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:scale-105 transition-all shadow-md"
                >
                  <Github className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-950 dark:to-blue-950 rounded-lg border-2 border-primary-200 dark:border-primary-800 p-8">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
              <AlertCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4 text-primary-900 dark:text-primary-100">Disclaimer</h2>
              <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                All work on this website was completed during my personal time and is not part of my
                professional duties. Any opinions expressed are my own and do not represent my employer.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
