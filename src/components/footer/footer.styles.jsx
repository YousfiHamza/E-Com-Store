import styled from "styled-components";

//Material UI
import { Typography, Grid } from "@material-ui/core";

import Background from "../../assets/images/backgrounds/wave_3.png";

export const FooterContainer = styled(Grid)`
  background-color: #00539c;
  background-image: url("${Background}");
  background-size: 100% 44px;
  background-repeat: no-repeat;
  padding-top: 56px;
  color: white;
`;

export const BrandContainer = styled(Typography)`
  color: white;
  font-family: lobster;
  margin: 33px;
  font-size: 19px;
  text-shadow: 5px 5px 10px blue, 5px 5px 10px cyan;
`;

export const SocialsContainer = styled(Grid)`
  margin: 22px 0;
  a {
    color: white !important;
  }
`;
