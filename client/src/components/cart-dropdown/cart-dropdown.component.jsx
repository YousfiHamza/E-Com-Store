import React from "react";

import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { createStructuredSelector } from "reselect";

import {
  CartDropDownContainer,
  ItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";

import Hidden from "@material-ui/core/Hidden";

const CartDropdown = ({ cartItems, history, dispatch, match }) => (
  <Hidden smDown>
    <CartDropDownContainer>
      <ItemsContainer>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ItemsContainer>
      <Link to="/checkout">
        <CartDropdownButton
          onClick={() => {
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CartDropdownButton>
      </Link>
    </CartDropDownContainer>
  </Hidden>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default React.memo(withRouter(connect(mapStateToProps)(CartDropdown)));
