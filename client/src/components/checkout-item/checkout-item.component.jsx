import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButton,
} from "./checkout-item.styles";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { RemoveCircle, AddCircle, DeleteForever } from "@material-ui/icons";

const CheckoutItem = ({ item }) => {
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  const { imageUrl, name, quantity, price } = item;
  return (
    <CheckoutItemContainer
      container
      alignItems="center"
      justify="center"
      xs={12}
      data-aos="fade-right"
    >
      <ImageContainer item xs={12} sm={2}>
        <LazyLoadImage alt="cart-item" src={imageUrl} />
      </ImageContainer>
      <TextContainer item xs={12} sm={3}>
        <span className="name"> {name}</span>
      </TextContainer>
      <TextContainer item xs={5} sm={2}>
        {price} $
      </TextContainer>
      <QuantityContainer container xs={12} sm={3}>
        <RemoveCircle
          className="arrow"
          onClick={() => removeItem(item)}
          fontSize="small"
        />

        <span className="value">{quantity}</span>

        <AddCircle
          className="arrow"
          onClick={() => addItem(item)}
          fontSize="small"
        />
      </QuantityContainer>

      <RemoveButton xs={5} sm={2} onClick={() => clearItemFromCart(item)}>
        <DeleteForever />
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
