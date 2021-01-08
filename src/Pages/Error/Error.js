import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <main className="page">
      <section className="errorSection">
        <h1 className="pageHeading">Oops...It's a Dead End</h1>
        <div className="backHome commonBtn">
          <Link to="/">Back Home</Link>
        </div>
      </section>
    </main>
  );
};

export default Error;
