import React from 'react'
import "./ProjectPage.css"

const ProjectPage = ({key,img, title, body, buttonText}) => {
  return (
    <div className='projectCard'>
      <p>Our <b>Projects</b></p>
      <div className='card'>
        <img src={img} alt={`Project-Image${key}`} />

        <div className='card-content'>
            <h2>{title}</h2>
            <p>{body}</p>
            <button>{buttonText}</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
