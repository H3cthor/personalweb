
'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const contactData = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '427 21 93 840',
    href: 'tel:+524272193840'
  },
  {
    icon: Mail,
    label: 'Email Principal',
    value: 'hectorsalbe@hotmail.com',
    href: 'mailto:hectorsalbe@hotmail.com'
  },
  {
    icon: Mail,
    label: 'Email Institucional',
    value: 'hsaldanab@utsjr.edu.mx',
    href: 'mailto:hsaldanab@utsjr.edu.mx'
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'San Juan del Río, Querétaro',
    href: null
  }
]

export default function ContactInfo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">
        Información de Contacto
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contactData?.map?.((item, index) => {
          const IconComponent = item?.icon
          const content = (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className={`bg-white rounded-lg p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 ${
                item?.href ? 'cursor-pointer hover:border-blue-200' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 rounded-lg p-3 flex-shrink-0">
                  {IconComponent && <IconComponent className="w-6 h-6 text-blue-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500 mb-2">{item?.label || ''}</p>
                  <p className="text-slate-800 font-medium leading-relaxed">
                    {item?.value || ''}
                  </p>
                </div>
              </div>
            </motion.div>
          )

          return item?.href ? (
            <a key={index} href={item.href} className="block">
              {content}
            </a>
          ) : (
            content
          )
        })}
      </div>
    </motion.section>
  )
}
