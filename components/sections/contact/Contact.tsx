'use client'

import { Lock } from 'lucide-react'
import { portfolio } from '@/data/portfolio'
import { useLanguage } from '@/hooks/useLanguage'
import ContactCard from './ContactCard'

export default function Contact() {
  const { t } = useLanguage()
  const linkedIn = portfolio.social.find((s) => s.id === 'linkedin')!
  const github = portfolio.social.find((s) => s.id === 'github')!

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 relative">
      {/* ── Rain background columns (CSS only) ── */}
      <div className="hidden md:block fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden>
        {[5, 15, 25, 35, 45, 55, 65, 75, 85, 95].map((left, i) => (
          <div
            key={left}
            className="rain-column absolute top-[-50%] w-px h-[150%] opacity-20 animate-rain"
            style={{
              left: `${left}%`,
              animationDuration: `${7 + i * 0.8}s`,
              animationDelay: `${i * 0.4}s`,
              background:
                i % 2 === 0
                  ? 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.4), transparent)'
                  : 'linear-gradient(to bottom, transparent, rgba(16,185,129,0.25), transparent)',
            }}
          />
        ))}
        <div className="absolute inset-0 scanline-overlay opacity-10" />
      </div>

      {/* ── Section header ── */}
      <div className="mb-16 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="h-px w-12 bg-brand" aria-hidden />
          <span className="text-brand text-xs font-mono tracking-widest uppercase">
            {t({ en: 'Encrypted Connection', es: 'Conexión Cifrada' })}
          </span>
          <span className="h-px w-12 bg-brand" aria-hidden />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {t({ en: 'Secure', es: 'Canal' })}{' '}
          <span className="text-brand text-glow">{t({ en: 'Channel', es: 'Seguro' })}</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-lg font-light">
          {t({
            en: 'Direct transmission lines are open. Choose your preferred protocol to initiate contact.',
            es: 'Las líneas de transmisión están abiertas. Elige tu protocolo preferido para iniciar contacto.',
          })}
        </p>
      </div>

      {/* ── Main card container ── */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Channel established badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-mono">
            <Lock className="w-3 h-3" aria-hidden />
            {t({ en: 'SECURE_CHANNEL_ESTABLISHED', es: 'CANAL_SEGURO_ESTABLECIDO' })}
          </div>
        </div>

        {/* Contact cards grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <ContactCard
            link={linkedIn}
            primaryLabel={t({ en: 'Secure Link', es: 'Enlace Seguro' })}
            secondaryLabel={t({ en: 'Initialize', es: 'Conectar' })}
          />
          <ContactCard
            link={github}
            primaryLabel={t({ en: 'Repository Access', es: 'Acceso al Repositorio' })}
            secondaryLabel={t({ en: 'Browse Code', es: 'Ver Código' })}
          />
        </div>

        {/* Status footer */}
        <div className="mt-10 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
              {t({ en: 'Status', es: 'Estado' })}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-500 font-mono">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse-slow" aria-hidden />
              {t({ en: 'Open to Opportunities', es: 'Abierto a Oportunidades' })}
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
              {t({ en: 'Timezone', es: 'Zona Horaria' })}
            </p>
            <p className="text-xs text-slate-300 font-mono">UTC−5 (Colombia)</p>
          </div>
        </div>

        {/* Terminal */}
        <div className="mt-6 bg-black/40 rounded border border-slate-800 p-4 font-mono text-xs text-left">
          <p className="text-slate-500 mb-1">root@portfolio:~# ./contact_protocol.sh</p>
          <p className="text-brand">
            {t({ en: 'Initiating handshake sequence...', es: 'Iniciando secuencia de handshake...' })}
            <span className="inline-block border-r-2 border-brand ml-1 h-3 align-middle animate-blink" aria-hidden />
          </p>
        </div>
      </div>
    </div>
  )
}
