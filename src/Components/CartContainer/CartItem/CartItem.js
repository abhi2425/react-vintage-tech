import React from "react";
import "./CartItem.css";
import ItemDetails from "./ProductDetails";
import CartButtons from "./CartButtons";
const CartItem = ({
  image,
  title,
  price,
  productCount,
  incrementHandler,
  decrementHandler,
  removeHandler,
}) => {
  return (
    <article className="cartItem">
      <ItemDetails
        image={image}
        title={title}
        price={price}
        removeHandler={removeHandler}
      />
      <CartButtons
        count={productCount}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
    </article>
  );
};

export default CartItem;
