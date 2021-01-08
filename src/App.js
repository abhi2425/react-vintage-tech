import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Alert from "./Components/Alert/Alert";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import ScrollButton from "./Components/ScrollBtn/ScrollButton";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import CheckOut from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import ProductInfo from "./Pages/ProductInfo/ProductInfo";
import Cart from "./Pages/Cart/Cart";
import Error from "./Pages/Error/Error";
import Logout from "./Pages/Logout/Logout";

const App = () => {
  return (
    <>
      <NavBar />
      <Alert />
      <ScrollButton />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <PrivateRoute path="/checkout">
          <CheckOut />
        </PrivateRoute>
        <Route path="/products/:productId">
          <ProductInfo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default App;
