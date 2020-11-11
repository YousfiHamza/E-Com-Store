import React, { Fragment } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Material UI
import { Grid } from "@material-ui/core";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview.component";

import Parallax from "../parallax/parallax.component";

const CollectionOverView = ({ collections }) => (
  <Fragment>
    <Parallax filter image="shop" />
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <Grid container>
          <CollectionPreview key={id} {...otherCollectionProps} />
        </Grid>
      ))}
    </CollectionsOverviewContainer>
  </Fragment>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverView);
