import React from "react";

import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer,
} from "./sign-in.styles";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import { auth, uiConfig } from "../../firebase/firebase.utils.js";

const SignIn = () => {
  return (
    <SignInContainer item xs={12} md={5}>
      <TitleContainer>I already have an account</TitleContainer>
      <ButtonsContainer>
        {" "}
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </ButtonsContainer>
    </SignInContainer>
  );
};

export default SignIn;
