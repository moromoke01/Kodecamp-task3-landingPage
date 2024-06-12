import React from 'react'
import heroImage from '../assets/heroImage.png';
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import '../App.css'

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-text'>
        <h2><span style={projectLight}>Project</span> <br/> Lorum</h2>

        <div className='slider-btn'>
          <button><IoIosArrowRoundBack /></button>
          <button><IoIosArrowRoundForward /></button>
        </div>
        </div>
      <div className='hero-image'>
        <img src={heroImage} style={heroPic} alt="hero-image" />
        <button>View Project <IoIosArrowRoundForward /></button>
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

const projectLight = {
  fontWeight: '100',
  color: 'gray',
  textTransform: "uppercase"
}
export default HeroSection
