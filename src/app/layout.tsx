import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })
import "./globals.css";

export const metadata: Metadata = {
  title: 'Event Management System',
  description: 'by Surya & Kevin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative' >
        <Providers>
          <NavBar />
          <div style={{ height: '5em' }} />
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
