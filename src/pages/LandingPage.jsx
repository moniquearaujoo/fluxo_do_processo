import React from "react";
import Flow from "../components/Flow";
import Header from "../components/Header";
import About from "../components/About";
import Team from "../components/Team";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="landing-container">
      <Navbar />
      <Header />
      <About />
      <Flow />
      <Team />
    </div>
  );
}

export default LandingPage;
