import React from "react";
import "./ProductInfo.css";
import { Link, useParams } from "react-router-dom";
import { useProductContext } from "../../Contexts/ProductContext";
import { useCartContext } from "../../Contexts/CartContext/CartContext";
import Loading from "../../Components/Loading/Loading";

const ProductInfo = () => {
  const { products, error } = useProductContext();
  const {
    setCartItems,
    setTotalCount,
    setTotalPrice,
    cartItems,
  } = useCartContext();
  const { productId } = useParams();
  const product = products.find((item) => item.id === +productId);

  const addProductInCart = () => {
    // setCartItems((prevItems) => {
    //   const foundDuplicateItemIndex = prevItems.findIndex(
    //     (prevItem) => prevItem.id === product.id
    //   );
    //   if (foundDuplicateItemIndex >= 0) {
    //     prevItems[foundDuplicateItemIndex].productCount += 1;
    //     setTotalCount((totalCount) => totalCount + 1);
    //     setTotalPrice(
    //       (totalPrice) => totalPrice + +prevItems[foundDuplicateItemIndex].price
    //     );
    //     return [...prevItems];
    //   }
    //   return [...prevItems, { ...product, productCount: 1 }];
    // });
    const foundDuplicateItemIndex = cartItems.findIndex(
      (prevItem) => prevItem.id === product.id
    );
    if (foundDuplicateItemIndex >= 0) {
      cartItems[foundDuplicateItemIndex].productCount += 1;
      setCartItems([...cartItems]);
    } else {
      setCartItems([...cartItems, { ...product, productCount: 1 }]);
    }
    setTotalCount((totalCount) => totalCount + 1);
    setTotalPrice((totalPrice) => totalPrice + +product.price);
  };

  if (product) {
    return (
      <main className="productInfo">
        <section className="productInfoSection">
          <article className="imageSection">
            <img
              src={product.image.url}
              alt={product.title}
              className="image--style"
            />
          </article>
          <article className="description commonBtn">
            <h2 className="name style">{product.title}</h2>
            <h4 className="price style">${product.price}</h4>
            <p className="descriptionText">{product.description}</p>
            <Link to="/cart" onClick={addProductInCart}>
              Add To Cart
            </Link>
          </article>
        </section>
      </main>
    );
  }
  if (error.isError) {
    return <h1 className="error">{error.message}</h1>;
  }
  return <Loading className="loading--center" />;
};
export default ProductInfo;
