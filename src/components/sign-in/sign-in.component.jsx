import React, { useState } from "react";

import {
  SignInContainer,
  TitleContainer,
  ButtonsContainer,
} from "./sign-in.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

import {
  auth,
  uiConfig,
  signInWithGoogle,
  signInWithFaceBook,
} from "../../firebase/firebase.utils.js";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

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
