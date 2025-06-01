import React from "react";
import { Link, useLocation } from "react-router-dom";
import './css/navbar.css';

function Navbar() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <nav className="navbar">
      <ul className="nav-links">
        {/* Sempre visível */}
        <li><Link to="/">Início</Link></li>

        {/* Só aparece na LandingPage */}
        {isLandingPage && (
          <>
            <li><Link to="/QuemSomos">Quem somos</Link></li>
          </>
          )}

        {/* Links de navegação para páginas */}
        <li><Link to="/flowpage">Sobre</Link></li>
        <li><Link to="/flow">Flow</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
