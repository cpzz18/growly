'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  const stats = [
    { label: t.hero.stats.projects, value: '100+', color: 'cyan' },
    { label: t.hero.stats.satisfaction, value: '95%', color: 'blue' },
    { label: t.hero.stats.experience, value: '3+', color: 'cyan' },
    { label: t.hero.stats.response, value: '<1H', color: 'green' },
  ]

  return (
    <section className="relative px-4 pt-32 pb-20 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute rounded-full top-40 left-1/4 w-96 h-96 bg-cyan-500/10 blur-3xl" />
      <div className="absolute rounded-full top-60 right-1/4 w-96 h-96 bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto text-center max-w-7xl">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 border rounded-full bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium tracking-wider text-slate-400">
            {t.hero.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-white">{t.hero.title1}</span>
          <br />
          <span className="text-gradient">{t.hero.title2}</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-slate-400">
          {t.hero.subtitle}
          <span className="font-semibold text-cyan-400">
            {' '}
            {t.hero.highlight}
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center gap-4 mb-20 sm:flex-row">
          <Link
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold transition bg-green-500 rounded-lg shadow-xl group text-slate-950 hover:bg-green-600 shadow-green-500/20 hover:shadow-green-500/40"
          >
            <span>{t.hero.cta1}</span>
            <ArrowRight className="w-5 h-5 transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="#packages"
            className="px-8 py-4 text-sm font-bold text-white transition border-2 rounded-lg border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-cyan-500/50"
          >
            {t.hero.cta2}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid max-w-4xl grid-cols-2 gap-8 mx-auto md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div
                className={`mb-2 text-3xl md:text-4xl font-bold bg-gradient-to-r ${
                  stat.color === 'green'
                    ? 'from-green-400 to-green-500'
                    : stat.color === 'blue'
                    ? 'from-blue-400 to-cyan-400'
                    : 'from-cyan-400 to-blue-400'
                } bg-clip-text text-transparent transition group-hover:scale-110`}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium tracking-wider text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
