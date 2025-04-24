import React from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/blackjack" element*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;