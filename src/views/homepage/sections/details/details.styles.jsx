import styled from "styled-components";

import { Typography } from "@material-ui/core";

import Background1 from "../../../../assets/images/backgrounds/wave_1.gif";

export const TitleComponent = styled(Typography)`
  font-family: "lobster";
  background-image: url("${Background1}");
  background-size: 50%;
  background-repeat: no-repeat;
  margin-bottom: 44px;
  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;
`;

export const DescriptionComponent = styled(Typography)`
  color: GrayText;
  font-style: italic;
  font-family: Grenze Gotisch;
  font-size: 22px;
`;
