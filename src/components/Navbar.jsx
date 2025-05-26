import React, { useState } from 'react';
import { FaRegMoon, FaSun, FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <section id="navbar">
      <Link to="/" id="nav-logo">Thomas Smidt</Link>
      <section className="nav-link-container">
        <div id="nav-links" className={menuOpen ? 'open' : ''}>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact me</Link>
          <a href="https://github.com/ThomasSmidt"><FaGithub className="icon" /></a>
          <a href="https://www.linkedin.com/in/thomas-smidt-95a768249/"><FaLinkedin className="icon" /></a>
        </div>
        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun className="icon" /> : <FaRegMoon className="icon" />}
        </div>
        <div id="burger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </section>
    </section>
  );
};

export default Navbar;
