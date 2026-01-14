import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const socialLinks = [
    { href: '#', label: 'INSTAGRAM' },
    { href: '#', label: 'TWITTER' },
    { href: '#', label: 'LINKEDIN' },
  ]

  return (
    <footer className="relative px-4 py-12 border-t border-slate-800/50">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-32 h-16 md:w-40 md:h-20">
              <Image
                src="/logo.png"
                alt="Growly Logo"
                fill
                className="object-contain scale-110 brightness-0 invert"
              />
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-center text-slate-500 md:text-left">
            © 2025 <span className="text-cyan-400">Growly</span>. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition text-slate-500 hover:text-cyan-400"
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
