import React from "react";
import "./ServicesPage.css";
import { Link } from "react-router-dom";


const ServicesPage = () => {
  return (
    <div className="services-page">

      <div className="hero-section">
        <h1>Our Event & Sound Solutions</h1>

        <p>
          At Avija, we provide professional event management and high-quality
          sound system services to make every event memorable. From planning to
          execution, we ensure every detail is managed with care and excellence.
        </p>
      </div>

      <div className="services-container">

        <div className="service-card">
          <h2>🎉 Event Management</h2>

          <p>
            We organize events with creative planning and professional
            execution to ensure a smooth and successful experience.
          </p>

          <ul>
            <li>Corporate Events</li>
            <li>Birthday Celebrations</li>
            <li>Wedding Events</li>
            <li>College & Cultural Events</li>
            <li>Stage Decorations</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>🔊 Professional Sound System</h2>

          <p>
            We provide high-quality sound systems with expert setup for events
            of every size.
          </p>

          <ul>
            <li>DJ Sound System</li>
            <li>Stage Audio Setup</li>
            <li>Wireless Microphones</li>
            <li>Speakers & Amplifiers</li>
            <li>Technical Support</li>
          </ul>
        </div>

      </div>

      <div className="why-section">
        <h2>Why Choose Avija?</h2>

        <ul>
          <li>✅ Experienced Event Team</li>
          <li>✅ Premium Sound Equipment</li>
          <li>✅ Affordable Pricing</li>
          <li>✅ Professional Service</li>
          <li>✅ On-Time Setup & Support</li>
          <li>✅ Customer Satisfaction</li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Let's Make Your Event Memorable!</h2>

        <p>
          Whether it's a corporate event, wedding, birthday celebration, or
          cultural program, Avija is here to provide reliable event management
          and sound system solutions.
        </p>

        <Link to="/contact">
          <button className="contact-btn">
            Contact Us
          </button>
        </Link>
      </div>

    </div>
  );
};

export default ServicesPage;