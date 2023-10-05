import Image from 'next/image'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import FeaturesBenefitsSection from './components/FeaturesAndBenefits'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestmonialsSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar/>
      <section className=''>
        <Banner/>
        <FeaturesBenefitsSection/>
        <HowItWorksSection/>
        <TestimonialsSection/>

      </section>
    </main>
  )
}
