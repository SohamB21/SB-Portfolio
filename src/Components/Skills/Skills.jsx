import React from "react";
import { Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";

// Import all logos
import javaLogo from "../../assets/skills/javaLogo.svg";
import cppLogo from "../../assets/skills/cppLogo.svg";
import cLogo from "../../assets/skills/cLogo.svg";
import pythonLogo from "../../assets/skills/pythonLogo.svg";
import reactjsLogo from "../../assets/skills/reactjsLogo.svg";
import tailwindcssLogo from "../../assets/skills/tailwindcssLogo.svg";
import htmlLogo from "../../assets/skills/htmlLogo.svg";
import cssLogo from "../../assets/skills/cssLogo.svg";
import bootstrapLogo from "../../assets/skills/bootstrapLogo.svg";
import javascriptLogo from "../../assets/skills/javascriptLogo.svg";
import phpLogo from "../../assets/skills/phpLogo.svg";
import mysqlLogo from "../../assets/skills/mysqlLogo.svg";
import androidstudioLogo from "../../assets/skills/androidstudioLogo.svg";
import reactnativeLogo from "../../assets/skills/reactnativeLogo.svg";
import gitLogo from "../../assets/skills/gitLogo.svg";
import githubLogo from "../../assets/skills/githubLogo.svg";
import nodejsLogo from "../../assets/skills/nodejsLogo.svg";
import expressjsLogo from "../../assets/skills/expressjsLogo.svg";
import laravelLogo from "../../assets/skills/laravelLogo.svg";
import typescriptLogo from "../../assets/skills/typescriptLogo.svg";
import latexLogo from "../../assets/skills/latexLogo.svg";

const technologies = [
  { name: "Java", logo: javaLogo },
  { name: "C++", logo: cppLogo },
  { name: "C", logo: cLogo },
  { name: "Python", logo: pythonLogo },
  { name: "ReactJS", logo: reactjsLogo },
  { name: "Tailwind CSS", logo: tailwindcssLogo },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "PHP", logo: phpLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "NodeJS", logo: nodejsLogo },
  { name: "ExpressJS", logo: expressjsLogo },
  { name: "Android Studio", logo: androidstudioLogo },
  { name: "React Native", logo: reactnativeLogo },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "TypeScript", logo: typescriptLogo },
  { name: "Laravel", logo: laravelLogo },
  { name: "Latex", logo: latexLogo },
];

// Reusable TechnologySection component
const TechnologySection = ({ title, technologies }) => {
  const [ref, inView] = useInView();

  return (
    <div
      className="h-full flex flex-col items-center justify-center py-2"
      ref={ref}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="w-full items-center flex flex-row flex-wrap justify-center p-3">
        {technologies.map((tech, index) => (
          <Grow key={tech.name} in={inView} timeout={index * 500}>
            <div className="relative group">
              <img
                className="h-16 m-1 shadow-lg rounded-xl transition-transform transform group-hover:scale-110"
                src={tech.logo}
                alt={`${tech.name} logo`}
              />
              <div className="tooltip absolute bg-gray-600 text-white text-xs py-1 px-2 rounded-md bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </div>
            </div>
          </Grow>
        ))}
      </div>
    </div>
  );
};

const Skills = () => (
  <div
    id="Skills"
    className="s h-full w-full flex-1 items-center justify-center pt-24 pb-28"
  >
    <div className="h-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-10">My Skills</h1>
      <TechnologySection
        title="Programming Languages"
        technologies={technologies.slice(0, 4)}
      />
      <TechnologySection
        title="Frontend Technologies"
        technologies={technologies.slice(4, 10)}
      />
      <TechnologySection
        title="Backend Technologies"
        technologies={technologies.slice(10, 14)}
      />
      <TechnologySection
        title="Mobile App Development"
        technologies={technologies.slice(14, 16)}
      />
      <TechnologySection
        title="Version Control Tools"
        technologies={technologies.slice(16, 18)}
      />
      <TechnologySection
        title="Technologies I'm Familiar With"
        technologies={technologies.slice(18)}
      />
    </div>
  </div>
);

export default Skills;
