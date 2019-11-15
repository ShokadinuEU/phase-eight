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
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexFlow: 'wrap',
      padding: '0.2em 0.4em',
    },
  },
  topAdvert: {
    width: '100%',
    height: '3vh',
    color: 'white',
    backgroundColor: '#8e7143',
    textAlign: 'center',
    minHeight: '1.5625rem',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#bf3723',
    }
  },
  advertCurrency: {
    top: '0.3em',
    color: 'white',
    right: '0',
    height: '1.4em',
    width: '6em',
    backgroundColor: '#8e7143',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      fontSize: '0.83em',
      fontWeight: '400',
      position: 'absolute',
      '& > img': {
        width: '15px',
        height: 'auto'
      }
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block'
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
      display: 'inline-flex',
      height: '100%',
      width: '45%',
      padding: '0',
      order: '1',
      '& > img': {
        padding: '0',
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
      width: '390px',
      marginLeft: theme.spacing(4),
      border: '1px solid #ccc',
      borderRadius: '2px',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      display: 'inline-flex',
      order: '3',
      width: '100%',
      marginRight: '0',
      flexDirection: 'column',
      backgroundColor: '#f3f3f3',
      borderRadius: '0',
      float: 'none'
    },
  },
  searchIcon: {
    width: theme.spacing(1),
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderLeft: '1px solid #ccc',
    margin: '0.3em',
    index: '10',
    right: '0',
    '&:hover': {
      cursor: 'pointer'
    },
    [theme.breakpoints.up('sm')]: {
      width: '28px',
      paddingLeft: '0.5em',
    },
    [theme.breakpoints.down('sm')]: {
      possition: 'absolute',
      maxWidth: '8%',
      width: '9%',
      borderLeft: '1px solid white',
    },
  },
  inputRoot: {
    color: 'inherit',
    '&::placeholder': {
      color: 'black'
    },
    display: 'contents',
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
    display: 'flex',
    fontWeight: '500',
    lineHeight: '1.4',
    letterSpacing: '.04em',
    '-webkit-font-smoothing': 'antialiased',
    textAlign: 'right',
    padding: '0',
    marginLeft: '0',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#8e7143'
    },
    [theme.breakpoints.up('sm')]: {
      '&:nth-child(4)': {
        fontSize: '0.7em',
        '& span': {
          flexDirection: 'row-reverse',
          display: 'flex',
        }
      },
      '&:last-child': {
        display: 'none'
      },
      margin: '0'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      textAlign: 'center',
      margin: '0',
      padding: '0',
      '&:first-child': {
        display: 'none'
      },
      '&:nth-child(3)': {
        display: 'none'
      },
    },
  },
  buttonWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      order: '1',
      width: '50%',
      justifyContent: 'space-around'
    },
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
  iconButton: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.875rem',
      display: 'flex',
      verticalAlign: 'middle',
      textAlign: 'center',
      margin: 'auto',
    },
  },
  sectionMobile: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  body: {
    padding: '0'
  },
}));

export default useStyles;
