import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

//Material UI
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import {
  CollectionItemContainer,
  BackgroundImage,
  CollectionFooterContainer,
  PriceContainer,
  NameContainer,
  AddButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem, type }) => {
  const { name, price, imageUrl } = item;
  const medium = type ? 2 : 3;

  return (
    <CollectionItemContainer
      item
      xs={12}
      sm={5}
      md={medium}
      data-aos="fade-down"
    >
      <div className="card">
        <div className="front">
          <img className="image" src={imageUrl} alt="..." />
        </div>
        <div className="back">
          <CollectionFooterContainer>
            <NameContainer>{name}</NameContainer>
            <PriceContainer>{price}</PriceContainer>
          </CollectionFooterContainer>
          <AddButton inverted onClick={() => addItem(item)}>
            <AddShoppingCartIcon /> ADD
          </AddButton>
        </div>
      </div>
    </CollectionItemContainer>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchtoProps)(CollectionItem);
