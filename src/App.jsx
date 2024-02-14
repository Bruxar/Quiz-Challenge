import './app.scss'
import React from 'react';
import Quiz from './pages/Quiz';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
      </Router>
  );
}

export default App
