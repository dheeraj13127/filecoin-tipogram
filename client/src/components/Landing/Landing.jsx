import React from 'react'
import '../../styles/LandingStyles/Landing.scss'
import {LandingNavbar,HeroSection,TechStack,FeaturesSection,CategorizedImages} from './index'

function Landing() {

  return (
    <div className='landingContainer'>
      <LandingNavbar/>
      <HeroSection/>
      <TechStack/>
      <FeaturesSection/>
      <CategorizedImages/>
    </div>
  )
}

export default Landing