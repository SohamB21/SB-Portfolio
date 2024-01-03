import React from "react";
import "./Home.css";
import myphoto from "../../assets/media/myphoto.png";
import github from "../../assets/logos/github.png";
import linkedin from "../../assets/logos/linkedin.png";
import gmail from "../../assets/logos/gmail.png";

const Home = () => {
  return (
    <div className="flex h-screen i">
      <div className="flex-1 i-left flex flex-col gap-20 justify-center">
        <div className="p-10 h-1/2 flex flex-col justify-between">
          <h2 className="text-4xl font-light i-intro">Hello! My name is</h2>
          <h1 className="text-6xl font-semibold i-name">Soham Banik</h1>
          <div className="i-title h-12 overflow-hidden">
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
          <p className="i-desc text-xl">
            I’m an undergraduate with proficiency in Web and Android
            Development, Problem Solving and strong command of Programming
            Fundamentals.
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-4 px-10">
          <a href="https://github.com/SohamB21" target="_blank" rel="noopener noreferrer">
            <button className="w-12 h-12 bg-white shadow-md shadow-blue-500 flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
              <img className="object-contain w-11 h-11 rounded-full" src={github} alt="GitHub" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/soham-banik-b13909237" target="_blank" rel="noopener noreferrer">
            <button className="w-12 h-12 bg-white shadow-md shadow-blue-500 flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
              <img className="object-contain w-11 h-11 rounded-full" src={linkedin} alt="LinkedIn" />
            </button>
          </a>
          <a href="mailto:soham0110banik@gmail.com" target="_blank" rel="noopener noreferrer">
            <button className="w-12 h-12 bg-white shadow-md shadow-blue-500 flex items-center justify-center rounded-full hover:transform hover:scale-110 transition-transform duration-300">
              <img className="object-contain w-11 h-11 rounded-full" src={gmail} alt="Gmail" />
            </button>
          </a>
        </div>
      </div>


      <div className="flex-1 i-right relative m-5">
        <div className="i-bg h-full w-full absolute flex flex-col items-center justify-center">
          <img
            src={myphoto}
            alt="My Photo"
            className="i-img rounded-full shadow-md transition-transform transform hover:scale-110 duration-500"
          />
          <p
            style={{
              fontFamily: "Whisper",
              fontSize: "4vw",
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Soham Banik
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
