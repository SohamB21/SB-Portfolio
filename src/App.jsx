import { useState, useContext } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ToggleMode from "./Components/ToggleMode/ToggleMode.jsx";
import { ThemeContext } from "./context.jsx";
import { NoiseOverlay } from "./Components/Decorations/Decorations.jsx";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? "bg-slate-900 text-white" : "bg-white text-text-body"}`}>
      <NoiseOverlay className="fixed inset-0 z-[9999] opacity-[0.03]" />
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Decorative shapes for the artistic theme */}
        {!darkMode && (
          <>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-background-soft -z-10" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)" }}></div>
            <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-cta rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
          </>
        )}
      </div>

      <div className="relative z-10">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
        <ToggleMode />
      </div>
    </div>
  );
}

export default App;
