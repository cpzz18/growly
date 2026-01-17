import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
})

export const metadata = {
  title: 'Growly - Website Development & Coding Services',
  description:
    'Spesialis pembuatan website profesional dan bantuan pengerjaan tugas programming.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="antialiased text-white font-inter bg-slate-950">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
