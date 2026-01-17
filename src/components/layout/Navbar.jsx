"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#benefits", label: t.nav.benefits },
    { href: "#packages", label: t.nav.packages },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-slate-950/80 backdrop-blur-xl border-slate-800/50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* LOGO */}
          <Link href="/" className="relative flex items-center group">
            {/* Glow effect */}
            <div className="absolute inset-0 transition rounded-lg opacity-0 bg-cyan-500/10 blur-xl group-hover:opacity-100" />
            <div className="relative w-32 h-12 transition-transform duration-300 group-hover:scale-105 sm:w-40 sm:h-14">
              <Image
                src="/logo.png"
                alt="Growly Logo"
                fill
                priority
                className="object-contain filter brightness-0 invert" // bikin logo gelap jadi putih
              />
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="items-center hidden space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition text-slate-400 hover:text-cyan-400"
              >
                {link.label}
              </Link>
            ))}

            <LanguageSwitcher />

            <Link
              href="#contact"
              className="rounded-lg bg-green-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-green-600 shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="transition md:hidden text-slate-400 hover:text-cyan-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t md:hidden border-slate-800/50 bg-slate-900/95 backdrop-blur-xl">
          <div className="px-4 py-6 space-y-4">
            <div className="flex justify-center mb-4">
              <LanguageSwitcher />
            </div>

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
              className="block px-6 py-3 text-sm font-semibold text-center bg-green-500 rounded-lg text-slate-950 hover:bg-green-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
