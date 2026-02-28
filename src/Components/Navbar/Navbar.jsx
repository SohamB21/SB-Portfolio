import React, { useState, useEffect, useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { ThemeContext } from "../../context.jsx";
import { LINKS } from "../../assets/constants/links.js";
import githubIcon from "../../assets/logos/github.png";
import linkedinIcon from "../../assets/logos/linkedin.png";
import twitterIcon from "../../assets/logos/twitter.png";
import gmailIcon from "../../assets/logos/gmail.png";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { to: "Home", label: "Home" },
    { to: "About", label: "About" },
    { to: "Skills", label: "Skills" },
    { to: "Projects", label: "Projects" },
    { to: "Experience", label: "Experience" },
    { to: "Gallery", label: "Gallery" },
    { to: "Contact", label: "Contact" },
  ];

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${scrolled
        ? darkMode ? "bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 shadow-2xl" : "bg-white/80 backdrop-blur-xl border-b border-white/60 shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-0">
        <div className="flex items-center justify-between h-16 md:h-16 transition-all duration-500">
          <div className="flex-shrink-0 relative z-[110]">
            <ScrollLink
              to="Home"
              smooth={true}
              duration={600}
              className={`font-semibold text-3xl md:text-4xl cursor-pointer transition-all duration-500 font-whisper normal-case tracking-tight ${darkMode ? "text-cta hover:text-white" : "text-primary hover:text-primary/80"
                }`}
            >
              Soham Banik
            </ScrollLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map(({ to, label }) => (
                <ScrollLink
                  key={to}
                  to={to}
                  smooth={true}
                  duration={600}
                  spy={true}
                  activeClass="active-link"
                  className={`cursor-pointer px-1 py-1 text-[11px] font-black uppercase tracking-[0.2em] transition-all relative group ${darkMode
                    ? "text-slate-400 hover:text-cta"
                    : "text-slate-600 hover:text-primary"
                    }`}
                >
                  <span className="relative z-10">{label}</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-[.active-link]:w-full ${darkMode ? "bg-cta" : "bg-primary"}`}></span>
                </ScrollLink>
              ))}
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer"
                className={`ml-6 px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.15em] transition-all transform hover:-translate-y-1 hover:shadow-2xl active:scale-95 ${darkMode
                  ? "bg-cta text-slate-900 border-2 border-cta hover:bg-transparent hover:text-cta"
                  : "bg-primary text-white border-2 border-primary hover:bg-transparent hover:text-primary"
                  }`}
              >
                Resume
              </a>
            </div>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden relative z-[110]">
            <button
              onClick={handleToggleMenu}
              className={`flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${darkMode ? "text-slate-200 hover:bg-slate-800" : "text-primary hover:bg-slate-100"
                }`}
            >
              <div className="w-6 flex flex-col items-end space-y-1.5 transition-all duration-300 group">
                <span className={`h-0.5 rounded-full transition-all duration-500 ${darkMode ? "bg-white" : "bg-primary"} ${menuOpen ? "w-6 rotate-45 translate-y-2 translate-x-0" : "w-6"}`}></span>
                <span className={`h-0.5 rounded-full transition-all duration-500 ${darkMode ? "bg-white" : "bg-primary"} ${menuOpen ? "opacity-0 w-0" : "w-4 group-hover:w-6"}`}></span>
                <span className={`h-0.5 rounded-full transition-all duration-500 ${darkMode ? "bg-white" : "bg-primary"} ${menuOpen ? "w-6 -rotate-45 -translate-y-2 translate-x-0" : "w-6"}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 h-screen transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] z-[100] ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Animated Background Layers */}
        <div className={`absolute inset-0 transition-transform duration-700 delay-75 ease-[cubic-bezier(0.85,0,0.15,1)] ${menuOpen ? "translate-y-0" : "-translate-y-full"} ${darkMode ? "bg-slate-900" : "bg-white"}`}></div>
        <div className={`absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] ${menuOpen ? "translate-x-0" : "translate-x-full"} ${darkMode ? "bg-slate-950" : "bg-slate-50"}`}></div>

        {/* Decorative Blob */}
        <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-[100px] opacity-20 transition-all duration-1000 ${menuOpen ? "scale-100 rotate-45" : "scale-0"} ${darkMode ? "bg-cta" : "bg-primary"}`}></div>

        <div className="relative h-full flex flex-col justify-between px-10 pt-32 pb-24 overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-5">
            {navLinks.map(({ to, label }, index) => (
              <ScrollLink
                key={to}
                to={to}
                smooth={true}
                duration={800}
                spy={true}
                activeClass="active-link-mobile"
                onClick={handleToggleMenu}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
                className={`group flex items-baseline space-x-4 transition-all duration-500 transform ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <span className={`text-[10px] font-black tracking-tighter transition-colors duration-300 ${darkMode ? "text-slate-700" : "text-slate-300"}`}>
                  0{index + 1}
                </span>
                <span className={`text-xl font-black uppercase tracking-tight transition-all duration-300 font-outfit ${darkMode
                  ? "text-slate-200 hover:text-cta"
                  : "text-slate-900 hover:text-primary"
                  }`}>
                  {label}
                </span>
              </ScrollLink>
            ))}
          </div>

          {/* Socials & Footer Area */}
          <div className={`flex flex-col space-y-8 transition-all duration-1000 delay-500 transform pt-5 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="flex items-center gap-5">
              {[
                { name: "LinkedIn", icon: linkedinIcon, url: LINKS.linkedin },
                { name: "GitHub", icon: githubIcon, url: LINKS.github },
                { name: "Twitter", icon: twitterIcon, url: LINKS.twitter },
                { name: "Email", icon: gmailIcon, url: `mailto:${LINKS.email}` }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg ${darkMode ? "bg-slate-800 border border-slate-700" : "bg-white border border-primary/10"}`}
                >
                  <img src={social.icon} alt={social.name} className="w-8 h-8 rounded-full object-contain" />
                </a>
              ))}
            </div>

            <a
              href={LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleToggleMenu}
              className={`group relative inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full font-bold font-outfit tracking-wider transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 text-white bg-primary w-full sm:w-auto`}
            >
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <span className="relative font-black uppercase tracking-[0.2em] text-[11px]">View Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
