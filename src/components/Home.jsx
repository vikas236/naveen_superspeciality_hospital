// src/components/Home.js
import React from "react";
import "../css/home.css";
import medicine_container from "../images/medicine_container.png";
import string_shape from "../images/string_shape.png";
import handwash_image from "../images/handwash_image.png";
import filler from "../images/filler.jpg";
import filler0 from "../images/filler0.png";
import partner_logo from "../images/logo_filler.png";

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
            <i className="bx bx-right-arrow-alt"></i>Learn More
          </button>
        </div>
        <div className="box b">
          <div className="box_award">
            <div className="content">
              <div className="stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <span>BEST AWARD</span>
              <span className="year">2024</span>
            </div>
          </div>
          <h1>Healthcare</h1>
          <button>
            <i className="bx bx-right-arrow-alt"></i>Book a consultation
          </button>
        </div>
        <div className="box c">
          <img src={medicine_container} alt="medicine container" />
          <img src={string_shape} className="string_shape" alt="string shape" />
        </div>
        <div className="box d">
          <img src={handwash_image} alt="" />
        </div>
        <div className="box e">
          <img src={filler} alt="" />
          <div className="content">
            <p>
              Welcome to the hospital we are open from <b>0 to 1</b>
            </p>
            <span>
              <i className="bx bxs-phone-call"></i>
              CALL: <a href="tel:1010101010">+01010 10101</a>
            </span>
          </div>
        </div>
        <div className="box f">
          <div className="content">
            <p>WE PROVIDE PRODUCTS FOR YOUR NEEDS AT YOUR DOORSTEP</p>
            <span>
              Shop your medicine online from <b>Us</b>
            </span>
            <hr />
            <button>
              <i className="bx bx-right-arrow-alt"></i>Shop
            </button>
          </div>
          <img src={filler0} alt="" />
        </div>
      </div>
      <Partner_Logos />
    </div>
  );
};

function Partner_Logos() {
  window.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".partner_logos img");
    images.forEach(
      (e, i) => (e.style.transform = `rotate(${Math.random() * 360}deg)`)
    );
  });

  return (
    <div className="partner_logos">
      <div className="partner">
        <img src={partner_logo} alt="" />
        <h1>Name</h1>
      </div>
      <div className="partner">
        <img src={partner_logo} alt="" />
        <h1>Name</h1>
      </div>
      <div className="partner">
        <img src={partner_logo} alt="" />
        <h1>Name</h1>
      </div>
      <div className="partner">
        <img src={partner_logo} alt="" />
        <h1>Name</h1>
      </div>
      <div className="partner">
        <img src={partner_logo} alt="" />
        <h1>Name</h1>
      </div>
    </div>
  );
}

export default Home;
