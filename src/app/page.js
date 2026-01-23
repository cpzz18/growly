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
    <div className="min-h-screen bg-slate-950">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none opacity-20" />
      
      {/* Subtle glow effects */}
      <div className="fixed rounded-full pointer-events-none top-40 left-1/4 w-96 h-96 bg-cyan-500/5 blur-3xl" />
      <div className="fixed rounded-full pointer-events-none bottom-40 right-1/4 w-96 h-96 bg-blue-500/5 blur-3xl" />
      
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