import React, { useState, useEffect, useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../../context.jsx";
import { LINKS } from "../../assets/constants/links.js";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [isMobile, setIsMobile] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? darkMode ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-800 shadow-lg" : "bg-white/70 backdrop-blur-md border-b border-white/60 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <ScrollLink
              to="Home"
              smooth={true}
              duration={600}
              className={`font-semibold text-3xl md:text-4xl cursor-pointer transition-colors duration-300 font-whisper normal-case ${darkMode ? "text-cta hover:text-white" : "text-primary hover:text-primary/80"
                }`}
            >
              Soham Banik
            </ScrollLink>
          </div>

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
                  className={`cursor-pointer px-3 py-2 text-xs font-bold uppercase tracking-widest transition-all relative group ${darkMode
                    ? "text-slate-300 hover:text-cta"
                    : "text-text-body hover:text-primary"
                    }`}
                >
                  <span className="relative z-10">{label}</span>
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-[.active-link]:w-full ${darkMode ? "bg-cta" : "bg-primary"}`}></span>
                </ScrollLink>
              ))}
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noreferrer"
                className={`ml-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 ${darkMode
                  ? "bg-cta text-slate-900 hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(247,148,29,0.4)]"
                  : "bg-cta text-white hover:bg-orange-600 hover:shadow-lg"
                  }`}
              >
                Resume
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={handleToggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-full transition-colors ${darkMode ? "text-slate-200 hover:bg-slate-800" : "text-text-heading hover:bg-background-soft"
                }`}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-screen backdrop-blur-xl transform transition-transform duration-500 ease-in-out z-40 flex flex-col items-center justify-center space-y-8 ${menuOpen ? "translate-x-0" : "translate-x-full"} ${darkMode ? "bg-slate-950/98" : "bg-white/98"}`}>
        <button onClick={handleToggleMenu} className={`absolute top-6 right-6 p-2 ${darkMode ? "text-white" : "text-primary"}`}>
          <FiX size={32} />
        </button>

        {navLinks.map(({ to, label }) => (
          <ScrollLink
            key={to}
            to={to}
            smooth={true}
            duration={600}
            spy={true}
            activeClass="active-link-mobile"
            onClick={handleToggleMenu}
            className={`text-3xl font-bold uppercase tracking-widest transition-all cursor-pointer ${darkMode
              ? "text-slate-400 hover:text-cta active-link-mobile:text-cta"
              : "text-text-body hover:text-primary active-link-mobile:text-primary"
              }`}
          >
            {label}
          </ScrollLink>
        ))}
        <a
          href={LINKS.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleToggleMenu}
          className={`px-10 py-4 rounded-full font-bold uppercase tracking-widest transition-all mt-4 ${darkMode
            ? "bg-cta text-slate-900 hover:bg-orange-400"
            : "bg-cta text-white hover:bg-orange-600 shadow-lg"
            }`}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
