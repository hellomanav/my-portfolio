import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={`${process.env.PUBLIC_URL}/images/hero5.png`} alt="Hero" className="full-width-image" />
    </div>
  );
}

export default HeroSection;
