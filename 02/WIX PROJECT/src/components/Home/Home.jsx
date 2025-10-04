import React from "react";
import "./Home.css";

const Home = () => {
  const scrollToServices = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="home">
      <div className="overlay">
        <h1>LEADERS IN QUALITY</h1>
        <h1>CONSTRUCTION AND</h1>
        <h1>INFRASTRUCTURE</h1>
        <div className="down-arrow" onClick={scrollToServices}>
          ⌄
        </div>
      </div>
    </section>
  );
};

export default Home;
