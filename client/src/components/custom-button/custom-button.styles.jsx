import styled, { css } from "styled-components";

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;

  &:hover {
    background-color: black;
    color: white;
    border-radius: 15px;
    transition: 0.3s linear;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  return props.inverted ? invertedStyles : "";
};

export const CustomButtonContainer = styled.button`
  width: 100%;
  display: block;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 25px;
  @media (max-width: 432px) {
    padding: 0 15px;
  }
  margin: 11px 0;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    border-radius: 0.5;
  }
  ${getButtonStyles}
`;
