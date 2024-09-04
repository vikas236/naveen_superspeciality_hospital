import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer0";
import Treatments from "./components/Treatments";
import Fue from "./components/Fue_Transplant";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/treatments" Component={Treatments} />
        <Route exact path="/fue" Component={Fue} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
