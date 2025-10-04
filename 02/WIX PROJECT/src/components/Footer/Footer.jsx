import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Row */}
      <div className="footer-container">
        <div className="footer-section">
          <h3>Inquiries</h3>
          <p>
            For any inquiries, questions or commendations, please <br />
            call: <strong>123-456-7890</strong> or fill out the following form
          </p>
          <h4>Contact Us</h4>
        </div>

        <div className="footer-section">
          <h3>Head Office</h3>
          <p>500 Terry Francine Street</p>
          <p>San Francisco, CA 94158</p>
          <br />
          <p>info@mysite.com</p>
          <p>Tel: 123-456-7890</p>
          <p>Fax: 123-456-7890</p>
        </div>
      </div>

      {/* Contact Form + Employment */}
      <div className="footer-contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <label>First Name *</label>
            <input type="text" required />
            <label>Last Name *</label>
            <input type="text" required />
            <label>Email *</label>
            <input type="email" required />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="4"></textarea>
            <button className="btn" type="submit">Submit</button>
          </form>
        </div>

        <div className="employment-info">
          <h3>Employment</h3>
          <p>
            To apply for a job with Sphere Constructions, please send a cover
            letter together with your C.V. to: <br />
            <strong>info@mysite.com</strong>
          </p>

          <div className="quote">
            <div className="yellow-line"></div>
            <h3>
              Get a quote: <span>123-456-7890</span>
            </h3>
          </div>
        </div>
      </div>

      {/* Bottom Copyright + Social */}
      <div className="footer-bottom">
        <p>© 2035 by Sphere Constructions. Powered and secured by Wix</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



