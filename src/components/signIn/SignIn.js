import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

export default function SignIn() {
  const useStyles = makeStyles(theme => ({
    signInMain: {
      [theme.breakpoints.down('sm')]: {
      },
    },
  }))
  const classes = useStyles();
return (
    <div className={classes.signInMain}>
        Wellcome to Sign In
    </div>
  )
}
