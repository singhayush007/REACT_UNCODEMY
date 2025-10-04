// import React from "react";
// import "./Contact.css";

// const Contact = () => {
//   return (
//     <section className="contact-section">
//       <h2 className="contact-title">CONTACT</h2>
//       <div className="contact-underline"></div>

//       <div className="contact-map">
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2321756405806!2d-122.41941538468139!3d37.77492927975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dfb6b1d7%3A0x63f6b1a67c85d0d2!2sCivic%20Center!5e0!3m2!1sen!2sus!4v1635447189695!5m2!1sen!2sus"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [mapType, setMapType] = useState("map"); // default map

  // same map for both (future me satellite embed link de doge toh yaha replace karna)
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2321756405806!2d-122.41941538468139!3d37.77492927975907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dfb6b1d7%3A0x63f6b1a67c85d0d2!2sCivic%20Center!5e0!3m2!1sen!2sus!4v1635447189695!5m2!1sen!2sus";

  return (
    <section className="contact-section">
      <h2 className="contact-title">CONTACT</h2>
      <div className="contact-underline"></div>

      <div className="map-container">
        {/* Button Group */}
        <div className="map-buttons">
          <button
            className={mapType === "map" ? "active" : ""}
            onClick={() => setMapType("map")}
          >
            Map
          </button>
          <button
            className={mapType === "satellite" ? "active" : ""}
            onClick={() => setMapType("satellite")}
          >
            Satellite
          </button>
        </div>

        {/* Map Iframe */}
        <iframe
          title="Google Map"
          src={mapUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
