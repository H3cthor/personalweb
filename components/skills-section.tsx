'use client'

import { motion } from 'framer-motion'
import { Code2, Globe2, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react'

const skillGroups = [
  {
    category: 'Lenguajes & Frameworks',
    skills: ['Nextjs', 'Java', 'C#', 'JavaScript', 'Typescript', 'PHP', 'Python', 'Flutter', 'Dart']
  },
  {
    category: 'Desarrollo Web & APIs',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'WebServices', 'APIRest']
  },
  {
    category: 'Herramientas & DevOps',
    skills: ['Git', 'Github', 'CI/CD', 'Postman']
  },
  {
    category: 'Bases de Datos',
    skills: ['PostgreSQL', 'MySql', 'SQL Server', 'Firebase', 'MongoDB']
  },
  {
    category: 'Inteligencia Artificial & Automatización',
    skills: ['OpenAI', 'Gemini', 'Claude', 'LLM', 'N8N']
  },
  {
    category: 'Web3 & Blockchain',
    skills: ['Blockchain', 'smartcontracts', 'solidity']
  },
  {
    category: 'Diseño & Edición',
    skills: ['CorelDraw', 'Photoshop']
  }
]

const idiomas = ['Inglés']

const pasatiempos = ['Programación', 'Música', 'Basquetbol', 'Videojuegos', 'Tecnología', 'Lectura']

const aptitudes = ['Autodidacta', 'Trabajo en equipo', 'Facilidad de aprendizaje']

export default function SkillsSection() {
  return (
    <section id="competencias" className="py-8 scroll-mt-24">
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Competencias & Habilidades
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Tecnologías, lenguajes, herramientas, idiomas y pasatiempos
            </p>
          </div>
        </div>

        {/* Competencias Tech Grid */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Stack Tecnológico & Herramientas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-slate-50 rounded-xl p-4 border border-slate-200"
              >
                <h4 className="font-bold text-slate-900 text-xs mb-3 text-blue-700 pb-1 border-b border-slate-200">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-800 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional 3 Cards: Idiomas, Aptitudes, Pasatiempos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          {/* Idiomas */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs mb-3 text-blue-700 flex items-center gap-1.5">
              <Globe2 className="w-4 h-4 text-blue-600" />
              Idiomas
            </h4>
            <div className="flex flex-wrap gap-2">
              {idiomas.map((item, i) => (
                <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Aptitudes */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs mb-3 text-blue-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              Aptitudes
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {aptitudes.map((item, i) => (
                <span key={i} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Pasatiempos e Intereses */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-xs mb-3 text-blue-700 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-blue-600" />
              Pasatiempos e Intereses
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {pasatiempos.map((item, i) => (
                <span key={i} className="px-2.5 py-1 bg-white border border-slate-200 rounded-md text-xs font-semibold text-slate-800">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
