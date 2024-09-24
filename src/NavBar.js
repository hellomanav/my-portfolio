import React, { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const [activeLink, setActiveLink] = useState('#');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <div className="logo">Manav</div>
      <ul className="nav-links">
        <li><a href="#" className={activeLink === '#' ? 'active' : ''} onClick={() => handleClick('#')}>Home</a></li>
        <li><a href="#about" className={activeLink === '#about' ? 'active' : ''} onClick={() => handleClick('#about')}>About</a></li>
        <li><a href="#skills" className={activeLink === '#skills' ? 'active' : ''} onClick={() => handleClick('#skills')}>Skills</a></li>
        <li><a href="#projects" className={activeLink === '#projects' ? 'active' : ''} onClick={() => handleClick('#projects')}>Projects</a></li>
        <li><a href="#blog" className={activeLink === '#blog' ? 'active' : ''} onClick={() => handleClick('#blog')}>Blog</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
