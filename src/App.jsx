import { useState } from "react";
import "./App.css";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
