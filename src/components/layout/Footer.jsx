import Link from 'next/link'
import { Rocket } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { href: '#', label: 'INSTAGRAM' },
    { href: '#', label: 'TWITTER' },
    { href: '#', label: 'LINKEDIN' },
  ]

  return (
    <footer className="relative py-12 px-4 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-lg rounded-full" />
              <Rocket className="w-7 h-7 text-cyan-400 relative" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-white">grow</span>
              <span className="text-cyan-400">ly</span>
            </span>
          </div>

          {/* Copyright */}
          <div className="text-slate-500 text-sm">
            © 2025 <span className="text-cyan-400">Growly</span>. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-cyan-400 transition text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
