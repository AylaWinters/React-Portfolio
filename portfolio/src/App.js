import React from "react";
import "./App.css";
import Hero from "./components/hero/hero";
import About from "./components/about/about.js";
import Projects from "./components/projects/projects";
import Design from "./components/design/design";
import Photography from "./components/photography/photography";
import ThirdText from "./components/thirdtext/thirdtext";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Design />
      <Photography />
      <ThirdText />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
