import { CheckCircle } from 'lucide-react'
import { PACKAGES } from '@/lib/constants'

const Packages = () => {
  return (
    <section id="packages" className="relative py-20 px-4 bg-slate-900/30">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 text-sm font-bold tracking-widest mb-4 block">
            PRICING
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Choose Your Plan
          </h2>
          <p className="text-slate-400 text-lg">
            Pilih paket yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative group ${pkg.popular ? 'md:-mt-4' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className={`relative bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border transition-all duration-300 ${
                pkg.popular 
                  ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                  : 'border-slate-800/50 hover:border-cyan-500/30'
              } ${pkg.popular ? 'md:py-12' : ''}`}>
                
                {/* Package Header */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-slate-500 tracking-widest mb-3">
                    {pkg.name}
                  </h3>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 uppercase tracking-wider">
                    {pkg.priceDetail}
                  </span>
                </div>
                
                <p className="text-slate-400 mb-8 text-sm">
                  {pkg.description}
                </p>
                
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <a 
                  href="#contact" 
                  className={`block text-center py-3.5 rounded-lg font-bold text-sm transition-all ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 hover:shadow-lg hover:shadow-cyan-500/30' 
                      : 'border-2 border-slate-800 hover:border-cyan-500/50 bg-slate-900/50 text-white'
                  }`}
                >
                  SELECT PLAN
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Packages