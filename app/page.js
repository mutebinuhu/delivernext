import Image from 'next/image'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import FeaturesBenefitsSection from './components/FeaturesAndBenefits'

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar/>
      <section className=''>
        <Banner/>
        <FeaturesBenefitsSection/>

      </section>
    </main>
  )
}
