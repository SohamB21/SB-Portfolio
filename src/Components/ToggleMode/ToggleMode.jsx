import React, { useState, useContext, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context.jsx";

const DarkModeToggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className={`flex items-center justify-center p-3 rounded-full shadow-2xl backdrop-blur-md border transition-all duration-300 transform hover:scale-110 active:scale-95 ${darkMode
          ? "bg-slate-800/80 border-slate-600 text-cyan-400 hover:text-cyan-300 shadow-cyan-900/20"
          : "bg-white/80 border-white text-cta hover:text-cta/80 shadow-slate-200"
          }`}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <FiMoon size={24} className="fill-current" /> : <FiSun size={24} className="fill-current" />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
