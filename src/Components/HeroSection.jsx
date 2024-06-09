import React from 'react'
import heroImage from '../assets/heroImage.png';
import '../App.css'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h2>PROJECT LORUM</h2>
        </div>
      <div className='hero-image'>
        <img src={heroImage} style={heroPic} alt="hero-image" />
      </div>
    </div>
  )
}

const heroPic = {
    maxWidth: '100%',
    maxHeight: '700px',
    objectFit: 'cover',
    margin: '0 auto',
    display: 'block'
} 
export default HeroSection
