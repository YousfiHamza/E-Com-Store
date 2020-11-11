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

const GoogleStyles = css`
  background-color: #b3bbc4;
  &:hover {
    background-color: white;
    color: #ff5236;
    border: 2px solid #ff5236;
  }
`;

const FacebookStyles = css`
  background-color: #2470c7;
  &:hover {
    background-color: white;
    color: #2470c7;
    border: 2px solid #2470c7;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleButton) {
    return GoogleStyles;
  }
  if (props.isFacebookButton) {
    return FacebookStyles;
  }
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
