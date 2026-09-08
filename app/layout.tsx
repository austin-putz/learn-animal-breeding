import type { Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Learn Animal Breeding',
    template: '%s | Learn Animal Breeding'
  },
  description: 'Comprehensive educational resources for animal breeding, quantitative genetics, and breeding program management.',
  keywords: ['animal breeding', 'quantitative genetics', 'genetics', 'breeding', 'livestock', 'education'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrumentSans.variable}`}
    >
      <body>
        <Providers>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
