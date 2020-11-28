import React, { useContext } from "react";

import { Link } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../providers/cart/cart.provider";

import {
  CartDropDownContainer,
  ItemsContainer,
  CartDropdownButton,
} from "./cart-dropdown.styles";

import Hidden from "@material-ui/core/Hidden";

const CartDropdown = () => {
  const { cartItems, toggleHidden } = useContext(CartContext);
  return (
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
              toggleHidden();
            }}
          >
            GO TO CHECKOUT
          </CartDropdownButton>
        </Link>
      </CartDropDownContainer>
    </Hidden>
  );
};

export default React.memo(CartDropdown);
