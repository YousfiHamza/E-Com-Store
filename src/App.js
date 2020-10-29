import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";

import "./App.sass";

import Header from "./components/header/header.component";
import HomePage from "./views/homePage/homepage.component";
import ShopPage from "./views/shopPage/shoppage.component";
import SignInAndSignUpPage from "./views/sign-in-and-sign-up-Page/sign-in-and-sign-up.component";
import CheckoutPage from "./views/checkoutPage/checkoutPage.component";

import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";

const App = ({ setCurrentUser }) => {
  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
    return () => {
      unSubscribeFromAuth();
    };
  }, [setCurrentUser]);

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/E-Com-Store" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/sign-in" component={SignInAndSignUpPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchtoProps)(App);
