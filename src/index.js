import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./Contexts/ProductContext";
import { CartProvider } from "./Contexts/CartContext/CartContext";
import { FormContextProvider } from "./Contexts/FormContext";
import { UserContextProvider } from "./Contexts/UserContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <FormContextProvider>
          <ProductProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductProvider>
        </FormContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
