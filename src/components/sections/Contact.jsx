'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { sendWhatsAppMessage, validateForm } from '@/lib/utils'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: ''
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = () => {
    const validationErrors = validateForm(formData)
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    
    sendWhatsAppMessage(formData)
  }

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-slate-800/50">
          <div className="text-center mb-10">
            <span className="text-cyan-400 text-sm font-bold tracking-widest mb-4 block">
              GET STARTED
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Start Your Project
            </h2>
            <p className="text-slate-400 text-lg">
              Hubungi kami sekarang dan dapatkan konsultasi gratis
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium tracking-wide">
                NAMA LENGKAP
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-slate-950/50 border rounded-lg text-white focus:outline-none transition placeholder-slate-600 ${
                  errors.name 
                    ? 'border-red-500/50 focus:border-red-500' 
                    : 'border-slate-800/50 focus:border-cyan-500/50'
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium tracking-wide">
                EMAIL
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-slate-950/50 border rounded-lg text-white focus:outline-none transition placeholder-slate-600 ${
                  errors.email 
                    ? 'border-red-500/50 focus:border-red-500' 
                    : 'border-slate-800/50 focus:border-cyan-500/50'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium tracking-wide">
                WHATSAPP
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-slate-950/50 border rounded-lg text-white focus:outline-none transition placeholder-slate-600 ${
                  errors.whatsapp 
                    ? 'border-red-500/50 focus:border-red-500' 
                    : 'border-slate-800/50 focus:border-cyan-500/50'
                }`}
                placeholder="08123456789"
              />
              {errors.whatsapp && (
                <p className="text-red-400 text-xs mt-1">{errors.whatsapp}</p>
              )}
            </div>

            <div>
              <label className="block text-slate-400 mb-2 text-sm font-medium tracking-wide">
                LAYANAN
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 bg-slate-950/50 border rounded-lg text-white focus:outline-none transition ${
                  errors.service 
                    ? 'border-red-500/50 focus:border-red-500' 
                    : 'border-slate-800/50 focus:border-cyan-500/50'
                }`}
              >
                <option value="" className="bg-slate-900">Pilih layanan</option>
                {SERVICES.map((service) => (
                  <option 
                    key={service.value} 
                    value={service.value} 
                    className="bg-slate-900"
                  >
                    {service.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="text-red-400 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-slate-950 py-4 rounded-lg font-bold text-sm transition shadow-xl shadow-green-500/20 hover:shadow-green-500/40 flex items-center justify-center space-x-2 group"
            >
              <span>SEND MESSAGE VIA WHATSAPP</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact