import Image from 'next/image'
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  CalendarDays,
  GitFork,
  GraduationCap,
  Layers,
  MessageSquare,
  Repeat,
  Table2,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Colophon } from '@/components/layout/Colophon'
import { CodeBlock } from '@/components/tidybreed/CodeBlock'
import {
  CppLogo,
  DuckDBLogo,
  GitHubLogo,
  RLogo,
  TidyverseLogo,
} from '@/components/tidybreed/BrandLogos'

export const metadata = {
  title: 'tidybreed',
  description:
    'tidybreed is an R package for breeding program simulation backed by DuckDB: real dates instead of generations, custom tables and columns, and simulations that scale past RAM.',
}

const GITHUB = 'https://github.com/austin-putz/tidybreed'
const DOCS = 'https://austin-putz.github.io/tidybreed/'
const REFERENCE = 'https://austin-putz.github.io/tidybreed/reference/index.html'
const ISSUES = 'https://github.com/austin-putz/tidybreed/issues'
const VERSION = '0.70.0'

/* ---------------------------------------------------------------- copy --- */

const heroFacts = [
  { value: `v${VERSION}`, label: 'Current release' },
  { value: 'MIT', label: 'License' },
  { value: 'R ≥ 4.1', label: 'Requirement' },
  { value: 'C++17', label: 'Meiosis kernel' },
]

interface Limitation {
  icon: LucideIcon
  problem: string
  problemText: string
  answer: string
  answerText: string
}

const limitations: Limitation[] = [
  {
    icon: Repeat,
    problem: 'Generation is the clock',
    problemText:
      'Most simulators advance the world one discrete generation at a time. Real programs do not: boars are used for eighteen months, cows calve across years, and young bulls compete with proven ones. Generation is an artifact of selection experiments, not of breeding programs.',
    answer: 'Time is a column',
    answerText:
      'tidybreed does not have a generation. Give an animal a birth date, a mating date, a cull date, and every event in the simulation happens on a calendar. If you want a generation column you can add one, but nothing forces it on you.',
  },
  {
    icon: Layers,
    problem: 'State lives in RAM',
    problemText:
      'Genotypes, haplotypes and records accumulate in R objects generation after generation. Long-horizon or large-population runs simply run out of memory, so the design gets trimmed to fit the machine.',
    answer: 'State lives on disk',
    answerText:
      'Every table is in a DuckDB file. Queries are lazy and run inside the database, so a simulation can exceed available RAM, a run can be closed and reopened, and the file itself is the result you share.',
  },
  {
    icon: Table2,
    problem: 'The schema is closed',
    problemText:
      'Want a herd, a production status, a cull reason or a test date on each animal? In most tools that means a second data frame you keep in sync by hand, and it breaks the moment you forget.',
    answer: 'Any column, any table',
    answerText:
      'Add columns of any type, or entire tables, with mutate_table() and define_table(). Descriptions travel with the database. Your simulation state is one place, queryable with dplyr, SQL or DBI.',
  },
  {
    icon: Wrench,
    problem: 'A helper for everything',
    problemText:
      'A function per mating scheme, per selection rule, per culling policy. The developer has to anticipate every design, and the day they did not, you are stuck writing around the package instead of with it.',
    answer: 'You write the design',
    answerText:
      'A mating plan is a tibble: one row per offspring you want, with sire, dam and sex. Selection is filter() and slice_max(). Nothing to learn that you do not already know from the tidyverse, and nothing to break when the package changes.',
  },
]

interface Audience {
  icon: LucideIcon
  eyebrow: string
  title: string
  lede: string
  points: { head: string; text: string }[]
}

const audiences: Audience[] = [
  {
    icon: Building2,
    eyebrow: 'For industry',
    title: 'Numbers you can report',
    lede:
      'A breeding company does not report genetic gain per generation. It reports it per year, on a program with overlapping generations, seasonal matings and animals that leave for reasons other than selection.',
    points: [
      {
        head: 'ΔG and ΔF per calendar year',
        text: 'Because every animal carries dates, you compute gain and inbreeding per year straight from the tables, the way you already present them to management.',
      },
      {
        head: 'A digital twin of the flow',
        text: 'Status columns move animals through on-test, off-test, active and culled. Filter on them the same way you would query your own database.',
      },
      {
        head: 'Scenarios and replicates',
        text: 'Parameterise runs from YAML, stamp a replicate number on each, and merge them into one archive file with archive_replicate(). Built for HPC array jobs.',
      },
      {
        head: 'Your evaluation, not a stand-in',
        text: 'Write out to BLUPF90, JWAS or PLINK folders, run the evaluation you actually use, and read the solutions back with add_ebv().',
      },
    ],
  },
  {
    icon: GraduationCap,
    eyebrow: 'For academia',
    title: 'Room to be unusual',
    lede:
      'Research questions rarely fit the default genome. tidybreed keeps the biology in explicit tables you can inspect and override, and it never stops you from writing your own step in the middle of a pipeline.',
    points: [
      {
        head: 'Sex chromosomes and organelles',
        text: 'X/Y, Z/W, X0 and mitochondria are rows in chr_inheritance and chr_recombination, set per chromosome with define_chromosome(). Sex- and line-specific genetic maps are more rows, not a new schema.',
      },
      {
        head: 'Six founder haplotype methods',
        text: 'Uniform, fixed, Beta and Balding–Nichols frequencies without LD; Li–Stephens mosaic and Gaussian copula with LD along the map.',
      },
      {
        head: 'Inject your own solution anywhere',
        text: 'Tables are SQL. Compute EBVs in your own solver, write them to ind_ebv, and carry on. DBI gives you the connection whenever a function does not exist yet.',
      },
      {
        head: 'Reproducible by construction',
        text: 'The .duckdb file is the state. Share it, reopen it with restore_pop(), or open it from Python or the DuckDB CLI without R at all.',
      },
    ],
  },
]

const stack = [
  {
    Logo: RLogo,
    name: 'R',
    role: 'The language most breeders already write. Orchestrates the run.',
    href: 'https://www.r-project.org',
  },
  {
    Logo: DuckDBLogo,
    name: 'DuckDB',
    role: 'Embedded, columnar, no server. Holds every table on disk and runs the queries.',
    href: 'https://duckdb.org',
  },
  {
    Logo: TidyverseLogo,
    name: 'dplyr',
    role: 'filter(), slice_max(), mutate(): the verbs users know, pushed down into SQL.',
    href: 'https://www.tidyverse.org',
  },
  {
    Logo: CppLogo,
    name: 'C++17',
    role: 'Recombination and meiosis compiled through Rcpp, so the hot loop never touches R.',
    href: 'https://isocpp.org',
  },
]

const heroCode = `
pop |>
  get_table("ind_meta") |>              # one row per animal
  filter(
    sex == "M",
    line_name == "Angus",
    off_test_date == current_date,      # your DATE column
    status == "on-test"                 # your VARCHAR column
  ) |>
  add_phenotype(
    c("adg", "backfat"),
    phenotype_date = current_date
  )
`

const datesCode = `
# Declare the columns your program actually tracks
pop |>
  get_table("ind_meta") |>
  mutate_table(
    status        = NA_character_,   # VARCHAR
    birth_date    = as.Date(NA),     # DATE
    mate_date     = as.Date(NA),
    farrow_date   = as.Date(NA),
    wean_date     = as.Date(NA),
    off_test_date = as.Date(NA),
    cull_date     = as.Date(NA),
    alive         = TRUE,            # BOOLEAN, with a default
    .set_default  = TRUE
  )

# Later, on a given day, move boars off test
pop |>
  get_table("ind_meta") |>
  filter(sex == "M", off_test_date == today) |>
  mutate_table(status = "after-test-boar")
`

const installCode = `
install.packages("pak")
pak::pak("austin-putz/tidybreed")
library(tidybreed)

# Pre-1.0: pin the version you build on
pak::pak("austin-putz/tidybreed@v${VERSION}")
`

/* ---------------------------------------------------------------- page --- */

const steps = [
  { n: '01', head: 'Point at a table', text: 'get_table() returns a lazy reference to any table in the database.' },
  { n: '02', head: 'Filter to the animals', text: 'Standard dplyr filter(); the WHERE clause runs inside DuckDB.' },
  { n: '03', head: 'Act on them', text: 'define_*() writes metadata, add_*() writes records on individuals.' },
  { n: '04', head: 'It is already saved', text: 'New rows land in the .duckdb file. Nothing to collect, nothing to lose.' },
]

export default function TidybreedPage() {
  return (
    <>
      {/*
        Same dark masthead treatment as the home page, so the site keeps one
        idea of what a hero is. The hex logo is dark by nature and sits on
        the dark ground without a scrim.
      */}
      <section className="relative isolate overflow-hidden bg-[#0B120E]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 70% at 78% 45%, rgba(127,176,147,0.22), transparent 70%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B120E] to-transparent"
        />

        <div className="container relative max-w-[1400px] py-16 md:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div className="flex max-w-[52ch] flex-col items-start gap-6">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#7FB093]">
                R package · DuckDB-backed · MIT
              </span>
              <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-[#F4F3EF] md:text-[3.6rem]">
                Breeding simulation with a calendar, not a generation counter.
              </h1>
              <p className="max-w-[50ch] text-[17px] leading-relaxed text-[#B7C2BA]">
                tidybreed is an R package for simulating animal and plant breeding programs.
                Every animal, locus and record lives in a DuckDB file on disk, so simulations
                scale past RAM, carry real dates, and bend to whatever your program actually
                looks like.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-[#7FB093] px-5 text-[15px] font-medium text-[#0B120E] transition-colors hover:bg-[#96C2A7] active:translate-y-px"
                >
                  <GitHubLogo className="h-4 w-4" />
                  View on GitHub
                </a>
                <a
                  href={DOCS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md border border-white/25 px-5 text-[15px] font-medium text-[#F4F3EF] transition-colors hover:border-white/50 hover:bg-white/10 active:translate-y-px"
                >
                  <BookOpen className="h-4 w-4" strokeWidth={1.75} />
                  Read the manual
                </a>
              </div>

              <dl className="mt-2 grid w-full grid-cols-2 gap-x-6 gap-y-4 border-t border-white/10 pt-6 sm:grid-cols-4">
                {heroFacts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#7FB093]/70">
                      {f.label}
                    </dt>
                    <dd className="mt-1 font-display text-[19px] font-semibold tracking-tight text-[#F4F3EF]">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
              <Image
                src="/images/tidybreed/tidybreed-hex-logo.webp"
                alt="tidybreed hex logo"
                width={815}
                height={900}
                priority
                sizes="(min-width: 1024px) 40vw, 420px"
                className="mx-auto w-[70%] drop-shadow-[0_24px_60px_rgba(0,0,0,0.55)] lg:w-[78%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- the pipe --- */}
      <section className="container max-w-[1400px] py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="group-label pb-1.5">The whole API is a pipe</h2>
            <p className="max-w-[48ch] text-[20px] font-medium leading-snug tracking-tight text-ink md:text-[24px]">
              Point at a table, filter to the animals you mean, act on them. That is every
              function in the package.
            </p>
            <ol className="mt-8 flex flex-col divide-y divide-line border-t border-line">
              {steps.map((s) => (
                <li key={s.n} className="flex gap-5 py-4">
                  <span className="meta pt-1 tabular-nums text-moss">{s.n}</span>
                  <div>
                    <h3 className="font-display text-[15px] font-semibold tracking-tight">
                      {s.head}
                    </h3>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <CodeBlock code={heroCode} filename="phenotype_boars.R" className="self-center" />
        </div>
      </section>

      {/* ------------------------------------------------ limitations --- */}
      <section className="border-y border-line bg-sunken/60">
        <div className="container max-w-[1400px] py-16 md:py-20">
          <div className="max-w-[64ch]">
            <h2 className="group-label pb-1.5">Why I started tidybreed</h2>
            <p className="text-[20px] font-medium leading-snug tracking-tight text-ink md:text-[24px]">
              I struggled to learn the existing simulators, and when I did, I kept running into
              the same four walls.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted">
              None of them are bugs. They are design decisions that made sense for selection
              experiments and were inherited by everything since. tidybreed started as a clean
              sheet: what would a simulator look like if it were built for the breeding
              programs people actually run?
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {limitations.map(({ icon: Icon, problem, problemText, answer, answerText }, i) => (
              <article
                key={problem}
                className="relative flex flex-col overflow-hidden rounded-xl border border-line bg-surface shadow-md"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-moss/45" />
                <div className="flex items-center justify-between px-6 pt-6">
                  <Icon className="h-7 w-7 text-moss/70" strokeWidth={1.25} />
                  <span className="meta">0{i + 1}</span>
                </div>
                <div className="flex-1 px-6 pb-6 pt-4">
                  <span className="meta-sm">The wall</span>
                  <h3 className="mt-1 font-display text-[17px] font-semibold tracking-tight">
                    {problem}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{problemText}</p>
                </div>
                <div className="border-t border-line bg-moss-wash px-6 py-5">
                  <span className="meta-sm text-moss">tidybreed</span>
                  <h4 className="mt-1 font-display text-[15px] font-semibold tracking-tight text-ink">
                    {answer}
                  </h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{answerText}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ dates --- */}
      <section className="container max-w-[1400px] py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <CodeBlock code={datesCode} filename="program_dates.R" className="order-2 lg:order-1" />
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded bg-moss-wash text-moss">
                <CalendarDays className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <h2 className="group-label">The main reason: dates</h2>
            </div>
            <p className="mt-4 max-w-[46ch] text-[20px] font-medium leading-snug tracking-tight text-ink md:text-[24px]">
              A DATE column in a database is the whole difference between a selection experiment
              and a breeding program.
            </p>
            <div className="mt-6 flex max-w-[56ch] flex-col gap-4 text-[15px] leading-relaxed text-muted">
              <p>
                DuckDB gives tidybreed real DATE and TIMESTAMP types, and mutate_table() lets you
                put them on any table. Once an animal has a birth date and a set of event dates,
                the simulation stops being a sequence of generations and becomes a calendar:
                matings happen in a season, animals come off test on a day, culls happen when a
                rule fires.
              </p>
              <p>
                That is what makes the outputs realistic. Genetic gain and inbreeding come out
                per year against the true birth dates, on overlapping generations, exactly as
                they are reported in practice. Overlap, generation interval and age
                structure fall out of the data instead of being assumed.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-3">
              {[
                { value: 'ΔG / yr', label: 'gain against birth dates, not generation number' },
                { value: 'ΔF / yr', label: 'inbreeding on the real age structure' },
                { value: 'L', label: 'generation interval measured, not assumed' },
              ].map((f) => (
                <div key={f.value}>
                  <dt className="font-display text-[24px] font-bold leading-none tracking-tight text-moss">
                    {f.value}
                  </dt>
                  <dd className="mt-1.5 text-[12.5px] leading-snug text-muted">{f.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- audiences --- */}
      <section className="container max-w-[1400px] pb-16 md:pb-20">
        <h2 className="group-label pb-1.5">Who it is for</h2>
        <p className="max-w-[62ch] text-[13.5px] text-muted">
          Two audiences, one database. The same file serves a company forecasting next year and a
          lab testing a genome nobody has simulated before.
        </p>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {audiences.map(({ icon: Icon, eyebrow, title, lede, points }) => (
            <article
              key={title}
              className="relative overflow-hidden rounded-xl border border-line bg-surface shadow-md"
            >
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-moss/45" />
              <div className="border-b border-line bg-moss-wash px-6 pb-6 pt-7 md:px-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-moss text-moss-on shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span className="meta">{eyebrow}</span>
                    <h3 className="mt-1 font-display text-[22px] font-bold leading-none tracking-tight">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="mt-5 max-w-[60ch] text-[14.5px] leading-relaxed text-muted">{lede}</p>
              </div>
              <ul className="flex flex-col divide-y divide-line px-6 md:px-8">
                {points.map((p) => (
                  <li key={p.head} className="py-4">
                    <h4 className="font-display text-[14.5px] font-semibold tracking-tight">
                      {p.head}
                    </h4>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{p.text}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------ stack --- */}
      <section className="border-y border-line bg-sunken/60">
        <div className="container max-w-[1400px] py-16 md:py-20">
          <h2 className="group-label pb-1.5">Built on</h2>
          <p className="max-w-[62ch] text-[13.5px] text-muted">
            Nothing exotic. Each piece is chosen because breeders already have it installed or
            can get it in one line.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map(({ Logo, name, role, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-lg border border-line bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <Logo className="h-9 w-9 text-ink/80 transition-colors group-hover:text-moss" />
                <h3 className="mt-5 font-display text-[15px] font-semibold tracking-tight">{name}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{role}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- install --- */}
      <section className="container max-w-[1400px] py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="group-label pb-1.5">Try it</h2>
            <p className="max-w-[46ch] text-[20px] font-medium leading-snug tracking-tight text-ink md:text-[24px]">
              Install from GitHub with pak. You need a C++ compiler; the install tells you exactly
              which one if it is missing.
            </p>
            <div className="mt-6 max-w-[56ch] rounded-lg border border-line bg-surface p-5 text-[13.5px] leading-relaxed text-muted">
              <span className="meta-sm">Status</span>
              <p className="mt-2">
                <strong className="font-medium text-ink">tidybreed is in alpha.</strong> The
                API is settling toward 1.0 and pre-1.0 releases can break things, so pin the
                version you build on. I am actively looking for feedback on the design: if you
                simulate breeding programs and something here does not fit how you work, I
                want to hear it.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {[
                { href: REFERENCE, label: 'Function reference', icon: BookOpen },
                { href: ISSUES, label: 'Open an issue', icon: MessageSquare },
                { href: GITHUB, label: 'Fork the source', icon: GitFork },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-moss transition-colors hover:text-moss-hover"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                  {label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    strokeWidth={2}
                  />
                </a>
              ))}
            </div>
          </div>
          <CodeBlock code={installCode} filename="install.R" className="self-start" />
        </div>

        <Colophon>
          <strong className="font-medium text-ink">Also on this site:</strong> tidybreed is
          listed with the other{' '}
          <a href="/resources/software" className="text-moss hover:underline">
            simulation software
          </a>
          . The R, DuckDB, tidyverse and C++ marks belong to their respective projects and are
          used here only to describe what tidybreed is built on.
        </Colophon>
      </section>
    </>
  )
}
