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
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: [0.42, 0, 0.58, 1] as const }}
      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center"
    >
      {/* Glow backdrop */}
      <div className="absolute inset-0 rounded-full bg-brand/5 blur-[60px]" aria-hidden />

      {/* Outer ring */}
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm border border-brand/30 rounded-full card-glow flex items-center justify-center">
        {/* Spinning ring */}
        <div className="absolute inset-4 border border-brand/15 rounded-full border-dashed animate-spin-slow" aria-hidden />

        {/* Avatar core */}
        <div className="relative z-20 w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-obsidian rounded-full border border-brand/40 flex items-center justify-center shadow-inner">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-brand/60 relative group">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              className="object-cover opacity-90 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 160px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Status badge */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-brand/30 text-[10px] font-mono text-slate-400 shadow-lg whitespace-nowrap z-10">
        <span className="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden />
        SYSTEM: ONLINE
      </div>
    </motion.div>
  )
}
