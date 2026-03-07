'use client'

import { motion, type Variants } from 'framer-motion'
import { ChevronDown, Github, FileText } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { portfolio } from '@/data/portfolio'
import HeroOrbit from './HeroOrbit'
import HeroTechBadges from './HeroTechBadges'

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
  const { basics, techBadges } = portfolio

  const handleScrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
  }

  const github = portfolio.social.find((s) => s.id === 'github')
  const linkedin = portfolio.social.find((s) => s.id === 'linkedin')

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
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-surface border border-brand/30 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2.5 w-2.5" aria-hidden>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-slate-300 tracking-wide">
                <span className="text-white font-bold">10+</span>{' '}
                {t({ en: 'years building production systems', es: 'años construyendo sistemas en producción' })}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div variants={VARIANTS.item} className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
              {basics.shortName.split(' ')[0]}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-cyber-accent">
                {basics.shortName.split(' ')[1]}
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-slate-300">
              {t(basics.headline)}
            </p>
          </motion.div>

          {/* Summary */}
          <motion.p
            variants={VARIANTS.item}
            className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            {t(basics.subheadline)}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={VARIANTS.item}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <button
              onClick={handleScrollToExperience}
              className="h-12 px-8 bg-brand text-white rounded-lg text-sm font-bold transition-all duration-300 hover:bg-brand-dark hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] flex items-center gap-2"
            >
              {t({ en: 'View Experience', es: 'Ver Experiencia' })}
              <ChevronDown className="w-4 h-4" aria-hidden />
            </button>

            <a
              href={github?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 bg-transparent text-slate-300 rounded-lg text-sm font-bold border border-slate-700 hover:border-slate-500 hover:text-white hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <Github className="w-4 h-4" aria-hidden />
              GitHub
            </a>

            <a
              href={linkedin?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 px-6 bg-transparent text-slate-300 rounded-lg text-sm font-bold border border-slate-700 hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-300 flex items-center gap-2"
            >
              <FileText className="w-4 h-4" aria-hidden />
              {t({ en: 'Download CV', es: 'Descargar CV' })}
            </a>
          </motion.div>

          {/* Tech badges */}
          <motion.div variants={VARIANTS.item}>
            <HeroTechBadges
              badges={techBadges}
              label={t({ en: 'Core Stack', es: 'Stack Principal' })}
            />
          </motion.div>
        </motion.div>

        {/* ── Visual column ── */}
        <div className="relative h-[280px] sm:h-[380px] md:h-[440px] lg:h-[560px] w-full flex items-center justify-center">
          {/* Single orbital ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden>
            <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] border border-slate-800/40 rounded-full" />
            <div className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[480px] md:h-[480px] border border-slate-800/20 rounded-full border-dashed animate-spin-slow" style={{ animationDuration: '90s' }} />
          </div>

          {/* Core orbital avatar */}
          <HeroOrbit avatarUrl={basics.avatarUrl} name={basics.name} />
        </div>
      </div>
    </div>
  )
}
