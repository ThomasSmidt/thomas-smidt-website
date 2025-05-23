import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { FaRegMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [bgAnimate, setBgAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section id="navbar">
      <a href="/" id="nav-logo">Thomas Smidt</a>
      <section className="nav-link-container">
        <div id="nav-links" className={menuOpen ? 'open' : ''}>
          <a href="/projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact me</a>
          <a href="https://github.com/ThomasSmidt">
          <FaGithub thub className="icon"></FaGithub>
          </a>
          <a href="https://www.linkedin.com/in/thomas-smidt-95a768249/">
            <FaLinkedin className="icon"></FaLinkedin>
          </a>
        </div>
        <div className="theme-toggle" onClick={toggleBackground}>
          {bgAnimate ? (
            <FaSun className="icon fade-in" />
          ) : (
            <FaRegMoon className="icon fade-in" />
          )}
        </div>
        
        <div id="burger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </section>
      
      
      
    </section>
  );
};

export default Navbar;
