import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProjectHeader from '../components/project/ProjectHeader'
import SolarProjects from '../components/project/SolarProjects'
import SolarProjects2 from '../components/project/SolarProjects2'
import SolarProjects3 from '../components/project/SolarProjects3'
import SolarProjects4 from '../components/project/SolarProjects4'

function ProjectPage() {
  return (
    <>
    <Header/>
    <ProjectHeader/>
    <SolarProjects/>
    <SolarProjects2/>
    <SolarProjects3/>
    <SolarProjects4/>
    <SolarProjects2/>
    <Footer/>
    </>
  )
}

export default ProjectPage