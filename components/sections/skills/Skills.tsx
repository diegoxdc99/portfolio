'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'
import { portfolio } from '@/data/portfolio'
import SkillCard from './SkillCard'

const CONTAINER_VARIANTS = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* ── Section header ── */}
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-3">
          <span className="h-px w-12 bg-brand" aria-hidden />
          <span className="text-brand text-xs font-mono tracking-widest uppercase">
            {t({ en: 'Tech Stack / Capabilities', es: 'Stack Técnico / Capacidades' })}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {t({ en: 'Skill Matrix', es: 'Matriz de Habilidades' })}
        </h2>
        <p className="text-slate-400 max-w-xl text-lg font-light">
          {t({
            en: 'Core competencies across backend engineering, cloud infrastructure, and technical leadership.',
            es: 'Competencias core en ingeniería backend, infraestructura cloud y liderazgo técnico.',
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
        role="list"
        aria-label={t({ en: 'Skill groups', es: 'Grupos de habilidades' })}
      >
        {portfolio.skills.map((skill) => (
          <div key={skill.id} role="listitem">
            <SkillCard skill={skill} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
