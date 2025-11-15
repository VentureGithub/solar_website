import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/home/Home'
import WhySolar from '../components/home/WhySolar'
import HeroSection from '../components/home/HeroSection'
import Count from '../components/home/Count'
import ServicesSection from '../components/home/ServicesSection'
import Services from '../components/home/Services'
import SocialIcons from '../components/SocialIcons'

function HomePage() {
  return (
    <>
    <SocialIcons/>
    <Header/>
    <Home/>
    <WhySolar/>
    <Count/>
    <Services/>
    <ServicesSection/>
    <HeroSection/>
    <Footer/>
    </>
  )
}

export default HomePage