'use client'

import { portfolio } from '@/data/portfolio'
import { useLanguage } from '@/hooks/useLanguage'
import ContactCard from './ContactCard'

export default function Contact() {
  const { t } = useLanguage()
  const linkedIn = portfolio.social.find((s) => s.id === 'linkedin')!
  const github = portfolio.social.find((s) => s.id === 'github')!

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-24 relative">
      {/* ── Section header ── */}
      <div className="mb-16 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-3">
          <span className="h-px w-12 bg-brand" aria-hidden />
          <span className="text-brand text-xs font-mono tracking-widest uppercase">
            {t({ en: 'Get in Touch', es: 'Contacto' })}
          </span>
          <span className="h-px w-12 bg-brand" aria-hidden />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
          {t({ en: "Let's", es: 'Hablemos' })}{' '}
          <span className="text-brand">{t({ en: 'Connect', es: '' })}</span>
        </h2>
        <p className="text-slate-400 max-w-lg mx-auto text-lg">
          {t({
            en: 'Open to new opportunities and interesting conversations. Reach out through your preferred channel.',
            es: 'Abierto a nuevas oportunidades y conversaciones interesantes. Contáctame por tu canal preferido.',
          })}
        </p>
      </div>

      {/* ── Contact cards ── */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <ContactCard
            link={linkedIn}
            primaryLabel="LinkedIn"
            secondaryLabel={t({ en: 'Connect', es: 'Conectar' })}
          />
          <ContactCard
            link={github}
            primaryLabel="GitHub"
            secondaryLabel={t({ en: 'View Code', es: 'Ver Código' })}
          />
        </div>

        {/* Status footer */}
        <div className="mt-10 border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
              {t({ en: 'Status', es: 'Estado' })}
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-500 font-mono">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" aria-hidden />
              {t({ en: 'Open to Opportunities', es: 'Abierto a Oportunidades' })}
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">
              {t({ en: 'Timezone', es: 'Zona Horaria' })}
            </p>
            <p className="text-xs text-slate-300 font-mono">UTC-5 (Colombia)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
