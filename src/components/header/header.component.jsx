import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/if.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { auth } from "../../firebase/firebase.utils.js";

import "./header.styles.sass";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="option">
            SIGN OUT
          </div>
        ) : (
          <Link to="/sign-in" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? "" : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});

export default connect(mapStateToProps)(Header);
