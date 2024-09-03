import React from "react";
import "../css/contact.css";
import banner_img from "../images/about/about_banner.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <Banner />
      <div className="form">
        <Features />
      </div>
    </div>
  );
};

function Banner() {
  return (
    <div className="banner">
      <div className="banner_img">
        <img src={banner_img} alt="" />
      </div>
      <div className="content">
        <div className="left">
          <h1>Contact Us</h1>
          <span>
            <b>Home</b> &gt; Contact Us
          </span>
        </div>
        <div className="right">
          <a href="tel: 9550937897" className="call">
            <i className="bx bx-phone-call"></i>
            HAIR: <span>+91 95509 37897</span>
          </a>

          <a href="tel: 9550937897" className="call">
            <i className="bx bx-phone-call"></i>
            DENTAL: <span>+91 63097 37897</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="features">
      <div className="feature">
        <h1>
          <i class="bx bx-location-plus"></i>
          OUR LOCATIONS
        </h1>
      </div>
      <div className="feature"></div>
      <div className="feature"></div>
    </div>
  );
}

export default Contact;
