import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import StoryTellingPage from "./pages/StoryTelling";
import Projects from "./pages/Projects";
import Donate from "./pages/Donate";
import LoginPage from "./pages/Auth/Login";
import RegisterPage from "./pages/Auth/Register";
import NotFoundPage from "./pages/NotFound"; 


const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/story" element={<StoryTellingPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
