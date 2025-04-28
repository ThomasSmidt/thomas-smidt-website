import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <section id="navbar">
        <a href="/" id="nav-logo">Thomas Smidt</a>
        <div id="nav-links">
            <a href="/projects">Projects</a>
            <a href="/contact">Contact me</a>
        </div>
    </section>
  );
};

export default Navbar;