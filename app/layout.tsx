import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans-app',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display-app',
});

export const metadata: Metadata = {
  title: 'Denning - Practice Law, Not Project Management',
  description: 'Denning AI handles deadlines, documents, diary, and delegation for Kenyan law firms - so every matter stays on track without the overhead.',
  icons: {
    icon: [
      { url: '/favicon-16.png', sizes: '16x16' },
      { url: '/favicon-32.png', sizes: '32x32' },
      { url: '/favicon-192.png', sizes: '192x192' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
