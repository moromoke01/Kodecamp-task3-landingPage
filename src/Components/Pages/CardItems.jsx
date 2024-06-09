import React from 'react'
import ProjectPage from './ProjectPage'


const CardItems = () => {
    const CardData = [
        {
            img: '../../assets/image1.png',
            title:'Sample Project',
            body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, illo voluptas dicta soluta dolores quod praesentium consequuntur id rem, omnis sapiente magnam iure, blanditiis odio quidem eum ducimus voluptatem?',
            buttonText:' View More'
        },
        {
            img: '../../assets/image2.png',
            title:'Sample Project 2',
            body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, illo voluptas dicta soluta dolores quod praesentium consequuntur id rem, omnis sapiente magnam iure, blanditiis odio quidem eum ducimus voluptatem?',
            buttonText:' View More'
        },
        {
            img: '../../assets/image3.png',
            title:'Sample Project 3',
            body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorem, illo voluptas dicta soluta dolores quod praesentium consequuntur id rem, omnis sapiente magnam iure, blanditiis odio quidem eum ducimus voluptatem?',
            buttonText:' View More'
        }, 
    ]
  return (
    <div>
      {CardData.map((card, index)=>(
        <ProjectPage 
        key={index}
        img={card.img}
        title={card.title}
        body={card.body}
        buttonText={card.buttonText}
        />
      ))}
    </div>
  )
}

export default CardItems
