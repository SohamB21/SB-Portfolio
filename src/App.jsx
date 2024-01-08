import { useState, useContext } from "react";
import "./App.css";
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

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
        background: darkMode
          ? // ? "linear-gradient(to right, #182B3A, #20A4F3)"
            "linear-gradient(to right, #3b82f6, #222)"
          : "linear-gradient(to right, white, lightblue)",
      }}
    >
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
  );
}

export default App;
