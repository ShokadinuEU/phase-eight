import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'


export default function Footer() {

  const content = [
    {
      link_header: 'Here to Help',
      link_zero: 'Contact Us',
      link_one: 'Delivery & Collection',
      link_two: 'Returns',
      link_three: 'FAQs',
    },
    {
      link_header: 'Shopping',
      link_zero: 'Store Locator',
      link_one: 'Track Your Order',
      link_two: 'Size Guides',
      link_three: 'Gift Cards',
      link_four: 'Gift Packaging',
      link_five: 'Personal Styling',
      link_six: 'Refer a Friend',
    },
    {
      link_header: 'About Us',
      link_zero: 'Our Story',
      link_one: 'Corporate Responsibility',
      link_two: 'Careers',
      link_three: 'Affiliates',
      link_four: 'Reviews',
    },
    {
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
      display: 'flex',
      justifyContent: 'space-between',
      width: '80%',
      paddingRight: '10px',
      paddingLeft: '10px',
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '2.5em',
      cursor: 'default',
      [theme.breakpoints.down("sm")]: {
        display: "block",
        width: '90%',
      },
    },
    footerHeader: {
      [theme.breakpoints.up("sm")]: {
        "& span": {
          display: "none"
        }
      },
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "1.5em",
      },
    },
    footerContent: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      '& ul li': {
        marginBottom: '0.5em',
        '&:hover': {
          cursor: 'pointer',
        }
      },
      [theme.breakpoints.down("sm")]: {
        borderBottom: "1px solid #ccc",
        padding: "1em 0"
      },
    },
    linksHeader: {
      fontSize: '.875rem',
      letterSpacing: '.09375rem',
      fontWeight: '700',
      textTransform: 'uppercase',
      marginBottom: '1.2em',
      [theme.breakpoints.down("sm")]: {

      },
    },
    linksList: {
      paddingBottom: '0.25rem',
      fontSize: '.875rem',
      letterSpacing: '.09375rem',
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }))

  const classes = useStyles();
  return (
    <div className={classes.footerMain}>
      <div className={classes.footerContainer}>
        {
          content.map((item, i) =>
            <div className={classes.footerContent} key={i}>
              <div className={classes.footerHeader}>
                <h4 className={classes.linksHeader}>
                  {item.link_header}
                </h4>
                <span><Icon>expand-less</Icon></span>
              </div>
              <ul className={classes.linksList}>
                <li>{item.link_zero}</li>
                <li>{item.link_one}</li>
                <li>{item.link_two}</li>
                <li>{item.link_three}</li>
                <li>{item.link_four}</li>
                <li>{item.link_five}</li>
                <li>{item.link_six}</li>
              </ul>
            </div>
          )
        }
      </div>
    </div>
  )
}