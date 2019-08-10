import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


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
          <div
            key={i}
            className={classes.season}
          >
            <img className={classes.seasonImage} src={item.imageSrc} alt={item.description} />
            <div className={classes.seasonsText}>
              <h2>{item.header}</h2>
              <p>{item.subHeader}</p>
              <span className={classes.upperCaseLink}>{item.link}</span>
            </div>
          </div>
        )}
    </div>
  )
}