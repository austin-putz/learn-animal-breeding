import { Mail, Linkedin, Github } from 'lucide-react'
import Image from 'next/image'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { Colophon } from '@/components/layout/Colophon'

export const metadata = {
  title: 'About',
  description: 'About Austin Putz and the Learn Animal Breeding platform.',
}

const photos = [
  {
    src: '/images/about/austin-hendrix-meeting.jpg',
    alt: 'Austin presenting at Hendrix Genetics meeting',
    caption: 'Presenting at Hendrix Genetics in 2018',
    width: 600,
    height: 400,
  },
  {
    src: '/images/about/austin-ans-award.png',
    alt: 'Austin receiving Animal Science Research Excellence Award in 2018',
    caption: 'Animal Science Research Excellence Award 2018',
    width: 600,
    height: 400,
  },
]

const missionPoints = [
  { label: 'Free Access', text: 'Open educational resources available to everyone' },
  { label: 'Community', text: 'Building a global community of learners and professionals' },
  { label: 'Preservation', text: 'Preserving knowledge for future generations' },
]

const contactReasons = [
  "Course notes or educational materials you'd like to share",
  'Suggestions for additional resources',
  'Found any issues with the website',
  'Questions or feedback',
]

const contactLinks = [
  { label: 'Email', href: 'mailto:putz.austin@gmail.com', Icon: Mail },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/austin-putz', Icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/austin-putz', Icon: Github },
]

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'About' }]}
        title="About"
        description="Educational resources for animal breeding and quantitative genetics"
      />

      {/* Portrait and supporting photographs */}
      <section className="mt-10 grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start">
        <figure className="flex flex-col gap-2">
          <Image
            src="/images/about/austin-putz.jpg"
            alt="Austin Putz"
            width={300}
            height={375}
            className="w-full rounded-sm border border-line object-cover lg:w-[220px]"
            priority
          />
          <figcaption className="meta-sm">Austin Putz, PhD</figcaption>
        </figure>

        <div className="grid gap-6 sm:grid-cols-2">
          {photos.map((photo) => (
            <figure key={photo.src} className="flex flex-col gap-2">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-auto w-full rounded-sm border border-line object-cover"
              />
              <figcaption className="meta-sm">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pt-12">
        <h2 className="group-label pb-4">About Me</h2>
        <div className="flex max-w-[68ch] flex-col gap-4 border-t border-line pt-6 text-[15px] leading-relaxed text-muted">
          <p>
            Hi, I&rsquo;m <strong className="font-semibold text-ink">Austin Putz</strong>. I
            currently work as a geneticist for{' '}
            <a
              href="https://www.hendrix-genetics.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-moss/40 font-medium text-moss transition-colors hover:border-moss"
            >
              Hendrix Genetics
            </a>
            , specifically within{' '}
            <a
              href="https://swine.hendrix-genetics.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-moss/40 font-medium text-moss transition-colors hover:border-moss"
            >
              Hendrix Genetics Swine
            </a>
            . I&rsquo;m also an Affiliate Professor within the{' '}
            <a
              href="https://www.ans.iastate.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-moss/40 font-medium text-moss transition-colors hover:border-moss"
            >
              Animal Science Department at Iowa State University
            </a>
            .
          </p>
          <p>
            None of this material represents Hendrix Genetics or Iowa State University. See my
            disclaimer below.
          </p>
          <p>
            This website was created during my personal time to address the critical shortage of
            animal breeding education resources. Animal breeding has been declining in animal
            science departments for many years. With this drastic reduction in animal breeding
            faculty and graduate programs, I wanted to create a centralized hub for knowledge
            preservation and dissemination. Over the years, I accrued many resources available
            online and thought it would be wise to have one hub to come to for new students.
          </p>
        </div>
      </section>

      <section className="pt-12">
        <h2 className="group-label pb-4">Mission</h2>
        <div className="border-t border-line pt-6">
          <p className="max-w-[68ch] text-[15px] leading-relaxed text-muted">
            The goal of this platform is to provide free access to educational resources, books,
            course materials, and software tools for students and professionals in animal breeding
            and quantitative genetics worldwide. There is a special focus to provide resources to
            students in developing nations as they may not have the resources available to buy
            expensive text books and don&rsquo;t have access to some of the professors here in the
            USA. This website should help close the gap and allow anyone to train themselves with
            few resources.
          </p>
          <div className="mt-8 grid gap-7 sm:grid-cols-3">
            {missionPoints.map((point) => (
              <div key={point.label} className="flex flex-col gap-1.5 border-t-2 border-moss pt-3">
                <span className="font-display text-sm font-semibold">{point.label}</span>
                <p className="text-[13px] leading-relaxed text-muted">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12">
        <h2 className="group-label pb-4">Contact</h2>
        <div className="border-t border-line pt-6">
          <p className="max-w-[68ch] text-[15px] leading-relaxed text-muted">
            I welcome contributions and feedback. Please reach out if you have:
          </p>
          <ul className="mt-4 grid max-w-[68ch] gap-x-10 gap-y-2 text-[13.5px] text-muted sm:grid-cols-2">
            {contactReasons.map((reason) => (
              <li key={reason} className="flex gap-2">
                <span className="text-moss">&middot;</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            {contactLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-line-strong px-4 text-sm font-medium transition-colors hover:border-faint hover:bg-sunken active:translate-y-px"
              >
                <Icon className="h-4 w-4 text-muted" strokeWidth={1.75} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Colophon>
        <strong className="font-medium text-ink">Disclaimer.</strong> All work on this website was
        completed during my personal time and is not part of my professional duties. Any opinions
        expressed are my own and do not represent my employer.
      </Colophon>
    </PageShell>
  )
}
