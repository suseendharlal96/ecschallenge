import React, { useState } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Button,
  makeStyles,
} from "@material-ui/core";

import { logout, addToCart } from "../store/actions/index";

const Navbar = ({ authData, cart }) => {
  console.log({ authData, cart });
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginBottom: 5,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  const classes = useStyles();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleClose();
    history.push("/auth");
  };
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          color="error"
          style={{ textDecoration: "none" }}
          component={Link}
          to="/"
        >
          Book Store
        </Typography>
        {authData ? (
          <>
            <Button
              color="secondary"
              variant="contained"
              style={{ textDecoration: "none" }}
              component={Link}
              to="/cart"
              // onClick={() => dispatch(addToCart(cart))}
            >
              Your Cart
            </Button>
            {cart && cart.length > 0 && (
              <Button
                color="secondary"
                variant="contained" 
                style={{ textDecoration: "none" }}
                onClick={() => dispatch(addToCart(cart))}
              >
                Add To Cart
              </Button>
            )}
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar
                alt="user"
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>{authData.email}</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          location.pathname !== "/auth" && (
            <Button
              color="secondary"
              variant="contained"
              style={{ textDecoration: "none" }}
              component={Link}
              to="/auth"
            >
              Login
            </Button>
          )
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  authData: state?.authReducer?.authData?.result,
  cart: state?.cartReducer?.tempCart,
});

export default connect(mapStateToProps)(Navbar);
