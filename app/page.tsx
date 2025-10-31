
import ProfileHeader from '@/components/profile-header'
import ContactInfo from '@/components/contact-info'
import ProfessionalObjective from '@/components/professional-objective'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="container mx-auto max-w-4xl px-6 py-12">
        {/* Header Section */}
        <ProfileHeader />
        
        {/* Contact Information */}
        <ContactInfo />
        
        {/* Professional Objective */}
        <ProfessionalObjective />
        
        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <div className="text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Héctor Saldaña Benítez. Todos los derechos reservados.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}
