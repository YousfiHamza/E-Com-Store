import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { createStructuredSelector } from "reselect";

import {
  CartDropDownContainer,
  ItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch, match }) => (
  <CartDropDownContainer>
    <ItemsContainer>
      {cartItems.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </ItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push(`${match.url}checkout`);
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
