import React from "react";

import {
  CartItemContainer,
  ItemDetailsContainer,
  TextContainer,
} from "./cart-item.styles";

import { LazyLoadImage } from "react-lazy-load-image-component";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <LazyLoadImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <TextContainer weight="bold">{name}</TextContainer>
      <TextContainer>
        {quantity} x {price} $
      </TextContainer>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
