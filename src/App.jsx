// import React from 'react'
// import './App.css'

// function App() {

//   return (
//     <>
//       <h1 class="text-3xl text-blue-500 font-bold underline">
//         Hello world!
//       </h1>
//     </>
//   )
// }

// export default App

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ScrollToTop from './components/ScrollToTop'
import Faqs from './pages/Faqs'
import ContactPage from './pages/ContactPage'
import Services from './pages/Services'
import ProjectPage from './pages/ProjectPage'
import Loader from './components/Loader';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Loader disappears after 2 seconds
  }, []);

  return (
    <>
     <ScrollToTop />
      {loading ? <Loader /> : 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/products-&-Services" element={<Services />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
      }
    </>
  )
}

export default App