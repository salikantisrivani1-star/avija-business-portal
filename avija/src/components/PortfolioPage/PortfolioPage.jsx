import React from "react";
import "./PortfolioPage.css";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">

      <div className="portfolio-header">
        <h1>Our Recent Events</h1>

        <p>
          Every event is special, and we are proud to create unforgettable
          experiences for our clients.
        </p>
      </div>

      <div className="portfolio-container">

        <div className="event-card">
          <h2>🎉 Birthday Celebration</h2>
          <p>
            Complete birthday event planning with decoration,
            sound system and entertainment.
          </p>

          <Link to="/event-details" state={{ event: "Birthday Celebration" }}>
            <button className="details-btn">
              View Details
            </button>
          </Link>
        </div>

        <div className="event-card">
          <h2>💍 Wedding Reception</h2>
          <p>
            Elegant wedding stage setup with premium sound
            system and event coordination.
          </p>

          <Link to="/event-details" state={{ event: "Wedding Reception" }}>
            <button className="details-btn">
              View Details
            </button>
          </Link>
        </div>

        <div className="event-card">
          <h2>🏢 Corporate Event</h2>
          <p>
            Professional management for conferences,
            meetings and business events.
          </p>

          <Link to="/event-details" state={{ event: "Corporate Event" }}>
            <button className="details-btn">
              View Details
            </button>
          </Link>
        </div>

        <div className="event-card">
          <h2>🎓 College Fest</h2>
          <p>
            Complete event management with stage,
            lighting and sound setup.
          </p>

          <Link to="/event-details" state={{ event: "College Fest" }}>
            <button className="details-btn">
              View Details
            </button>
          </Link>
        </div>

        <div className="event-card">
          <h2>🎵 DJ Night</h2>
          <p>
            Powerful DJ sound system with lighting
            and entertainment support.
          </p>

          <Link to="/event-details" state={{ event: "DJ Night" }}>
            <button className="details-btn">
              View Details
            </button>
          </Link>
        </div>

        <div className="event-card">
          <h2>🎭 Cultural Program</h2>
          <p>
            Professional event planning for cultural
            programs and stage performances.
          </p>

          <Link to="/event-details" state={{ event: "Cultural Program" }}>
            <button className="details-btn">
              View Details
            </button>
          </Link>
        </div>

      </div>

      <div className="book-section">

        <h2>Planning Your Next Event?</h2>

        <p>
          Let Avija make your event memorable with our professional
          event management and sound system services.
        </p>

        <Link to="/contact">
          <button className="book-btn">
            Contact Us
          </button>
        </Link>

      </div>

    </div>
  );
};

export default PortfolioPage;