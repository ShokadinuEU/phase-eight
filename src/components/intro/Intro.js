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
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
      },
    },
    sliderContent: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    sliderWrapper: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    introMobile: {
      [theme.breakpoints.down('sm')]: {
        height: '74vh',
        width: '100%',
        margin: '0.5em 0',
        position: 'relative',
        '& img': {
          width: '100%',
          height: '70vh'
        }
      },
    },
    introOverlay: {
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '75px',
        textTransform: 'capitalize',
        color: '#836938',
        fontFamily: 'serif',
        letterSpacing: '5px',
        userSelect: 'none',
        '& h4': {
          fontSize: '3.5em',
          paddingLeft: '0.4em',
          fontWeight: '300',
          lineHeight: '1.1'
        },
        '& p': {
          fontSize: '1.3em',
          padding: '1em',
          textDecoration: 'underline',
        }
      },
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
        className={classes.sliderWrapper}
      >
        {content.map((item, i) =>
          <div
            key={i}
            className={classes.sliderContent}
            style={{ background: `url('${item.imageSrc}') no-repeat center center`, backgroundSize:'100%', height:'70vh' }}
          >
          </div>
        )}
      </Slider>
      <div className={classes.introMobile}>
          <div className={classes.introMobilePicture}>
            <img src="./images/mobile/intro/intro-mobile.jpg" alt="Intro Mobile" />
          </div>
          <div className={classes.introOverlay}>
            <h4>
              State<br />
              Ment<br />
              Making <br />
              Style
            </h4>
            <p>Shop the new collection</p>
          </div>
      </div>
    </div>
  )
}