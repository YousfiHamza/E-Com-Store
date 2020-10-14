import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./views/homepage/homepage.component";

const Hats = () => (
  <div>
    <h1> Hello From Hats</h1>
  </div>
);

const Jackets = () => (
  <div>
    <h1> Hello From Jackets</h1>
  </div>
);

const Sneakers = () => (
  <div>
    <h1> Hello From Sneakers</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={Hats} />
      <Route exact path="/jackets" component={Jackets} />
      <Route exact path="/sneakers" component={Sneakers} />
    </Switch>
  );
}

export default App;
