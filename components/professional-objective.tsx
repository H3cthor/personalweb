
'use client'

import { motion } from 'framer-motion'
import { Target, Code, Network, Database } from 'lucide-react'

const skills = [
  {
    icon: Code,
    title: 'Desarrollo de Software',
    description: 'Experiencia en múltiples lenguajes de programación'
  },
  {
    icon: Network,
    title: 'Redes y Sistemas',
    description: 'Especialización en redes de computadoras'
  },
  {
    icon: Database,
    title: 'Sistemas de Información',
    description: 'Administración y desarrollo de sistemas'
  }
]

export default function ProfessionalObjective() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="mb-12"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Objetivo Profesional
        </h2>
        <Target className="w-8 h-8 text-blue-600 mx-auto mb-6" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="bg-white rounded-lg p-8 shadow-sm border border-slate-100 mb-10 max-w-4xl mx-auto"
      >
        <p className="text-lg text-slate-700 leading-relaxed text-center">
          Ocupar una posición de liderazgo en una empresa en la que pueda aplicar las habilidades y 
          conocimientos adquiridos para desarrollar y administrar sistemas de información, redes de 
          computadoras y sistemas distribuidos de vanguardia, utilizando las tecnologías adecuadas 
          para facilitar la toma de decisiones de la misma.
        </p>
      </motion.div>

      {/* Skills Overview */}
      <h3 className="text-xl font-semibold text-slate-800 mb-6 text-center">
        Áreas de Especialización
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {skills?.map?.((skill, index) => {
          const IconComponent = skill?.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {IconComponent && <IconComponent className="w-8 h-8 text-blue-600" />}
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">
                {skill?.title || ''}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {skill?.description || ''}
              </p>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}
