'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'LAYANAN' },
    { href: '#benefits', label: 'KEUNTUNGAN' },
    { href: '#packages', label: 'PAKET' },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-slate-950/80 backdrop-blur-xl border-slate-800/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* ⬇️ NAVBAR HEIGHT */}
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="group">
            <div className="relative w-16 h-16 transition-transform duration-300 sm:w-20 sm:h-20 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Growly Logo"
                fill
                className="object-contain scale-125 brightness-0 invert"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition text-slate-400 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-slate-950 px-6 py-2.5 rounded-lg font-semibold text-sm transition shadow-lg shadow-green-500/20"
            >
              HUBUNGI KAMI
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-400 hover:text-cyan-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t md:hidden bg-slate-900/95 backdrop-blur-xl border-slate-800/50">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-slate-400 hover:text-cyan-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="block px-6 py-3 text-sm font-semibold text-center bg-green-500 rounded-lg hover:bg-green-600 text-slate-950"
              onClick={() => setMobileMenuOpen(false)}
            >
              HUBUNGI KAMI
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
