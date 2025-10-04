import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("HOME");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.toUpperCase());
          }
        });
      },
      { threshold: 0.6 } 
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setActiveSection(id.toUpperCase());
  };

  return (
    <nav className="navbar_logo">
      <div className="left_side_navbar">
        <span>SPHERE</span>
        <br />
        <span>CONSTRUCTION</span>
      </div>
      <nav className="right_side_navbar">
        <ul className="navbar_links">
          <li
            className={activeSection === "HOME" ? "active" : ""}
            onClick={() => handleClick("home")}
          >
            HOME
          </li>
          <li
            className={activeSection === "SERVICES" ? "active" : ""}
            onClick={() => handleClick("services")}
          >
            SERVICES
          </li>
          <li
            className={activeSection === "ABOUT" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            ABOUT
          </li>
          <li
            className={activeSection === "PROJECTS" ? "active" : ""}
            onClick={() => handleClick("projects")}
          >
            PROJECTS
          </li>
          <li
            className={activeSection === "CONTACT" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            CONTACT
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
