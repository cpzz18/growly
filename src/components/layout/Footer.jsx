import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const socialLinks = [
    { href: '#', label: 'Instagram' },
    { href: '#', label: 'Twitter' },
    { href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative border-t border-slate-800/50 bg-slate-950">
      <div className="px-4 mx-auto py-14 max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* LOGO */}
          <Link href="/" className="group">
            <div className="relative">
              {/* soft glow */}
              <div className="absolute inset-0 transition opacity-0 blur-2xl bg-cyan-500/20 group-hover:opacity-100" />

              <div className="relative w-40 h-16 md:w-48 md:h-20">
                <Image
                  src="/logo.png"
                  alt="Growly Logo"
                  fill
                  priority
                  className="object-contain brightness-0 invert drop-shadow-[0_0_10px_rgba(34,211,238,0.25)]"
                />
              </div>
            </div>
          </Link>

          {/* COPYRIGHT */}
          <p className="text-sm text-center text-slate-500 md:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="font-semibold text-cyan-400">Growly</span>.  
            All rights reserved.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide transition text-slate-500 hover:text-cyan-400 hover:scale-105"
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
