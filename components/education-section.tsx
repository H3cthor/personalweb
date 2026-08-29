'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar } from 'lucide-react'

const educationList = [
  {
    period: 'oct 2025 - presente',
    title: 'Maestría en Inteligencia Artificial',
    institution: 'Universidad Virtual del Estado de Guanajuato',
    status: 'En curso',
    details: 'Machine learning, deep learning, IA'
  },
  {
    period: 'feb 2011 - dic 2012',
    title: 'Maestría en Sistemas de Información, Gestión y Tecnología',
    institution: 'Universidad Autónoma de Querétaro, Querétaro',
    status: 'Título en trámite',
    details: 'Gestión de tecnologías de la información e infraestructura de sistemas'
  },
  {
    period: 'ene 1997 - jul 2003',
    title: 'Ingeniería en Sistemas Computacionales',
    institution: 'Instituto Tecnológico de San Juan del Río, San Juan del Río, Querétaro',
    status: 'Graduado',
    details: 'Especialidad en Redes y Sistemas Distribuidos'
  }
]

export default function EducationSection() {
  return (
    <section id="formacion" className="py-8 scroll-mt-24">
      {/* Defined Section Box */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-slate-100">
          <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Formación Académica
            </h2>
            <p className="text-sm sm:text-base text-slate-500">
              Grados universitarios y posgrados de especialización
            </p>
          </div>
        </div>

        {/* Timeline / Items */}
        <div className="space-y-8">
          {educationList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 hover:border-blue-500 transition-colors py-1 group"
            >
              {/* Bullet Node */}
              <div className="absolute -left-[9px] top-2.5 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-md">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {item.period}
                </span>
              </div>

              <p className="text-base font-semibold text-blue-600 mb-1.5">
                {item.institution}
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-2.5">
                {item.details}
              </p>

              {item.status && (
                <span className="inline-block text-xs sm:text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded">
                  {item.status}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
