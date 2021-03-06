import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


export default function Article() {
  const content = [
    {
      id: 1,
      imageSrc: './images/impressions/impression-one.jpg',
      description: 'First image impression',
    },
    {
      id: 2,
      imageSrc: './images/impressions/impression-two.jpg',
      description: 'Second image impression',
    },
    {
      id: 3,
      imageSrc: './images/impressions/impression-three.jpg',
      description: 'Third image impression',    },
    {
      id: 4,
      imageSrc: './images/impressions/impression-four.jpg',
      description: 'First image impression',
    },
    {
      id: 5,
      imageSrc: './images/impressions/impression-five.jpg',
      description: 'Second image impression',
    },
    {
      id: 6,
      imageSrc: './images/impressions/impression-six.jpg',
      description: 'Third image impression',  
    },
  ] 

  const mContent = [
    {
      id: 1,
      imageSrc: './images/arrivals/m-arrivals.jpg',
      description: 'Arrivals',
    },
    {
      id: 2,
      imageSrc: './images/arrivals/m-coat.jpg',
      description: 'Coat',
    },
    {
      id: 3,
      imageSrc: './images/arrivals/m-dress.jpg',
      description: 'Dress',
    },
    {
      id: 4,
      imageSrc: './images/arrivals/m-top.jpg',
      description: 'Top',
    },
  ]

  const useStyles = makeStyles(theme => ({
    articleSection: {
      height: '85vh', 
      width: '100vw',
      margin:'2em 0',
      backgroundColor: 'rgb(241,241,241)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    articleWrapper: {
      position: 'relative',
      width: '15vw',
      display: 'block',
    },
    articleHeader: {
      textAlign: 'center',
      '& h4': {
        fontSize: '1.5em',
        fontWeight: '500',
        textTransform: 'uppercase',
        marginTop: '2em',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'inline-table',
        marginTop: '-1em'
      },
    },
    impressionsItems: {
      display: 'flex',
      flexDirection: 'row',
      width: '87%',
      height: '65vh',
      margin: '0 auto',
    },
    impressionsGet: {
      textTransform: 'uppercase',
      textDecoration: 'underline',
      fontSize: '1em',
      marginBottom: '2em',
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'none'
      }
    },
    mArrivalsContent: {
      display: 'none',
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flex: '0 0 50%',
        maxWidth: '50%',
        position: 'relative',
        height: '50vh',
        float: 'left',
      },
    },
  }))

  const classes = useStyles();
  
  return (
    <div>
      <div className={classes.articleSection}>
        <div className={classes.articleHeader}>
          <h4>Flora Impressions Collection</h4>
        </div><br />
        <div className={classes.impressionsItems}>
          {content.map((item, i) =>
            <div
              key={i}
              style={{ background: `url('${item.imageSrc}') no-repeat center center`, backgroundSize:'100%', height:'96%', width:'33%', margin: '0.5em' }}
              className={classes.articleWrapper}
            >
            </div>
          )}
        </div><br />
        <span className={classes.impressionsGet}>Shop the edit</span>
      </div>
      <div className={classes.mArrivalsMain} data-aos="fade-up">
          {
            mContent.map(e => (
              <div key={e.id} className={classes.mArrivalsContent}>
                <img src={e.imageSrc} alt={e.description} />
              </div>
            ))
          }
      </div>
    </div>
  )
}