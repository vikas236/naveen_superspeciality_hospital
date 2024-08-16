// src/components/Home.js
import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="box a">
          <h1>
            Your Trusted <span>Healthcare</span> Center
          </h1>
          <p>
            Embrace a world of comprehensive healthcare where your well-being
            takes center stage. At Meca, we're dedicated to providing you with
            personalized medical services.
          </p>
          <button>
            <i class="bx bx-right-arrow-alt"></i>Learn More
          </button>
        </div>
        <div className="box b"></div>
        <div className="box c"></div>
        <div className="box d"></div>
        <div className="box e"></div>
        <div className="box f"></div>
      </div>
    </div>
  );
};

export default Home;
