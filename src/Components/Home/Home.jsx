import React from "react";
import { useContext } from "react";
import "./Home.css";
import myphoto from "../../assets/media/myphotoUps.png";
import myphotosmall from "../../assets/media/myphotosmallUps.png";
import github from "../../assets/logos/github.png";
import linkedin from "../../assets/logos/linkedin.png";
import gmail from "../../assets/logos/gmail.png";
// import twitter from "../../assets/logos/twitter.jpg";
import resume from "../../assets/media/resume.svg";
import { Link as ScrollLink } from "react-scroll";
import { ThemeContext } from "../../context.jsx";
import { LINKS } from "../../assets/constants/links.js";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="Home"
      className="i flex lg:flex-row md:flex-row flex-col h-screen lg:pt-0 md:pt-0 pt-6"
    >
      <div className="flex-1 i-left flex flex-col gap-8 justify-center lg:p-10 md:p-8 p-4 mt-6">
        <div className="h-auto flex flex-col justify-between text-center lg:text-left md:text-left">
          <h2 className="lg:text-4xl md:text-4xl text-3xl font-light i-intro">
            Hello! My name is
          </h2>
          <h1 className="lg:text-6xl md:text-6xl text-5xl font-semibold i-name">
            Soham Banik
          </h1>

          <div className="lg:hidden md:hidden flex-1 i-right relative items-center justify-center flex m-4">
            <div className="h-full w-4/5 flex flex-col items-center justify-center max-h-full relative">
              <img
                src={myphotosmall}
                alt="My Photo"
                className="i-img rounded-full shadow-md shadow-blue-500 transition-transform transform hover:scale-110 duration-500"
              />
            </div>
          </div>

          <div className="i-title h-12 overflow-hidden lg:block md:block hidden">
            <div className="h-full i-title-wrapper">
              <div className="h-full i-title-item text-4xl font-bold text-green-700 flex items-center animate-move-delay-1">
                Web Developer
              </div>
              <div className="h-full i-title-item text-4xl font-bold text-blue-700 flex items-center animate-move-delay-2">
                Mobile Developer
              </div>
              <div className="h-full i-title-item text-4xl font-bold text-yellow-700 flex items-center animate-move-delay-3">
                Student
              </div>
              <div className="h-full i-title-item text-4xl font-bold text-orange-700 flex items-center animate-move-delay-4">
                Problem Solver
              </div>
              <div className="h-full i-title-item text-4xl font-bold text-fuchsia-700 flex items-center animate-move-delay-5">
                Learner
              </div>
            </div>
          </div>
          <p className="i-desc lg:text-xl text-lg">
            I’m an undergraduate with proficiency in Web and Android
            Development, Problem Solving and strong command of Programming
            Fundamentals.
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-4 lg:justify-start md:justify-start justify-center">
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white shadow-md shadow-blue-500 flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300 p-1"
          >
            <img src={resume} alt="Resume" className="w-8 h-8 p-0 m-0" />
          </a>

          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-12 h-12 bg-white shadow-md shadow-blue-500 flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
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
            <button className="w-12 h-12 bg-white shadow-md shadow-blue-500 flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
              <img
                className="object-contain w-11 h-11 rounded-full"
                src={linkedin}
                alt="LinkedIn"
              />
            </button>
          </a>
          {/* <a
            href={LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-12 h-12 bg-white shadow-md shadow-blue-500 flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
              <img
                className="object-contain w-11 h-11 rounded-full"
                src={twitter}
                alt="X"
              />
            </button>
          </a> */}
          <a
            href={`mailto:${LINKS.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-12 h-12 bg-white shadow-md shadow-blue-500 flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
              <img
                className="object-contain w-11 h-11 rounded-full"
                src={gmail}
                alt="Gmail"
              />
            </button>
          </a>
        </div>
      </div>

      <div className="lg:block md:block hidden flex-1 i-right relative m-5 lg:mt-16 md:mt-16 mt-0">
        <div
          className="i-bg h-full w-full absolute flex flex-col items-center justify-center max-h-full relative"
          style={{
            background: darkMode
              ? "linear-gradient(to right, white, #60a5fa)"
              : "linear-gradient(to right, #60a5fa, #1e3a8a)",
          }}
        >
          <img
            src={myphoto}
            alt="My Photo"
            className="i-img rounded-full shadow-md transition-transform transform hover:scale-110 duration-500"
            // className="w-full md:w-4/5 lg:w-1/2 h-auto md:h-1/3 lg:h-1/3 i-img rounded-full shadow-md transition-transform transform hover:scale-110 duration-500"
          />
          <p
            style={{ fontFamily: "Whisper" }}
            className="text-4xl font-bold text-black"
          >
            Soham Banik
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
