import React from 'react';
import './ProjectPage.css';

const Card = ({ src, title, body, buttonText }) => {
  return (
    <div className='projectCard'>
      <div className='card'>
        <img src={src} alt={title} />
        <div className='card-content'>
          <h2>{title}</h2>
          <p>{body}</p>
          <button>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
