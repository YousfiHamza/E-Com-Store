import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  TextContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <TextContainer weight="bold">{name}</TextContainer>
      <TextContainer>
        {quantity} x {price} $
      </TextContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
