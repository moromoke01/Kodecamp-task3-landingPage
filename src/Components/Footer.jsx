import React from 'react';
import logo from '../assets/white-logo.png';
import './styling/footer.css';
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (

    <div className='footer'>
    <div className='footer-box'>

   <div className='footer-group'>
    <img src={logo} alt="brand-logo" />
  </div>
       <div className='footer-group'>
        <ul>
          <p>Information</p>
            <li>Main</li>
            <li>Gallery</li>
            <li>Projects</li>
            <li>Certifications</li>
            <li>Contacts</li>
        </ul>
       </div>

       <div className='footer-group'>
        <ul>
        <p>Contacts</p>
            <li>1234 sample street austin Texas 78681</li>
            <li>512.568.7889</li>
            <li>sampleemail@gmail.com</li>
        </ul>
       </div>

       <div className='footer-group social-media'>
        <p>Social Media</p>

        <div className="social-media-icons">
        <ImFacebook />
        <FaTwitter />
        <FaLinkedin />
        <FaPinterestP />
        </div>
       </div>
</div>
       <hr style={hrStyle} />
       <p>&copy; 2024 All right reserved</p>
       
    </div>
  )
}

const hrStyle = {
  width:'100%',
  border: '0',
  height: '1px',
  background: '#333',
  backgroundImage: 'linear-gradient(to right, #ccc, #333, #ccc)',
  margin: '20px 0',
};


export default Footer
