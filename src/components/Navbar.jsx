import React, { useState, useEffect } from 'react';
import { FaRegMoon, FaSun, FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      transition: { duration: 0.3, when: 'beforeChildren', staggerChildren: 0.05 }
    },
    closed: {
      opacity: 0,
      y: -20,
      pointerEvents: 'none',
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="navbar">
      <Link to="/" id="nav-logo">Thomas Smidt</Link>

      <section className="nav-link-container">

        {isMobile ? (
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                id="nav-links"
                className="open"
                key="mobile-nav"
                initial="closed"
                animate="open"
                exit="closed"
                variants={navVariants}
              >
                <motion.div variants={navVariants}>
                  <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                </motion.div>
                <motion.div variants={navVariants}>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact me</Link>
                </motion.div>
                <motion.div variants={navVariants}>
                  <a href="https://github.com/ThomasSmidt"><FaGithub className="icon" /></a>
                </motion.div>
                <motion.div variants={navVariants}>
                  <a href="https://www.linkedin.com/in/thomas-smidt-95a768249/"><FaLinkedin className="icon" /></a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          <div id="nav-links">
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact me</Link>
            <a href="https://github.com/ThomasSmidt"><FaGithub className="icon" /></a>
            <a href="https://www.linkedin.com/in/thomas-smidt-95a768249/"><FaLinkedin className="icon" /></a>
          </div>
        )}

        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun className="icon" /> : <FaRegMoon className="icon" />}
        </div>

        {isMobile && (
          <div id="burger" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}
      </section>
    </section>
  );
};

export default Navbar;

