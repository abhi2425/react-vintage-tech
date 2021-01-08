import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ image, title, price, id }) => {
  return (
    <article className="card">
      <div className="productImage">
        <img src={image.url} alt="Image" className="image--style" />
        <div className="details commonBtn">
          <Link to={`/products/${id}`}>Details</Link>
        </div>
      </div>

      <div className="productContents">
        <div className="productName">{title}</div>
        <div className="productPrice">{`$${price}`}</div>
      </div>
    </article>
  );
};

export default ProductCard;
