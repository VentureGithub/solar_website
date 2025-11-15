import React from 'react'
import FaqsHeader from '../components/faqs/FaqsHeader'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FAQSection from '../components/faqs/FAQSection'
import FAQSection2 from '../components/faqs/FAQSection2'
import FAQSection3 from '../components/faqs/FAQSection3'
import FAQSection4 from '../components/faqs/FAQSection4'

function Faqs() {
  return (
    <>
    <Header/>
    <FaqsHeader/>
    <FAQSection/>
    <FAQSection2/>
    <FAQSection3/>
    <FAQSection4/>
    <Footer/>
   </>
  )
}

export default Faqs