import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
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
      </main>
    </div>
  )
}
