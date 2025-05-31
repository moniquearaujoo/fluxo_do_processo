import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="landing-container">
      <Navbar />
      <Header />
      <About />       
    </div>
  );
}

export default LandingPage;
