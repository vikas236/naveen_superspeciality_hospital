import React from "react";
import "../css/home.css";
import string_shape from "../images/string_shape.png";
import paper_clip from "../images/paper_clip.jpg";
import hair from "../images/hair_follicle.svg";
import hair0 from "../images/hair0.svg";
import tmj_icon from "../images/tmj/tmj_icon.svg";
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
import maxilla from "../images/tmj/maxilla.jpg";
import jaw from "../images/tmj/jaw.jpg";
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
import step_1 from "../images/sterilization/step_1.png";
import step_2 from "../images/sterilization/step_2.png";
import step_3 from "../images/sterilization/step_3.png";
import step_4 from "../images/sterilization/step_4.png";
import hair_loss from "../images/home/hair_loss.png";
import female_hair from "../images/home/types0.png";
import male_hair from "../images/home/types1.png";

let page_address;
const serverUrl = "https://dr-naveen-server.vercel.app";
// const serverUrl = "http://localhost:3001";

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
  async function addGalleryImages() {
    try {
      // Send GET request to the /gallery endpoint
      const response = await fetch(`${serverUrl}/gallery`);

      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      // Parse the JSON response
      const data = await response.json();

      // Display the gallery
      galleryRotation(data);
    } catch (error) {
      console.error("Error fetching gallery:", error);
    }
  }

  document.addEventListener("DOMContentLoaded", addGalleryImages);

  function galleryRotation(arr) {
    const galleryDiv = document.querySelector(".hero .box.d");

    galleryDiv.childNodes[0].src = arr[0].image_data;
    function showImage() {
      const randomNumber = getRandomInt(0, arr.length - 1);
      galleryDiv.childNodes[0].src = arr[randomNumber].image_data;
    }

    setInterval(() => {
      showImage();
    }, 12500);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

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
        <a href="/hairtransplantation">
          <button>
            <i className="bx bx-right-arrow-alt"></i>Learn More
          </button>
        </a>
      </div>
      <div className="box b">
        <h1>Are you suffering from hair loss</h1>
        <img src={hair_loss} alt="" />
      </div>
      <div className="box c">
        <h1>Fue Hair Transplant</h1>
        <img src={string_shape} className="string_shape" alt="string shape" />
        <img src={before_fue} alt="" />
        <img src={after_fue} alt="" />
      </div>
      <div className="box d">
        <img src={jaw} alt="" />
      </div>
      <div className="box e">
        <div className="content">
          <p>
            Call for <b>Expert Hair Transplant Advice</b>
          </p>
          <a href="tel:9550937897" rel="noreferrer" target="_blank">
            <span>
              <i className="bx bxs-phone-call"></i>
              CALL: +91 95509 37897
            </span>
          </a>
          <a
            href="https://maps.app.goo.gl/yYvfk4CP2q6CH6bcA"
            className="not_number"
            rel="noreferrer"
            target="_blank"
          >
            <i className="bx bx-current-location"></i>
            Visit: 5-4-76/6, gokhale street, College Rd, Amalapuram, Andhra
            Pradesh 533201 (behind fashion factory)
          </a>
          <div className="hours">
            <i className="bx bx-time-five"></i>
            Hours: Mon - Sat, 10am - 8pm
          </div>
          <div className="hours">Hours: Sun, 10am - 2pm</div>
        </div>
      </div>
      <div className="box f">
        <img src={female_hair} alt="" />
        <img src={male_hair} alt="" />
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
    updateAddress();
    if (
      page_address === "" ||
      page_address === "home" ||
      page_address === "#sterilization"
    ) {
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
  }

  function reviewRight() {
    updateAddress();
    if (
      page_address === "" ||
      page_address === "home" ||
      page_address === "#sterilization"
    ) {
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
  }

  function stringAnimate(string, container, parent) {
    updateAddress();
    if (
      page_address === "" ||
      page_address === "home" ||
      page_address === "#sterilization"
    ) {
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
  }

  function moveInterior(dot) {
    updateAddress();
    if (
      page_address === "" ||
      page_address === "home" ||
      page_address === "#sterilization"
    ) {
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
  }

  function automoveInterior() {
    updateAddress();
    if (
      page_address === "" ||
      page_address === "home" ||
      page_address === "#sterilization"
    ) {
      const dots = document.querySelectorAll(".interior .dot");

      setTimeout(automoveInterior, 5500);
      if (image_no < 2 && gallery_direction === 0) dots[++image_no].click();
      else if (image_no > 0 && gallery_direction === 1)
        dots[--image_no].click();
      else if (image_no === 0) gallery_direction = 0;
      else if (image_no === 2) gallery_direction = 1;
    }
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

  setTimeout(() => {
    const dots = document.querySelectorAll(".interior .dot");
    moveInterior(dots[0]);
    automoveInterior();
    automoveReviews();
  }, 250);

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
              (USA) usage
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
          <a href="#sterilization">
            <button>
              <i className="bx bx-right-arrow-alt"></i>
              Learn More
            </button>
          </a>
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
  setTimeout(() => {
    const container = document.querySelector(".scrolling_text .wrapper");
    const text = document.createElement("span");
    text.className = "text";
    text.innerHTML = `
        <span className="text">
          We Are Your Trusted Friend
          <span className="asterisk">*</span>
        </span>`;
    for (let i = 0; i < 10; i++) container.appendChild(text);
  }, 250);

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
          <a href="/hairtransplantation">
            <button>
              <i className="bx bx-right-arrow-alt"></i> Read More
            </button>
          </a>
        </div>
        <div className="service">
          <img src={hair0} alt="" className="hair0" />
          <h2>Non Surgical Medical Hair Loss Treatment</h2>
          <span>
            Restore your hair's natural fullness with our advanced non-surgical
            treatments
          </span>
          <a href="/nonsurgicalhair">
            <button>
              <i className="bx bx-right-arrow-alt"></i> Read More
            </button>
          </a>
        </div>
        <div className="service">
          <img src={tmj_icon} alt="" />
          <h2>Maxillofacial Surgery and tmj</h2>
          <span>
            Restoring facial harmony and enhancing jaw function with dedicated
            expert care
          </span>
          <a href="/facialtrauma">
            <button>
              <i className="bx bx-right-arrow-alt"></i> Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

function Tests() {
  let treatment_no = 0;

  function moveBox() {
    updateAddress();
    if (
      page_address === "" ||
      page_address === "home" ||
      page_address === "#sterilization"
    ) {
      const dots = document.querySelectorAll(".tests .dot");
      const container = document.querySelector(".tests_slider .wrapper");

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
  }

  function autoMoveTreatments() {
    updateAddress();
    if (
      page_address === "" ||
      page_address === "home" ||
      page_address === "#sterilization"
    ) {
      const dots = document.querySelectorAll(".tests .dot");

      setTimeout(autoMoveTreatments, 10500);
      if (treatment_no === 3) treatment_no = 0;
      if (treatment_no === 0 || dots[treatment_no].classList.contains("active"))
        dots[++treatment_no].click();
    }
  }

  setTimeout(() => {
    moveBox();
    setTimeout(autoMoveTreatments, 1000);
  }, 250);

  return (
    <div className="tests">
      <div className="doctor">
        <img src={operating_doctor} alt="" />
        <div className="doctor_award">
          <i className="bx bxs-award"></i>
          <div className="content">
            <h3>Dr Naveen Sayani</h3>
            <span>certified</span>
            <p>Hair Transplant Surgeon, Facial Trauma Surgeon</p>
          </div>
          <a href="/about">
            <i className="bx bx-right-arrow-alt"></i>
          </a>
        </div>
      </div>
      <div className="content">
        <span className="sub_heading">TREATMENTS</span>
        <h2>
          Elevate Your Confidence with{" "}
          <b>
            Expert Cosmetic Surgery, Advanced Hair Restoration, and
            Maxillofacial Care
          </b>
        </h2>
        <div className="tests_slider">
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
              <a href="hairtransplantation">
                <button>explore</button>
              </a>
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
              <a href="/nonsurgicalhair">
                <button>explore</button>
              </a>
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
              </ul>
              <a href="/hairtransplantation">
                <button>explore</button>
              </a>
            </div>
            <div className="item">
              <img src={arrow} alt="" className="arrow" />
              <span>Maxillofacial Care</span>
              <ul>
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
              <a href="/dentistry">
                <button>explore</button>
              </a>
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
    <div className="events" id="sterilization">
      <div className="banner">
        <h2>Our Comprehensive Sterilization Process</h2>
        <p>
          At naveenhfc (Naveen Superspeciality Dental, Hair, and Face Hospital),
          we are committed to upholding the highest standards of healthcare
          excellence, ensuring full compliance with all industry regulations and
          best practices to provide safe and effective treatments to our
          patients.
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
            <a href="tel: +91 9550937897">
              <button>
                <i className="bx bx-right-arrow-alt"></i>
                Book An Appointment
              </button>
            </a>
          </div>
        </div>
      </h1>
    </div>
  );
}

function updateAddress() {
  page_address = window.location.href;
  page_address = page_address
    .replace("http://localhost:3000/", "")
    .replace("https://www.naveenhfc.com/", "");
  page_address = page_address.replace(
    "https://naveen-superspeciality-hospital.vercel.app/",
    ""
  );
}

export default Home;
