import React from 'react';
import './AboutMeSection.css'; // Create this CSS file

function AboutMeSection() {
  return (
    <section className="about-me-section">
      <div className="about-me-content">
        <h2 className="about-me-txt">Hi, I'm Manav. Nice to meet you.</h2>
        <p className="about-me-txt">
          Since beginning my journey as a [your profession] X years ago, I've worked with agencies, 
          consulted for startups, and collaborated with talented people to create digital solutions 
          for both business and consumer use. I'm quietly confident, naturally curious, and 
          perpetually working on improving my skills.
        </p>
      </div>
    </section>
  );
}

export default AboutMeSection;
