'use client'

import { useContext } from 'react'
import { LanguageContext } from '@/providers/LanguageProvider'
import type { BilingualText, Language } from '@/types'

interface UseLanguageReturn {
  language: Language
  toggleLanguage: () => void
  /** Shorthand: returns the string for the active language */
  t: (text: BilingualText) => string
}

export function useLanguage(): UseLanguageReturn {
  const ctx = useContext(LanguageContext)

  if (!ctx) {
    throw new Error('useLanguage must be used inside <LanguageProvider>')
  }

  const { language, toggleLanguage } = ctx

  return {
    language,
    toggleLanguage,
    t: (text: BilingualText) => text[language],
  }
}
