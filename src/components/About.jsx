import "../css/about.css";
import banner_img from "../images/about/about_banner.jpg";
import doctor1 from "../images/about/doctor1.jpg";
import box_corner from "../images/about/box_corner.png";
import interior0 from "../images/doctors_door.jpeg";
import interior1 from "../images/dentistry_and_corridor.jpg";
import doctor from "../images/about/staff.jpeg";

const About = () => {
  return (
    <div className="about">
      <Banner />
      <AboutHospital />
      <Points />
      <MoreAbout />
    </div>
  );

  function Banner() {
    return (
      <div className="banner">
        <div className="banner_img">
          <img src={banner_img} alt="" />
        </div>
        <div className="content">
          <div className="left">
            <h1>About Us</h1>
            <span>
              <b>Home</b> &gt; About Us
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

  function AboutHospital() {
    return (
      <div className="about_hospital">
        <div className="left">
          <img src={doctor1} alt="" />
          <div className="numbers a">
            <div className="wrapper">
              <div className="content">
                <b>11+</b>DIFFERENT SECTIONS
              </div>
            </div>
            <img src={box_corner} alt="" className="corner a" />
            <img src={box_corner} alt="" className="corner b" />
            <div className="corner b"></div>
          </div>
          <div className="numbers b">
            <div className="wrapper">
              <div className="content">
                <b>2k+</b>RECIPIENTS
              </div>
            </div>
            <img src={box_corner} alt="" className="corner c" />
            <img src={box_corner} alt="" className="corner d" />
          </div>
        </div>
        <div className="right">
          <span className="sub_heading">ABOUT HOSPITAL</span>
          <h1>
            We Provide Finest Patient's <b>Care & Amenities</b>
          </h1>
          <p>
            Embrace a world of comprehensive healthcare where your well-being
            takes center stage. At naveenhfc (Naveen Super Speciality Hospital), we're
            dedicated to providing you with personalized and compassionate
            medical services.
          </p>
          <ul>
            <li>
              <i className="bx bx-check-double"></i>Seamless Care
            </li>
            <li>
              <i className="bx bx-check-double"></i>Warm and Welcoming
              Environment
            </li>
            <li>
              <i className="bx bx-check-double"></i>Comprehensive Care
            </li>
            <li>
              <i className="bx bx-check-double"></i>Expert Doctors
            </li>
            <li>
              <i className="bx bx-check-double"></i>Patient-Centered Care
            </li>
            <li>
              <i className="bx bx-check-double"></i>Personalized Approach
            </li>
            <li>
              <i className="bx bx-check-double"></i>Cutting-Edge Technology
            </li>
            <li>
              <i className="bx bx-check-double"></i>Positive Reviews
            </li>
          </ul>
          <p>
            At naveenhfc (Naveen Super Speciality Hospital), we combine modern care with
            compassion for a seamless, positive experience.
          </p>
        </div>
      </div>
    );
  }

  function Points() {
    return (
      <div className="features">
        <div className="feature">
          <i className="bx bx-shield"></i>
          <h2>OUR MISSION</h2>
          <p>
            Our mission is to care for our patients and their families when it
            matters most.
          </p>
        </div>
        <div className="feature">
          <i className="bx bxs-binoculars"></i>
          <h2>OUR VISION</h2>
          <p>Our vision is to invent the future of health care technologies.</p>
        </div>
        <div className="feature">
          <i className="bx bx-heart"></i>
          <h2>OUR VALUES</h2>
          <p>
            Our values are: excellence, collaboration, accountability, respect
            and engagement.
          </p>
        </div>
      </div>
    );
  }

  function MoreAbout() {
    return (
      <div className="more_about">
        <div className="left">
          <img src={interior0} alt="" />
        </div>
        <div className="right">
          <div className="sub_heading">MORE ABOUT US</div>
          <h1>
            We Are A Clinic, <b>Provide Excellence</b> In Personalized Care
          </h1>
          <p>
            We are a private, independent practice constantly striving to
            provide excellence in personalized, compassionate care that is
            consistent, quality-driven and choice-conscious for all of our
            patients.
          </p>
          <div className="image">
            <img src={interior1} alt="" />
            <img src={doctor} alt="" />
            <div className="content">
              <p>
                We embrace advances in learning and technology to deliver
                efficient, high-quality patient care. Our experienced doctors
                continually update their skills to stay current with the latest
                medical treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;
