import React from "react";
import { useProductContext } from "../../Contexts/ProductContext";
const FilterButtons = () => {
  const { sorted, changePageHandler, page } = useProductContext();
  const buttons = sorted.map((_, index) => (
    <button
      className={`pageBtn ${page === index && "activeBtn"}`}
      onClick={() => changePageHandler(index)}
      key={index}
    >
      {index + 1}
    </button>
  ));
  return <article className="btnContainer">{buttons}</article>;
};

export default FilterButtons;
