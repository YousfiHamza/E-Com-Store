import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

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

const CollectionItem = ({ item, addItem, type }) => {
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

const mapDispatchtoProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchtoProps)(CollectionItem);
