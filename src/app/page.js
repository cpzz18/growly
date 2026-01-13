import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Benefits from '@/components/sections/Benefits'
import HowItWorks from '@/components/sections/HowItWorks'
import Packages from '@/components/sections/Packages'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950 overflow-x-hidden">
      {/* Grid Background */}
      <div
        className="
          fixed inset-0
          grid-background
          pointer-events-none
          opacity-20
          [mask-image:radial-gradient(ellipse_60\%_50\%_at_50\%_0\%,#000_70\%,transparent_110\%)]
        "
      />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Benefits />
        <HowItWorks />
        <Packages />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
