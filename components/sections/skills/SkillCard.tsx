'use client'

import { motion } from 'framer-motion'
import type { SkillGroup } from '@/types'
import { useLanguage } from '@/hooks/useLanguage'
import SkillBar from './SkillBar'

interface SkillCardProps {
  skill: SkillGroup
}

const CARD_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function SkillCard({ skill }: SkillCardProps) {
  const { t } = useLanguage()
  const name = t(skill.name)

  return (
    <motion.article
      variants={CARD_VARIANTS}
      whileInView="show"
      initial="hidden"
      viewport={{ once: true, margin: '-60px' }}
      className="group relative bg-surface/40 backdrop-blur border border-slate-800 hover:border-brand/40 rounded-xl p-6 transition-colors duration-300 overflow-hidden"
      aria-label={name}
    >
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />

      {/* Corner glow on hover */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />

      <div className="relative z-10 flex flex-col gap-5">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand transition-colors duration-300">
            {name}
          </h3>
          <SkillBar level={skill.level} label={name} />
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2" role="list" aria-label={`${name} technologies`}>
          {skill.keywords.map((kw) => (
            <span
              key={kw}
              role="listitem"
              className="px-2.5 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-md border border-slate-700 group-hover:border-brand/20 transition-colors duration-300"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
