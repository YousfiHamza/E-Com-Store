import styled from "styled-components";

import { Typography, Grid } from "@material-ui/core";

import Background from "../../../../assets/images/backgrounds/wave_2.png";

export const TeamContainer = styled(Grid)`
  background-image: url("${Background}");
  background-size: 100% 100px;
  background-repeat: no-repeat;
  padding-top: 56px;
`;

export const TeamTitle = styled(Typography)`
  font-family: lobster;
  margin-bottom: 44px;
  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;
`;

export const TeamDescription = styled(Typography)`
  color: gray;
  font-style: italic;
`;
