import React from "react";
import "./ContactPage.css";
import Contact from "../Contact/Contact";

const ContactPage = () => {
  return (
    <div className="contact-page">

      <div className="contact-header">

        <h1>Contact Avija</h1>

        <p>
          We are here to help make your event memorable.
          Get in touch with us for bookings and enquiries.
        </p>

      </div>

      <Contact />

    </div>
  );
};

export default ContactPage;