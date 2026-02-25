import React, { useContext } from "react";
import {
  MdComputer,
  MdDns,
  MdSmartphone,
  MdCode,
  MdSchool,
  MdGroups,
} from "react-icons/md";
import { ThemeContext } from "../../context.jsx";
import { Sparkle, DotGrid, CurlyArrow, BurstStar, CircleDoodle } from "../Decorations/Decorations";
import { Grow, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
import myPhoto from "../../assets/media/myphoto.png";
import terrainBG from "../../assets/media/terrain.svg";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    { title: "Frontend Development", icon: <MdComputer />, color: "primary" },
    { title: "Backend Development", icon: <MdDns />, color: "cta" },
    { title: "App Development", icon: <MdSmartphone />, color: "primary" },
    { title: "Problem Solving", icon: <MdCode />, color: "cta" },
    { title: "Mentorship", icon: <MdSchool />, color: "primary" },
    { title: "Team Collaboration", icon: <MdGroups />, color: "cta" }
  ];

  const currentYear = new Date().getFullYear();
  const yearsOfGrowth = currentYear - 2023;
  const growthText = yearsOfGrowth < 10 ? `0${yearsOfGrowth}+` : `${yearsOfGrowth}+`;

  return (
    <div id="About" className="relative py-20 px-4 overflow-hidden" ref={ref}>
      {/* Background Layer */}
      <div className={`absolute inset-0 -z-20 ${darkMode ? 'bg-slate-900' : 'bg-[#FAFAFA]'}`}></div>

      {/* Abstract Design Elements */}
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] -z-10 opacity-[0.03] ${darkMode ? 'text-primary' : 'text-primary'} translate-x-1/4 -translate-y-1/4`}>
        <CircleDoodle />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <div className="flex flex-col items-center gap-12">

          {/* HEADER SECTION */}
          <div className="space-y-6">
            <div className="inline-flex flex-col items-center">
              <span className={`font-yellowtail text-4xl md:text-5xl block text-cta transform -rotate-6 mb-2`}>That's Me!</span>
              <div className="relative mt-2">
                <h2 className={`text-5xl md:text-7xl font-black font-outfit uppercase tracking-tight leading-[0.9] ${darkMode ? 'text-white' : 'text-primary'}`}>
                  I Love<br />
                  <span className="text-transparent" style={{ WebkitTextStroke: darkMode ? '2px rgba(255,255,255,0.6)' : '2px rgba(0,104,55,0.6)' }}>Building Things</span><br />
                  That Matter
                </h2>
                <Sparkle className="absolute -top-10 -right-10 w-12 h-12 text-cta/20 animate-spin-slow" />
              </div>
            </div>

            <p className={`max-w-3xl mx-auto text-lg md:text-xl font-outfit font-medium leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Currently, I work as a <span className="text-primary font-bold">Software Developer</span> at Onlighten Media, where I contribute to AI based SaaS products and end to end fullstack projects. Alongside my role, I actively build side projects and independent ventures, exploring new ideas and technologies. Passionate about solving problems, I enjoy creating innovative web and mobile applications while staying up to date with emerging technologies.
            </p>
          </div>

          {/* CONTENT SECTION */}
          <div className="w-full mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* TOP ROW: CORE SERVICES */}
              {services.slice(0, 3).map((s, i) => (
                <Grow key={i} in={inView} timeout={600 + (i * 100)}>
                  <div className={`group relative overflow-hidden p-4 rounded-[2.5rem] flex flex-col items-center justify-center text-center border-[1.25px] border-cta transition-all duration-300 min-h-[150px]
                    ${darkMode
                      ? 'bg-slate-800/20 hover:bg-slate-800/40'
                      : 'bg-white shadow-sm hover:shadow-lg'
                    }`}>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                        ${s.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-cta/10 text-cta'}`}>
                        {s.icon}
                      </div>
                      <h4 className={`text-lg font-black font-outfit uppercase tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {s.title}
                      </h4>
                    </div>
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.4] transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${terrainBG})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
                </Grow>
              ))}

              {/* CENTER: FEATURED QUOTE TILE */}
              <div className={`md:col-span-2 md:row-span-2 p-8 md:p-14 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden group border-[1.25px] border-primary transition-transform duration-700
                ${darkMode
                  ? 'bg-slate-800/20 hover:bg-slate-800/40'
                  : 'bg-white shadow-sm hover:shadow-lg'
                }`}>

                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-64 h-64 opacity-[0.08] text-primary rotate-12 pointer-events-none">
                  <BurstStar />
                </div>

                {/* Content */}
                <blockquote className="relative z-10">
                  <p className={`text-lg md:text-2xl lg:text-3xl italic font-outfit leading-[1.3] text-center tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    " I build scalable software solutions with a focus on performance, usability and maintainability. I enjoy turning complex ideas into reliable products and continuously improving systems to make them faster, simpler and more efficient."
                  </p>
                </blockquote>
              </div>

              {/* STAT TILE 1 */}
              <div className={`group relative overflow-hidden p-4 rounded-[2.5rem] flex flex-col justify-center items-center text-center border-[1.25px] border-cta transition-transform min-h-[150px]
                ${darkMode ? 'bg-slate-800/20 hover:bg-slate-800/40' : 'bg-white shadow-sm hover:shadow-lg'}`}>
                <h5 className="text-6xl font-black font-outfit text-primary tracking-tighter relative z-10">{growthText}</h5>
                <p className={`text-lg font-black font-outfit uppercase tracking-tight leading-tight mt-2 relative z-10 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Years of Growth</p>
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.4] transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${terrainBG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>

              {/* STAT TILE 2 */}
              <div className={`group relative overflow-hidden p-4 rounded-[2.5rem] flex flex-col justify-center items-center text-center border-[1.25px] border-cta transition-transform min-h-[150px]
                ${darkMode ? 'bg-slate-800/20 hover:bg-slate-800/40' : 'bg-white shadow-sm hover:shadow-lg'}`}>
                <h5 className="text-6xl font-black font-outfit text-cta tracking-tighter relative z-10">10k+</h5>
                <p className={`text-lg font-black font-outfit uppercase tracking-tight leading-tight mt-2 relative z-10 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Users Impacted</p>
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.4] transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${terrainBG})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </div>

              {/* BOTTOM ROW: SOFT SERVICES */}
              {services.slice(3).map((s, i) => (
                <Grow key={i} in={inView} timeout={1200 + (i * 100)}>
                  <div className={`group relative overflow-hidden p-4 rounded-[2.5rem] flex flex-col items-center justify-center text-center border-[1.25px] border-cta transition-all duration-300 min-h-[150px]
                    ${darkMode
                      ? 'bg-slate-800/20 hover:bg-slate-800/40'
                      : 'bg-white shadow-sm hover:shadow-lg'
                    }`}>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6
                        ${s.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-cta/10 text-cta'}`}>
                        {s.icon}
                      </div>
                      <h4 className={`text-lg font-black font-outfit uppercase tracking-tight leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {s.title}
                      </h4>
                    </div>
                    <div
                      className="absolute inset-0 pointer-events-none opacity-[0.4] transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${terrainBG})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  </div>
                </Grow>
              ))}

            </div>
          </div>

          <div className="pt-8">
            <BurstStar className="w-16 h-16 text-cta/20 animate-pulse mx-auto" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
