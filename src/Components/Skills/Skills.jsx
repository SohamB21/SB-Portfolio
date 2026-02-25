import React, { useContext } from "react";
import { Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "../../context.jsx";
import { Sparkle, CurlyArrow } from "../Decorations/Decorations";

// Import all logos from skillicons github
// https://github.com/tandpfun/skill-icons?tab=readme-ov-file#readme
import javaLogo from "../../assets/skills/javaLogo.svg";
import cppLogo from "../../assets/skills/cppLogo.svg";
import cLogo from "../../assets/skills/cLogo.svg";
import pythonLogo from "../../assets/skills/pythonLogo.svg";
import reactjsLogo from "../../assets/skills/reactjsLogo.svg";
import htmlLogo from "../../assets/skills/htmlLogo.svg";
import cssLogo from "../../assets/skills/cssLogo.svg";
import javascriptLogo from "../../assets/skills/javascriptLogo.svg";
import tailwindcssLogo from "../../assets/skills/tailwindcssLogo.svg";
import bootstrapLogo from "../../assets/skills/bootstrapLogo.svg";
import materialuiLogo from "../../assets/skills/materialuiLogo.svg";
import phpLogo from "../../assets/skills/phpLogo.svg";
import codeigniterLogo from "../../assets/skills/codeigniterLogo.svg";
import nodejsLogo from "../../assets/skills/nodejsLogo.svg";
import expressjsLogo from "../../assets/skills/expressjsLogo.svg";
import mysqlLogo from "../../assets/skills/mysqlLogo.svg";
import mongodbLogo from "../../assets/skills/mongodbLogo.svg";
import firebaseLogo from "../../assets/skills/firebaseLogo.svg";
import androidstudioLogo from "../../assets/skills/androidstudioLogo.svg";
import reactnativeLogo from "../../assets/skills/reactnativeLogo.svg";
import gitLogo from "../../assets/skills/gitLogo.svg";
import githubLogo from "../../assets/skills/githubLogo.svg";
import typescriptLogo from "../../assets/skills/typescriptLogo.svg";
import figmaLogo from "../../assets/skills/figmaLogo.svg";
import laravelLogo from "../../assets/skills/laravelLogo.svg";
import latexLogo from "../../assets/skills/latexLogo.svg";
import jqueryLogo from "../../assets/skills/jqueryLogo.svg";
import awsLogo from "../../assets/skills/awsLogo.svg";
import flutterLogo from "../../assets/skills/flutterLogo.svg";
import supabaseLogo from "../../assets/skills/supabaseLogo.svg";
import vercelLogo from "../../assets/skills/vercelLogo.svg";

const technologies = [
  { name: "Java", logo: javaLogo, category: "Languages" },
  { name: "C", logo: cLogo, category: "Languages" },
  { name: "C++", logo: cppLogo, category: "Languages" },
  { name: "Python", logo: pythonLogo, category: "Languages" },
  { name: "HTML", logo: htmlLogo, category: "Frontend" },
  { name: "CSS", logo: cssLogo, category: "Frontend" },
  { name: "JavaScript", logo: javascriptLogo, category: "Frontend" },
  { name: "ReactJS", logo: reactjsLogo, category: "Frontend" },
  { name: "Tailwind CSS", logo: tailwindcssLogo, category: "Frontend" },
  { name: "Bootstrap", logo: bootstrapLogo, category: "Frontend" },
  { name: "Material UI", logo: materialuiLogo, category: "Frontend" },
  { name: "jQuery", logo: jqueryLogo, category: "Frontend" },
  { name: "PHP", logo: phpLogo, category: "Backend" },
  { name: "CodeIgniter", logo: codeigniterLogo, category: "Backend" },
  { name: "NodeJS", logo: nodejsLogo, category: "Backend" },
  { name: "ExpressJS", logo: expressjsLogo, category: "Backend" },
  { name: "MySQL", logo: mysqlLogo, category: "Database" },
  { name: "MongoDB", logo: mongodbLogo, category: "Database" },
  { name: "Supabase", logo: supabaseLogo, category: "Database" },
  { name: "Firebase", logo: firebaseLogo, category: "Database" },
  { name: "React Native", logo: reactnativeLogo, category: "App Development" },
  { name: "Flutter", logo: flutterLogo, category: "App Development" },
  { name: "Android Studio", logo: androidstudioLogo, category: "App Development" },
  { name: "AWS", logo: awsLogo, category: "Cloud & Tools" },
  { name: "Vercel", logo: vercelLogo, category: "Cloud & Tools" },
  { name: "Git", logo: gitLogo, category: "Cloud & Tools" },
  { name: "GitHub", logo: githubLogo, category: "Cloud & Tools" },
  { name: "TypeScript", logo: typescriptLogo, category: "Tech I'm Familiar With" },
  { name: "Figma", logo: figmaLogo, category: "Tech I'm Familiar With" },
  { name: "Laravel", logo: laravelLogo, category: "Tech I'm Familiar With" },
  { name: "Latex", logo: latexLogo, category: "Tech I'm Familiar With" },
];

const TechnologySection = ({ title, technologies }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="flex flex-col items-center justify-center py-2 w-full max-w-5xl mx-auto" ref={ref}>
      <h3 className={`text-2xl md:text-3xl font-extrabold uppercase font-outfit mb-6 relative inline-block px-4 ${darkMode ? "text-cta" : "text-primary"}`}>
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {technologies.map((tech, index) => (
          <Grow key={tech.name} in={inView} timeout={index * 250}>
            <div
              className={`group relative p-3 rounded-2xl flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24 transition-all duration-500
               ${darkMode
                  ? "bg-slate-800/40 hover:bg-slate-800/60"
                  : "bg-white/60 hover:bg-white/80 shadow-lg shadow-gray-200/50 hover:shadow-xl"
                } hover:-translate-y-2`}
            >
              {/* Corner Accents */}
              <div className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-2xl transition-all duration-300 group-hover:w-8 group-hover:h-8 border-primary/50`}></div>
              <div className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-2xl transition-all duration-300 group-hover:w-8 group-hover:h-8 border-primary/50`}></div>
              <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-2xl transition-all duration-300 group-hover:w-8 group-hover:h-8 border-primary/50`}></div>
              <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-2xl transition-all duration-300 group-hover:w-8 group-hover:h-8 border-primary/50`}></div>

              <img
                className="h-8 w-8 sm:h-12 sm:w-12 object-contain filter group-hover:scale-110 transition-all duration-500"
                src={tech.logo}
                alt={`${tech.name} logo`}
              />
              <span className={`mt-4 text-[0.6rem] uppercase tracking-wider font-extrabold opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-1 translate-y-1 group-hover:translate-y-0 ${darkMode ? "text-primary-300" : "text-primary"}`}>
                {tech.name}
              </span>
            </div>
          </Grow>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const groupedTechnologies = technologies.reduce((acc, tech) => {
    const lastCategory = acc[acc.length - 1];
    if (lastCategory && lastCategory.title === tech.category) {
      lastCategory.skills.push(tech);
    } else {
      acc.push({ title: tech.category, skills: [tech] });
    }
    return acc;
  }, []);

  return (
    <div
      id="Skills"
      className="relative py-32 px-4 overflow-hidden"
    >
      {/* Background decoration */}
      <div className={`absolute top-0 left-0 w-full h-full -z-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}></div>

      {/* Grid Pattern */}
      <div
        className={`absolute inset-0 -z-10 opacity-[0.03] ${darkMode ? 'invert opacity-[0.05]' : ''}`}
        style={{
          backgroundImage: `linear-gradient(#006837 1px, transparent 1px), linear-gradient(90deg, #006837 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Background Ornaments */}
      <div className={`absolute -top-24 -right-24 w-96 h-96 opacity-[0.03] ${darkMode ? "text-primary" : "text-primary"} rotate-45`}>
        <div className="w-full h-full border-[40px] border-current rounded-full"></div>
      </div>



      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-4 mb-24 relative">
          <div className="inline-block relative">
            <span className={`font-yellowtail text-4xl md:text-5xl block transform -rotate-6 ${darkMode ? "text-cta" : "text-cta"} mb-2`}>Expertise!</span>
            <h1 className={`text-5xl md:text-7xl font-extrabold font-outfit uppercase tracking-tight ${darkMode ? "text-white" : "text-primary"}`}>My Skills</h1>

            {/* Sparkle Accent */}
            <Sparkle className={`absolute -top-6 -right-12 w-10 h-10 ${darkMode ? "text-white" : "text-primary"} animate-spin-slow`} />
          </div>

          {/* Curly Arrow */}
          <div className={`absolute top-12 right-[25%] hidden lg:block w-24 h-24 transform rotate-25 ${darkMode ? "text-primary" : "text-primary"}`}>
            <CurlyArrow />
          </div>
        </div>

        <div className="space-y-16">
          {groupedTechnologies.map((group, index) => (
            <TechnologySection
              key={index}
              title={group.title}
              technologies={group.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
