import React, { useState, useContext } from "react";
import { ThemeContext } from "../../context.jsx";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { BurstStar, DotGrid, CodeIcon, TerminalIcon, ZigZag, Squiggle, Sparkle, CircleDoodle } from "../Decorations/Decorations";

import FanaticsImage from "../../assets/projects/FanaticsImage.jpg";
import PepperSprayImage from "../../assets/projects/PepperSprayImage.png";
import TopCornImage from "../../assets/projects/TopCornImage.png";
import NoteNestImage from "../../assets/projects/NoteNestImage.jpg";
import SportsQuoteGeneratorImage from "../../assets/projects/SportsQuoteGeneratorImage.jpg";
import TypingSpeedTestGameImage from "../../assets/projects/TypingSpeedTestGameImage.png";
import ResumeGeneratorImage from "../../assets/projects/ResumeGeneratorImage.jpg";
import PortfolioImage from "../../assets/projects/PortfolioImage.png";
import StickyNotesImage from "../../assets/projects/StickyNotesImage.jpg";

const projectData = [
  {
    imageSrc: FanaticsImage,
    altText: "Fanatics",
    description:
      "Fanatics is a passion project made using the MERN stack by a sports fan for fellow enthusiasts. Here you can explore a wide range of sports apparel and fan gear. With Fanatics, you can seamlessly buy, sell, upload and manage your own jerseys.",
    languages: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Firebase"],
    deployedLink: "https://fanatics-mern.vercel.app/",
    githubLink: "https://github.com/SohamB21/Fanatics-Frontend",
  },
  {
    imageSrc: PepperSprayImage,
    altText: "PepperSpray",
    description:
      "An app designed for the safety of women with helpful inclusive design. It detects danger zones, provides real-time danger percentages and offers community platform for sharing experiences and advices along with a badge system.",
    languages: ["React Native", "TypeScript", "Figma", "MongoDB", "ExpressJS"],
    deployedLink: null,
    githubLink: "https://github.com/SohamB21/PepperSpray-App",
  },
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
    imageSrc: PortfolioImage,
    altText: "My Portfolio Website",
    description:
      "My portfolio website - a modern and responsive website tailored for presenting my journey in this tech field so far. It showcases my skills, projects, experience and more. Feel free to explore and share your insights.",
    languages: ["ReactJS", "Tailwind CSS", "Material UI"],
    deployedLink: "https://soham-banik-portfolio.vercel.app/",
    githubLink: "https://github.com/SohamB21/SB-Portfolio",
  },
  {
    imageSrc: StickyNotesImage,
    altText: "Sticky Notes",
    description:
      "The 2nd project I created on my PC after diving into JS, but one day the HDD bid farewell, taking the code with it. Bear with the image quality.",
    languages: ["JavaScript", "HTML", "CSS"],
    deployedLink: null,
    githubLink: null,
  },
];

const ProjectCard = ({ project, darkMode }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl border-2 transition-all duration-500 flex flex-col h-full
      ${darkMode
          ? "bg-slate-800/80 border-slate-700 hover:border-primary/50"
          : "bg-white/80 border-transparent hover:border-primary/30 shadow-lg shadow-gray-200/50"
        } hover:-translate-y-2`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, ${darkMode ? "rgba(0, 104, 55, 0.35)" : "rgba(0, 104, 55, 0.22)"}, transparent 60%)`,
        }}
      />

      {/* Image Container */}
      <div className="relative h-56 sm:h-64 overflow-hidden z-10">
        <div className={`absolute inset-0 z-10 transition-opacity duration-300 pointer-events-none ${darkMode ? "group-hover:bg-black/10" : "group-hover:bg-transparent"}`}></div>
        <img
          src={project.imageSrc}
          alt={project.altText}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay Actions */}
        <div className={`absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4 bg-slate-900/60 backdrop-blur-[2px]`}>
          {project.deployedLink && (
            <a
              href={project.deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-cta rounded-full text-white hover:scale-110 transition-transform shadow-lg"
              title="View Live"
            >
              <FiExternalLink size={24} />
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform shadow-lg"
              title="View Code"
            >
              <FiGithub size={24} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow relative z-10">
        <h3 className={`text-2xl font-extrabold uppercase font-outfit mb-3 ${darkMode ? "text-cta" : "text-primary"}`}>{project.altText}</h3>

        <p className={`text-sm mb-6 flex-grow leading-relaxed font-outfit font-medium ${darkMode ? "text-slate-400" : "text-text-body/80"}`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100/10">
          {project.languages.map((language, index) => (
            <span
              key={index}
              className={`text-[0.7rem] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full ${darkMode ? "bg-slate-700 text-primary-300" : "bg-primary/10 text-primary"}`}
            >
              {language}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const visibleProjects = showAllProjects
    ? projectData
    : projectData.slice(0, 6);

  return (
    <section
      id="Projects"
      className="w-full py-24 px-4 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className={`absolute top-0 right-0 w-full h-full -z-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}></div>

      {/* Unique SVG Decorations */}
      <CodeIcon className={`absolute -top-10 -left-15 w-64 h-64 opacity-60 ${darkMode ? "text-primary" : "text-primary/40"} -rotate-12`} />

      <Sparkle className={`absolute bottom-20 right-1/3 w-10 h-10 opacity-[0.15] ${darkMode ? "text-cta" : "text-cta"} animate-pulse`} />

      <div className={`absolute bottom-10 left-10 w-72 h-72 -z-10 opacity-20 animate-wiggle ${darkMode ? "text-cta" : "text-cta"}`}>
        <CircleDoodle />
      </div>

      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto space-y-16 relative z-10">

        <div className="text-center space-y-4 mb-4 relative">
          <div className="relative inline-block">
            <span className={`font-yellowtail text-4xl md:text-5xl block transform -rotate-6 ${darkMode ? "text-cta" : "text-cta"} mb-2`}>My Work!</span>
            <h1 className={`text-6xl md:text-8xl font-extrabold font-outfit uppercase tracking-tight ${darkMode ? "text-white" : "text-primary"}`}>
              Projects
            </h1>

            {/* Clean Curved Lines Burst */}
            <BurstStar className={`absolute -top-4 -right-12 w-14 h-14 ${darkMode ? "text-cta" : "text-cta"} animate-pulse`} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-2">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} project={project} darkMode={darkMode} />
          ))}
        </div>

        <button
          className={`px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 shadow-xl
          ${darkMode
              ? "bg-primary hover:bg-primary/80 text-white"
              : "bg-primary hover:bg-primary/90 text-white"
            }`}
          onClick={() => setShowAllProjects(!showAllProjects)}
        >
          {showAllProjects ? "Show Less" : "See All Projects"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
