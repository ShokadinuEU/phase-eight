import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
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
    },
    {
      id: 3,
      imageSrc: './images/header/header-three.jpg',
      description: 'Third image header',
      text: 'New Season',
      subTextOne: 'Florals',
      subTextTwo: 'Your Exclusive AW19 Preview is Here',
      subTextThree: 'Shop our new styles'
    }
  ] 

  const useStyles = makeStyles(theme => ({
    sliderHeader: {
      height: '70vh', 
      width: '100vw', 
      overflow: 'hidden'
    },
  }))

  const classes = useStyles();
  return (
    <div className={classes.sliderHeader}>
      <Slider
        infinite='true'
        duration='2200'
        autoplay='2500'
        previousButton=''
        nextButton=''
        className="slider-wrapper"
      >
        {content.map((item, i) =>
          <div
            key={i}
            className="slider-content"
            style={{ background: `url('${item.imageSrc}') no-repeat center center`, backgroundSize:'100%', height:'70vh' }}
          >
          </div>
        )}
      </Slider>
    </div>
  )
}