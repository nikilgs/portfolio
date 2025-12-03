import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="portfolio">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;