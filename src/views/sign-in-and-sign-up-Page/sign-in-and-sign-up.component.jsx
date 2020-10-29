import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.styles.jsx";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInAndSignUpPage = ({ currentUser, location }) => {
  if (currentUser) {
    if (location.state) return <Redirect to={location.state.prevPath} />;
    return <Redirect to="./" />;
  }
  // show this page only if the user isnt logged
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(SignInAndSignUpPage);
