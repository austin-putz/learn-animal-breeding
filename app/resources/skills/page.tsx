import {
  Terminal,
  LineChart,
  Braces,
  Gauge,
  Cpu,
  Sparkles,
  Bot,
  Gem,
  Github,
  Workflow,
  Zap,
  FileText,
  NotebookPen,
  Sigma,
  Code2,
  PanelsTopLeft,
  LayoutPanelLeft,
  Bug,
  Wand2,
  SquareTerminal,
  ArrowUpRight,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { PageHeader } from '@/components/layout/PageHeader'
import { Colophon } from '@/components/layout/Colophon'

export const metadata = {
  title: 'Technical Skills',
  description:
    'Programming languages, tools and technologies for modern animal breeding and quantitative genetics research.',
}

interface SkillLink {
  label: string
  href: string
}

interface Skill {
  name: string
  /** Who makes it, or what it is for. Sits opposite the icon in the head. */
  tag: string
  icon: LucideIcon
  body: string
  bullets?: string[]
  links: SkillLink[]
}

const languages: Skill[] = [
  {
    name: 'R',
    tag: 'Statistics',
    icon: LineChart,
    body: 'The standard language for quantitative data science in animal breeding. Strong in both frequentist and Bayesian statistical modeling.',
    bullets: [
      'Most animal breeders trained since mid-2000s use R',
      'Extensive statistical packages',
      'Active community and support',
    ],
    links: [
      { label: 'R Project', href: 'https://www.r-project.org/' },
      { label: 'CRAN', href: 'https://cran.r-project.org/' },
      { label: 'RStudio', href: 'https://posit.co/products/open-source/rstudio/' },
      { label: 'Tidyverse', href: 'https://www.tidyverse.org/' },
    ],
  },
  {
    name: 'Python',
    tag: 'General purpose',
    icon: Braces,
    body: 'Top-ranked language in the TIOBE rankings. Excellent for data science, machine learning, and general-purpose programming.',
    bullets: [
      'Versatile and widely adopted, with a strong ML/AI ecosystem',
      'conda installs packages and manages environments; Anaconda is the distribution that bundles it with Python',
      'Anaconda needs a paid licence at organisations of 200+ staff, with academic exemptions. Miniforge carries no such condition',
    ],
    links: [
      { label: 'python.org', href: 'https://www.python.org/' },
      { label: 'Anaconda', href: 'https://www.anaconda.com/download' },
      { label: 'conda', href: 'https://docs.conda.io/' },
      { label: 'Miniforge', href: 'https://github.com/conda-forge/miniforge' },
      { label: 'pandas', href: 'https://pandas.pydata.org/' },
    ],
  },
  {
    name: 'Julia',
    tag: 'Performance',
    icon: Gauge,
    body: 'Modern language designed for high-performance scientific computing. Addresses limitations of R and Python with native multi-core CPU and GPU support.',
    bullets: [
      'Multiple dispatch for efficient computation',
      'Better performance without vectorisation tricks',
      'Growing adoption in quantitative genetics',
    ],
    links: [
      { label: 'julialang.org', href: 'https://julialang.org/' },
      { label: 'Documentation', href: 'https://docs.julialang.org/' },
    ],
  },
  {
    name: 'C, C++ and Fortran',
    tag: 'Compiled',
    icon: Cpu,
    body: 'Compiled languages for high-performance computing and legacy code maintenance. Much of the software still running national evaluations is written in these.',
    bullets: [
      'Fortran historically important in animal breeding',
      'C/C++ for performance-critical code',
      'Useful for understanding legacy software',
    ],
    links: [
      { label: 'GCC', href: 'https://gcc.gnu.org/' },
      { label: 'GNU Fortran', href: 'https://gcc.gnu.org/fortran/' },
    ],
  },
]

const editors: Skill[] = [
  {
    name: 'VS Code',
    tag: 'Microsoft',
    icon: Code2,
    body: 'The default general-purpose editor, with extensions for R, Python, Julia and Fortran. Remote-SSH is the reason to learn it here: you edit files on the cluster as if they were local.',
    links: [
      { label: 'code.visualstudio.com', href: 'https://code.visualstudio.com/' },
      { label: 'Remote SSH', href: 'https://code.visualstudio.com/docs/remote/ssh' },
    ],
  },
  {
    name: 'Positron',
    tag: 'Posit',
    icon: PanelsTopLeft,
    body: 'Posit\u2019s newer IDE, built on the same open-source base as VS Code but aimed at data work. Treats R and Python as equals rather than one as a guest, and keeps a data explorer and variables pane alongside the editor.',
    links: [
      { label: 'positron.posit.co', href: 'https://positron.posit.co/' },
      { label: 'GitHub', href: 'https://github.com/posit-dev/positron' },
    ],
  },
  {
    name: 'RStudio',
    tag: 'Posit',
    icon: LayoutPanelLeft,
    body: 'The long-standing R IDE, and still the most comfortable place to write R. Not strictly R-only: reticulate runs Python inside it, and Quarto is built in. Python is workable but second-class.',
    links: [
      { label: 'RStudio', href: 'https://posit.co/products/open-source/rstudio/' },
      { label: 'reticulate', href: 'https://rstudio.github.io/reticulate/' },
      { label: 'Quarto in RStudio', href: 'https://quarto.org/docs/tools/rstudio.html' },
    ],
  },
  {
    name: 'PyCharm',
    tag: 'JetBrains',
    icon: Bug,
    body: 'Python only, and the strongest of them at it: the best refactoring and debugger of the group. Worth it if you maintain a large Python codebase rather than write scripts.',
    links: [{ label: 'jetbrains.com/pycharm', href: 'https://www.jetbrains.com/pycharm/' }],
  },
  {
    name: 'Cursor',
    tag: 'AI-first',
    icon: Wand2,
    body: 'A fork of VS Code with an AI agent built into the editor rather than bolted on. Familiar immediately if you already use VS Code.',
    links: [{ label: 'cursor.com', href: 'https://cursor.com/' }],
  },
  {
    name: 'Neovim',
    tag: 'Terminal',
    icon: SquareTerminal,
    body: 'A modal editor that runs in the terminal, so it works over SSH on any cluster with no GUI and no setup. A steep curve, but it is the one editor guaranteed to be there.',
    links: [{ label: 'neovim.io', href: 'https://neovim.io/' }],
  },
]

const assistants: Skill[] = [
  {
    name: 'Claude Code',
    tag: 'Anthropic',
    icon: Sparkles,
    body: "Anthropic's coding agent, run from the terminal or an IDE. Strong at working across a whole project: reading code, editing files and running commands, as well as technical writing.",
    links: [
      { label: 'Claude Code', href: 'https://claude.com/product/claude-code' },
      { label: 'Docs', href: 'https://docs.claude.com/en/docs/claude-code/overview' },
      { label: 'Desktop app', href: 'https://claude.ai/download' },
    ],
  },
  {
    name: 'Codex',
    tag: 'OpenAI',
    icon: Bot,
    body: "OpenAI's coding agent. The CLI runs in the terminal against your local repository, and the same models are available through the ChatGPT desktop app.",
    links: [
      { label: 'Codex CLI', href: 'https://github.com/openai/codex' },
      { label: 'Docs', href: 'https://developers.openai.com/codex/cli' },
      { label: 'ChatGPT app', href: 'https://openai.com/chatgpt/download/' },
    ],
  },
  {
    name: 'Gemini CLI',
    tag: 'Google',
    icon: Gem,
    body: "Google's open-source terminal agent, with a large context window and multimodal input for code, analysis and documentation.",
    links: [
      { label: 'GitHub', href: 'https://github.com/google-gemini/gemini-cli' },
      { label: 'Gemini API docs', href: 'https://ai.google.dev/gemini-api/docs' },
    ],
  },
  {
    name: 'Copilot CLI',
    tag: 'GitHub',
    icon: Github,
    body: 'GitHub’s agent for the command line, closely tied to repositories, issues and pull requests if your work already lives on GitHub.',
    links: [
      { label: 'GitHub', href: 'https://github.com/github/copilot-cli' },
      {
        label: 'Docs',
        href: 'https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli',
      },
    ],
  },
]

const agents: Skill[] = [
  {
    name: 'n8n',
    tag: 'Open source',
    icon: Workflow,
    body: 'Workflow automation platform for building agent pipelines and connecting services. Can be self-hosted, which matters when the data cannot leave your organisation.',
    links: [
      { label: 'n8n.io', href: 'https://n8n.io/' },
      { label: 'Docs', href: 'https://docs.n8n.io/' },
    ],
  },
  {
    name: 'Zapier',
    tag: 'Hosted',
    icon: Zap,
    body: 'No-code automation platform for connecting apps and building AI-powered workflows without running any infrastructure yourself.',
    links: [{ label: 'zapier.com', href: 'https://zapier.com/' }],
  },
]

const reporting: Skill[] = [
  {
    name: 'LaTeX',
    tag: 'Typesetting',
    icon: Sigma,
    body: 'Document preparation system for high-quality mathematical typesetting. Handles formatting for you, and is the expected format for many journals, theses and CVs.',
    links: [
      { label: 'latex-project.org', href: 'https://www.latex-project.org/' },
      { label: 'Overleaf', href: 'https://www.overleaf.com/' },
    ],
  },
  {
    name: 'Quarto',
    tag: 'Posit',
    icon: FileText,
    body: 'The newest reporting tool from Posit (formerly RStudio). Weaves text together with embedded code and its results, so a report regenerates when the data changes.',
    links: [
      { label: 'quarto.org', href: 'https://quarto.org/' },
      { label: 'Get started', href: 'https://quarto.org/docs/get-started/' },
    ],
  },
  {
    name: 'Jupyter',
    tag: 'Notebooks',
    icon: NotebookPen,
    body: 'Interactive computing environment that works with Julia, Python and R. Produces notebooks combining code, visualisations and narrative text.',
    links: [
      { label: 'jupyter.org', href: 'https://jupyter.org/' },
      { label: 'Docs', href: 'https://docs.jupyter.org/en/latest/' },
    ],
  },
]

const bash: Skill = {
  name: 'Linux and Bash',
  tag: 'Foundation',
  icon: Terminal,
  body: 'Bash is the glue connecting data transformation, processing, statistics and reporting. It is the shell you will meet on every cluster, and the one skill that makes all the others compose.',
  bullets: [
    'Bourne Again Shell, the GNU rebuild of the original Unix shell',
    'The default shell on most Linux systems',
    'Essential for pipelines and any command-line work',
  ],
  links: [
    { label: 'GNU Bash', href: 'https://www.gnu.org/software/bash/' },
    { label: 'The Linux Command Line', href: 'https://linuxcommand.org/tlcl.php' },
  ],
}

const cols: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
}

/**
 * A tool, with everywhere worth going for it.
 *
 * Unlike the tiles elsewhere on the site, the card is not itself a link: each
 * of these has several destinations (home, docs, the download), and one of
 * them being "the" link would be arbitrary. So the exits sit in the footer as
 * their own targets and the hover lives on them rather than on the card.
 */
function SkillTile({ name, tag, icon: Icon, body, bullets, links }: Skill) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border border-line bg-surface p-5 shadow-md">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px] bg-moss/45" />

      <div className="-mx-5 -mt-5 mb-5 flex h-[92px] items-end justify-between gap-4 border-b border-line bg-moss-wash px-5 pb-4">
        <Icon className="h-10 w-10 flex-shrink-0 text-moss/60" strokeWidth={1.25} />
        <span className="meta-sm">{tag}</span>
      </div>

      <h3 className="font-display text-[15px] font-semibold leading-snug tracking-tight">{name}</h3>
      <p className="mt-1.5 max-w-[70ch] text-[13.5px] leading-relaxed text-muted">{body}</p>

      {bullets && (
        <ul className="mt-3 flex flex-col gap-1 text-[13px] leading-relaxed text-muted">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span aria-hidden="true" className="select-none text-moss/60">
                &mdash;
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-1 flex-wrap content-end gap-1.5 border-t border-line pt-4">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 rounded border border-line px-2.5 py-1 text-[12.5px] font-medium text-muted transition-colors hover:border-moss hover:bg-moss-wash hover:text-moss"
          >
            {l.label}
            <ArrowUpRight
              className="h-3 w-3 text-faint transition-colors group-hover:text-moss"
              strokeWidth={2}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

function SkillSection({
  label,
  description,
  skills,
  columns = 2,
}: {
  label: string
  description: string
  skills: Skill[]
  columns?: 1 | 2 | 3 | 4
}) {
  return (
    <section className="pt-10">
      <h2 className="group-label pb-1.5">{label}</h2>
      <p className="max-w-[62ch] text-[13.5px] text-muted">{description}</p>
      <div className={`mt-6 grid auto-rows-fr grid-cols-1 gap-5 ${cols[columns]}`}>
        {skills.map((s) => (
          <SkillTile key={s.name} {...s} />
        ))}
      </div>
    </section>
  )
}

export default function TechnicalSkillsPage() {
  return (
    <PageShell>
      <PageHeader
        breadcrumb={[{ label: 'Resources' }, { label: 'Technical Skills' }]}
        title="Technical Skills for Animal Breeding"
        description="Essential programming languages, tools, and technologies for modern animal breeding and quantitative genetics research"
      />

      <SkillSection
        label="Start Here"
        description="The command line underneath everything else"
        skills={[bash]}
        columns={1}
      />

      <SkillSection
        label="Programming Languages"
        description="Core languages for statistical analysis, data science, and quantitative genetics"
        skills={languages}
        columns={4}
      />

      <SkillSection
        label="Reporting and Documentation"
        description="Tools for reproducible research and professional documentation"
        skills={reporting}
        columns={3}
      />

      <SkillSection
        label="Editors and IDEs"
        description="Where the code actually gets written. Any of these will do the job; pick one and learn it properly"
        skills={editors}
        columns={3}
      />

      <SkillSection
        label="AI Coding Assistants"
        description="Terminal agents and desktop apps that read your code, run commands and write alongside you"
        skills={assistants}
        columns={4}
      />

      <SkillSection
        label="AI Agents and Workflow Automation"
        description="Platforms for building agent pipelines and connecting services"
        skills={agents}
        columns={2}
      />

      <Colophon>
        <strong className="font-medium text-ink">Learning path.</strong> Start with Linux and Bash
        fundamentals, then choose R or Python based on your focus. Add reporting tools as you
        develop projects requiring documentation. Explore AI tools to enhance productivity and
        automate repetitive tasks.
      </Colophon>
    </PageShell>
  )
}
