import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: '0 0.1em',
    margin: '0 0.1em',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  setMenu: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderTop: '1px solid #ccc',
    '& > div': {
      width: '40%',
      maxWidth: '50%',
      backgroundColor: '#fff',
      color: '#000',
    },
  },
  menuItem: {
    letterSpacing: '.0875rem',
    fontSize: '.725rem',
    fontWeight: '700',
    minWidth: '98px',
    maxWidth: '127px',
    lineHeight: '1',
    padding: '0 0.6em',
    margin: '0 0.5em',
    opacity: '1',
    boxSizing: 'border-box',
    '&:hover': {
      borderBottom: '2px solid #8e7143',
      minWidth: '98px',
      maxWidth: '127px',
    },
    '&:first-child': {
      marginRight: '0.2em',
      paddingRight: '0.1em',
    },
    '&:nth-child(3)': {
      marginLeft: '0',
      paddingLeft: '0',
    },
    '&:nth-child(4)': {
      margin: '0',
      padding: '0',
    },
    '&:nth-child(5)': {
      margin: '0',
      padding: '0',
    },
    '&:last-child': {
      margin: '0',
      padding: '0',
      color: 'red'
    }
  },
}));

export default function NavMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.setMenu}
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        centered
      >
        <Tab className={classes.menuItem} label="What's New" />
        <Tab className={classes.menuItem} label="All Clothing" />
        <Tab className={classes.menuItem} label="Plus Size" />
        <Tab className={classes.menuItem} label="Wedding" />
        <Tab className={classes.menuItem} label="Inspire" />
        <Tab className={classes.menuItem} label="Sale" />
      </Tabs>
    </Paper>
  );
}
