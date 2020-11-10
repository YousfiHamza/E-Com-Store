import styled from "styled-components";

import { Grid } from "@material-ui/core";

export const CheckoutPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  flex-wrap: wrap;
  z-index: 123;
  border-radius: 25px;
  padding: 33px;
  margin-left: 11vw;
  margin-right: 11vw;
  margin-top: -22vh;
  margin-bottom: 66px;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
  .underlined {
    font-style: italic;
    text-decoration: underline;
    font-weight: 700;
  }
`;

export const CheckoutHeaderContainer = styled(Grid)`
  width: 100%;
  padding: 10px 0;
  display: flex;
  border-bottom: 1px solid darkgrey;
  text-align: center;
`;

export const HeaderBlockContainer = styled(Grid)`
  text-transform: capitalize;
  font-weight: bold;
  font-style: italic;
  font-family: lobster;
  @media only screen and (min-width: 959px) {
    font-size: 30px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media only screen and (max-width: 959px) {
    font-size: 30px;
  }
`;

export const TestWarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
