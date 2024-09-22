import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <div className="service-card">
        {/* Img Sources Local */}
        {/* <img src="/images/uiux2.jpg" alt="UI/UX Design" /> */}
        <img src={`${process.env.PUBLIC_URL}/images/uiux2.jpg`} alt="UI/UX Design" />
        <h2>UI/UX Design</h2>
        <p>From the initial design to the final development stage, your dedicated team of specialists.</p>
      </div>
      <div className="service-card">
      <img src={`${process.env.PUBLIC_URL}/images/webd2.png`} alt="Web Design" />
        <h2>Web Design</h2>
        <p>From the initial design to the full development of your website, we cover all your needs.</p>
      </div>
      <div className="service-card">
        <img src={`${process.env.PUBLIC_URL}/images/webdp2.png`} alt="Web Development" />
        <h2>Web Development</h2>
        <p>Build robust and scalable web applications tailored to your business needs.</p>
      </div>
      <div className="service-card">
      <img src={`${process.env.PUBLIC_URL}/images/dm2.avif`} alt="Digital Marketing" />
        <h2>Digital Marketing</h2>
        <p>Enhance your online presence and engage with your audience through effective strategies.</p>
      </div>
      <div className="service-card">
        <img src={`${process.env.PUBLIC_URL}/images/seo3.png`} alt="SEO Optimization" />
        <h2>SEO Optimization</h2>
        <p>Improve your search engine rankings and make your website more visible to potential customers.</p>
      </div>
    </div>
  );
}

export default Services;
