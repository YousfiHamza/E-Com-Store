import styled from "styled-components";

import { Typography, Grid } from "@material-ui/core";

import Background from "../../../../assets/images/backgrounds/wave_3.png";

export const SponsoredContainer = styled(Grid)`
  background-image: url("${Background}");
  background-size: 100% 17%;
  background-repeat: no-repeat;
  background-color: #00539c;
  padding: "55px";
`;

export const SponsoredTitle = styled(Typography)`
  font-family: lobster;
  margin-bottom: 44px;
  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;
`;

export const SponsoredDescription = styled(Typography)`
  color: white;
  font-style: italic;
`;
