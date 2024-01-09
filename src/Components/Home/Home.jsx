import React from "react";
import "./Home.css";
import myphoto from "../../assets/media/myphoto.png";
import github from "../../assets/logos/github.png";
import linkedin from "../../assets/logos/linkedin.png";
import gmail from "../../assets/logos/gmail.png";
import { Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div
      id="Home"
      className="flex lg:flex-row md:flex-row flex-col h-screen i lg:pt-0 md:pt-0 pt-6"
    >
      <div className="flex-1 i-left flex flex-col justify-evenly justify-center lg:p-10 md:p-8 p-4">
        <div className="h-1/2 flex flex-col justify-between text-center lg:text-left md:text-left">
          <h2 className="lg:text-4xl md:text-4xl text-3xl font-light i-intro">
            Hello! My name is
          </h2>
          <h1 className="lg:text-6xl md:text-6xl text-5xl font-semibold i-name">
            Soham Banik
          </h1>

          <div className="lg:hidden md:hidden flex-1 i-right relative items-center justify-center flex">
            <div className="h-full w-4/5 absolute flex flex-col items-center justify-center max-h-full relative">
              <img
                src={myphoto}
                alt="My Photo"
                className="i-img rounded-full shadow-md transition-transform transform hover:scale-110 duration-500"
              />
              <p
                style={{ fontFamily: "Whisper" }}
                className="text-4xl font-bold text-black"
              >
                Soham Banik
              </p>
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

        <div className="flex flex-row flex-wrap lg:gap-4 gap-2 lg:justify-start md:justify-start justify-center">
          <ScrollLink
            to="Contact"
            smooth={true}
            duration={600}
            className="h-12 cursor-pointer bg-white shadow-md shadow-blue-500 hover:transform hover:scale-110 transition-transform duration-300 rounded-full text-[#0c46bc] font-semibold px-3 flex items-center justify-center"
          >
            Get in Touch
          </ScrollLink>
          <a
            href="https://github.com/SohamB21"
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
            href="https://www.linkedin.com/in/soham-banik-b13909237"
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
          <a
            href="mailto:soham0110banik@gmail.com"
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
        <div className="i-bg h-full w-full absolute flex flex-col items-center justify-center max-h-full relative">
          <img
            src={myphoto}
            alt="My Photo"
            className="i-img rounded-full shadow-md transition-transform transform hover:scale-110 duration-500"
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
