'use client'

import { Sparkles, Clock, Shield, Zap } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Kualitas Terjamin",
      description: "Tim berpengalaman dengan portfolio yang terbukti",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Tepat Waktu",
      description: "Komitmen deadline yang sesuai kesepakatan",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privasi Terjaga",
      description: "Data dan project Anda dijamin kerahasiaannya",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Support 24/7",
      description: "Tim support siap membantu kapan saja",
    },
  ]

  return (
    <section id="benefits" className="relative py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-bold tracking-widest mb-4 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Our Advantages
          </h2>
          <p className="text-slate-400 text-lg">
            Keunggulan yang membuat kami berbeda
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/30 transition" />
                <div className="relative bg-slate-900 border border-slate-800/50 group-hover:border-cyan-500/30 w-16 h-16 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-all duration-300">
                  {benefit.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
