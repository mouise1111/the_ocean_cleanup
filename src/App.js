// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StoryTellingPage from './pages/StoryTellingPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/story" element={<StoryTellingPage />} />
    </Routes>
  </Router>
);

export default App;