'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const HowItWorks = () => {
  const { t } = useLanguage()

  return (
    <section className="relative px-4 py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="block mb-4 text-sm font-bold tracking-widest text-cyan-400">
            {t.workflow.badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {t.workflow.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.workflow.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-6 md:grid-cols-4">
          {t.workflow.steps.map((item, idx) => (
            <div key={item.title} className="relative group">
              <div className="p-6 transition-all border bg-slate-900/50 backdrop-blur-sm rounded-2xl border-slate-800/50 hover:border-cyan-500/30">
                <div className="mb-4 text-6xl font-bold tracking-tighter text-slate-800">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {item.desc}
                </p>
              </div>

              {/* Connector Line */}
              {idx < t.workflow.steps.length - 1 && (
                <div className="absolute z-10 hidden transform -translate-y-1/2 md:block top-1/2 -right-3">
                  <div className="w-6 h-0.5 bg-gradient-to-r from-slate-800 to-cyan-500/20" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
