import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Preconstruction Planning",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    image:
      "https://static.wixstatic.com/media/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg/v1/fill/w_300,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c19c76_22d8ec47d1484b09a9c333e4141a12a0.jpg",
  },
  {
    title: "Architectural Modelling",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    image:
      "https://static.wixstatic.com/media/b31d0e84cb714761b2b1f06c305023c7.jpg/v1/fill/w_300,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b31d0e84cb714761b2b1f06c305023c7.jpg",
  },
  {
    title: "Construction Management",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
    image:
      "https://static.wixstatic.com/media/9e456adff0ee4a2c847cfd67a62454a3.jpg/v1/fill/w_300,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9e456adff0ee4a2c847cfd67a62454a3.jpg",
  },
];
const Services = () => {
  return (
    <div className="services-section">
      <h1 className="services-title">SERVICES</h1>
      <div className="services-underline"></div>
      <div className="services-cards">
        {servicesData.map((service, idx) => (
          <div className="service-card" key={idx}>
            <img
              src={service.image}
              alt={service.title}
              className="service-img"
            />
            <h2 className="service-heading">{service.title}</h2>
            <p className="service-desc">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
