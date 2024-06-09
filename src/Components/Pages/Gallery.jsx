import React from 'react'
import './PhotoGallery.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';
import image8 from '../../assets/image8.png';
import image9 from '../../assets/image9.png';
import image10 from '../../assets/image7.png';



const Gallery = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7,image8, image9, image10];

    return (
      <div className='gallery'> 
        <p><span className='lighter-title'>Photo</span><br/> <b>Gallery</b></p>
        <div className='photo-gallery'>
         {images.map((image, index)=> (
          <div className='photo-item' key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} />
          </div>
         ))}
      </div>
      </div>
    );
}

export default Gallery
