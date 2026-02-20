import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Hero } from '@/pages/landing/Hero'
import { ExpertiseSection } from '@/pages/landing/ExpertiseSection'
import { InterventionSection } from '@/pages/landing/InterventionSection'
import { MethodologySection } from '@/pages/landing/MethodologySection'
import { ContactSection } from '@/pages/landing/ContactSection'
import { ServicePage } from '@/pages/ServicePage'
import { CoachingPage } from '@/pages/CoachingPage'
import { AboutPage } from '@/pages/AboutPage'

function LandingPage() {
  return (
    <>
      <Hero />
      <ExpertiseSection />
      <InterventionSection />
      <MethodologySection />
      <ContactSection />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
