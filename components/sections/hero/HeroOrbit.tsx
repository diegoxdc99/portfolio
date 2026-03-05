'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeroOrbitProps {
  avatarUrl: string
  name: string
}

export default function HeroOrbit({ avatarUrl, name }: HeroOrbitProps) {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
      className="relative w-72 h-72 flex items-center justify-center"
    >
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-full bg-brand/5 blur-[80px]" aria-hidden />

      {/* Outer ring container */}
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm border border-brand/40 rounded-full card-glow flex items-center justify-center">
        {/* Spinning dashed ring */}
        <div className="absolute inset-4 border-2 border-brand/20 rounded-full border-dashed animate-spin-slow" aria-hidden />

        {/* Counter-spinning dotted ring */}
        <div className="absolute inset-8 border border-cyber-accent/20 rounded-full border-dotted animate-spin-reverse" aria-hidden />

        {/* Data streams */}
        <DataStream delay={0} axis="vertical" />
        <DataStream delay={1.5} axis="horizontal" />

        {/* Avatar core */}
        <div className="relative z-20 w-48 h-48 bg-obsidian rounded-full border border-brand/60 flex items-center justify-center shadow-inner">
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-brand relative group">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              className="object-cover opacity-90 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              sizes="160px"
              priority
            />
            <div className="absolute inset-0 bg-brand/15 mix-blend-overlay" aria-hidden />
          </div>
        </div>
      </div>

      {/* Status badge */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1 rounded-full bg-surface border border-brand/30 text-[10px] font-mono text-brand shadow-lg whitespace-nowrap z-10">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow" aria-hidden />
        SYSTEM: ONLINE
      </div>
    </motion.div>
  )
}

// ─── Internal sub-component ───────────────────────────────────────────────────

function DataStream({ delay, axis }: { delay: number; axis: 'vertical' | 'horizontal' }) {
  const isVertical = axis === 'vertical'

  return (
    <div
      aria-hidden
      className={[
        'absolute overflow-hidden',
        isVertical
          ? 'left-1/2 top-0 -translate-x-1/2 w-[1px] h-full'
          : 'top-1/2 left-0 -translate-y-1/2 h-[1px] w-full rotate-90',
      ].join(' ')}
    >
      <div
        className="absolute w-[2px] h-[80px] bg-gradient-to-b from-transparent via-brand to-transparent opacity-0 animate-flow"
        style={{ animationDelay: `${delay}s` }}
      />
    </div>
  )
}
