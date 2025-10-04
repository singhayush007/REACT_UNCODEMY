import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";   
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Clients from "./components/Clients/Clients";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <div id="home">
        <Home />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Project />
      </div>

      <Clients />

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default App;
