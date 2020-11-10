import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;
  flex-wrap: wrap;
  z-index: 123;
  // border: black solid 5px;
  border-radius: 25px;
  padding: 33px;
  margin-left: 11vw;
  margin-right: 11vw;
  margin-top: -33vh;
  margin-bottom: 66px;
`;

export const TitleContainer = styled.h2`
  font-size: 55px;
  font-family: "lobster";
  background-repeat: no-repeat;
  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;
  @media only screen and (max-width: 600px) {
    font-size: 33px;
`;
