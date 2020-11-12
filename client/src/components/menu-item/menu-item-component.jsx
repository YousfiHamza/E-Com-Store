import React from "react";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer,
} from "./menu-item.styles";

import Grid from "@material-ui/core/Grid";

// HOC that helps us avoid prop drilling and gives us access to the props we need such as " Location , History ... "
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
  return (
    <Grid item md={size ? 6 : 4} xs={12} data-aos="fade-down">
      <MenuItemContainer
        size={size}
        onClick={() => history.replace(`/YH-Clothing/${linkUrl}`)}
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
    </Grid>
  );
};

export default withRouter(MenuItem);
