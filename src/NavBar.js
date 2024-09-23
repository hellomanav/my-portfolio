import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        {/* Logo */}
        <img src={`${process.env.PUBLIC_URL}/images/webdp1.png`} alt="Logo" />
        <span>Portfolio</span>
      </div>
      <nav className="navbar-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="navbar-button">
        <button>Let's talk</button>
      </div>
    </header>
  );
}

export default NavBar;
