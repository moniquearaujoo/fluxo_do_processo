import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import FlowHome from "../components/FlowHome";

function FlowPage() {
  return (
    <div className="flowpage-container">
      <Navbar />
      <About />
      <FlowHome />
    </div>
  );
}

export default FlowPage;
