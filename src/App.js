import React from 'react';
// Browser Router vs Hash Router
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';
import HeroSection from './HeroSection';
import NavBar from './NavBar';
import AboutMeSection from './AboutMeSection';
import Footer from './Footer';
import Services from './Services';
import SkillsSection from './SkillsSection';
import Chatbot from './Chatbot';
import PortfolioSection from './PortfolioSection';
import { FaBook, FaCode, FaCloud, FaHeart, FaLanguage } from 'react-icons/fa';

function App() {

  const cultureItems = [
    { text: 'Cultures Hub', icon: <FaBook /> },
    { text: 'Language Hub', icon: <FaBook /> },
  ];

  const academicItems = [
    { text: 'Coding', icon: <FaCode /> },
    { text: 'Portfolio', icon: <FaCode /> },
  ];

  // Define dropdown items
  const languagesDropdown = {
    title: 'Languages',
    items: [
      { text: 'English', icon: <FaLanguage /> },
      { text: 'Spanish', icon: <FaLanguage /> },
    ],
  };

  const technologiesDropdown = {
    title: 'Technologies',
    items: [
      { text: 'JavaScript', icon: <FaCode /> },
      { text: 'Python', icon: <FaCode /> },
    ],
  };

  const frameworksDropdown = {
    title: 'Frameworks',
    items: [
      { text: 'React', icon: <FaCode /> },
      { text: 'Node.js', icon: <FaCode /> },
    ],
  };

  const cloudDropdown = {
    title: 'Cloud',
    items: [
      { text: 'AWS', icon: <FaCloud /> },
      { text: 'Azure', icon: <FaCloud /> },
    ],
  };

  const hobbiesDropdown = {
    title: 'Hobbies',
    items: [
      { text: 'Reading', icon: <FaHeart /> },
      { text: 'Music', icon: <FaHeart /> },
    ],
  };

  return (
    <Router>
      <NavBar/>
      {/* <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header> */}

      <main>
        <Routes>
          {/* Home route with HeroSection and Services */}
          <Route 
            path="/" 
            element={
              <>
                {/* <h1>Welcome to My Portfolio</h1> */}
                <HeroSection />
                {/* <AboutMeSection /> */}
                <SkillsSection />
                <PortfolioSection />
                {/* <PortfolioSection title="Cultures" items={cultureItems} dropdownItems={languagesDropdown} />
                <PortfolioSection title="Technologies" items={[]} dropdownItems={technologiesDropdown} /> */}
                <Services />
                <Chatbot/>              
              </>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer/>
      {/* <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer> */}
    </Router>
  );
}

export default App;
