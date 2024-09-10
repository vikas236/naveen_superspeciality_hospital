import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer0";
import Treatments from "./components/Treatments";
import Fue from "./components/Fue_Transplant";
import NonSurgical from "./components/Non_Surgical";
import MaleHairLoss from "./components/MaleHairLoss";
import FemaleHairLoss from "./components/FemaleHairLoss";
import EyeBrowHairLoss from "./components/EyeBrowHairLoss";
import BeardHairLoss from "./components/BeardHairLoss";
import FacialTrauma from "./components/FacialTrauma";
import Tmj from "./components/Tmj";
import Dentistry from "./components/Dentistry";
import NotFound from "./components/NotFound";
import Preloading from "./components/Preloading";

function App() {
  function RouteHandler() {
    const location = useLocation();

    useEffect(() => {
      const preloading = document.querySelector(".preloading");
      const body = document.querySelector("body");

      preloading.classList.remove("inactive");
      body.style.overflow = "hidden";

      setTimeout(() => {
        preloading.classList.add("inactive");
        body.style.overflow = "scroll";
      }, 1000);
    }, [location]);

    return;
  }

  return (
    <Router>
      <Nav />
      <Preloading />
      <RouteHandler />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/hairtransplantation" Component={Treatments} />
        <Route exact path="/fuetransplant" Component={Fue} />
        <Route exact path="/nonsurgicalhair" Component={NonSurgical} />
        <Route exact path="/malehairloss" Component={MaleHairLoss} />
        <Route exact path="/femalehairloss" Component={FemaleHairLoss} />
        <Route exact path="/eyebrowhairloss" Component={EyeBrowHairLoss} />
        <Route exact path="/beardhairloss" Component={BeardHairLoss} />
        <Route exact path="/facialtrauma" Component={FacialTrauma} />
        <Route exact path="/tmjtreatment" Component={Tmj} />
        <Route exact path="/dentistry" Component={Dentistry} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
