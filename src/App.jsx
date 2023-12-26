import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
