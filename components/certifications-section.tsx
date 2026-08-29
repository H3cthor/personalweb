'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, CheckCircle, ExternalLink, Sparkles } from 'lucide-react'

const certsData = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google / Coursera',
    badgeImg: '/images/badge_google_ai.png',
    accentColor: 'from-amber-50 to-orange-50/60 border-amber-200/80',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
    description: 'Certificación oficial sobre principios, herramientas de Inteligencia Artificial Generativa y optimización de flujos de trabajo.',
    highlights: [
      'Prompt Engineering y diseño de instrucciones',
      'Uso ético y práctico de herramientas GenAI',
      'Certificado de finalización internacional'
    ]
  },
  {
    title: 'Inteligencia Artificial & Machine Learning',
    issuer: 'Especialízate.Sé+ / Open Academy',
    badgeImg: '/images/badge_open_academy.png',
    accentColor: 'from-rose-50 to-pink-50/60 border-rose-200/80',
    badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
    description: 'Especialización avanzada en algoritmos de aprendizaje supervisado, no supervisado y redes neuronales.',
    highlights: [
      'Modelos de regresión y clasificación',
      'Evaluación y ajuste de hiperparámetros',
      'Especialización nivel profesional (Sé+)'
    ]
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy (Verified)',
    badgeImg: '/images/badge_cisco_ds.png',
    accentColor: 'from-emerald-50 to-teal-50/60 border-emerald-200/80',
    badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    description: 'Acreditación verificada en ciencia de datos, exploración analítica y fundamentos de análisis cuantitativo.',
    highlights: [
      'Limpieza y preparación de datos',
      'Visualización analítica',
      'Insignia digital oficial Cisco Verified'
    ]
  }
]

export default function CertificationsSection() {
  return (
    <section id="certificaciones" className="py-12 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-xs font-semibold mb-3 border border-amber-200"
        >
          <Award className="w-4 h-4 text-amber-600" />
          <span>Acreditaciones Oficiales</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
          Certificaciones Destacadas
        </h2>
        <p className="text-slate-600 mt-2 text-sm md:text-base max-w-2xl mx-auto">
          Insignias y certificaciones otorgadas por organizaciones globales líderes en Inteligencia Artificial y Ciencia de Datos.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {certsData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`rounded-3xl p-6 md:p-8 bg-gradient-to-b ${cert.accentColor} border shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
          >
            <div>
              {/* Badge Image */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl bg-white p-2 shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={cert.badgeImg}
                    alt={cert.title}
                    width={72}
                    height={72}
                    className="object-contain max-h-full"
                  />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${cert.badgeColor}`}>
                  Verificado
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800 leading-snug mb-1">
                {cert.title}
              </h3>
              <p className="text-xs md:text-sm font-semibold text-purple-700 mb-4">
                {cert.issuer}
              </p>

              <p className="text-slate-700 text-xs md:text-sm leading-relaxed mb-6">
                {cert.description}
              </p>

              <ul className="space-y-2 mb-6">
                {cert.highlights.map((item, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-xs md:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Acreditación Activa
              </span>
              <span className="text-purple-600">Google / Cisco / Open Academy</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
