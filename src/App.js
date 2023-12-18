// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Loader from "./pages/Loader";
import HomePage from "./pages/Home";
import StoryTellingPage from "./pages/StoryTelling";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Loader />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/story" element={<StoryTellingPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
    </Routes>
  </Router>
);

export default App;
