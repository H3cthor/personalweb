'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, CheckCircle2 } from 'lucide-react'

const certsData = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google / Coursera',
    badgeImg: '/images/ai_essentials.png',
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
    badgeImg: '/images/ia ML.png',
    description: 'Especialización avanzada en algoritmos de aprendizaje supervisado, no supervisado y redes neuronales.',
    highlights: [
      'Modelos de regresión y clasificación',
      'Evaluación y ajuste de hiperparámetros',
      'Especialización nivel profesional (Sé+)'
    ]
  },
  {
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    badgeImg: '/images/cisco ds.png',
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
    <section id="certificaciones" className="py-8 scroll-mt-24">
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Certificaciones
            </h2>
            <p className="text-sm sm:text-base text-slate-500">
              Acreditaciones oficiales e insignias profesionales
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-all shadow-2xs group"
            >
              <div>
                {/* Large Badge Image Showcase */}
                <div className="w-full h-48 sm:h-52 rounded-xl bg-white p-3 border border-slate-200/80 shadow-xs flex items-center justify-center overflow-hidden mb-4 relative group-hover:border-blue-200 transition-colors">
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50/95 backdrop-blur-xs px-2.5 py-1 rounded-md border border-blue-100 shadow-2xs">
                      Verificado
                    </span>
                  </div>
                  <Image
                    src={cert.badgeImg}
                    alt={cert.title}
                    width={320}
                    height={320}
                    className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-blue-600 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {cert.description}
                </p>

                <ul className="space-y-1.5">
                  {cert.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
