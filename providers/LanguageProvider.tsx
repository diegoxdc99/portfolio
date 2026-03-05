'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { ReactNode } from 'react'
import type { Language } from '@/types'

// ─── Context shape ────────────────────────────────────────────────────────────

interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

// ─── Provider ─────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'portfolio-lang'

function detectInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored === 'en' || stored === 'es') return stored
  return navigator.language.startsWith('es') ? 'es' : 'en'
}

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Use 'en' as SSR default to avoid hydration mismatch; real value is set on mount
  const [language, setLanguage] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLanguage(detectInitialLanguage())
    setMounted(true)
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next: Language = prev === 'en' ? 'es' : 'en'
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ language, toggleLanguage }),
    [language, toggleLanguage],
  )

  // Avoid flashing wrong language on first paint
  if (!mounted) return null

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// ─── Raw context export (used by useLanguage hook) ────────────────────────────

export { LanguageContext }
