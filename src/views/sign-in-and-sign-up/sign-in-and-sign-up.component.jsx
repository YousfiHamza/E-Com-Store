import React from "react";
import "./sign-in-and-sign-up.styles.sass";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

export default function SignInAndSignUpPage() {
  return (
    <div className="signIn-and-signUp">
      <SignIn />
      <SignUp />
    </div>
  );
}
