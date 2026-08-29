'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight, Check } from 'lucide-react'

const experienceList = [
  {
    period: 'oct 2024 - presente',
    role: 'Director de Sistemas de Información Digital',
    company: 'Presidencia Municipal, San Juan del Río, Qro.',
    highlights: [
      'Desarrollo e implementación de estrategias de Gobernanza de Datos, asegurando el uso seguro, eficiente y responsable de la información institucional.',
      'Liderazgo en proyectos de implementación de estándares internacionales ISO 20000, ISO 27001 e ISO 42001 para calidad de servicios TI, seguridad de la información y gestión de inteligencia artificial.',
      'Planeación e implementación de soluciones de Inteligencia Artificial (IA) aplicadas al sector gubernamental para optimizar procesos, automatizar servicios y fortalecer la transformación digital.',
      'Coordinación de procesos de transformación digital, simplificación y digitalización de trámites gubernamentales.',
      'Implementación institucional de firma electrónica mediante plataformas digitales para optimizar procesos administrativos.',
      'Administración, inventario y documentación técnica de infraestructura tecnológica: servidores, redes, firewalls, switches administrables y proveedores ISP.',
      'Planeación e implementación de soluciones de conectividad, incluyendo internet satelital y enlaces redundantes para continuidad operativa.',
      'Diseño de estrategias de centralización y optimización de infraestructura tecnológica distribuida.',
      'Mejora continua de sistemas internos de soporte técnico, control patrimonial y gestión operativa.',
      'Seguimiento e implementación de plataformas de identidad digital y expediente electrónico ciudadano.',
      'Elaboración de manuales, reportes técnicos, diagramas, indicadores y documentación estratégica para operación y mejora continua de sistemas de información.',
      'Dirección y coordinación de proyectos de modernización tecnológica en entornos gubernamentales.',
      'Gestión de iniciativas orientadas a fortalecer la ciberseguridad, continuidad operativa y eficiencia institucional.',
      'Integración de herramientas de automatización, analítica de datos e inteligencia artificial para mejorar la atención ciudadana y la eficiencia operativa del gobierno digital.'
    ]
  },
  {
    period: 'ago 2010 - presente',
    role: 'Profesor de asignatura en la división de Desarrollo de Software',
    company: 'Universidad Tecnológica de San Juan del Río, San Juan del Río, Qro.',
    subjects: {
      'Desarrollo de Software': [
        'Redes',
        'Programación Orientada a Objetos',
        'Aplicaciones Web',
        'Aplicaciones Web Orientado a Servicios',
        'Desarrollo Móvil Multiplataforma',
        'Principios para IoT',
        'Aplicaciones de IoT',
        'Cálculo Diferencial',
        'Matemáticas para Ingeniería I y II',
        'Experiencia de usuario',
        'Aplicaciones Web Progresivas',
        'Desarrollo para Dispositivos Inteligentes'
      ],
      'Mecatrónica': [
        'Probabilidad y estadística',
        'Lenguajes de programación',
        'Programación visual'
      ],
      'Construcción': [
        'Informática aplicada',
        'Probabilidad y Estadística'
      ]
    }
  },
  {
    period: 'jul 2022 - dic 2023',
    role: 'Desarrollador FullStack',
    company: 'MXComp, San Juan del Río, Qro.',
    highlights: [
      'Desarrollo web y móvil frontend y backend con React js, Next js, Prisma, Zod, TailWind y bases de datos PostgreSQL.'
    ]
  },
  {
    period: 'jul 2016 - ago 2017',
    role: 'Desarrollador',
    company: 'Preparatoria IPIC, San Juan del Río, Qro.',
    highlights: [
      'Creación de plataforma Web usando HTML5, CSS3, Bootstrap, JQuery, Javascript.',
      'Clases de Lenguaje de Programación.'
    ]
  },
  {
    period: 'feb 2010 - ago 2010',
    role: 'Administrador de Servidor Unix',
    company: 'IS1 Sistemas y Tecnología, Querétaro',
    highlights: [
      'Administración y mantenimiento de servidor HP bajo sistema operativo Unix.',
      'Creación de respaldos, cuentas de usuario y permisos.',
      'Configuración de dispositivos y soporte técnico.'
    ]
  },
  {
    period: 'jul 2009 - ene 2010',
    role: 'Programador analista',
    company: 'Universidad Tecnológica de San Juan del Río, San Juan del Río, Qro.',
    highlights: [
      'Desarrollo de aplicaciones Web con acceso a bases de datos para el sistema de control de calidad, utilizando tecnología Java, Javascript y JSP para control de: admisión de alumnos, inscripciones, creación de grupos, control escolar, planeación cuatrimestral, calificaciones, titulación.',
      'Administración de bases de datos SQL Server 2005.',
      'Creación de reportes utilizando iReport versión 2.0.3.'
    ]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-8 scroll-mt-24">
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Experiencia Laboral
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Trayectoria profesional en desarrollo, docencia y dirección tecnológica
            </p>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8">
          {experienceList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 hover:border-blue-500 transition-colors py-1 group"
            >
              {/* Bullet Node */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-slate-300 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all" />

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.role}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {item.period}
                </span>
              </div>

              <p className="text-sm font-semibold text-blue-600 mb-4">
                {item.company}
              </p>

              {/* Highlights List */}
              {item.highlights && (
                <ul className="space-y-2 mb-4">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Teaching Subjects */}
              {item.subjects && (
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Materias Impartidas:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {Object.entries(item.subjects).map(([cat, list], cIdx) => (
                      <div key={cIdx} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                        <h5 className="font-bold text-slate-900 text-xs mb-2 text-blue-700 pb-1 border-b border-slate-200">
                          {cat}
                        </h5>
                        <ul className="space-y-1">
                          {list.map((sub, sIdx) => (
                            <li key={sIdx} className="text-xs text-slate-600 flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-slate-400" />
                              <span>{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
