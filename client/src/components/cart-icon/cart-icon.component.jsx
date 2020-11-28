import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);
  return (
    <CartIconContainer onClick={cartItemsCount ? toggleHidden : null}>
      <ShoppingIconContainer />
      <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
