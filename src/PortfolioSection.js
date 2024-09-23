import React, { useState } from 'react';
import { FaBook, FaCode, FaHeart, FaLanguage,FaGuitar,FaPlane } from 'react-icons/fa';
import './PortfolioSection.css';

// Data for the portfolio columns
const portfolioData = {
  hobbies: [
    {
      icon: <FaBook />,
      label: "Cultural Exploration",
      content: ["Asian Cultures", "European Traditions", "African Heritage"]
    },
    {
      icon: <FaLanguage />,
      label: "Learning Languages",
      content: ["French", "Japanese", "Korean", "Tagalog", "Spanish"]
    },
    {
      icon: <FaHeart />,
      label: "Other Hobbies",
      content: ["Playing Guitar", "Working Out", "Chess", "Stargazing", "Board Games", "Hiking","Financial Markets & Economics"]
    }
  ],
  academics: [
    {
      icon: <FaCode />,
      label: "Coding Languages",
      content: ["JavaScript", "Python", "C++"]
    },
    {
      icon: <FaCode />,
      label: "Frameworks/Libraries",
      content: ["React", "Django", "Node.js"]
    },
    {
      icon: <FaCode />,
      label: "Databases",
      content: ["Oracle", "MySQL", "PostGres", "NoSQL"]
    },
    {
      icon: <FaCode />,
      label: "Tools/Technologies",
      content: ["Linux", "Git", "GitHub", "Docker", "AWS"]
    }
  ],
  aspirations: [
    {
      icon: <FaPlane />,
      label: "Travel Goals",
      content: [
        "Kyoto, Japan",
        "Marrakech, Morocco",
        "Santorini, Greece",
        "Cusco, Peru",
        "Cairo, Egypt",
        "Seoul, South Korea",
        "Berlin, Germany",
        "Singapore",
        "Dubai, UAE",
        "Bhutan",
        "Havana, Cuba",
        "Bali, Indonesia",
        "Fez, Morocco",
        "Varanasi, India"
      ]
    }
  ]
};

const PortfolioSection = () => {
  // State to manage dropdowns for Hobbies and Academics points
  const [openDropdowns, setOpenDropdowns] = useState({
    cultures1: false,
    cultures2: false,
    hobbies3: false,
    academics1: false,
    academics2: false,
    academics3: false,
    academics4: false
  });

  const toggleDropdown = (key) => {
    setOpenDropdowns({ ...openDropdowns, [key]: !openDropdowns[key] });
  };

  return (
    <section className="portfolio-section">
      <div className="row">
        
                    {/* Column 1: Hobbies */}
                    <div className="col">
          <h3 className="hobbies">Hobbies</h3>
          <ul>
            <li onClick={() => toggleDropdown('cultures1')}>
              {portfolioData.hobbies[0].icon} {portfolioData.hobbies[0].label}
            </li>
            {openDropdowns.cultures1 && (
              <ul className="dropdown-content">
                {portfolioData.hobbies[0].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <li onClick={() => toggleDropdown('cultures2')}>
              {portfolioData.hobbies[1].icon} {portfolioData.hobbies[1].label}
            </li>
            {openDropdowns.cultures2 && (
              <ul className="dropdown-content">
                {portfolioData.hobbies[1].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <li onClick={() => toggleDropdown('hobbies3')}>
              {portfolioData.hobbies[2].icon} {portfolioData.hobbies[2].label}
            </li>
            {openDropdowns.hobbies3 && (
              <ul className="dropdown-content">
                {portfolioData.hobbies[2].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </ul>
        </div>

        {/* Column 2: Academics */}
        <div className="col">
          <h3 className="academics">Academics</h3>
          <ul>
            <li onClick={() => toggleDropdown('academics1')}>
              {portfolioData.academics[0].icon} {portfolioData.academics[0].label}
            </li>
            {openDropdowns.academics1 && (
              <ul className="dropdown-content">
                {portfolioData.academics[0].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <li onClick={() => toggleDropdown('academics2')}>
              {portfolioData.academics[1].icon} {portfolioData.academics[1].label}
            </li>
            {openDropdowns.academics2 && (
              <ul className="dropdown-content">
                {portfolioData.academics[1].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <li onClick={() => toggleDropdown('academics3')}>
              {portfolioData.academics[2].icon} {portfolioData.academics[2].label}
            </li>
            {openDropdowns.academics3 && (
              <ul className="dropdown-content">
                {portfolioData.academics[2].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}

            <li onClick={() => toggleDropdown('academics4')}>
              {portfolioData.academics[3].icon} {portfolioData.academics[3].label}
            </li>
            {openDropdowns.academics4 && (
              <ul className="dropdown-content">
                {portfolioData.academics[3].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </ul>
        </div>

       

         {/* Column 3: Passion Quote */}
         {/* <div className="col">
          <h3 className="passion">Do it with Passion</h3>
          <p><FaGuitar /> Do it with passion, or not at all.</p>
        </div> */}
         {/* Future Aspiration Column */}
         <div className="col">
          <h3 className="passion">Future Aspiration</h3>
          <ul>
            <li onClick={() => toggleDropdown('aspirations1')}>
              {portfolioData.aspirations[0].icon} {portfolioData.aspirations[0].label}
            </li>
            {openDropdowns.aspirations1 && (
              <ul className="dropdown-content">
                {portfolioData.aspirations[0].content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      </div>
      
    </section>
  );
};

export default PortfolioSection;
