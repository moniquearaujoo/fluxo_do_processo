import React from "react";
import Header from "../components/Header";
import Team from "../components/Team";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="landing-container">
      <Navbar />
      <Header />  
      <Team />
    </div>
  );
}

export default LandingPage;
