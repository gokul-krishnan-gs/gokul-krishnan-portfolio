import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import ProjectSection from '../components/ProjectSection'
import SkillsSection from '../components/SkillsSection'
import StarBackgound from '../components/StarBackgound'
import ThemeToggle from '../components/ThemeToggle'
export default function Home() {
  return (
    <div 
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
    >
      <ThemeToggle />
      <StarBackgound />
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
