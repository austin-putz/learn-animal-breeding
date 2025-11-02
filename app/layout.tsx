import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

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
          {children}
        </Providers>
      </body>
    </html>
  )
}
