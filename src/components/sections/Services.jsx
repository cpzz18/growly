'use client'

import { Code, Terminal, Store, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  const icons = {
    BISNIS: <Store className="w-6 h-6" />,
    MARKETING: <Sparkles className="w-6 h-6" />,
    AKADEMIK: <Terminal className="w-6 h-6" />,
    ENTERPRISE: <Code className="w-6 h-6" />,
  }

  const services = t?.services?.items ?? []

  return (
    <section id="services" className="section-padding bg-dark-soft/30">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="text-center section-header">
          <span className="inline-block px-4 py-1 mb-6 text-xs font-semibold tracking-widest uppercase border rounded-full text-accent border-accent/30 bg-accent/5">
            {t?.services?.badge}
          </span>

          <h2 className="mb-6 text-4xl font-bold text-light">
            {t?.services?.title}
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-neutral-400">
            {t?.services?.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card-elegant card-elegant-hover group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center justify-center w-12 h-12 transition-colors border rounded-lg bg-dark border-neutral-800 text-neutral-400 group-hover:text-accent group-hover:border-accent/30">
                  {icons[service.tag] ?? <Code className="w-6 h-6" />}
                </div>

                <span className="text-xs font-semibold tracking-widest uppercase text-neutral-600">
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="mb-3 text-2xl font-semibold text-light">
                {service.title}
              </h3>

              <div className="mb-6">
                <span className="text-3xl font-bold text-gradient-accent">
                  {service.startingPrice}
                </span>
              </div>

              <p className="mb-8 leading-relaxed text-neutral-400">
                {service.description}
              </p>

              {/* Features */}
              <div className="pb-8 mb-8 space-y-3 border-b border-neutral-800/50">
                {(service.features ?? []).map((feature, fidx) => (
                  <div key={fidx} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-sm text-neutral-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Examples */}
              <div className="p-4 mb-6 border rounded-lg bg-dark/50 border-neutral-800/50">
                <div className="mb-2 text-xs font-semibold tracking-widest uppercase text-neutral-500">
                  {t.language === 'id' ? 'COCOK UNTUK' : 'BEST FOR'}
                </div>
                <div className="text-sm text-neutral-400">
                  {service.examples}
                </div>
              </div>

              {/* CTA */}
              <Link
                href="#contact"
                className="flex items-center justify-center w-full py-3 text-sm font-semibold transition border-2 rounded-lg text-neutral-400 border-neutral-800 hover:border-accent hover:text-accent"
              >
                {t.language === 'id' ? 'Pesan Sekarang' : 'Order Now'}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
