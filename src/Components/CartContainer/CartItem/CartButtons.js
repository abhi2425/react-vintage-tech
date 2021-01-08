import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const CartButtons = ({ count, incrementHandler, decrementHandler }) => {
  return (
    <div>
      <button className="btn btn--increment" onClick={incrementHandler}>
        <FaAngleUp />
      </button>
      <div className="counter">{count}</div>
      <button className="btn btn--decrement" onClick={decrementHandler}>
        <FaAngleDown />
      </button>
    </div>
  );
};

export default CartButtons;
