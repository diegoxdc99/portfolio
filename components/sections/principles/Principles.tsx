'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Minimize2, Activity, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/useLanguage'
import { portfolio } from '@/data/portfolio'
import type { EngineeringPrinciple } from '@/types'

const ICONS: Record<string, typeof TrendingUp> = {
  'trending-up': TrendingUp,
  minimize: Minimize2,
  activity: Activity,
  zap: Zap,
}

const CONTAINER_VARIANTS = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function Principles() {
  const { t } = useLanguage()

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* ── Section header ── */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-3">
          <span className="h-px w-12 bg-brand" aria-hidden />
          <span className="text-brand text-xs font-mono tracking-widest uppercase">
            {t({ en: 'Philosophy', es: 'Filosofía' })}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {t({ en: 'Engineering Principles', es: 'Principios de Ingeniería' })}
        </h2>
        <p className="text-slate-400 max-w-xl text-lg">
          {t({
            en: 'The values that guide how I design and build software.',
            es: 'Los valores que guían cómo diseño y construyo software.',
          })}
        </p>
      </div>

      {/* ── Grid ── */}
      <motion.div
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {portfolio.principles.map((principle) => (
          <PrincipleCard key={principle.id} principle={principle} />
        ))}
      </motion.div>
    </div>
  )
}

function PrincipleCard({ principle }: { principle: EngineeringPrinciple }) {
  const { t } = useLanguage()
  const Icon = ICONS[principle.icon] ?? Zap

  return (
    <motion.div
      variants={CARD_VARIANTS}
      className="group relative bg-surface/40 backdrop-blur border border-slate-800 hover:border-brand/40 rounded-xl p-6 transition-colors duration-300 overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />

      <div className="flex items-start gap-4">
        <div className="p-2.5 bg-brand/10 rounded-lg border border-brand/20 group-hover:bg-brand/20 transition-colors duration-300 shrink-0">
          <Icon className="w-5 h-5 text-brand" aria-hidden />
        </div>
        <div>
          <h3 className="text-base font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">
            {t(principle.title)}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {t(principle.description)}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
