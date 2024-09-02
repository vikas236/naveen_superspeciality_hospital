import React from "react";
import "../css/home.css";
import string_shape from "../images/string_shape.png";
import paper_clip from "../images/paper_clip.jpg";
import hair from "../images/hair_follicle.svg";
import hair0 from "../images/hair0.svg";
import tooth from "../images/tooth.svg";
import operating_doctor from "../images/operating_doctor.jpg";
import arrow from "../images/arrow.svg";
import male_doctor from "../images/male_doctor.jpg";
import female_doctor from "../images/female_doctor.jpg";
import certified from "../images/certified.png";
import certified0 from "../images/certified0.jpg";
import certified1 from "../images/certified1.png";
import certified2 from "../images/certified2.png";
import certified3 from "../images/certified3.jpg";
import smile from "../images/wide_smile.webp";
import before_fue from "../images/before_fue_transplant_nobg.png";
import after_fue from "../images/after_fue_transplant_nobg.png";
import user_image from "../images/user.png";
import user_image0 from "../images/user0.png";
import user_image1 from "../images/user1.png";
import user_image2 from "../images/user2.png";
import interior from "../images/operating_room.jpg";
import interior0 from "../images/dentistry.jpg";
import interior1 from "../images/dentistry_and_corridor.jpg";
import letter_n from "../images/letter_n.jpg";
import n_circle from "../images/n_circle.png";
import step_1 from "../images/sterilization/step_1.jpg";
import step_2 from "../images/sterilization/step_2.jpg";
import step_3 from "../images/sterilization/step_3.jpg";
import step_4 from "../images/sterilization/step_4.jpg";

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
          Your trusted center for <span>hair transplantation</span>
        </h1>
        <p>
          Expert hair transplants for natural results. Regain confidence with
          personalized care and advanced techniques
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
        <h1>Why Us</h1>
        <ul className="advantages">
          <li>
            <i className="bx bxs-badge-check"></i>certified maxillofacial
            surgeon
          </li>
          <li>
            <i className="bx bxs-badge-check"></i>90% graft survival rate
          </li>
          <li>
            <i className="bx bxs-badge-check"></i>Experience exceptional hair
            transplantation, following the highest international protocols for
            safety and precision
          </li>
          <li>
            <i className="bx bxs-badge-check"></i>certified cole instruments
            (usa) usage
          </li>
        </ul>
        <button>
          <i className="bx bx-right-arrow-alt"></i>Book a consultation
        </button>
      </div>
      <div className="box c">
        <h1>Fue Hair Transplant</h1>
        <img src={string_shape} className="string_shape" alt="string shape" />
        <img src={before_fue} alt="" />
        <img src={after_fue} alt="" />
      </div>
      <div className="box d">
        <img src={smile} alt="" />
        <h1>creating beautiful smiles everyday</h1>
        <span>DR.Naveen's Dental Clinic</span>
      </div>
      <div className="box e">
        <div className="content">
          <p>
            Call for <b>Expert Hair Transplant Advice</b>
          </p>
          <span>
            <i className="bx bxs-phone-call"></i>
            CALL: <a href="tel:9550937897">+91 95509 37897</a>
          </span>
          <p>
            Call us for your dental care <b>at</b>
          </p>
          <span>
            <i className="bx bxs-phone-call"></i>
            CALL: <a href="tel:6309737897">+91 63097 37897</a>
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
  const data = [
    [
      "Venu madhav Sayani",
      "The best hair transplant clinic in amalapuram with economical prices",
      user_image2,
    ],
    [
      "santosh kumar",
      "The over all experience is good, the staff are polite and treatment is affordable",
      user_image,
    ],
    [
      "Yashwanth Sai",
      "Naveen is a nice doctor! The one who understands and listens to what you're saying. I've a good experience with him. Definitely recommended!",
      user_image0,
    ],
    [
      "revathi aparna polisetty",
      "One of the best dental clinic in amalapuram, doctor was very much experienced and politeNice Clinic very good treatment",
      user_image1,
    ],
  ];
  let review_no = 0;
  let image_no = 0;
  let gallery_direction = 0;
  let reviews_direction = 0;

  function reviewLeft() {
    const reviews = document.querySelector(".reviews");

    if (review_no < 3 && !reviews.classList.contains("loading")) {
      review_no++;
      const username = document.querySelector(".reviews .username");
      const string = document.querySelector(".reviews .r p");
      const img = document.querySelector(".reviews .r img");

      username.innerHTML = data[review_no][0];
      stringAnimate(data[review_no][1], string, reviews);
      img.src = data[review_no][2];
    }
  }

  function reviewRight() {
    const reviews = document.querySelector(".reviews");

    if (review_no > 0 && !reviews.classList.contains("loading")) {
      review_no--;
      const username = document.querySelector(".reviews .username");
      const string = document.querySelector(".reviews .r p");
      const img = document.querySelector(".reviews .r img");

      img.src = data[review_no][2];
      username.innerHTML = data[review_no][0];
      stringAnimate(data[review_no][1], string, reviews);
      img.src = data[review_no][2];
    }
  }

  function stringAnimate(string, container, parent) {
    parent.classList.add("loading");
    for (let i = 0; i <= string.length; i++) {
      setTimeout(() => {
        container.innerHTML = '"' + string.substr(0, i);
      }, i * 15);
    }
    setTimeout(() => {
      parent.classList.remove("loading");
    }, string.length * 17);
  }

  function moveInterior(dot) {
    const dots = document.querySelectorAll(".interior .dot");
    const container = document.querySelector(".interior .interior_wrapper");

    dots.forEach((e) => e.classList.remove("active"));
    dot.classList.add("active");

    dots.forEach((e, i) => {
      if (e.classList.contains("active")) {
        image_no = i;
      }
    });

    container.style.left = "-" + image_no * 100 + "%";
  }

  function automoveInterior() {
    const dots = document.querySelectorAll(".interior .dot");

    setTimeout(automoveInterior, 5500);
    if (image_no < 2 && gallery_direction === 0) dots[++image_no].click();
    else if (image_no > 0 && gallery_direction === 1) dots[--image_no].click();
    else if (image_no === 0) gallery_direction = 0;
    else if (image_no === 2) gallery_direction = 1;
  }

  function automoveReviews() {
    setTimeout(automoveReviews, 7000);
    setTimeout(() => {
      if (review_no < 3 && reviews_direction === 0) reviewLeft();
      else if (review_no > 0 && reviews_direction === 1) reviewRight();
      else if (review_no === 0) reviews_direction = 0;
      else if (review_no === 3) reviews_direction = 1;
    }, 3500);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const dots = document.querySelectorAll(".interior .dot");
    moveInterior(dots[0]);
    automoveInterior();
    automoveReviews();
  });

  return (
    <div className="experiences">
      <div className="item a">
        <div className="content">
          <h1>Why Choose Us</h1>
          <ul className="advantages">
            <li>
              <i className="bx bxs-badge-check"></i>certified maxillofacial
              surgeon
            </li>
            <li>
              <i className="bx bxs-badge-check"></i>90% graft survival rate
            </li>
            <li>
              <i className="bx bxs-badge-check"></i>Experience exceptional hair
              transplantation, following the highest international protocols for
              safety and precision
            </li>
            <li>
              <i className="bx bxs-badge-check"></i>certified cole instruments
              (usa) usage
            </li>
          </ul>
        </div>
      </div>
      <div className="item b">
        <div className="reviews">
          <div className="reviews_wrapper">
            <UserReview
              username="santosh kumar"
              review="The over all experience is good, the staff are polite and treatment is affordable"
              image_url={user_image2}
            />
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
        <div className="interior">
          <div className="interior_wrapper">
            <img src={interior} alt="" />
            <img src={interior0} alt="" />
            <img src={interior1} alt="" />
          </div>
          <div className="dots">
            <div className="dot" onClick={(e) => moveInterior(e.target)}></div>
            <div className="dot" onClick={(e) => moveInterior(e.target)}></div>
            <div className="dot" onClick={(e) => moveInterior(e.target)}></div>
          </div>
        </div>
      </div>
      <div className="item e">
        <div className="logo_small">
          <img src={letter_n} alt="" />
          <img src={n_circle} alt="" />
        </div>
        <div className="content">
          <span>HOSPITAL COMPLIANT</span>
          <p>Ensuring safe, compliant care for all</p>
          <button>
            <i className="bx bx-right-arrow-alt"></i>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );

  function UserReview({ username, review, image_url }) {
    return (
      <div className="r">
        <i className="bx bxs-quote-right"></i>
        <p>"{review}</p>
        <div className="identity">
          <div className="profile">
            <img src={image_url} alt="" />
            <div className="content">
              <span className="username">{username}</span>
              <div className="stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
            </div>
          </div>
          <div className="arrow">
            <i className="bx bx-left-arrow-alt" onClick={reviewRight}></i>
            <i className="bx bx-right-arrow-alt" onClick={reviewLeft}></i>
          </div>
        </div>
      </div>
    );
  }
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
          <img src={hair0} alt="" className="hair0" />
          <h2>Non Surgical Medical Hair Loss Treatment</h2>
          <span>
            Restore your hair's natural fullness with our advanced non-surgical
            treatments
          </span>
          <button>
            <i className="bx bx-right-arrow-alt"></i> Read More
          </button>
        </div>
        <div className="service">
          <img src={tooth} alt="" />
          <h2>Cosmetic Dentistry</h2>
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
  let treatment_no = 0;

  function moveBox() {
    const dots = document.querySelectorAll(".treatments .dot");
    const container = document.querySelector(".treatments_slider .wrapper");

    dots.forEach((e, i) => {
      e.addEventListener("click", () => {
        if (treatment_no !== i) {
          dots.forEach((e) => e.classList.remove("active"));
          e.classList.add("active");
          container.style.left = "-" + i * 100 + "%";
          treatment_no = i;
        }
      });
    });
  }

  function autoMoveTreatments() {
    const dots = document.querySelectorAll(".treatments .dot");

    setTimeout(autoMoveTreatments, 10500);
    if (treatment_no === 3) treatment_no = 0;
    if (treatment_no === 0 || dots[treatment_no].classList.contains("active"))
      dots[++treatment_no].click();
  }

  document.addEventListener("DOMContentLoaded", () => {
    moveBox();
    setTimeout(autoMoveTreatments, 1000);
  });

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
              <span>hair and scalp analysis</span>
              <ul>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>trichoscope analysis & examination</span>
                </li>
              </ul>
              <button>explore</button>
            </div>
            <div className="item">
              <img src={arrow} alt="" className="arrow" />
              <span>non surgical medical hair treatments</span>
              <ul>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>prp theraphy</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> prp therapy with biotin</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> gfc or 678</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> microneedling</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> lllt (laser)</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> laser hair removal</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>micropigmentation</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> microblading</span>
                </li>
              </ul>
              <button>explore</button>
            </div>
            <div className="item">
              <img src={arrow} alt="" className="arrow" />
              <span>Surgical hair treatments</span>
              <ul>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>hair transplant (FUE)</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> laser hair design</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>asesthetic facial surgeries</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>facial bone fractoures</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>maxillofacial tumors</span>
                </li>
              </ul>
              <button>explore</button>
            </div>
            <div className="item">
              <img src={arrow} alt="" className="arrow" />
              <span>Dentistry</span>
              <ul>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>Teeth Whitening</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> Smile Designing</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> Teeth Cleansing</span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span> Orthopedic Treatment </span>
                </li>
                <li>
                  <i className="bx bx-right-arrow-alt"></i>
                  <span>Dental Implants</span>
                </li>
              </ul>
              <button>explore</button>
            </div>
          </div>
        </div>
        <div className="dots">
          <div className="dot active"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
}

function Events() {
  return (
    <div className="events">
      <div className="banner">
        <h2>Our Comprehensive Sterilization Process</h2>
        <p>
          At Naveen Superspeciality Dental, Hair, and Face Hospital, we are
          committed to upholding the highest standards of healthcare excellence,
          ensuring full compliance with all industry regulations and best
          practices to provide safe and effective treatments to our patients.
        </p>
        <p>
          To demonstrate our unwavering commitment to asepsis, we open sealed
          and pouched sterile instruments in front of each patient. At Clove
          Dental, we take patient safety very seriously and will continue to
          strictly adhere to our sterilization protocols to provide the highest
          level of care possible.
        </p>
        <hr />
        <div className="steps">
          <div className="step">
            <img src={step_1} alt="" />
            <div className="content">
              <h2>Step - 1</h2>
              <p>
                Dipping in disinfectant solution for a minimum 30 minutes.
                Scrubbing &amp; cleaning in running water and cleansing solution
              </p>
            </div>
          </div>
          <div className="step">
            <img src={step_2} alt="" />
            <div className="content">
              <h2>Step - 2</h2>
              <p>
                Cleansed in an Ultrasonic cleaner chamber. Dried and packaged in
                separate Sealed pouches.
              </p>
            </div>
          </div>
          <div className="step">
            <img src={step_3} alt="" />
            <div className="content">
              <h2>Step - 3</h2>
              <p>
                Sterilized in ‘B-class’ Autoclave to ensure 100% sterilization
                following the sterilisation cycle.
              </p>
            </div>
          </div>
          <div className="step">
            <img src={step_4} alt="" />
            <div className="content">
              <h2>Step - 4</h2>
              <p>
                Stored in UV Light storage cabinets, in the sterilisation room
                to maintain sterility of instruments till they are used.
              </p>
            </div>
          </div>
        </div>
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
            <span className="name">Dr.Naveen Sayani</span>
            <span className="designation">Hair Transplant Surgeon</span>
            <span className="designation">Facial Trauma Surgeon</span>
            <button>
              <i className="bx bx-right-arrow-alt"></i>
              Book An Appointment
            </button>
          </div>
          <div className="doctor">
            <img src={female_doctor} alt="" />
            <span className="name">Dr.Gandham Sruthi</span>
            <span className="designation">Dentist</span>
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
