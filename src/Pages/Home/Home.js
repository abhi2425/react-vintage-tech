import React from "react";
import HomeHeader from "../../Components/HomeHeader/HomeHeader";
import HomeSection from "../../Components/HomeSection/HomeSection";
import "./Home.css";
const Home = () => {
  return (
    <main className="homePage">
      <HomeHeader />
      <HomeSection />
    </main>
  );
};

export default Home;
