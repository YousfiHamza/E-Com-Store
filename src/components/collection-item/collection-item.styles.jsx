import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

//Material UI
import Grid from "@material-ui/core/Grid";

export const CollectionItemContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    height: 432px;
  }
  height: 321px;
  align-items: center;
  position: relative;
  margin: 11px;
  .card {
    position: absolute;
    transform-style: preserve-3d;
    height: 100%;
    width: 100%;
    transition: all 0.6s ease-in-out;
    .image {
      height: 100%;
      width: 100%;
      border-radius: 33px;
    }
    .front,
    .back {
      height: 100%;
      width: 100%;
      backface-visibility: hidden;
      position: absolute;
      border-radius: 33px;
    }
    .back {
      transform: rotateY(180deg);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 50, 100, 0.9);
    }
    .mobile-card {
      position: absolute;
      bottom: 0;
      height: 100%auto;
      color: #fff;
      .button {
        margin: auto 0;
      }
      .mobile-text {
        font-size: 22px;
        text-align: center;
        color: white;
        font-style: italic;
        font-family: lobster;
        text-shadow: 5px 5px 10px cyan, 5px 5px 10px black;
      }
    }
    @media (min-width: 960px) {
      &:hover {
        transform: rotateY(180deg);
      }
    }
  }
  @media (min-width: 960px) {
    &:hover {
      .image {
        opacity: 0.8;
      }
    }
  }
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 25%;
  font-size: 22px;
  text-align: center;
  color: white;
  font-style: italic;
  font-family: lobster;
  text-shadow: 5px 5px 10px cyan, 5px 5px 10px blue;
`;

export const NameContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.div`
  width: 100%;
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  margin: 20px 0;
  font-style: italic;
  font-size: 20px;
  text-align: center;
  @media (max-width: 959px) {
    font-size: 14px;
    margin: 10%;
  }
`;
