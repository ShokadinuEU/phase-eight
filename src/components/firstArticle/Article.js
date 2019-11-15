import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


export default function Article() {
  const content = [
    {
      id: 1,
      imageSrc: './images/sections/section-one.jpg',
      description: 'First image section',
      text: 'Dress The Part',
      subText: 'Shop the dresses'
    },
    {
      id: 2,
      imageSrc: './images/sections/section-two.jpg',
      description: 'Second image section',
      text: 'Discover Studio 8',
      subText: 'Shop plus size'
    },
    {
      id: 3,
      imageSrc: './images/sections/section-three.jpg',
      description: 'Third image section',
      text: 'Most Wanted',
      subText: 'New jumpsuits'
    }
  ] 

  const useStyles = makeStyles(theme => ({
    articleSection: {
      height: '85vh', 
      width: '96vw',
      display:'flex',
      margin:'2em 1em',
      marginBottom: '0.1em',
      [theme.breakpoints.down('sm')]: {
        width: '98%',
        height: '85vh',
        display: 'inline-table',
        margin: '0.2em',
        display: 'none',
      },
    },
    articleWrapper: {
      position: 'relative',
      width:'33%',
      margin: '0.5em',
      backgroundSize:'100%', 
      height:'96%',
      overflow: 'hidden',
      [theme.breakpoints.down('sm')]: {
        width: 'auto',
        height: '82%',
        backgroundSize: "100%"
      },
    },
    textFirstArticle: {
      position: 'absolute',
      bottom: '3em',
      margin: '0 auto',
      width: '100%',
      textAlign: 'center',
      textTransform: 'uppercase',
      overflow: 'hidden',
      '& > p': {
        fontSize: '1.8em',
        color: 'white',
        marginBottom: '0.5em'
      },
      '& > span': {
        fontSize: '1em',
        color: 'white',
        textDecoration: 'underline',
        '&:hover': {
          cursor: 'pointer',
          textDecoration: 'none'
        }
      },
      [theme.breakpoints.down('sm')]: {
        bottom: '2em'
      },
    },
    mobileArticleSection: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      },
      position: 'relative',
      '& img': {
        width: '100%',
        height: '450px',
        margin: '1em 0',
      },
    },
    mobileArticleSectionText: {
      position: 'absolute',
      top: '320px',
      left: '120px',
      color: '#fff',
      '& h4': {
        fontSize: '1.6em',
        fontWeight: '100',
        lineHeight: '1.1',
        '& span': {
          fontStyle: 'italic'
        }
      },
      '& p': {
        marginTop: '1.5em',
        textAlign: 'center',
        textDecoration: 'underline',
        textTransform: 'uppercase',
        fontSize: '1.06em'
      }
    }
  }))
  const classes = useStyles();
  return (
    <div>
      <div className={classes.articleSection} data-aos="fade-up">
        {content.map((item, i) =>
          <div
            key={i}
            style={{ background: `url('${item.imageSrc}') no-repeat center center`, backgroundSize:'100%'}}
            className={classes.articleWrapper} data-aos="fade-up"
          >
            <div className={classes.textFirstArticle} data-aos="fade-up">
              <p data-aos="fade-up">{item.text}</p>
              <span data-aos="fade-down">{item.subText}</span>
            </div>
          </div>
        )}
      </div>
      <div className={classes.mobileArticleSection} data-aos="fade-up">
          <img src="./images/sections/knitwear.jpg" alt="knit wear" />
          <div className={classes.mobileArticleSectionText}>
            <h4>
              Layers you're <br />
              <span>going to love.</span>
            </h4>
            <p>Shop knitwear</p>
          </div>
      </div>
    </div>
  )
}