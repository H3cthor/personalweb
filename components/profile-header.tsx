'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Globe,
  Linkedin,
  Github,
  Award,
  Heart,
  ExternalLink
} from 'lucide-react'

export default function ProfileHeader() {
  return (
    <section id="inicio" className="pt-6 pb-10 scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-800 shadow-xl"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Circular Frame Profile Image */}
          <div className="relative flex-shrink-0">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 border-2 border-blue-500 shadow-xl relative bg-slate-800">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Héctor Saldaña Benitez"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Core Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Héctor Saldaña Benitez
              </h1>
            </div>

            <h2 className="text-lg sm:text-xl text-blue-400 font-semibold mb-3">
              Ingeniero en Sistemas Computacionales
            </h2>

            <div className="inline-block bg-slate-800/90 text-slate-300 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg border border-slate-700">
              Software Developer | AI & Data Engineering | Web3 Builder & Blockchain
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
