'use client'

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition" />

      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="bg-slate-950 border border-slate-800/50 group-hover:border-cyan-500/30 w-14 h-14 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-all duration-300">
          {service.icon}
        </div>
        <span className="text-xs font-bold text-slate-600 tracking-widest">
          {service.tag}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
        {service.title}
      </h3>
      <p className="text-slate-400 mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <div className="space-y-3">
        {service.features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <div className="w-1 h-1 bg-cyan-400 rounded-full" />
            <span className="text-slate-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard
