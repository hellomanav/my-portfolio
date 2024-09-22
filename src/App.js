import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Services from './Services';

function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          {/* Home route with HeroSection and Services */}
          <Route 
            path="/" 
            element={
              <>
                <h1>Welcome to My Portfolio</h1>
                <HeroSection />
                <Services />
                
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
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </Router>
  );
}

export default App;
