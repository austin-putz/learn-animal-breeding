import { Mail, Linkedin, Github } from 'lucide-react'

export const metadata = {
  title: 'About',
  description: 'About Austin Putz and the Learn Animal Breeding platform.',
}

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Educational resources for animal breeding and quantitative genetics
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed">
            Hi, I'm <strong>Austin Putz</strong>. I currently work as a geneticist for{' '}
            <a href="https://www.hendrix-genetics.com/en/" target="_blank" rel="noopener noreferrer">
              Hendrix Genetics
            </a>, specifically within{' '}
            <a href="https://swine.hendrix-genetics.com/en/" target="_blank" rel="noopener noreferrer">
              Hendrix Genetics Swine
            </a>.
          </p>

          <p className="text-lg leading-relaxed">
            This website was created during my personal time to address the critical shortage of
            animal breeding education resources. With the drastic reduction in animal breeding
            faculty and graduate programs, I wanted to create a centralized hub for knowledge
            preservation and dissemination.
          </p>

          <h2>Mission</h2>
          <p>
            The goal of this platform is to provide free access to educational resources, books,
            course materials, and software tools for students and professionals in animal breeding
            and quantitative genetics worldwide.
          </p>

          <h2>Contact</h2>
          <p>I welcome contributions and feedback! Please reach out if you have:</p>
          <ul>
            <li>Course notes or educational materials you'd like to share</li>
            <li>Suggestions for additional resources</li>
            <li>Found any issues with the website</li>
            <li>Questions or feedback</li>
          </ul>

          {/* Contact Links */}
          <div className="not-prose flex gap-4 my-8">
            <a
              href="mailto:putz.austin@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/austin-putz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com/austin-putz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>

          <h2>Disclaimer</h2>
          <p className="text-sm">
            All work on this website was completed during my personal time and is not part of my
            professional duties. Any opinions expressed are my own and do not represent my employer.
          </p>
        </div>
      </div>
    </div>
  )
}
