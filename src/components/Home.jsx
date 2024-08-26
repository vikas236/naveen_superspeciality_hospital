// src/components/Home.js
import React from "react";
import "../css/home.css";
import string_shape from "../images/string_shape.png";
import handwash_image from "../images/handwash_image.png";
import filler from "../images/filler.jpg";
import partner_logo from "../images/logo_filler.png";
import nasob12 from "../images/nasob12.png";
import ferrous from "../images/ferrous.png";
import paper_clip from "../images/paper_clip.jpg";
import hair from "../images/hair_follicle.svg";
import tooth from "../images/tooth.svg";
import gradient_filler from "../images/gradient_filler.jpg";
import gradient_filler0 from "../images/gradient_filler0.jpg";
import operating_doctor from "../images/operating_doctor.jpg";
import arrow from "../images/arrow.svg";
import model from "../images/hair_model.jpeg";
import male_doctor from "../images/male_doctor.jpg";
import female_doctor from "../images/female_doctor.jpg";
import certified from "../images/certified.png";
import certified0 from "../images/certified0.jpg";
import certified1 from "../images/certified1.jpg";
import certified2 from "../images/certified2.png";
import certified3 from "../images/certified3.jpg";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <PartnerLogos />
      <Message0 />
      <Experiences />
      <ScrollingText />
      <OurServices />
      <Tests />
      <Events />
      <Doctors />
    </div>
  );
};

function HeroSection() {
  return (
    <div className="hero">
      <div className="box a">
        <h1>
          Your trusted center for <span>aesthetic excellence</span>
        </h1>
        <p>
          Experience a realm of specialized care where your transformation is
          our priority. At Meca, we're committed to delivering tailored
          aesthetic and dental services
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
        <h1>Aesthetic care</h1>
        <button>
          <i className="bx bx-right-arrow-alt"></i>Book a consultation
        </button>
      </div>
      <div className="box c">
        <img src={nasob12} alt="medicine container" />
        <img src={string_shape} className="string_shape" alt="string shape" />
      </div>
      <div className="box d">
        <img src={handwash_image} alt="" />
      </div>
      <div className="box e">
        <img src={filler} alt="" />
        <div className="content">
          <p>
            Welcome to the hospital we are open from <b>10AM to 6PM</b>
          </p>
          <span>
            <i className="bx bxs-phone-call"></i>
            CALL: <a href="tel:9550937897">+91 95509 37897</a>
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
            <i className="bx bx-right-arrow-alt"></i>Shop now
          </button>
        </div>
        <img src={ferrous} alt="" />
      </div>
    </div>
  );
}

function PartnerLogos() {
  return (
    <div className="partner_logos">
      <span>CERTIFIED BY</span>
      <img className="partner" src={certified} alt="" />
      <img className="partner" src={certified0} alt="" />
      <img className="partner" src={certified1} alt="" />
      <img className="partner" src={certified2} alt="" />
      <img className="partner" src={certified3} alt="" />
    </div>
  );
}

function Message0() {
  return (
    <div className="message">
      <span>Your are our top priority</span>
      <p>
        Our track record speaks for itself. Many individuals have chosen{" "}
        <span>
          our medical center and have had positive, transformative experiences.
        </span>
        <img src={paper_clip} alt="" />
      </p>
    </div>
  );
}

function Experiences() {
  return (
    <div className="experiences">
      <div className="item a">
        <img src={gradient_filler} alt="" />
      </div>
      <div className="item b">
        <i className="bx bxs-quote-right"></i>
        <p>
          "I had a great experience at this clinic. I was seen quickly, and the
          doctor was able to diagnose and treat my condition very patiently
        </p>
        <div className="identity">
          <div className="profile">
            <img src="" alt="" />
            <div className="content">
              <span className="username">victor hans</span>
              <span className="email">abs@gmail.com</span>
            </div>
          </div>
          <div className="arrow">
            <i className="bx bx-left-arrow-alt"></i>
            <i className="bx bx-right-arrow-alt"></i>
          </div>
        </div>
      </div>
      <div className="item c">
        <span>AVERAGE GOOGLE RATINGS</span>
        <div className="rating">
          <i className="bx bxs-star"></i>
          <span>4.9</span>
        </div>
      </div>
      <div className="item d">
        <img src={gradient_filler0} alt="" />
      </div>
      <div className="item e">
        <img src="" alt="" />
        <div className="content">
          <span>HOSPITAL COMPLIANT</span>
          <p>We provide the best quality care</p>
          <button>
            <i className="bx bx-right-arrow-alt"></i>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

function ScrollingText() {
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".scrolling_text .wrapper");
    const text = document.createElement("span");
    text.className = "text";
    text.innerHTML = `
        <span className="text">
          We Are Your Trusted Friend
          <span className="asterisk">*</span>
        </span>`;
    for (let i = 0; i < 10; i++) container.appendChild(text);
  });

  return (
    <div className="scrolling_text">
      <div className="wrapper"></div>
    </div>
  );
}

function OurServices() {
  return (
    <div className="our_services">
      <span className="sub_heading">OUR SERVICES</span>
      <h1>
        We Serve In Different <b>Areas For Our Patients</b>
      </h1>
      <div className="services">
        <div className="service">
          <i className="bx bxs-face"></i>
          <h2>Cosmetic</h2>
          <span>
            Your beauty, perfected by the expertise of our world-class trained
            surgeon
          </span>
          <button>
            <i className="bx bx-right-arrow-alt"></i> Read More
          </button>
        </div>
        <div className="service">
          <img src={hair} alt="" />
          <h2>Hair transplantation</h2>
          <span>
            Achieve natural-looking results with our advanced hair
            transplantation techniques
          </span>
          <button>
            <i className="bx bx-right-arrow-alt"></i> Read More
          </button>
        </div>
        <div className="service">
          <img src={tooth} alt="" />
          <h2>Cosmetic Surgery</h2>
          <span>
            Your beauty, perfected by the expertise of our world-class trained
            surgeon
          </span>
          <button>
            <i className="bx bx-right-arrow-alt"></i> Read More
          </button>
        </div>
      </div>
    </div>
  );
}

function Tests() {
  return (
    <div className="treatments">
      <div className="doctor">
        <img src={operating_doctor} alt="" />
        <div className="doctor_award">
          <i className="bx bxs-award"></i>
          <div className="content">
            <h3>AWARD NAME</h3>
            <p>
              Award for a certain reason, consistency, precision, in profession
            </p>
          </div>
          <i className="bx bx-right-arrow-alt"></i>
        </div>
      </div>
      <div className="content">
        <span className="sub_heading">TREATMENTS</span>
        <h2>
          Elevate Your Confidence with{" "}
          <b>
            Expert Cosmetic Surgery, Advanced Hair Restoration, and Precision
            Dental Care
          </b>
        </h2>
        <div className="treatments_slider">
          <div className="wrapper">
            <div className="item">
              <img src={arrow} alt="" className="arrow" />
              <span>hair treatments</span>
              <p>
                trichoscope analysis & examination, prp theraphy, prp therapy
                with biotin, gfc, or 678, microneedling, lllt (laser), laser
                hair removal, micropigmentation, microblading, hair transplant
                (FUE), laser hair design, asesthetic facial surgeries, facial
                bone fractoures, maxillofacial tumors
              </p>
              <button>explore</button>
            </div>
            <div className="item">
              <span>cosmetic surgeries</span>
            </div>
            <div className="item">
              <span>dentistry</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="events">
      <div className="banner">
        <div className="content">
          <span className="sub_heading">JOIN EVENT</span>
          <h2>
            Take <b>better care for your hair</b>
          </h2>
          <p>Experience dedicated care that brings out the best in your hair</p>
          <button>
            <i className="bx bx-right-arrow-alt"></i>
            Join Event
          </button>
        </div>
        <img src={model} alt="" />
        <i className="bx bx-plus"></i>
        <i className="bx bx-plus"></i>
        <div className="circle"></div>
        <div className="square"></div>
      </div>
    </div>
  );
}

function Doctors() {
  return (
    <div className="doctors">
      <span className="sub_heading">DOCTORS</span>
      <h1>
        Our <b>Expert Doctors</b>
        <div className="list">
          <div className="doctor">
            <img src={male_doctor} alt="" />
            <span className="name">Doctor Name</span>
            <span className="designation">Doctor Designation</span>
            <button>
              <i className="bx bx-right-arrow-alt"></i>
              Book An Appointment
            </button>
          </div>
          <div className="doctor">
            <img src={female_doctor} alt="" />
            <span className="name">Doctor Name</span>
            <span className="designation">Doctor Designation</span>
            <button>
              <i className="bx bx-right-arrow-alt"></i>
              Book An Appointment
            </button>
          </div>
        </div>
      </h1>
    </div>
  );
}

export default Home;
