/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2.5rem',
        xl: '3rem',
        '2xl': '4rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Semantic tokens. These resolve through CSS variables in globals.css,
        // so they carry their own dark-mode value and need no `dark:` variant.
        paper: 'rgb(var(--paper) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        sunken: 'rgb(var(--sunken) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        faint: 'rgb(var(--faint) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        'line-strong': 'rgb(var(--line-strong) / <alpha-value>)',
        moss: {
          DEFAULT: 'rgb(var(--moss) / <alpha-value>)',
          hover: 'rgb(var(--moss-hover) / <alpha-value>)',
          wash: 'rgb(var(--moss-wash) / <alpha-value>)',
          on: 'rgb(var(--moss-on) / <alpha-value>)',
        },

        // The single accent, as a ramp. `primary-*` is kept as the name so
        // existing utilities keep working; the hues are now moss, not sky.
        primary: {
          50: '#EDF2EF',
          100: '#DBE7E0',
          200: '#B8CFC2',
          300: '#8FB7A0',
          400: '#5C9174',
          500: '#3D7256',
          600: '#2F5D45',
          700: '#244936',
          800: '#1D3A2B',
          900: '#172E22',
          950: '#0F1D16',
        },

        // Warm neutral ramp replacing Tailwind's cool default. Every existing
        // `neutral-*` utility in the codebase lands here.
        neutral: {
          50: '#FAFAF9',
          100: '#F2F1EE',
          200: '#E4E2DD',
          300: '#D2CFC8',
          400: '#A8A49C',
          500: '#918E88',
          600: '#6F6C67',
          700: '#4A4844',
          800: '#2C2C28',
          900: '#1C1B19',
          950: '#131311',
        },
      },

      fontFamily: {
        // Body and UI.
        sans: ['var(--font-geist)', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        // Headings and titles.
        display: ['var(--font-instrument-sans)', 'var(--font-geist)', 'ui-sans-serif', 'sans-serif'],
        // Years, counts, ISBNs, tags, notation.
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },

      // One radius scale. Interactive elements and panels are 6px, images 3px,
      // the few large surfaces 10px. `rounded-full` stays for genuine pills.
      borderRadius: {
        none: '0',
        sm: '3px',
        DEFAULT: '6px',
        md: '6px',
        lg: '6px',
        xl: '10px',
        '2xl': '10px',
        '3xl': '14px',
        full: '9999px',
      },

      // Shadows tinted to the warm ground. No pure-black drops.
      boxShadow: {
        sm: '0 1px 2px rgb(28 27 25 / 0.05)',
        DEFAULT: '0 1px 2px rgb(28 27 25 / 0.05), 0 2px 8px -4px rgb(28 27 25 / 0.12)',
        md: '0 1px 2px rgb(28 27 25 / 0.05), 0 4px 14px -6px rgb(28 27 25 / 0.14)',
        lg: '0 1px 2px rgb(28 27 25 / 0.05), 0 8px 24px -12px rgb(28 27 25 / 0.18)',
        xl: '0 1px 2px rgb(28 27 25 / 0.05), 0 10px 30px -18px rgb(28 27 25 / 0.28)',
        '2xl': '0 2px 4px rgb(28 27 25 / 0.06), 0 16px 48px -24px rgb(28 27 25 / 0.32)',
        none: 'none',
      },

      maxWidth: {
        prose: '65ch',
      },

      // Used by @tailwindcss/typography for rendered MDX. Mapped onto the same
      // tokens as the rest of the site so posts need no `dark:` variants.
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'rgb(var(--muted))',
            '--tw-prose-headings': 'rgb(var(--ink))',
            '--tw-prose-lead': 'rgb(var(--muted))',
            '--tw-prose-links': 'rgb(var(--moss))',
            '--tw-prose-bold': 'rgb(var(--ink))',
            '--tw-prose-counters': 'rgb(var(--faint))',
            '--tw-prose-bullets': 'rgb(var(--faint))',
            '--tw-prose-hr': 'rgb(var(--line))',
            '--tw-prose-quotes': 'rgb(var(--muted))',
            '--tw-prose-quote-borders': 'rgb(var(--moss))',
            '--tw-prose-captions': 'rgb(var(--faint))',
            '--tw-prose-code': 'rgb(var(--ink))',
            '--tw-prose-pre-code': 'rgb(var(--ink))',
            '--tw-prose-pre-bg': 'rgb(var(--sunken))',
            '--tw-prose-th-borders': 'rgb(var(--line))',
            '--tw-prose-td-borders': 'rgb(var(--line))',
            maxWidth: 'none',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
