'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'Correo Electrónico',
    value: 'hectorsalbe@hotmail.com',
    href: 'mailto:hectorsalbe@hotmail.com'
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '4272193840',
    href: 'tel:4272193840'
  },
  {
    icon: Globe,
    label: 'Sitio Web',
    value: 'hectorsaldana.com',
    href: 'https://hectorsaldana.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'mx.linkedin.com/in/hectorsb',
    href: 'https://mx.linkedin.com/in/hectorsb'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/H3cthor',
    href: 'https://github.com/H3cthor'
  }
]

export default function ContactInfo() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(text)
    setTimeout(() => setCopiedText(null), 2000)
  }

  return (
    <section id="contacto" className="py-8 scroll-mt-24">
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Información de Contacto
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Canales directos de comunicación y perfiles profesionales
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon
            const isCopied = copiedText === item.value
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <button
                      onClick={() => handleCopy(item.value)}
                      className="p-1.5 rounded-md bg-white hover:bg-slate-100 text-slate-500 border border-slate-200 text-xs flex items-center gap-1 transition-colors"
                      title="Copiar"
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? '¡Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>

                  <span className="text-xs font-semibold text-slate-500 block mb-1">
                    {item.label}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 break-all mb-3">
                    {item.value}
                  </p>
                </div>

                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 shadow-2xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Abrir enlace</span>
                    <ExternalLink className="w-3 h-3 text-blue-600" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
