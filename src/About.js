import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p>This is where you can introduce yourself.</p>
    </section>
  );
}

export default About;
