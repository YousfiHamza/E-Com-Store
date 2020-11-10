import React, { useState } from "react";

import { SignInContainer, TitleContainer } from "./sign-in.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  auth,
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
      <span>Sign In With Your Email And Password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN IN</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleButton>
          With Google
        </CustomButton>
        <CustomButton onClick={signInWithFaceBook} isFacebookButton>
          With Facebook
        </CustomButton>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
