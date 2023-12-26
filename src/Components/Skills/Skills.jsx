import React from "react";
import { Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";

// Import all logos
import javaLogo from "../../assets/images/logos/javaLogo.svg";
import cppLogo from "../../assets/images/logos/cppLogo.svg";
import cLogo from "../../assets/images/logos/cLogo.svg";
import pythonLogo from "../../assets/images/logos/pythonLogo.svg";
import reactjsLogo from "../../assets/images/logos/reactjsLogo.svg";
import tailwindcssLogo from "../../assets/images/logos/tailwindcssLogo.svg";
import htmlLogo from "../../assets/images/logos/htmlLogo.svg";
import cssLogo from "../../assets/images/logos/cssLogo.svg";
import bootstrapLogo from "../../assets/images/logos/bootstrapLogo.svg";
import javascriptLogo from "../../assets/images/logos/javascriptLogo.svg";
import phpLogo from "../../assets/images/logos/phpLogo.svg";
import mysqlLogo from "../../assets/images/logos/mysqlLogo.svg";
import androidstudioLogo from "../../assets/images/logos/androidstudioLogo.svg";
import reactnativeLogo from "../../assets/images/logos/reactnativeLogo.svg";
import gitLogo from "../../assets/images/logos/gitLogo.svg";
import githubLogo from "../../assets/images/logos/githubLogo.svg";
import nodejsLogo from "../../assets/images/logos/nodejsLogo.svg";
import expressjsLogo from "../../assets/images/logos/expressjsLogo.svg";
import laravelLogo from "../../assets/images/logos/laravelLogo.svg";
import typescriptLogo from "../../assets/images/logos/typescriptLogo.svg";
import latexLogo from "../../assets/images/logos/latexLogo.svg";

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
    className="s h-full w-full flex-1 items-center justify-center py-40"
    style={{ background: "linear-gradient(to right, white, lightblue)" }}
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
