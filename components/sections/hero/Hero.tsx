'use client'

import { motion, type Variants } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { portfolio } from '@/data/portfolio'
import HeroOrbit from './HeroOrbit'
import HeroTechBadges from './HeroTechBadges'
import HeroFloatingCards from './HeroFloatingCards'

const VARIANTS = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  } satisfies Variants,
  item: {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  } satisfies Variants,
}

export default function Hero() {
  const { t } = useLanguage()
  const { basics, summary, techBadges, floatingCards } = portfolio

  const handleScrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ── Text column ── */}
        <motion.div
          variants={VARIANTS.container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8 text-center lg:text-left relative z-20"
        >
          {/* Status badge */}
          <motion.div variants={VARIANTS.item} className="flex justify-center lg:justify-start">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface border border-brand/30 shadow-[0_0_15px_rgba(59,130,246,0.15)] animate-float">
              <span className="relative flex h-3 w-3" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand" />
              </span>
              <span className="text-sm font-bold text-white tracking-wide">
                <span className="text-brand text-glow">10+</span>{' '}
                {t({ en: 'Years Experience', es: 'Años de Experiencia' })}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={VARIANTS.item} className="space-y-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              {t(basics.headline)}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-cyber-accent to-white animate-pulse-slow">
                {t({ en: 'Backend', es: 'Backend' })}
              </span>
            </h1>
            <p className="text-sm font-mono text-slate-400 tracking-widest uppercase">
              {t(basics.subheadline)}
            </p>
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={VARIANTS.item}
            className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            {t(summary)}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={VARIANTS.item}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <button
              onClick={handleScrollToExperience}
              className="h-12 px-8 bg-brand text-white rounded-lg text-base font-bold transition-all duration-300 hover:bg-brand-dark hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center gap-2"
            >
              {t({ en: 'View Experience', es: 'Ver Experiencia' })}
              <ChevronDown className="w-4 h-4" aria-hidden />
            </button>

            <a
              href={portfolio.social.find((s) => s.id === 'linkedin')?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-8 bg-transparent text-brand rounded-lg text-base font-bold border border-brand/50 hover:border-brand hover:bg-brand/10 transition-all duration-300 flex items-center gap-2"
            >
              LinkedIn
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div variants={VARIANTS.item}>
            <HeroTechBadges
              badges={techBadges}
              label={t({ en: 'Stack Proficiency', es: 'Dominio del Stack' })}
            />
          </motion.div>
        </motion.div>

        {/* ── Visual column ── */}
        <div className="relative h-[280px] sm:h-[420px] md:h-[500px] lg:h-[680px] w-full flex items-center justify-center">
          {/* Outer orbital rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden>
            <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] border border-slate-800/50 rounded-full" />
            <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] md:w-[560px] md:h-[560px] border border-slate-800/25 rounded-full border-dashed animate-spin-slow" style={{ animationDuration: '60s' }} />
          </div>

          {/* Core orbital avatar */}
          <HeroOrbit avatarUrl={basics.avatarUrl} name={basics.name} />

          {/* Floating tech cards */}
          <HeroFloatingCards cards={floatingCards} />
        </div>
      </div>
    </div>
  )
}
