import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { FaRegMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [bgAnimate, setBgAnimate] = useState(false);

  useEffect(() => {
    if (bgAnimate) {
      document.body.classList.add('bg-animate');
    } else {
      document.body.classList.remove('bg-animate');
    }
  }, [bgAnimate]);

  const toggleBackground = () => {
    setBgAnimate(!bgAnimate);
  };

  return (
    <section id="navbar">
      <a href="/" id="nav-logo">Thomas Smidt</a>
      <div id="nav-links">
        <a href="/projects">Projects</a>
        <a href="/contact">Contact me</a>
      </div>
      <div className="theme-toggle" onClick={toggleBackground}>
        {bgAnimate ? (
          <FaSun className="icon fade-in" />
        ) : (
          <FaRegMoon className="icon fade-in" />
        )}
      </div>
    </section>
  );
};

export default Navbar;
