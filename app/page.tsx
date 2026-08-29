import Navbar from '@/components/navbar'
import ProfileHeader from '@/components/profile-header'
import EducationSection from '@/components/education-section'
import ExperienceSection from '@/components/experience-section'
import SkillsSection from '@/components/skills-section'
import CertificationsSection from '@/components/certifications-section'
import ContactInfo from '@/components/contact-info'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pb-16">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Formación Académica */}
        <EducationSection />

        {/* Experiencia Laboral */}
        <ExperienceSection />

        {/* Competencias, Idiomas y Pasatiempos */}
        <SkillsSection />

        {/* Certificaciones */}
        <CertificationsSection />

        {/* Información de Contacto */}
        <ContactInfo />

        {/* Footer */}
        <footer className="pt-8 border-t border-slate-200 text-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-xs text-slate-400 mt-2">
              © {new Date().getFullYear()} Todos los derechos reservados. San Juan del Río, Querétaro, México
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}


