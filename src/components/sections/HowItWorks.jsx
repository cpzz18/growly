'use client'

const HowItWorks = () => {
  const steps = [
    { step: "01", title: "Konsultasi", desc: "Ceritakan kebutuhan Anda" },
    { step: "02", title: "Penawaran", desc: "Dapatkan estimasi biaya & waktu" },
    { step: "03", title: "Pengerjaan", desc: "Tim kami mulai bekerja" },
    { step: "04", title: "Selesai", desc: "Project selesai & siap digunakan" },
  ]

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-bold tracking-widest mb-4 block">
            WORKFLOW
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-400 text-lg">
            Proses mudah dalam 4 langkah
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all">
                <div className="text-6xl font-bold text-slate-800 mb-4 tracking-tighter">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">
                  {item.desc}
                </p>
              </div>

              {idx < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
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
