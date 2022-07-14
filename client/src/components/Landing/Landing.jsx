import React from 'react'
import '../../styles/LandingStyles/Landing.scss'
import {LandingNavbar,HeroSection,TechStack,FeaturesSection,CategorizedImages,LandingFooter} from './index'

function Landing() {

  return (
    <>
    <div className='landingContainer'>
      <LandingNavbar/>
      <HeroSection/>
      <TechStack/>
      <FeaturesSection/>
      <CategorizedImages/>
    
    </div>
    <div className="landingContainerFooter">
    <LandingFooter/>
    </div>
    </>
  )
}

export default Landing