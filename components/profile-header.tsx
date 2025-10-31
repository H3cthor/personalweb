
'use client'

import { motion } from 'framer-motion'
import { User, GraduationCap } from 'lucide-react'

export default function ProfileHeader() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      {/* Avatar placeholder with icon */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-32 h-32 mx-auto mb-8 bg-blue-100 rounded-full flex items-center justify-center shadow-lg"
      >
        <User className="w-16 h-16 text-blue-600" />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
      >
        Héctor Saldaña Benítez
      </motion.h1>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <GraduationCap className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl md:text-2xl text-slate-600 font-medium">
          Ingeniero en Sistemas Computacionales
        </h2>
      </motion.div>

      {/* Professional details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">Edad</p>
          <p className="text-slate-700 font-medium">48 años</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500 mb-1">Cédula Profesional</p>
          <p className="text-slate-700 font-medium">5169918</p>
        </div>
      </motion.div>
    </motion.section>
  )
}
