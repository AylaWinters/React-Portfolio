import React from "react";
import "./App.css";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
    </div>
  );
}

export default App;
