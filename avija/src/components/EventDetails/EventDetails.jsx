import React from "react";
import "./EventDetails.css";
import { Link , useLocation} from "react-router-dom";

const EventDetails = () => {
  const location = useLocation();
  const event = location.state?.event || "Birthday Celebration"; // Default event if none is provided
const eventData = {
  "Birthday Celebration": {
    title: "🎉 Birthday Celebration",
    description:
      "We organize memorable birthday celebrations with professional event planning, decoration, and premium sound systems.",
    services: [
      "Event Planning",
      "Stage Decoration",
      "Professional Sound System",
      "DJ & Entertainment",
      "Lighting Setup"
    ]
  },

  "Wedding Reception": {
    title: "💍 Wedding Reception",
    description:
      "Elegant wedding planning with beautiful stage decoration and high-quality sound systems.",
    services: [
      "Wedding Stage Setup",
      "Sound System",
      "Lighting",
      "Reception Management",
      "Live Audio Support"
    ]
  },

  "Corporate Event": {
    title: "🏢 Corporate Event",
    description:
      "Professional event management for meetings, conferences, seminars, and business events.",
    services: [
      "Conference Setup",
      "Professional Audio",
      "Projector & Stage",
      "Event Coordination",
      "Technical Support"
    ]
  },

  "College Fest": {
    title: "🎓 College Fest",
    description:
      "Complete event planning for college festivals with professional sound and lighting.",
    services: [
      "DJ Setup",
      "Sound System",
      "Stage Setup",
      "Lighting",
      "Event Management"
    ]
  },

  "DJ Night": {
    title: "🎵 DJ Night",
    description:
      "High-energy DJ nights with premium sound systems and lighting effects.",
    services: [
      "DJ Console",
      "Professional Speakers",
      "Lighting Effects",
      "Dance Floor Audio",
      "Technical Support"
    ]
  },

  "Cultural Program": {
    title: "🎭 Cultural Program",
    description:
      "Professional management for cultural events, stage performances, and annual celebrations.",
    services: [
      "Stage Setup",
      "Microphones",
      "Sound System",
      "Lighting",
      "Event Coordination"
    ]
  }
};

const selectedEvent = eventData[event];
  return (
    <div className="event-details">

      <div className="event-header">
        <h1>{selectedEvent.title}</h1>

        <p>
          {selectedEvent.description}
        </p>
      </div>

      <div className="details-box">

        <h2>Services Included</h2>

        <ul>
  {selectedEvent.services.map((service, index) => (
    <li key={index}>✔ {service}</li>
  ))}
</ul>

      </div>

      <div className="why-avija">

        <h2>Why Choose Avija?</h2>

        <div className="features">

          <div className="feature-card">
            <h3>🎯 Professional Team</h3>
            <p>Experienced event coordinators ensuring every detail is managed perfectly.</p>
          </div>

          <div className="feature-card">
            <h3>🔊 Premium Sound</h3>
            <p>High-quality sound systems suitable for events of every size.</p>
          </div>

          <div className="feature-card">
            <h3>⏰ On-Time Service</h3>
            <p>Timely setup and execution for a smooth event experience.</p>
          </div>

        </div>

      </div>

      <div className="book-event">

        <h2>Ready to Celebrate?</h2>

        <p>
          Contact Avija today and let us make your special occasion unforgettable.
        </p>

        <Link to="/contact">
          <button className="book-btn">
            Book This Event
          </button>
        </Link>

      </div>

    </div>
  );
};

export default EventDetails;