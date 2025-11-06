import { Terminal, Code2, FileText, BookOpen, Brain, Bot } from 'lucide-react'

export default function TechnicalSkillsPage() {
  return (
    <div className="container py-12 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 dark:bg-primary-900 mb-4">
          <Code2 className="w-8 h-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Technical Skills for Animal Breeding</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
          Essential programming languages, tools, and technologies for modern animal breeding and quantitative genetics research
        </p>
      </header>

      <div className="space-y-8">
        {/* Linux / Bash Scripting */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
              <Terminal className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Linux / Bash Scripting</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Foundation for command-line workflows and data processing pipelines
              </p>
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none">
            <p>
              Bash serves as the foundational tool connecting data transformation, processing, statistics,
              and reporting workflows in animal breeding. It acts as the pipeline "glue" for complex data projects
              and is essential for command-line work.
            </p>

            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4 my-4">
              <p className="text-sm mb-2">
                <strong>What is Bash?</strong> Bash stands for "Bourne Again Shell," a GNU Foundation
                open-source clone of the original Unix shell. It's the most common shell on Linux systems.
              </p>
            </div>

            <p>
              <strong>Recommended Resource:</strong>{' '}
              <a
                href="https://www.amazon.com/Linux-Command-Line-Complete-Introduction/dp/1593273894"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                The Linux Command Line
              </a>
              {' '}by William Shotts
            </p>
          </div>
        </section>

        {/* Programming Languages */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <Code2 className="w-6 h-6 text-blue-700 dark:text-blue-300" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Programming Languages</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Core languages for statistical analysis, data science, and quantitative genetics
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* R */}
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">R</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                The standard language for quantitative data science in animal breeding. Strong in both
                frequentist and Bayesian statistical modeling.
              </p>
              <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Most animal breeders trained since mid-2000s use R</li>
                <li>• Extensive statistical packages</li>
                <li>• Active community and support</li>
              </ul>
              <p className="text-sm mt-4">
                <strong>Start here:</strong>{' '}
                <a
                  href="https://www.amazon.com/R-Action-Data-Analysis-Graphics/dp/1617291382"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  R in Action
                </a>
              </p>
            </div>

            {/* Python */}
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-600 dark:text-yellow-400">Python</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                Top-ranked language in TIOBE Rankings. Excellent for data science, machine learning,
                and general-purpose programming.
              </p>
              <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Versatile and widely adopted</li>
                <li>• Strong ML/AI ecosystem</li>
                <li>• Recommended for career flexibility</li>
              </ul>
            </div>

            {/* Julia */}
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Julia</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                Modern language designed for high-performance scientific computing. Addresses limitations
                of R and Python with native multi-core CPU and GPU support.
              </p>
              <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Multiple dispatch for efficient computation</li>
                <li>• Better performance without vectorization tricks</li>
                <li>• Growing adoption in quantitative genetics</li>
              </ul>
            </div>

            {/* Compiled Languages */}
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">Compiled Languages</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                C, C++, and Fortran for high-performance computing and legacy code maintenance.
              </p>
              <ul className="text-sm space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>• Fortran historically important in animal breeding</li>
                <li>• C/C++ for performance-critical code</li>
                <li>• Useful for understanding legacy software</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI Skills */}
        <section className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 rounded-lg border-2 border-purple-200 dark:border-purple-800 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
              <Brain className="w-6 h-6 text-purple-700 dark:text-purple-300" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">AI Skills</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Modern AI tools and platforms for enhanced productivity and automation
              </p>
            </div>
          </div>

          {/* AI Coding Assistants */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">AI Coding Assistants</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold mb-2">Claude Code CLI</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                  Anthropic's AI assistant for code generation, debugging, and technical writing directly in your terminal.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/anthropics/claude-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://docs.claude.com/claude-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Docs →
                  </a>
                </div>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold mb-2">GitHub Copilot CLI</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                  OpenAI's code-focused AI tool for generating and understanding code across multiple languages.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://githubnext.com/projects/copilot-cli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    GitHub Next →
                  </a>
                  <a
                    href="https://docs.github.com/en/copilot/github-copilot-in-the-cli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    Docs →
                  </a>
                </div>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold mb-2">Gemini CLI</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                  Google's AI assistant with multimodal capabilities for code, analysis, and documentation.
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/google/generative-ai-js"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    GitHub →
                  </a>
                  <a
                    href="https://ai.google.dev/gemini-api/docs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    API Docs →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* AI Agents */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <h3 className="text-lg font-semibold">AI Agents & Workflow Automation</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold mb-2">n8n</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                  Open-source workflow automation platform for building AI agent pipelines and connecting services.
                </p>
                <a
                  href="https://n8n.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                >
                  n8n.io →
                </a>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-lg p-4 border border-purple-200 dark:border-purple-700">
                <h4 className="font-semibold mb-2">Zapier</h4>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-2">
                  No-code automation platform for connecting apps and building AI-powered workflows.
                </p>
                <a
                  href="https://zapier.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                >
                  zapier.com →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting Tools */}
        <section className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
              <FileText className="w-6 h-6 text-green-700 dark:text-green-300" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">Reporting & Documentation</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Tools for reproducible research and professional documentation
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Quarto */}
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Quarto</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                Newest reporting tool from Posit (formerly RStudio). Integrates text with embedded code
                and results for reproducible research.
              </p>
              <a
                href="https://quarto.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                quarto.org →
              </a>
            </div>

            {/* Jupyter Notebooks */}
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">Jupyter Notebooks</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                Interactive computing environment compatible with Julia, R, and Python. Generates
                HTML notebooks with code, visualizations, and narrative text.
              </p>
              <a
                href="https://jupyter.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                jupyter.org →
              </a>
            </div>

            {/* LaTeX */}
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">LaTeX</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-3">
                Document preparation system for high-quality mathematical typesetting. Handles formatting
                automatically and is widely used for CVs and academic documents.
              </p>
              <a
                href="https://www.latex-project.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                latex-project.org →
              </a>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 p-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 bg-neutral-200 dark:bg-neutral-800 rounded-lg">
              <BookOpen className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Learning Path</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Start with Linux/Bash fundamentals, then choose R or Python based on your focus.
                Add reporting tools as you develop projects requiring documentation. Explore AI tools
                to enhance productivity and automate repetitive tasks.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
