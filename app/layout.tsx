
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Héctor Saldaña Benítez - Ingeniero en Sistemas',
  description: 'Perfil profesional de Héctor Saldaña Benítez, Ingeniero en Sistemas Computacionales especializado en desarrollo de software y redes.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Héctor Saldaña Benítez - Ingeniero en Sistemas',
    description: 'Perfil profesional de Héctor Saldaña Benítez, Ingeniero en Sistemas Computacionales especializado en desarrollo de software y redes.',
    images: ['/og-image.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
