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
          <h1>Community</h1>
          <div className="list">
            <a href="/Doctors">Doctors</a>
            <a href="/Testimonials">Testimonials</a>
            <a href="/FAQs">FAQs</a>
            <a href="/Blog">Blog</a>
            <a href="/Site Map">Site Map</a>
          </div>
        </div>
        <div className="column">
          <h1>About</h1>
          <div className="list">
            <a href="/Careers">Careers</a>
            <a href="/Education">Education</a>
            <a href="/about">About Us</a>
            <a href="/Areas Of Care">Areas Of Care</a>
            <a href="/Volunteers">Volunteers</a>
          </div>
        </div>
        <div className="column">
          <h1>Support</h1>
          <div className="list">
            {/* <a href="/Visitor Information">Visitor Information</a>
            <a href="/Emergency Care">Emergency Care</a> */}
            <a href="/Donate">Donate</a>
            <a href="/Online Services">Online Services</a>
            <a href="/Pay Your Bills">Pay Your Bills</a>
            <div className="social_media" target="_blank">
              <a href="https://www.instagram.com/naveen_hair_and_face_clinic?utm_source=qr">
                <i className="bx bxl-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/people/Naveen-Hair-and-Face-clinic/100083928652875/?mibextid=LQQJ4d&rdid=byLkgpyUHGhqGBZ3&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FCWiZrUZxrmjZFkFp%2F%3Fmibextid%3DLQQJ4d"
                target="_blank"
              >
                <i className="bx bxl-facebook-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="disclaimer">
        <b>© Naveen Hospital</b> All Rights Reserved by{" "}
        <a href="https://www.pvgig.com/" target="_blank">
          pvgig
        </a>
      </h1>
    </div>
  );
};

export default Footer;
