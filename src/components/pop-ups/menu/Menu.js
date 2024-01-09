import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../Auth/Auth";
import { useNavigate } from "react-router-dom";
import { GDPRPopUp } from "../GDPRPopUp";

const Menu = ({ setPopUpStatus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const handleGDPRClick = () => {
    setShowNotification(true);
  };

  const handleMinigameClick = () => {
    if (isAuthenticated()) {
      setPopUpStatus({ showStartGame: true, showLeaderboard: false });
    } else {
      navigate("/login");
      // console.log("Redirecting to login page");
    }
  };

  return (
    <div className="absolute top-0 left-0 p-5 mt-2 transition-colors bg-amber-600 rounded-r-xl hover:bg-amber-500">
      <button
        className="flex flex-col justify-around w-6 h-6"
        onClick={handleToggleMenu}
      >
        <div
          className={
            isOpen
              ? "w-6 h-0.5 bg-white transform rotate-45"
              : "w-6 h-0.5 bg-white"
          }
        ></div>
        <div
          className={
            isOpen ? "w-6 h-0.5 bg-white opacity-0" : "w-6 h-0.5 bg-white"
          }
        ></div>
        <div
          className={
            isOpen
              ? "w-6 h-0.5 bg-white transform -rotate-45"
              : "w-6 h-0.5 bg-white"
          }
        ></div>
      </button>
      {isOpen && (
        <div className="flex flex-col items-center gap-4 px-4 my-4 space-y-2">
          <a
            href="/login"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Login
          </a>
          <a
            href="/register"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Sign Up
          </a>
          <a
            href="/"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Home
          </a>
          <a
            href="/story"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Our Story
          </a>
          <a
            href="/projects"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Projects
          </a>
          <a
            href="/donate"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Donate
          </a>
          <a
            onClick={handleMinigameClick}
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Minigame
          </a>
          <a
            href="https://theoceancleanup.com/"
            target="_blank"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            The Ocean Cleanup Website
          </a>
          <a
            onClick={handleGDPRClick}
            className="w-full p-2 text-center text-white transition-transform rounded-lg cursor-pointer hover:scale-110 bg-amber-700"
          >
            GDPR
          </a>
          {showNotification && (
            <GDPRPopUp setShowNotification={setShowNotification} />
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
