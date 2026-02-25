import React, { useContext, useState, useEffect } from "react";
import heroImage from "../../assets/media/profile.png";
import { ThemeContext } from "../../context.jsx";
import { LINKS } from "../../assets/constants/links.js";
import { Sparkle, TealBlob, DotGrid } from "../Decorations/Decorations";
import terrainBG from "../../assets/media/terrain.svg";
import githubIcon from "../../assets/logos/github.png";
import linkedinIcon from "../../assets/logos/linkedin.png";
import gmailIcon from "../../assets/logos/gmail.png";
import twitterIcon from "../../assets/logos/twitter.png";
import { FiMail, FiArrowRight } from "react-icons/fi";

const TextRotator = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = texts[index];

    const handleType = () => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));
        if (text.length === fullText.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else {
          timeout = setTimeout(handleType, 120);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
          timeout = setTimeout(handleType, 500);
        } else {
          timeout = setTimeout(handleType, 60);
        }
      }
    };

    timeout = setTimeout(handleType, isDeleting ? 60 : 120);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts]);

  return (
    <span className="relative inline-flex items-center">
      {/* Ghost text for layout stability - Locked to longest text to prevent any jumping */}
      <span className="opacity-0 pointer-events-none select-none font-yellowtail">
        {texts.reduce((a, b) => a.length > b.length ? a : b)}
      </span>

      {/* Actual Handwritten Text */}
      <span className="absolute left-0 top-0 whitespace-nowrap font-yellowtail leading-none">
        {text}
        <span className="inline-block w-[2px] h-[0.8em] bg-cta ml-1 align-middle animate-pulse"></span>
      </span>
    </span>
  );
};


const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="Home"
      className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 sm:pb-20 px-4 sm:px-8 lg:px-16"
    >
      {/* Background & Textures (Fresco Style) */}
      <div className={`absolute top-0 left-0 w-full h-full -z-20 ${darkMode ? 'bg-slate-900' : 'bg-[#FAFAFA]'}`}></div>

      {/* Subtle Topographic Overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `url(${terrainBG})`,
          backgroundSize: '800px',
          backgroundPosition: 'center',
        }}
      />

      <div className="container mx-auto w-full max-w-7xl relative z-10 flex flex-col gap-16 lg:gap-24">

        {/* PART 1: TOP CONTENT (TEXT & IMAGE) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Typography */}
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start h-full justify-center">
            <div className="relative">
              <h2 className={`text-4xl md:text-5xl font-yellowtail transform -rotate-6 normal-case ${darkMode ? "text-cta" : "text-cta"}`}>
                Hey There! I'm,
              </h2>
            </div>

            <div className="space-y-4">
              <h1 className={`text-6xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-9xl font-outfit font-black tracking-tight leading-[0.85] uppercase ${darkMode ? "text-white" : "text-primary"}`}>
                Soham<br />Banik
              </h1>

              {/* Role / Typewriter */}
              <div className={`text-2xl md:text-4xl font-yellowtail relative inline-block ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
                <TextRotator texts={["Software Developer", "Web Developer", "Android Developer", "Freelancer"]} />
              </div>
            </div>

            <p className={`text-lg md:text-2xl leading-relaxed max-w-lg mx-auto lg:mx-0 ${darkMode ? "text-slate-400" : "text-text-body"} font-outfit`}>
              Building seamless digital experiences with clean code and modern design.
            </p>
          </div>

          {/* Right Column: Hero Image */}
          <div className="relative flex justify-center items-center h-full w-full">
            {/* Background Blob for Image */}
            <div className="absolute w-[160%] h-[160%] sm:w-[150%] sm:h-[150%] z-[-1] animate-pulse-slow text-primary opacity-20 rotate-12">
              <TealBlob className="w-full h-full" />
            </div>

            <div className="relative z-10">
              <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 scale-90 ${darkMode ? "bg-primary" : "bg-primary"}`}></div>
              <img
                src={heroImage}
                alt="Soham Banik"
                className={`relative w-48 h-48 sm:w-56 sm:h-56 md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] xl:w-[380px] xl:h-[380px] object-cover rounded-full border-[6px] md:border-8 shadow-2xl transition-transform duration-500 hover:scale-[1.02] ${darkMode ? "border-slate-800" : "border-white"}`}
              />
            </div>
          </div>
        </div>

        {/* PART 2: ACTIONS & SOCIALS */}
        <div className="flex flex-col lg:flex-row items-center justify-around gap-10">
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center">
            <a
              href={`mailto:${LINKS.email}`}
              className={`group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold font-outfit tracking-wider transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1
              ${darkMode ? "bg-cta text-white" : "bg-cta text-white"}`}
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span>Let's Talk</span>
              <FiMail size={18} />
            </a>

            <a
              href={LINKS.resume}
              target="_blank"
              rel="noreferrer"
              className={`group relative inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-bold font-outfit tracking-wider transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1
              ${darkMode ? "bg-primary text-white" : "bg-primary text-white"}`}
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span>View Resume</span>
              <FiArrowRight size={18} />
            </a>
          </div>

          {/* Social Links Icons */}
          <div className="flex items-center gap-6 sm:gap-8 justify-center">
            {[
              { href: LINKS.github, icon: githubIcon, alt: "GitHub" },
              { href: LINKS.linkedin, icon: linkedinIcon, alt: "LinkedIn" },
              { href: LINKS.twitter, icon: twitterIcon, alt: "Twitter" },
              { href: `mailto:${LINKS.email}`, icon: gmailIcon, alt: "Email" },
            ].map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-2 hover:scale-110 shadow-lg ${darkMode ? "bg-slate-800 border border-slate-700" : "bg-white border border-primary/10"
                  }`}
              >
                <img src={link.icon} alt={link.alt} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
