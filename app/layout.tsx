import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Vikshit Tindwani | AI Engineer & GenAI Data Scientist',
  description: 'Portfolio of Vikshit Tindwani - AI Engineer, GenAI Data Scientist, and Full-Stack AI Builder from Rajasthan, India. Building AI-powered solutions that solve real-world problems.',
  keywords: ['AI Engineer', 'Data Scientist', 'Machine Learning', 'GenAI', 'Full-Stack Developer', 'Python', 'Next.js'],
  authors: [{ name: 'Vikshit Tindwani' }],
  openGraph: {
    title: 'Vikshit Tindwani | AI Engineer & GenAI Data Scientist',
    description: 'Building AI-powered solutions that solve real-world problems',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
