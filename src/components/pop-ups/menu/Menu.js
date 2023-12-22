import React, { useState } from "react";
// import { Html } from "@react-three/drei";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 p-5 mt-2 transition-colors bg-amber-600 rounded-r-xl hover:bg-amber-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col justify-around w-6 h-6"
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
            href="/story"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Our Story
          </a>
          <a
            href="/technologies"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Technologies
          </a>
          <a
            href="/donate"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            Donate
          </a>
          <a
            href="/minigame"
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
            href="/gdpr"
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700"
          >
            GDPR
          </a>
        </div>
      )}
    </div>
  );
};

export default Menu;
