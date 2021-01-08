import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="emptyCart commonBtn">
      <h1 className="cartHeading"> Cart Is Empty </h1>
      <Link to="/products">Fill It </Link>
    </div>
  );
};

export default EmptyCart;
