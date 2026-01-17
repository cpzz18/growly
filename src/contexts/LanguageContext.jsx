'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '@/lib/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('id')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('growly-language')
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('growly-language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id')
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}