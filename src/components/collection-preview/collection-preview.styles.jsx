import styled from "styled-components";

import { Typography, Grid } from "@material-ui/core";

import Background1 from "../../assets/images/backgrounds/wave_1.gif";

export const CollectionPreviewContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled(Grid)`
  font-size: 33px;
  font-family: "lobster";
  @media (min-width: 900px) {
    background-image: url("${Background1}");
    background-position: 50%;
    background-size: 50% 100%;
    background-repeat: no-repeat;
  }
  margin: 44px;
  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;
  &:hover {
    cursor: pointer;
  }
`;

export const PreviewContainer = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
