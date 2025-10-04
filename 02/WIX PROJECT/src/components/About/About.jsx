// import React from 'react';
// import './About.css';

// const About = () => (
//   <section className="about-section">
//     <div className="about-text">
//       <h1 className="about-title">ABOUT</h1>
//       <div className="about-underline"></div>
//       <p className="about-desc">
//         I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
//       </p>
//     </div>
//     <div className="about-image-wrapper">
//       <img 
//         className="about-image"
//         src="https://static.wixstatic.com/media/c19c76_427a7bbf62474f74968cb087499c7a3e.jpg/v1/fill/w_1052,h_695,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c19c76_427a7bbf62474f74968cb087499c7a3e.jpg" 
//         alt="About Construction"
//       />
//     </div>
//   </section>
// );

// export default About;






import React from 'react';
import './About.css';

const stats = [
  { number: '2035', label: 'Year Established' },
  { number: '206', label: 'Projects Completed' },
  { number: '870', label: 'Contractors Appointed' },
  { number: '26', label: 'Awards Won' }
];

const About = () => (
  <>
    <section className="about-section">
      <div className="about-text">
        <h1 className="about-title">ABOUT</h1>
        <div className="about-underline"></div>
        <p className="about-desc">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you. This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
        </p>
      </div>
      <div className="about-image-wrapper">
        <img 
          className="about-image"
          src="https://static.wixstatic.com/media/c19c76_427a7bbf62474f74968cb087499c7a3e.jpg/v1/fill/w_1052,h_695,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c19c76_427a7bbf62474f74968cb087499c7a3e.jpg" 
          alt="About Construction"
        />
      </div>
    </section>
    
    <section className="about-stats-bar">
      {stats.map((stat, idx) => (
        <div className="about-stat" key={idx}>
          <div className="about-stat-number">{stat.number}</div>
          <div className="about-stat-label">{stat.label}</div>
          {idx < stats.length - 1 && <div className="about-stat-divider"></div>}
        </div>
      ))}
    </section>
  </>
);

export default About;
