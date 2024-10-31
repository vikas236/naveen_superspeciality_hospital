import React from "react";
import "../css/footer.css";

import logo from "../images/home/logo_white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="column">
          <div className="logo">
            <img src={logo} alt="" />
            <span className="sub_heading">Hair and Face Clinic</span>
          </div>
          <span className="address">
            <b>Address: </b>5-4-76/6, gokhale street, College Rd, behind fbb
            showroom, Amalapuram, Andhra Pradesh 533201
          </span>
          <span className="visiting_hours">
            <b> Visiting Hours: </b>Monday - Saturday: 10:00 AM - 6:00 PM
          </span>
        </div>
        <div className="column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15296.42082934366!2d82.0018924!3d16.5712112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ef1a23b294a1%3A0xec1323a664b6c351!2sNaveen%20Superspeciality%20Dental%2C%20Hair%20and%20Face%20Hospital!5e0!3m2!1sen!2sin!4v1730361298191!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="naveen hfc map"
          ></iframe>
        </div>
      </div>
      <h1 className="disclaimer">
        <b>© naveenhfc</b> All Rights Reserved by{" "}
        <a href="https://www.pvgig.com/" target="_blank" rel="noreferrer">
          pvgig
        </a>
      </h1>
    </div>
  );
};

export default Footer;
