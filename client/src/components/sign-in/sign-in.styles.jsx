import styled from "styled-components";

import { Grid } from "@material-ui/core";

export const SignInContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  margin: 22px 0;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 0, 0, 0.4) 40%,
    rgba(0, 83, 156, 1) 70%,
    rgba(0, 0, 0, 0.8) 110%
  );
  border-radius: 50%;
  @media (max-width: 432px) {
    border-radius: 10px;
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

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 450px;
`;
