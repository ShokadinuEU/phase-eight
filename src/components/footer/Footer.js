import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


export default function Footer() {

  const content = [
    hereToHelp = {
      link_header: 'Here to Help',
      link_zero: 'Contact Us',
      link_one: 'Delivery & Collection',
      link_two: 'Returns',
      link_three: 'FAQs',
    },
    shopping = {
      link_header: 'Shopping',
      link_zero: 'Store Locator',
      link_one: 'Track Your Order',
      link_two: 'Size Guides',
      link_three: 'Gift Cards',
      link_four: 'Gift Packaging',
      link_five: 'Personal Styling',
      link_six: 'Refer a Friend',
    },
    aboutUs = {
      link_header: 'About Us',
      link_zero: 'Our Story',
      link_one: 'Corporate Responsibility',
      link_two: 'Careers',
      link_three: 'Affiliates',
      link_four: 'Reviews',
    },
    legal = {
      link_header: 'Legal',
      link_zero: 'Terms & Conditions',
      link_one: 'Competitions & Offers',
      link_two: 'Privacy Policy',
      link_three: 'Modern Slavery Statement',
      link_four: 'Cookies',
      link_five: 'Fraudulent Websites',
      link_six: 'Accessibility',
    },
  ]

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