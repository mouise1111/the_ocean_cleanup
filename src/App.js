// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import StoryTellingPage from "./pages/StoryTelling";
import LoginPage from "./pages/Login";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/story" element={<StoryTellingPage />} />
      <Route path="/Login" element={<LoginPage />} />
    </Routes>
  </Router>
);

export default App;
