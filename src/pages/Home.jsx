import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import './Home.scss';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
    </div>
  );
}

export default App;