import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.sass";

import HomePage from "./views/homepage/homepage.component";
import ShopPage from "./views/shoppage/shoppage.component.jsx";
import Header from "./components/header/header.component.jsx";

const Hats = () => (
  <div>
    <h1> Hello From Hats</h1>
  </div>
);

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={Hats} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
