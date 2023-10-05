import Image from 'next/image'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import FeaturesBenefitsSection from './components/FeaturesAndBenefits'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestmonialsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar/>
      <section className=''>
        <Banner/>
        <FeaturesBenefitsSection/>
        <HowItWorksSection/>
        <TestimonialsSection/>
        <ContactSection/>

      </section>
    </main>
  )
}
