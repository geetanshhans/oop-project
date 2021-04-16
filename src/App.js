import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignIn from "./pages/sign-in/sign-in.component";
import SignUp from "./pages/sign-up/sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path = "/" component = {HomePage} />
        <Route exact path = "/signin" component = {SignIn} />
        <Route exact path = "/signup" component = {SignUp} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
