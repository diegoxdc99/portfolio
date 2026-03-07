'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { portfolio } from '@/data/portfolio'

const CONTAINER_VARIANTS = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function TechStack() {
  const { t } = useLanguage()

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* ── Section header ── */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-3">
          <span className="h-px w-12 bg-brand" aria-hidden />
          <span className="text-brand text-xs font-mono tracking-widest uppercase">
            {t({ en: 'Technologies', es: 'Tecnologías' })}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {t({ en: 'Tech Stack', es: 'Stack Tecnológico' })}
        </h2>
        <p className="text-slate-400 max-w-xl text-lg font-light">
          {t({
            en: 'The tools and technologies I use to build scalable backend systems.',
            es: 'Las herramientas y tecnologías que uso para construir sistemas backend escalables.',
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
        {portfolio.techStack.map((category) => (
          <motion.div
            key={category.id}
            variants={CARD_VARIANTS}
            className="group relative bg-surface/40 backdrop-blur border border-slate-800 hover:border-brand/40 rounded-xl p-6 transition-colors duration-300 overflow-hidden"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />

            <h3 className="text-lg font-bold text-white mb-4 group-hover:text-brand transition-colors duration-300">
              {t(category.name)}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-3 py-1.5 bg-slate-800/80 text-slate-300 text-sm rounded-md border border-slate-700 group-hover:border-brand/20 transition-colors duration-300"
                >
                  {kw}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
