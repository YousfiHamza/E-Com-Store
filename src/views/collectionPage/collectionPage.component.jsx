import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import {
  CollectionPageContainer,
  TitleContainer,
  ItemsContainer,
} from "./collectionPage.styles";

import { selectCollection } from "../../redux/shop/shop.selector";

import CollectionItem from "../../components/collection-item/collection-item.component";

export const CollectionPage = ({ collection }) => {
  if (collection) {
    const { title, items } = collection;
    return (
      <CollectionPageContainer>
        <TitleContainer>{title}</TitleContainer>
        <ItemsContainer>
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </ItemsContainer>
      </CollectionPageContainer>
    );
  } else {
    return <Redirect to="/E-Com-Store" />;
  }
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
