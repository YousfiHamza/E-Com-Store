import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";

import { signUpStart } from "../../redux/user/user.actions";

import {
  SignUpContainer,
  TitleContainer,
  ButtonContainer,
} from "./sign-up.styles";

const SignUp = ({ signUpStart }) => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match !");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <SignUpContainer item xs={12} md={5}>
      <TitleContainer>I do not Have an Account</TitleContainer>
      <span>Sign up With your Email</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <ButtonContainer type="submit">SIGN UP</ButtonContainer>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
