import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


export default function Footer() {

  const useStyles = makeStyles(theme => ({
    footerMain: {
      backgroundColor: '#f3f3f3',
      color: '#000',
      fontFamily: 'Lato,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
      fontSize: '.875rem',
      fontWeight: '400',
      lineHeight: '1.4',
      letterSpacing: '.04em',
      '-webkit-font-smoothing': 'antialiased',
    },
    footerContainer: {
      width: '100%',
      paddingRight: '10px',
      paddingLeft: '10px',
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    footerContent: {
      display: 'flex',
      flexWrap: 'wrap',
      marginRight: '-10px',
      marginLeft: '-10px',
    }    
  }))
  const classes = useStyles();
  return (
    <div className={classes.footerMain}>
      <div className={classes.footerContainer}>
        <div className={classes.footerContent}>
        
        </div>
      </div>
    </div>
  )
}