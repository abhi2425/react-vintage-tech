import React, { createContext, useContext, useState, useEffect } from "react";
import { getDataFromLocalStorage } from "../../Utils/localStorage";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() =>
    getDataFromLocalStorage("cartItems")
  );
  const [totalCount, setTotalCount] = useState(() =>
    getDataFromLocalStorage("totalCount")
  );
  const [totalPrice, setTotalPrice] = useState(() =>
    getDataFromLocalStorage("totalPrice")
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalCount", JSON.stringify(totalCount));
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));

    // localStorage.removeItem("cartItems");
    // localStorage.removeItem("totalCount");
    // localStorage.removeItem("totalPrice");
  }, [cartItems, totalCount, totalPrice]);

  const removeCartItems = (index) => {
    const filterCartItems = cartItems.filter(
      (_, cartIndex) => cartIndex !== index
    );
    setCartItems(filterCartItems);
  };

  const incrementHandler = (index) => {
    cartItems[index].productCount += 1;
    setCartItems(cartItems);
    setTotalCount(totalCount + 1);
    setTotalPrice(totalPrice + +cartItems[index].price);
  };

  const decrementHandler = (index) => {
    cartItems[index].productCount -= 1;
    setCartItems(cartItems);
    setTotalCount((totalCount) => totalCount - 1);
    setTotalPrice((totalPrice) => totalPrice - +cartItems[index].price);

    if (!cartItems[index].productCount) {
      removeCartItems(index);
    }
  };

  const removeHandler = (index) => {
    setTotalCount((totalCount) => totalCount - cartItems[index].productCount);
    setTotalPrice(
      (totalPrice) =>
        totalPrice - cartItems[index].productCount * cartItems[index].price
    );
    removeCartItems(index);
  };
  const clearCartHandler = () => {
    setCartItems([]);
    setTotalCount(0);
    setTotalPrice(0);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalCount,
        totalPrice,
        setCartItems,
        incrementHandler,
        decrementHandler,
        removeHandler,
        clearCartHandler,
        setTotalCount,
        setTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCartContext = () => useContext(CartContext);
