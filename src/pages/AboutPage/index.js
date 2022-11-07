import React from 'react'
import AboutUs from './About-us/AboutUs'
import HeroSection from './Hero-Section/HeroSection'
import Features from './Feature-section/Features'
import Footer from './Footer/Footer'
import Header from '../../components/Header/Header'

const index = () => {
  return (
    <div>
        <Header />
        <HeroSection />
        <AboutUs />
        <Features />
        <Footer />
    </div>
  )
}

export default index