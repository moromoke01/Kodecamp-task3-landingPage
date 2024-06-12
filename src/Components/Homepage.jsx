import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Mission from './Mission'

const Homepage = () => {
  return (
    <div>
       {/* <h1>Architect Landing Page</h1> */}
       <HeroSection />
       <About />
       <Mission />
       <Project />
       <Contact />
    </div>
    
  )
}

export default Homepage
