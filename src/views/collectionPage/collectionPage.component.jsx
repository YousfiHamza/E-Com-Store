import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { Typography } from "@material-ui/core";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collectionPage.styles";

//Material UI
import Grid from "@material-ui/core/Grid";
import StarsIcon from "@material-ui/icons/Stars";

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

import Parallax from "../../components/parallax/parallax.component";

export const CollectionPage = ({ collection }) => {
  if (collection) {
    const { title, items } = collection;
    return (
      <Fragment>
        <Parallax filter image="category" />
        <CollectionPageContainer>
          <TitleContainer>
            <StarsIcon data-aos="slide-up" />
            {title.toUpperCase()}
            <StarsIcon data-aos="slide-up" />
          </TitleContainer>
          <Grid container justify="space-around">
            {items.map((item) => (
              <CollectionItem key={item.id} item={item} />
            ))}
          </Grid>
        </CollectionPageContainer>
      </Fragment>
    );
  } else {
    return <Redirect to="/E-Com-Store" />;
  }
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
