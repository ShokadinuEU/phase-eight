import React from 'react';
import useWindowScrollPosition from "@rehooks/window-scroll-position";
import Icon from '@material-ui/core/Icon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import useStyles from './HeaderStyle';
import HeaderAdvert from './HeaderAdvert';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [change, setChange] = React.useState(false);
  // const [clientDevice, setClientDevice] = React.useState(0);
  
  let position = useWindowScrollPosition();
  const changePosition = 1;
  const classes = useStyles();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  // function handleMobileMenuOpen(event) {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My items</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <div className={classes.topAdvert}>
          <HeaderAdvert />
          <div className={classes.advertCurrency}>
            <span>GBP (&#163;) &nbsp; </span>
            <img src='images/GB.svg' alt='GB Flag' />
          </div>
        </div>
        <Toolbar className={classes.growOne} >
          <Typography className={classes.title} variant="h6" noWrap>
            <img className={classes.logo} alt='logo-img' src='images/logo.svg' />
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="What are you looking for?"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search'}}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div className={classes.buttonWrapper}>
            <Button className={classes.button}>
                <Icon className={classes.iconButton}>add_alert</Icon>
                <span>Wishlist</span>
            </Button>
            <Button className={classes.button}>
              <Icon className={classes.iconButton}>person_outline</Icon>
              <span>Sign In</span>
            </Button>
            <Button className={classes.button}>
              <Icon className={classes.iconButton}>shopping_basket_outline</Icon>
              <span>Stores</span>
            </Button>
            <Button
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
              className={classes.button}
            >
              <Icon className={classes.iconButton}>add_shopping_cart</Icon>
              <span>(o)</span>
            </Button>
            <Button
              edge="start"
              className={classes.button}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon className={classes.iconButton} />
              <span>Menu</span>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}