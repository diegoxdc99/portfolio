'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { portfolio } from '@/data/portfolio'

const SECTION_IDS = ['home', 'experience', 'stack', 'principles', 'contact']

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()
  const activeSection = useScrollSpy(SECTION_IDS)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 250)
  }

  return (
    <header
      role="banner"
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass border-b border-[rgba(59,130,246,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"
      >
        {/* ── Logo ── */}
        <button
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Go to top"
        >
          <div className="relative size-10 flex items-center justify-center bg-surface border border-brand/30 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
            <Terminal className="text-brand w-5 h-5" aria-hidden />
          </div>
          <div>
            <p className="text-white text-lg font-bold leading-tight tracking-tight">
              Diego<span className="text-brand"> Meneses</span>
            </p>
            <p className="text-xs text-slate-400 tracking-wider uppercase">Backend Engineer</p>
          </div>
        </button>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {portfolio.nav.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={[
                    'relative text-sm font-medium transition-colors duration-200',
                    'after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300',
                    isActive
                      ? 'text-white after:w-full'
                      : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {t(item.label)}
                </button>
              </li>
            )
          })}
        </ul>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-4">
          {/* Language toggle */}
          <div
            className="flex items-center gap-1 text-xs font-bold border border-slate-700 rounded-full px-1 py-1 bg-surface/50"
            role="group"
            aria-label="Language selector"
          >
            {(['en', 'es'] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => language !== lang && toggleLanguage()}
                className={[
                  'px-3 py-2 rounded-full transition-all duration-200 uppercase min-h-[36px]',
                  language === lang
                    ? 'bg-slate-700 text-white'
                    : 'text-slate-400 hover:text-white',
                ].join(' ')}
                aria-pressed={language === lang}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* CTA — contact link */}
          <a
            href={portfolio.social.find((s) => s.id === 'linkedin')?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 h-10 px-5 bg-brand/10 hover:bg-brand text-brand hover:text-white border border-brand/50 hover:border-brand rounded-lg text-sm font-bold transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.1)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
          >
            {t({ en: "Let's Connect", es: 'Conectemos' })}
          </a>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] as const }}
            className="md:hidden overflow-hidden glass border-b border-[rgba(59,130,246,0.15)]"
          >
            <ul className="flex flex-col px-6 pb-6 pt-2 gap-1" role="list">
              {portfolio.nav.map((item) => {
                const sectionId = item.href.replace('#', '')
                const isActive = activeSection === sectionId

                return (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={[
                        'w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'bg-brand/10 text-brand border border-brand/20'
                          : 'text-slate-300 hover:text-white hover:bg-white/5',
                      ].join(' ')}
                    >
                      {t(item.label)}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
