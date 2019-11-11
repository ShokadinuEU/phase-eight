import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import InputBase from '@material-ui/core/InputBase'


export default function Contact() {

  const useStyles = makeStyles(theme => ({
    contactSection: {
      marginTop: '3em',
      borderTop: '.0625rem solid #999',
      borderBottom: 'none',
      display: 'flex',
      width: '100%',
      padding: '1.5em 0',
      justifyContent: 'space-around',
      letterSpacing: '.125rem',
      fontSize: '18px',
      cursor: 'default',
      fontFamily: 'Lato,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
    },
    trackOrder: {
      flexDirection: 'column',
      display: 'block',
      textAlign: 'center',
      width: '30%',
      '& > p': {
        textTransform: 'uppercase',
        marginTop: '1rem',
      }
    },
    subscribe: {
      flexDirection: 'column',
      display: 'block',
      textAlign: 'center',
      width: '30%',
      '& > p': {
        textTransform: 'uppercase',
        marginBottom: '1rem',
      },
    },
    phoneCall: {
      flexDirection: 'column',
      display: 'block',
      textAlign: 'center',
      width: '30%',
      '& > p': {
        textTransform: 'uppercase',
        marginBottom: '1rem',
      }
    },
    textField: {
      borderBottom: '1px solid #ccc',
      display: 'inline-block',
      width: '85%',
    },
    input: {
      width: '94%',
    },
    iconInput: {
      fontSize: '1em',
      fontWeight: '900',
      '&:hover': {
        cursor: 'pointer',
      }
    },
    phone: {
      display: 'inline-flex',
      '& > p': {
        marginLeft: '1em',
      },
      '& span': {
        fontWeight: '900',
        cursor: 'text',
      },
    },
    iconPhone: {
      cursor: 'help',
    },
    trackOrderIcon: {
      fontSize: '1.7em'
    }
  }))
  const classes = useStyles();
  return (
    <div className={classes.contactSection}>
      <div className={classes.trackOrder}>
        <Icon className={classes.trackOrderIcon}>track_changes</Icon>
        <p>Track your order</p>
      </div>
      <div className={classes.subscribe}>
        <p>subscribe to our newsletter</p>
        <div className={classes.textField}>
          <InputBase
            className={classes.input}
            placeholder="Enter your email" 
          />
          <Icon className={classes.iconInput}>arrow_forward</Icon>
        </div>
      </div>
      <div className={classes.phoneCall}>
        <p>Can we help?</p>
        <div className={classes.phone}>
          <Icon className={classes.iconPhone} >phone_in_talk</Icon>
          <p>Call us on: <span>020 8877 4002</span></p>
        </div>
      </div>
    </div>
  )
}