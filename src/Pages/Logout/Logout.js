import React, { useEffect } from "react";
import { useUserContext } from "../../Contexts/UserContext";
import { useCartContext } from "../../Contexts/CartContext/CartContext.js";
const Logout = () => {
  const { useLogoutFunction } = useUserContext();
  const { clearCartHandler } = useCartContext();
  useEffect(() => {
    clearCartHandler();
    useLogoutFunction();
  }, []);
  return <></>;
};

export default Logout;
