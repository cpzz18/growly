'use client'

import { Code, Terminal } from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Pembuatan Website',
      description:
        'Website profesional dengan teknologi modern seperti React, Next.js, dan WordPress. Dari landing page hingga e-commerce.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading',
        'Custom Design',
      ],
      tag: 'WEB DEV',
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: 'Joki Tugas & Project',
      description:
        'Bantuan pengerjaan tugas kuliah, skripsi, project akhir dengan kualitas terjamin dan tepat waktu.',
      features: [
        'Berbagai Bahasa Pemrograman',
        'Dokumentasi Lengkap',
        'Revisi Gratis',
        'Konsultasi',
      ],
      tag: 'CODING',
    },
  ]

  return (
    <section id="services" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-bold tracking-widest mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            What We Offer
          </h2>
          <p className="text-slate-400 text-lg">
            Solusi lengkap untuk kebutuhan digital Anda
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
