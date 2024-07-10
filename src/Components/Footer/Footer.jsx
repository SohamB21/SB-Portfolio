import React from "react";
import { useContext } from "react";
import { MdCopyright } from "react-icons/md";
import github from "../../assets/logos/github.png";
import linkedin from "../../assets/logos/linkedin.png";
import gmail from "../../assets/logos/gmail.png";
import { ThemeContext } from "../../context.jsx";
import { LINKS } from "../../assets/constants/links.js";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <footer className="pt-32">
      <hr
        className="h-1 bg-indigo-800 mx-8 rounded-full border-0"
        style={{
          background: darkMode
            ? "linear-gradient(to left, white, #60a5fa)"
            : "linear-gradient(to right, #60a5fa, #1e3a8a)",
        }}
      />

      <div
        className="m-8 p-4 text-white rounded-lg flex flex-row flex-wrap gap-6 justify-between"
        style={{
          background: darkMode
            ? "linear-gradient(to right, white, #60a5fa)"
            : "linear-gradient(to left, #60a5fa, #1e3a8a)",
          color: darkMode && "#172554",
        }}
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold" style={{ fontFamily: "Whisper" }}>
            Soham Banik
          </h1>
          <p className="">
            Software Developer, Tech Enthusiast, Student & Lifelong Learner.
          </p>
        </div>

        <div className="flex flex-row gap-4 ml-auto items-center">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-12 h-12 bg-white flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
              <img
                className="object-contain w-11 h-11 rounded-full"
                src={github}
                alt="GitHub"
              />
            </button>
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-12 h-12 bg-white flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
              <img
                className="object-contain w-11 h-11 rounded-full"
                src={linkedin}
                alt="LinkedIn"
              />
            </button>
          </a>
          <a
            href={`mailto:${LINKS.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-12 h-12 bg-white flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
              <img
                className="object-contain w-11 h-11 rounded-full"
                src={gmail}
                alt="Gmail"
              />
            </button>
          </a>
        </div>
      </div>

      <p className="flex flex-wrap gap-x-2 justify-center w-full bg-blue-800 text-white p-2 items-center text-sm">
        <span className="flex flex-row gap-1 items-center">
          Copyright <MdCopyright size={24} /> {new Date().getFullYear()} Soham
          Banik.
        </span>
        <span> All rights reserved. </span>
      </p>
    </footer>
  );
};

export default Footer;
