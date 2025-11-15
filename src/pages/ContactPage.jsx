import React from 'react'
import ContactForm from '../components/contact/ContactForm'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ContactHeader from '../components/contact/ContactHeader'

const ContactPage = () => {
  return (
    <>
    <Header/>
    <ContactHeader/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default ContactPage