import './app.scss'
import React from 'react';
import Quiz from './pages/Quiz';
import Home from './pages/Home';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Quiz-Challenge/" element={<Home />} />
        <Route path="/Quiz-Challenge/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App
