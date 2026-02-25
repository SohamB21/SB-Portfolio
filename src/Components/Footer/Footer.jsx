import React, { useContext } from "react";
import { MdCopyright } from "react-icons/md";
import github from "../../assets/logos/github.png";
import linkedin from "../../assets/logos/linkedin.png";
import gmail from "../../assets/logos/gmail.png";
import twitter from "../../assets/logos/twitter.png";
import { ThemeContext } from "../../context.jsx";
import { LINKS } from "../../assets/constants/links.js";
import { Sparkle, CodeIcon, TerminalIcon } from "../Decorations/Decorations";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const socialLinks = [
    { href: LINKS.github, icon: github, alt: "GitHub" },
    { href: LINKS.linkedin, icon: linkedin, alt: "LinkedIn" },
    { href: `mailto:${LINKS.email}`, icon: gmail, alt: "Gmail" },
    { href: LINKS.twitter, icon: twitter, alt: "Twitter" },
  ];

  return (
    <footer className="w-full pt-12 pb-12 px-4 overflow-hidden relative z-10">
      {/* Background & Textures */}
      <div className={`absolute top-0 left-0 w-full h-full -z-20 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}></div>

      {/* Tech-Themed Background SVGs */}
      <CodeIcon className={`absolute top-[-5%] right-0 w-20 h-20 text-primary opacity-90 -z-10 rotate-12`} />
      <TerminalIcon className={`absolute bottom-10 left-0 w-20 h-20 text-cta opacity-90 -z-10 -rotate-12`} />

      <div className={`max-w-6xl mx-auto rounded-3xl p-8 md:p-12 mb-8 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden ${darkMode
        ? "bg-slate-800 border border-slate-700 backdrop-blur-md hover:border-slate-600 transition-colors"
        : "bg-primary text-white shadow-2xl shadow-primary/20"
        }`}>

        {/* Internal Card Sparkle */}
        <Sparkle className={`absolute top-6 left-6 w-8 h-8 opacity-20 animate-pulse ${darkMode ? "text-cta" : "text-white"}`} />

        <div className="flex flex-col gap-4 text-center md:text-left relative z-10">
          <h1 className="text-4xl md:text-6xl font-whisper font-semibold text-white normal-case">
            Soham Banik
          </h1>
          <p className={`${darkMode ? "text-slate-300" : "text-white/90"} text-lg md:text-xl font-outfit tracking-tight max-w-2xl leading-tight`}>
            Software Developer, Tech Enthusiast and Lifelong Learner
          </p>
        </div>

        <div className="flex gap-4 relative z-10">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-6 shadow-xl bg-white border border-primary/10`}>
                <img src={link.icon} alt={link.alt} className="w-10 h-10 rounded-full object-contain" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="w-full text-center">
        <p className={`text-sm flex flex-col sm:flex-row items-center justify-center gap-1 ${darkMode ? "text-slate-500" : "text-gray-500"}`}>
          <span className="flex items-center gap-1">
            Copyright <MdCopyright /> {new Date().getFullYear()} Soham Banik.
          </span>
          <span>All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
