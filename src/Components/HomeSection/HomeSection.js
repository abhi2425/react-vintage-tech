import React from "react";
import { useProductContext } from "../../Contexts/ProductContext";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
const HomeSection = () => {
  const { loading, error, featuredProducts } = useProductContext();
  const featuredProduct = featuredProducts.map((product) => (
    <ProductCard {...product} key={product.id} />
  ));
  return (
    <section className="homeSection">
      {loading && <Loading />}
      <h1
        className="homeText"
        style={{
          fontSize: "6rem",
          fontWeight: "300",
          letterSpacing: ".4rem",
          marginBottom: "10rem",
          textAlign: "center",
        }}
      >
        Featured Products
      </h1>
      {error.isError && <h1 className="error">{error.message}</h1>}
      <section className="featuredProducts">{featuredProduct}</section>
      <Footer />
    </section>
  );
};

export default HomeSection;
