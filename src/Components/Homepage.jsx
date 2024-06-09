import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Project from './Project'
import Contact from './Contact'

const Homepage = () => {
  return (
    <div>
       {/* <h1>Architect Landing Page</h1> */}
       <HeroSection />
       <About />
       <Project />
       <Contact />
    </div>
    
  )
}

export default Homepage
