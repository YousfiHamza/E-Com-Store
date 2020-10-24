import React from "react";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from "./menu-item.styles";

// HOC that helps us avoid prop drilling and gives us access to the props we need such as " Location , History ... "
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.replace(`/${linkUrl}`)}
    >
      <BackgroundImageContainer
        imageUrl={imageUrl}
        className="background-image"
      />
      <ContentContainer className="content">
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
