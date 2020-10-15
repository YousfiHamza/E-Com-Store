import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./views/homepage/homepage.component";
import ShopPage from "./views/shoppage/shoppage.component.jsx";

const Hats = () => (
  <div>
    <h1> Hello From Hats</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={Hats} />
      <Route exact path="/shop" component={ShopPage} />
    </Switch>
  );
}

export default App;
