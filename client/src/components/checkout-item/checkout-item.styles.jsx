import styled from "styled-components";

import { Grid } from "@material-ui/core";

export const CheckoutItemContainer = styled(Grid)`
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  text-align: center;
`;

export const ImageContainer = styled(Grid)`
  img {
    border-radius: 22px;
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled(Grid)`
  margin: 10px 0;
  font-style: italic;
  .name {
    font-weight: bold;
    text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;
    font-family: lobster;
    font-size: 30px;
  }
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  .arrow {
    cursor: pointer;
    margin: 11px;
  }
`;

export const RemoveButton = styled(Grid)`
  cursor: pointer;
  color: red;
`;
