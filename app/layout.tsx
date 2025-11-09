import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/next'

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <main className="pt-24">
            {children}
          </main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
