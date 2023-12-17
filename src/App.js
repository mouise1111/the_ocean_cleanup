import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Loader from './pages/Loader';
import HomePage from './pages/Home';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Loader />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
