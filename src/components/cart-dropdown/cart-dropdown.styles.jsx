import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropDownContainer = styled.div`
  color: black;
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 100%;
  right: 0;
  z-index: 5;
  border-radius: 25px;
`;

export const ItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
  border-radius: 0 0 10px 10px;
`;
