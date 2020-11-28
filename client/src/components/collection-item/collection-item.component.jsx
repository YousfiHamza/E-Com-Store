import React, { useContext } from "react";

import { CartContext } from "../../providers/cart/cart.provider";

//Material UI
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

import Hidden from "@material-ui/core/Hidden";

import { LazyLoadImage } from "react-lazy-load-image-component";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  PriceContainer,
  NameContainer,
  AddButton,
} from "./collection-item.styles";

const CollectionItem = ({ item, type }) => {
  const { addItem } = useContext(CartContext);
  const { name, price, imageUrl } = item;
  const medium = type ? 2 : 3;

  return (
    <CollectionItemContainer
      item
      xs={12}
      sm={5}
      md={medium}
      data-aos="fade-right"
    >
      <div className="card">
        <div className="front">
          <LazyLoadImage className="image" src={imageUrl} alt="..." />
        </div>
        <Hidden smDown>
          <div className="back">
            <CollectionFooterContainer>
              <NameContainer>{name}</NameContainer>
              <PriceContainer>{price} $</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => addItem(item)}>
              <AddShoppingCartIcon /> ADD
            </AddButton>
          </div>
        </Hidden>
        <Hidden mdUp>
          <Grid container justify="center" className="mobile-card">
            <Grid container>
              <Grid item xs={12} className="mobile-text">
                {name}
              </Grid>
              <Grid item xs={12} className="mobile-text">
                {price} $
              </Grid>
            </Grid>
            <Grid item className="button" justify="center" xs={12}>
              <AddButton inverted onClick={() => addItem(item)}>
                <AddShoppingCartIcon /> ADD
              </AddButton>
            </Grid>
          </Grid>
        </Hidden>
      </div>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
