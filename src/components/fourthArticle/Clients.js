import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


export default function Article() {
  const content = [
    {
      id: 1,
      imageSrc: './images/clients/client-one.jpg',
      description: 'First image client',
    },
    {
      id: 2,
      imageSrc: './images/clients/client-two.jpg',
      description: 'Second image client',
    },
    {
      id: 3,
      imageSrc: './images/clients/client-three.jpg',
      description: 'Third image client',    },
    {
      id: 4,
      imageSrc: './images/clients/client-four.jpg',
      description: 'First image client',
    },
  ] 

  const useStyles = makeStyles(theme => ({
    clientsSection: {
      backgroundColor: 'rgb(241,241,241)',
      textAlign: 'center',
      padding: '3em 0',
    },
    clientsHeader: {
      marginBottom: '3em',
      fontFamily: 'serif',
      lineHeight: '2',
      '& h2': {
        fontSize: '1.5em',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        fontWeight: '200',
      },
      '& p': {
        letterSpacing: '0.5px',
      }
    },
    clientsImages: {
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: '-10px',
      marginLeft: '-10px',
      justifyContent: 'center',
    },
    clientImage: {
      width: '200px',
      margin: '10px'
    }
  }))
  const classes = useStyles();
  return (
    <div className={classes.clientsSection}>
      <div className={classes.clientsHeader}>
        <h2>As worn by you</h2>
        <p>We love seeing how you style our collection, use the tag #PhaseEightStyle and share your looks with us.</p>
      </div>
      <div className={classes.clientsImages}>
        {content.map((item, i) =>
          <div
            key={i}
          >
            <img className={classes.clientImage} src={item.imageSrc} alt={item.description}/>
          </div>
        )}
      </div>
    </div>
  )
}