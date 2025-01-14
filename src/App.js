import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

// Import your page components
import Home from "./Home";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {/* Logo and Navigation */}
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <Link to="/" className="App-link">Home</Link>
            <Link to="/how-it-works" className="App-link">How It Works</Link>
            <Link to="/about-us" className="App-link">About Us</Link>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;