import React from "react";

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButton,
} from "./checkout-item.styles";

import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import { RemoveCircle, AddCircle, DeleteForever } from "@material-ui/icons";

const CheckoutItem = ({ item, clearItem, addItem, removeItem }) => {
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
        <img alt="cart-item" src={imageUrl} />
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

      <RemoveButton xs={5} sm={2} onClick={() => clearItem(item)}>
        <DeleteForever />
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
