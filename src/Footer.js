import React from 'react';
import './Footer.css'; // Ensure you have this CSS file

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-column">
        <h3>About Me</h3>
        <p>
          I am a professional UI/UX designer and web developer with experience in creating scalable and responsive applications.
        </p>
      </div>
      <div className="footer-column">
        <h3>Project Works</h3>
        <ul>
          <li><a href="#project1">Project 1</a></li>
          <li><a href="#project2">Project 2</a></li>
          <li><a href="#project3">Project 3</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Support</h3>
        <ul>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact Support</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>About</h3>
        <ul>
          <li><a href="#about-me">Who Am I</a></li>
          <li><a href="#my-story">My Story</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Social Media</h3>
        <ul className="social-links">
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
        <div className="newsletter">
          <h4>Join Newsletter</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
