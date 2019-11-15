import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


export default function Advert() {
  const content =[
    {
      id: 1,
      advert: '30% Off Selected Dresses Shop Now!'
    },
    {
      id: 2,
      advert: 'FREE Click & Collect to 88 Phase Eight stores'
    },
    {
      id: 3,
      advert: 'Introduce your friends to Phase Eight'
    },
    {
      id: 4,
      advert: 'FREE Returns on all orders'
    }
  ] 
  return (
    <div style={{height: '20px', overflow: 'hidden'}}>
      <Slider
        duration='1800'
        autoplay='2200'
        infinite='true'
        previousButton=''
        nextButton=''
        style={{height: '20px', overflow: 'hidden'}}
      >
        {content.map(article => 
        <div key={article.id} style={{height: '20px', overflow: 'hidden'}}>
          <div style={{height: '20px',lineHeight: '1.5', overflow: 'hidden'}}>{article.advert}</div>
        </div>)}
      </Slider>
    </div>
  )
}



