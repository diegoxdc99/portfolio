'use client'

import { createContext, useCallback, useMemo, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import type { Language } from '@/types'

// ─── Context shape ────────────────────────────────────────────────────────────

interface LanguageContextValue {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

// ─── External store helpers ───────────────────────────────────────────────────

const STORAGE_KEY = 'portfolio-lang'
const LANGUAGE_EVENT = 'portfolio:language-change'

function readLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null
  if (stored === 'en' || stored === 'es') return stored
  return navigator.language.startsWith('es') ? 'es' : 'en'
}

function subscribeLanguage(cb: () => void): () => void {
  window.addEventListener(LANGUAGE_EVENT, cb)
  window.addEventListener('storage', cb)
  return () => {
    window.removeEventListener(LANGUAGE_EVENT, cb)
    window.removeEventListener('storage', cb)
  }
}

// No-op: mounted flips from false → true once on client and never changes again.
function subscribeMounted(): () => void {
  return () => {}
}

// ─── Provider ─────────────────────────────────────────────────────────────────

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Server snapshot → false; client snapshot → true. Prevents flash of wrong language.
  const mounted = useSyncExternalStore(subscribeMounted, () => true, () => false)

  // Server snapshot → 'en' (no browser APIs); client snapshot reads localStorage / navigator.
  const language = useSyncExternalStore(subscribeLanguage, readLanguage, () => 'en' as Language)

  const toggleLanguage = useCallback(() => {
    const next: Language = readLanguage() === 'en' ? 'es' : 'en'
    localStorage.setItem(STORAGE_KEY, next)
    window.dispatchEvent(new Event(LANGUAGE_EVENT))
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ language, toggleLanguage }),
    [language, toggleLanguage],
  )

  if (!mounted) return null

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

// ─── Raw context export (used by useLanguage hook) ────────────────────────────

export { LanguageContext }
