'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Globe, Linkedin, Github, ExternalLink, MessageSquare, QrCode } from 'lucide-react'

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
)

const contactItems = [
  {
    icon: Mail,
    label: 'Correo Electrónico',
    value: 'hectorsalbe@hotmail.com',
    href: 'mailto:hectorsalbe@hotmail.com'
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: '4272193840',
    href: 'https://wa.me/524272193840'
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
  return (
    <section id="contacto" className="py-8 scroll-mt-24">
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        {/* Header */}
        <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-slate-100">
          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <MessageSquare className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Información de Contacto
            </h2>
            <p className="text-sm sm:text-base text-slate-500">
              Canales directos de comunicación y perfiles profesionales
            </p>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon
            const isWhatsApp = item.label === 'WhatsApp'
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`p-2 rounded-lg bg-white border border-slate-200 ${isWhatsApp ? 'text-emerald-600' : 'text-blue-600'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs sm:text-sm font-semibold text-slate-500 block mb-1">
                    {item.label}
                  </span>
                  <p className="text-sm sm:text-base font-bold text-slate-900 break-all mb-4">
                    {item.value}
                  </p>
                </div>

                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 rounded-lg bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 shadow-2xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Abrir enlace</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  </a>
                )}
              </motion.div>
            )
          })}

          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 5 * 0.05 }}
            className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 flex flex-col items-center justify-between hover:border-blue-300 transition-colors text-center"
          >
            <div className="w-full flex flex-col items-center">
              <div className="flex items-center justify-between w-full mb-2">
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600">
                  <QrCode className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                  Código QR
                </span>
              </div>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 block mb-2 w-full text-left">
                Contacto Rápido
              </span>
              <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white p-2 rounded-xl border border-slate-200 shadow-2xs relative my-1">
                <Image
                  src="/images/QR.png"
                  alt="Código QR de contacto"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-2 font-medium">
              Escanea con tu teléfono para acceder a mis datos
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


