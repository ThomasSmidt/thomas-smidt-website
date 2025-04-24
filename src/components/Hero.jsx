import React from 'react';
import './Hero.css';
import CVBillede from '../img/CV-Billede.jpg';

const Hero = () => {
  return (
    <section id="hero">
      <div id="hero-desc-container">
        <h1 id="hero-title">Hi, I'm Thomas Smidt</h1>
        <p className="hero-desc">
          I'm a programming student studying to become a full-stack developer at TEC,
          and I'm currently looking for an apprenticeship where I can further develop my career and skills,
          and create a more comfortable life for my wife and baby daughter.
        </p>
        <p className="hero-desc">
          <br />
          I have been programming since I enrolled at TEC in 2022. I chose to study here because I originally wanted to be an IT Supporter,
          but I tried programming in one of the classes and instantly fell in love with the process and possibilities of programming, so I made the switch.
        </p>
      </div>
      <img src={CVBillede} alt="CV Billede" />
    </section>
  );
};

export default Hero;
