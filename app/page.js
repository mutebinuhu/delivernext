"use client";
import {useState} from "react";
import Image from 'next/image'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import FeaturesBenefitsSection from './components/FeaturesAndBenefits'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestmonialsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import AboutUs from './components/AboutUs'
import { Provider } from 'react-redux';
import store from '../redux/store'
import Nav from './components/Nav';


export default function Home() {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };
  return (
    <Provider store={store}>
   
      <main className="min-h-screen">

        <section className=''>
          <Banner />
          <AboutUs />
          <FeaturesBenefitsSection />
          <HowItWorksSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </section>
      </main>
    </Provider>
  
  )
}
