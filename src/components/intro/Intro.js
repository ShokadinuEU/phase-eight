import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Icon from '@material-ui/core/Icon';


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
        paddingTop: '7em',
        height: '100%',
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
        height: '70vh',
        width: '100%',
        margin: '0.5em 0',
        position: 'relative',
        display: 'inline-table',
        '& img': {
          width: '100%',
          height: '69vh'
        }
      },
    },
    introOverlay: {
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        top: '105px',
        right: '1px',
        textTransform: 'capitalize',
        fontFamily: 'sans-serif',
        width: '54%',
        userSelect: 'none',
        textAlign: 'center',
        '& h4': {
          fontSize: '1.5em',
          paddingLeft: '0.4em',
          fontWeight: '300',
          lineHeight: '1',
          display: "inline-table",
        },
        '& span': {
          textAlign: 'center',
          color: '#bf3723',
          fontSize: '2.5em',
        }
        ,
        '& p': {
          fontSize: '1.15em',
          padding: '1em 0',
        },
        '& button': {
          fontSize: '1.15em',
          textTransform: 'uppercase',
          backgroundColor: '#bf3723',
          color: 'white',
          padding: '0.7em 1.2em',
          border: '0',
        }
      },
    },
    chatFooter: {
      [theme.breakpoints.down('sm')]: {
        '& p': {
          position: 'absolute',
          fontSize: '0.7em',
          bottom: '2em',
          right: '20%'
        }
    }},
    chatBox: {
      [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        fontSize: '0.7em',
        bottom: '3.5em',
        right: '-23px',
        transform: 'rotate(-90deg)',
        color: 'white',
        backgroundColor: 'black',
        padding: '0.9em',
        fontFamily: 'sans-serif',
        '& span': {
          fontSize: '1.5em',
          padding: '0',
          margin: '0'
        }
    }},
    iconChat: {
      [theme.breakpoints.down('sm')]: {
        // transform: 'rotate(-90deg)',
    }},
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
            <h4> DRESS EVENT </h4><br /><br />
              <span>30%</span><br />
              <span>OFF</span>
              <p>SELECTED DRESSES</p>
            <button>Shop now</button>
          </div>
          <div className={classes.chatFooter}>
            <p>T&C's Apply</p>
          </div>
          <div className={classes.chatBox}>
            <Icon className={classes.iconChat}>messageOutlined</Icon>
            <span>
              &nbsp; CHAT
            </span>
          </div>
      </div>
    </div>
  )
}