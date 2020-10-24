import React from "react";

import { SignInContainer, TitleContainer } from "./sign-in.styles";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  auth,
  signInWithGoogle,
  signInWithFaceBook,
} from "../../firebase/firebase.utils.js";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
        <span>Sign In With Your Email And Password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleButton>
            SIGN IN with Google
          </CustomButton>
          <CustomButton onClick={signInWithFaceBook} isFacebookButton>
            SIGN IN with Facebook
          </CustomButton>
        </form>
      </SignInContainer>
    );
  }
}
