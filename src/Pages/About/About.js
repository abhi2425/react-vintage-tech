import React from "react";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <main className="page">
      <section
        className="pageSection"
        style={{ width: "65vw", maxWidth: "75rem" }}
      >
        <h3 className="pageHeading">About Us</h3>
        <p
          style={{
            fontSize: "2.2rem",
            letterSpacing: ".1rem",
          }}
        >
          Vintage Tech - Solution for quenching your thirst for the old techs,
          fancy old designs to satisfy your desire.Here We give you chance to
          buy these techs at very effective and affordable cost lower than
          market and even pawn shops.We have all kinds of techs starting from
          MAC to Vintage Windows computer to old Phones and radio.
          <br />
          <br /> Website is developed on reactJs with several other cool
          packages.It uses my own Api for authentication which is developed in
          nodejs based server with cloud based mongodb database support.
        </p>
        <Footer />
      </section>
    </main>
  );
};

export default About;
