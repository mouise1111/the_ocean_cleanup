import React, { useState } from "react";
// import { Html } from "@react-three/drei";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
  };

  const handleGDPRClick = () => {
    setShowNotification(true);
  };

  return (
    <div className="absolute top-0 left-0 p-5 mt-2 transition-colors bg-amber-600 rounded-r-xl hover:bg-amber-500">
      <button
        onClick={handleToggleMenu}
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
            onClick={handleGDPRClick}
            className="w-full p-2 text-center text-white transition-transform rounded-lg hover:scale-110 bg-amber-700 cursor-pointer"
          >
            GDPR
          </a>
          {showNotification && (
            <div className="fixed top-0 left-0 h-screen w-screen flex justify-center items-center bg-gray-800 bg-opacity-75 z-100">
              <div className="bg-gray-300 p-6 rounded-xl text-center">
              <h2 class="text-2xl font-bold mb-4">GDPR Compliance Statement</h2>
              <p><strong>1. Types of Personal Data Collected:</strong></p>
              <p>We collect usernames, email addresses, and passwords for the purpose of account creation</p>
              <p>and tracking high scores in the minigame.</p><br />

              <p><strong>2. Purpose of Data Collection:</strong></p>
              <p>The collected data is used to facilitate account creation and to display high scores for</p>
              <p>other users. It enhances the gaming experience and allows users to track their progress.</p><br />

              <p><strong>3. Data Storage and Security Measures:</strong></p>
              <p>User data, including usernames and email addresses, is stored in a MySQL database hosted in</p>
              <p>a closed environment. Passwords are securely hashed. Our method for posting scores prevents</p>
              <p>direct SQL injections.</p><br />

              <p><strong>4. Use of Cookies or Tracking Technologies:</strong></p>
              <p>We do not use cookies or tracking technologies on our website.</p><br />

              <p><strong>5. Legal Basis for Data Processing:</strong></p>
              <p>Users have the choice to sign up voluntarily, providing consent for the processing of their</p>
              <p>data. The legal basis for processing is user consent.</p><br />

              <p><strong>6. User Rights Under GDPR:</strong></p>
              <p>Users have the right to access, rectify, and erase their personal data.</p>
                <button
                  className="text-red-500 hover:underline"
                  onClick={() => setShowNotification(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
