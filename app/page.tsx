import { ParticleBackground } from '@/components/particle-background'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { EducationSection } from '@/components/education-section'
import { ProjectsSection } from '@/components/projects-section'
import { GitHubStats } from '@/components/github-stats'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { BackToTop } from '@/components/back-to-top'

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated Particle Background */}
      <ParticleBackground />
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <GitHubStats />
        <ContactSection />
        <Footer />
      </div>
      
      {/* Back to Top Button */}
      <BackToTop />
    </main>
  )
}
