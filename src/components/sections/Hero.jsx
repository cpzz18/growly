import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  const stats = [
    { label: 'PROJECTS DONE', value: '100+', color: 'cyan' },
    { label: 'CLIENT SATISFACTION', value: '95%', color: 'blue' },
    { label: 'YEARS EXPERIENCE', value: '3+', color: 'cyan' },
    { label: 'RESPONSE TIME', value: '<1H', color: 'green' },
  ]

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute top-60 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 bg-slate-900/50 backdrop-blur-sm rounded-full border border-slate-800/50">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-slate-400 text-xs font-medium tracking-wider">
            AVAILABLE FOR PROJECTS
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight">
          <span className="text-white">Transform Your</span>
          <br />
          <span className="text-gradient">Digital Vision</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          Spesialis pembuatan website profesional dan bantuan pengerjaan tugas
          programming.
          <span className="text-cyan-400 font-semibold">
            {' '}
            Cepat, berkualitas, terpercaya.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link
            href="#contact"
            className="group bg-green-500 hover:bg-green-600 text-slate-950 px-8 py-4 rounded-lg font-bold text-sm transition shadow-xl shadow-green-500/20 hover:shadow-green-500/40 flex items-center justify-center space-x-2"
          >
            <span>START PROJECT</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            href="#packages"
            className="border-2 border-slate-800 hover:border-cyan-500/50 bg-slate-900/50 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-sm transition"
          >
            VIEW PACKAGES
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div
                className={`text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r ${
                  stat.color === 'green'
                    ? 'from-green-400 to-green-500'
                    : stat.color === 'blue'
                    ? 'from-blue-400 to-cyan-400'
                    : 'from-cyan-400 to-blue-400'
                } bg-clip-text text-transparent group-hover:scale-110 transition`}
              >
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs font-medium tracking-wider">
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
