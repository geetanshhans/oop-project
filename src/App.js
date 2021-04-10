import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = "/" component = {HomePage} />
      </Switch>
    </div>
  );
}

export default App;
