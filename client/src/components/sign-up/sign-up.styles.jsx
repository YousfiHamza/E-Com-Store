import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

import { Grid } from "@material-ui/core";

export const SignUpContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin: 22px 0;
  span {
    text-align: center;
  }
`;

export const TitleContainer = styled.h2`
  margin: 10px 0;
  font-size: 33px;
  font-family: "lobster";
  text-align: center;
  background-repeat: no-repeat;
  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;
`;

export const ButtonContainer = styled(CustomButton)`
  width: 100%;
`;
