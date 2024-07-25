import { Link } from "react-router-dom";
import "../css/nav.css";
import Logo from "../images/logo.svg";

function Nav() {
  return (
    <nav>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="logo">
            <img src={Logo} alt="naveen superspeciality hospital logo" />
          </Link>
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <button>Book an Appointment</button>
        <Ham />
      </div>
    </nav>
  );
}

function Ham() {
  function hamAnimation() {
    const ham = document.querySelector(".ham");
    const links = document.querySelector("nav ul");

    ham.classList.toggle("active");
    if (ham.classList.contains("active")) links.classList.add("active");
    else links.classList.remove("active");
  }

  return (
    <div onClick={hamAnimation} className="ham">
      <div className="bar"></div>
    </div>
  );
}

export default Nav;
