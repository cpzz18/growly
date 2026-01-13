import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

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
  description: 'Spesialis pembuatan website profesional dan bantuan pengerjaan tugas programming. Cepat, berkualitas, terpercaya.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}