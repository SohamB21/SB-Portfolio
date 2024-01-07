import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { useContext } from "react";
import { ThemeContext } from "../../context.jsx";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const theme = useContext(ThemeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 transition-opacity duration-500 opacity-60">
      <button
        onClick={() => {
          toggleDarkMode();
          handleClick();
        }}
        className={`flex items-center p-2 ${
          isDarkMode ? "bg-gray-800" : "bg-blue-500"
        } rounded-full text-white`}
      >
        {isDarkMode ? <FiMoon size={24} /> : <FiSun size={24} />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
