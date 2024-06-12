import React from 'react'
import contactImage from '../assets/contact.png';
import { IoIosArrowRoundForward } from "react-icons/io";


const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-form'>
        <p>Contact Form</p>
            <form>
               <input type="text" name="name" id='name' placeholder='Enter your full name'/>
                <input type="text" name="email" id='email' placeholder='Enter your email' />
                <input type="text" name="phone" id='phone' placeholder='Phone Number' />
                <input type="text"  placeholder='Interested in'/>
                <textarea name="message" id="message" rows={6} placeholder='Type your message'>

                </textarea><br/>

                <button>Send Message <IoIosArrowRoundForward /></button>
            </form>
      </div>
      <div className='contact-image'>
        <img src={contactImage} alt="contactImage" />
      </div>
    </div>
  )
}

export default Contact
