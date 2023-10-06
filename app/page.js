import Image from 'next/image'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import FeaturesBenefitsSection from './components/FeaturesAndBenefits'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestmonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'

export default function Home() {
  return (
    <main className="min-h-screen">
     
      <section className=''>
        <Banner/>
        <AboutUs/>
        <FeaturesBenefitsSection/>
        <HowItWorksSection/>
        <TestimonialsSection/>
        <ContactSection/>
        <Footer/>
      </section>
    </main>
  )
}
