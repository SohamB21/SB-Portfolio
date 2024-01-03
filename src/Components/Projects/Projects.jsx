import React, { useState } from "react";

import TopCornImage from "../../assets/projects/TopCornImage.png";
import NoteNestImage from "../../assets/projects/NoteNestImage.jpg";
import SportsQuoteGeneratorImage from "../../assets/projects/SportsQuoteGeneratorImage.jpg";
import TypingSpeedTestGameImage from "../../assets/projects/TypingSpeedTestGameImage.png";
import ResumeGeneratorImage from "../../assets/projects/ResumeGeneratorImage.jpg";
import StickyNotesImage from "../../assets/projects/StickyNotesImage.jpg";

const projectData = [
  {
    imageSrc: TopCornImage,
    altText: "TopCorn",
    description:
      "A movie app for enthusiasts, featuring a vast library, detailed movie info and easy ticket booking. Developed cross-platform features prioritizing user-friendly design, encrypted storage and enhanced performance based on user feedback.",
    languages: ["React Native", "TypeScript", "App Development"],
    deployedLink: null,
    githubLink: "https://github.com/SohamB21/TopCorn-MovieApp",
  },
  {
    imageSrc: NoteNestImage,
    altText: "NoteNest",
    description:
      "A productivity-boosting note-taking platform, allows you to effortlessly create, edit and organize your notes in a dynamic space. The intuitive web app facilitates real-time CRUD operations for note management, utilizing a secure database.",
    languages: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    deployedLink: null,
    githubLink: "https://github.com/SohamB21/NoteNest",
  },
  {
    imageSrc: SportsQuoteGeneratorImage,
    altText: "Sports Quote Generator",
    description:
      "Showcases my journey from learning a new skill to creating something inspiring. This responsive tool lets you generate sports quotes from legendary athletes, easily copy and share your favorites on X/Twitter.",
    languages: ["ReactJS", "Tailwind CSS"],
    deployedLink: "https://sports-quote-generator-react-js.vercel.app/",
    githubLink: "https://github.com/SohamB21/Sports-Quote-Generator-ReactJS",
  },
  {
    imageSrc: TypingSpeedTestGameImage,
    altText: "Typing Speed-Test Game",
    description:
      "This is a practical tool which can be used as a game to test someone's typing speed, on the basis of typing accuracy and words typed per minute (WPM) calculations.",
    languages: ["JavaScript", "HTML", "CSS"],
    deployedLink: "https://sohamb21.github.io/Typing-SpeedTest-Game/",
    githubLink: "https://github.com/SohamB21/Typing-SpeedTest-Game",
  },
  {
    imageSrc: ResumeGeneratorImage,
    altText: "Resume Generator",
    description:
      "A user-friendly resume generator featuring a clean 2-column template, bullet fields, an extensive form and default picture feature. This responsive tool highlights skills for enhanced readability. Download resumes in PDF format with ease.",
    languages: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    deployedLink: "https://sohamb21.github.io/Resume-Generator/",
    githubLink: "https://github.com/SohamB21/Resume-Generator",
  },
  {
    imageSrc: StickyNotesImage,
    altText: "Sticky Notes",
    description:
      "In place of Sticky Notes, I will show my portfolio as a project after I complete it totally.",
    languages: ["JavaScript", "HTML", "CSS"],
    deployedLink: "https://soham-banik-portfolio.vercel.app/",
    githubLink: "https://github.com/SohamB21/SB-Portfolio",
  },
];

const generateProjectItem = (project) => (
  <div className="relative group overflow-hidden m-4 py-2 px-2 shadow-lg shadow-blue-500 rounded-lg border border-blue-200 flex flex-col justify-center items-center self-stretch">
    <img
      src={project.imageSrc}
      alt={project.altText}
      className="w-96 h-56 shadow-md shadow-blue-500 rounded-lg transition-transform hover:scale-105"
    />

    <div className="info max-w-md flex flex-col items-center justify-center p-1 text-center">
      <h3 className="text-2xl font-bold mt-2 mb-1">{project.altText}</h3>
      <p className="text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-2 justify-center">
        {project.languages.map((language, index) => (
          <span
            key={index}
            className="text-sm border-2 border-indigo-600 p-1 rounded-md hover:text-white hover:bg-indigo-600 hover:border-2 hover:border-blue-900 duration-300"
          >
            {language}
          </span>
        ))}
      </div>
    </div>

    <div className="flex flex-row items-center justify-center gap-4 text-white mt-2">
      {project.deployedLink && (
        <a
          href={project.deployedLink}
          className="bg-blue-600 hover:bg-blue-700 border border-blue-900 rounded-md py-2 px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deployed Project
        </a>
      )}
      {project.githubLink && (
        <a
          href={project.githubLink}
          className="bg-blue-600 hover:bg-blue-700 border border-blue-900 rounded-md py-2 px-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      )}
    </div>
  </div>
);

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects
    ? projectData
    : projectData.slice(0, 4);

  return (
    <section
      className="p h-full w-full flex flex-col items-center justify-center py-24"
      style={{ background: "linear-gradient(to right, white, lightblue)" }}
    >
      <h1 className="text-3xl font-bold">My Projects</h1>
      <div className="flex flex-wrap pt-10 pb-4 items-center justify-center">
        {visibleProjects.map(generateProjectItem)}
      </div>

      {!showAllProjects && (
        <button
          className="bg-indigo-700 hover:bg-indigo-800 border border-blue-900 rounded-md py-2 px-4 text-white"
          onClick={() => setShowAllProjects(true)}
        >
          See More
        </button>
      )}
      {showAllProjects && (
        <button
          className="bg-indigo-700 hover:bg-indigo-800 border border-blue-900 rounded-md py-2 px-4 text-white"
          onClick={() => setShowAllProjects(false)}
        >
          See Less
        </button>
      )}
    </section>
  );
};

export default Projects;
