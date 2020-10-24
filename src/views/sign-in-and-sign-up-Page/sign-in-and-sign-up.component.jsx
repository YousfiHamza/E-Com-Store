import React from "react";
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles.jsx";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

export default function SignInAndSignUpPage() {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
}
