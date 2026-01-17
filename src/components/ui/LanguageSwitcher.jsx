'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { Globe } from 'lucide-react'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center p-1 space-x-2 border rounded-lg bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
      <Globe className="w-4 h-4 ml-2 text-slate-400" />

      <button
        aria-label="Switch language to Indonesian"
        onClick={() => setLanguage('id')}
        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
          language === 'id'
            ? 'bg-cyan-500 text-slate-950'
            : 'text-slate-400 hover:text-cyan-400'
        }`}
      >
        ID
      </button>

      <button
        aria-label="Switch language to English"
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
          language === 'en'
            ? 'bg-cyan-500 text-slate-950'
            : 'text-slate-400 hover:text-cyan-400'
        }`}
      >
        EN
      </button>
    </div>
  )
}

export default LanguageSwitcher
