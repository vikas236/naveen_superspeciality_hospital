import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/" Component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
