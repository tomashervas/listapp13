import Navigation from '@/components/Navigation'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Listapp13',
  description: 'List app with Next.js 13 with app directory',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-100'>
        <Navigation />
        <main className="container mx-auto bg-slate-200">
          {children}
        </main>

      </body>
    </html>
  )
}
