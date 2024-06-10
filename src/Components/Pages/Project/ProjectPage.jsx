import React from 'react';
import Card from './Card';
import image1 from '../../../assets/ProjectPagepic1.png';
import image2 from '../../../assets/ProjectPagePic2.png';
import image3 from '../../../assets/ProjectPagePic3.png';

const ProjectPage = () => {
  const CardData = [
    {
      src: image1,
      title: 'Sample Project',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, illo voluptas dicta soluta dolores quod praesentium consequuntur id rem, omnis sapiente magnam iure, blanditiis odio quidem eum ducimus voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, illo voluptas dicta soluta dolores quod praesentium consequuntur id rem, omnis sapiente magnam iure, blanditiis odio quidem eum ducimus voluptatem?',
      buttonText: 'View More'
    },
    {
      src: image2,
      title: 'Sample Project 2',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, illo voluptas dicta soluta dolores quod praesentium consequuntur id rem, omnis sapiente magnam iure, blanditiis odio quidem eum ducimus voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, illo voluptas dicta soluta dolores quod praesentium consequuntur id rem, omnis sapiente magnam iure, blanditiis odio quidem eum ducimus voluptatem?',
      buttonText: 'View More'
    },
    {
      src: image3,
      title: 'Sample Project 3',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, illo voluptas dicta soluta dolores quod praesentium consequuntur id rem, omnis sapiente magnam iure, blanditiis odio quidem eum ducimus voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, illo voluptas dicta soluta dolores quod praesentium consequuntur id rem, omnis sapiente magnam iure, blanditiis odio quidem eum ducimus voluptatem?',
      buttonText: 'View More'
    }
  ];

  return (
    <div>
      <p style={ProjectHeadline}>
        Our <br />
        <b>Projects</b>
      </p>
      {CardData.map((card, index) => (
        <Card
          key={index}
          src={card.src}
          title={card.title}
          body={card.body}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

const ProjectHeadline = {
  fontSize: '40px',
  textAlign: 'left',
  marginBottom: '30px',
  lineHeight: '1em',
  color:'#000'
};

export default ProjectPage;
