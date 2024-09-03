import React from "react";
import "../css/contact.css";
import banner_img from "../images/about/about_banner.jpg";

const Contact = () => {
  return (
    <div className="contact">
      <Banner />
      <div className="form">
        <Features />
        <GetInTouch />
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
      <div className="feature a">
        <h1>
          <i class="bx bx-location-plus"></i>
          OUR LOCATIONS
        </h1>
        <span>
          5-4-76/6, gokhale street, College Rd, behind fbb showroom, Amalapuram,
          Andhra Pradesh 533201
        </span>
      </div>
      <div className="feature b">
        <h1>
          <i class="bx bx-phone"></i>CONNECT WITH US
        </h1>
        <span>
          CALL:
          <a href="tel: +91 9550937897">+91 95509 37897</a>
          <a href="tel: +91 63097 37897">+91 63097 37897</a>
        </span>
      </div>
      <div className="feature c">
        <h1>
          <i class="bx bx-time-five"></i>VISITING HOURS
        </h1>
        <span>
          <b> Visiting Hours: </b>Monday - Saturday: 10:00 AM - 6:00 PM
        </span>
      </div>
    </div>
  );
}

function GetInTouch() {
  return (
    <div className="getintouch">
      <h1>
        Send Us A <b>Message</b> Anytime
      </h1>
      <span className="sub_heading">Your details will not be published</span>
      <span> Required fields are marked *</span>
      <div className="container">
        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Please write your message"
          rows="5"
        ></textarea>
        <label htmlFor="name">
          Name <span>*</span>
        </label>
        <input id="name" type="text" placeholder="Please enter name" />
        <label htmlFor="phone">
          Phone <span>*</span>
        </label>
        <input
          type="number"
          id="phone"
          placeholder="Please enter your phone number"
        />
        <div className="terms_conditions">
          <input type="checkbox" id="terms" />
          <label htmlFor="checkbox">I agree with the terms</label>
        </div>
        <button>
          <i class="bx bx-right-arrow-alt"></i>
          Send Message Now
        </button>
      </div>
    </div>
  );
}

export default Contact;
