import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


export default function Intro() {
  const content =[
    {
      id: 1,
      imageSrc: './images/header/header-one.jpg',
      description: 'First image header'
    },
    {
      id: 2,
      imageSrc: './images/header/header-two.jpg',
      description: 'Second image header'
    }
  ] 
  return (
    <div style={{height: '500px', overflow: 'hiden'}}>
      <Slider
        duration='1800'
        autoplay='2200'
        infinite='true'
        previousButton=''
        nextButton=''
        style={{height: '500px', overflow: 'hiden'}}
      >
        {content.map(article => 
        <div key={article.id} style={{height: '500px', overflow: 'hiden'}}><img src={article.imageSrc} style={{height: '500px', width: '100vw'}} alt={article.description} />
        </div>)}
      </Slider>
    </div>
  )
}



