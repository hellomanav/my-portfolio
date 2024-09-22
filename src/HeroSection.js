import React from 'react';
import './HeroSection.css'; // Make sure you have a corresponding CSS file

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <img src={`${process.env.PUBLIC_URL}/images/sp4.jpg`} alt="Profile" />
      </div>
      <div className="hero-text">
        <h1>Hello, I'm Manav</h1>
        <p>Professional UI/UX Designer & Web Developer</p>
        <button>Hire Me Now</button>
      </div>
    </div>
  );
}

export default HeroSection;
