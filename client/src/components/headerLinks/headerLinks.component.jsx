/*eslint-disable*/
import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import {
  selectCartHidden,
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";

import { auth } from "../../firebase/firebase.utils.js";

//our Components
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// react components for routing our app without refresh
import { Link, withRouter } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {
  StorefrontTwoTone,
  ContactMailTwoTone,
  ExitToAppTwoTone,
  ArtTrackTwoTone,
  ShoppingBasketTwoTone,
} from "@material-ui/icons";

import styles from "./headerLinks.styles";

const useStyles = makeStyles(styles);

const HeaderLinks = ({
  currentUser,
  hidden,
  cartItems,
  itemsCount,
  history,
}) => {
  const classes = useStyles();
  return (
    <List className={classes.list} data-aos="fade-down">
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="N/A for Now"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link
            to="/about-us"
            style={{ textDecoration: "line-through" }}
            className={classes.navLink}
          >
            <ArtTrackTwoTone className={classes.icons} /> About Us
          </Link>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          title={window.innerWidth > 959 ? "But it's Closed Now ..." : "Visit"}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/shop" className={classes.navLink}>
            <StorefrontTwoTone className={classes.icons} />
            Our Shop
          </Link>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="N/A for Now"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link
            to="/contact"
            style={{ textDecoration: "line-through" }}
            className={classes.navLink}
          >
            <ContactMailTwoTone className={classes.icons} /> Contact Us
          </Link>
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title={window.innerWidth > 959 ? "In-N-Out" : "You Should"}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          {currentUser ? (
            <a
              onClick={() => auth.signOut()}
              className={classes.navLink}
              style={{ cursor: "pointer" }}
            >
              <ExitToAppTwoTone className={classes.icons} /> SIGN OUT
            </a>
          ) : (
            <Link to="/sign-in" className={classes.navLink}>
              <ExitToAppTwoTone className={classes.icons} /> Sign In
            </Link>
          )}
        </Tooltip>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title={window.innerWidth > 959 ? "All Yours ..." : "Check"}
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          {window.innerWidth > 959 ? (
            <CartIcon className={classes.icons} />
          ) : (
            <Link
              to={
                cartItems.length
                  ? "/YH-Clothing/checkout"
                  : history.location.pathname
              }
              className={classes.navLink}
            >
              <ShoppingBasketTwoTone className={classes.icons} /> Cart [{" "}
              {itemsCount} ]
            </Link>
          )}
        </Tooltip>
        {!hidden && cartItems.length ? <CartDropdown /> : ""}
      </ListItem>
    </List>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  cartItems: selectCartItems,
  itemsCount: selectCartItemsCount,
});

export default withRouter(connect(mapStateToProps)(HeaderLinks));