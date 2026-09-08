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
  body: string
  bullets?: string[]
  links?: SkillLink[]
}

const languages: Skill[] = [
  {
    name: 'R',
    body: 'The standard language for quantitative data science in animal breeding. Strong in both frequentist and Bayesian statistical modeling.',
    bullets: [
      'Most animal breeders trained since mid-2000s use R',
      'Extensive statistical packages',
      'Active community and support',
    ],
    links: [
      { label: 'R in Action', href: 'https://www.amazon.com/R-Action-Data-Analysis-Graphics/dp/1617291382' },
    ],
  },
  {
    name: 'Python',
    body: 'Top-ranked language in TIOBE Rankings. Excellent for data science, machine learning, and general-purpose programming.',
    bullets: [
      'Versatile and widely adopted',
      'Strong ML/AI ecosystem',
      'Recommended for career flexibility',
    ],
  },
  {
    name: 'Julia',
    body: 'Modern language designed for high-performance scientific computing. Addresses limitations of R and Python with native multi-core CPU and GPU support.',
    bullets: [
      'Multiple dispatch for efficient computation',
      'Better performance without vectorization tricks',
      'Growing adoption in quantitative genetics',
    ],
  },
  {
    name: 'Compiled Languages',
    body: 'C, C++, and Fortran for high-performance computing and legacy code maintenance.',
    bullets: [
      'Fortran historically important in animal breeding',
      'C/C++ for performance-critical code',
      'Useful for understanding legacy software',
    ],
  },
]

const assistants: Skill[] = [
  {
    name: 'Claude Code CLI',
    body: "Anthropic's AI assistant for code generation, debugging, and technical writing directly in your terminal.",
    links: [
      { label: 'GitHub', href: 'https://github.com/anthropics/claude-code' },
      { label: 'Docs', href: 'https://docs.claude.com/claude-code' },
    ],
  },
  {
    name: 'GitHub Copilot CLI',
    body: "OpenAI's code-focused AI tool for generating and understanding code across multiple languages.",
    links: [
      { label: 'GitHub Next', href: 'https://githubnext.com/projects/copilot-cli' },
      { label: 'Docs', href: 'https://docs.github.com/en/copilot/github-copilot-in-the-cli' },
    ],
  },
  {
    name: 'Gemini CLI',
    body: "Google's AI assistant with multimodal capabilities for code, analysis, and documentation.",
    links: [
      { label: 'GitHub', href: 'https://github.com/google/generative-ai-js' },
      { label: 'API Docs', href: 'https://ai.google.dev/gemini-api/docs' },
    ],
  },
]

const agents: Skill[] = [
  {
    name: 'n8n',
    body: 'Open-source workflow automation platform for building AI agent pipelines and connecting services.',
    links: [{ label: 'n8n.io', href: 'https://n8n.io' }],
  },
  {
    name: 'Zapier',
    body: 'No-code automation platform for connecting apps and building AI-powered workflows.',
    links: [{ label: 'zapier.com', href: 'https://zapier.com' }],
  },
]

const reporting: Skill[] = [
  {
    name: 'Quarto',
    body: 'Newest reporting tool from Posit (formerly RStudio). Integrates text with embedded code and results for reproducible research.',
    links: [{ label: 'quarto.org', href: 'https://quarto.org' }],
  },
  {
    name: 'Jupyter Notebooks',
    body: 'Interactive computing environment compatible with Julia, R, and Python. Generates HTML notebooks with code, visualizations, and narrative text.',
    links: [{ label: 'jupyter.org', href: 'https://jupyter.org' }],
  },
  {
    name: 'LaTeX',
    body: 'Document preparation system for high-quality mathematical typesetting. Handles formatting automatically and is widely used for CVs and academic documents.',
    links: [{ label: 'latex-project.org', href: 'https://www.latex-project.org' }],
  },
]

const cols: Record<number, string> = {
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
}

function SkillRow({ name, body, bullets, links }: Skill) {
  return (
    <div className="flex flex-col gap-2 border-t border-line py-5">
      <h3 className="font-display text-[15px] font-semibold tracking-tight">{name}</h3>
      <p className="text-[13.5px] leading-relaxed text-muted">{body}</p>
      {bullets && (
        <ul className="flex flex-col gap-1 text-[13px] text-muted">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="text-faint">&middot;</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      {links && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent text-[12.5px] font-medium text-moss transition-colors hover:border-moss"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
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
  columns?: 2 | 3
}) {
  return (
    <section className="pt-10">
      <h2 className="group-label pb-1.5">{label}</h2>
      <p className="max-w-[62ch] pb-1 text-[13.5px] text-muted">{description}</p>
      <div className={`grid grid-cols-1 gap-x-10 ${cols[columns]}`}>
        {skills.map((s) => (
          <SkillRow key={s.name} {...s} />
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

      <section className="pt-10">
        <h2 className="group-label pb-1.5">Linux / Bash Scripting</h2>
        <p className="max-w-[62ch] pb-1 text-[13.5px] text-muted">
          Foundation for command-line workflows and data processing pipelines
        </p>
        <div className="flex flex-col gap-4 border-t border-line py-5">
          <p className="max-w-[68ch] text-[13.5px] leading-relaxed text-muted">
            Bash serves as the foundational tool connecting data transformation, processing,
            statistics, and reporting workflows in animal breeding. It acts as the pipeline
            &ldquo;glue&rdquo; for complex data projects and is essential for command-line work.
          </p>
          <div className="max-w-[68ch] rounded-lg bg-sunken p-4 text-[13px] leading-relaxed text-muted">
            <strong className="font-medium text-ink">What is Bash?</strong> Bash stands for
            &ldquo;Bourne Again Shell,&rdquo; a GNU Foundation open-source clone of the original Unix
            shell. It is the most common shell on Linux systems.
          </div>
          <p className="text-[13.5px] text-muted">
            <strong className="font-medium text-ink">Recommended Resource:</strong>{' '}
            <a
              href="https://www.amazon.com/Linux-Command-Line-Complete-Introduction/dp/1593273894"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-transparent font-medium text-moss transition-colors hover:border-moss"
            >
              The Linux Command Line
            </a>{' '}
            by William Shotts
          </p>
        </div>
      </section>

      <SkillSection
        label="Programming Languages"
        description="Core languages for statistical analysis, data science, and quantitative genetics"
        skills={languages}
      />

      <SkillSection
        label="AI Coding Assistants"
        description="Modern AI tools for enhanced productivity and automation"
        skills={assistants}
        columns={3}
      />

      <SkillSection
        label="AI Agents & Workflow Automation"
        description="Platforms for building agent pipelines and connecting services"
        skills={agents}
      />

      <SkillSection
        label="Reporting & Documentation"
        description="Tools for reproducible research and professional documentation"
        skills={reporting}
        columns={3}
      />

      <Colophon>
        <strong className="font-medium text-ink">Learning path.</strong> Start with Linux/Bash
        fundamentals, then choose R or Python based on your focus. Add reporting tools as you
        develop projects requiring documentation. Explore AI tools to enhance productivity and
        automate repetitive tasks.
      </Colophon>
    </PageShell>
  )
}
