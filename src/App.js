// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StoryTelling from './pages/StoryTelling';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<StoryTelling />} />
    </Routes>
  </Router>

);

export default App;