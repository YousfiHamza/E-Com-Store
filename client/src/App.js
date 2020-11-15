import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { setCurrentUser } from "./redux/user/user.actions";

import "./App.sass";

import Header from "./components/header/header.component";
import HeaderLinks from "./components/headerLinks/headerLinks.component";
import Footer from "./components/footer/footer.component.jsx";

import { auth } from "./firebase/firebase.utils";
import { createUserProfileDocument } from "./firebase/firebase.utils";

import Spinner from "./components/spinner/spinner.component";

import ErrorBoundary from "./components/errorBoundary/ErrorBoundary.component.jsx";

const HomePage = lazy(() => import("./views/homePage/homepage.component"));
const ShopPage = lazy(() => import("./views/shopPage/shoppage.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./views/sign-in-and-sign-up-Page/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() =>
  import("./views/checkoutPage/checkoutPage.component")
);

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
      <Header
        color="white"
        brand="YousFitness - Clothing"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "info",
        }}
      />

      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/sign-in" component={SignInAndSignUpPage} />
            <Route component={HomePage} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchtoProps)(App);
