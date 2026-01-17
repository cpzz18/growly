'use client'

import { Code, Terminal } from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'
import { useLanguage } from '@/contexts/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t.services.web.title,
      description: t.services.web.desc,
      features: t.services.web.features,
      tag: t.services.web.tag
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: t.services.coding.title,
      description: t.services.coding.desc,
      features: t.services.coding.features,
      tag: t.services.coding.tag
    }
  ]

  return (
    <section id="services" className="relative px-4 py-20">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="block mb-4 text-sm font-bold tracking-widest text-cyan-400">
            {t.services.badge}
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            {t.services.title}
          </h2>
          <p className="text-lg text-slate-400">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
