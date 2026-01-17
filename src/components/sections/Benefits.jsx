'use client'

import { Sparkles, Clock, Shield, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const Benefits = () => {
  const { t } = useLanguage()

  const icons = [Sparkles, Clock, Shield, Zap]

  return (
    <section id="benefits" className="relative px-4 py-20 bg-slate-900/30">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="block mb-4 text-sm font-bold tracking-widest text-cyan-400">
            {t.benefits.badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {t.benefits.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.benefits.subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.benefits.items.map((benefit, idx) => {
            const Icon = icons[idx] || Sparkles // fallback icon
            return (
              <div key={benefit.title} className="text-center group">
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 transition rounded-full bg-cyan-500/20 blur-xl group-hover:bg-cyan-500/30" />
                  <div className="relative flex items-center justify-center w-16 h-16 transition-all duration-300 border bg-slate-900 border-slate-800/50 group-hover:border-cyan-500/30 rounded-xl text-cyan-400 group-hover:scale-110">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {benefit.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits
