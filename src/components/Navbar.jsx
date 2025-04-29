import React from "react";
import './css/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">Sobre</a></li>
      <li><a href="#team">Quem somos</a></li>
    </ul>
  </nav>
  );
}

export default Navbar;