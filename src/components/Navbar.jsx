import React from "react";
import { Link, useLocation } from "react-router-dom";
import './css/navbar.css';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/quem-somos">Quem somos</Link></li>
        <li><Link to="/flowpage">Sobre</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
