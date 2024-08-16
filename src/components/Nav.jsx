import { Link } from "react-router-dom";
import "../css/nav.css";
import Logo from "../images/logo1.png";

function Nav() {
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav .link");

    links.forEach((l) => {
      l.addEventListener("click", () => {
        links.forEach((e) => e.classList.remove("active"));

        l.classList.add("active");
      });
    });
  });

  return (
    <nav>
      <Nav0 />
      <Nav1 />
    </nav>
  );
}

function Nav0() {
  return (
    <div className="nav0">
      <img
        src={Logo}
        className="logo"
        alt="naveen superspeciality hospital logo"
      />
      <Ham />
      <div className="nav_wall"></div>
    </div>
  );
}

function Nav1() {
  return (
    <div className="nav1">
      <div className="nav_wall"></div>
      <div className="wrapper">
        <div className="left">
          <Link to="/" className="logo">
            <img src={Logo} alt="naveen superspeciality hospital logo" />
          </Link>
          <NavLinks />
        </div>
        <button>Book an Appointment</button>
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <ul>
      <li>
        <Link to="/" className="link active">
          <i className="bx bxs-grid-alt"></i>
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link">
          <i className="bx bx-info-circle"></i>
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="link">
          <i className="bx bxs-contact"></i>
          Contact
        </Link>
      </li>
    </ul>
  );
}

function Ham() {
  let ham, sidebar, logo, wall;

  function hamAnimation() {
    if (!ham.classList.contains("active")) showSidebar();
    else closeSidebar();
  }

  function wallAnimation() {
    ham = document.querySelector(".ham");
    sidebar = document.querySelector("nav .nav1");
    logo = document.querySelector("nav .nav0 img");
    wall = document.querySelector("nav .nav_wall");

    wall.addEventListener("click", () => closeSidebar());
  }
  setTimeout(() => {
    document.addEventListener("DOMContentLoaded", wallAnimation());
  }, 25);

  function showSidebar() {
    ham.classList.add("active");
    sidebar.classList.add("active");
    logo.classList.add("inactive");
    wall.classList.add("active");
  }

  function closeSidebar() {
    ham.classList.remove("active");
    sidebar.classList.remove("active");
    logo.classList.remove("inactive");
    wall.classList.remove("active");
  }

  return (
    <div onClick={hamAnimation} className="ham">
      <div className="bar"></div>
    </div>
  );
}

export default Nav;
