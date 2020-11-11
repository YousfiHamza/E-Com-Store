import React from "react";

// HOC that helps us avoid prop drilling and gives us access to the props we need such as " Location , History ... "
import { withRouter } from "react-router-dom";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer xs={12}>
    <TitleContainer
      item
      onClick={() => history.push(`${match.path}/${routeName}`)}
      data-aos="fade-right"
    >
      <DoubleArrowIcon /> {title.toUpperCase()}
    </TitleContainer>{" "}
    <PreviewContainer container xs={12} justify="center" data-aos="fade-right">
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} type="shop" />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);
export default withRouter(CollectionPreview);
