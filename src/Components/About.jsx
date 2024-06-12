import React from 'react'
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.png';
import { IoIosArrowRoundForward } from "react-icons/io";


const About = () => {
  return (
    <div className='about'>
      <div className='image-grid'>
        <img src={about1} alt="about1" />
        <img src={about2} alt="about2" />
        <img src={about3} alt="about3" />
      </div>
      <div className='about-text'>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut laborum itaque commodi numquam. Distinctio, natus, eius est minima asperiores quis neque ad maiores id minus laudantium aut sunt eum provident!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, architecto. Facere, impedit fugit odio, incidunt necessitatibus repellendus ratione qui cupiditate quibusdam unde tempora! Provident tempore natus tempora recusandae, quas ratione!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, tempore reprehenderit impedit ut magni nemo maxime nihil debitis perspiciatis corporis quia esse, laborum earum unde itaque aliquam. Eaque, amet error?</p>
        <button>Read More  <IoIosArrowRoundForward /></button>
      </div>
    </div>
  )
}

export default About
