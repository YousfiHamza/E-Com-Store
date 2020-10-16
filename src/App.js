import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.sass";

import Header from "./components/header/header.component.jsx";
import HomePage from "./views/homepage/homepage.component";
import ShopPage from "./views/shoppage/shoppage.component.jsx";
import SignInAndSignUpPage from "./views/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user,
      });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="app">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
