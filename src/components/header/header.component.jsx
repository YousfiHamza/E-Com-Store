import React from "react";
import { Link } from "react-router-dom";
// Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
import { ReactComponent as Cart } from "../../assets/shopping-cart.svg";
import { ReactComponent as Logo } from "../../assets/if.svg";

import { auth } from "../../firebase/firebase.utils.js";

import "./header.styles.sass";

export default function Header({ currentUser }) {
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
        <Link to="/cart" className="option">
          <Cart className="logo" />
        </Link>
      </div>
    </div>
  );
}
