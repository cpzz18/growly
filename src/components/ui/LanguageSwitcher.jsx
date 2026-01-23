'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center p-1 space-x-1 border rounded-lg bg-slate-900/50 backdrop-blur-sm border-slate-800/50">
      <button
        onClick={() => setLanguage('id')}
        className={`px-3 py-2 rounded-md text-xs font-bold transition-all flex items-center space-x-1.5 ${
          language === 'id'
            ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan-sm'
            : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50'
        }`}
      >
        <span className="text-base">🇮🇩</span>
        <span>ID</span>
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-2 rounded-md text-xs font-bold transition-all flex items-center space-x-1.5 ${
          language === 'en'
            ? 'bg-cyan-500 text-slate-950 shadow-glow-cyan-sm'
            : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50'
        }`}
      >
        <span className="text-base">🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  )
}

export default LanguageSwitcher