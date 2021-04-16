import { AccountCircle, HomeOutlined, HomeRounded,ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import { fade, makeStyles } from '@material-ui/core/styles';
 import { Link } from "react-router-dom";
 import { connect } from "react-redux";
//import "./header.styles.scss";
 import { auth } from "../../firebase/firebase.utils";
 import SearchIcon from '@material-ui/icons/Search';
 //import CartIcon from "../cart-icon/cart-icon.component";
 import CartDropdown from "../cart-dropdown/cart-dropdown.component";
 import { selectCartHidden,selectCartItemsCount } from "../../redux/cart/cart.selector";
 import {toggleCartHidden} from "../../redux/cart/cart.action"
 import { selectCurrentUser } from "../../redux/user/user.selector";
import { AppBar, Badge, Button, IconButton, InputBase, Menu, MenuItem, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main : {
      backgroundColor: 'rgb(7, 215, 252)'
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    rightSide: {
      display : 'flex'
    }
  }));


const Header = ({ currentUser, toggleCartHidden, itemCount, hidden }) => {
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {currentUser 
      ? 
      <div>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick = { () => auth.signOut()}>Sign Out</MenuItem>
      </div>
      :
      <div>
      <Link to="/signin" className = "link-button">
      <MenuItem onClick={handleMenuClose}>
        Sign In
      </MenuItem>
    </Link>
    <Link to="/signup" className = "link-button">
    <MenuItem onClick={handleMenuClose}>
      Register
    </MenuItem>
  </Link>
  </div>
    }
      
      
    </Menu>
  );
    return (
        <div className={classes.grow}>
        <AppBar position="static" >
          <Toolbar className="main">
            <Link to = "/">
              <IconButton style={{color : "white"}}>
                <HomeRounded />
              </IconButton>
            </Link>
            {renderMenu}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div style = {{display : "flex"}}>
              <IconButton aria-label="show 17 new notifications" color="inherit" onClick = {toggleCartHidden}>
              <Badge badgeContent={itemCount} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
              </IconButton>  
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            
            
          </Toolbar>
        </AppBar>
         {hidden ? null : <CartDropdown />} 
        
      </div>
  );
};

 const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  itemCount: selectCartItemsCount(state),
  hidden: selectCartHidden(state),
 });

 const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
 })

export default connect(mapStateToProps,mapDispatchToProps)(Header);
