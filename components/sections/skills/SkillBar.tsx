'use client'

import { motion } from 'framer-motion'

interface SkillBarProps {
  level: 1 | 2 | 3 | 4 | 5
  label: string
}

const LEVEL_LABELS: Record<number, { en: string; es: string }> = {
  1: { en: 'Beginner', es: 'Principiante' },
  2: { en: 'Elementary', es: 'Elemental' },
  3: { en: 'Intermediate', es: 'Intermedio' },
  4: { en: 'Advanced', es: 'Avanzado' },
  5: { en: 'Expert', es: 'Experto' },
}

export default function SkillBar({ level, label }: SkillBarProps) {
  const percentage = (level / 5) * 100

  return (
    <div className="flex flex-col gap-1.5" role="meter" aria-valuenow={level} aria-valuemin={1} aria-valuemax={5} aria-label={label}>
      <div className="flex justify-between items-center text-[11px] text-slate-500 font-mono">
        <span className="uppercase tracking-wider">
          {LEVEL_LABELS[level]?.en ?? ''}
        </span>
        <span>{level}/5</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand to-cyber-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.2 }}
        />
      </div>
    </div>
  )
}
