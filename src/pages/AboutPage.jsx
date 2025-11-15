import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import AboutHeader from '../components/about/AboutHeader'
import OurMission from '../components/about/OurMission'
import OurVision from '../components/about/OurVision'
import AboutUs from '../components/about/AboutUs'

function AboutPage() {
  return (
    <>
    <Header/>
    <AboutHeader/>
    <AboutUs/>
    <OurMission/>
    <OurVision/>
    <Footer/>
    </>
  )
}

export default AboutPage