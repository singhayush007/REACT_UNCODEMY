import React from 'react';
import './Project.css';

const images = [
  "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1681989486976-9ec9d2eac57a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uc3RydWN0aW9uJTIwdWt8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
];

const Project = () => (
  <section className="projects-section">
    <h1 className="projects-title">PROJECTS</h1>
    <div className="projects-underline"></div>
    <div className="projects-grid">
      {images.map((src, idx) => (
        <div className="project-image-wrapper" key={idx}>
          <img className="project-image" src={src} alt={`Project ${idx + 1}`} />
          <div className="project-hover">
            <span className="project-label">{`Project ${idx + 1}`}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Project;
