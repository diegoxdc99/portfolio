import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { LanguageProvider } from '@/providers/LanguageProvider'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import './globals.css'

// ─── Font ─────────────────────────────────────────────────────────────────────

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Diego Meneses — Senior Backend Engineer',
  description:
    'Senior Backend Engineer with 10+ years designing scalable cloud architectures (AWS/GCP). Expert in Node.js, NestJS, and hybrid persistence.',
  keywords: [
    'Backend Engineer',
    'Node.js',
    'NestJS',
    'TypeScript',
    'GCP',
    'AWS',
    'Microservices',
    'Colombia',
  ],
  authors: [{ name: 'Diego Alberto Meneses Tamayo' }],
  openGraph: {
    type: 'website',
    title: 'Diego Meneses — Senior Backend Engineer',
    description:
      'Senior Backend Engineer with 10+ years designing scalable cloud architectures.',
    siteName: 'Diego Meneses Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diego Meneses — Senior Backend Engineer',
    description:
      'Senior Backend Engineer with 10+ years designing scalable cloud architectures.',
  },
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Fixed background: obsidian base + grid + gradient orbs */}
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
          <div className="absolute inset-0 bg-obsidian" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.08]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/[0.08] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-cyber-accent/[0.04] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        </div>

        <LanguageProvider>
          <Navbar />
          <main id="main-content" className="relative z-10 flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
