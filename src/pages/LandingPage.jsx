import React from "react";
import FlowHome from "../components/FlowHome";
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
      <FlowHome />
      <Team />
    </div>
  );
}

export default LandingPage;
