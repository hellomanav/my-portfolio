import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faChartBar, faGuitar, faHiking, faRunning, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './SkillsSection.css';

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="row">
        {/* Column 1: Professional Skills */}
        <div className="col">
          <h3>Professional Skills</h3>
          <ul>
            <li><FontAwesomeIcon icon={faCode} /> Full Stack Development</li>
            <li><FontAwesomeIcon icon={faCode} /> Design Tools (Figma, Adobe XD, Sketch)</li>
            <li><FontAwesomeIcon icon={faChartBar} /> Data Science & Visualization</li>
          </ul>
        </div>

        {/* Column 2: Personal Hobbies */}
        <div className="col">
          <h3>Personal Hobbies</h3>
          <ul>
            <li><FontAwesomeIcon icon={faGuitar} /> Playing Guitar</li>
            <li><FontAwesomeIcon icon={faRunning} /> Running, Gym, Hiking</li>
            <li><FontAwesomeIcon icon={faHiking} /> Traveling & Road Trips</li>
          </ul>
        </div>

        {/* Column 3: Certifications & Tools */}
        <div className="col">
          <h3>Certifications & Tools</h3>
          <ul>
            <li><FontAwesomeIcon icon={faGraduationCap} /> Certifications (AWS, Docker)</li>
            <li><FontAwesomeIcon icon={faCode} /> Tools (VS Code, GitHub, Postman)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
