import React from "react";

const productDetails = ({ image, title, price, removeHandler }) => (
  <div className="product">
    <div className="product__image">
      <img className="product__image--style" src={image.url} alt={title} />
    </div>
    <div className="product__details">
      <div>
        <div className="product__details--name">{title}</div>
        <div className="product__details--price">$ {price}</div>
        <button className="product__details--remove" onClick={removeHandler}>
          remove
        </button>
      </div>
    </div>
  </div>
);
export default productDetails;
