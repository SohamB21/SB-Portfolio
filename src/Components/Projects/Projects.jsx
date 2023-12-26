import React from "react";

import TopCornImage from "../../assets/images/projects/TopCornImage.png";
import NoteNestImage from "../../assets/images/projects/NoteNestImage.jpg";
import SportsQuoteGeneratorImage from "../../assets/images/projects/SportsQuoteGeneratorImage.jpg";
import TypingSpeedTestGameImage from "../../assets/images/projects/TypingSpeedTestGameImage.png";
import ResumeGeneratorImage from "../../assets/images/projects/ResumeGeneratorImage.jpg";
import StickyNotesImage from "../../assets/images/projects/StickyNotesImage.jpg";

const projectData = [
  {
    imageSrc: TopCornImage,
    altText: "TopCorn",
    textColor: "white",
    deployedLink: null,
    githubLink: "https://github.com/SohamB21/TopCorn-MovieApp",
  },
  {
    imageSrc: NoteNestImage,
    altText: "NoteNest",
    textColor: "black",
    deployedLink: null,
    githubLink: "https://github.com/SohamB21/NoteNest",
  },
  {
    imageSrc: SportsQuoteGeneratorImage,
    altText: "Sports Quote Generator",
    textColor: "white",
    deployedLink: "https://sports-quote-generator-react-js.vercel.app/",
    githubLink: "https://github.com/SohamB21/Sports-Quote-Generator-ReactJS",
  },
  {
    imageSrc: TypingSpeedTestGameImage,
    altText: "Typing Speed-Test Game",
    textColor: "black",
    deployedLink: "https://sohamb21.github.io/Typing-SpeedTest-Game/",
    githubLink: "https://github.com/SohamB21/Typing-SpeedTest-Game",
  },
  {
    imageSrc: ResumeGeneratorImage,
    altText: "Resume Generator",
    textColor: "black",
    deployedLink: "https://sohamb21.github.io/Resume-Generator/",
    githubLink: "https://github.com/SohamB21/Resume-Generator",
  },
  {
    imageSrc: StickyNotesImage,
    altText: "Sticky Notes",
    textColor: "black",
    deployedLink: null,
    githubLink: null,
  },
];

const generateProjectItem = (project) => (
  <div className="project relative group my-8 mx-10">
    <img
      src={project.imageSrc}
      alt={project.altText}
      className="w-96 h-56 shadow-xl shadow-blue-500 rounded-lg transition-transform transform group-hover:scale-105 filter group-hover:blur-sm"
    />
    <div
      className={`info absolute inset-0 hidden group-hover:flex flex-col items-center justify-center text-center text-${project.textColor}`}
    >
      <h3 className="text-2xl font-bold m-2">{project.altText}</h3>
      <p>A brief description of the project.</p>
      <div className="flex flex-row items-center justify-center gap-6 mt-2">
        {project.deployedLink && (
          <a
            href={project.deployedLink}
            className="bg-blue-600 border border-blue-900 rounded-lg py-2 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed Project
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            className="bg-blue-600 border border-blue-900 rounded-lg py-2 px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => (
  <section
    className="s h-full w-full flex flex-col items-center justify-center py-20"
    style={{ background: "linear-gradient(to right, white, lightblue)" }}
  >
    <h2 className="text-3xl font-bold">My Projects</h2>
    <div className="flex flex-wrap py-10 items-center justify-center">
      {projectData.map(generateProjectItem)}
    </div>
  </section>
);

export default Projects;
