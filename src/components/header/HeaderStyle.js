// style for header section
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
    color: 'black',
    backgroundColor: 'white',
    display: 'contents'
  },
  growOne: {
    justifyContent: 'space-between',
    color: 'black',
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      display: 'table',
      padding: '0.2em 0.4em',
    },
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  title: {
    color: 'black',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    [theme.breakpoints.down('sm')]: {
      display: 'contents',
      height: '100%',
      width: '100%',
      padding: '0',
      '& > img': {
        padding: '0',
        maxWidth: '45%',
        height: '100%'
      }
    },
  },
  search: {
    position: 'relative',
    color: 'black',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    float: 'right',
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(20),
      width: 'auto',
      border: '1px solid #ccc',
      borderRadius: '2px'
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      display: 'inline-flex',
      order: '3',
      width: '100%',
      marginRight: '0',
      flexDirection: 'column',
      backgroundColor: '#f3f3f3',
      borderRadius: '0'
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '80%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid #ccc',
    margin: '0.3em',
    index: '10',
    [theme.breakpoints.down('sm')]: {
      possition: 'absolute',
      maxWidth: '8%',
      right: '0',
      borderLeft: '1px solid white',

    },
  },
  inputRoot: {
    color: 'inherit',
    '&::placeholder': {
      color: 'black'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      maxWidth: '87%',
      borderRight: '0'
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    color: 'black',
    opacity: '1',
    letterSpacing: '.04em',
    [theme.breakpoints.up('md')]: {
      width: '350',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  button: {
    margin: theme.spacing(1),
    display: 'inline-block!important',
    fontWeight: '500',
    lineHeight: '1.4',
    letterSpacing: '.04em',
    '-webkit-font-smoothing': 'antialiased',
    textAlign: 'right!important',
    padding: '0',
    marginLeft: '0',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#8e7143'
    }
  },
  storeAmount: {
    fontSize: '0.9em',
    padding: '0.3em',
    margin: '0.5em auto',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default useStyles;