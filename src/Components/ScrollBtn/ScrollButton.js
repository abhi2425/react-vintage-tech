import React from "react";
import "./ScrollButton.css";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useUserContext } from "../../Contexts/UserContext";
const ScrollButton = () => {
  const { pageHeight } = useUserContext();
  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      className={pageHeight > 100 ? "scrollBtn showScrollBtn" : "scrollBtn"}
      onClick={scrollToTopHandler}
    >
      <FaAngleDoubleUp />
    </button>
  );
};

export default ScrollButton;
