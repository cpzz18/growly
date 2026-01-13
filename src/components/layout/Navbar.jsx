'use client'

import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#services', label: 'LAYANAN' },
    { href: '#benefits', label: 'KEUNTUNGAN' },
    { href: '#packages', label: 'PAKET' },
  ]

  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full" />
              <Rocket className="w-7 h-7 text-cyan-400 relative" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">grow</span>
              <span className="text-cyan-400">ly</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-400 hover:text-cyan-400 transition text-sm font-medium"
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
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-slate-400 hover:text-cyan-400 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#contact"
              className="block bg-green-500 hover:bg-green-600 text-slate-950 px-6 py-3 rounded-lg font-semibold text-sm text-center"
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
