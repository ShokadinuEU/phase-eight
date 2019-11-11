import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


export default function Article() {
  const content = [
    {
      id: 1,
      header: 'the holiday shop',
      subHeader: 'Styles so good you\'ll wear them long after you get back.',
      link: 'see the styles',
      imageSrc: './images/seasons/season-one.jpg',
      description: 'First image season',
    },
    {
      id: 2,
      header: `premium collection 8`,
      subHeader: 'Evening dresses made for your biggest celebrations',
      link: 'discover more',
      imageSrc: './images/seasons/season-two.jpg',
      description: 'Second image season',
    },
  ] 

  const useStyles = makeStyles(theme => ({
    seasonsWrapper: {
      margin: '1em',
      display: 'flex',
      height: '600px',
      maxWidth: '100%',
    },
    season: {
      // color: 'white',  
      width: 'auto',
      height: '570px',
      position: 'relative',
      overflow: 'hidden',
      zIndex: '1',
      '&:first-child': {
        width: '42%',
      },
      '&:last-child': {
        width: '58%',
        '& img': {
          width: '100%'
        }
      }
    },
    seasonImage: {
      height: '570px',
      width: '96%',
      position: 'absolute',
      zIndex: '5'
    },
    seasonsText: {
      position: 'absolute',
      zIndex: '10',
      color: 'white',
      left: '7%',
      bottom: '11%',
      cursor: 'default',
      '& h2': {
        width:'75%',
        fontSize: '3rem',
        textTransform: 'uppercase',
        overflow: 'hidden',
        lineHeight: '0.8',
      },
      '& p': {
        margin: '2em 0',
      },
      '&:first-child': {
      },
      '&:last-child': {
      }
    },
    upperCaseLink : {
      textTransform: 'uppercase',
      textDecoration: 'underline',
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'none'
      }
    },
  }))
  const classes = useStyles();
  return (
    <div className={classes.seasonsWrapper}>
      {content.map((item, i) =>
          <div data-aos="zoom-in"
            key={i}
            className={classes.season}
          >
            <img className={classes.seasonImage} src={item.imageSrc} alt={item.description} />
            <div className={classes.seasonsText}>
              <h2 data-aos="zoom-out-down">{item.header}</h2>
              <p data-aos="fade-left">{item.subHeader}</p>
              <span data-aos="fade-right" className={classes.upperCaseLink}>{item.link}</span>
            </div>
          </div>
        )}
    </div>
  )
}